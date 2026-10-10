import type { Enquiry } from '#shared/schemas/enquiry'

interface EnquiryDelivery {
	enquiryFrom: string
	enquiryTo: string
	resendApiKey: string
}

const resendEndpoint = 'https://api.resend.com/emails'

function singleLine(value: string) {
	return value.replace(/[\r\n]+/g, ' ').trim()
}

function formatEnquiry(enquiry: Enquiry) {
	const rows: readonly (readonly [string, string])[] = [
		['Name', enquiry.name],
		['Company', enquiry.company],
		['Email', enquiry.email],
		['Phone', enquiry.phone],
		['Ships to', enquiry.country],
		['Enquiry about', enquiry.subject],
		['Quantity', enquiry.quantity],
	]

	const details = rows
		.filter(([, value]) => value)
		.map(([label, value]) => `${label}: ${singleLine(value)}`)

	return [...details, '', enquiry.message].join('\n')
}

export async function sendEnquiryEmail(
	delivery: EnquiryDelivery,
	enquiry: Enquiry,
) {
	const { enquiryFrom, enquiryTo, resendApiKey } = delivery

	if (!resendApiKey || !enquiryTo || !enquiryFrom) {
		if (import.meta.dev) {
			console.info(
				'[enquiry] delivery is not configured, enquiry accepted in development',
			)
			return
		}

		throw createError({
			statusCode: 503,
			statusMessage: 'Enquiry delivery is not configured',
		})
	}

	const subject = singleLine(enquiry.subject) || 'General enquiry'

	try {
		await $fetch(resendEndpoint, {
			body: {
				from: enquiryFrom,
				reply_to: enquiry.email,
				subject: `Enquiry: ${subject} (${singleLine(enquiry.name)})`,
				text: formatEnquiry(enquiry),
				to: [enquiryTo],
			},
			headers: { Authorization: `Bearer ${resendApiKey}` },
			method: 'POST',
		})
	} catch {
		throw createError({
			statusCode: 502,
			statusMessage: 'The enquiry could not be sent',
		})
	}
}
