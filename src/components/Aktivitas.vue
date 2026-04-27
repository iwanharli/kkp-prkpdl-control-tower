<script setup>
import { ref, computed } from 'vue'
import { ACTIVITIES } from '../constants'

const filter = ref('all')

const filteredActivities = computed(() => {
  if (filter.value === 'all') return ACTIVITIES
  return ACTIVITIES.filter(a => a.type === filter.value)
})

const setFilter = (f) => {
  filter.value = f
}

const typeColors = {
  konsultasi: '#00A8E0',
  asistensi: '#00B4A0',
  verifikasi: '#f0a500',
  sosialisasi: '#9b59b6'
}

const typeLabels = {
  konsultasi: 'Konsultasi',
  asistensi: 'Asistensi',
  verifikasi: 'Verifikasi',
  sosialisasi: 'Sosialisasi'
}

const typeIcons = {
  konsultasi: 'fa-comments',
  asistensi: 'fa-hands-helping',
  verifikasi: 'fa-search-location',
  sosialisasi: 'fa-bullhorn'
}
</script>

<template>
  <section id="aktivitas" class="tab-content active">
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2" style="color: var(--text-primary);">
        <i class="fas fa-calendar-alt mr-2" style="color: var(--accent-1);"></i>
        Aktivitas & Engagement 2025
      </h2>
      <p class="text-base" style="color: var(--text-secondary);">Timeline kegiatan penting: konsultasi, asistensi, verifikasi, sosialisasi, dan workshop</p>
    </div>
    
    <!-- Activity Stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <div class="ocean-card p-4 text-center">
        <p class="metric-value text-2xl font-bold" style="color: var(--accent-1);">11</p>
        <p class="text-xs" style="color: var(--text-muted);">Konsultasi</p>
      </div>
      <div class="ocean-card p-4 text-center">
        <p class="metric-value text-2xl font-bold" style="color: var(--accent-1);">12</p>
        <p class="text-xs" style="color: var(--text-muted);">Asistensi</p>
      </div>
      <div class="ocean-card p-4 text-center">
        <p class="metric-value text-2xl font-bold" style="color: var(--accent-1);">5</p>
        <p class="text-xs" style="color: var(--text-muted);">Verifikasi Lapangan</p>
      </div>
      <div class="ocean-card p-4 text-center">
        <p class="metric-value text-2xl font-bold" style="color: var(--accent-1);">7</p>
        <p class="text-xs" style="color: var(--text-muted);">Sosialisasi & Workshop</p>
      </div>
    </div>
    
    <!-- Filter -->
    <div class="flex flex-wrap gap-2 mb-4 no-print">
      <button v-for="f in ['all', 'konsultasi', 'asistensi', 'verifikasi', 'sosialisasi']" 
              :key="f"
              @click="setFilter(f)"
              :class="['px-4 py-2 rounded-lg text-sm font-semibold transition-all', filter === f ? 'active text-white' : 'text-muted']"
              :style="filter === f ? { background: 'linear-gradient(135deg, #003A5C, #00A8E0)' } : { background: 'var(--bg-card)', color: 'var(--text-muted)' }">
        {{ f === 'all' ? 'Semua' : typeLabels[f] }}
      </button>
    </div>
    
    <!-- Timeline -->
    <div class="ocean-card p-6 print-breakable">
      <div id="activityTimeline">
        <div v-for="(a, i) in filteredActivities" :key="i" class="timeline-item pb-6" :class="{ last: i === filteredActivities.length - 1 }">
          <div class="timeline-dot" :style="{ background: typeColors[a.type] || '#00A8E0', boxShadow: '0 0 0 3px ' + (typeColors[a.type] || '#00A8E0') + '30' }"></div>
          <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
            <div class="flex-shrink-0">
              <span class="text-xs font-bold px-2 py-1 rounded" :style="{ background: (typeColors[a.type] || '#00A8E0') + '15', color: typeColors[a.type] || '#00A8E0', border: '1px solid ' + (typeColors[a.type] || '#00A8E0') + '30' }">
                {{ a.date }}
              </span>
              <span class="text-xs ml-2 px-2 py-1 rounded" style="background: var(--bg-primary); color: var(--text-muted);">
                {{ typeLabels[a.type] }}
              </span>
            </div>
            <div>
              <h4 class="font-semibold text-sm" style="color: var(--text-primary);">{{ a.title }}</h4>
              <p class="text-xs mt-1" style="color: var(--text-secondary);">{{ a.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Photo Gallery Grid -->
    <h3 class="text-lg font-bold mt-6 mb-4" style="color: var(--text-primary);">Dokumentasi Kegiatan</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <div v-for="(a, i) in ACTIVITIES.slice(0, 8)" :key="i"
           class="ocean-card p-3 aspect-square flex flex-col justify-center items-center text-center hover:scale-105 transition-transform" 
           :style="{ background: 'linear-gradient(135deg, var(--bg-card), ' + (typeColors[a.type] || '#00A8E0') + '08)' }">
        <div class="w-10 h-10 rounded-full flex items-center justify-center mb-2" :style="{ background: (typeColors[a.type] || '#00A8E0') + '15' }">
          <i :class="['fas', typeIcons[a.type] || 'fa-calendar', 'text-lg']" :style="{ color: typeColors[a.type] || '#00A8E0' }"></i>
        </div>
        <p class="text-[10px] font-bold mb-1" :style="{ color: typeColors[a.type] || '#00A8E0' }">{{ a.date }}</p>
        <p class="text-xs font-semibold line-clamp-2" style="color: var(--text-primary);">{{ a.title }}</p>
        <span class="text-[10px] mt-1 px-2 py-0.5 rounded-full" :style="{ background: (typeColors[a.type] || '#00A8E0') + '15', color: typeColors[a.type] || '#00A8E0' }">{{ typeLabels[a.type] }}</span>
      </div>
    </div>
  </section>
</template>
