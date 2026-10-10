<script setup lang="ts">
import EnquiryCta from "@/components/shared/EnquiryCta.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import PageHero from "@/components/shared/PageHero.vue";
import AwardsMilestonesSection from "./AwardsMilestonesSection.vue";

const heroLines: readonly LineTitleLine[] = [
   { text: "Awards and" },
   { text: "recognition" },
];
const heroDescription =
   "The record of the house: the awards it has received, the standards it is certified to and the trade bodies it belongs to.";
</script>

<template>
   <div class="awards-page">
      <PageHero :description="heroDescription" :lines="heroLines" />

      <div class="page-sheet">
         <AwardsMilestonesSection />
      </div>

      <EnquiryCta class="awards-cta" />
   </div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.awards-page {
   @apply overflow-x-clip;
}

.awards-cta {
   @apply relative z-10;
}
</style>
