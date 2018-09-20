window.onload = function() {
	let origWidth = 560;
	let origHeight = 560;
	let container = document.querySelector(".container")
	container.setAttribute('style', `width: ${origWidth}px; height: ${origHeight}px`);

//Starting grid
	let test3 = "Can you see me? ";
	let defaultGrid = (origWidth * origHeight)/Math.pow(35, 2);
	function makeGrid(gridSize) {
		for(i=0; i < gridSize; i++) {
			let square = document.createElement('div');
			square.setAttribute('class', 'square');
			square.appendChild(document.createElement('li'));
			container.appendChild(square);
			square.addEventListener("mouseenter", function() {
				this.style.backgroundColor = "black";
			});
		};
	};

	makeGrid(defaultGrid);

// Make a new grid
	let newGridStart = document.querySelector('#new-grid');
	newGridStart.onclick = function() {
		let gridWidth = prompt("Grid width:");
		let gridHeight = prompt("Grid height:");
		if (isNaN(gridWidth) === true || isNaN(gridHeight) === true) {
			alert("Grid width and height must be numbers! Please try again.")
		} else {
			let test1 = gridWidth * 35;
			let test2 = gridHeight * 35;
			let newGrid = (test1 * test2)/Math.pow(35, 2);
			container.querySelectorAll('div').forEach(div => 
				container.removeChild(div)
			);
			container.setAttribute('style', `width: ${test1}px; height: ${test2}px`);
			makeGrid(newGrid);
			alert("Current Grid Area: " + newGrid);
		}; 
	};


// Clear grid
	let shake = document.querySelector('#shake');
	shake.onclick = () => {
		container.querySelectorAll('div').forEach(div => 
			div.style.backgroundColor = "white" 
		);
	}


};