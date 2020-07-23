import { Application, Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";

import { routes } from "./routes/routes.ts";

const port = 8000;

const app = new Application();

for (const router of routes) {
  app.use(router.allowedMethods());
  app.use(router.routes());
}

app.addEventListener("listen", () => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port });
