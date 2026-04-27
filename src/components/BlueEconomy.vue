<script setup>
import { AI_MODULES } from '../constants'
</script>

<template>
  <section id="blue-economy" class="tab-content active">
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2" style="color: var(--text-primary);">
        <i class="fas fa-robot mr-2" style="color: var(--accent-1);"></i>
        Blue Economy Control Tower
      </h2>
      <p class="text-base" style="color: var(--text-secondary);">Visi pengembangan 5 Modul AI untuk transformasi digital penataan ruang laut Indonesia</p>
    </div>
    
    <!-- Vision Banner -->
    <div class="conclusion-hero rounded-xl p-4 sm:p-5 mb-5 relative">
      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <i class="fas fa-brain text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">e-SEA AI Spatial Platform</h3>
            <p class="text-white/70 text-sm">Transformasi Digital Dit. PRKPDL 2026-2029</p>
          </div>
        </div>
        <p class="text-white/90 max-w-3xl leading-relaxed">
          Pengembangan sistem informasi terpadu berbasis Artificial Intelligence untuk perencanaan, pengendalian, dan pelayanan perizinan ruang laut secara real-time, transparan, dan akuntabel.
        </p>
      </div>
    </div>
    
    <!-- 5 AI Modules -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div v-for="m in AI_MODULES" :key="m.title" class="ai-module-card !p-4">
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center" :style="{ background: m.color + '15' }">
              <i :class="['fas', m.icon, 'text-xl']" :style="{ color: m.color }"></i>
            </div>
            <div>
              <h4 class="font-bold" style="color: var(--text-primary);">{{ m.title }}</h4>
              <span class="text-xs px-2 py-0.5 rounded" :style="{ background: m.color + '15', color: m.color }">{{ m.status }}</span>
            </div>
          </div>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">{{ m.desc }}</p>
        </div>
      </div>
    </div>
    
    <!-- Tech Stack -->
    <div class="ocean-card p-4 mt-5">
      <h3 class="text-lg font-bold mb-4" style="color: var(--text-primary);">Integrasi Sistem & Teknologi</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div class="p-3 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-globe text-2xl mb-2" style="color: var(--accent-1);"></i>
          <p class="text-xs font-semibold" style="color: var(--text-primary);">e-SEA</p>
          <p class="text-[10px]" style="color: var(--text-muted);">Core Platform</p>
        </div>
        <div class="p-3 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-handshake text-2xl mb-2" style="color: var(--accent-1);"></i>
          <p class="text-xs font-semibold" style="color: var(--text-primary);">OSS</p>
          <p class="text-[10px]" style="color: var(--text-muted);">Integration</p>
        </div>
        <div class="p-3 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-map text-2xl mb-2" style="color: var(--accent-1);"></i>
          <p class="text-xs font-semibold" style="color: var(--text-primary);">One Map</p>
          <p class="text-[10px]" style="color: var(--text-muted);">Policy</p>
        </div>
        <div class="p-3 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-brain text-2xl mb-2" style="color: var(--accent-2);"></i>
          <p class="text-xs font-semibold" style="color: var(--text-primary);">AI Engine</p>
          <p class="text-[10px]" style="color: var(--text-muted);">Document & Spatial</p>
        </div>
        <div class="p-3 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-shield-halved text-2xl mb-2" style="color: var(--accent-2);"></i>
          <p class="text-xs font-semibold" style="color: var(--text-primary);">SPBE</p>
          <p class="text-[10px]" style="color: var(--text-muted);">Compliance</p>
        </div>
        <div class="p-3 rounded-xl text-center" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fas fa-database text-2xl mb-2" style="color: var(--accent-1);"></i>
          <p class="text-xs font-semibold" style="color: var(--text-primary);">Warehouse</p>
          <p class="text-[10px]" style="color: var(--text-muted);">Data Center</p>
        </div>
      </div>
    </div>
  </section>
</template>
