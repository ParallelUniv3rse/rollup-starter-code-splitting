export default [
	// ES module version, for modern browsers
	{
		// input: 'src/main-a.js',  this doesn't work
		input: ['src/main-a.js'], // this works
		output: {
			dir: 'public/module',
			format: 'es',
			sourcemap: true
		},
		experimentalCodeSplitting: true,
		experimentalDynamicImport: true
	},

	// SystemJS version, for older browsers
	{
		// input: 'src/main-a.js',  this doesn't work
		input: ['src/main-a.js'], // this works
		output: {
			dir: 'public/nomodule',
			format: 'system',
			sourcemap: true
		},
		experimentalCodeSplitting: true,
		experimentalDynamicImport: true
	}
];
