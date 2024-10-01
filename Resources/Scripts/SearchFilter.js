$(document).ready(function(){
		
		var filter = (window.location.href.split('&').splice(1)); //Creates a "filter" variable whose value is the filter text.
		var hasFilter = false;
		
		if(filter.length > 0){
			hasFilter = true;
		}		
		filter = decodeURI(filter); //Removes the codes used for spaces.
		filter = filter.substring(2);//Removes "f=" at the beginning.
	

		var $span = ( document.createElement('span') ); //Creates a span element to contain the new text.

		$span.setAttribute('class', 'filter'); //Adds the class filter to the span in case you would need to edit the styling.
		$span.innerHTML = " in  " + '' + filter + '' + "";//Inserts text and the value from the URL.
		
		
		if(hasFilter){
			$("h1").append($span); //Appends the new span to the existing string.
		}

	});