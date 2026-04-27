<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'
import { IKU_DATA } from '../constants'

const radarChartRef = ref(null)
const donutChartRef = ref(null)
const stackedBarChartRef = ref(null)

let radarChart, donutChart, stackedBarChart

const getChartColors = () => {
  const isLight = document.documentElement.classList.contains('light')
  return {
    text: isLight ? '#005a7a' : '#6b9ab0',
    grid: isLight ? 'rgba(0,90,122,0.1)' : 'rgba(0,168,224,0.15)',
    textPrimary: isLight ? '#003A5C' : '#e8f4f8'
  }
}

const initCharts = () => {
  const c = getChartColors()
  Chart.defaults.color = c.text
  Chart.defaults.borderColor = c.grid
  Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif"

  if (radarChartRef.value) {
    radarChart = new Chart(radarChartRef.value, {
      type: 'radar',
      data: {
        labels: IKU_DATA.map(i => 'IKU ' + i.id),
        datasets: [{
          label: 'Capaian (%)',
          data: IKU_DATA.map(i => Math.min(i.kinerjaku, 120)),
          backgroundColor: 'rgba(0, 168, 224, 0.15)',
          borderColor: '#00A8E0',
          pointBackgroundColor: '#00B4A0',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00B4A0',
          borderWidth: 2
        }, {
          label: 'Target (%)',
          data: IKU_DATA.map(() => 100),
          backgroundColor: 'rgba(0, 180, 160, 0.05)',
          borderColor: 'rgba(0, 180, 160, 0.4)',
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          borderWidth: 1,
          borderDash: [5, 5]
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 125,
            grid: { color: c.grid },
            angleLines: { color: c.grid },
            pointLabels: { color: c.text, font: { size: 11 } },
            ticks: { color: c.text, backdropColor: 'transparent' }
          }
        },
        plugins: {
          legend: { labels: { color: c.textPrimary } }
        }
      }
    })
  }

  if (donutChartRef.value) {
    const excellent = IKU_DATA.filter(i => i.kinerjaku >= 110).length
    const good = IKU_DATA.filter(i => i.kinerjaku >= 100 && i.kinerjaku < 110).length
    const target = IKU_DATA.filter(i => i.kinerjaku < 100).length
    donutChart = new Chart(donutChartRef.value, {
      type: 'doughnut',
      data: {
        labels: ['Melampaui Target (≥110%)', 'Tercapai (100-109%)', 'Belum Tercapai (<100%)'],
        datasets: [{
          data: [excellent, good, target],
          backgroundColor: ['#00B4A0', '#00A8E0', '#f0a500'],
          borderColor: 'transparent',
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom', labels: { color: c.textPrimary, font: { size: 11 }, padding: 16 } }
        }
      }
    })
  }

  if (stackedBarChartRef.value) {
    stackedBarChart = new Chart(stackedBarChartRef.value, {
      type: 'bar',
      data: {
        labels: IKU_DATA.map(i => 'IKU ' + i.id),
        datasets: [{
          label: 'Target',
          data: IKU_DATA.map(i => i.target),
          backgroundColor: 'rgba(0, 58, 92, 0.5)',
          borderColor: '#003A5C',
          borderWidth: 1,
          borderRadius: 4
        }, {
          label: 'Capaian',
          data: IKU_DATA.map(i => i.capaian),
          backgroundColor: 'rgba(0, 168, 224, 0.7)',
          borderColor: '#00A8E0',
          borderWidth: 1,
          borderRadius: 4
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
}

onMounted(() => {
  initCharts()
})
</script>

<template>
  <section id="kinerja" class="tab-content active">
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2" style="color: var(--text-primary);">
        <i class="fas fa-bullseye mr-2" style="color: var(--accent-1);"></i>
        Detail Kinerja & IKU
      </h2>
      <p class="text-base" style="color: var(--text-secondary);">Capaian lengkap 7 Indikator Kinerja Utama berdasarkan Perjanjian Kinerja 2025</p>
    </div>
    
    <!-- Radar & Donut Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="ocean-card p-6 flex flex-col">
        <h3 class="text-lg font-bold mb-4 text-center" style="color: var(--text-primary);">Peta Kinerja Radar</h3>
        <div class="flex-1 flex items-center justify-center w-full max-w-md mx-auto">
          <canvas ref="radarChartRef"></canvas>
        </div>
      </div>
      <div class="ocean-card p-6 flex flex-col">
        <h3 class="text-lg font-bold mb-4 text-center" style="color: var(--text-primary);">Distribusi Capaian</h3>
        <div class="flex-1 flex items-center justify-center w-full max-w-sm mx-auto">
          <canvas ref="donutChartRef"></canvas>
        </div>
      </div>
    </div>
    
    <!-- Stacked Bar -->
    <div class="ocean-card p-6 mb-6">
      <h3 class="text-lg font-bold mb-4" style="color: var(--text-primary);">Perbandingan Target vs Capaian (%)</h3>
      <div class="max-w-4xl mx-auto">
        <canvas ref="stackedBarChartRef"></canvas>
      </div>
    </div>
    
    <!-- IKU Detail Cards -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div v-for="iku in IKU_DATA" :key="iku.id" class="ocean-card p-5">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-sm" 
               :style="{ background: iku.capaian > iku.target ? 'linear-gradient(135deg, #00B4A0, #00d4a0)' : 'linear-gradient(135deg, #003A5C, #00A8E0)' }">
            {{ iku.id }}
          </div>
          <div>
            <h4 class="font-bold text-sm" style="color: var(--text-primary);">{{ iku.nama }}</h4>
            <p class="text-xs" style="color: var(--text-muted);">{{ iku.sk }}</p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-4">
          <div class="p-2 sm:p-3 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary);">
            <p class="text-[10px] sm:text-xs mb-1" style="color: var(--text-muted);">Target</p>
            <p class="font-bold metric-value text-sm sm:text-base whitespace-nowrap" style="color: var(--text-primary);">
              {{ iku.target }}<span class="text-[10px] font-normal tracking-normal opacity-80" :class="iku.satuan === '%' ? 'ml-0.5' : 'ml-1'">{{ iku.satuan }}</span>
            </p>
          </div>
          <div class="p-2 sm:p-3 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary);">
            <p class="text-[10px] sm:text-xs mb-1" style="color: var(--text-muted);">Capaian</p>
            <p class="font-bold metric-value text-sm sm:text-base whitespace-nowrap" :class="{ 'gradient-text': iku.capaian > iku.target }" style="color: var(--text-primary);">
              {{ iku.capaian }}<span class="text-[10px] font-normal tracking-normal opacity-80" :class="iku.satuan === '%' ? 'ml-0.5' : 'ml-1'">{{ iku.satuan }}</span>
            </p>
          </div>
          <div class="p-2 sm:p-3 rounded-xl text-center flex flex-col justify-center" style="background: var(--bg-secondary);">
            <p class="text-[10px] sm:text-xs mb-1" style="color: var(--text-muted);">Kinerjaku</p>
            <p class="font-bold metric-value text-sm sm:text-base whitespace-nowrap" :class="{ 'gradient-text': iku.kinerjaku > 100 }" style="color: var(--text-primary);">
              {{ iku.kinerjaku }}<span class="text-[10px] font-normal tracking-normal ml-0.5 opacity-80">%</span>
            </p>
          </div>
        </div>
        <p class="text-xs mb-2" style="color: var(--text-secondary);">{{ iku.keterangan }}</p>
        <p class="text-xs" style="color: var(--text-muted);"><i class="fas fa-wallet mr-1"></i>Efisiensi: {{ iku.efisiensi }}</p>
      </div>
    </div>
  </section>
</template>
