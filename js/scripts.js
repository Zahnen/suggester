$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    const name = $("input#name").val();
    const frustration = $("select#frustration").val();
    const experience = $("select#prevExperience").val();

    $("#results").show();
    $("span#name").prepend(name);  
    
    if (frustration === "muchFrustration") {
      $("#JavaScript").show();
    }
    else if (frustration === "noFrustration" && experience === "noExperience") {
      $("#HTML").show();
    }
    else if (frustration === "noFrustration" && experience === "muchExperience") {
      $("#Python").show();
    }
    else {
      $("#CSharp").show();
    }
    event.preventDefault();
  });
});