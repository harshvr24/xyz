import type { ProductImage, RangeSlug } from './types'

export function placeholderImage(
	range: RangeSlug,
	slug: string,
	alt: string,
	width: number,
	height: number,
): ProductImage {
	return {
		alt,
		height,
		src: `/images/products/${range}/${slug}.jpg`,
		status: 'placeholder',
		width,
	}
}
