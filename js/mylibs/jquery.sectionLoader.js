/*
 * jQuery Section Loader Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2012 Oier Bravo
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.1
 *
 * Example usage:
 * $('.section').sectionLoader({});
 *
 * $('#nav').sectionLoader({
 *   type: 'html',
 * });
 *
 * //For MarkDown source:
 * - need to include "" before this plugin.
 * $('#nav').sectionLoader({
 *   type: 'md',
 * });
 *
 */
;(function($) {
  $.fn.sectionLoader = function(options) {
    var opts = $.extend({}, $.fn.sectionLoader.defaults, options),
        sectionLoader = {};
    
    
	sectionLoader.gimmeANiceFilePath = function($this,o){
		elementId = $this.attr('id');
		filePath = o.pathPrefix + elementId + '.' + o.type;
		
		return filePath;
	}
    sectionLoader.gotSomethingFromTheServer = function(response,status){
		
	}
	sectionLoader.doAnAmazingDataRender = function(data,type){
		switch(type){
			default:
			  return data;
			case 'md':
			    
				var converter = new Markdown.Converter();
				return converter.makeHtml(data);
			
		}
	}
    sectionLoader.init = function($this, o) {
		var niceFilePath = sectionLoader.gimmeANiceFilePath($this,o);
		$get = $.ajax(
			{url:niceFilePath
			  ,dataType:'text'
			  ,type: "GET",

				
			});
		$get.success(function(data){
  		renderedData = sectionLoader.doAnAmazingDataRender(data,o.type);
  		$this.html(renderedData);
		});
		
    };
    
    return this.each(function() {
      var $this = $(this),
          o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      sectionLoader.init($this, o);
    
    });
  };

  // default options
  $.fn.sectionLoader.defaults = {
    type: 'txt'
	,pathPrefix:'./content/'
  };

})(jQuery);