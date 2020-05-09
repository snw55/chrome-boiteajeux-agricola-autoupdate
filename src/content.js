var buttons = document.querySelectorAll(
  "input[type='button'][value='END OF TURN']"
);

if (buttons.length != 1) throw "Could not find 'END OF TURN' button";

var btn = buttons[0];
btn.addEventListener(
  "click",
  function () {
    alert("woei!");
  },
  false
);
