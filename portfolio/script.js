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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}