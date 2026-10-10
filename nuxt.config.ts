// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { site } from './app/lib/site'

const robots =
	site.contentStatus === 'final' ? 'index, follow' : 'noindex, nofollow'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },

	app: {
		head: {
			title: `${site.name} | ${site.tagline}`,
			htmlAttrs: { lang: 'en' },
			meta: [
				{ name: 'description', content: site.description },
				{ name: 'robots', content: robots },
			],
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
		},
	},

	css: [
		'~/assets/css/tailwind.css',
		'lenis/dist/lenis.css',
		'~/assets/css/lenis.css',
	],
	fonts: {
		families: [
			{
				name: 'Switzer',
				provider: 'fontshare',
				weights: [400, 500, 600, 700, 800],
				styles: ['normal'],
				subsets: ['latin'],
			},
			{
				name: 'Boska',
				provider: 'fontshare',
				weights: [400, 500, 700],
				styles: ['normal', 'italic'],
				subsets: ['latin'],
			},
		],
	},
	icon: {
		mode: 'svg',
		provider: 'none',
		fallbackToApi: false,
		serverBundle: false,
		clientBundle: {
			scan: true,
			icons: [
				'lucide:arrow-down',
				'lucide:arrow-left',
				'lucide:arrow-right',
				'lucide:arrow-up',
				'lucide:arrow-up-right',
				'lucide:check',
				'lucide:mail',
				'lucide:map-pin',
				'lucide:minus',
				'lucide:phone',
				'lucide:plus',
				'lucide:x',
			],
		},
	},

	runtimeConfig: {
		enquiryFrom: '',
		enquiryTo: '',
		resendApiKey: '',
		public: {
			siteUrl: '',
		},
	},

	nitro: {
		noExternals: true,
		prerender: {
			crawlLinks: true,
			ignore: ['/_vercel'],
			routes: ['/', '/robots.txt', '/sitemap.xml'],
		},
	},

	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
				'@vueuse/core',
				'zod',
				'clsx',
				'tailwind-merge',
				'gsap',
				'gsap/ScrollTrigger',
				'gsap/SplitText',
				'gsap/all',
				'lenis',
				'class-variance-authority',
			],
		},
	},

	modules: [
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@vueuse/nuxt',
		'shadcn-nuxt',
	],

	image: {
		provider: 'vercel',
		vercel: {
			formats: ['image/webp'],
			minimumCacheTTL: 86400,
		},
		none: {},
		screens: {
			'sm': 640,
			'md': 768,
			'lg': 1024,
			'xl': 1280,
			'2xl': 1536,
			'portrait': 448,
			'portrait-2x': 896,
		},
		// format: ['webp'],
		// ipx: {
		// 	modifiers: {
		// 		format: 'webp',
		// 	},
		// },
	},

	shadcn: {
		prefix: 'Ui',
		componentDir: '@/components/ui',
	},
})
