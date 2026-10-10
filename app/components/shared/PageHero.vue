<script setup lang="ts">
import { computed, shallowRef, useTemplateRef } from "vue";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import SplitText from "@/components/shared/SplitText.vue";
import type { SplitTextResult } from "@/lib/split-text";

const {
   description,
   lines,
   size = "full",
   trailImages = [],
} = defineProps<{
   description: string;
   lines: readonly LineTitleLine[];
   size?: "compact" | "full";
   trailImages?: readonly string[];
}>();

const trailSlots = computed(() =>
   [0, 1].flatMap((round) =>
      trailImages.map((src) => ({ id: `${round}-${src}`, src })),
   ),
);

const heroRoot = useTemplateRef<HTMLElement>("heroRoot");
const descriptionSplit = shallowRef<SplitTextResult>();
const { revealed } = usePageHeroMotion(heroRoot, descriptionSplit);
const { armed: trailArmed } = usePageHeroTrail(heroRoot);

function setDescriptionSplit(parts: SplitTextResult) {
   descriptionSplit.value = parts;
}
</script>

<template>
   <section
      ref="heroRoot"
      class="page-hero section-gutter"
      :class="{ 'page-hero-compact': size === 'compact' }"
      :data-page-hero-revealed="revealed || undefined"
   >
      <div class="page-hero-content" data-page-hero-content>
         <LineTitle
            as="h1"
            data-page-hero-reveal
            :lines="lines"
            size="display"
         />
         <SplitText
            class="page-hero-description"
            data-page-hero-reveal
            as="p"
            mask="lines"
            :text="description"
            type="lines"
            @split="setDescriptionSplit"
         />
      </div>
      <div
         v-if="trailArmed && trailSlots.length"
         class="page-hero-trail"
         data-page-hero-trail
         aria-hidden="true"
      >
         <span
            v-for="slot in trailSlots"
            :key="slot.id"
            class="page-hero-trail-item"
            data-page-hero-trail-item
         >
            <NuxtImg
               class="page-hero-trail-image"
               :src="slot.src"
               alt=""
               width="600"
               height="800"
               sizes="sm:448px"
               loading="eager"
               draggable="false"
            />
         </span>
      </div>
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.page-hero {
   @apply relative grid place-items-center pb-16 sm:pb-20;
   min-height: calc(100svh - 4.75rem - var(--page-hero-peek));
   --page-hero-peek: clamp(3rem, 9svh, 6rem);
}

.page-hero-compact {
   min-height: min(72svh, 46rem);
}

.page-hero-content {
   @apply flex flex-col items-center text-center;
}

.page-hero-description {
   @apply m-0 mt-20 max-w-[36ch] text-lg leading-tight font-semibold tracking-[-0.03em] text-balance md:mt-28 md:text-xl lg:text-2xl;
}

.page-hero-description :deep(.split-text-line),
.page-hero-description :deep(.split-text-line-mask) {
   display: block;
}

.page-hero-trail {
   @apply pointer-events-none absolute inset-0 select-none;
}

.page-hero-trail-item {
   @apply invisible absolute top-0 left-0 block aspect-[3/4] overflow-hidden rounded-xl shadow-xl shadow-foreground/10 media-mat;
   width: clamp(9rem, 15vw, 16rem);
}

.page-hero-trail-image {
   @apply size-full p-[10%] media-mat-image;
}

.page-hero:not([data-page-hero-revealed]) [data-page-hero-reveal] {
   visibility: hidden;
}

@media (prefers-reduced-motion: reduce) {
   .page-hero:not([data-page-hero-revealed]) [data-page-hero-reveal] {
      visibility: inherit;
   }
}
</style>
