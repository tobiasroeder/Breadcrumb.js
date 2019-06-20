// ======================================================
// Breadcrumb v1.0.0
//
// Creative Commons Attribution 4.0 International License
// https://tobiasroeder.github.io/breadcrumb/license
//
// https://github.com/tobiasroeder/breadcrumb
// Copyright 2018 Breadcrumb
//
// ======================================================

function breadcrumb(bc) {
    
	// display info
    if (bc.info != false) {
        console.log('Breadcrumb v0.1\nhttp://tobiasroeder.github.io/breadcrumb');
    }
    
	// create vars / url parts
    var breadcrumbPathElmt = document.querySelectorAll(bc.element),
		a_href = '',
        url_pathname = document.location.pathname,
        url_parts = url_pathname.split('/'),
        url_part = url_parts.filter(function(el) {
            return el != '';
        });
	
	// search the right breadcrumb element
    for (var i = 0; i < breadcrumbPathElmt.length; i++) {
        if (breadcrumbPathElmt[i].getAttribute('data-breadcrumb') == '') {
				
			// display hyphen
			var hyphen = bc.hyphen,
				hyphenElement = bc.hyphenElement;
			
			if (hyphen == true) {
				if (hyphenElement == undefined ? hyphenElement = ' / ' : hyphenElement = hyphenElement);
			} else {
				hyphenElement = '';
			}
			
			// start breadcrumb (home/custom)
			var home = bc.home;
			if (home == undefined ? home = 'Home' : home = home);
			breadcrumbPathElmt[i].innerHTML = '<a href="/">' + home + '</a>';
            
			// fill breadcrumb element
			for (var j = 0; j < url_part.length; j++) {
				k = 0;
				while (k <= j) {
					a_href += '/' + url_part[k];
					k++;
				}
				
				// first letter uppercase
				var url_part_name = url_part[j];
				if (bc.firstLetter == true) url_part_name = url_part_name.charAt(0).toUpperCase() + url_part_name.slice(1);
				breadcrumbPathElmt[i].innerHTML += hyphenElement + '<a href="' + a_href + '">' + url_part_name + '</a>';
				
				// reset a_href
				a_href = '';
			}
		}
    }
}