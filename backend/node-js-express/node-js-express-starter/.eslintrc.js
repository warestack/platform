module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true
	},
	// remove the following line for local development
	extends: '../../../.eslintrc.js',
	overrides: [
		{
			env: {
				node: true
			},
			files: [
				'.eslintrc.{js,cjs}'
			],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest'
	}
};
