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

<div class="h-screen overflow-hidden flex">
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800 w-full">
        <Sidebar />

        <main class="main flex flex-col flex-grow">
            <Navbar />

            <div class="main-content flex flex-col flex-grow p-4">
                <slot></slot>
            </div>
        </main>
  </div>
</div>