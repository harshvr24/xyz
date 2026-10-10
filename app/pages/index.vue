<script setup lang="ts">
import LandingPage from '@/components/landing/LandingPage.vue'
import {
	createOrganization,
	serializeStructuredData,
} from '@/lib/structured-data'
import { site } from '@/lib/site'

usePageSeo({
	description: site.description,
	title: `${site.name} | ${site.tagline}`,
})

useHead({
	script: [
		{
			innerHTML: serializeStructuredData(
				createOrganization(useSiteOrigin(), site.name),
			),
			key: 'organization',
			type: 'application/ld+json',
		},
	],
})
</script>

<template>
	<LandingPage />
</template>
