import { z } from 'zod';
import registerResponse from 'schemas/registerResponse';

import { router, publicProcedure } from 'server/trpc/trpc';

import { prisma } from 'server/db/client';

export const registerFormRouter = router({
	respond: publicProcedure
		.input(
			z.object({
				answers: registerResponse,
			})
		)
		.mutation(async ({ input }) => {
			await prisma.registerResponse.create({
				data: input.answers,
			});
		}),
});
