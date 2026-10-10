export interface BreadcrumbItem {
	name: string
	path: string
}

export function createBreadcrumbList(
	origin: string,
	items: readonly BreadcrumbItem[],
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			item: `${origin}${item.path}`,
			name: item.name,
			position: index + 1,
		})),
	}
}

export function createOrganization(origin: string, name: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name,
		url: origin,
	}
}

export function serializeStructuredData(data: object) {
	return JSON.stringify(data).replace(/</g, '\\u003c')
}
