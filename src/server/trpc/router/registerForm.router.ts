import { z } from 'zod';

import { router, publicProcedure } from 'server/trpc/trpc';

import { prisma } from 'server/db/client';

export const registerFormRouter = router({
	respond: publicProcedure
		.input(
			z.object({
				answers: z.object({
					fullName: z.string(),
					nickname: z.string(),
					email: z.string(),
					phoneNumber: z.string(),
				}),
			})
		)
		.mutation(async ({ input }) => {
			await prisma.registerResponse.create({
				data: input.answers,
			});
		}),
});
