$(document).ready(init);

function init() {
    $('.js-btn-create-switch').on('click', createColorSwitch);

}

createColorSwitch() {
    $('.js-container').append(`
    <div>
    <p>Switch</p>
    <button>Turn Off</button>
    <div>
    `);
}