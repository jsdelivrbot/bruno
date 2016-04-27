$( document ).ready(function() {

$('html').removeClass('no-js').addClass('js');

$('.hamburger').click(function() {

    $('html').toggleClass('slideme');

});

// move search filter in the header search box before the nav
$( "#searchoptionsbox" ).insertBefore( ".nav" );

// move the dropdown menu actually after the parent! Far out!!
$( "div.lmenu_5" ).insertAfter( "#menu_5" );

// move the navbarbottom out of the searchresults
$( "#botnavbar" ).insertAfter( "#searchresults" );


/*
$('.content-toggle').on('click',function(e){
    $('.toggled-content').hide();
    var currentAttrValue=jQuery(this).attr('href');
    $(currentAttrValue).fadeIn(400);
    //alert(currentAttrValue);
    e.preventDefault();
});
*/
/*
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000);
        return false;
      }
    }
});*/
/*
$('.bio-toggle').click(function() {
    $('.slide-in-content').toggleClass('slide-in-content--show');
    e.preventDefault();
});
*/

/*

    Some Tabbed content

*/
/*
$('.tab__links a').on('click',function(e){
    var currentAttrValue=jQuery(this).attr('href');
    $('.tabs '+ currentAttrValue).fadeIn(400).siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });

$('.tab').hide();
$('.tab.active').show();
*/
/*

    Fit Vids

*/

/*
$(".video-container").fitVids();
*/
/*

    Progressive enhanced nav close



$('.site-wrap').click(function() {
    if ($('.nav-trigger').is(':checked')) {
    $('.nav-trigger').click();
}});

*/


/*

	Content Toggler



$('.toggle-content-trigger').on('click',function (e) {
    e.preventDefault();
});

$(".toggle-content-trigger").click(function () {
	$(this).toggleClass('active-button');
  var toggled_content_container_id = $(this).attr("href");
  $(toggled_content_container_id).slideToggle();
});
*/
/*

	Typed



$(function(){

    $("#typed").typed({
        strings: ["web applications", "web apps", "etc etc etc", "<a href='contact-us'>get in touch</a>"],
        typeSpeed: 190,
        backDelay: 700,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,

    });

});

*/
/*

    Flexslider

*/
/*
$('.flexslider').flexslider({
animation: "fade"
});
*/

$('.flexslider').flexslider({
  animation: "slide",
  animationLoop: false,
  itemWidth: 210,
  itemMargin: 5
});
/*

    Fancybox

*/

/*
$(".fancybox").fancybox();

$(".various").fancybox({ maxWidth	: 800, maxHeight	: 600, fitToView	: false, width	: '70%', height	: '70%', autoSize	: false, closeClick	: false, openEffect	: 'none', closeEffect	: 'none' });
*/
});
