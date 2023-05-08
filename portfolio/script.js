$(document).ready(function() {
    $(".slideshow-container .mySlides").hide();
    $(".slideshow-container").each(function() {
      $(this).find(".mySlides:first").show();
    });

    $(".next").click(function() {
        console.log("next clicked");
      var containerEl = $(this).parent();
      var currentImg = containerEl.find(".mySlides:visible");
  
      $(currentImg).hide();
      $(currentImg).next(".mySlides").show();
  
      if(containerEl.find(".mySlides:visible").length == 0)
        containerEl.find(".mySlides").first().show();
    });
    
    $(".prev").click(function() {
        console.log("prev clicked");
      var containerEl = $(this).parent();
      var currentImg = containerEl.find(".mySlides:visible");
  
      $(currentImg).hide();
      $(currentImg).prev(".mySlides").show();
  
      if(containerEl.find(".mySlides:visible").length == 0)
        containerEl.find(".mySlides").last().show();
    });
  });