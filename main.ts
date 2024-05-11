import { Hono } from '@kyiro/hono';
import { serveStatic } from "@kyiro/hono/deno";
import { newVideo } from "./controllers.ts";
import { inyectEnv } from "./envs.ts";

await inyectEnv()

const app = new Hono()

app.get('/api/v1/newvideo', newVideo)
app.use('/*', serveStatic({ root: './client/' }))

const port = Number(Deno.env.get('PORT')) || 3000
Deno.serve({ port }, app.fetch)