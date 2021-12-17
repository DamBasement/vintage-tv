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
      .typeString('<p>I\'m Yascin, the red fox.</p>')
      .pauseFor(1500)
      .typeString('<br><p>\'80s summer child. InfoSec dude since 2015. Brutalist.</p>')
      .pauseFor(1500)
      .typeString('<br><p> 24/7 hacker student. Fender &#x2764;.</p>')
      .pauseFor(1500)
      .typeString('<br><p> Mention me on <a href="https://twitter.com/c0rm4n01" class="twitter-mention-button" data-show-count="false"><span>Twitter</span></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> if you want to get in touch.</p>')
      .pauseFor(1500)
      .typeString('<br><p> Thanks for stopping by.</p>')
      .pauseFor(1500)
  typewriter.typeString('<br><p>до свидания.</p> <br>')
      .start();
});
