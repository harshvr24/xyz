import { placeholderImage } from './product-image'
import type { Product } from './types'

const range = 'horse-accessories'

export const horseAccessories: readonly Product[] = [
	{
		description:
			'An everyday halter made in rope, cotton, polyester or nylon webbing, with padding at the nose and crown. Supplied on its own or with a matching lead.',
		features: [
			'Rope, cotton, polyester or nylon',
			'Padded nose and crown',
			'Adjustable fit',
			'Matching lead rope available',
		],
		name: 'Webbing Halter',
		range,
		slug: 'webbing-halter',
		summary: 'An everyday halter in webbing or rope, with a matching lead.',
		tagline: 'For daily handling',
	},
	{
		description:
			'Lead ropes in cotton or nylon for leading, tying up and showing. Soft in the hand, with a clip that is easy to work in gloves.',
		features: [
			'Cotton or nylon rope',
			'Trigger or panic clip',
			'Several lengths',
			'Colours to match the halters',
		],
		name: 'Lead Ropes',
		range,
		slug: 'lead-ropes',
		summary: 'Cotton and nylon lead ropes for the yard and the ring.',
		tagline: 'Soft in the hand',
	},
	{
		description:
			'A quilted pad that sits between the saddle and the back. It cushions, absorbs sweat and washes easily, and is cut to follow the line of the saddle.',
		features: [
			'Quilted cotton and polyester',
			'Shaped along the spine',
			'Girth and billet straps',
			'Machine washable',
		],
		image: placeholderImage(
			range,
			'saddle-pad',
			'Yellow quilted saddle pad with a black girth patch',
			1293,
			1190,
		),
		name: 'Saddle Pad',
		range,
		slug: 'saddle-pad',
		summary: 'A quilted, washable pad that cushions under the saddle.',
		tagline: 'Between saddle and back',
	},
	{
		description:
			'Padded boots that protect the legs from knee and hock to hoof during transport. Wide straps fasten quickly and hold through a long journey.',
		features: [
			'Covers from knee or hock to hoof',
			'Thick padding',
			'Wide touch-close straps',
			'Sold as a set of four',
		],
		name: 'Travel Boots',
		range,
		slug: 'travel-boots',
		summary: 'Padded leg protection for transport, sold as a set of four.',
		tagline: 'For the journey',
	},
	{
		description:
			'A padded neoprene guard that protects the top of the tail from rubbing in the lorry or trailer. Four straps hold it in place.',
		features: [
			'Padded neoprene',
			'Four touch-close straps',
			'Tie to attach to a rug or roller',
			'Easy to wipe clean',
		],
		name: 'Tail Guard',
		range,
		slug: 'tail-guard',
		summary: 'A padded neoprene guard that protects the tail in transit.',
		tagline: 'For the journey',
	},
	{
		description:
			'A hay bag with a small feeding window that slows a horse down and keeps forage off the floor. It holds a good feed and closes at the top.',
		features: [
			'Slow-feed opening',
			'Touch-close top',
			'Strong hanging strap',
			'Tough woven cloth',
		],
		name: 'Hay Bag',
		range,
		slug: 'hay-bag',
		summary: 'A slow-feed hay bag that keeps forage clean and off the floor.',
		tagline: 'Slower feeding',
	},
	{
		description:
			'A stretch hood that covers the head, mane and neck. It keeps plaits tidy and the coat clean and flat before a show.',
		features: [
			'Stretch fabric',
			'Covers head, mane and neck',
			'Zip under the jaw',
			'Machine washable',
		],
		name: 'Lycra Hood',
		range,
		slug: 'lycra-hood',
		summary: 'A stretch hood that keeps plaits and coat clean before a show.',
		tagline: 'Show ready',
	},
	{
		description:
			'Leg bandages for the stable and for work. Used over padding, they support the leg, help it stay clean and keep it warm.',
		features: [
			'Fleece and elastic versions',
			'Touch-close fastening',
			'Sold in sets of four',
			'Machine washable',
		],
		name: 'Bandages',
		range,
		slug: 'bandages',
		summary: 'Fleece and elastic leg bandages, sold in sets of four.',
		tagline: 'Support and warmth',
	},
	{
		description:
			'A muzzle that limits how much grass a horse can take while it stays out with the herd. It should be introduced gradually and checked daily for fit.',
		features: [
			'Limits grass intake',
			'Padded noseband',
			'Breakaway headcollar',
			'Open sides for air',
		],
		name: 'Grazing Muzzle',
		range,
		slug: 'grazing-muzzle',
		summary: 'A muzzle that limits grass intake for horses at pasture.',
		tagline: 'For managed grazing',
	},
	{
		description:
			'A mesh mask that keeps flies away from the eyes and ears and filters the sun. The mesh stands off the eye and the edges are soft.',
		features: [
			'Breathable mesh',
			'Stands clear of the eyes',
			'Ear cover option',
			'Soft fleece edges',
		],
		name: 'Fly Mask',
		range,
		slug: 'fly-mask',
		summary: 'A breathable mesh mask that protects the eyes from flies and sun.',
		tagline: 'For protection',
	},
]
