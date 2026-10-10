<script setup lang="ts">
import { useTemplateRef } from "vue";
import DrawnLine from "@/components/shared/DrawnLine.vue";
import EnquiryCta from "@/components/shared/EnquiryCta.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import PageHero from "@/components/shared/PageHero.vue";
import { aboutStoryLine } from "@/lib/about-line-path";
import { site } from "@/lib/site";
import AboutBrandsSection from "./AboutBrandsSection.vue";
import AboutTeamSection from "./AboutTeamSection.vue";
import AboutTrustSection from "./AboutTrustSection.vue";

const heroLines: readonly LineTitleLine[] = [
   { text: "Welcome to" },
   { text: site.name },
];
const heroDescription =
   "A leather and textile house making saddlery, horse rugs and yard essentials for riders, and a range for their dogs.";
const heroTrailImages = [
   "leather-goods/soft-crown-bridle",
   "leather-goods/saddle",
   "horse-rugs/fleece-rug",
   "leather-goods/soft-range-halter",
   "leather-goods/long-riding-boot",
   "horse-rugs/stable-rug",
   "leather-goods/training-roller",
].map((name) => `/images/products/${name}.jpg`);

const storyRoot = useTemplateRef<HTMLElement>("storyRoot");
useDrawnLineMotion(storyRoot, aboutStoryLine);
</script>

<template>
   <div class="about-page">
      <PageHero
         :description="heroDescription"
         :lines="heroLines"
         :trail-images="heroTrailImages"
      />
      <AboutTeamSection />
      <div ref="storyRoot" class="about-story">
         <DrawnLine class="about-story-line" />
         <AboutTrustSection />
         <AboutBrandsSection data-drawn-line-anchor />
         <EnquiryCta data-drawn-line-anchor />
      </div>
   </div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.about-page {
   @apply overflow-x-clip;
}

.about-story {
   @apply relative isolate;
}

.about-story-line {
   @apply inset-0 size-full overflow-hidden text-foreground opacity-3;
}
</style>
