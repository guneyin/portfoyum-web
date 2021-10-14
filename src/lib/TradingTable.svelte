<script>
    import {transactions} from "@stores/transactions";
    import moment from 'moment';
import { detach_dev } from "svelte/internal";
</script>

{#if $transactions.length > 0}
    <div class="overflow-x-auto">
        <table class="table w-full table-compact">
        <thead>
            <tr>
            <th>Sembol</th> 
            <th>İşlem Tarihi</th> 
            <th>Miktar</th> 
            <th>Hisse Fiyatı</th> 
            <th>Tutar</th> 
            <th>İşlem Tipi</th>
            </tr>
        </thead> 
        <tbody>
            {#each $transactions as item}
            <tr>
            <th>{item.stock}</th> 
            <td>{moment(item.date).format("DD.MM.YYYY")}</td> 
            <td>{item.quantity}</td> 
            <td>{item.stock_price.toFixed(2)}</td> 
            <td>{item.price.toFixed(2)}</td> 
            <td>{item.type}</td> 
            </tr>
            {/each}
        </tbody> 
        </table>
    </div>
{/if}


  