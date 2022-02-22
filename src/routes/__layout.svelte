<!--<script context="module">-->

<!--    export async function load ({ session}) {-->
<!--        // const authStore = localStore('auth', {});-->
<!--        // const authData = await get(authStore);-->
<!--        //-->
<!--        // console.log(authData);-->
<!--        return {}-->
<!--    }-->
<!--</script>-->

<script>
    import * as auth from '@stores/auth';
    import { goto } from '$app/navigation';
    import Navbar from "$lib/Navbar.svelte";
    import "../app.postcss";
    import { onMount } from "svelte";

    onMount(async () => {
        const authData = await auth.data();

        if (!authData.user) {
            goto('auth/login');
        }
    });
</script>

<div class="flex h-screen bg-gray-200 font-roboto">
    <div class="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div class="container mx-auto px-6 py-8">
                <slot></slot>
            </div>
        </main>
    </div>
</div>
