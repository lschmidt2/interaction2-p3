$(document).ready(function(){     
	var boxesDroppedCount = 0;

	$(".draggable").draggable();

	$(".shotglass").droppable({
	  drop: function(event, ui) {
	    boxesDroppedCount++;
	    checkBoxCount();
	  },
	  out: function(event, ui) {
	    boxesDroppedCount--;
	    checkBoxCount();
	  }
	});
	
	
	
	function checkBoxCount() {
	  if (boxesDroppedCount < 2) {
	    $(".message").text("  ");
	  } else if (boxesDroppedCount > 3) {
	    $(".message").text("YAY!");
	  } else {
	    $(".message").text("Don't give up now!");
	  }
	}

});
