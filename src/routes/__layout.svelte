<script context="module">
    // export async function load({ session }) {
    //     if (!session.authenticated) {
    //         console.log('you shall not pass');
    //     }
    //
    //     return !session.authenticated
    //         ? { redirect: 'auth/login', status: 302 }
    //         : {};
    //
    //     return {}
    // }
</script>


<script>
    import * as auth from '@stores/auth';
    import { goto } from '$app/navigation';
    import Sidebar from "$lib/Sidebar.svelte";
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
    <Sidebar />
    
    <div class="flex-1 flex flex-col overflow-hidden">
    
        <Navbar />
        
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div class="container mx-auto px-6 py-8">
                <slot></slot> 
            </div>
        </main>
    </div>        
</div>    
