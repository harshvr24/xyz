import type { H3Event } from 'h3'

export function getSiteOrigin(event: H3Event) {
	const { siteUrl } = useRuntimeConfig(event).public
	const origin = siteUrl || getRequestURL(event).origin

	return origin.replace(/\/$/, '')
}
