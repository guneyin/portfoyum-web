<script>
	import { Icon, Home, DocumentDuplicate } from "svelte-hero-icons";

	let links = [
		{href: "/", caption: "Panel", icon: Home},
		{href: "/transactions", caption: "İşlem Hareketleri", icon: DocumentDuplicate},
	];
</script>

<aside class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-secondary-content">
	<div class="sidebar-header flex items-center justify-center py-4">
		<div class="inline-flex">
			<a href="#" class="inline-flex flex-row items-center">
			<svg class="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
				<path
				fill-rule="evenodd"
				d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
				clip-rule="evenodd"
				/>
			</svg>
			<span class="leading-10 text-gray-100 text-2xl font-bold ml-1">Portföyüm</span>
			</a>
		</div>
	</div>

	<div class="sidebar-content px-4 py-6">

		<ul class="menu bg-base-100 w-56 p-2 rounded-box">
			{#each links as link}
			<li>
				<a href="{link.href}"><Icon src={link.icon} size="24" /><span class="ml-3">{link.caption}</span></a>
			</li>
			{/each}
		</ul>		

	</div>
</aside>