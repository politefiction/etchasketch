window.onload = function() {
	let ctnWidth = 900;
	let ctnHeight = 900;
	let container = document.querySelector("#grid")
	container.setAttribute('style', `width: ${ctnWidth}px; height: ${ctnHeight}px`);

//Starting grid
	let defaultGrid = 900;
	function makeGrid(gridSize) {
		for(i=0; i < gridSize; i++) {
			let square = document.createElement('div');
			square.setAttribute('style', `width: ${Math.sqrt((ctnWidth * ctnHeight)/gridSize)}; height: ${Math.sqrt((ctnWidth * ctnHeight)/gridSize)}; background-color: white`);
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
		let rowSquares = prompt("Squares per row:");
		let colSquares = prompt("Squares per column");
		if (isNaN(rowSquares) === true || isNaN(colSquares) === true) {
			alert("Row and column entries must be numbers! Please try again.")
		} else {
			let newGrid = rowSquares * colSquares;
			container.querySelectorAll('div').forEach(div => 
				container.removeChild(div)
			);
			makeGrid(newGrid);
			alert(`Current Grid Area: ${rowSquares} x ${colSquares}`);
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