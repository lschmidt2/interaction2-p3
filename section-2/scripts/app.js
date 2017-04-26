$(document).ready(function(){     
	$(".draggable").draggable();

$(function() {
  $(".finishline").droppable({
    drop: function(event, ui) {
      $(this).addClass("finishwin")
    }
  });
});

$(".danger").droppable({
  over: function(event,ui) {
  	$(".danger").css({ background: "red"});
  },
  out: function( event, ui ) {
  	$(".danger").css({ background: "black"});
  }, 
});

});
