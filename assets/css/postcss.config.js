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
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html'
	        'content/**/*.md',
	        'assets/css/site.css'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html',
		     'md',
		     'css']
      }], 
      fontFace: false,
      whitelist: ['class1', 'class2']
    }),    
    require('autoprefixer')({
      grid: true,
      overrideBrowserslist: ['>1%']
    }),    
  ]
}
