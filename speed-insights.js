// Vercel Speed Insights initialization
(function() {
  'use strict';
  
  // Speed Insights inline script (from @vercel/speed-insights)
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // Load Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  document.head.appendChild(script);
})();