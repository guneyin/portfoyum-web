import { services } from "@api/variables";
import { get } from "@api";

export async function grab() {
    const res = await get(services.portfolio.default);
    const data = await res.json();

    if (!data.items) {
        data.items = []
    }

    return data;
};