function showDialog() {
    $("#dialog").removeClass("invisible");
    $("#dialog").dialog({
        modal: true,
        draggable: false,
        resizable: false,

        minWidth: 400,
        minHeight: 600
    });
}