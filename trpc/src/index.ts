import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  post: {
    byId: t.procedure.query(() => {
      return {
        id: "1",
        title: 'Foo bar'
      }
    })
  },
});

export const createCaller = t.createCallerFactory(appRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
