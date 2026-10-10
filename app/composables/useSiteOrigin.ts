export function useSiteOrigin() {
	const { siteUrl } = useRuntimeConfig().public
	const origin = siteUrl || useRequestURL().origin

	return origin.replace(/\/$/, '')
}
