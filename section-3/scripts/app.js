$(document).ready(function(){     
	$("#a").click(function() {
  $(".namefield").append("D");
});

$("#b").click(function() {
  $(".namefield").append("O");
});

$("#c").click(function() {
  $(".namefield").append("J");
});

$("#d").click(function() {
  $(".namefield").append("W");
});

$("#e").click(function() {
  $(".namefield").append("H");
});

$("#f").click(function() {
  $(".namefield").append("Z");
});

$("#g").click(function() {
  $(".namefield").append("Q");
});

$("#h").click(function() {
  $(".namefield").append("I");
});

$("#i").click(function() {
  $(".namefield").append("B");
});

$("#j").click(function() {
  $(".namefield").append("A");
});

$("#k").click(function() {
  $(".namefield").append("N");
});

$("#l").click(function() {
  $(".namefield").append("Y");
});

$("#m").click(function() {
  $(".namefield").append("T");
});

$("#n").click(function() {
  $(".namefield").append("S");
});

$("#o").click(function() {
  $(".namefield").append("G");
});

$("#p").click(function() {
  $(".namefield").append("L");
});

$("#q").click(function() {
  $(".namefield").append("C");
});

$("#r").click(function() {
  $(".namefield").append("E");
});

$("#s").click(function() {
  $(".namefield").append("U");
});

$("#t").click(function() {
  $(".namefield").append("K");
});

$("#u").click(function() {
  $(".namefield").append("R");
});

$("#v").click(function() {
  $(".namefield").append("M");
});

$("#w").click(function() {
  $(".namefield").append("F");
});

$("#x").click(function() {
  $(".namefield").append("P");
});

$("#y").click(function() {
  $(".namefield").append("X");
});

$("#z").click(function() {
  $(".namefield").append("V");
});

var numberOfRetries = 0;

$(".tryagain").click(function(event, ui) {
  numberOfRetries++;
  $(".namefield").text("");
  if (numberOfRetries % 2 === 0) {
    $(".repeat").text("WHAT IS YOUR NAME?");
  } else {
    $(".repeat").text("WHAT STREET DO YOU LIVE ON?");

  }
})

function checkScreenType(){
    if (typeof window.ontouchstart !== "undefined") {
    	return "touch";
    } else {
    	return "desktop";    
    }
}

if (checkScreenType() == "desktop") {
	doThisForDesktopScreens();
} else {
	doThisForTouchScreens();
}

function doThisForDesktopScreens() {

  $(".letter").css({
  		'width': 100,
  		'height': 100,
  })
  
  $(".instructions").css({
  		'font-size': 30,
  })
}

function doThisForTouchScreens() {
}

});
