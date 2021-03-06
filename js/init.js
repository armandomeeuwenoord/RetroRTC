/*
 * RetroRTC
 * Copyright (c) 2013-2014 Versatica <http://www.versatica.com>
 * Authors:
 *   Iñaki Baz Castillo <ibc@aliax.net>
 *   José Luis Millán <jmillan@aliax.net>
 * Homepage: http://retrortc.versatica.com
 * License: http://retrortc.versatica.com/LICENSE.txt
 */


WebRTC = {};

// Chrome.
if (navigator.webkitGetUserMedia) {
  WebRTC.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
}
// Firefox.
else if (navigator.mozGetUserMedia) {
  WebRTC.getUserMedia = navigator.mozGetUserMedia.bind(navigator);
}
// Standard?
else if (navigator.getUserMedia) {
  WebRTC.getUserMedia = navigator.getUserMedia.bind(navigator);
  // Opera fixes.
  if (! window.URL )
    window.URL = {};
  if (! window.URL.createObjectURL)
    window.URL.createObjectURL = function(obj){return obj;}
}
// WebRTC not supported.  
else {
  console.error("WebRTC not supported, the demo will not work at all");
  alert("WebRTC not supported, the demo will not work at all. Please use a modern version of Chrome or Firefox browser.");
}




$(document).ready(function(){
  
  retroRTC = new RetroRTC();

});