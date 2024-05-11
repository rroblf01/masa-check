const kv = await Deno.openKv();

export const createRegister = async (key: string, value: boolean, minutesToExpire: number = 5) => {
    const expireInMiliSeconds = minutesToExpire * 60 * 1000;
    await kv.set([key], value, {expireIn: expireInMiliSeconds});
}

export const getRegister = async (key: string) => {
    const register = await kv.get([key]);
    return register.value;
}