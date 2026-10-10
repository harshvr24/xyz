<script setup lang="ts">
import { shallowRef, useTemplateRef } from "vue";
import EditorialStatement from "@/components/shared/EditorialStatement.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import LineTitleMedia from "@/components/shared/LineTitleMedia.vue";
import type { SplitTextResult } from "@/lib/split-text";

const titleLines: readonly LineTitleLine[] = [
   { text: "Quality you" },
   { text: "can rely on", underlined: "rely" },
];

const headingImages = [
   {
      height: 804,
      src: "/images/products/leather-goods/saddle.jpg",
      width: 888,
   },
   {
      height: 495,
      src: "/images/products/leather-goods/stirrup-leather.jpg",
      width: 1393,
   },
   {
      height: 1028,
      src: "/images/products/horse-rugs/stable-rug.jpg",
      width: 1660,
   },
   {
      height: 687,
      src: "/images/products/leather-goods/training-roller.jpg",
      width: 417,
   },
] as const;

const statement =
   "Quality is planned for, not inspected in at the end. We give every order the people, materials and time it needs, hold each piece to its approved sample, and keep improving the way we work so buyers can rely on what arrives.";

const qualityRoot = useTemplateRef<HTMLElement>("qualityRoot");
const statementSplit = shallowRef<SplitTextResult>();
const { titleRevealed } = useSectionRevealMotion(qualityRoot, {
   textSplits: () => [statementSplit.value],
});

function setStatementSplit(parts: SplitTextResult) {
   statementSplit.value = parts;
}
</script>

<template>
   <section ref="qualityRoot" class="craft-quality section-gutter">
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
