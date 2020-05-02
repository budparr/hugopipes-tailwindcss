module.exports = {    
  plugins: [        
    require('tailwindcss')('./assets/css/tailwind.config.js'),    
    require('autoprefixer')({      
      overrideBrowserslist: ['>1%']
    }),    
  ]
}