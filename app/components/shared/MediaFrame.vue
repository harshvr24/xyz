<script setup lang="ts">
const { mat = false } = defineProps<{
   mat?: boolean;
}>();
</script>

<template>
   <div
      class="media-frame"
      :class="{ 'media-frame-mat': mat }"
      data-media-frame
   >
      <div class="media-frame-layer" data-media-frame-layer>
         <slot />
      </div>
   </div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.media-frame {
   @apply relative overflow-hidden rounded-2xl bg-muted;
}

.media-frame-mat,
.media-frame-mat .media-frame-layer {
   @apply media-mat;
}

.media-frame-layer {
   @apply absolute inset-0;
}

.media-frame-layer > :deep(*) {
   @apply size-full object-cover select-none;
}

.media-frame-mat .media-frame-layer > :deep(img) {
   @apply p-[14%] media-mat-image;
}
</style>
