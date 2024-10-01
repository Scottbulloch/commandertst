/* Show icon after external link using Font Awesome. Only used after the a.NotSnowDocs class. */

$(document).ready(function() {
            
			$('a[href^="http://"],a[href^="https://"]')
                .attr('target','_blank')
            ;
        });