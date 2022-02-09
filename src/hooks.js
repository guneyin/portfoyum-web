import * as auth from '@stores/auth';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
    const response = await resolve(request);
    let authData = await auth.data();

    console.log(authData);
  // if (cookies.token) {
  //   request.locals.token = cookies.token;
  //   request.locals.authenticated = true;
  //
  // }

  return response;
}


// /** @type {import('@sveltejs/kit').GetSession} */
// export function getSession(event) {
//   const auth = grab();
//
//   console.log(auth.user);
//
//   return {
//     authenticated: !!auth.user,
//     user: auth.user,
//     token: auth.access_token,
//   }
//
//   // return event.locals.user
//   //     ? {
//   //       user: {
//   //         // only include properties needed client-side —
//   //         // exclude anything else attached to the user
//   //         // like access tokens etc
//   //         name: event.locals.user.name,
//   //         email: event.locals.user.email,
//   //         avatar: event.locals.user.avatar
//   //       }
//   //     }
//   //     : {};
// }
