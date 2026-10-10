<script setup lang="ts">
import { shallowRef, useTemplateRef } from "vue";
import LineTitleMedia from "@/components/shared/LineTitleMedia.vue";
import EditorialStatement from "@/components/shared/EditorialStatement.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import type { SplitTextResult } from "@/lib/split-text";

const titleLines: readonly LineTitleLine[] = [
   { text: "Why buyers" },
   { text: "trust the house", underlined: "trust" },
];

const headingImages = [
   { height: 896, src: "/images/products/leather-goods/soft-crown-bridle.jpg", width: 480 },
   { height: 804, src: "/images/products/leather-goods/saddle.jpg", width: 888 },
   { height: 1226, src: "/images/products/leather-goods/soft-range-halter.jpg", width: 601 },
   { height: 584, src: "/images/products/leather-goods/pony-pad.jpg", width: 551 },
] as const;

const statement =
   "Our mission is simple: give companies and riders products they can count on. That means sound materials, new ideas where they help the horse, and the same standard on the last piece of an order as on the first.";

const trustRoot = useTemplateRef<HTMLElement>("trustRoot");
const statementSplit = shallowRef<SplitTextResult>();
const { titleRevealed } = useSectionRevealMotion(trustRoot, {
   textSplits: () => [statementSplit.value],
});

function setStatementSplit(parts: SplitTextResult) {
   statementSplit.value = parts;
}
</script>

<template>
   <section ref="trustRoot" class="about-trust section-gutter">
      <LineTitleMedia
         :drawn="titleRevealed"
         fit="contain"
         :images="headingImages"
         :lines="titleLines"
         underline-color="var(--color-ribbon)"
      />
      <EditorialStatement :text="statement" @split="setStatementSplit" />
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.about-trust {
   @apply py-section;
}
</style>
