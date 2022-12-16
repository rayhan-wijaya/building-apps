import { z } from 'zod';
import registerResponse from 'schemas/registerResponse';

import { router, publicProcedure } from 'server/trpc/trpc';

import { type PrismaClient } from '@prisma/client';

const canRespond = async (prismaClient: PrismaClient) => {
	const activeResponsesCount = await prismaClient.registerResponse.count({
		where: {
			isActive: true,
		},
	});

	const maxResponses = 10;

	return activeResponsesCount < maxResponses;
}

export const registerFormRouter = router({
	respond: publicProcedure
		.input(
			z.object({
				answers: registerResponse,
			})
		)
		.mutation(async ({ input, ctx }) => {
			if (!canRespond(ctx.prisma)) {
				return;
			}

			await ctx.prisma.registerResponse.create({
				data: {
					...input.answers,
					isActive: true,
				}
			});
		}),
	canRespond: publicProcedure
		.query(async ({ ctx }) => {
			return canRespond(ctx.prisma);
		}),
});
