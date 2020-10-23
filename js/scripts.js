$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    const name = $("input#name").val();
    const frustration = $("select#frustration").val();
    const experience = $("select#prevExperience").val();

    $("#results").show();
    $("span#name").prepend().text(name);  
    
    if (experience === "noExperience") {
      $("#HTML").fadeIn();
      $("#JavaScript").hide();
      $("#CSharp").hide();
      $("#Python").hide();
    }
    else if (frustration === "muchFrustration" && experience != "noExperience") {
      $("#JavaScript").fadeIn();
      $("#HTML").hide();
      $("#Python").hide();
      $("#CSharp").hide();
    }
    else if (frustration === "noFrustration" && experience === "muchExperience") {
      $("#Python").fadeIn();
      $("#JavaScript").hide();
      $("#HTML").hide();
      $("#CSharp").hide();
    }
    else {
      $("#CSharp").fadeIn();
      $("#JavaScript").hide();
      $("#Python").hide();
      $("#HTML").hide();
    }
    event.preventDefault();
  });
});
