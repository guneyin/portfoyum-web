<script>
    import { Icon, Bell, Logout } from "svelte-hero-icons";
    import { goto } from "$app/navigation";
    import { flush } from "@stores/auth";

    async function logout() {
        await flush();
        await goto("/auth/login");
    }
</script>

<div class="navbar bg-secondary">
    <div class="flex-1">
        <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered">
          </div>
    </div>

    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <span tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="user avatar" src="https://api.lorem.space/image/face?hash=33791">
          </div>
        </span>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36">
          <li><a href="/user/me">Profile</a></li>
          <li><a href="/user/settings">Settings</a></li>
          <li><a href="/auth/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
