<script setup lang="ts">
import { shallowRef, useTemplateRef } from "vue";
import LineTitleMedia from "@/components/shared/LineTitleMedia.vue";
import EditorialStatement from "@/components/shared/EditorialStatement.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import type { SplitTextResult } from "@/lib/split-text";

const titleLines: readonly LineTitleLine[] = [
   { text: "Where we" },
   { text: "are going", underlined: "going" },
];

const headingImages = [
   { height: 1607, src: "/images/products/horse-rugs/fleece-rug.jpg", width: 2143 },
   { height: 1490, src: "/images/products/horse-rugs/coolex-rug.jpg", width: 1612 },
   { height: 556, src: "/images/products/leather-goods/long-riding-boot.jpg", width: 716 },
   { height: 1592, src: "/images/products/horse-rugs/rain-rug.jpg", width: 2252 },
] as const;

const statement =
   "Our vision is to stay ahead of the craft. We adopt better materials and methods as they prove themselves, so the goods leaving our units are the best we know how to make.";

const brandsRoot = useTemplateRef<HTMLElement>("brandsRoot");
const statementSplit = shallowRef<SplitTextResult>();
const { titleRevealed } = useSectionRevealMotion(brandsRoot, {
   textSplits: () => [statementSplit.value],
});

function setStatementSplit(parts: SplitTextResult) {
   statementSplit.value = parts;
}
</script>

<template>
   <section ref="brandsRoot" class="about-brands section-gutter">
      <LineTitleMedia
         :drawn="titleRevealed"
         fit="contain"
         :images="headingImages"
         :lines="titleLines"
      />

      <EditorialStatement :text="statement" @split="setStatementSplit" />
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.about-brands {
   @apply pb-section;
}
</style>
