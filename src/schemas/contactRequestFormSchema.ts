import { z } from 'zod';

export const contactRequestFormSchema = z.object({
  email: z.string().min(1)
    .email(),
  name: z.string().min(1),
  message: z.string(),
});

export type ContactRequestFormSchema = z.infer<typeof contactRequestFormSchema>;
