<script>
    import { onMount } from "svelte";
    import moment from 'moment';

    let transactions = []

    onMount(async () => {
        const url = `http://127.0.0.1:3001/api/v1/transactions/list`;
        const response = await fetch(url);

        transactions = await response.json();
    })
</script>

<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sembol</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem Tarihi</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Miktar</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hisse Fiyatı</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutar</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem Tipi</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each transactions as item}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://s3-symbol-logo.tradingview.com/{item.Symbol.slug}--big.svg" alt="{item.Symbol.name}">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {item.stock}
                      </div>
                      <div class="text-sm text-gray-500">
                        {item.stock}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{moment(item.date).format("DD.MM.YYYY")}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.quantity}
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.stock_price.toFixed(2)}
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.price.toFixed(2)}
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.type}
                </td>
              </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
