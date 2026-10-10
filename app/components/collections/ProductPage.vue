<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { NuxtLink } from "#components";
import ProductGridSection from "@/components/collections/ProductGridSection.vue";
import SiteNavLink from "@/components/layout/SiteNavLink.vue";
import MediaFrame from "@/components/shared/MediaFrame.vue";
import MediaPlaceholder from "@/components/shared/MediaPlaceholder.vue";
import { Button, ButtonIcon } from "@/components/ui/button";
import {
	collectionsRoute,
	getRangePath,
	getRelatedProducts,
} from "@/lib/catalogue";
import type { Product, Range } from "@/lib/catalogue";
import { appIcons } from "@/lib/icons";
import { site } from "@/lib/site";

const { product, range } = defineProps<{
	product: Product;
	range: Range;
}>();

const rangePath = computed(() => getRangePath(range.slug));
const enquiryTo = computed(
	() => `${site.enquiryRoute}?product=${product.slug}`,
);
const relatedProducts = computed(() => getRelatedProducts(product));
const matted = computed(() => product.image?.fit !== "cover");

const productRoot = useTemplateRef<HTMLElement>("productRoot");
useSectionRevealMotion(productRoot);
</script>

<template>
	<div class="product-page">
		<article ref="productRoot" class="product section-gutter">
			<div class="product-media-column">
				<MediaFrame class="product-media" :mat="matted">
					<NuxtImg
						v-if="product.image"
						:src="product.image.src"
						:alt="product.image.alt"
						:width="product.image.width"
						:height="product.image.height"
						sizes="sm:640px md:768px lg:640px xl:896px 2xl:1024px"
						densities="x1"
						loading="eager"
						preload
						draggable="false"
					/>
					<MediaPlaceholder v-else label="Photograph to follow" />
				</MediaFrame>
			</div>

			<div class="product-detail">
				<nav class="product-breadcrumb" aria-label="Breadcrumb">
					<ol class="product-breadcrumb-list">
						<li>
							<SiteNavLink
								:href="collectionsRoute"
								label="Collections"
								size="inherit"
							/>
						</li>
						<li aria-hidden="true">/</li>
						<li>
							<SiteNavLink
								:href="rangePath"
								:label="range.name"
								size="inherit"
							/>
						</li>
					</ol>
				</nav>

				<div class="product-intro" data-section-rise-group>
					<div class="product-mask" data-section-rise-mask>
						<h1 class="product-title" data-section-rise>
							{{ product.name }}
						</h1>
					</div>
					<div
						v-if="product.tagline"
						class="product-mask"
						data-section-rise-mask
					>
						<p class="product-tagline" data-section-rise>
							{{ product.tagline }}
						</p>
					</div>
				</div>

				<p class="product-description">{{ product.description }}</p>

				<div class="product-features">
					<h2 class="product-features-title">Details</h2>
					<ul class="product-features-list">
						<li
							v-for="feature in product.features"
							:key="feature"
							class="product-feature"
						>
							<Icon
								class="product-feature-icon"
								:name="appIcons.check"
								aria-hidden="true"
							/>
							<span>{{ feature }}</span>
						</li>
					</ul>
				</div>

				<div class="product-actions">
					<Button :as="NuxtLink" :to="enquiryTo" variant="default" size="cta-lg">
						Enquire about this product
						<template #icon>
							<ButtonIcon />
						</template>
					</Button>
					<p class="product-note">
						Tell us the sizes, colours, materials and hardware you need and
						we will include them in your quote.
					</p>
				</div>
			</div>
		</article>

		<div v-if="relatedProducts.length" class="page-sheet">
			<ProductGridSection
				action-label="View the range"
				:action-to="rangePath"
				:products="relatedProducts"
				title="More from this range"
			/>
		</div>
	</div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.product-page {
	@apply overflow-x-clip;
}

.product {
	@apply grid grid-cols-1 items-start gap-10 pt-6 pb-section md:gap-14 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:pt-10 xl:gap-24;
}

.product-media-column {
	@apply lg:sticky lg:top-24;
}

.product-media {
	@apply aspect-4/5 w-full;
}

.product-detail {
	@apply flex min-w-0 flex-col;
}

.product-breadcrumb-list {
	@apply m-0 flex list-none flex-wrap items-center gap-x-3 gap-y-1 p-0 text-base font-semibold tracking-[-0.02em] text-brand-soft md:text-lg;
}

.product-intro {
	@apply mt-8 md:mt-12;
}

.product-mask {
	@apply overflow-hidden;
}

.product-title {
	@apply m-0 pb-[0.14em] text-[clamp(2.75rem,6vw,6rem)] leading-[0.95] font-bold tracking-[-0.025em] text-balance;
}

.product-tagline {
	@apply m-0 mt-2 pb-[0.1em] font-heading text-2xl leading-tight font-medium tracking-[-0.01em] text-primary italic md:text-3xl;
}

.product-description {
	@apply m-0 mt-8 max-w-[46ch] text-xl leading-snug font-medium tracking-[-0.02em] text-brand-subtle md:mt-10 md:text-2xl;
}

.product-features {
	@apply mt-10 border-t border-border pt-8 md:mt-12;
}

.product-features-title {
	@apply m-0 text-2xl font-bold tracking-[-0.02em] md:text-3xl;
}

.product-features-list {
	@apply m-0 mt-5 grid list-none gap-3 p-0;
}

.product-feature {
	@apply flex items-start gap-3 text-lg leading-snug font-medium tracking-[-0.02em] md:text-xl;
}

.product-feature-icon {
	@apply mt-1 size-5 shrink-0 text-primary;
}

.product-actions {
	@apply mt-10 flex flex-col items-start gap-5 md:mt-12;
}

.product-note {
	@apply m-0 max-w-[44ch] text-base leading-snug font-medium text-brand-soft;
}
</style>
