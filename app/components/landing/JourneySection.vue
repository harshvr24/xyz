<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import JourneyStepCard from '@/components/cards/JourneyStepCard.vue'
import SplitText from '@/components/shared/SplitText.vue'
import type { SplitTextResult } from '@/lib/split-text'

const journeyTitle = 'How we make it'

const journeySteps = [
	{
		number: '01',
		title: 'Select',
		body:
			'Every order starts with the material. Hides, webbing, cloth and fittings are chosen for the job and checked before a single piece is cut.',
		image: '/images/products/leather-goods/stirrup-leather.jpg',
		action: 'See how we select',
		theme: 'ivory' as const,
	},
	{
		number: '02',
		title: 'Craft',
		body:
			'Patterns are cut, edges are dressed and seams are stitched close. Leather goes to the bench for finishing, rugs go to machines built for heavy cloth.',
		image: '/images/products/leather-goods/saddle.jpg',
		action: 'See how we craft',
		theme: 'forest' as const,
	},
	{
		number: '03',
		title: 'Deliver',
		body:
			'Each piece is checked against its sample, then packed and documented for export. You get one shipment, one standard and one team to call.',
		image: '/images/products/horse-rugs/rain-rug-combo.jpg',
		action: 'See how we deliver',
		theme: 'oxblood' as const,
	},
]

const journeyRoot = useTemplateRef<HTMLElement>('journeyRoot')
const titleSplit = shallowRef<SplitTextResult>()
const stepTitleSplits = shallowRef<(SplitTextResult | undefined)[]>(
	journeySteps.map(() => undefined),
)
const stepBodySplits = shallowRef<(SplitTextResult | undefined)[]>(
	journeySteps.map(() => undefined),
)

useFitText(() =>
	journeyRoot.value?.querySelector<HTMLElement>('[data-journey-title]'),
)
useJourneyMotion(journeyRoot, { stepBodySplits, stepTitleSplits, titleSplit })

function setTitleSplit(parts: SplitTextResult) {
	titleSplit.value = parts
}

function setStepTitleSplit(index: number, parts: SplitTextResult) {
	stepTitleSplits.value = stepTitleSplits.value.with(index, parts)
}

function setStepBodySplit(index: number, parts: SplitTextResult) {
	stepBodySplits.value = stepBodySplits.value.with(index, parts)
}
</script>

<template>
	<section id="journey" ref="journeyRoot" class="journey">
		<div class="journey-heading section-gutter">
			<SplitText
				class="journey-title"
				as="h2"
				data-journey-title
				:text="journeyTitle"
				type="words,chars"
				@split="setTitleSplit"
			/>
		</div>

		<div class="journey-steps">
			<div
				v-for="(step, index) in journeySteps"
				:key="step.number"
				class="journey-slide"
				data-journey-slide
			>
				<div class="journey-slide-frame" data-journey-slide-frame>
					<JourneyStepCard
						v-bind="step"
						data-journey-slide-card
						@title-split="setStepTitleSplit(index, $event)"
						@body-split="setStepBodySplit(index, $event)"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.journey {
	@apply w-full pt-4 pb-section md:pt-8;
}

.journey-heading {
	container-type: inline-size;
}

.journey-title {
	--journey-title-size: 11.2cqi;
	@apply m-0 w-max pe-[0.05em] leading-[0.86] font-bold tracking-[-0.03em] whitespace-nowrap uppercase;
	font-size: calc(var(--journey-title-size) * var(--fit-text-scale, 1));
}

.journey-title :deep(.split-text-word),
.journey-title :deep(.split-text-char) {
	display: inline-block;
}

.journey-title :deep(.split-text-char) {
	visibility: hidden;
}

.journey-steps {
	@apply mt-8 md:mt-14;
}

.journey-slide {
	@apply relative h-svh;
}

.journey-slide-frame {
	@apply size-full p-[clamp(1rem,2vw,1.5rem)] perspective-distant;
}
</style>
