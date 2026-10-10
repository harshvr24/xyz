import { placeholderImage } from './product-image'
import type { Product } from './types'

const range = 'leather-goods'

export const leatherGoods: readonly Product[] = [
	{
		description:
			'A bridle cut to follow the shape of the head rather than cross it. The crown is shaped away from the ears and the cheekpieces sit clear of the facial nerves, so pressure from the bit and noseband spreads more evenly.',
		features: [
			'Crown piece shaped to sit behind the ears',
			'Cheekpieces set clear of the sensitive facial areas',
			'Padded noseband and browband',
			'Supplied with matching reins on request',
		],
		name: 'Anatomic Bridle',
		range,
		slug: 'anatomic-bridle',
		summary:
			'A bridle shaped around the head to keep pressure away from sensitive areas.',
		tagline: 'Shaped to the horse',
	},
	{
		description:
			'Soft leather with a generously padded crown and a lined noseband, finished with polished metal fittings. Made for horses that object to poll pressure and for riders who want a quiet, steady contact.',
		features: [
			'Wide padded crown piece',
			'Soft-lined noseband',
			'Polished metal fittings',
			'Decorated browband options',
		],
		image: placeholderImage(
			range,
			'soft-crown-bridle',
			'Black leather bridle with a padded crown and a beaded browband',
			480,
			896,
		),
		name: 'Soft Crown Bridle',
		range,
		slug: 'soft-crown-bridle',
		summary: 'Soft leather bridle with a padded crown and a lined noseband.',
		tagline: 'Comfort at the poll',
	},
	{
		description:
			'A leather headcollar for the yard, the lorry and the show ring. The cut sits comfortably along the cheek, the crown fastens with a single buckle and the chin strap adjusts for a close fit.',
		features: [
			'Comfort-cut cheek and noseband',
			'Single-buckle crown',
			'Adjustable chin strap',
			'Brass-plated hardware',
		],
		image: placeholderImage(
			range,
			'halter',
			'Dark horse wearing a black leather halter with brass fittings',
			940,
			1300,
		),
		name: 'Leather Halter',
		range,
		slug: 'halter',
		summary:
			'A leather headcollar with an adjustable chin and brass-plated hardware.',
		tagline: 'For the yard and the ring',
	},
	{
		description:
			'A webbing halter with a leather crown that is designed to be replaced. The crown fastens with a buckle on each side and the chin adjusts, so one halter keeps fitting through seasons of work and rest.',
		features: [
			'Replaceable leather crown',
			'Webbing body with leather padding',
			'Double-buckle crown',
			'Adjustable chin strap',
		],
		image: placeholderImage(
			range,
			'soft-range-halter',
			'Brown padded halter with brass buckles',
			601,
			1226,
		),
		name: 'Soft Range Halter',
		range,
		slug: 'soft-range-halter',
		summary:
			'A padded halter with a replaceable leather crown and double buckles.',
		tagline: 'Padded where it matters',
	},
	{
		description:
			'A breastplate that anchors the saddle at five points, so it stays put over a fence and up a bank. A familiar piece of kit for eventers and show jumpers.',
		features: [
			'Five points of attachment',
			'Elastic inserts for freedom through the shoulder',
			'Padded chest and wither straps',
			'Running attachment available',
		],
		name: 'Five-Point Breastplate',
		range,
		slug: 'five-point-breastplate',
		summary:
			'A five-point breastplate that keeps the saddle secure when jumping.',
		tagline: 'Holds the saddle steady',
	},
	{
		description:
			'A contoured girth for jumping saddles. The side against the horse is padded and lined in soft leather, and the buckles run on elastic-backed rollers so the girth tightens smoothly.',
		features: [
			'Anatomically contoured shape',
			'Soft-lined, padded horse side',
			'Roller buckles on elastic',
			'Central ring for training aids',
		],
		image: placeholderImage(
			range,
			'jumping-girth',
			'Black padded leather jumping girth with roller buckles',
			332,
			140,
		),
		name: 'Jumping Girth',
		range,
		slug: 'jumping-girth',
		summary: 'A contoured, padded girth with elastic-backed roller buckles.',
		tagline: 'Room to breathe',
	},
	{
		description:
			'A short girth for saddles with long billets. Made in leather with a padded lining, or with a fleece lining on request, and finished with elastic at the ends.',
		features: [
			'Short length for long billets',
			'Padded leather lining, fleece on request',
			'Elastic ends',
			'Shaped to clear the elbow',
		],
		image: placeholderImage(
			range,
			'dressage-girth',
			'Black padded short dressage girth',
			303,
			168,
		),
		name: 'Dressage Girth',
		range,
		slug: 'dressage-girth',
		summary: 'A short, padded girth for saddles with long billets.',
		tagline: 'Short and close',
	},
	{
		description:
			'An anatomic girth with a wide belly guard that shields the horse from its own shoes and studs over a fence. Elastic at the ends keeps the fit even, and a ring at the centre takes a martingale or breastplate.',
		features: [
			'Wide belly guard',
			'Anatomic cut behind the elbow',
			'Elastic ends',
			'Central D-ring',
		],
		image: placeholderImage(
			range,
			'stud-girth',
			'Black leather stud girth with a wide belly guard',
			321,
			178,
		),
		name: 'Stud Girth',
		range,
		slug: 'stud-girth',
		summary:
			'An anatomic girth with a belly guard that protects against studs.',
		tagline: 'Guarded over fences',
	},
	{
		description:
			'A lightweight general purpose saddle with a suede seat and padded knee rolls. Balanced for everyday schooling and hacking, and built on a tree that suits a wide range of horses.',
		features: [
			'Suede seat',
			'Padded knee rolls',
			'Lightweight construction',
			'Made in several seat sizes',
		],
		image: placeholderImage(
			range,
			'saddle',
			'Dark brown general purpose saddle with a suede seat',
			888,
			804,
		),
		name: 'Saddle',
		range,
		slug: 'saddle',
		summary: 'A lightweight general purpose saddle with a suede seat.',
		tagline: 'A seat for every day',
	},
	{
		description:
			'A soft pad saddle for ponies and young riders. It cushions the back, spreads the weight of the rider and gives a small rider something secure to sit into.',
		features: [
			'Cushioned, flexible seat',
			'Sized for ponies and small riders',
			'Front handle for security',
			'Fitted girth straps',
		],
		image: placeholderImage(
			range,
			'pony-pad',
			'Black leather pony pad saddle with a quilted seat',
			551,
			584,
		),
		name: 'Pony Pad',
		range,
		slug: 'pony-pad',
		summary: 'A cushioned pad saddle for ponies and young riders.',
		tagline: 'A first saddle',
	},
	{
		description:
			'A tall leather riding boot with a full-length zip at the back. The ankle is padded for long days in the saddle and the sole is rubber for grip on the yard.',
		features: [
			'Leather upper',
			'Full-length rear zip',
			'Padded ankle',
			'Rubber sole',
		],
		image: placeholderImage(
			range,
			'long-riding-boot',
			'Pair of tall black leather riding boots',
			716,
			556,
		),
		name: 'Long Riding Boot',
		range,
		slug: 'long-riding-boot',
		summary: 'A tall leather riding boot with a rear zip and rubber sole.',
		tagline: 'Tall and close-fitting',
	},
	{
		description:
			'A short boot built to be worn all day. Elastic gussets and a zip make it quick to pull on, the ankle is padded and the heel is reinforced.',
		features: [
			'Leather upper with elastic gussets',
			'Zip fastening',
			'Padded ankle',
			'Reinforced heel',
		],
		image: placeholderImage(
			range,
			'short-riding-boot',
			'Pair of short black leather jodhpur boots',
			502,
			485,
		),
		name: 'Short Riding Boot',
		range,
		slug: 'short-riding-boot',
		summary: 'A short leather boot with elastic gussets and a padded ankle.',
		tagline: 'Made for long days',
	},
	{
		description:
			'A padded roller for lungeing and long-reining. Rings at several heights take side reins and training aids, and the pads sit either side of the spine to keep pressure off it.',
		features: [
			'Multiple rings at different heights',
			'Padding either side of the spine',
			'Adjustable girth straps',
			'Leather and webbing options',
		],
		image: placeholderImage(
			range,
			'training-roller',
			'Padded training roller with rings and leather straps',
			417,
			687,
		),
		name: 'Training Roller',
		range,
		slug: 'training-roller',
		summary:
			'A padded roller with rings at several heights for work on the lunge.',
		tagline: 'For work from the ground',
	},
	{
		description:
			'An open-fronted boot with a hard shell at the back. It protects the tendons of the front legs from a strike by the hind feet, and leaves the front of the leg clear.',
		features: [
			'Shaped hard shell over the tendon',
			'Soft lining',
			'Buckle and elastic fastenings',
			'Sold in pairs',
		],
		image: placeholderImage(
			range,
			'tendon-boot',
			'Horse standing on grass wearing leather tendon boots with elastic straps',
			896,
			797,
		),
		name: 'Tendon Boot',
		range,
		slug: 'tendon-boot',
		summary: 'A hard-shell boot that protects the front tendons from a strike.',
		tagline: 'Protection over a fence',
	},
	{
		description:
			'English stirrup leathers cut from strong hide, with stitched ends and stainless buckles. Numbered holes keep both sides even.',
		features: [
			'Cut from strong, low-stretch hide',
			'Stainless steel buckles',
			'Numbered holes',
			'Sold in pairs and several lengths',
		],
		image: placeholderImage(
			range,
			'stirrup-leather',
			'Pair of brown stirrup leathers with steel buckles',
			1393,
			495,
		),
		name: 'Stirrup Leather',
		range,
		slug: 'stirrup-leather',
		summary: 'English stirrup leathers with stainless buckles.',
		tagline: 'Strong where it counts',
	},
]
