export const getAllVideos = async (channelId: string) => {
    const apiURL = Deno.env.get('API_URL') || "";
    const url = `${apiURL}?id=${channelId}&filter=videos_latest&hl=en&gl=US`;
    const headers = {
        'X-RapidAPI-Key': Deno.env.get('RAPID_API_KEY') || "",
        'X-RapidAPI-Host':Deno.env.get('RAPID_API_HOST') || "", 
    };

    const result = await fetch(url, { headers });

    return await result.json();
}