<script setup lang="ts">
import { computed } from "vue";
import ProductGridSection from "@/components/collections/ProductGridSection.vue";
import EnquiryCta from "@/components/shared/EnquiryCta.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import PageHero from "@/components/shared/PageHero.vue";
import SiteNavLink from "@/components/layout/SiteNavLink.vue";
import {
	collectionsRoute,
	getProductsByRange,
	getRangePath,
	ranges,
} from "@/lib/catalogue";
import type { Range } from "@/lib/catalogue";
import { site } from "@/lib/site";

const { range } = defineProps<{
	range: Range;
}>();

const heroLines = computed<readonly LineTitleLine[]>(() =>
	range.title.split(" ").map((text) => ({ text })),
);
const rangeProducts = computed(() => getProductsByRange(range.slug));
const gridTitle = computed(() => `${rangeProducts.value.length} products`);
const enquiryTo = computed(
	() => `${site.enquiryRoute}?range=${range.slug}`,
);
const otherRanges = computed(() =>
	ranges.filter((entry) => entry.slug !== range.slug),
);
</script>

<template>
	<div class="range-page">
		<PageHero
			:description="range.description"
			:lines="heroLines"
			size="compact"
		/>

		<div class="page-sheet">
			<ProductGridSection
				:action-label="site.enquiryLabel"
				:action-to="enquiryTo"
				:products="rangeProducts"
				:title="gridTitle"
			/>

			<nav class="range-others section-gutter" aria-labelledby="range-others">
				<h2 id="range-others" class="range-others-title">
					More collections
				</h2>
				<ul class="range-others-list">
					<li v-for="entry in otherRanges" :key="entry.slug">
						<SiteNavLink
							:href="getRangePath(entry.slug)"
							:label="entry.title"
							size="inherit"
						/>
					</li>
					<li>
						<SiteNavLink
							:href="collectionsRoute"
							label="All collections"
							size="inherit"
						/>
					</li>
				</ul>
			</nav>
		</div>

		<EnquiryCta class="range-cta" />
	</div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.range-page {
	@apply overflow-x-clip;
}

.range-others {
	@apply mt-section flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between;
}

.range-others-title {
	@apply m-0 text-3xl font-bold tracking-[-0.025em] md:text-4xl;
}

.range-others-list {
	@apply m-0 flex list-none flex-col items-start gap-1 p-0 text-xl leading-tight font-semibold tracking-[-0.03em] md:flex-row md:flex-wrap md:gap-x-8 md:text-2xl;
}

.range-cta {
	@apply relative z-10;
}
</style>
