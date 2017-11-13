$(document).ready(function() {
	let color = $('#colorPicker').val();

	$('#colorPicker').on('change', function() {
		color = $('#colorPicker').val();
		console.log(color);
	});
	

	let gridWidth = 1;
	let gridHeight = 1;

	let submitSize = $('#submit');

	//Function that assigns the height and width from input fields to variables when the Submit button is clicked.
	submitSize.on('click', function() {
		$('tr').remove();
		gridHeight = $('#input_height').val();
		gridWidth = $('#input_width').val();
		console.log(`height: ${gridHeight}; width: ${gridWidth};`);
		makeGrid();
	});	


	function makeGrid() {
		for(let h=0; h<gridHeight; h++) {
			let newRow = $('<tr></tr>'); 
			$('#pixel_canvas').append(newRow);
			for(let w=0; w<gridWidth; w++) {
				newRow.append('<td></td>');
			}
		}
	}

	$('#pixel_canvas').on('mouseover', 'td', function() {
		$('td').click(function(){
	    $(this).css('background-color', `${color}`);
	  });
	});
});