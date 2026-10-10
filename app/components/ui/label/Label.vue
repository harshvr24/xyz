<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Label } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends LabelProps {
	class?: HTMLAttributes['class']
}

const { as, asChild, class: className, for: htmlFor } = defineProps<Props>()
</script>

<template>
	<Label
		data-slot="label"
		:as="as"
		:as-child="asChild"
		:for="htmlFor"
		:class="
			cn(
				'flex items-center gap-2 text-base leading-none font-semibold tracking-[-0.02em] select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
				className,
			)
		"
	>
		<slot />
	</Label>
</template>
