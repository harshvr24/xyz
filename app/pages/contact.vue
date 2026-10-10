<script setup lang="ts">
import ContactPage from '@/components/contact/ContactPage.vue'
import { site } from '@/lib/site'

const title = `Request a quote | ${site.name}`
const description =
	'Tell us which products you need, how many and where they ship. We reply with a quote and the next steps for sampling.'

useSeoMeta({
	description,
	ogDescription: description,
	ogTitle: title,
	title,
})
</script>

<template>
	<ContactPage />
</template>
