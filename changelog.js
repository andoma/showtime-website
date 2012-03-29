var popup_x = 0;
var popup_y = 0;
$(document).mousemove(function (e) {
  popup_x = e.pageX;
  popup_y = e.pageY;
});

function viewChangeLog(url) {
  $.getJSON(url, function(data) {
    var items = [];
    for(var v = 0; v < data.entries.length; v++) {
      item = data.entries[v];
      items.push('<div class="clentry"><h2>' + item.version + '</h2>' + item.desc + '</div>');
    }

    $("#changelog")
    .dialog({
      title: 'ChangeLog for ' + data.title,
      position: [popup_x, Math.min(popup_y, window.innerHeight - 500)],
      width: 600,
      height: 500
    })
    .html(items.join(''));
  });
}