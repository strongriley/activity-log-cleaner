// ==UserScript==
// @name       Facebook Timeline Cleaner
// @include    http://*.facebook.com/*
// @include    https://*.facebook.com/*
// @require    http://code.jquery.com/jquery-1.7.1.min.js
// @grant     none
// @version 3
// @namespace https://greasyfork.org/users/10328
// @description delete you facebook timeline
// ==/UserScript==

/*
 * For jQuery Conflicts.
 */
this.$ = this.jQuery = jQuery.noConflict(true);

/*
 * This is the Debug Level for the firebug console output. It goes up to 5
 */
var debug = 5;

var iamstillontimeline = false;

// var deleted = 0;
// var hided = 0;

var start;
var deleteMode; // delete_everything or delete_older_than
var run_mode; // DRY or WET
var cutoffDate;

var deletedCount;
var deleteMax;
var editClicks;
var deleteClick;
var confirmClick;
var currentStage; // 0=edit, 1=delete, 2=confirm
var HandlerDelayMs;

// Expand
var expandCount;
var limit;
var expandSpeedMs;
var autoscroll;

function resetVars() {
  // main vars
  start = false;
  deleteMode = null;
  run_mode = null;
  // delete vars
  deletedCount = 0;
  deleteMax = 1000;
  editClicks = [];
  deleteClick = null;
  confirmClick = null;
  currentStage = 0; // 0=edit, 1=delete, 2=confirm
  HandlerDelayMs = 1000;
  // expand
  expandCount = 20;
  limit = true;
  expandSpeedMs = 4000;
  autoscroll = false;
}
