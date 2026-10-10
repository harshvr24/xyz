<script setup lang="ts">
import PolicyPage from '@/components/legal/PolicyPage.vue'
import type { LineTitleLine } from '@/components/shared/LineTitle.vue'
import { site } from '@/lib/site'

const title = `Terms and conditions | ${site.name}`
const description =
	'The terms that apply to using this website and to enquiries made through it.'
const lines: readonly LineTitleLine[] = [{ text: 'Terms and' }, { text: 'conditions' }]

usePageSeo({ description, title })
</script>

<template>
	<PolicyPage :description="description" :lines="lines" />
</template>
