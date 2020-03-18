$(document).ready(init);
let switchCount = 0;
function init() {
  $(".js-btn-create-switch").on("click", createSwitch);
  $(".js-container").on("click", ".js-btn-turnOff", turnSwitchOff);
}

function createSwitch() {
  console.log("in createSwitch");
  $(".js-container").append(`
    <div class="on">
        <p>This is a switch</p>
        <button class="js-btn-turnOff">Turn Switch Off Button</button>
    <div>
    `);
  switchCount++;
  updateSwitchCount();
}

function turnSwitchOff() {
  $(this)
    .parent()
    .addClass("off");
}

function updateSwitchCount() {
  console.log("in updateSwitchCount");
  $(".js-switch-count").text(`Switches Turned On: ${switchCount}`);
}
