<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import { NuxtLink } from '#components'
import ProductCard from '@/components/cards/ProductCard.vue'
import SplitText from '@/components/shared/SplitText.vue'
import { Button, ButtonIcon } from '@/components/ui/button'
import { collectionsRoute, findProductBySlug } from '@/lib/catalogue'
import type { Product } from '@/lib/catalogue'
import type { SplitTextResult } from '@/lib/split-text'

const featuredTitle = 'From the workshop'
const featuredTones = ['tan', 'gold', 'forest'] as const
const featuredSlugs = ['saddle', 'rain-rug', 'soft-crown-bridle']

const featuredProducts = featuredSlugs
	.map((slug) => findProductBySlug(slug))
	.filter((product): product is Product => product !== undefined)

const featuredRoot = useTemplateRef<HTMLElement>('featuredRoot')
const titleSplit = shallowRef<SplitTextResult>()
const cardTitleSplits = shallowRef<(SplitTextResult | undefined)[]>(
	featuredProducts.map(() => undefined),
)

useProductGridMotion(featuredRoot, { cardTitleSplits, titleSplit })

function setTitleSplit(parts: SplitTextResult) {
	titleSplit.value = parts
}

function setCardTitleSplit(index: number, parts: SplitTextResult) {
	cardTitleSplits.value = cardTitleSplits.value.with(index, parts)
}
</script>

<template>
	<section id="featured" ref="featuredRoot" class="featured">
		<div class="featured-panel section-gutter">
			<div class="featured-heading" data-product-grid-heading>
				<SplitText
					class="section-title featured-title"
					as="h2"
					mask="words"
					:text="featuredTitle"
					type="words"
					@split="setTitleSplit"
				/>
				<div data-product-grid-cta-mask>
					<span class="featured-action" data-product-grid-cta>
						<Button
							:as="NuxtLink"
							:to="collectionsRoute"
							variant="dark"
							size="cta-lg"
						>
							All products
							<template #icon>
								<ButtonIcon />
							</template>
						</Button>
					</span>
				</div>
			</div>

			<div class="featured-grid">
				<ProductCard
					v-for="(product, index) in featuredProducts"
					:key="product.slug"
					:product="product"
					:tone="featuredTones[index % featuredTones.length]"
					@title-split="setCardTitleSplit(index, $event)"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.featured {
	@apply w-full px-[clamp(1rem,2vw,1.5rem)] pb-section;
}

.featured-panel {
	@apply rounded-2xl bg-panel py-16 text-panel-foreground md:py-20 xl:py-24;
}

.featured-heading {
	@apply flex flex-wrap items-end justify-between gap-6;
}

.featured-title {
	@apply text-[clamp(2.75rem,9vw,9rem)] leading-[0.92];
}

.featured-title :deep(.split-text-word),
.featured-title :deep(.split-text-word-mask) {
	display: inline-block;
}

.featured-title :deep(.split-text-word) {
	visibility: hidden;
}

.featured-title :deep(.split-text-word-mask) {
	margin-block: -0.15em;
	padding-block: 0.15em;
}

.featured-action {
	@apply block;
}

.featured-grid {
	@apply mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 xl:mt-16 xl:gap-5;
}
</style>
