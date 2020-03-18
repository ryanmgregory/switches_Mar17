$(document).ready(init);

function init() {
  $(".js-btn-create-switch").on("click", createSwitch);
}

function createSwitch() {
  $(".js-container").append(`
    <div>
        <p>This is a switch<p>
        <button>Turn Switch Off</button>
    <div>
    `);
}
