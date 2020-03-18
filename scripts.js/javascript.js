//ready document with init function
$(document).ready(init);

let switchesOn = 0;

// on init: target btn on html.  on click: target container div with function.
function init() {
  $(".js-btn-create-switch").on("click", createColorSwitch);
}

// target div with function: create <p>, create <btn> (inside div)
// change div to having a class to style (green background)
// make turn off btn turn off switch by adding a class to it and target the class.
function createColorSwitch() {
  $(".js-container").append(`
    <div class="onStyle">   
    <p>Switch</p>
    <button class="turnSwitchOff>Turn Off</button>
    <div>
    `);
  // create switches on counter & (add global variable) & call
  switchesOn++;
  updateSwitchCounter();
}

// create counter to target <h1> class when create switch is clicked
function updateSwitchCounter() {
  $(".js-switches-h1-count").text(`Switches turned on: ${switchesOn}`);
}
