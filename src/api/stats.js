import { services } from "@api/variables";
import { get } from "@api";

export async function grab() {
    const res = await get(services.stats.default);

    return await res.json();
};