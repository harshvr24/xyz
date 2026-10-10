import { dogProducts } from './dog-products'
import { horseAccessories } from './horse-accessories'
import { horseRugs } from './horse-rugs'
import { leatherGoods } from './leather-goods'
import { ranges } from './ranges'
import type { Product, Range, RangeSlug } from './types'

export { ranges } from './ranges'
export type {
	ImageStatus,
	Product,
	ProductImage,
	Range,
	RangeSlug,
} from './types'

export const products: readonly Product[] = [
	...leatherGoods,
	...horseRugs,
	...horseAccessories,
	...dogProducts,
]

export const collectionsRoute = '/collections'

export function getRangePath(range: RangeSlug) {
	return `${collectionsRoute}/${range}`
}

export function getProductPath(product: Product) {
	return `${getRangePath(product.range)}/${product.slug}`
}

export function getRange(slug: string): Range | undefined {
	return ranges.find((range) => range.slug === slug)
}

export function getProductsByRange(range: RangeSlug): readonly Product[] {
	return products.filter((product) => product.range === range)
}

export function getProduct(range: string, slug: string): Product | undefined {
	return products.find(
		(product) => product.range === range && product.slug === slug,
	)
}

export function findProductBySlug(slug: string): Product | undefined {
	return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(
	product: Product,
	count = 3,
): readonly Product[] {
	const siblings = getProductsByRange(product.range)
	const start = siblings.findIndex((entry) => entry.slug === product.slug)

	return Array.from(
		{ length: Math.min(count, siblings.length - 1) },
		(_, offset) => siblings[(start + offset + 1) % siblings.length],
	).filter((entry): entry is Product => entry !== undefined)
}
