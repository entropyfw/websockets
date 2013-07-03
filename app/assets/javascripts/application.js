// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/*var socket;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function animateCharacter(letter)
{
  var upper = letter.toUpperCase();
  $('#character_' + upper)
    .stop(true,true)
    .animate({ opacity: 1}, 100)
    .animate({ opacity: .2}, 100);
}

function setup()
{
  var target = $('#alphabet');
  for(var i = 0; i <=alphabet.length; i++)
  {
    var char = alphabet.charAt(i);
    target.append('<span id="character_' + char +'">' + char +
        '</span');
  }
  connect();

  $(document).keypress(function(e){
    var char = String.fromCharCode(e.keyCode);
    socket.send(char);
  });
};

function connect(){
  socket = new WebSocket('ws://127.0.0.1:8080');
  socket.onmessage = function(mess) {
    animateCharacter(mess.data);
  };

};

window.onload += setup();*/
var socket;
function connect(){
  socket = new WebSocket('ws://127.0.0.1:8080');
  socket.onmessage = function(mess) {
  $(".well").append(mess.data);
  };
}
function SendOnClick(){
  var msg = $("input").val();
  socket.send(msg);
};
connect();
$(document).ready(function(){
  $("button").click(SendOnClick)});

