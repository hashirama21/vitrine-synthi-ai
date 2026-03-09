/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			brand: {
  				DEFAULT: '#6b7db8',
  				light: '#8a9fd9',
  				lighter: '#b3c0de',
  				lightest: '#ebf1ff',
  				dark: '#5a6ba3',
  			},
  			surface: '#0a0a1a',
  			navy: {
  				DEFAULT: '#131738',
  				light: '#1a1f45',
  				lighter: '#222752',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'shimmer': {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(100%)' }
  			},
  			'spin-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' }
  			},
  			'spin-reverse': {
  				from: { transform: 'rotate(360deg)' },
  				to: { transform: 'rotate(0deg)' }
  			},
  			'bounce-slow': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-8px)' }
  			},
  			'ping-slow': {
  				'0%': { transform: 'scale(1)', opacity: '1' },
  				'75%, 100%': { transform: 'scale(2)', opacity: '0' }
  			},
  			'gradient-x': {
  				'0%, 100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' }
  			},
  			'float-1': {
  				'0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.3' },
  				'33%': { transform: 'translateY(-20px) translateX(10px) scale(1.1)', opacity: '0.5' },
  				'66%': { transform: 'translateY(-10px) translateX(-5px) scale(0.95)', opacity: '0.4' }
  			},
  			'float-2': {
  				'0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0.2' },
  				'50%': { transform: 'translateY(-15px) translateX(8px) rotate(45deg)', opacity: '0.4' }
  			},
  			'float-3': {
  				'0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.15' },
  				'50%': { transform: 'translateY(-25px) scale(1.2)', opacity: '0.35' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'shimmer': 'shimmer 2.5s linear infinite',
  			'spin-slow': 'spin-slow 25s linear infinite',
  			'spin-reverse': 'spin-reverse 20s linear infinite',
  			'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
  			'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
  			'gradient-x': 'gradient-x 10s ease infinite',
  			'float-1': 'float-1 8s ease-in-out infinite',
  			'float-2': 'float-2 12s ease-in-out infinite',
  			'float-3': 'float-3 10s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
