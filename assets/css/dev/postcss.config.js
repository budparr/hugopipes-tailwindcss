class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss')('./assets/css/tailwind.config.js'),    
    require('autoprefixer')({      
      overrideBrowserslist: ['>1%']
    }),    
  ]
}