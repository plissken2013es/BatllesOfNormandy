$(function() {
    $(".draggable" ).draggable({
        helper: "clone",
        cursor: "move",
        stop: function(event, ui) {
            let kk = $(ui.helper)
                .clone(true)
                .removeClass('box ui-draggable ui-draggable-dragging')
                .addClass('box-clone')
                .appendTo('body');
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
    $(".draggable-turn").draggable({
        cursor: "move"
    });
 });