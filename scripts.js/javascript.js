$(document).ready(init);

function init() {
  $(".js-btn-create-switch").on("click", turnSwitchOn);
}

function turnSwitchOn() {
  $(".js-container").append(`
    <div>
    <p> This is a Switch!<p>
    <button>Turn Switch Off</button>
    <div>
    
    `);
}
