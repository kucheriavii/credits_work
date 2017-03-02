var creditSlider = document.getElementById('credit-scroller');

noUiSlider.create(creditSlider, {
	start: 5000,
	behaviour: 'tap',
	connect: [true, false],
	range: {
		'min':  0,
		'max':  10000
	},
	step: 50
});
var directionField = document.getElementById('credit-value-field');

creditSlider.noUiSlider.on('update', function( values, handle ){
	directionField.innerHTML = Number(values[handle]);
});
/***************************************************************************/
var limitSlider = document.getElementById('limit-scroller');

noUiSlider.create(limitSlider, {
	start: 10,
	behaviour: 'tap',
	connect: [true, false],
	range: {
		'min':  1,
		'max':  20
	},
	step: 1
});
var limitField = document.getElementById('limit-value-field');

limitSlider.noUiSlider.on('update', function( values, handle ){
	limitField.innerHTML = Number(values[handle]);
});
/***************************************************************************/
