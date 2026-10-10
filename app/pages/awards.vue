<script setup lang="ts">
import AwardsPage from '@/components/awards/AwardsPage.vue'
import { site } from '@/lib/site'

const title = `Awards and recognition | ${site.name}`
const description =
	'The awards, certificates and trade memberships of the house, kept in one place.'

usePageSeo({ description, title })
</script>

<template>
	<AwardsPage />
</template>
