<script setup lang="ts">
import ImageCycle from "@/components/shared/ImageCycle.vue";
import MediaFrame from "./MediaFrame.vue";
import LineTitle from "./LineTitle.vue";
import type { LineTitleLine } from "./LineTitle.vue";

interface HeadingImage {
   height: number;
   src: string;
   width: number;
}

const {
   drawn = false,
   fit = "cover",
   images,
   lines,
   underlineColor,
} = defineProps<{
   drawn?: boolean;
   fit?: "contain" | "cover";
   images: readonly HeadingImage[];
   lines: readonly LineTitleLine[];
   underlineColor?: string;
}>();
</script>

<template>
   <div class="line-title-media">
      <LineTitle
         :drawn="drawn"
         :lines="lines"
         :underline-color="underlineColor"
      />
      <MediaFrame class="line-title-media-frame" :mat="fit === 'contain'">
         <ImageCycle :fit="fit" :images="images" sizes="sm:640px" />
      </MediaFrame>
   </div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.line-title-media {
   @apply flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-8;
}

.line-title-media-frame {
   @apply aspect-5/6 w-[min(100%,20rem)] shrink-0 self-end md:self-auto md:w-[clamp(12rem,24vw,24rem)];
}
</style>
