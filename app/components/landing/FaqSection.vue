<script setup lang="ts">
import { computed, shallowRef, useTemplateRef } from 'vue'
import SplitText from '@/components/shared/SplitText.vue'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { appIcons } from '@/lib/icons'
import type { SplitTextResult } from '@/lib/split-text'

const faqTitle = 'Frequently Asked Questions'

const faqs = [
	{
		id: 'minimums',
		question: 'Is there a minimum order?',
		answer:
			'Minimums depend on the product, the material and how much of it is custom. Tell us what you have in mind and we will confirm the quantity alongside your quote, including the smallest run we can make without compromising the finish.',
	},
	{
		id: 'samples',
		question: 'Can we see a sample first?',
		answer:
			'Yes. We make a sample to your specification before a production run begins, so you can check the leather, the stitching, the fittings and the fit. The approved sample then becomes the standard every piece in the order is checked against.',
	},
	{
		id: 'custom',
		question: 'Do you make to our designs?',
		answer:
			'We make our own patterns and we make to yours. Colours, leathers, cloth weights, hardware and branding can all be specified, and we will tell you plainly where a change affects the price, the timing or the way a product wears.',
	},
	{
		id: 'timing',
		question: 'How long does an order take?',
		answer:
			'Timing depends on the size of the order, the materials and the season. We give you a production schedule with the quote and keep you posted as the order moves from cutting to packing, so there are no surprises at the end.',
	},
	{
		id: 'shipping',
		question: 'How do you ship?',
		answer:
			'We ship to export buyers and prepare the paperwork that goes with it. Tell us the destination and how you prefer to receive goods, and the quote will set out the terms, the packing and the documents included.',
	},
	{
		id: 'quality',
		question: 'How is quality checked?',
		answer:
			'Materials are inspected when they arrive and again as they are cut. Finished pieces are checked against the approved sample before packing, and anything that falls short goes back to the bench rather than into the box.',
	},
]

const faqRoot = useTemplateRef<HTMLElement>('faqRoot')
const openItem = shallowRef<string>()
const titleSplit = shallowRef<SplitTextResult>()
const answerSplits = shallowRef<(SplitTextResult | undefined)[]>(
	faqs.map(() => undefined),
)
const openIndex = computed(() =>
	faqs.findIndex(faq => faq.id === openItem.value),
)

useFaqMotion(faqRoot, { answerSplits, openIndex, titleSplit })

function setTitleSplit(parts: SplitTextResult) {
	titleSplit.value = parts
}

function setAnswerSplit(index: number, parts: SplitTextResult) {
	answerSplits.value = answerSplits.value.with(index, parts)
}
</script>

<template>
	<section id="faq" ref="faqRoot" class="faq section-gutter">
		<SplitText
			class="section-title faq-title"
			as="h2"
			auto-split
			mask="lines"
			:text="faqTitle"
			type="lines,words"
			data-faq-title
			@split="setTitleSplit"
		/>

		<Accordion
			v-model="openItem"
			class="faq-list"
			type="single"
			collapsible
			data-faq-list
		>
			<AccordionItem
				v-for="(faq, index) in faqs"
				:key="faq.id"
				class="faq-item border-b-0"
				:value="faq.id"
				data-faq-item
			>
				<AccordionTrigger class="faq-trigger">
					<span class="faq-mask">
						<span class="faq-question" data-faq-rise>{{ faq.question }}</span>
					</span>
					<template #icon>
						<span class="faq-mask faq-icon-mask" aria-hidden="true">
							<span class="faq-icon" data-faq-rise>
								<Icon :name="appIcons.minus" class="faq-icon-bar" />
								<Icon
									:name="appIcons.minus"
									class="faq-icon-bar faq-icon-cross"
									data-faq-icon-cross
								/>
							</span>
						</span>
					</template>
				</AccordionTrigger>
				<AccordionContent class="faq-answer-body" force-mount data-faq-content>
					<SplitText
						class="faq-answer"
						as="p"
						auto-split
						mask="lines"
						:text="faq.answer"
						type="lines,words"
						@split="setAnswerSplit(index, $event)"
					/>
				</AccordionContent>
				<span class="faq-divider" data-faq-divider aria-hidden="true" />
			</AccordionItem>
		</Accordion>
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.faq {
	@apply grid w-full grid-cols-1 items-start gap-10 pb-section md:gap-14 lg:grid-cols-[5fr_7fr] lg:gap-12;
}

.faq-title {
	@apply -mt-[0.16em] text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.86];
}

.faq-title :deep(.split-text-line),
.faq-title :deep(.split-text-line-mask),
.faq-answer :deep(.split-text-line),
.faq-answer :deep(.split-text-line-mask) {
	display: block;
}

.faq-title :deep(.split-text-line),
.faq-answer :deep(.split-text-line) {
	white-space: nowrap;
}

.faq-title :deep(.split-text-line-mask) {
	margin-block: 0 -0.36em;
	padding-block: 0.16em 0.2em;
}

.faq-answer :deep(.split-text-line-mask) {
	margin-block: -0.12em -0.2em;
	padding-block: 0.12em 0.2em;
}

.faq-title :deep(.split-text-word),
.faq-answer :deep(.split-text-word) {
	display: inline-block;
}

.faq-title :deep(.split-text-line) {
	visibility: hidden;
}

.faq-item {
	@apply relative;
}

.faq-item :deep(.faq-trigger) {
	@apply gap-8 rounded-none py-7 text-xl font-medium tracking-[-0.03em] hover:no-underline md:py-9 md:text-2xl xl:py-11 xl:text-3xl;
}

.faq-mask {
	@apply -my-[0.15em] block overflow-hidden py-[0.15em];
}

.faq-icon-mask {
	@apply shrink-0;
}

.faq-question,
.faq-icon {
	@apply block;
	visibility: hidden;
}

.faq-icon {
	@apply grid size-6 place-items-center md:size-7 xl:size-8;
}

.faq-icon-bar {
	@apply col-start-1 row-start-1 size-full;
}

.faq-icon-cross {
	transform: rotate(90deg);
}

.faq-list :deep([data-faq-content]) {
	animation: none;
	height: 0;
	overflow: hidden;
	visibility: hidden;
}

.faq-list :deep([data-faq-content][data-state='open']) {
	height: auto;
	visibility: visible;
}

.faq-list :deep(.faq-answer-body) {
	@apply pt-0 pb-9 md:pb-11 xl:pb-14;
}

.faq-answer {
	@apply m-0 max-w-[44ch] text-lg leading-[1.2] font-medium tracking-[-0.02em] text-pretty text-muted-foreground md:text-xl xl:text-2xl;
}

.faq-divider {
	@apply absolute inset-x-0 bottom-0 h-px bg-border;
	visibility: hidden;
}

.faq-item:last-child .faq-divider {
	@apply hidden;
}
</style>
