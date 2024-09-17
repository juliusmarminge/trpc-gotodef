import { createCaller } from "trpc";

const caller = createCaller({});

// CMD+Click `post` or `byId` here
// - without `d.ts` file this goes to the right place
// - with `d.ts` file (after running build) this goes to the wrong place
const post = await caller.post.byId()
//    ^?