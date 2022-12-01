import { z } from 'zod';

const registerResponse = z.object({
	fullName: z.string(),
	nickname: z.string(),
	gender: z.nullable(z.enum(['male', 'female'])),
	birthDate: z.nullable(z.date()),
	education: z.nullable(z.string()),
	job: z.nullable(z.string()),
	phoneNumber: z.string(),
	email: z.string(),
	address: z.nullable(z.string()),
});

export default registerResponse;
export type RegisterResponse = z.infer<typeof registerResponse>;
