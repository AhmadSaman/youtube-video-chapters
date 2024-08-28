import { Hono } from "hono";
import { videoRoute } from "./routes/video";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ msg: "home page" });
});

app.route("video", videoRoute);

export default app;
