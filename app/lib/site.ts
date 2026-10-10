export type ContentStatus = 'final' | 'placeholder'

export interface SiteLink {
	href: string
	label: string
}

export interface SiteUnit {
	address: string
	name: string
}

export interface Site {
	contentStatus: ContentStatus
	cookieName: string
	copyrightYear: number
	description: string
	email: string
	enquiryLabel: string
	enquiryRoute: string
	headquarters: string
	legalName: string
	name: string
	navItems: readonly SiteLink[]
	phones: readonly string[]
	policyLinks: readonly SiteLink[]
	tagline: string
	timeZone: string
	timeZoneLabel: string
	units: readonly SiteUnit[]
}

const navItems: readonly SiteLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/collections', label: 'Collections' },
	{ href: '/craft', label: 'Craft' },
	{ href: '/about', label: 'About' },
	{ href: '/awards', label: 'Awards' },
	{ href: '/contact', label: 'Contact' },
]

const policyLinks: readonly SiteLink[] = [
	{ href: '/terms', label: 'Terms & Conditions' },
	{ href: '/privacy', label: 'Privacy Policy' },
]

const units: readonly SiteUnit[] = [
	{
		address: 'Street address, industrial area, city, state, India',
		name: 'Unit 1',
	},
	{
		address: 'Street address, locality, city, state, India',
		name: 'Unit 2',
	},
]

export const site: Site = {
	contentStatus: 'placeholder',
	cookieName: 'xyz-tannery-cookie-consent',
	copyrightYear: 2026,
	description:
		'XYZ Tannery makes leather saddlery, horse rugs, equestrian accessories and dog products for export buyers. Browse the collections and request a quote.',
	email: 'hello@xyztannery.example',
	enquiryLabel: 'Request a quote',
	enquiryRoute: '/contact',
	headquarters: 'City, India',
	legalName: 'XYZ Tannery',
	name: 'XYZ Tannery',
	navItems,
	phones: ['+00 00000 00000', '+00 00000 00001'],
	policyLinks,
	tagline: 'Leather and equestrian goods made for export',
	timeZone: 'Asia/Kolkata',
	timeZoneLabel: 'GMT +5:30',
	units,
}
