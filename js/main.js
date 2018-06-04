$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    let value = $(this).val().toLowerCase();
    $(".gallery-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    })