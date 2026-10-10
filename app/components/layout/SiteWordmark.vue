<script setup lang="ts">
import { site } from '@/lib/site'
</script>

<template>
	<span class="site-wordmark">{{ site.name }}</span>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.site-wordmark {
	@apply inline-block font-heading leading-none font-medium tracking-[-0.02em] whitespace-nowrap;
}
</style>
