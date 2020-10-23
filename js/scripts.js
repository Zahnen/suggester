$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    $("#results").show();
    event.preventDefault();
  });
});