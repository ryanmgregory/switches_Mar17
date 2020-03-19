$(document).ready(init);

function init() {
  $(".js-btn-create-switch").on("click", turnSwitchOn);
  $(".js-container").on("click", ".js-btn-turn-off", turnSwitchOff);
}

function turnSwitchOn() {
  $(".js-container").append(`
    <div class="on">
    <p> This is a Switch!<p>
    <button class="js-btn-turn-off">Turn Switch Off</button>
    <div>
    `);

  switchCounter++;
  calculateSwitchCount();
}

let switchCounter = 0;

function calculateSwitchCount() {
  $(".js-switches-turned-on-count").text(`Switches Turned On: ${switchCounter}
  `);
}

// create Turn Off Switch function & target the Turn Switch Off BTN
function turnSwitchOff() {
  $(this)
    .parent()
    .addClass("off");

  switchCounter--;
  calculateSwitchCount();
}
