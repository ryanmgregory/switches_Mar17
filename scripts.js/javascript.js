//ready document with init function
$(document).ready(init);

// on init: target btn on html.  on click: target container div with function.
function init() {
  $(".js-btn-create-switch").on("click", createColorSwitch);
}

// target div with function: create <p>, create <btn> (inside div)
// change div to having a class to style (green background)
function createColorSwitch() {
  $(".js-container").append(`
    <div class="onStyle">   
    <p>Switch</p>
    <button>Turn Off</button>
    <div>
    `);
}
