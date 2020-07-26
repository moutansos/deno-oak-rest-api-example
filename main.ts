import "https://deno.land/x/dotenv/load.ts";
import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";

import { routes } from "./routes/routes.ts";

const PORT_NUMBER_ENVIRONMENT_VARIABLE_NAME = "PORT_NUMBER";
const portString: string | undefined = Deno.env.get(
  PORT_NUMBER_ENVIRONMENT_VARIABLE_NAME
);
if (portString === undefined) {
  console.error(
    `Unable to start server as the ${PORT_NUMBER_ENVIRONMENT_VARIABLE_NAME} environment variable isn't set`
  );
  Deno.exit(255);
}

const port: number = parseInt(portString);

const app = new Application();

for (const router of routes) {
  app.use(router.allowedMethods());
  app.use(router.routes());
}

app.addEventListener("listen", () => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port });
