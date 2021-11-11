import { localStore } from "@stores/localStore";

export const stats = localStore('stats', {});

export const getStats = async () => {
    const url = `http://127.0.0.1:3001/api/stats`;
    const res = await fetch(url);
    const data = await res.json();

    stats.set(data);
};