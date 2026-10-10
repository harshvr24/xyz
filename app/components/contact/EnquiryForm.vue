<script setup lang="ts">
import { computed, onMounted, reactive, shallowRef } from 'vue'
import { enquirySchema } from '#shared/schemas/enquiry'
import type { EnquiryField } from '#shared/schemas/enquiry'
import FormField from '@/components/contact/FormField.vue'
import { Button, ButtonIcon } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { appIcons } from '@/lib/icons'
import { site } from '@/lib/site'

type FormState = 'error' | 'idle' | 'submitting' | 'success'
type FieldErrors = Partial<Record<EnquiryField, string>>

const { subject = '' } = defineProps<{
	subject?: string
}>()

const form = reactive({
	company: '',
	consent: false,
	country: '',
	email: '',
	message: '',
	name: '',
	phone: '',
	quantity: '',
	subject,
	website: '',
})

const state = shallowRef<FormState>('idle')
const errors = shallowRef<FieldErrors>({})
const startedAt = shallowRef(0)
const submitting = computed(() => state.value === 'submitting')
const mailtoHref = `mailto:${site.email}`

onMounted(() => {
	startedAt.value = Date.now()
})

function isEnquiryField(value: PropertyKey | undefined): value is EnquiryField {
	return typeof value === 'string' && value in enquirySchema.shape
}

function collectErrors(
	issues: readonly { message: string; path: readonly PropertyKey[] }[],
) {
	const next: FieldErrors = {}

	for (const issue of issues) {
		const field = issue.path[0]
		if (!isEnquiryField(field)) continue

		next[field] ??= issue.message
	}

	return next
}

async function submitEnquiry() {
	if (submitting.value) return

	const payload = { ...form, startedAt: startedAt.value }
	const result = enquirySchema.safeParse(payload)

	if (!result.success) {
		errors.value = collectErrors(result.error.issues)
		state.value = 'idle'
		return
	}

	errors.value = {}
	state.value = 'submitting'

	try {
		await $fetch('/api/enquiry', {
			body: result.data,
			method: 'POST',
		})
		state.value = 'success'
	} catch {
		state.value = 'error'
	}
}
</script>

<template>
	<div class="enquiry">
		<div
			v-if="state === 'success'"
			class="enquiry-success"
			role="status"
			tabindex="-1"
		>
			<Icon
				class="enquiry-success-icon"
				:name="appIcons.check"
				aria-hidden="true"
			/>
			<h2 class="enquiry-success-title">Thank you. Your enquiry is with us.</h2>
			<p class="enquiry-success-copy">
				We will read it carefully and reply to the email address you gave us.
			</p>
		</div>

		<form v-else class="enquiry-form" novalidate @submit.prevent="submitEnquiry">
			<div class="enquiry-row">
				<FormField
					id="enquiry-name"
					v-slot="{ describedBy, invalid }"
					label="Your name"
					:error="errors.name"
				>
					<Input
						id="enquiry-name"
						v-model="form.name"
						name="name"
						autocomplete="name"
						required
						:aria-describedby="describedBy"
						:aria-invalid="invalid"
					/>
				</FormField>
				<FormField
					id="enquiry-company"
					v-slot="{ describedBy, invalid }"
					label="Company"
					optional
					:error="errors.company"
				>
					<Input
						id="enquiry-company"
						v-model="form.company"
						name="company"
						autocomplete="organization"
						:aria-describedby="describedBy"
						:aria-invalid="invalid"
					/>
				</FormField>
			</div>

			<div class="enquiry-row">
				<FormField
					id="enquiry-email"
					v-slot="{ describedBy, invalid }"
					label="Email"
					:error="errors.email"
				>
					<Input
						id="enquiry-email"
						v-model="form.email"
						name="email"
						type="email"
						autocomplete="email"
						inputmode="email"
						required
						:aria-describedby="describedBy"
						:aria-invalid="invalid"
					/>
				</FormField>
				<FormField
					id="enquiry-phone"
					v-slot="{ describedBy, invalid }"
					label="Phone"
					optional
					:error="errors.phone"
				>
					<Input
						id="enquiry-phone"
						v-model="form.phone"
						name="phone"
						type="tel"
						autocomplete="tel"
						inputmode="tel"
						:aria-describedby="describedBy"
						:aria-invalid="invalid"
					/>
				</FormField>
			</div>

			<div class="enquiry-row">
				<FormField
					id="enquiry-country"
					v-slot="{ describedBy, invalid }"
					label="Shipping to"
					:error="errors.country"
				>
					<Input
						id="enquiry-country"
						v-model="form.country"
						name="country"
						autocomplete="country-name"
						placeholder="Country"
						required
						:aria-describedby="describedBy"
						:aria-invalid="invalid"
					/>
				</FormField>
				<FormField
					id="enquiry-quantity"
					v-slot="{ describedBy, invalid }"
					label="Quantity"
					optional
					:error="errors.quantity"
				>
					<Input
						id="enquiry-quantity"
						v-model="form.quantity"
						name="quantity"
						placeholder="For example, 200 pieces"
						:aria-describedby="describedBy"
						:aria-invalid="invalid"
					/>
				</FormField>
			</div>

			<FormField
				id="enquiry-subject"
				v-slot="{ describedBy, invalid }"
				label="Product or range"
				optional
				:error="errors.subject"
			>
				<Input
					id="enquiry-subject"
					v-model="form.subject"
					name="subject"
					placeholder="For example, Soft Crown Bridle"
					:aria-describedby="describedBy"
					:aria-invalid="invalid"
				/>
			</FormField>

			<FormField
				id="enquiry-message"
				v-slot="{ describedBy, invalid }"
				label="What do you need?"
				:error="errors.message"
			>
				<Textarea
					id="enquiry-message"
					v-model="form.message"
					name="message"
					required
					placeholder="Sizes, colours, materials, hardware and when you need it"
					:aria-describedby="describedBy"
					:aria-invalid="invalid"
				/>
			</FormField>

			<div class="enquiry-trap" aria-hidden="true">
				<label for="enquiry-website">Website</label>
				<input
					id="enquiry-website"
					v-model="form.website"
					name="website"
					type="text"
					tabindex="-1"
					autocomplete="off"
				>
			</div>

			<div class="enquiry-consent">
				<input
					id="enquiry-consent"
					v-model="form.consent"
					class="enquiry-checkbox"
					name="consent"
					type="checkbox"
					required
					:aria-describedby="errors.consent ? 'enquiry-consent-error' : undefined"
					:aria-invalid="errors.consent ? true : undefined"
				>
				<Label for="enquiry-consent" class="enquiry-consent-label">
					You may contact me about this enquiry.
				</Label>
				<p
					v-if="errors.consent"
					id="enquiry-consent-error"
					class="enquiry-consent-error"
					role="alert"
				>
					{{ errors.consent }}
				</p>
			</div>

			<p v-if="state === 'error'" class="enquiry-failure" role="alert">
				We could not send your enquiry just now. Please try again, or write to
				<a class="enquiry-failure-link" :href="mailtoHref">{{ site.email }}</a
				>.
			</p>

			<div class="enquiry-actions">
				<Button
					type="submit"
					variant="default"
					size="cta-lg"
					:disabled="submitting"
					:aria-busy="submitting || undefined"
				>
					{{ submitting ? 'Sending' : 'Send enquiry' }}
					<template #icon>
						<ButtonIcon :icon="appIcons.arrowRight" />
					</template>
				</Button>
			</div>
		</form>
	</div>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.enquiry {
	@apply rounded-2xl bg-paper p-5 text-paper-foreground shadow-xl shadow-foreground/5 md:p-8 xl:p-10;
}

.enquiry-form {
	@apply flex flex-col gap-6;
}

.enquiry-row {
	@apply grid grid-cols-1 gap-6 sm:grid-cols-2;
}

.enquiry-trap {
	@apply absolute -left-[200vw] size-px overflow-hidden;
}

.enquiry-consent {
	@apply grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2;
}

.enquiry-checkbox {
	@apply size-5 shrink-0 cursor-pointer rounded-sm border border-input accent-primary outline-none focus-visible:ring-3 focus-visible:ring-ring/40;
}

.enquiry-consent-label {
	@apply cursor-pointer text-base leading-snug font-medium;
}

.enquiry-consent-error {
	@apply col-span-2 m-0 text-base leading-snug font-medium text-destructive;
}

.enquiry-failure {
	@apply m-0 rounded-action border border-destructive/40 bg-card px-4 py-3 text-base leading-snug font-medium text-destructive;
}

.enquiry-failure-link {
	@apply underline underline-offset-4;
}

.enquiry-actions {
	@apply flex;
}

.enquiry-success {
	@apply flex flex-col items-start gap-4 py-8 outline-none md:py-12;
}

.enquiry-success-icon {
	@apply size-12 rounded-full bg-brand-forest p-2.5 text-brand-forest-foreground;
}

.enquiry-success-title {
	@apply m-0 text-4xl leading-none font-bold tracking-[-0.025em] text-balance md:text-5xl;
}

.enquiry-success-copy {
	@apply m-0 max-w-[40ch] text-xl leading-snug font-medium text-brand-subtle;
}
</style>
