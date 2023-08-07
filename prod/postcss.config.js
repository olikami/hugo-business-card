module.exports = {
  plugins: [
  	require('tailwindcss'),
    require('postcss-100vh-fix'),
    require('autoprefixer')({
    	browserlist: [
    		'defaults',
    		'cover 99.5% in CH',
    		'IE 10' // Chose your fights wisely.
		]
    }),
    require('cssnano')({
        preset: 'default',
    }),
  ]
}