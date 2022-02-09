import { get, upload, post, variables } from "@api";

export async function grab() {
    const res = await get(variables.services.transactions.default);

    return await res.json();
};

export async function uploadFile(file) {
    const res = await upload(variables.services.transactions.upload, file);

    return await res.json();
}

export async function save(data) {
    const res = await post(variables.services.transactions.save, data);

    return await res.json();
}