import type { BreadcrumbItem } from '@/lib/structured-data'
import {
	createBreadcrumbList,
	serializeStructuredData,
} from '@/lib/structured-data'

interface PageSeo {
	breadcrumbs?: readonly BreadcrumbItem[]
	description: string
	image?: string
	title: string
}

export function usePageSeo({
	breadcrumbs,
	description,
	image,
	title,
}: PageSeo) {
	const route = useRoute()
	const origin = useSiteOrigin()
	const canonical = `${origin}${route.path === '/' ? '' : route.path}`

	useSeoMeta({
		description,
		ogDescription: description,
		ogImage: image ? `${origin}${image}` : undefined,
		ogTitle: title,
		ogType: 'website',
		ogUrl: canonical,
		title,
		twitterCard: image ? 'summary_large_image' : 'summary',
	})

	useHead({
		link: [{ href: canonical, rel: 'canonical' }],
		script: breadcrumbs?.length
			? [
					{
						innerHTML: serializeStructuredData(
							createBreadcrumbList(origin, breadcrumbs),
						),
						key: 'breadcrumbs',
						type: 'application/ld+json',
					},
				]
			: [],
	})
}
