import { Context } from "@kyiro/hono";
import {getRegister, createRegister} from "./db.ts";
import {getAllVideos} from "./utils.ts";

export const newVideo = async (ctx: Context) => {
    const channelId = Deno.env.get('CHANNEL_ID') || "";
    const register = await getRegister(channelId);
    if (register !== null) {
        return ctx.json({ newVideo: register});
    }

    const lastVideoId = Deno.env.get('LAST_VIDEO_ID') || "";
    const videos = await getAllVideos(channelId);
    const lastVideo = videos.contents[0];
    const newVideo = lastVideo.video.videoId !== lastVideoId;

    await createRegister(channelId, newVideo);

  return ctx.json({newVideo})
}