import {localStore} from "@stores/localStore";
import {get} from 'svelte/store';

const authStore = localStore('auth', {});

export const data = async () => await get(authStore);

export async function set(d) {
    return await authStore.set(d);
}

// export async function grab() {
//     return await get(auth);
// }

export async function flush() {
    return await authStore.set({})
}
