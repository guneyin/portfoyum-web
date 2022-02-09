import jwt_decode from "jwt-decode";
import { post, variables } from "@api";
import * as auth from "../stores/auth.js";

export async function login (data) {
    const req = await post(variables.services.auth.login, data);
    const res = await req.json();

    if (!!res.data.token) {
        const token = res.data.token;
        const decoded = jwt_decode(token);

        const authObj = {
            "access_token": token,
            "user": {
                "id": decoded.id,
                "email": decoded.email,
            }
        };

        await auth.set(authObj);
    }

    return req.status === 200;
}