import { localStore } from "@stores/localStore";
import * as api from '@api';

export const stats = localStore('stats', {});

export async function getStats() {
    const data = await api.stats.grab();

    stats.set(data);
};