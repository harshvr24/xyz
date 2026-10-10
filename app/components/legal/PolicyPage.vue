<script setup lang="ts">
import SiteNavLink from "@/components/layout/SiteNavLink.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import PageHero from "@/components/shared/PageHero.vue";
import { site } from "@/lib/site";

const { description, lines } = defineProps<{
   description: string;
   lines: readonly LineTitleLine[];
}>();
</script>

<template>
   <div class="policy-page">
      <PageHero :description="description" :lines="lines" size="compact" />

      <section class="page-sheet section-gutter">
         <div class="policy-body">
            <h2 class="policy-title">This policy is being prepared</h2>
            <p class="page-copy">
               The full text will be published here before the site opens to
               buyers. If you have a question in the meantime, write to us and
               we will answer it directly.
            </p>
            <p class="policy-contact">
               <SiteNavLink
                  :href="`mailto:${site.email}`"
                  :label="site.email"
                  size="inherit"
               />
            </p>
         </div>
      </section>
   </div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.policy-page {
   @apply overflow-x-clip;
}

.policy-body {
   @apply flex max-w-3xl flex-col gap-6;
}

.policy-title {
   @apply m-0 text-4xl leading-none font-bold tracking-[-0.025em] md:text-5xl;
}

.policy-contact {
   @apply m-0 text-xl leading-tight font-semibold tracking-[-0.03em] md:text-2xl;
}
</style>
