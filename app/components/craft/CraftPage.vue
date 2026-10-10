<script setup lang="ts">
import EnquiryCta from "@/components/shared/EnquiryCta.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import PageHero from "@/components/shared/PageHero.vue";
import CraftQualitySection from "./CraftQualitySection.vue";
import CraftStagesSection from "./CraftStagesSection.vue";
import CraftUnitsSection from "./CraftUnitsSection.vue";

const heroLines: readonly LineTitleLine[] = [
   { text: "How we" },
   { text: "make it" },
];
const heroDescription =
   "From the first pattern to the packed carton, every piece follows the same path through cutting, stitching, finishing and inspection.";
const ctaLines: readonly LineTitleLine[] = [
   { text: "Made for" },
   { text: "your riders" },
];
</script>

<template>
   <div class="craft-page">
      <PageHero :description="heroDescription" :lines="heroLines" />

      <div class="page-sheet">
         <CraftQualitySection />
         <CraftStagesSection />
         <CraftUnitsSection />
      </div>

      <EnquiryCta class="craft-cta" :lines="ctaLines" />
   </div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.craft-page {
   @apply overflow-x-clip;
}

.craft-cta {
   @apply relative z-10;
}
</style>
