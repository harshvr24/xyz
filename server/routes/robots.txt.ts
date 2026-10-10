import { site } from '~~/app/lib/site'

export default defineEventHandler((event) => {
	const rules =
		site.contentStatus === 'final'
			? ['User-agent: *', 'Allow: /', `Sitemap: ${getSiteOrigin(event)}/sitemap.xml`]
			: ['User-agent: *', 'Disallow: /']

	setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

	return `${rules.join('\n')}\n`
})
