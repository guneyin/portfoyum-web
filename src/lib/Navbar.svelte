<script>
    import { Icon, Bell, Logout } from "svelte-hero-icons";
    import { goto } from "$app/navigation";
    import { flush } from "@stores/auth";

    async function logout() {
        await flush();
        await goto("/auth/login");
    }
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
    <div class="px-2 mx-2 navbar-start">
    </div>

    <div class="hidden px-2 mx-2 navbar-center lg:flex w-2/5">
        <div class="form-control w-full">
            <input type="text" placeholder="Search" class="input input-ghost">
        </div>
    </div>

    <div class="navbar-end">
        <button class="btn btn-square">
            <Icon src="{Bell}" size="24" />
        </button>

        <button class="btn btn-square" on:click={logout}>
            <Icon src="{Logout}" size="24" />
        </button>
    </div>
</div>
