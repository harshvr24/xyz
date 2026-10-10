import { enquirySchema } from '#shared/schemas/enquiry'

const minimumFillTime = 3000

export default defineEventHandler(async (event) => {
	const result = await readValidatedBody(event, (body) =>
		enquirySchema.safeParse(body),
	)

	if (!result.success) {
		throw createError({
			data: {
				issues: result.error.issues.map((issue) => ({
					field: issue.path.join('.'),
					message: issue.message,
				})),
			},
			statusCode: 422,
			statusMessage: 'Invalid enquiry',
		})
	}

	const enquiry = result.data
	const filledByBot =
		enquiry.website !== '' ||
		Date.now() - enquiry.startedAt < minimumFillTime

	if (filledByBot) return { ok: true }

	const { enquiryFrom, enquiryTo, resendApiKey } = useRuntimeConfig(event)
	await sendEnquiryEmail({ enquiryFrom, enquiryTo, resendApiKey }, enquiry)

	return { ok: true }
})
