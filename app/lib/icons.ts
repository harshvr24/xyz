export const appIcons = {
	arrowDown: 'lucide:arrow-down',
	arrowLeft: 'lucide:arrow-left',
	arrowRight: 'lucide:arrow-right',
	arrowUp: 'lucide:arrow-up',
	arrowUpRight: 'lucide:arrow-up-right',
	check: 'lucide:check',
	close: 'lucide:x',
	mail: 'lucide:mail',
	mapPin: 'lucide:map-pin',
	minus: 'lucide:minus',
	phone: 'lucide:phone',
	plus: 'lucide:plus',
} as const

export type AppIcon = (typeof appIcons)[keyof typeof appIcons]
