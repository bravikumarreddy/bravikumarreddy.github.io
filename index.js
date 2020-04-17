(function(){
  
  
    var loadScript = function(url, callback){
     
      var script = document.createElement("script");
      script.type = "text/javascript";
    
      if (script.readyState){ 
        script.onreadystatechange = function(){
          if (script.readyState == "loaded" || script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
          }
        };

      } else {
        script.onload = function(){
          callback();
        };
      }
    
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
        
    };
    
    var myAppJavaScript = function($){
      let styles = `<style>
          .bar {
              padding: 0;
              list-style-type: none;
              background: #17EAD9;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #17EAD9, #6078EA); 
              background: linear-gradient(to right, #17EAD9, #6078EA); 
              text-align:center;
              color:white;
              text-align:center;
              font-size:19px;
              font-weight:normal;
              line-height:20px;
              height:auto;
              margin:0;
              padding: 12px 0px;
              width:100%;
              border:none;
              position: relative;
              top: 0;
              left: 0;
              z-index: 999;
              font-family: "Helvetica";
          }
          .bar .button {
              background-color: #white;
              color:#2A2C2B;
              outline:none;
              border:none;
              line-height: 2em;
              padding: 0 1em;
              margin: 0 0 0 1em;
              display: inline-block;
              border-radius:.25em;
              cursor: pointer;
              width: auto;
              height: inherit;
              font-family: inherit;
              font-size: 0.875em;
              text-align: center;
              text-decoration: none;
              -webkit-appearance: none;
              appearance: none;
          }
      </style>`;
  
      $("body").prepend(styles);
      var bar = `<div class='bar'>
      All T-shirts 15% OFF <button class='button'> Check Now</button>
          </div>
      </body>`
      $("body").prepend(bar);
      
    };
  
    if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
      loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', function(){
        jQuery191 = jQuery.noConflict(true);
        myAppJavaScript(jQuery191);
      });
    } else {
      myAppJavaScript(jQuery);
    }
})();
  
