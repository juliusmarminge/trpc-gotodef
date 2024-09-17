# Steps to reproduce:

1. `pnpm install`
2. Test cmd+click on `post` or `byId` in `[$ROOT/index.ts](./index.ts)` - you'll go to the procedure location in [$ROOT/trpc/src/index.ts](./trpc/src/index.ts)
3. Emit declaration file for trpc package by running `pnpm build`
4. Try cmd+clicking again, you'll now go to the wrong location

## Demo

https://github.com/user-attachments/assets/c1b6a2a2-49c7-453c-9e6d-91c9f0c88356

