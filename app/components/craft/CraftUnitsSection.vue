<script setup lang="ts">
import { useTemplateRef } from "vue";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import MediaFrame from "@/components/shared/MediaFrame.vue";
import MediaPlaceholder from "@/components/shared/MediaPlaceholder.vue";
import { site } from "@/lib/site";

const titleLines: readonly LineTitleLine[] = [
   { text: "Where the" },
   { text: "work happens", underlined: "work" },
];

const unitsRoot = useTemplateRef<HTMLElement>("unitsRoot");
const { titleRevealed } = useSectionRevealMotion(unitsRoot);
</script>

<template>
   <section ref="unitsRoot" class="craft-units section-gutter">
      <LineTitle :drawn="titleRevealed" :lines="titleLines" />

      <div class="craft-unit-grid">
         <article
            v-for="unit in site.units"
            :key="unit.name"
            class="craft-unit"
         >
            <MediaFrame class="craft-unit-media">
               <MediaPlaceholder label="Workshop photograph to follow" />
            </MediaFrame>
            <div class="craft-unit-meta" data-section-rise-group>
               <div class="craft-unit-mask" data-section-rise-mask>
                  <h3 class="craft-unit-name" data-section-rise>
                     {{ unit.name }}
                  </h3>
               </div>
               <div class="craft-unit-mask" data-section-rise-mask>
                  <p class="craft-unit-address" data-section-rise>
                     {{ unit.address }}
                  </p>
               </div>
            </div>
         </article>
      </div>
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.craft-units {
   @apply pt-section;
}

.craft-unit-grid {
   @apply mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-2 md:gap-8 xl:gap-12;
}

.craft-unit {
   @apply flex min-w-0 flex-col gap-6;
}

.craft-unit-media {
   @apply aspect-4/3 w-full;
}

.craft-unit-mask {
   @apply overflow-hidden;
}

.craft-unit-name {
   @apply m-0 pb-[0.14em] text-4xl leading-none font-bold tracking-[-0.025em] md:text-5xl;
}

.craft-unit-address {
   @apply m-0 mt-2 max-w-[32ch] pb-[0.1em] text-lg leading-snug font-medium tracking-[-0.02em] text-brand-subtle md:text-xl;
}
</style>
