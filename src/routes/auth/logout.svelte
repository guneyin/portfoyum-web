<script context="module">
    import Cookies from 'js-cookie';

    export async function load({ session }) {
        await Cookies.remove('auth_user');
        await Cookies.remove('auth_token');

        session.authenticated = false;

        return {
            status: 302,
            redirect: "/auth/login",
        };
    }
</script>