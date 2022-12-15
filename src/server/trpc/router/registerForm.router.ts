import { z } from 'zod';
import registerResponse from 'schemas/registerResponse';

import { router, publicProcedure } from 'server/trpc/trpc';


export const registerFormRouter = router({
	respond: publicProcedure
		.input(
			z.object({
				answers: registerResponse,
			})
		)
		.mutation(async ({ input, ctx }) => {
			await ctx.prisma.registerResponse.create({
				data: input.answers,
			});
		}),
});
