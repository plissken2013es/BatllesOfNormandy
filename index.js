function startDraggable() {
    $(".draggable" ).draggable({
        helper: "clone",
        cursor: "move",
        stop: function(event, ui) {
            let kk = $(ui.helper)
                .clone(true)
                .removeClass('box draggable ui-draggable ui-draggable-dragging')
                .addClass('box-clone')
                .appendTo('#page');
            kk.draggable({
                distance: 50,
                helper: "clone",
                cursor: "move",
                stop: function(event, ui) {
                    $(event.target).remove();
                }
            });
        }
    });
    $(".box-clone").draggable({
        distance: 50,
        helper: "clone",
        cursor: "move",
        stop: function(event, ui) {
            $(event.target).remove();
        }
    });
    $(".draggable-turn").draggable({
        cursor: "move"
    });
};

$(function() {
    startDraggable();
 });

$("#save").click(function() {
	localStorage.setItem('saved_game', $("#page").html());
});

$("#load").click(function() {
    $("#page").html(localStorage.getItem('saved_game'));
    startDraggable();
});