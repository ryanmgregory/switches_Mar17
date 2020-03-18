//ready document with init function
$(document).ready(init);

let switchesOn = 0;

// on init: target btn on html.  on click: target container div with function.
// add event listener call to Turn Off Btn to turn off switch- target container with filter class (btn) (on when page loads)
function init() {
  $(".js-btn-create-switch").on("click", createColorSwitch);
  $(".js-container").on("click", ".js-btn-turnOff", turnSwitchOff);
}

// target div with function: create <p>, create <btn> (inside div)
// change div to having a class to style (green background)
// make turn off btn turn off switch by adding a class to it and target the class.
function createColorSwitch() {
  $(".js-container").append(`
    <div class="on">   
    <p>Switch</p>
    <button class="js-btn-turnOff">Turn Off</button>
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

// // create function to turn off switch when Turn Off btn is clicked
// (event lister added in init)
// append <TurnOff Btn> parent class by adding class off off (& style)
function turnSwitchOff() {
  $(this)
    .parent()
    .addClass("off");
}
