import { z } from 'zod'

export const enquirySchema = z.object({
	company: z.string().trim().max(120, 'Please keep this under 120 characters.'),
	consent: z.literal(true, 'Please confirm that we may reply to you.'),
	country: z
		.string()
		.trim()
		.min(2, 'Please tell us where the order would ship to.')
		.max(80, 'Please keep this under 80 characters.'),
	email: z
		.string()
		.trim()
		.max(160, 'Please keep this under 160 characters.')
		.pipe(z.email('Please enter a valid email address.')),
	message: z
		.string()
		.trim()
		.min(10, 'Please tell us a little more about what you need.')
		.max(4000, 'Please keep your message under 4,000 characters.'),
	name: z
		.string()
		.trim()
		.min(2, 'Please enter your name.')
		.max(120, 'Please keep this under 120 characters.'),
	phone: z.string().trim().max(40, 'Please keep this under 40 characters.'),
	quantity: z.string().trim().max(80, 'Please keep this under 80 characters.'),
	startedAt: z.number().int().positive(),
	subject: z.string().trim().max(160, 'Please keep this under 160 characters.'),
	website: z.string().max(200),
})

export type EnquiryInput = z.input<typeof enquirySchema>
export type Enquiry = z.output<typeof enquirySchema>
export type EnquiryField = keyof EnquiryInput
