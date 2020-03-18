//ready document with init function
$(document).ready(init);

// on init: target btn on html.  on click: target container div with function.
function init() {
  $(".js-btn-create-switch").on("click", createColorSwitch);
}

// target div with function: create <p>, create <btn> (inside div)
function createColorSwitch() {
  $(".js-container").append(`
    <div>
    <p>Switch</p>
    <button>Turn Off</button>
    <div>
    `);
}
