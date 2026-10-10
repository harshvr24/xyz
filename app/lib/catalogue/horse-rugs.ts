import { placeholderImage } from './product-image'
import type { Product } from './types'

const range = 'horse-rugs'

export const horseRugs: readonly Product[] = [
	{
		description:
			'A light sheet for shows, travel and warm evenings. It keeps dust off a clean coat and washes easily, so it also works as a liner under a heavier rug.',
		features: [
			'Light, breathable cloth',
			'Cross surcingles and front buckles',
			'Machine washable',
			'Works as an under-rug',
		],
		image: placeholderImage(
			range,
			'summer-sheet',
			'Blue summer sheet shown on a display form',
			2294,
			1540,
		),
		name: 'Summer Sheet',
		range,
		slug: 'summer-sheet',
		summary: 'A light, washable sheet for shows, travel and warm evenings.',
		tagline: 'For the summer',
	},
	{
		description:
			'A fleece cooler that draws moisture away from the coat. Put on after work or a bath, it lets the horse dry and cool down gradually without catching a chill.',
		features: [
			'Moisture-wicking fleece',
			'Full neck option',
			'Bound edges',
			'Front buckles and belly straps',
		],
		image: placeholderImage(
			range,
			'fleece-rug',
			'Burgundy fleece rug with a full neck',
			2143,
			1607,
		),
		name: 'Fleece Rug',
		range,
		slug: 'fleece-rug',
		summary: 'A wicking fleece cooler for after work, travel and bathing.',
		tagline: 'For cooling down',
	},
	{
		description:
			'A lightweight mesh rug that keeps flies and biting insects off without trapping heat. The weave lets air through and the pale cloth reflects the sun.',
		features: [
			'Fine, breathable mesh',
			'Belly flap and neck cover options',
			'Lined shoulder to prevent rubbing',
			'Tail flap',
		],
		name: 'Fly Rug',
		range,
		slug: 'fly-rug',
		summary: 'A breathable mesh rug that keeps flies and insects away.',
		tagline: 'For protection',
	},
	{
		description:
			'A waterproof turnout rug with a soft lining and a combo neck. Built for wet days in the field, with a cut that leaves the shoulder free to move.',
		features: [
			'Waterproof, breathable outer',
			'Soft lining',
			'Combo neck',
			'Cross surcingles, leg straps and tail flap',
		],
		image: placeholderImage(
			range,
			'rain-rug',
			'Blue waterproof turnout rug with a combo neck',
			2252,
			1592,
		),
		name: 'Rain Rug',
		range,
		slug: 'rain-rug',
		summary: 'A waterproof turnout rug with a soft lining and combo neck.',
		tagline: 'For the rain',
	},
	{
		description:
			'A stable rug offered in several weights, so the same pattern works through the year. The cloth breathes, the lining is smooth against the coat and the fit stays put overnight.',
		features: [
			'Several fill weights',
			'Breathable outer',
			'Smooth lining',
			'Cross surcingles and fillet string',
		],
		image: placeholderImage(
			range,
			'stable-rug',
			'Navy quilted stable rug',
			1660,
			1028,
		),
		name: 'Stable Rug',
		range,
		slug: 'stable-rug',
		summary: 'A breathable stable rug made in a range of weights.',
		tagline: 'For comfort indoors',
	},
	{
		description:
			'An all-weather rug to ride in. It covers the quarters and loins, carries reflective strips for dull days and comes with a neck piece that can be taken off.',
		features: [
			'Weather-resistant outer',
			'Reflective strips',
			'Detachable neck',
			'Cut to sit around the saddle',
		],
		image: placeholderImage(
			range,
			'riding-rug',
			'Bright green riding rug with reflective strips and a neck cover',
			2262,
			1657,
		),
		name: 'Riding Rug',
		range,
		slug: 'riding-rug',
		summary: 'An all-weather riding rug with reflective strips.',
		tagline: 'For the ride',
	},
	{
		description:
			'An exercise sheet that keeps the back and quarters warm during work. Made in fly mesh, waterproof, fleece-lined and high-visibility versions, so there is one for each season.',
		features: [
			'Shaped to fit around the saddle',
			'Mesh, waterproof and fleece-lined versions',
			'High-visibility option',
			'Tail cord',
		],
		image: placeholderImage(
			range,
			'exercise-rug',
			'Navy exercise sheet with a reflective stripe',
			1918,
			1301,
		),
		name: 'Exercise Rug',
		range,
		slug: 'exercise-rug',
		summary: 'An exercise sheet made in versions for every season.',
		tagline: 'For exercise',
	},
	{
		description:
			'A shaped rain rug with a neck cover that detaches. The outer is a tough woven polyester, cut to follow the topline so water runs off and the rug stays in place.',
		features: [
			'Tough waterproof polyester outer',
			'Detachable neck cover',
			'Anatomic cut along the topline',
			'Shoulder gussets',
		],
		image: placeholderImage(
			range,
			'rain-rug-combo',
			'Red rain rug with a detachable neck cover',
			2058,
			1599,
		),
		name: 'Rain Rug Combo',
		range,
		slug: 'rain-rug-combo',
		summary: 'A shaped rain rug with a detachable neck cover.',
		tagline: 'The rain guard',
	},
	{
		description:
			'A quilted stable rug for cold nights. It comes with a fleece neck that detaches and extra padding at the wither, where a rug presses most.',
		features: [
			'Quilted fill',
			'Detachable fleece neck',
			'Padded wither',
			'Cross surcingles',
		],
		image: placeholderImage(
			range,
			'quilted-rug',
			'Navy quilted stable rug on a display stand',
			2326,
			1450,
		),
		name: 'Quilted Rug',
		range,
		slug: 'quilted-rug',
		summary: 'A quilted stable rug with a detachable fleece neck.',
		tagline: 'For the winter',
	},
	{
		description:
			'A breathable, wicking rug in a waffle weave. Useful for travel, after exercise and as a layer under a heavier rug.',
		features: [
			'Waffle weave that wicks moisture',
			'Breathable cloth',
			'Works as an under-rug',
			'Front buckle and surcingles',
		],
		image: placeholderImage(
			range,
			'coolex-rug',
			'Bay horse wearing a dark waffle-weave cooler rug',
			1612,
			1490,
		),
		name: 'Coolex Rug',
		range,
		slug: 'coolex-rug',
		summary: 'A wicking waffle-weave rug for travel and after exercise.',
		tagline: 'For travel and recovery',
	},
]
