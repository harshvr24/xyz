<script setup lang="ts">
import { defineAsyncComponent, shallowRef, useTemplateRef } from "vue";
import CaseStudyCard from "@/components/cards/CaseStudyCard.vue";
import MoreWorksPanel from "./MoreWorksPanel.vue";
import WorkLine from "./WorkLine.vue";
import SplitText from "@/components/shared/SplitText.vue";
import {
	getProduct,
	getProductsByRange,
	getRangePath,
	ranges,
} from "@/lib/catalogue";
import type { ProductImage, RangeSlug } from "@/lib/catalogue";
import type { SplitTextResult } from "@/lib/split-text";
import type { SurfaceTone } from "@/lib/surfaces";

const TrailingTooltip = defineAsyncComponent(
	() => import("@/components/shared/TrailingTooltip.vue"),
);

interface RangeLook {
	cover: string;
	revealTones: readonly SurfaceTone[];
	tone: SurfaceTone;
}

interface CollectionCase {
	description: string;
	href: string;
	image?: ProductImage;
	results: readonly { label: string; value: string }[];
	revealTones: readonly SurfaceTone[];
	title: string;
	tone: SurfaceTone;
}

const workTitle = "What we make";
const tooltipText = "View collection";

const rangeLooks: Record<RangeSlug, RangeLook> = {
	"dog-products": {
		cover: "dog-harness",
		revealTones: ["gold", "navy", "tan", "forest"],
		tone: "gold",
	},
	"horse-accessories": {
		cover: "saddle-pad",
		revealTones: ["forest", "gold", "primary", "tan"],
		tone: "forest",
	},
	"horse-rugs": {
		cover: "coolex-rug",
		revealTones: ["tan", "primary", "navy", "gold"],
		tone: "navy",
	},
	"leather-goods": {
		cover: "tendon-boot",
		revealTones: ["navy", "forest", "gold", "primary"],
		tone: "primary",
	},
};

const collections: readonly CollectionCase[] = ranges.map((range) => {
	const look = rangeLooks[range.slug];

	return {
		description: range.description,
		href: getRangePath(range.slug),
		image: getProduct(range.slug, look.cover)?.image,
		results: [
			{
				label: "Products in this range",
				value: String(getProductsByRange(range.slug).length),
			},
		],
		revealTones: look.revealTones,
		title: range.title,
		tone: look.tone,
	};
});

const workRoot = useTemplateRef<HTMLElement>("workRoot");
const titleSplit = shallowRef<SplitTextResult>();
const {
	active: tooltipActive,
	hide: deactivateTooltip,
	image: tooltipImage,
	label: tooltipLabel,
	shouldLoad: shouldLoadTooltip,
	show: showTooltip,
	size: tooltipSize,
} = useTrailingTooltip();

useWorkMotion(workRoot, { titleSplit });
useWorkLineMotion(workRoot);

function setTitleSplit(parts: SplitTextResult) {
	titleSplit.value = parts;
}

function activateTooltip(item: CollectionCase) {
	showTooltip(item.image?.src, tooltipText);
}

function activatePanelTooltip(image: string, label: string) {
	showTooltip(image, label, "compact");
}
</script>

<template>
	<section id="work" ref="workRoot" class="work">
		<div class="work-content section-gutter">
			<SplitText
				class="section-title split-title work-title"
				as="h2"
				mask="chars"
				:text="workTitle"
				type="words,chars"
				@split="setTitleSplit"
			/>

			<div class="case-list" data-work-case-list>
				<WorkLine />

				<CaseStudyCard
					v-for="item in collections"
					:key="item.href"
					v-bind="item"
					@activate="activateTooltip(item)"
					@deactivate="deactivateTooltip"
				/>
			</div>
		</div>

		<MoreWorksPanel
			@activate="activatePanelTooltip"
			@deactivate="deactivateTooltip"
		/>

		<TrailingTooltip
			v-if="shouldLoadTooltip"
			:active="tooltipActive"
			:image="tooltipImage"
			:label="tooltipLabel"
			:size="tooltipSize"
		/>
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.work {
	@apply w-full pb-section;
}

.work-content {
	@apply pb-section;
}

.work-title {
	@apply text-center whitespace-nowrap;
	font-size: clamp(2rem, 11.6vw, 13rem);
	word-spacing: 0.15em;
}

.case-list {
	@apply relative mt-16 flex flex-col gap-20 md:mt-20 md:gap-28 xl:mt-24 xl:gap-32;
}
</style>
