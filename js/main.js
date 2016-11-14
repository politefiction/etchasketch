$(document).ready(function() {
	var origWidth = 560;
	var origHeight = 560;
	$(".container").css({"width": origWidth + "px", "height": origHeight + "px"})

//Starting grid
	var test3 = "Can you see me? ";
	var defaultGrid = (origWidth * origHeight)/Math.pow(35, 2);
	function makeGrid(gridSize) {
		for(var i=0; i < gridSize; i++) {
			var square = $('<div><li></li></div>').css({"width":"35px", "height":"35px", "background-color": "white", "display": "inline-block"});
			$(".container").append(square);
			$(square).on("mouseenter", function() {
				$(this).css("background-color", "black");
			});
		};
	};

	makeGrid(defaultGrid);

// Make a new grid
	$("#new-grid").click(function() {
		var gridWidth = prompt("Grid width:");
		var gridHeight = prompt("Grid height:");
		if (isNaN(gridWidth) === true || isNaN(gridHeight) === true) {
			alert("Grid width and height must be numbers! Please try again.")
		} else {
			var test1 = gridWidth * 35;
			var test2 = gridHeight * 35;
			var newGrid = (test1 * test2)/Math.pow(35, 2);
			$(".container").css({"width": test1 + "px", "height": test2 + "px"}).empty(".container");
			makeGrid(newGrid);
			alert("Current Grid Area: " + newGrid);
		}; 
	});


// Clear grid
	$("#shake").click(function() {
		$(".container").find("*").css("background-color", "white");
	})

});