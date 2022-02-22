import jwt_decode from "jwt-decode";
import * as cookie from "cookie";
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

        // console.log('set-cookie');
        //
        const header = {
            'Set-Cookie': cookie.serialize('session_id', decoded.id, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'strict',
                path: '/'
            })
        };

        return {
            status: 200,
            headers: header,
            body: authObj,
        }
    } else {
        return {
            status: 401,
        }
    }
}