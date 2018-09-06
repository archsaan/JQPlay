
 $(document).ready(function(e) {   
     $(".accordion").on("click", ".accordion-header", function() {
    	$(this).toggleClass("active").next().slideToggle();
 	});
 });