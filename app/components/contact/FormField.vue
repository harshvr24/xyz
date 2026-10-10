<script setup lang="ts">
import { computed } from 'vue'
import { Label } from '@/components/ui/label'

const {
	error,
	id,
	label,
	optional = false,
} = defineProps<{
	error?: string
	id: string
	label: string
	optional?: boolean
}>()

const errorId = computed(() => `${id}-error`)
const describedBy = computed(() => (error ? errorId.value : undefined))
const invalid = computed(() => (error ? true : undefined))
</script>

<template>
	<div class="form-field">
		<Label :for="id">
			{{ label }}
			<span v-if="optional" class="form-field-optional">Optional</span>
		</Label>
		<slot :described-by="describedBy" :invalid="invalid" />
		<p v-if="error" :id="errorId" class="form-field-error" role="alert">
			{{ error }}
		</p>
	</div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.form-field {
	@apply flex min-w-0 flex-col gap-2.5;
}

.form-field-optional {
	@apply text-sm leading-none font-medium text-brand-soft;
}

.form-field-error {
	@apply m-0 text-base leading-snug font-medium text-destructive;
}
</style>
