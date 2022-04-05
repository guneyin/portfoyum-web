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
    import Sidebar from '$lib/Sidebar.svelte';

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
        <Sidebar />

        <main>
            <!-- Content header -->
            <div class="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
              <h1 class="text-2xl font-semibold">Dashboard xx</h1>
              <a
                href="https://github.com/Kamona-WD/kwd-dashboard"
                target="_blank"
                class="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
              >
                View on github
              </a>
            </div>
            
            <div class="mt-2">
                <slot />
            </div>
        </main>     

        <!-- <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            
            <div class="container mx-auto px-6 py-8">
                <slot></slot>
            </div>
        </main> -->
    </div>
</div>
