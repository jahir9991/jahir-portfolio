module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV !== 'development' ? { cssnano: {} } : {})
	}
};