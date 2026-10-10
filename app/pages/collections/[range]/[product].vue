<script setup lang="ts">
import ProductPage from '@/components/collections/ProductPage.vue'
import { getProduct, getRange } from '@/lib/catalogue'
import { site } from '@/lib/site'

const route = useRoute()
const range = getRange(String(route.params.range))
const product = range
	? getProduct(range.slug, String(route.params.product))
	: undefined

if (!range || !product) {
	throw createError({
		fatal: true,
		statusCode: 404,
		statusMessage: 'Product not found',
	})
}

const title = `${product.name} | ${range.name} | ${site.name}`

useSeoMeta({
	description: product.summary,
	ogDescription: product.summary,
	ogImage: product.image?.src,
	ogTitle: title,
	title,
})
</script>

<template>
	<ProductPage :product="product" :range="range" />
</template>
