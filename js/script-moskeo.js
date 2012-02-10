$(document).ready(function(){
  $("#countdown").countdown(
  	{
  		date:"february 17, 2012 23:00:00"
  		,htmlTemplate: '<div class="countdown-inner">%{d} <span class="small">egun eta</span> %{h} <span class="small">ordu barru jakingo duzu</span></div>'
  	}
  );

});
