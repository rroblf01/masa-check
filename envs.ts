import { load } from "@std/dotenv";

export const inyectEnv = async () => {
    const env = await load();
    for (const key in env) {
        Deno.env.set(key, env[key]);
    }
}