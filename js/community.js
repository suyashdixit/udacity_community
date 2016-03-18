jQuery(document).ready(function($) {

   $(".footer_nav_toggle h3").click(function(e) {
      $(this).parent().toggleClass("nav--on"), e.preventDefault()
   });
	$(".nav_toggle").click(function(e) {
      $("nav").toggleClass("nav--on"), e.preventDefault()
   });
});
