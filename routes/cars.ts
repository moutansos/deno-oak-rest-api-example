import { Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";

const router = new Router();

const resourceName = "cars";

router.get(`/${resourceName}`, (ctx) => {
  ctx.response.body = [
    {
      make: "Land Rover",
      model: "Range Rover Sport",
      trim: "HSE",
      color: "black",
    },
  ];
});

export { router as cars };
