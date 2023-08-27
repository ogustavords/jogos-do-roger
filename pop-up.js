$(document).ready(function() {
    const popupOverlay = $("#popupOverlay");
    const popupButton = $("#popupButton");

    if (popupOverlay.length && popupButton.length) {
        popupButton.on("click", function() {
            popupOverlay.hide();
        });
    }
});