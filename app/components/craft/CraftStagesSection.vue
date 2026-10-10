<script setup lang="ts">
import { useTemplateRef } from "vue";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";

const titleLines: readonly LineTitleLine[] = [
   { text: "From hide" },
   { text: "to harness", underlined: "harness" },
];

const stages = [
   {
      body: "Patterns are drawn for each product and size. Hides and cloth are laid out, marked and cut so the best of the material goes where it shows and where it works hardest.",
      number: "01",
      title: "Pattern and cutting",
   },
   {
      body: "Edges are skived, creased and dyed. Padding is shaped, linings are bonded and fittings are set out ready for the stitcher.",
      number: "02",
      title: "Preparation",
   },
   {
      body: "Leather is stitched on heavy machines and by hand where a machine cannot reach. Rugs and pads are sewn on machines built for thick, layered cloth.",
      number: "03",
      title: "Stitching",
   },
   {
      body: "Edges are burnished, hardware is fitted and each piece is cleaned, dressed and checked for symmetry.",
      number: "04",
      title: "Finishing",
   },
   {
      body: "Finished goods are checked against the approved sample for size, stitching, fittings and finish before they are passed for packing.",
      number: "05",
      title: "Inspection",
   },
   {
      body: "Orders are packed to travel, labelled to your instructions and sent with the documents your shipment needs.",
      number: "06",
      title: "Packing and export",
   },
] as const;

const stagesRoot = useTemplateRef<HTMLElement>("stagesRoot");
const { titleRevealed } = useSectionRevealMotion(stagesRoot);
</script>

<template>
   <section ref="stagesRoot" class="craft-stages section-gutter">
      <LineTitle :drawn="titleRevealed" :lines="titleLines" />

      <ol class="craft-stage-list">
         <li
            v-for="stage in stages"
            :key="stage.number"
            class="craft-stage"
            data-section-rise-group
         >
            <div class="craft-stage-mask" data-section-rise-mask>
               <span class="craft-stage-number" data-section-rise>
                  {{ stage.number }}
               </span>
            </div>
            <div class="craft-stage-mask" data-section-rise-mask>
               <h3 class="craft-stage-title" data-section-rise>
                  {{ stage.title }}
               </h3>
            </div>
            <div class="craft-stage-mask" data-section-rise-mask>
               <p class="craft-stage-body" data-section-rise>
                  {{ stage.body }}
               </p>
            </div>
         </li>
      </ol>
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.craft-stages {
   @apply pt-section;
}

.craft-stage-list {
   @apply m-0 mt-16 list-none p-0 md:mt-24;
}

.craft-stage {
   @apply grid grid-cols-1 gap-x-10 gap-y-3 border-t border-border py-8 md:grid-cols-[6rem_minmax(0,2fr)_minmax(0,3fr)] md:items-baseline md:py-10 xl:py-12;
}

.craft-stage:last-child {
   @apply border-b;
}

.craft-stage-mask {
   @apply overflow-hidden;
}

.craft-stage-number {
   @apply block pb-[0.1em] text-xl font-bold tracking-[-0.02em] text-primary tabular-nums md:text-2xl;
}

.craft-stage-title {
   @apply m-0 pb-[0.14em] text-4xl leading-none font-bold tracking-[-0.025em] md:text-5xl xl:text-6xl;
}

.craft-stage-body {
   @apply m-0 max-w-[44ch] pb-[0.1em] text-lg leading-snug font-medium tracking-[-0.02em] text-brand-subtle md:text-xl xl:text-2xl;
}
</style>
