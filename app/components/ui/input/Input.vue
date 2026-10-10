<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const { class: className } = defineProps<{
	class?: HTMLAttributes['class']
}>()

const model = defineModel<string>({ default: '' })
</script>

<template>
	<input
		v-model="model"
		data-slot="input"
		:class="
			cn(
				'h-13 w-full min-w-0 rounded-action border border-input bg-card px-4 text-lg font-medium text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-brand-soft focus-visible:border-foreground focus-visible:ring-3 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20',
				className,
			)
		"
	>
</template>
