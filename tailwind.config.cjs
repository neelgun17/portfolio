const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			accent: {
				DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
				bright: 'rgb(var(--accent-bright) / <alpha-value>)',
			},
			neutral: {
				50: '#fafafa',
				100: '#f5f5f5',
				200: '#e5e5e5',
				300: '#d4d4d4',
				400: '#a3a3a3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#171717',
				950: '#0a0a0a',
			},
		},
		fontFamily: {
			sans: ['"Inter Variable"', 'Inter', 'sans-serif'],
			mono: ['"JetBrains Mono"', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0',
			wide: '.025em',
			wider: '.1em',
			widest: '.25em',
		},
		extend: {
			maxWidth: {
				content: '64rem', // max-w-5xl-ish text column
			},
			spacing: {
				section: '8rem', // py-32 rhythm helper
			},
			boxShadow: {
				'accent-sm': '0 6px 20px -6px rgb(var(--accent) / 0.18)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'underline-grow': 'underlineGrow 1s ease-out forwards',
				marquee: 'marquee 40s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				underlineGrow: {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};
