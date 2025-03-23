
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['JetBrains Mono', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
				handwritten: ['Architects Daughter', 'cursive'],
				display: ['Architects Daughter', 'cursive'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
				code: ['JetBrains Mono', 'Fira Code', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				vibejam: {
					blue: '#333333',
					'light-blue': '#777777',
					gray: '#F7F7F7',
					'dark-gray': '#333333',
					black: '#000000',
					white: '#FFFFFF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'draw-in': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-light': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'vibrate': {
					'0%, 100%': { transform: 'translate(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translate(-1px)' },
					'20%, 40%, 60%, 80%': { transform: 'translate(1px)' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)', opacity: '0.8' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'gradient-move': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'float-element': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-15px) rotate(2deg)' },
					'75%': { transform: 'translateY(5px) rotate(-2deg)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-light': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'squiggle': {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(5px)' },
					'75%': { transform: 'translateX(-5px)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'draw-in': 'draw-in 2s ease-in-out forwards',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-slow': 'fade-in 1s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-light': 'pulse-light 3s ease-in-out infinite',
				'vibrate': 'vibrate 0.3s linear',
				'vibrate-hover': 'vibrate 0.5s linear',
				'scale-up': 'scale-up 0.3s ease-out forwards',
				'gradient-move': 'gradient-move 3s ease infinite',
				'float-element': 'float-element 8s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'bounce-light': 'bounce-light 4s ease-in-out infinite',
				'squiggle': 'squiggle 2s ease-in-out infinite'
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
			transitionDuration: {
				'400': '400ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
