<script>
    import { goto } from "$app/navigation";

    import {transactions, saveTransactions, flushTransactions} from "@stores/transactions";
    import moment from 'moment';

    function save() {
      let saved = saveTransactions();

      if (saved) {
        flushTransactions();
        goto("/");
      }
    }
</script>

<div class="alert my-5">
  <div class="flex-1">
    <button class="btn btn-sm btn-accent" on:click={flushTransactions}>Yeniden Yükle</button>
  </div> 
  <div class="flex-none">
    <button class="btn btn-sm btn-secondary mr-2">İptal</button> 
    <button class="btn btn-sm btn-primary" on:click={save}>Kaydet</button>
  </div>
</div>

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
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktar</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each $transactions as item}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://s3-symbol-logo.tradingview.com/{item.slug}--big.svg" alt="{item.stock}">
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

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {#if item.duplicated}
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Mükerrer
                    </span>
                  {:else}
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yeni
                    </span>
                  {/if}

                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input type="checkbox" class="form-checkbox" bind:checked={item.import}>
                </td>
              </tr>
              {/each}
              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  