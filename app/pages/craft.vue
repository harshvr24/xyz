<script setup lang="ts">
import CraftPage from '@/components/craft/CraftPage.vue'
import { site } from '@/lib/site'

const title = `Craft and manufacturing | ${site.name}`
const description =
	'How our saddlery and rugs are made: pattern cutting, stitching, finishing, inspection and export packing, each piece held to its approved sample.'

usePageSeo({ description, title })
</script>

<template>
	<CraftPage />
</template>
