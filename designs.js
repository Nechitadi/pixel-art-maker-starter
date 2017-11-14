$(document).ready(function() {
	let gridWidth = 1;
	let gridHeight = 1;
	let submitSize = $('#submit');
	let inputHeight = $('#input_height');
	let inputWidth = $('#input_width');
	let colorPicker	= $('#colorPicker');
	let pixelCanvas = $('#pixel_canvas');
	let color = colorPicker.val();

	colorPicker.on('change', function() {
		color = colorPicker.val();
		console.log(color);
	});

	//Function that assigns the height and width from input fields to variables when the Submit button is clicked.
	submitSize.on('click', function() {
		$('tr').remove();
		gridHeight = inputHeight.val();
		gridWidth = inputWidth.val();
		console.log(`height: ${gridHeight}; width: ${gridWidth};`);
		makeGrid();
	});	

	//Function that creates a table with the height and with that were input
	function makeGrid() {
		for(let h=0; h<gridHeight; h++) {
			let newRow = $('<tr></tr>'); 
			pixelCanvas.append(newRow);
			for(let w=0; w<gridWidth; w++) {
				newRow.append('<td></td>');
			}
		}
	}

	//Function that assigns the color from color picker to the clicked table cell
	pixelCanvas.on('mouseover', 'td', function() {
		$('td').click(function(){
	    $(this).css('background-color', `${color}`);
	  });
	});
});