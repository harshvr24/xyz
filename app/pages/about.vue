<script setup lang="ts">
import AboutPage from "@/components/about/AboutPage.vue";
import { site } from "@/lib/site";

const title = `About ${site.name} | Leather saddlery and horse rugs`;
const description = `Meet ${site.name}, a leather and textile house making saddlery, horse rugs, yard accessories and dog products for export buyers.`;

usePageSeo({ description, title });
</script>

<template>
   <AboutPage />
</template>
