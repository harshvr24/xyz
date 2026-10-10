export const surfaceTones = {
	card: 'surface-card',
	dark: 'surface-dark',
	forest: 'surface-forest',
	gold: 'surface-gold',
	navy: 'surface-navy',
	primary: 'surface-oxblood',
	tan: 'surface-tan',
} as const

export type SurfaceTone = keyof typeof surfaceTones

export const surfaceForegroundTones = {
	card: 'text-card-foreground',
	dark: 'text-primary-foreground',
	forest: 'text-brand-forest-foreground',
	gold: 'text-brand-gold-foreground',
	navy: 'text-brand-navy-foreground',
	primary: 'text-primary-foreground',
	tan: 'text-brand-tan-foreground',
} satisfies Record<SurfaceTone, string>
