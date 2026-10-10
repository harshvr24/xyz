<script setup lang="ts">
import SplitText from "@/components/shared/SplitText.vue";
import type { SplitTextResult } from "@/lib/split-text";

const { text } = defineProps<{
   text: string;
}>();

const emit = defineEmits<{
   split: [parts: SplitTextResult];
}>();

function handleSplit(parts: SplitTextResult) {
   emit("split", parts);
}
</script>

<template>
   <SplitText
      class="editorial-statement"
      data-section-text
      as="p"
      mask="lines"
      :text="text"
      type="lines,words"
      @split="handleSplit"
   />
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.editorial-statement {
   @apply m-0 mt-20 font-heading text-2xl leading-[0.95] font-medium tracking-[-0.02em] text-pretty md:mt-28 md:ml-auto md:w-2/3 md:text-4xl xl:mt-36 xl:text-5xl;
}

.editorial-statement :deep(.split-text-line),
.editorial-statement :deep(.split-text-line-mask) {
   display: block;
}

.editorial-statement :deep(.split-text-line-mask) {
   margin-block: -0.12em -0.18em;
   padding-block: 0.12em 0.18em;
}

.editorial-statement :deep(.split-text-word) {
   display: inline-block;
}

.editorial-statement :deep(.split-text-line) {
   visibility: hidden;
}
</style>
