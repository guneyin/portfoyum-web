<script>
  import { onMount } from 'svelte';
  import { stats, getStats } from '@stores/stats';

  onMount(async () => {
    await getStats();
  });
</script>

<div class="w-full shadow stats">
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
        </svg>
      </div> 
      <div class="stat-title">Toplam Portföy</div> 
      <div class="stat-value">{ new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format($stats.totalPrice) }</div> 
      <div class="stat-desc">{ new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format($stats.totalBuy) }</div>
    </div> 
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">                
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>          
        </svg>
      </div> 
      <div class="stat-title">Kazanç</div> 
      <div class="stat-value">{ new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format($stats.gainByPrice) }</div> 
      <div class="stat-desc text-success">↗︎ { new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format($stats.gainByPercent) }%</div>
    </div> 
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">                 
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>         
        </svg>
      </div> 
      <div class="stat-title">Hisse Adedi</div> 
      <div class="stat-value">{ new Intl.NumberFormat().format($stats.totalQty) }</div> 
      <div class="stat-desc text-error">↘︎ 90 (14%)</div>
    </div>
  </div>