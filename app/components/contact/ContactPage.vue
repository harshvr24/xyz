<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import EnquiryForm from "@/components/contact/EnquiryForm.vue";
import SiteNavLink from "@/components/layout/SiteNavLink.vue";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";
import { findProductBySlug, getRange } from "@/lib/catalogue";
import { appIcons } from "@/lib/icons";
import { site } from "@/lib/site";

const titleLines: readonly LineTitleLine[] = [
	{ text: "Request" },
	{ text: "a quote", underlined: "quote" },
];

const route = useRoute();

function firstQueryValue(value: unknown) {
	const entry = Array.isArray(value) ? value[0] : value;

	return typeof entry === "string" ? entry : "";
}

const subject = computed(() => {
	const product = findProductBySlug(firstQueryValue(route.query.product));
	if (product) return product.name;

	return getRange(firstQueryValue(route.query.range))?.title ?? "";
});

const contactRoot = useTemplateRef<HTMLElement>("contactRoot");
const { titleRevealed } = useSectionRevealMotion(contactRoot);
</script>

<template>
	<section ref="contactRoot" class="contact section-gutter">
		<div class="contact-intro">
			<LineTitle as="h1" :drawn="titleRevealed" :lines="titleLines" />
			<p class="page-copy contact-copy">
				Tell us which products you are interested in, roughly how many and
				where they would ship. We will come back with a quote and the next
				steps for sampling.
			</p>

			<dl class="contact-details">
				<div class="contact-detail">
					<dt class="contact-term">
						<Icon :name="appIcons.mail" aria-hidden="true" />
						Email
					</dt>
					<dd class="contact-value">
						<SiteNavLink
							:href="`mailto:${site.email}`"
							:label="site.email"
							size="inherit"
						/>
					</dd>
				</div>
				<div class="contact-detail">
					<dt class="contact-term">
						<Icon :name="appIcons.phone" aria-hidden="true" />
						Phone
					</dt>
					<dd
						v-for="phone in site.phones"
						:key="phone"
						class="contact-value"
					>
						{{ phone }}
					</dd>
				</div>
				<div
					v-for="unit in site.units"
					:key="unit.name"
					class="contact-detail"
				>
					<dt class="contact-term">
						<Icon :name="appIcons.mapPin" aria-hidden="true" />
						{{ unit.name }}
					</dt>
					<dd class="contact-value contact-address">{{ unit.address }}</dd>
				</div>
			</dl>
		</div>

		<EnquiryForm :key="subject" class="contact-form" :subject="subject" />
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.contact {
	@apply grid grid-cols-1 items-start gap-14 pt-10 pb-section lg:grid-cols-[5fr_6fr] lg:gap-16 lg:pt-16 xl:gap-24;
}

.contact-intro {
	@apply flex min-w-0 flex-col;
}

.contact-copy {
	@apply mt-12 md:mt-16;
}

.contact-details {
	@apply m-0 mt-12 grid gap-8 sm:grid-cols-2;
}

.contact-detail {
	@apply flex min-w-0 flex-col gap-1.5;
}

.contact-term {
	@apply flex items-center gap-2 text-base font-semibold tracking-[-0.02em] text-brand-soft;
}

.contact-value {
	@apply m-0 text-xl leading-tight font-semibold tracking-[-0.03em] wrap-break-word;
}

.contact-address {
	@apply max-w-[24ch] text-lg leading-snug font-medium;
}
</style>
