function runHandler() {
  if (confirm('Are you sure you want to delete stuff?')) {
    resetVars();
    start = true;
    run_mode = 'WET';
    run();
  }
}

function dryRunHandler() {
  if (confirm("Ready? This won't actually delete anything")) {
    resetVars();
    start = true;
    run_mode = 'DRY';
    run();
  }
}

function stopHandler() {
  console.log('stopping!');
  resetVars();
}

function run() {
  deleteMode = $('select#riley_run_mode').val();
  autoscroll = $('#autoscroll').prop('checked');
  debugger;
  // Delay to allow existing looping handlers to stop
  setTimeout(function() {
    createDeleteRequests();
    expandMoreActivity();
  }, HandlerDelayMs*2);
}

/**
 * Insert the GUI Button
 */
function add_button() {
  insert_button = true;
  $top = $('#pagelet_main_column_personal div [class="_2o3t fixed_elem"] div[class="clearfix uiHeaderTop"]');
  $top.append('<input type="checkbox" id="autoscroll"  name="autoscroll" checked>Autoscroll');
  $top.append(
    '<br>\
<select id="riley_run_mode"> \
    <option value=""></option> \
    <option value="delete_everything">Delete everything</option>\
    <option value="delete_older_than">Delete things older than Date</option>\
</select>');
    // <option value="year_2010" >Hide everything on Timeline older than X Days</option>\
    // <option value="year_201x">Hide everything on Timeline</option>\
    // <option value="Hide ">Hide everything on Timeline older than X days</option>\
  $top.append('<br>Entrys older than date: <input id="cutoff_date" value="2010-01-01" style = "width: 4em";>');
  $top.append('<br><button id="riley_enginerun">Run</button>');
  $top.append('<button id="riley_dryrun">Dry Run</button>');
  $top.append('<button id="riley_stop">Stop</button>');
  $top.find('#riley_enginerun').click(runHandler);
  $top.find('#riley_dryrun').click(dryRunHandler);
  $top.find('#riley_stop').click(stopHandler);
}
