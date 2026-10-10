<script setup lang="ts">
import PolicyPage from '@/components/legal/PolicyPage.vue'
import type { LineTitleLine } from '@/components/shared/LineTitle.vue'
import { site } from '@/lib/site'

const title = `Privacy policy | ${site.name}`
const description =
	'How we handle the details you share when you browse this website or send an enquiry.'
const lines: readonly LineTitleLine[] = [{ text: 'Privacy' }, { text: 'policy' }]

useSeoMeta({
	description,
	ogDescription: description,
	ogTitle: title,
	title,
})
</script>

<template>
	<PolicyPage :description="description" :lines="lines" />
</template>
