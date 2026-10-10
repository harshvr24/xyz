<script setup lang="ts">
import { computed, shallowRef, useTemplateRef } from "vue";
import SplitText from "@/components/shared/SplitText.vue";
import StudioRibbon from "./StudioRibbon.vue";
import type { SplitTextResult } from "@/lib/split-text";

const copyParagraphs = [
   {
      id: "range",
      text: "One house for the whole tack room: leather saddlery, textile rugs, yard accessories and a range for dogs. One order, one standard of finish and one team to talk to.",
   },
   {
      id: "method",
      text: "Every piece is checked against its sample before it is packed. If a strap, a seam or a buckle is not right, it goes back to the bench, not into the box.",
   },
] as const;

type CopyParagraphId = (typeof copyParagraphs)[number]["id"];

const studioRoot = useTemplateRef<HTMLElement>("studioRoot");
const studioPortrait = useTemplateRef<HTMLElement>("studioPortrait");
const studioCopy = useTemplateRef<HTMLElement>("studioCopy");
const statementSplit = shallowRef<SplitTextResult>();
const copySplits = shallowRef<
   Partial<Record<CopyParagraphId, SplitTextResult>>
>({});
const studioStatement =
   "We make the gear horses work in and riders trust. Honest materials, careful stitching, quality you can rely on.";

const copyWords = computed(() => {
   const results = copyParagraphs.map(({ id }) => copySplits.value[id]);
   if (results.includes(undefined)) return undefined;

   return results.flatMap((parts) => parts?.words ?? []);
});

useStudioMotion(studioRoot, {
   copy: studioCopy,
   copyWords,
   portrait: studioPortrait,
   statementSplit,
});

useStudioRibbonMotion(studioRoot);

function setStatementSplit(parts: SplitTextResult) {
   statementSplit.value = parts;
}

function setCopySplit(id: CopyParagraphId, parts: SplitTextResult) {
   copySplits.value = { ...copySplits.value, [id]: parts };
}
</script>

<template>
   <section id="studio" ref="studioRoot" class="studio section-gutter">
      <StudioRibbon />

      <SplitText
         data-studio-ribbon-statement
         class="studio-statement"
         as="p"
         mask="words"
         :text="studioStatement"
         type="words"
         @split="setStatementSplit"
      />

      <div data-studio-ribbon-grid class="studio-grid">
         <div class="studio-column">
            <div ref="studioPortrait" class="studio-portrait">
               <NuxtImg
                  class="studio-portrait-image"
                  data-studio-portrait-image
                  src="/images/products/leather-goods/saddle.jpg"
                  alt="Dark brown general purpose saddle with a suede seat"
                  width="888"
                  height="804"
                  sizes="sm:1280px md:768px lg:1024px xl:1280px 2xl:1536px"
                  densities="x1"
                  loading="lazy"
                  draggable="false"
               />
            </div>
         </div>

         <div ref="studioCopy" class="studio-column studio-copy">
            <SplitText
               v-for="paragraph in copyParagraphs"
               :key="paragraph.id"
               class="studio-copy-paragraph"
               as="p"
               mask="words"
               :text="paragraph.text"
               type="words"
               @split="setCopySplit(paragraph.id, $event)"
            />
         </div>
      </div>
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.studio {
   @apply relative w-full py-section;
}

.studio-statement {
   @apply m-0 max-w-[22ch] font-heading text-statement font-medium tracking-[-0.02em];
}

.studio-statement :deep(.split-text-word),
.studio-statement :deep(.split-text-word-mask),
.studio-copy-paragraph :deep(.split-text-word),
.studio-copy-paragraph :deep(.split-text-word-mask) {
   display: inline-block;
}

.studio-statement :deep(.split-text-word),
.studio-copy-paragraph :deep(.split-text-word) {
   visibility: hidden;
}

.studio-statement :deep(.split-text-word-mask) {
   margin-block: -0.12em;
   padding-block: 0.12em;
}

.studio-copy-paragraph :deep(.split-text-word-mask) {
   margin-block: -0.16em;
   padding-block: 0.16em;
}

.studio-grid {
   @apply mt-12 flex flex-wrap items-center gap-8 md:mt-16 md:gap-12 xl:mt-20 xl:gap-18;
}

.studio-column {
   @apply min-w-0 flex-1 basis-80;
}

.studio-portrait {
   @apply aspect-4/3 w-full overflow-hidden rounded-2xl media-mat;
}

.studio-portrait-image {
   @apply size-full p-[12%] select-none media-mat-image;
}

.studio-copy {
   @apply space-y-6;
}

.studio-copy-paragraph {
   @apply m-0 max-w-[46ch] text-justify text-xl leading-[1.05] tracking-tight font-semibold first:mb-8 text-foreground md:text-2xl xl:text-4xl;
}
</style>
