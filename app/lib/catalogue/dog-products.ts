import { placeholderImage } from './product-image'
import type { Product } from './types'

const range = 'dog-products'

export const dogProducts: readonly Product[] = [
	{
		description:
			'Adjustable collars with matching leashes, made in leather and in printed webbing. The buckles and clips are chosen for strength, so a walk stays under control.',
		features: [
			'Leather and webbing versions',
			'Adjustable collar',
			'Strong clip and buckle',
			'Matching sets',
		],
		image: placeholderImage(
			range,
			'dog-leash-and-collar',
			'Patterned dog collar with a matching leash',
			968,
			747,
		),
		name: 'Dog Leash and Collar',
		range,
		slug: 'dog-leash-and-collar',
		summary: 'Adjustable collars with matching leashes in leather and webbing.',
		tagline: 'For the daily walk',
	},
	{
		description:
			'A dog coat cut and stitched like a small horse rug. Quilted for cold days, with lighter versions for warmer ones, and made in a full run of sizes.',
		features: [
			'Quilted and lightweight versions',
			'Belly strap',
			'Shaped along the back',
			'Sizes for small to large breeds',
		],
		name: 'Dog Rug',
		range,
		slug: 'dog-rug',
		summary: 'A quilted dog coat made like a small horse rug.',
		tagline: 'For cold mornings',
	},
	{
		description:
			'A padded bed with raised sides to lean on. The base grips the floor and the covers come in colours that sit quietly in a room.',
		features: [
			'Thick padded base',
			'Raised sides',
			'Non-slip backing',
			'Several sizes',
		],
		name: 'Dog Bed',
		range,
		slug: 'dog-bed',
		summary: 'A padded dog bed with raised sides and a non-slip base.',
		tagline: 'For a proper rest',
	},
	{
		description:
			'Rope and fabric toys made to be pulled, carried and chewed. The range includes tug ropes, balls and toys that reward a dog for working something out.',
		features: [
			'Rope, fabric and rubber toys',
			'Made for tugging and fetching',
			'Puzzle and squeaky versions',
			'Sold singly or in sets',
		],
		name: 'Dog Toys',
		range,
		slug: 'dog-toys',
		summary: 'Durable rope and fabric toys for tugging, fetching and chewing.',
		tagline: 'For play',
	},
	{
		description:
			'A light cotton bandana that ties or clips at the neck. Made in a changing range of prints and in sizes for small and large dogs.',
		features: [
			'Breathable cotton',
			'Adjustable fit',
			'Seasonal prints',
			'Two sizes',
		],
		name: 'Dog Bandana',
		range,
		slug: 'dog-bandana',
		summary: 'A light cotton bandana in a changing range of prints.',
		tagline: 'A small flourish',
	},
	{
		description:
			'A padded harness with attachment points at the back and at the chest. Clipping the leash at the chest turns a pulling dog back towards the handler.',
		features: [
			'Padded chest and back plates',
			'Front and back leash rings',
			'Four points of adjustment',
			'Reflective stitching',
		],
		image: placeholderImage(
			range,
			'dog-harness',
			'Black padded dog harness with reflective stitching',
			757,
			736,
		),
		name: 'Dog Harness',
		range,
		slug: 'dog-harness',
		summary: 'A padded harness with a front ring that discourages pulling.',
		tagline: 'For steadier walks',
	},
]
