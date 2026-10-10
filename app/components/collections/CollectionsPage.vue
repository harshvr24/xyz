<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import CaseStudyCard from "@/components/cards/CaseStudyCard.vue";
import EnquiryCta from "@/components/shared/EnquiryCta.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import PageHero from "@/components/shared/PageHero.vue";
import {
	getProductsByRange,
	getRangePath,
	ranges,
} from "@/lib/catalogue";
import type { ProductImage, RangeSlug } from "@/lib/catalogue";
import type { SurfaceTone } from "@/lib/surfaces";

const TrailingTooltip = defineAsyncComponent(
	() => import("@/components/shared/TrailingTooltip.vue"),
);

interface CollectionEntry {
	description: string;
	href: string;
	image?: ProductImage;
	results: readonly { label: string; value: string }[];
	title: string;
	tone: SurfaceTone;
}

const heroLines: readonly LineTitleLine[] = [
	{ text: "Four ranges," },
	{ text: "one standard", underlined: "one" },
];
const heroDescription =
	"Leather saddlery, horse rugs, yard accessories and dog products, made to the same standard of finish. Choose a range to see every product in it.";
const tooltipText = "View collection";

const rangeTones: Record<RangeSlug, SurfaceTone> = {
	"dog-products": "gold",
	"horse-accessories": "forest",
	"horse-rugs": "navy",
	"leather-goods": "primary",
};

const collections: readonly CollectionEntry[] = ranges.map((range) => {
	const rangeProducts = getProductsByRange(range.slug);

	return {
		description: range.description,
		href: getRangePath(range.slug),
		image: rangeProducts.find((product) => product.image)?.image,
		results: [
			{
				label: "Products in this range",
				value: String(rangeProducts.length),
			},
		],
		title: range.title,
		tone: rangeTones[range.slug],
	};
});

const {
	active: tooltipActive,
	hide: hideTooltip,
	image: tooltipImage,
	label: tooltipLabel,
	shouldLoad: shouldLoadTooltip,
	show: showTooltip,
	size: tooltipSize,
} = useTrailingTooltip();

function activateTooltip(entry: CollectionEntry) {
	showTooltip(entry.image?.src, tooltipText);
}
</script>

<template>
	<div class="collections-page">
		<PageHero :description="heroDescription" :lines="heroLines" />

		<section class="page-sheet section-gutter">
			<h2 class="sr-only">All collections</h2>
			<div class="collections-list">
				<CaseStudyCard
					v-for="entry in collections"
					:key="entry.href"
					v-bind="entry"
					@activate="activateTooltip(entry)"
					@deactivate="hideTooltip"
				/>
			</div>
		</section>

		<EnquiryCta class="collections-cta" />

		<TrailingTooltip
			v-if="shouldLoadTooltip"
			:active="tooltipActive"
			:image="tooltipImage"
			:label="tooltipLabel"
			:size="tooltipSize"
		/>
	</div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.collections-page {
	@apply overflow-x-clip;
}

.collections-list {
	@apply flex flex-col gap-20 md:gap-28 xl:gap-32;
}

.collections-cta {
	@apply relative z-10;
}
</style>
