<script>
	import { postTransactions, transactions } from "@stores/transactions"
	import TradingTable from "$lib/TradingTable.svelte";

	let files = [];
	let fileUploading = false;

	$: fileSelected = (files.length > 0) && (!fileUploading);
</script>

{#if $transactions.length == 0}
	<div class="flex justify-center mt-8">
		<div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
			<div class="m-4">
				<span class="inline-block mb-2 text-gray-500">File Upload: {fileSelected}</span>

				<div class="flex items-center justify-center w-full">
					<label 
						class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300"
					>
							<div class="flex flex-col items-center justify-center pt-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
									/>
								</svg>
								<p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
									Dosya seçin ya da buraya sürükleyin..
								</p>
							</div>
						<input type="file" class="opacity-0" bind:files/>
					</label>
				</div>
			</div>

			<div class="flex justify-center p-2">
				<button class="w-full btn btn-primary" disabled={!fileSelected} on:click={postTransactions(files[0])}
					>Yükle</button
				>
			</div>
		</div>
	</div>
{:else}
	<TradingTable />
{/if}


