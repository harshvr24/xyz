export type RangeSlug =
	| 'dog-products'
	| 'horse-accessories'
	| 'horse-rugs'
	| 'leather-goods'

export type ImageStatus = 'final' | 'placeholder'

export interface ProductImage {
	alt: string
	height: number
	src: string
	status: ImageStatus
	width: number
}

export interface Product {
	description: string
	features: readonly string[]
	image?: ProductImage
	name: string
	range: RangeSlug
	slug: string
	summary: string
	tagline?: string
}

export interface Range {
	description: string
	name: string
	slug: RangeSlug
	summary: string
	title: string
}
