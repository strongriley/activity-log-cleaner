function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  var year = a.getFullYear();
  var month = months[a.getMonth() - 1];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ',' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

function parseUri(str) {
  var o = parseUri.options, m = o.parser[o.strictMode ? "strict" : "loose"].exec(str), uri = {}, i = 14;

  while (i--)
    uri[o.key[i]] = m[i] || "";

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
    if ($1)
      uri[o.q.name][$1] = $2;
  });

  return uri;
};

parseUri.options = {
  strictMode : false,
  key : [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
  q : {
    name : "queryKey",
    parser : /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser : {
    strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose : /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};

/**
 * A Logging Function with global debug level.
 * @param text Logtext
 * @param level loglevel
 */
function logging(text, level) {
  if (debug >= level) {
    console.log(text);
  }
}


function counter_up(objectname){
var aktuell=parseInt($("#"+objectname).text());
aktuell=aktuell+1;
$("#"+objectname).text(aktuell);
}

/**
 * This function check your URL. If your url cotain "$suchstring", the script
 * will load.
 * @returns bool --> true = on timeline or  false = not on timeline
 */
function check_for_timeline() {
  var suchstring = /(allactivity)/g; // REGEX for the URL
  var suchergebnis = suchstring.test($(location).attr('href'));
  if (suchergebnis != false) {
    iamstillontimeline = true; // You are on the right Site!
  } else {
    if ((iamstillontimeline == true) && (start == true)) {
      // Ugh it seems the user change the side...
      alert('Abort!');
      start = false;
    }
    iamstillontimeline = false;
    insert_button = false;
  }
}
