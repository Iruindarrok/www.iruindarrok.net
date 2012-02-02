$(document).ready(function(){
  /*$('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 30,
  });*/
  $('#nav-fixed').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 30,
  });
  $('.md-section').sectionLoader({
	'type':'md'
  });
});
