$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    const name = $("input#name").val();
    const frustration = $("select#frustration").val();
    const experience = $("select#prevExperience").val();

    $("#results").show();
    $("span#name").prepend().text(name);  
    
    if (frustration === "muchFrustration") {
      $("#JavaScript").show();
      $("#HTML").hide();
      $("#Python").hide();
      $("#CSharp").hide();
    }
    else if (frustration === "noFrustration" && experience === "noExperience") {
      $("#HTML").show();
      $("#JavaScript").hide();
      $("#CSharp").hide();
      $("#Python").hide();
    }
    else if (frustration === "noFrustration" && experience === "muchExperience") {
      $("#Python").show();
      $("#JavaScript").hide();
      $("#HTML").hide();
      $("#CSharp").hide();
    }
    else {
      $("#CSharp").show();
      $("#JavaScript").hide();
      $("#Python").hide();
      $("#HTML").hide();
    }
    event.preventDefault();
  });
});