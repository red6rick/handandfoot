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
			var $this = $(this); // jquery best practice for avoiding $this vs $(this) conflation (due to .each function below) 
			var $table = $this.parent().parent().parent();
			console.log('table:'+$table.html());	
			var $row =	$this.parent().parent();
			var rowIndex = $row.index() + 1;
			var num = $this.val();
			console.log('ind:'+rowIndex);	
			var multiplier = $('#tab4 table tr:nth-child('+rowIndex+')').find('input').val();
		
			console.log('mull:'+multiplier);	
			multiplier = parseInt(multiplier);

			console.log('row:'+rowIndex+', num:'+num+', mult:'+multiplier);
		
		
			// finally put the result into the element next to the element clicked
			$table.find('.output').text((multiplier * num));

			// sum
			var sum1 = 0;
			var sum2 = 0;
			
			$table.find('input').each(function(){
				var val = parseInt($(this).val()); // different "this"
				if (!isNaN(val)) sum1 += val
			});		
			$table.find('.output').each(function(){
				var val = parseInt($(this).text());
				if (!isNaN(val)) sum2 += val
				
			});		
			$table.find('.sum1').text(sum1);
			$table.find('.sum2').text(sum2);	
		
			console.log('sum 1:'+sum1);
			
	});

	ShowTab(0);
	
});
