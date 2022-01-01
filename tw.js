var app = document.getElementById('app');

var x = document.getElementById("myAudio");

function playAudio() {
  //var a = new Audio(url);
  x.loop = true
  x.play()
}

$("button").click(function(){

  $("p").hide();
  var typewriter = new Typewriter(app, {
    loop: false,
    cursor: "_"
  });

  typewriter.pauseFor(1500)
      .typeString('<p>[+] Heyo.</p>')
      .pauseFor(500)
      .deleteChars(9)
      .typeString('<p>I\'m r3d_f0x.</p>')
      .pauseFor(1500)
      .typeString('<br><p>\'80s summer child. InfoSec dude since 2015. </p>')
      .pauseFor(1500)
      .typeString('<br><p> Brutalist. Nikonist. Fender &#x2764;.</p>')
      .pauseFor(1500)
      .typeString('<br><p> Write me an email at MG4zcHIwdDBuQHByb3Rvbm1haWwuY29t 😈 if you want to get in touch!</p>')
      .pauseFor(1500)
      .typeString('<br><p> Thanks for stopping by.</p>')
      .pauseFor(1500)
  typewriter.typeString('<br><p>до свидания.</p> <br>')
      .start();
});
