var selectedColumn = 0;

function showDialog(column) {
    selectedColumn = column.parentElement.id;

    $("#dialog").removeClass("invisible");
    $("#dialog").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        minWidth: 400,
        minHeight: 600
    });
}