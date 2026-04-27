<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const budgetChartRef = ref(null)

const getChartColors = () => {
  const isLight = document.documentElement.classList.contains('light')
  return {
    text: isLight ? '#005a7a' : '#6b9ab0',
    grid: isLight ? 'rgba(0,90,122,0.1)' : 'rgba(0,168,224,0.15)',
    textPrimary: isLight ? '#003A5C' : '#e8f4f8'
  }
}

onMounted(() => {
  // Empty onMounted since the budget chart was removed
})
</script>

<template>
  <section id="sistem" class="tab-content active">
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2" style="color: var(--text-primary);">
        <i class="fas fa-server mr-2" style="color: var(--accent-1);"></i>
        Sistem & Data
      </h2>
      <p class="text-base" style="color: var(--text-secondary);">Integrasi e-SEA, OSS, SPBE, rekonsiliasi data, dan infrastruktur IT</p>
    </div>
    
    <!-- System Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
      <div class="ocean-card p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #003A5C, #00A8E0);">
            <i class="fas fa-globe text-white text-xl"></i>
          </div>
          <div>
            <h3 class="font-bold" style="color: var(--text-primary);">e-SEA</h3>
            <p class="text-xs" style="color: var(--text-muted);">Electronic System</p>
          </div>
        </div>
        <ul class="space-y-2 text-sm" style="color: var(--text-secondary);">
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Pendaftaran non-berusaha</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Menu pemutakhiran data</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Notifikasi & Early Warning</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> AI Document Base Engine</li>
        </ul>
        <div class="mt-4 pt-3" style="border-top: 1px solid var(--border-color);">
          <span class="badge badge-success text-xs"><i class="fas fa-circle text-[8px]"></i> Operational</span>
        </div>
      </div>
      
      <div class="ocean-card p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #00A8E0, #00B4A0);">
            <i class="fas fa-handshake text-white text-xl"></i>
          </div>
          <div>
            <h3 class="font-bold" style="color: var(--text-primary);">OSS</h3>
            <p class="text-xs" style="color: var(--text-muted);">Online Single Submission</p>
          </div>
        </div>
        <ul class="space-y-2 text-sm" style="color: var(--text-secondary);">
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Integrasi penuh e-SEA</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Penambahan KBLI otomatis</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Bridging verifikasi dokumen</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Penagihan PNBP terintegrasi</li>
        </ul>
        <div class="mt-4 pt-3" style="border-top: 1px solid var(--border-color);">
          <span class="badge badge-success text-xs"><i class="fas fa-circle text-[8px]"></i> Integrated</span>
        </div>
      </div>
      
      <div class="ocean-card p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #00B4A0, #003A5C);">
            <i class="fas fa-shield-halved text-white text-xl"></i>
          </div>
          <div>
            <h3 class="font-bold" style="color: var(--text-primary);">SPBE</h3>
            <p class="text-xs" style="color: var(--text-muted);">Sistem Pemerintah Berbasis Elektronik</p>
          </div>
        </div>
        <ul class="space-y-2 text-sm" style="color: var(--text-secondary);">
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Layanan publik digital</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Simulasi verifikasi AI</li>
          <li class="flex items-start gap-2"><i class="fas fa-check text-xs mt-1" style="color: var(--accent-2);"></i> Clearance pengadaan server</li>
          <li class="flex items-start gap-2"><i class="fas fa-clock text-xs mt-1" style="color: var(--warning);"></i> Proses BMN e-SEA</li>
        </ul>
        <div class="mt-4 pt-3" style="border-top: 1px solid var(--border-color);">
          <span class="badge badge-warning text-xs"><i class="fas fa-circle text-[8px]"></i> In Progress</span>
        </div>
      </div>
    </div>
    
    <!-- Budget Detail -->
    <div class="ocean-card p-6 mb-6 print-breakable">
      <h3 class="text-lg font-bold mb-4" style="color: var(--text-primary);">Anggaran & Realisasi 2025</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm font-medium" style="color: var(--text-secondary);">Pagu Awal</span>
              <span class="text-sm font-bold metric-value whitespace-nowrap" style="color: var(--text-primary);">Rp 18,33 <span class="font-normal opacity-80">M</span></span>
            </div>
            <div class="w-full h-2 rounded-full mt-2" style="background: var(--bg-primary);">
              <div class="h-full rounded-full" style="width: 100%; background: linear-gradient(90deg, var(--accent-3), var(--accent-1));"></div>
            </div>
          </div>
          <div class="p-4 rounded-xl flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm font-medium" style="color: var(--text-secondary);">Pagu Revisi (Efektif)</span>
              <span class="text-sm font-bold metric-value whitespace-nowrap" style="color: var(--text-primary);">Rp 12,88 <span class="font-normal opacity-80">M</span></span>
            </div>
            <div class="w-full h-2 rounded-full mt-2" style="background: var(--bg-primary);">
              <div class="h-full rounded-full" style="width: 70%; background: linear-gradient(90deg, var(--accent-1), var(--accent-2));"></div>
            </div>
          </div>
          <div class="p-4 rounded-xl flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm font-medium" style="color: var(--text-secondary);">Blokir Anggaran</span>
              <span class="text-sm font-bold metric-value whitespace-nowrap" style="color: var(--danger);">Rp 2,25 <span class="font-normal opacity-80">M</span></span>
            </div>
            <div class="w-full h-2 rounded-full mt-2" style="background: var(--bg-primary);">
              <div class="h-full rounded-full" style="width: 17%; background: var(--danger); opacity: 0.7;"></div>
            </div>
          </div>
          <div class="p-4 rounded-xl flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm font-medium" style="color: var(--text-secondary);">Realisasi (SAKTI)</span>
              <span class="text-sm font-bold metric-value whitespace-nowrap" style="color: var(--accent-2);">Rp 10,50 <span class="font-normal opacity-80">M</span></span>
            </div>
            <div class="w-full h-2 rounded-full mt-1.5" style="background: var(--bg-primary);">
              <div class="h-full rounded-full" style="width: 82%; background: linear-gradient(90deg, var(--accent-2), #00d4a0);"></div>
            </div>
            <p class="text-[10px] mt-1.5 leading-tight" style="color: var(--text-muted);">82,20% dari total pagu &middot; 99,74% dari pagu efektif</p>
          </div>
      </div>
    </div>
    
    <!-- Reconciliation -->
    <div class="ocean-card p-6">
      <h3 class="text-lg font-bold mb-4" style="color: var(--text-primary);">Rekonsiliasi Data 2025</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-database text-2xl mb-2" style="color: var(--accent-1);"></i>
          <p class="font-bold" style="color: var(--text-primary);">e-SEA &harr; Warehouse</p>
          <p class="text-xs mt-1" style="color: var(--text-muted);">Sinkronisasi data teknis &amp; penyesuaian format</p>
        </div>
        <div class="p-4 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-map-marked-alt text-2xl mb-2" style="color: var(--accent-1);"></i>
          <p class="font-bold" style="color: var(--text-primary);">Spasial e-Sea Map</p>
          <p class="text-xs mt-1" style="color: var(--text-muted);">158 izin dipetakan ulang &amp; 641 dokumen dilengkapi</p>
        </div>
        <div class="p-4 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-money-bill-wave text-2xl mb-2" style="color: var(--accent-2);"></i>
          <p class="font-bold" style="color: var(--text-primary);">PNBP PKKPRL</p>
          <p class="text-xs mt-1" style="color: var(--text-muted);">Rekonsiliasi bulanan &amp; monitoring realisasi target</p>
        </div>
      </div>
    </div>
  </section>
</template>
