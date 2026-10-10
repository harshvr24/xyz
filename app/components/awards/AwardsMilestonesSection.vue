<script setup lang="ts">
import { shallowRef, useTemplateRef } from "vue";
import EditorialStatement from "@/components/shared/EditorialStatement.vue";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import MediaFrame from "@/components/shared/MediaFrame.vue";
import MediaPlaceholder from "@/components/shared/MediaPlaceholder.vue";
import type { SplitTextResult } from "@/lib/split-text";

const titleLines: readonly LineTitleLine[] = [
   { text: "The" },
   { text: "milestones", underlined: "milestones" },
];

const statement =
   "Recognition is earned one season at a time. This page is kept for the awards, certificates and memberships of the house, each shown with its year and the body that granted it.";

const milestones = [
   { id: "awards", label: "Award to follow", title: "Awards" },
   { id: "certificates", label: "Certificate to follow", title: "Certificates" },
   { id: "memberships", label: "Membership to follow", title: "Memberships" },
] as const;

const milestonesRoot = useTemplateRef<HTMLElement>("milestonesRoot");
const statementSplit = shallowRef<SplitTextResult>();
const { titleRevealed } = useSectionRevealMotion(milestonesRoot, {
   textSplits: () => [statementSplit.value],
});

function setStatementSplit(parts: SplitTextResult) {
   statementSplit.value = parts;
}
</script>

<template>
   <section ref="milestonesRoot" class="awards-milestones section-gutter">
      <LineTitle
         :drawn="titleRevealed"
         :lines="titleLines"
         underline-color="var(--color-ribbon)"
      />
      <EditorialStatement :text="statement" @split="setStatementSplit" />

      <div class="awards-grid">
         <article
            v-for="milestone in milestones"
            :key="milestone.id"
            class="awards-item"
         >
            <MediaFrame class="awards-item-media">
               <MediaPlaceholder :label="milestone.label" />
            </MediaFrame>
            <div class="awards-item-meta" data-section-rise-group>
               <div class="awards-item-mask" data-section-rise-mask>
                  <h3 class="awards-item-title" data-section-rise>
                     {{ milestone.title }}
                  </h3>
               </div>
               <div class="awards-item-mask" data-section-rise-mask>
                  <p class="awards-item-note" data-section-rise>
                     Details to be confirmed
                  </p>
               </div>
            </div>
         </article>
      </div>
   </section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.awards-grid {
   @apply mt-section grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-12;
}

.awards-item {
   @apply flex min-w-0 flex-col gap-6;
}

.awards-item-media {
   @apply aspect-4/5 w-full;
}

.awards-item-mask {
   @apply overflow-hidden;
}

.awards-item-title {
   @apply m-0 pb-[0.14em] text-4xl leading-none font-bold tracking-[-0.025em] md:text-5xl;
}

.awards-item-note {
   @apply m-0 mt-2 pb-[0.1em] text-lg leading-snug font-medium tracking-[-0.02em] text-brand-subtle md:text-xl;
}
</style>
