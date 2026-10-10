<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { NuxtLink } from "#components";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import { Button, ButtonIcon } from "@/components/ui/button";
import { appIcons } from "@/lib/icons";
import { site } from "@/lib/site";

const { lines } = defineProps<{
   lines?: readonly LineTitleLine[];
}>();

const titleLines = computed<readonly LineTitleLine[]>(
   () => lines ?? [{ text: "Ride with" }, { text: site.name }],
);

const ctaRoot = useTemplateRef<HTMLElement>("ctaRoot");
useSectionRevealMotion(ctaRoot);
</script>

<template>
   <section ref="ctaRoot" class="enquiry-cta section-gutter">
      <div class="enquiry-cta-content">
         <LineTitle :lines="titleLines" size="display" />
         <div class="enquiry-cta-action-group" data-section-rise-group>
            <div data-section-rise-mask>
               <span class="enquiry-cta-action-rise" data-section-rise>
                  <Button
                     class="enquiry-cta-action"
                     :as="NuxtLink"
                     :to="site.enquiryRoute"
                     variant="dark"
                     size="cta-lg"
                  >
                     {{ site.enquiryLabel }}
                     <template #icon>
                        <ButtonIcon :icon="appIcons.arrowRight" />
                     </template>
                  </Button>
               </span>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.enquiry-cta {
   @apply grid min-h-svh place-items-center rounded-t-[clamp(1.5rem,3vw,3rem)] bg-ribbon py-section text-center text-ribbon-foreground;
}

.enquiry-cta-content {
   @apply flex flex-col items-center;
}

.enquiry-cta-content :deep(.line-title-display) {
   font-size: min(clamp(3.5rem, 11vw, 12rem), 12vw);
}

.enquiry-cta-action-group {
   @apply mt-16 md:mt-24;
}

.enquiry-cta-action-rise {
   @apply block;
}

.enquiry-cta-action {
   gap: 0.6em;
   min-height: 2.6em;
   padding-inline: 1.1em;
   font-size: clamp(1.25rem, 2.2vw, 2rem);
}

.enquiry-cta-action :deep(.button-icon),
.enquiry-cta-action :deep(.button-icon svg) {
   width: 1em;
   height: 1em;
}
</style>
