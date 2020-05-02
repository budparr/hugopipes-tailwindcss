

module.exports = {    
  plugins: [        
    require('tailwindcss')('./assets/css/tailwind.config.js'),       
    require('autoprefixer')({
      grid: true,
      overrideBrowserslist: ['>1%']
    }),    
  ]
}
