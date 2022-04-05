<script>
    import { onMount } from "svelte";
    import * as api from '@api';

    let portfolio = []

    onMount(async () => {
      const data = await api.portfolio.grab();

      portfolio = data.items;
    })
</script>

<div class="flex flex-col my-4">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sembol</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Miktar</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutar</th> 
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each portfolio as item, i}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{i+1}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://s3-symbol-logo.tradingview.com/{item.symbol.slug}--big.svg" alt="{item.symbol.name}">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {item.symbol.code}
                      </div>
                      <div class="text-sm text-gray-500">
                        {item.symbol.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{item.quantity}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    { new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(item.price) }
                </td>
              </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
