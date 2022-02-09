import {localStore} from "@stores/localStore";
import {get} from 'svelte/store';

const authStore = localStore('auth', {});

export const data = async () => await get(authStore);

export async function set(data) {
    return await authStore.set(data);
}

// export async function grab() {
//     return await get(auth);
// }

export async function flush() {
    return await auth.set({})
}
