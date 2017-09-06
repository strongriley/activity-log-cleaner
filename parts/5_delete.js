var handleEditClicks = function() {
  console.log('start handleEditClicks');
  if (!start) { return; }
  setTimeout(handleEditClicks, HandlerDelayMs);
  if (deleteClick !== null || confirmClick !== null) {
    return;
  }
  var $elem =  editClicks.shift(); // urgh probably expensive
  if (!$elem) {
    return;
  }
  console.log($elem);
  $elem.find('a[data-tooltip-content="Edit"]')[0].click(); // gotta be native
  deleteClick = $elem;
};

var handleDeleteClicks = function() {
  console.log('start handleDeleteClicks');
  if (!start) { return; }
  setTimeout(handleDeleteClicks, HandlerDelayMs);
  if (!start || deleteClick === null) {
    return;
  }
  var domOwnerId = deleteClick.find('a[data-tooltip-content="Edit"]').attr('id');
  $menu = $('div[data-ownerid="'+domOwnerId+'"]');
  if ($menu.size() === 0) {
    return; // hasn't loaded yet
  }
  $anchor = $menu.find('a[ajaxify*="delete"]');
  if ($anchor.size() === 0) {
    return; // maybe hover menu?
  }
  $anchor[0].click();
  confirmClick = deleteClick;
  deleteClick = null;
  debugger;
};

var handleConfirmClicks = function() {
  if (!start) { return; }
  setTimeout(handleConfirmClicks, HandlerDelayMs);
  if (!start || confirmClick === null) {
    return;
  }
  storyDomId = confirmClick.attr('id');
  $form = $('form[action*="' + storyDomId + '"]');
  if ($form.size() === 0) {
    $h3 = $('h3[data-hover="tooltip"]');
    expectText = "This content is no longer available";
    if($h3.size() === 1 && $h3.text() === expectText) {
      console.log('failed to delete. continuing.');
      debugger;
      $('a[action="cancel"]')[0].click()
      confirmClick = null;
    }
    return;
  }
  debugger;
  $form.find('button')[0].click();
  confirmClick = null;
}

var createDeleteRequests = function() {
  if (start === false) {
    console.log("!!!!Abbruch");
    return;
  }
  logging('Begin.', 2);
  check_for_timeline(); // Mh does im on the right site?
  // Sometimes Facebook change here some shit...
  if ($('#globalContainer').size() == 0) {
    if (iamstillontimeline == true) {
      alert("ERROR: Maybe Facebook changed his design... \n please take a look for a newer version of this Script...");
    }
  }
  // if (iamstillontimeline == true) {
  // }
  if (autoscroll === true && expandCount > 0) {
    console.log('waiting for scrolling to complete');
    setTimeout(createDeleteRequests, 5000);
    return;
  }

  setTimeout(handleEditClicks, 500);
  setTimeout(handleDeleteClicks, 510);
  setTimeout(handleConfirmClicks, 550);
  $('#globalContainer').each(function() {
    $(this).find('div.pam._5shk').each(function() {
      deletedCount += 1;
      if (deletedCount > deleteMax) {
        console.log('Deleted enough for now. Let it ride.');
        return false;
      }
      if ($.inArray($(this), editClicks) < 0) {
        $(this).css('background-color', 'red');
        // TODO delete by date
        if (run_mode == 'WET') {
          editClicks.push($(this));
        }
      }
    });
  });
};
