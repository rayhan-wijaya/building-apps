import { type inferAsyncReturnType } from "@trpc/server";

import { prisma } from "../db/client";

/**
 * Replace this with an object if you want to pass things to createContextInner
 */

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async () => {
  return {
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async () => {
  return await createContextInner();
};

export type Context = inferAsyncReturnType<typeof createContext>;
