function displayTwitterTimeline() {
    $("#"+selectedColumn).replaceWith($("#twitter_timeline-"+selectedColumn));
    $("#dialog").dialog("close");
    $("#twitter_timeline-"+selectedColumn).removeClass("invisible");

}