/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-12 09:11:34
 * @version $Id$
 */

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
    $('#side_bar a').on('click',function() {
	$(this).addClass('active').siblings().removeClass('active')
	})
	
	
	var C='navbar navbar-expand-lg navbar-dark';
	var sidebar_C="col-1 kr-h px-0";

	$('#kr-selectBg i').on('click',function(){
		var c=$(this).attr('class');		
		// localStorage['bg_color']=c;
		
		$('#navbar').attr('class',C+' '+c); 
		$('#sideBar').attr('class',sidebar_C+' '+c)
		 


	})
	// console.log(localStorage['bg_color'])
	// $('#sideBar').attr('class',sidebar_C+' '+localStorage['bg_color'])
	// $('#navbar').attr('class',C+' '+localStorage['bg_color'])
	$('.card-header').on('click',function(){
		var h=$('.collapse')
		var h_c=$(this).next().hasClass('show');
		var h_i=$(this).find("i");
		
		if (h_c) {
			h_i.addClass('fa-angle-right').removeClass('fa-angle-down');
		}else{
			h_i.removeClass('fa-angle-right').addClass('fa-angle-down');
		}
	})
});