/**
 * This function scroll down on the Website and load new entrys.
 */
var expandMoreActivity = function() {
  // conditions under which to completely stop
  if (!start || !autoscroll) { return; }
  if (limit && expandCount <= 0) {
    return;
  }
  debugger;
  if (iamstillontimeline == true) {
    setTimeout(expandMoreActivity, expandSpeedMs);

    // Only scroll if: autoscroll is on and all existing have been deleted
    if (autoscroll === true && editClicks.length === 0) {
      scrollTo(0, 1000000000); // Scroll Down!
      expandCount -= 1;
    }
  }
  logging('Expand', 2);
};
