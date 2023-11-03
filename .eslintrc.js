module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es2021: true
	},
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
	},
	rules: {
		semi: [2, 'always'],
		"no-unused-vars": ["error", { "vars": "all", "args": "none" }],
		quotes: ["error", "single", { "avoidEscape": true }],
		"space-before-function-paren": ["error", "never"]
	}
}
