<script setup>
import { ref, onMounted } from 'vue'
import { DASHBOARD_DATA, IKU_DATA } from '../constants'

const counterPermohonan = ref(0)
const counterKkprl = ref(0)
const counterAnggaran = ref(0)
const overallScore = ref(0)
const ringOffset = ref(440) // circumference

const animateValue = (refVar, end, duration, isPercent = false) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    if (isPercent) {
      refVar.value = (progress * end).toFixed(2)
    } else {
      refVar.value = Math.floor(progress * end)
    }
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  animateValue(counterPermohonan, DASHBOARD_DATA.totalPermohonan, 2000)
  animateValue(counterKkprl, DASHBOARD_DATA.kkprlTerbit, 2000)
  animateValue(counterAnggaran, DASHBOARD_DATA.realisasiAnggaran, 2000, true)
  animateValue(overallScore, DASHBOARD_DATA.nilaiCapaian, 2000)
  
  const circumference = 2 * Math.PI * 70
  ringOffset.value = circumference - (DASHBOARD_DATA.nilaiCapaian / 120) * circumference
})

const getIkuPercent = (iku) => Math.min((iku.capaian / iku.target) * 100, 100)
</script>

<template>
  <section id="overview" class="tab-content active">
    <!-- Hero Section -->
    <div class="hero-bg rounded-3xl p-6 sm:p-10 mb-8 animate-fade-in-up">
      <div class="relative z-10">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div class="flex-1">
            <div class="badge badge-info mb-4">
              <i class="fas fa-building-columns"></i>
              Direktorat Pemanfaatan Ruang Kolom Perairan dan Dasar Laut
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style="color: var(--text-primary);">
              Dashboard Kinerja <span class="gradient-text">Tahun 2025</span>
            </h2>
            <p class="text-base sm:text-lg leading-relaxed max-w-2xl" style="color: var(--text-secondary);">
              Pertanggungjawaban pelaksanaan Program dan Kegiatan Dit. PRKPDL dalam rangka pelayanan teknis dan administratif penyelenggaraan Kesesuaian Kegiatan Pemanfaatan Ruang Laut (KKPRL).
            </p>
            <div class="flex flex-wrap gap-3 mt-6">
              <div class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold" style="background: rgba(0, 168, 224, 0.1); color: var(--accent-1); border: 1px solid var(--border-color);">
                <i class="fas fa-user-tie"></i>
                Plt. Dir. Didit Eko Prasetiyo
              </div>
              <div class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold" style="background: rgba(0, 180, 160, 0.1); color: var(--accent-2); border: 1px solid var(--border-color);">
                <i class="fas fa-check-circle"></i>
                Status: Aktif & Optimal
              </div>
            </div>
          </div>
          
          <!-- Overall Score Ring -->
          <div class="flex flex-col items-center gap-3">
            <div class="relative w-40 h-40 sm:w-48 sm:h-48">
              <svg class="w-full h-full" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="var(--border-color)" stroke-width="10"/>
                <circle id="overallRing" class="progress-ring-circle" cx="80" cy="80" r="70" fill="none" stroke="url(#oceanGrad)" stroke-width="10" stroke-linecap="round" stroke-dasharray="440" :style="{ strokeDashoffset: ringOffset }"/>
                <defs>
                  <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00A8E0"/>
                    <stop offset="100%" stop-color="#00B4A0"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span id="overallScore" class="metric-value text-3xl sm:text-4xl gradient-text">{{ overallScore }}</span>
                <span class="text-xs sm:text-sm font-semibold mt-1" style="color: var(--text-muted);">Nilai Capaian</span>
                <span class="text-xs px-2 py-0.5 rounded-full mt-1 font-bold" style="background: rgba(0, 180, 160, 0.15); color: var(--accent-2);">BAIK</span>
              </div>
            </div>
            <p class="text-xs text-center" style="color: var(--text-muted);">kinerjaku.kkp.go.id</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Key Metrics Row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="ocean-card p-5 animate-fade-in-up delay-100">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 168, 224, 0.1);">
            <i class="fas fa-inbox text-lg" style="color: var(--accent-1);"></i>
          </div>
          <span class="badge badge-info text-xs"><i class="fas fa-arrow-up"></i> 100%</span>
        </div>
        <p class="text-sm font-medium mb-1" style="color: var(--text-muted);">Total Permohonan Masuk</p>
        <p class="metric-value text-2xl sm:text-3xl" style="color: var(--text-primary);">{{ counterPermohonan.toLocaleString('id-ID') }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">3.223 berusaha + 424 non-berusaha</p>
      </div>
      
      <div class="ocean-card p-5 animate-fade-in-up delay-200">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 180, 160, 0.1);">
            <i class="fas fa-stamp text-lg" style="color: var(--accent-2);"></i>
          </div>
          <span class="badge badge-success text-xs"><i class="fas fa-arrow-up"></i> 137,5%</span>
        </div>
        <p class="text-sm font-medium mb-1" style="color: var(--text-muted);">KKPRL Diterbitkan</p>
        <p class="metric-value text-2xl sm:text-3xl" style="color: var(--text-primary);">{{ counterKkprl.toLocaleString('id-ID') }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">746 berusaha + 79 non-berusaha</p>
      </div>
      
      <div class="ocean-card p-5 animate-fade-in-up delay-300">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 58, 92, 0.2);">
            <i class="fas fa-wallet text-lg" style="color: var(--accent-1);"></i>
          </div>
          <span class="badge badge-success text-xs"><i class="fas fa-check"></i> Optimal</span>
        </div>
        <p class="text-sm font-medium mb-1" style="color: var(--text-muted);">Realisasi Anggaran</p>
        <p class="metric-value text-2xl sm:text-3xl" style="color: var(--text-primary);">{{ counterAnggaran }}%</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Rp 10,5 M dari pagu efektif</p>
      </div>
      
      <div class="ocean-card p-5 animate-fade-in-up delay-400">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(240, 165, 0, 0.1);">
            <i class="fas fa-bullseye text-lg" style="color: var(--warning);"></i>
          </div>
          <span class="badge badge-success text-xs"><i class="fas fa-star"></i> 7/7</span>
        </div>
        <p class="text-sm font-medium mb-1" style="color: var(--text-muted);">IKU Tercapai</p>
        <p class="metric-value text-2xl sm:text-3xl" style="color: var(--text-primary);">7<span class="text-lg" style="color: var(--text-muted);">/7</span></p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Semua target terlampaui</p>
      </div>
    </div>
    
    <!-- 7 IKU Summary Cards -->
    <h3 class="text-xl font-bold mb-4 flex items-center gap-2" style="color: var(--text-primary);">
      <i class="fas fa-chart-bar" style="color: var(--accent-1);"></i>
      Ringkasan 7 Indikator Kinerja Utama
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      <div v-for="(iku, i) in IKU_DATA" :key="iku.id" 
           class="ocean-card p-4 animate-fade-in-up" 
           :style="{ animationDelay: (i + 1) * 0.1 + 's' }">
        <div class="flex items-start justify-between mb-3">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style="background: linear-gradient(135deg, #003A5C, #00A8E0); color: white;">
            {{ iku.id }}
          </div>
          <span :class="['badge', iku.capaian > iku.target ? 'badge-success' : 'badge-info', 'text-xs']">
            <i v-if="iku.capaian > iku.target" class="fas fa-arrow-up"></i> {{ iku.capaian }} <span v-if="iku.satuan && iku.satuan !== '%'" class="opacity-80">{{ iku.satuan }}</span><span v-else>{{ iku.satuan }}</span>
          </span>
        </div>
        <p class="text-xs font-semibold mb-1" style="color: var(--text-muted); line-height: 1.3;">{{ iku.nama }}</p>
        <div class="w-full h-2 rounded-full mt-2" style="background: var(--bg-primary);">
          <div class="h-full rounded-full transition-all duration-1000" 
               :style="{ width: getIkuPercent(iku) + '%', background: iku.capaian > iku.target ? 'linear-gradient(90deg, #00B4A0, #00d4a0)' : 'linear-gradient(90deg, #00A8E0, #00B4A0)' }"></div>
        </div>
        <p class="text-[10px] mt-1" style="color: var(--text-muted);">Target: {{ iku.target }} {{ iku.satuan }} | Capaian: {{ iku.kinerjaku }}%</p>
      </div>
    </div>
    
    <!-- Quick Stats Bar -->
    <div class="ocean-card p-6 animate-fade-in-up delay-500">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #003A5C, #00A8E0);">
            <i class="fas fa-fish text-white text-xl"></i>
          </div>
          <div>
            <p class="text-sm font-semibold" style="color: var(--text-secondary);">PNBP PKKPRL Realisasi s.d. Oktober 2025</p>
            <p class="metric-value text-xl" style="color: var(--text-primary);"><span class="whitespace-nowrap">Rp 622,95 <span class="font-normal opacity-80 text-sm">M</span></span> <span class="text-sm font-normal" style="color: var(--accent-2);">(124,59% dari target)</span></p>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="text-center">
            <p class="text-2xl font-bold metric-value" style="color: var(--accent-1);">577</p>
            <p class="text-xs" style="color: var(--text-muted);">Penilaian Teknis</p>
          </div>
          <div class="w-px h-10" style="background: var(--border-color);"></div>
          <div class="text-center">
            <p class="text-2xl font-bold metric-value" style="color: var(--accent-1);">177</p>
            <p class="text-xs" style="color: var(--text-muted);">Pemutakhiran Data</p>
          </div>
          <div class="w-px h-10" style="background: var(--border-color);"></div>
          <div class="text-center">
            <p class="text-2xl font-bold metric-value" style="color: var(--accent-2);">73</p>
            <p class="text-xs" style="color: var(--text-muted);">Nilai SAKIP (BB)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
