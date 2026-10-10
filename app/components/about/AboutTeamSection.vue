<script setup lang="ts">
import { defineAsyncComponent, useTemplateRef } from "vue";
import DrawnLine from "@/components/shared/DrawnLine.vue";
import { aboutTeamLine } from "@/lib/about-line-path";
import { appIcons } from "@/lib/icons";
import { site } from "@/lib/site";
import AboutTeamMember from "./AboutTeamMember.vue";
import type {
	AboutMemberPortrait,
	AboutMemberSocial,
} from "./AboutTeamMember.vue";
import LineTitle from "@/components/shared/LineTitle.vue";
import type { LineTitleLine } from "@/components/shared/LineTitle.vue";

const TrailingTooltip = defineAsyncComponent(
	() => import("@/components/shared/TrailingTooltip.vue"),
);

const titleLines: readonly LineTitleLine[] = [
	{ text: "Who stands" },
	{ text: "behind the house", underlined: "behind" },
];

const tooltipLabel = "More Info";
const pendingRole = "Name and profile to follow";
const pendingBio = [
	"This profile is waiting for its portrait and a few lines about the person behind the role.",
	"Until then, the quickest way to reach the team is by email.",
];

interface TeamMember {
	bio: readonly string[];
	name: string;
	portrait?: AboutMemberPortrait;
	role: string;
	socials: readonly AboutMemberSocial[];
}

const emailSocial: AboutMemberSocial = {
	href: `mailto:${site.email}`,
	icon: appIcons.mail,
	label: "Email",
};

const members: readonly TeamMember[] = [
	"Managing Partner",
	"Partner, Production",
	"Partner, Sales",
	"Head Merchandiser",
].map((name) => ({
	bio: pendingBio,
	name,
	role: pendingRole,
	socials: [emailSocial],
}));

const teamRoot = useTemplateRef<HTMLElement>("teamRoot");
const { titleRevealed } = useSectionRevealMotion(teamRoot);
const {
	active: tooltipActive,
	hide: hideTooltip,
	shouldLoad: shouldLoadTooltip,
	show: showTooltip,
} = useTrailingTooltip();
useDrawnLineMotion(teamRoot, aboutTeamLine);

function activateTooltip() {
	showTooltip();
}
</script>

<template>
	<section ref="teamRoot" class="about-team section-gutter">
		<DrawnLine class="about-team-line" />

		<LineTitle :drawn="titleRevealed" :lines="titleLines" />

		<div class="about-team-members">
			<AboutTeamMember
				v-for="member in members"
				:key="member.name"
				class="about-team-member"
				:bio="member.bio"
				:name="member.name"
				:portrait="member.portrait"
				:role="member.role"
				:socials="member.socials"
				@activate="activateTooltip"
				@deactivate="hideTooltip"
			/>
		</div>

		<TrailingTooltip
			v-if="shouldLoadTooltip"
			:active="tooltipActive"
			:icon="appIcons.arrowUpRight"
			:label="tooltipLabel"
		/>
	</section>
</template>

<style scoped>
@reference '../../assets/css/tailwind.css';

.about-team {
	@apply relative z-10 rounded-t-[clamp(1.5rem,3vw,3rem)] bg-canvas-shade py-section text-canvas-shade-foreground;
	--about-member-width: clamp(16rem, 34vw, 32rem);
}

.about-team-line {
	@apply inset-0 size-full overflow-hidden text-ribbon;
}

.about-team-members {
	@apply mt-16 flex flex-col gap-16 md:mt-20;
}

.about-team-member {
	@apply max-w-md md:max-w-none md:w-(--about-member-width);
}

.about-team-member:nth-child(odd) {
	@apply self-end;
}

.about-team-member:nth-child(even) {
	@apply self-start;
}

@media (min-width: 48rem) {
	.about-team-member:nth-child(even) {
		margin-top: calc(var(--about-member-width) * -0.45);
	}
}
</style>
