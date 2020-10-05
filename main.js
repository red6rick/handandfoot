$(document).ready(function(){
	$('#button_0').click(function(){ ShowTab(0); });	
	$('#button_1').click(function(){ ShowTab(1); });	
	$('#button_4').click(function(){ ShowTab(4); });	
	
	function ShowTab(tab_index) {
		$('.tab').each(function() { $(this).hide(); });	
		$('#tab'+tab_index).show();	
		console.log('tab: '+tab_index);
		
	}

	$('input' ).change(function() {
		// detect when an input was changed. 

			// make sure input had class number_input
	
	
			var rowIndex = $(this).parent().parent().index() + 1;
			var num = $(this).val();
			console.log('ind:'+rowIndex);	
			var multiplier = $('#tab4 table tr:nth-child('+rowIndex+')').find('input').val();
		
			console.log('mull:'+multiplier);	
			multiplier = parseInt(multiplier);

			console.log('row:'+rowIndex+', num:'+num+', mult:'+multiplier);
		
			// finally put the result into the element next to the element clicked
			$(this).parent().parent().find('.output').text((multiplier * num));
	});

	ShowTab(0);
	
});
