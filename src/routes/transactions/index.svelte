<script>
    import { onMount } from "svelte";
    import moment from 'moment';
    import { transactions } from '@api';
    import { postTransactions } from "@stores/transactions"
    import { goto } from "$app/navigation";

    let data = [];
    let fileinput;

    onMount(async () => {
        data = await transactions.grab();
    });

    const onFileSelected = async (e) =>{
      let file = e.target.files[0];

      await postTransactions(file);
      goto("transactions/import");
    };
</script>

<div class="alert my-5">
  <div class="flex-1">
    <button class="btn btn-sm btn-accent" on:click={()=>{fileinput.click();}}>Dosyadan Yükle</button>
    <input style="display:none" type="file" accept=".csv, .jpeg" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
  </div> 
</div>

<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sembol</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem Tarihi</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Miktar</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hisse Fiyatı</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutar</th> 
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem Tipi</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Karşılaştır: USD</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each data as item, i}
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
                  <div class="text-sm text-gray-900">{moment(item.date).format("DD.MM.YYYY")}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.quantity}
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  { new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(item.stock_price) }
              
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  { new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(item.price) }
          
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.type}
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  { new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'USD' }).format(0) }
           
                </td>
              </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
