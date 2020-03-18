$(document).ready(init);

function init() {
  $(".js-btn-create-switch").on("click", turnSwitchOn);
}

function turnSwitchOn() {
  $(".js-container").append(`
    <div class="on">
    <p> This is a Switch!<p>
    <button>Turn Switch Off</button>
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
