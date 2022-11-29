import { router } from "../trpc";

import { registerFormRouter } from './registerForm.router';

export const appRouter = router({
	registerForm: registerFormRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
