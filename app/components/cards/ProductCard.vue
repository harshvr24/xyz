<script setup lang="ts">
import { computed } from 'vue'
import type { HTMLAttributes } from 'vue'
import { NuxtLink } from '#components'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import MediaPlaceholder from '@/components/shared/MediaPlaceholder.vue'
import SplitText from '@/components/shared/SplitText.vue'
import { getProductPath, getRange } from '@/lib/catalogue'
import type { Product } from '@/lib/catalogue'
import type { SplitTextResult } from '@/lib/split-text'
import { appIcons } from '@/lib/icons'
import { surfaceTones } from '@/lib/surfaces'
import { cn } from '@/lib/utils'

type ProductCardTone = 'card' | 'forest' | 'gold' | 'tan'

const {
	class: className,
	product,
	titleTag = 'h3',
	tone = 'card',
} = defineProps<{
	class?: HTMLAttributes['class']
	product: Product
	titleTag?: 'h2' | 'h3'
	tone?: ProductCardTone
}>()

const emit = defineEmits<{
	titleSplit: [parts: SplitTextResult]
}>()

const href = computed(() => getProductPath(product))
const rangeName = computed(() => getRange(product.range)?.name)
</script>

<template>
	<Card
		:as="NuxtLink"
		:to="href"
		variant="plain"
		data-product-card
		:class="cn('product-card', surfaceTones[tone], className)"
	>
		<div class="product-card-media media-mat">
			<NuxtImg
				v-if="product.image"
				class="product-card-image"
				:class="{ 'product-card-image-cover': product.image.fit === 'cover' }"
				:src="product.image.src"
				alt=""
				:width="product.image.width"
				:height="product.image.height"
				sizes="sm:640px md:448px lg:448px xl:640px 2xl:768px"
				densities="x1"
				loading="lazy"
				draggable="false"
			/>
			<MediaPlaceholder
				v-else
				class="product-card-placeholder"
				label="Photograph to follow"
			/>
			<span class="product-card-overlay" aria-hidden="true">
				<span class="product-card-action">
					<Button as="span" variant="dark" size="cta-lg">
						View product
						<template #icon>
							<ButtonIcon :icon="appIcons.arrowRight" />
						</template>
					</Button>
				</span>
			</span>
		</div>

		<div class="product-card-body">
			<SplitText
				class="product-card-title"
				:as="titleTag"
				auto-split
				mask="lines"
				:text="product.name"
				type="lines,words"
				@split="emit('titleSplit', $event)"
			/>
			<div class="product-card-meta-mask">
				<div class="product-card-meta" data-product-card-meta>
					<span v-if="rangeName" class="product-card-category">{{
						rangeName
					}}</span>
					<span v-if="product.tagline" class="product-card-tagline">{{
						product.tagline
					}}</span>
				</div>
			</div>
		</div>
	</Card>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.product-card {
	--product-card-hover-ease: cubic-bezier(0.19, 1, 0.22, 1);
	@apply flex h-full flex-col gap-5 rounded-2xl p-3 shadow-xl shadow-foreground/10 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:gap-6;
}

.product-card-media {
	@apply relative aspect-4/5 overflow-hidden rounded-xl;
}

.product-card-image {
	@apply size-full p-[9%] transition-[filter,scale] duration-500 ease-(--product-card-hover-ease) select-none media-mat-image motion-reduce:transition-none;
	filter: blur(0);
}

.product-card-image-cover {
	@apply object-cover p-0 mix-blend-normal;
}

.product-card-placeholder {
	@apply size-full;
}

.product-card-overlay {
	@apply pointer-events-none absolute inset-0 grid place-items-center;
}

.product-card-action {
	@apply inline-flex rounded-action shadow-xl shadow-foreground/25 translate-y-4 scale-90 opacity-0 transition-[opacity,translate,scale] duration-500 ease-(--product-card-hover-ease) motion-reduce:transition-none;
}

.product-card:focus-visible .product-card-image {
	@apply scale-110;
	filter: blur(12px);
}

.product-card:focus-visible .product-card-action {
	@apply translate-y-0 scale-100 opacity-100;
}

@media (hover: hover) {
	.product-card:hover .product-card-image {
		@apply scale-110;
		filter: blur(12px);
	}

	.product-card:hover .product-card-action {
		@apply pointer-events-auto translate-y-0 scale-100 opacity-100;
	}
}

.product-card-body {
	@apply flex flex-1 flex-col gap-6 px-1.5 pb-1.5 md:gap-8;
}

.product-card-title {
	@apply m-0 text-2xl leading-[0.95] font-semibold tracking-[-0.025em] md:text-xl lg:text-3xl xl:text-4xl;
}

.product-card-title :deep(.split-text-line),
.product-card-title :deep(.split-text-line-mask) {
	display: block;
}

.product-card-title :deep(.split-text-word) {
	display: inline-block;
}

.product-card-title :deep(.split-text-line) {
	visibility: hidden;
	white-space: nowrap;
}

.product-card-title :deep(.split-text-line-mask) {
	margin-block: -0.12em -0.2em;
	margin-inline-end: -0.15em;
	padding-block: 0.12em 0.2em;
	padding-inline-end: 0.15em;
}

.product-card-meta-mask {
	@apply mt-auto overflow-clip;
}

.product-card-meta {
	@apply flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm tracking-[-0.02em] md:text-xs xl:text-sm;
}

.product-card-category {
	@apply rounded-full bg-current/10 px-3 py-1.5 font-medium xl:px-3.5;
}

.product-card-tagline {
	@apply font-medium whitespace-nowrap;
}
</style>
