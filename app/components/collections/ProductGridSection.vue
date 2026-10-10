<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import { NuxtLink } from '#components'
import ProductCard from '@/components/cards/ProductCard.vue'
import SplitText from '@/components/shared/SplitText.vue'
import { Button, ButtonIcon } from '@/components/ui/button'
import type { Product } from '@/lib/catalogue'
import type { SplitTextResult } from '@/lib/split-text'

const { actionLabel, actionTo, products, title } = defineProps<{
	actionLabel?: string
	actionTo?: string
	products: readonly Product[]
	title: string
}>()

const gridRoot = useTemplateRef<HTMLElement>('gridRoot')
const titleSplit = shallowRef<SplitTextResult>()
const cardTitleSplits = shallowRef<(SplitTextResult | undefined)[]>(
	products.map(() => undefined),
)

useProductGridMotion(gridRoot, { cardTitleSplits, titleSplit })

function setTitleSplit(parts: SplitTextResult) {
	titleSplit.value = parts
}

function setCardTitleSplit(index: number, parts: SplitTextResult) {
	cardTitleSplits.value = cardTitleSplits.value.with(index, parts)
}
</script>

<template>
	<section ref="gridRoot" class="product-grid section-gutter">
		<div class="product-grid-heading" data-product-grid-heading>
			<SplitText
				class="section-title product-grid-title"
				as="h2"
				mask="words"
				:text="title"
				type="words"
				@split="setTitleSplit"
			/>
			<div v-if="actionLabel && actionTo" data-product-grid-cta-mask>
				<span class="product-grid-action" data-product-grid-cta>
					<Button :as="NuxtLink" :to="actionTo" variant="dark" size="cta-lg">
						{{ actionLabel }}
						<template #icon>
							<ButtonIcon />
						</template>
					</Button>
				</span>
			</div>
		</div>

		<div class="product-grid-list">
			<ProductCard
				v-for="(product, index) in products"
				:key="product.slug"
				:product="product"
				@title-split="setCardTitleSplit(index, $event)"
			/>
		</div>
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.product-grid-heading {
	@apply flex flex-wrap items-end justify-between gap-6;
}

.product-grid-title {
	@apply text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.92];
}

.product-grid-title :deep(.split-text-word),
.product-grid-title :deep(.split-text-word-mask) {
	display: inline-block;
}

.product-grid-title :deep(.split-text-word) {
	visibility: hidden;
}

.product-grid-title :deep(.split-text-word-mask) {
	margin-block: -0.15em;
	padding-block: 0.15em;
}

.product-grid-action {
	@apply block;
}

.product-grid-list {
	@apply mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 xl:mt-16 xl:gap-5;
}
</style>
