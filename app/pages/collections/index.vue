<script setup lang="ts">
import CollectionsPage from '@/components/collections/CollectionsPage.vue'
import { site } from '@/lib/site'

const title = `Collections | ${site.name}`
const description =
	'Browse four ranges: leather saddlery, horse rugs, horse accessories and dog products, all made to one standard of finish.'

useSeoMeta({
	description,
	ogDescription: description,
	ogTitle: title,
	title,
})
</script>

<template>
	<CollectionsPage />
</template>
