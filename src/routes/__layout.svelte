<script>
    import * as auth from '@stores/auth';
    import { goto } from '$app/navigation';
    import Navbar from "$lib/Navbar.svelte";
    import "../app.postcss";
    import { onMount } from "svelte";
    import Sidebar from '$lib/Sidebar.svelte';

    onMount(async () => {
        const authData = await auth.data();

        if (!authData.user) {
            goto('auth/login');
        }
    });
</script>

<Navbar />

<div class="flex overflow-hidden bg-gray-50 pt-16">
    <Sidebar />

    <div class="pt-6 px-4 h-full w-full relative lg:ml-64">
        <slot/>
    </div>
</div>
<!--<div class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">-->


<!--    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">-->


<!--        <slot></slot>-->
<!--    </div>-->
<!--</div>-->