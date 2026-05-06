import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a simple bundle that initializes Speed Insights
const speedInsightsCode = `
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
`;

// Write the bundle
writeFileSync(join(__dirname, 'speed-insights.js'), speedInsightsCode.trim());
console.log('✓ Created speed-insights.js');
