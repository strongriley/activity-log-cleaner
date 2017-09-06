/**
 * This is the Main Function. It checks if you are on the activies log or not.
 * :D
 */
function main() {
  check_for_timeline(); // Get my location.
  if (iamstillontimeline !== true) {
    console.log("not on activity");
    return;
  }
  resetVars();
  add_button();
}
  // if ($("#test_checkbox").length > 0) {
  //   if ($("#test_checkbox").is(':checked')) {
  //     just_test = true;
  //   } else {
  //     just_test = false;
  //   }
  // }
  // if ($("#enginerun").length > 0) {
  //   if ($("#enginerun").is(':checked') === false) {
  //     start = false;
  //     console.log("Setze Start auf false");
  //   }
  // }

  //   if (insert_button == false) {
  //     console.log('Button rein!');
  //     add_button();
  //   }

  //   if (just_test != false) {
  //     logging("This is only a test! Nothing will really deleted!", 1);
  //   } else {
  //     logging("WARNING: bomb is planted", 1);
  //   }

    // Check thas the Button is really inserted...
    // if (document.getElementById("selectvalue")) {
    //   var selected = document.getElementById("selectvalue").options[document.getElementById("selectvalue").selectedIndex].text;

    //   if (selected == "Stop") {
    //     console.log("Stop");
    //     start = false;
    //   }

    //   if (start == false) {
    //     logging('Waiting for Startsignal', 1);

    //     if ((lastselected != selected) && (selected != "")) {
    //       var text = "";
    //   var days=parseInt($('#groesse').val());
    //       switch (selected) {

    //       // No longer supported
    //       // case "Hide everything on Timeline":
    //       //   text = 'WARNING: Are you sure you want hide EVERYTHING on your Timeline? Only you can see the old entrys!';
    //       //   only_hide = true;
    //       //   delete_time_bevor = false;
    //       //   break;

    //       case "Delete everything":
    //         text = 'WARNING: Are you sure to delete EVERYTHING on your Timeline?!';
    //         // only_hide = false;
    //         delete_time_bevor = false;
    //         break;

    //       // No longer supported
    //       // case "Hide everything on Timeline older than X days":
    //       //   text = 'WARNING: Are you sure you want hide all entrys that older than '+days+' Days?';
    //       //   only_hide = true;
    //       //   delete_time_bevor = 60 * 60 * 24 * days;
    //       //   break;

    //       case "Delete things older than X Days":
    //         text = 'WARNING: Are you sure you want DELETE all entrys that older than '+days+' Days?';
    //         // only_hide = false;
    //         delete_time_bevor = 60 * 60 * 24 * days;
    //         break;

    //       case "Stop":
    //         text = 'WARNING: ' + selected;

    //         return;
    //         break;
    //       }
    //       lastselected = selected;

    //       if (confirm(text)) {
    //       if (just_test != false) {
    //     alert("This is only a test! Nothing will really deleted!\nIf you want a normal run, unselect DryRun");
    //     }
    //         /* $("#enginerun").prop('checked', true); */
    //         $('div[class="_2o49"] span[class="uiButtonGroupItem selectorItem"]').append(
    //             ' Unlike: <span  id="unlike">0</span> Deleted: <span  id="delete">0</span>Hide:<span  id="hided">0</span >');
    //         start = true;
    //         console.log("Start with ", selected);
    //         createDeleteRequests();
    //         expandMoreActivity();
    //         console.log("ajaxify:", $('*[ajaxify]').attr("ajaxify"));
    //       }
    //     }
    //   }
  // }
  // setTimeout(main, 2000); // Start itself in 2 seconds again.
// }
