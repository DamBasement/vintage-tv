var app = document.getElementById('app');

function playAudio(url) {
  var a = new Audio(url);
  a.loop = true
  a.play()
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
      .typeString('<p>I am h0ld3n.</p>')
      .pauseFor(1500)
      .typeString('<br><p>\'80s summer child. InfoSec dude since 2015.</p>')
      .pauseFor(1500)
      .typeString('<br><p> 24/7 hacker student. Stratocaster lover.</p>')
      .pauseFor(1500)
      .typeString('<br><p> Mention me on <a href="https://twitter.com/c0rm4n01" class="twitter-mention-button" data-show-count="false"><span>Twitter</span></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> if you want to get in touch.</p>')
      .pauseFor(1500)
      .typeString('<br><p> Thanks for visiting my page.</p>')
      .pauseFor(1500)
  typewriter.typeString('<br><p> Bye.</p> <br><img src="http://www.hackthebox.eu/badge/image/484328" alt="Hack The Box">\n')
      .start();
});
