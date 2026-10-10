module.exports = {

	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'

	],


	darkMode: 'class',

	theme: {

		extend: {

			colors: {

				canvas: 'rgb(var(--color-canvas) / <alpha-value>)',

				surface: 'rgb(var(--color-surface) / <alpha-value>)',

				border: 'rgb(var(--color-border) / <alpha-value>)',

				text: 'rgb(var(--color-text) / <alpha-value>)',

				muted: 'rgb(var(--color-muted) / <alpha-value>)',

				accent: 'rgb(var(--color-accent) / <alpha-value>)'

			},

			fontFamily: {

				sans: ['GeneralSans', 'system-ui', 'Inter', 'ui-sans-serif', 'sans-serif'],

				mono: ['JetBrains Mono', 'ui-monospace', 'monospace']

			},

			container: {

				padding: {

					DEFAULT: '1rem',

					sm: '2rem',

					lg: '5rem',

					xl: '6rem',

					'2xl': '8rem'

				}

			}

		}

	},


	plugins: [require('@tailwindcss/forms')]

};
