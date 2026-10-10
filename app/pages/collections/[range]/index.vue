<script setup lang="ts">
import RangePage from '@/components/collections/RangePage.vue'
import { collectionsRoute, getRange, getRangePath } from '@/lib/catalogue'
import { site } from '@/lib/site'

const route = useRoute()
const range = getRange(String(route.params.range))

if (!range) {
	throw createError({
		fatal: true,
		statusCode: 404,
		statusMessage: 'Collection not found',
	})
}

const title = `${range.title} | ${site.name}`

usePageSeo({
	breadcrumbs: [
		{ name: 'Collections', path: collectionsRoute },
		{ name: range.name, path: getRangePath(range.slug) },
	],
	description: range.summary,
	title,
})
</script>

<template>
	<RangePage :range="range" />
</template>
