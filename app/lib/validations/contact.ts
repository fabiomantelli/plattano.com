import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().optional(),
  interest: z.enum([
    'data-protection',
    'cybersecurity',
    'storage',
    'managed-services',
    'other',
  ]),
  message: z.string().max(500, 'Message must be less than 500 characters').optional(),
  acceptPrivacy: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
