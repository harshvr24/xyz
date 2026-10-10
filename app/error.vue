<script setup lang="ts">
import type { NuxtError } from '#app'
import { Button, ButtonIcon } from '@/components/ui/button'
import { collectionsRoute } from '@/lib/catalogue'
import { site } from '@/lib/site'

const { error } = defineProps<{
	error: NuxtError
}>()

const notFound = error.statusCode === 404
const heading = notFound ? 'This page has left the yard' : 'Something went wrong'
const message = notFound
	? 'The page you were looking for is not here. The collections are a good place to pick the trail back up.'
	: 'An unexpected error stopped this page from loading. Please try again in a moment.'

useSeoMeta({
	robots: 'noindex, nofollow',
	title: `${heading} | ${site.name}`,
})

function goHome() {
	return clearError({ redirect: '/' })
}

function goToCollections() {
	return clearError({ redirect: collectionsRoute })
}
</script>

<template>
	<main class="error-page section-gutter">
		<p class="error-code">{{ error.statusCode }}</p>
		<h1 class="error-title">{{ heading }}</h1>
		<p class="page-copy">{{ message }}</p>
		<div class="error-actions">
			<Button variant="dark" size="cta-lg" @click="goToCollections">
				View collections
				<template #icon>
					<ButtonIcon />
				</template>
			</Button>
			<Button variant="outline" size="cta-lg" @click="goHome">
				Back to home
				<template #icon>
					<ButtonIcon />
				</template>
			</Button>
		</div>
	</main>
</template>

<style scoped>
@reference './assets/css/tailwind.css';

.error-page {
	@apply flex min-h-svh flex-col items-start justify-center gap-6 py-section;
}

.error-code {
	@apply m-0 text-xl font-bold tracking-[-0.02em] text-primary tabular-nums;
}

.error-title {
	@apply m-0 max-w-[12ch] text-[clamp(3rem,9vw,8rem)] leading-[0.92] font-bold tracking-[-0.03em] text-balance;
}

.error-actions {
	@apply mt-4 flex flex-wrap gap-3;
}
</style>
