import { z } from "zod";

export const subscriberSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive marketing emails",
  }),
  source: z.string(),
});

export type SubscriberFormData = z.infer<typeof subscriberSchema>;
