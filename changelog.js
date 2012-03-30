var popup_x = 0;
var popup_y = 0;
$(document).mousemove(function (e) {
  popup_x = e.pageX;
  popup_y = e.pageY;
});

function viewChangeLog(id) {
  $('#'+id).dialog({
    position: [popup_x, Math.min(popup_y, window.innerHeight - 540)],
    width: 600,
    height: 500
  })
}