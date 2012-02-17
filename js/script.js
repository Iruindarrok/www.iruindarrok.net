$(document).ready(function(){
  $('#nav').onePageNav({
    currentClass: 'current-nav',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 30,
  });
 window.inactiveLang = 'es';
  $('#nav-fixed').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 30,
  });
  $('.md-section').sectionLoader({
	'type':'md'
  });
 
  var templateEkintzak;
  $.get('./views/ekintzak.txt',function(data){
    templateEkintzak = data;
    $.getJSON('./content/ekintzak.json',function(data){
      
      
      data.forEach(function(value){
        var output = Mustache.render(templateEkintzak,value);
        var $li = $('<li></li>');
        $li.html(output);
        $('#ekintzak ul').append($li);
        hizkuntzaAldatu();
      });
  });
  
  });
  var hizkuntzaAldatu = function(){
    console.log(inactiveLang);
    $('.lang-' + inactiveLang).hide();
  }
  hizkuntzaAldatu();
  
  var goikoMenuaErakutsi = function(){
    $('#nav-fixed').show(2000);
  }
  var goikoMenuaEzkutatu = function(){
    $('#nav-fixed').hide(2000);
  }
  $('#nav-fixed').hide();
});


