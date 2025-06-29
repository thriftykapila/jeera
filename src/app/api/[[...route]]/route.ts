import { Hono } from "hono"
import { handle } from "hono/vercel"

const app = new Hono().basePath("/api")

app.get("/hello", (c) => c.json({ message: "Hello World" }))

export const GET = handle(app)