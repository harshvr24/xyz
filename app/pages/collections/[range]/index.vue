<script setup lang="ts">
import RangePage from '@/components/collections/RangePage.vue'
import { getRange } from '@/lib/catalogue'
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

useSeoMeta({
	description: range.summary,
	ogDescription: range.summary,
	ogTitle: title,
	title,
})
</script>

<template>
	<RangePage :range="range" />
</template>
