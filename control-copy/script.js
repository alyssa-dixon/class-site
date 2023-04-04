  

$(".draggable").draggable({ grid:[20,20] }); 

$(".blue").click(function(){
    $(".new-blue").css({"opacity":"1"});
});

$(".violet").click(function(){
    $(".new-violet").css({"opacity":"1"});
});

$(".purple").click(function(){
    $(".new-purple").css({"opacity":"1"});
});

$(".light-pink").click(function(){
    $(".new-light-pink").css({"opacity":"1"});
});

$(".orange").click(function(){
    $(".new-orange").css({"opacity":"1"});
});

$(".grain").click(function(){
    $(".new-grain").css({"opacity":"1"});
});

$(".yellow").click(function(){
    $(".new-yellow").css({"opacity":"1"});
});

$(".tan").click(function(){
    $(".new-tan").css({"opacity":"1"});
});

$(".multi-color").click(function(){
    $(".new-multi-color").css({"opacity":"1"});
});

var blueTile = $('<img class="draggable" src="tile1.png">');
var violetTile = $('<img class="draggable" src="tile2.png">');
var purpleTile = $('<img class="draggable" src="tile5.png">');
var pinkTile = $('<img class="draggable" src="tile9.png">');
var orangeTile = $('<img class="draggable" src="tile3.png">');
var grainTile = $('<img class="draggable" src="tile8.png">');
var yellowTile = $('<img class="draggable" src="tile4.png">');
var tanTile = $('<img class="draggable" src="tile7.png">');
var multiTile = $('<img class="draggable" src="tile6.png">');

$(".add-blue").click(function(){
    blueTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid: [20,20]
     }); 
  });
  
  $(".add-violet").click(function(){
    violetTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-purple").click(function(){
    purpleTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-pink").click(function(){
    pinkTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-orange").click(function(){
    orangeTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-grain").click(function(){
    grainTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-yellow").click(function(){
    yellowTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-tan").click(function(){
    tanTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });

  $(".add-multi").click(function(){
    multiTile.clone().appendTo(".new-boxes");
    $(".draggable").draggable({ 
        grid:[20,20]
     }); 
  });