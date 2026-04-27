<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const projectionChartRef = ref(null)

const getChartColors = () => {
  const isLight = document.documentElement.classList.contains('light')
  return {
    text: isLight ? '#005a7a' : '#6b9ab0',
    grid: isLight ? 'rgba(0,90,122,0.1)' : 'rgba(0,168,224,0.15)',
    textPrimary: isLight ? '#003A5C' : '#e8f4f8'
  }
}

onMounted(() => {
  const c = getChartColors()
  if (projectionChartRef.value) {
    new Chart(projectionChartRef.value, {
      type: 'line',
      data: {
        labels: ['2025 (Aktual)', '2026 Q1', '2026 Q2', '2026 Q3', '2026 Q4 (Target)'],
        datasets: [{
          label: 'Permohonan Masuk',
          data: [3647, 1200, 2500, 3800, 4500],
          borderColor: '#00A8E0',
          backgroundColor: 'rgba(0, 168, 224, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2
        }, {
          label: 'KKPRL Terbit',
          data: [825, 280, 580, 820, 1000],
          borderColor: '#00B4A0',
          backgroundColor: 'rgba(0, 180, 160, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { grid: { color: c.grid }, ticks: { color: c.text } },
          y: { grid: { color: c.grid }, ticks: { color: c.text }, beginAtZero: true }
        },
        plugins: {
          legend: { labels: { color: c.textPrimary } }
        }
      }
    })
  }
})
</script>

<template>
  <section id="kesimpulan" class="tab-content active">

    
    <!-- Score Summary -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div class="ocean-card p-6 text-center">
        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 flex items-center justify-center shadow-md" style="background: linear-gradient(135deg, #003A5C, #00A8E0);">
          <span class="text-xl sm:text-2xl font-bold text-white metric-value">107,4</span>
        </div>
        <p class="font-bold text-lg" style="color: var(--text-primary);">Nilai Capaian Kinerja</p>
        <p class="text-sm" style="color: var(--accent-2);">Kriteria <strong>BAIK</strong></p>
        <p class="text-xs mt-2" style="color: var(--text-muted);">Dari 7 IKU, semua tercapai & melampaui target</p>
      </div>
      <div class="ocean-card p-6 text-center">
        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 flex items-center justify-center shadow-md" style="background: linear-gradient(135deg, #00A8E0, #00B4A0);">
          <span class="text-xl sm:text-2xl font-bold text-white metric-value">99,74%</span>
        </div>
        <p class="font-bold text-lg" style="color: var(--text-primary);">Realisasi Anggaran</p>
        <p class="text-sm" style="color: var(--accent-2);">Efisiensi <strong>OPTIMAL</strong></p>
        <p class="text-xs mt-2" style="color: var(--text-muted);">Rp 10,5 M dari pagu efektif Rp 10,6 M</p>
      </div>
      <div class="ocean-card p-6 text-center">
        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 flex items-center justify-center shadow-md" style="background: linear-gradient(135deg, #00B4A0, #003A5C);">
          <span class="text-xl sm:text-2xl font-bold text-white metric-value">BB</span>
        </div>
        <p class="font-bold text-lg" style="color: var(--text-primary);">Predikat SAKIP</p>
        <p class="text-sm" style="color: var(--accent-2);"><strong>Sangat Baik</strong> (73/100)</p>
        <p class="text-xs mt-2" style="color: var(--text-muted);">Peringkat #1 di antara 6 unit Eselon II DJPRL</p>
      </div>
    </div>
    
    <!-- Conclusions -->
    <div class="ocean-card p-6 sm:p-8 mb-6 print-breakable">
      <h3 class="text-xl font-bold mb-5 flex items-center gap-2" style="color: var(--text-primary);">
        <i class="fas fa-check-double" style="color: var(--accent-2);"></i>
        Kesimpulan Utama
      </h3>
      <div class="space-y-4">
        <div class="flex gap-4 p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: rgba(0, 180, 160, 0.1);">
            <i class="fas fa-check text-sm" style="color: var(--accent-2);"></i>
          </div>
          <div>
            <p class="font-semibold mb-1" style="color: var(--text-primary);">Pencapaian Target IKU Optimal</p>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Seluruh 7 Indikator Kinerja Utama dalam Perjanjian Kinerja 2025 tercapai dan melampaui target, dengan capaian tertinggi pada Persentase Penyelenggaraan KKPRL (137,5%) dan Persentase Rekomendasi Pengawasan (115%).</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: rgba(0, 180, 160, 0.1);">
            <i class="fas fa-check text-sm" style="color: var(--accent-2);"></i>
          </div>
          <div>
            <p class="font-semibold mb-1" style="color: var(--text-primary);">Pelayanan Perizinan Berkualitas</p>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Penerbitan 825 KKPRL dari 3.647 permohonan yang masuk, dengan inovasi layanan digital e-SEA terintegrasi OSS, dan penghargaan Zona Hijau Ombudsman RI untuk layanan publik.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: rgba(0, 180, 160, 0.1);">
            <i class="fas fa-check text-sm" style="color: var(--accent-2);"></i>
          </div>
          <div>
            <p class="font-semibold mb-1" style="color: var(--text-primary);">Pengelolaan Anggaran Efisien</p>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Realisasi anggaran 99,74% dari pagu efektif dengan tingkat efisiensi 104,97% menunjukkan prinsip <em>value for money</em> tercapai di tengah dinamika efisiensi anggaran dan blokir Rp 2,24 M.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: rgba(240, 165, 0, 0.1);">
            <i class="fas fa-exclamation-triangle text-sm" style="color: var(--warning);"></i>
          </div>
          <div>
            <p class="font-semibold mb-1" style="color: var(--text-primary);">Kendala yang Perlu Perhatian</p>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Keterbatasan SDM mempengaruhi beban kerja verifikasi dan penilaian; mekanisme penganggaran 1 DIPA dengan Ditjen PK membatasi fleksibilitas; serta 2 rekomendasi pengawasan Itjen masih perlu ditindaklanjuti penuh.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Recommendations 2026 -->
    <div class="ocean-card p-6 sm:p-8 mb-6 print-breakable">
      <h3 class="text-xl font-bold mb-5 flex items-center gap-2" style="color: var(--text-primary);">
        <i class="fas fa-lightbulb" style="color: var(--accent-1);"></i>
        Rekomendasi Strategis Tahun 2026
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="p-5 rounded-xl" style="background: linear-gradient(135deg, rgba(0,58,92,0.3), rgba(0,168,224,0.05)); border: 1px solid var(--border-color);">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 168, 224, 0.1);">
              <i class="fas fa-users" style="color: var(--accent-1);"></i>
            </div>
            <div>
              <span class="text-xs font-bold px-2 py-0.5 rounded" style="background: var(--accent-1); color: white;">PRIORITAS 1</span>
              <h4 class="font-bold mt-1" style="color: var(--text-primary);">Peningkatan SDM</h4>
            </div>
          </div>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Penambahan jumlah personil untuk verifikasi administrasi dan penilaian teknis permohonan KKPRL. Optimalisasi pelibatan UPT di berbagai provinsi untuk verifikasi lapangan.</p>
          <div class="mt-3 flex gap-2">
            <span class="text-xs px-2 py-1 rounded" style="background: var(--bg-primary); color: var(--text-muted);">+3 personil TA 2025</span>
            <span class="text-xs px-2 py-1 rounded" style="background: var(--bg-primary); color: var(--text-muted);">Target: +5-7 TA 2026</span>
          </div>
        </div>
        
        <div class="p-5 rounded-xl" style="background: linear-gradient(135deg, rgba(0,58,92,0.3), rgba(0,168,224,0.05)); border: 1px solid var(--border-color);">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 168, 224, 0.1);">
              <i class="fas fa-file-invoice-dollar" style="color: var(--accent-1);"></i>
            </div>
            <div>
              <span class="text-xs font-bold px-2 py-0.5 rounded" style="background: var(--accent-1); color: white;">PRIORITAS 2</span>
              <h4 class="font-bold mt-1" style="color: var(--text-primary);">Pemisahan DIPA</h4>
            </div>
          </div>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Ditjen PRL telah memisah DIPA dengan Ditjen PK untuk TA 2026, memberikan fleksibilitas pengelolaan anggaran dan optimalisasi alokasi sumber daya keuangan.</p>
          <div class="mt-3">
            <span class="badge badge-success text-xs"><i class="fas fa-check"></i> Sudah ditindaklanjuti</span>
          </div>
        </div>
        
        <div class="p-5 rounded-xl" style="background: linear-gradient(135deg, rgba(0,58,92,0.3), rgba(0,168,224,0.05)); border: 1px solid var(--border-color);">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 168, 224, 0.1);">
              <i class="fas fa-clipboard-check" style="color: var(--accent-1);"></i>
            </div>
            <div>
              <span class="text-xs font-bold px-2 py-0.5 rounded" style="background: var(--accent-1); color: white;">PRIORITAS 3</span>
              <h4 class="font-bold mt-1" style="color: var(--text-primary);">Tindak Lanjut Itjen</h4>
            </div>
          </div>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Penyelesaian 2 sisa rekomendasi pengawasan Itjen: pemenuhan dokumen monitoring evaluasi SOP (triwulanan) dan draft revisi Permen KP 28/2021.</p>
          <div class="mt-3">
            <span class="text-xs px-2 py-1 rounded" style="background: var(--bg-primary); color: var(--text-muted);">Target: Q1 2026</span>
          </div>
        </div>
        
        <div class="p-5 rounded-xl" style="background: linear-gradient(135deg, rgba(0,58,92,0.3), rgba(0,180,160,0.05)); border: 1px solid var(--border-color);">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: rgba(0, 180, 160, 0.1);">
              <i class="fas fa-microchip" style="color: var(--accent-2);"></i>
            </div>
            <div>
              <span class="text-xs font-bold px-2 py-0.5 rounded" style="background: var(--accent-2); color: white;">INOVASI</span>
              <h4 class="font-bold mt-1" style="color: var(--text-primary);">e-SEA + AI Spatial</h4>
            </div>
          </div>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">Pengembangan modul AI Document Engine, modul perencanaan dengan peta interaktif (RZWP3K, RTRL), modul pengendalian, dan fitur Early Warning System & Spatial Conflict Detection.</p>
          <div class="mt-3 flex gap-2">
            <span class="text-xs px-2 py-1 rounded" style="background: var(--bg-primary); color: var(--text-muted);">AI Document</span>
            <span class="text-xs px-2 py-1 rounded" style="background: var(--bg-primary); color: var(--text-muted);">Spatial Analysis</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 2026 Targets Projection -->
    <div class="ocean-card p-6 sm:p-8 print-breakable">
      <h3 class="text-xl font-bold mb-5 flex items-center gap-2" style="color: var(--text-primary);">
        <i class="fas fa-rocket" style="color: var(--accent-1);"></i>
        Target Ambisius 2026
      </h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div class="p-3 sm:p-4 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <p class="metric-value text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">4.500+</p>
          <p class="text-[10px] sm:text-xs mt-1 leading-tight" style="color: var(--text-muted);">Permohonan Masuk</p>
        </div>
        <div class="p-3 sm:p-4 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <p class="metric-value text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">1.000+</p>
          <p class="text-[10px] sm:text-xs mt-1 leading-tight" style="color: var(--text-muted);">KKPRL Terbit</p>
        </div>
        <div class="p-3 sm:p-4 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <p class="metric-value text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">75</p>
          <p class="text-[10px] sm:text-xs mt-1 leading-tight" style="color: var(--text-muted);">Nilai SAKIP</p>
        </div>
        <div class="p-3 sm:p-4 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <p class="metric-value text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">Rp 750 <span class="text-sm sm:text-base">M</span></p>
          <p class="text-[10px] sm:text-xs mt-1 leading-tight" style="color: var(--text-muted);">PNBP Realisasi</p>
        </div>
      </div>
      
      <!-- Projection Chart -->
      <div class="max-w-3xl mx-auto">
        <canvas ref="projectionChartRef"></canvas>
      </div>
    </div>
  </section>
</template>
