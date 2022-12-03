var app = document.getElementById('app');

var x = document.getElementById("myAudio");

function playAudio() {
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
      .typeString('<p> Lorem ipsum dolor sit amet</p>')
      .pauseFor(500)
      .deleteChars(9)
      .typeString('<br><p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>')
      .pauseFor(1500)
      .typeString('<br><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>')
      .pauseFor(1500)
      .typeString('<br><p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>')
      .pauseFor(1500)
      .typeString('<br><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>')
      .pauseFor(1500)
      .typeString('<br><p>dolore magnam aliquam quaerat voluptatem</p>')
      .pauseFor(1500)
  typewriter.typeString('<br><p>eum fugiat quo voluptas nulla pariatur?</p> <br>')
      .start();
});
