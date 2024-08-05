// use this file to declare types used in index.ts

type EnvMiddleWare = (request: Request, env: Env, next: () => Promise<Response>) => Promise<Response>;
