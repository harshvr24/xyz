import {
	collectionsRoute,
	getProductPath,
	getRangePath,
	products,
	ranges,
} from '~~/app/lib/catalogue'
import { site } from '~~/app/lib/site'

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
}

export default defineEventHandler((event) => {
	const origin = getSiteOrigin(event)
	const paths = [
		...site.navItems.map((item) => item.href),
		...site.policyLinks.map((item) => item.href),
		collectionsRoute,
		...ranges.map((range) => getRangePath(range.slug)),
		...products.map((product) => getProductPath(product)),
	]
	const urls = [...new Set(paths)]
		.map((path) => `${origin}${path === '/' ? '' : path}` || origin)
		.map((url) => `\t<url><loc>${escapeXml(url)}</loc></url>`)

	setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		'</urlset>',
		'',
	].join('\n')
})
