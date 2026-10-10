import type { ImageFit, ProductImage, RangeSlug } from './types'

export function placeholderImage(
	range: RangeSlug,
	slug: string,
	alt: string,
	width: number,
	height: number,
	fit: ImageFit = 'contain',
): ProductImage {
	return {
		alt,
		fit,
		height,
		src: `/images/products/${range}/${slug}.jpg`,
		status: 'placeholder',
		width,
	}
}
