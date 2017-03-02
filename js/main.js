/***************************************************************************/
var menuSlider = document.getElementById('menu-scroller');

noUiSlider.create(menuSlider, {
	start: 10,
	behaviour: 'tap',
	connect: [true, false],
	range: {
		'min':  1,
		'max':  100
	},
	orientation: "vertical",
	step: 1
});
var menuField = document.getElementById('menu-scroller-value');

menuSlider.noUiSlider.on('update', function( values, handle ){
	menuField.innerHTML = Number(values[handle]);
	$ulPosition = Number($('#menu-scroller-value').value);
	menuBlockTop = Number(values[handle])*-1+"%";
	$(".menu-block").css('top', menuBlockTop)

});
/***************************************************************************/