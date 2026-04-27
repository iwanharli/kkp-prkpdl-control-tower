<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { DASHBOARD_DATA } from '../constants'

// Component imports
import Overview from './Overview.vue'
import Process from './Process.vue'
import Kinerja from './Kinerja.vue'
import Aktivitas from './Aktivitas.vue'
import BlueEconomy from './BlueEconomy.vue'
import Kesimpulan from './Kesimpulan.vue'
import Sistem from './Sistem.vue'

const router = useRouter()
const route = useRoute()

const activeTab = ref('overview')
const isDark = ref(true)

// Print Modal State
const showPrintModal = ref(false)
const selectedPrintTabs = ref(['cover', 'overview', 'process', 'kinerja', 'aktivitas', 'blue-economy', 'kesimpulan', 'sistem'])
const printTabOptions = [
  { id: 'cover', label: 'Halaman Sampul (Cover)' },
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'KKPRL Process' },
  { id: 'kinerja', label: 'Kinerja & IKU' },
  { id: 'aktivitas', label: 'Aktivitas' },
  { id: 'blue-economy', label: 'Blue Economy AI' },
  { id: 'kesimpulan', label: 'Kesimpulan' },
  { id: 'sistem', label: 'Sistem & Data' }
]
const tabOptions = [
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'KKPRL Process' },
  { id: 'kinerja', label: 'Kinerja & IKU' },
  { id: 'aktivitas', label: 'Aktivitas' },
  { id: 'blue-economy', label: 'Blue Economy AI' },
  { id: 'kesimpulan', label: 'Kesimpulan' },
  { id: 'sistem', label: 'Sistem & Data' }
]

const selectAllTabs = () => {
  selectedPrintTabs.value = printTabOptions.map(t => t.id)
}

const deselectAllTabs = () => {
  selectedPrintTabs.value = []
}

const togglePrintModal = () => {
  if (!showPrintModal.value) {
    selectedPrintTabs.value = ['cover', activeTab.value]
  }
  showPrintModal.value = !showPrintModal.value
}

const isDownloading = ref(false)

const handlePrintSubmit = () => {
  isDownloading.value = true
  const tabsParam = selectedPrintTabs.value.join(',')
  
  // Hapus iframe lama jika ada
  const oldFrame = document.getElementById('printFrame')
  if (oldFrame) oldFrame.remove()
  
  // Buat iframe tersembunyi di luar layar
  const iframe = document.createElement('iframe')
  iframe.id = 'printFrame'
  iframe.style.position = 'fixed'
  iframe.style.right = '100%'
  iframe.style.bottom = '100%'
  iframe.style.width = '210mm'
  iframe.style.height = '297mm'
  iframe.style.visibility = 'hidden'
  iframe.style.border = 'none'
  
  iframe.src = `/print?tabs=${tabsParam}&auto_print=true`
  document.body.appendChild(iframe)
  
  showPrintModal.value = false
  setTimeout(() => {
    isDownloading.value = false
  }, 2000)
}

const toggleTabSelection = (tabId) => {
  const index = selectedPrintTabs.value.indexOf(tabId)
  if (index === -1) {
    selectedPrintTabs.value.push(tabId)
  } else {
    selectedPrintTabs.value.splice(index, 1)
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const switchTab = (tabId) => {
  activeTab.value = tabId
  window.scrollTo({ top: 0, behavior: 'smooth' })
  router.replace({ query: { ...route.query, tab: tabId } }).catch(err => {})
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }

  // Restore active tab from URL query if exists
  if (route.query.tab) {
    const validTabs = ['overview', 'process', 'kinerja', 'aktivitas', 'blue-economy', 'kesimpulan', 'sistem']
    if (validTabs.includes(route.query.tab)) {
      activeTab.value = route.query.tab
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const tabs = ['overview', 'process', 'kinerja', 'aktivitas', 'blue-economy', 'kesimpulan', 'sistem']
    const idx = tabs.indexOf(activeTab.value)
    if (e.key === 'ArrowRight' && idx < tabs.length - 1) switchTab(tabs[idx + 1])
    if (e.key === 'ArrowLeft' && idx > 0) switchTab(tabs[idx - 1])
  })
})
</script>

<template>
  <div class="antialiased min-h-screen transition-colors duration-300" style="background: var(--bg-primary); color: var(--text-primary);">
    <!-- Selection Modal -->
    <div v-if="showPrintModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div class="ocean-card max-w-md w-full p-6 sm:p-8 animate-fade-in-up">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold" style="color: var(--text-primary);">Pilih Halaman Export</h3>
            <div class="flex gap-4 mt-2">
              <button @click="selectAllTabs" class="text-xs font-semibold hover:underline" style="color: var(--accent-1);">Pilih Semua</button>
              <button @click="deselectAllTabs" class="text-xs font-semibold hover:underline" style="color: var(--danger);">Hapus Semua Pilihan</button>
            </div>
          </div>
          <button @click="togglePrintModal" class="text-muted hover:text-white p-1"><i class="fas fa-times"></i></button>
        </div>
        
        <!-- Informasi Cara Download -->
        <div class="mb-5 p-3.5 rounded-xl flex items-start gap-3 border" style="background: rgba(0, 180, 160, 0.1); border-color: rgba(0, 180, 160, 0.2);">
          <i class="fas fa-info-circle mt-0.5" style="color: var(--accent-2);"></i>
          <div class="text-xs font-medium leading-relaxed" style="color: var(--text-secondary);">
            <strong style="color: var(--text-primary);">Cara Unduh PDF:</strong> Setelah klik Download, ubah bagian <strong>Destination (Tujuan)</strong> menjadi <strong>"Save as PDF"</strong> pada dialog yang muncul, lalu klik Save.
          </div>
        </div>
        
        <div class="space-y-2 mb-8">
          <label v-for="opt in printTabOptions" :key="opt.id" class="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/5 border border-transparent hover:border-white/10" :class="{ 'bg-white/5 border-white/10': selectedPrintTabs.includes(opt.id) }">
            <input type="checkbox" 
                   :checked="selectedPrintTabs.includes(opt.id)"
                   @change="toggleTabSelection(opt.id)"
                   class="w-5 h-5 rounded accent-ocean-500">
            <span class="text-sm font-medium" style="color: var(--text-secondary);">{{ opt.label }}</span>
          </label>
        </div>
        
        <div class="flex gap-3">
          <button @click="togglePrintModal" class="flex-1 px-4 py-3 rounded-xl text-sm font-bold border transition-all" style="border-color: var(--border-color); color: var(--text-secondary);">Batal</button>
          <button @click="handlePrintSubmit" :disabled="isDownloading" class="flex-1 px-4 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105" :style="{ background: isDownloading ? '#cbd5e1' : 'linear-gradient(135deg, #00A8E0, #00B4A0)', cursor: isDownloading ? 'wait' : 'pointer' }">
            <i :class="['fas', isDownloading ? 'fa-spinner fa-spin' : 'fa-download', 'mr-2']"></i>
            {{ isDownloading ? 'Menyiapkan Dokumen...' : 'Download' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Custom Tooltip Placeholder -->
    <div id="customTooltip" class="custom-tooltip"></div>

    <!-- Fixed Header -->
    <header class="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b" style="background: var(--header-bg); border-color: var(--border-color);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo / Title -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #003A5C, #00A8E0);">
              <i class="fas fa-water text-white text-lg"></i>
            </div>
            <div>
              <h1 class="text-base font-bold leading-tight" style="color: var(--text-primary);">
                PRKPDL <span class="gradient-text">Control Tower</span>
              </h1>
              <p class="text-xs font-medium" style="color: var(--text-muted);">2025–2026 &middot; KKP RI</p>
            </div>
          </div>
          
          <!-- Controls -->
          <div class="flex items-center gap-3 no-print">
            <button @click="toggleTheme" class="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105" style="background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-secondary);" title="Toggle Dark/Light Mode">
              <i :class="['fas', isDark ? 'fa-sun' : 'fa-moon']"></i>
            </button>
            <button @click="togglePrintModal" class="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105" style="background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-secondary);" title="Export to PDF">
              <i class="fas fa-file-pdf"></i>
            </button>
            <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold" style="background: rgba(0, 180, 160, 0.1); color: var(--accent-2); border: 1px solid rgba(0, 180, 160, 0.2);">
              <i class="fas fa-circle text-[8px] animate-pulse"></i>
              Live Data 2025
            </div>
          </div>
        </div>
      </div>
      
      <!-- Desktop Tabs -->
      <nav class="desktop-tabs max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div class="flex gap-1 min-w-max">
          <button v-for="tab in tabOptions" :key="tab.id" @click="switchTab(tab.id)" :class="['tab-btn', { active: activeTab === tab.id }]">
            <i :class="['fas', 
              tab.id === 'overview' ? 'fa-chart-line' : 
              tab.id === 'process' ? 'fa-sitemap' : 
              tab.id === 'kinerja' ? 'fa-bullseye' : 
              tab.id === 'aktivitas' ? 'fa-calendar-alt' : 
              tab.id === 'blue-economy' ? 'fa-robot' : 
              tab.id === 'kesimpulan' ? 'fa-clipboard-check' : 'fa-server',
              'mr-2']"></i>{{ tab.label }}
          </button>
        </div>
      </nav>
    </header>
    
    <!-- Spacer for fixed header -->
    <div class="h-28 sm:h-32"></div>
    
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-24">
      <div v-show="activeTab === 'overview'">
        <Overview />
      </div>
      <div v-show="activeTab === 'process'">
        <Process />
      </div>
      <div v-show="activeTab === 'kinerja'">
        <Kinerja />
      </div>
      <div v-show="activeTab === 'aktivitas'">
        <Aktivitas />
      </div>
      <div v-show="activeTab === 'blue-economy'">
        <BlueEconomy />
      </div>
      <div v-show="activeTab === 'kesimpulan'">
        <Kesimpulan />
      </div>
      <div v-show="activeTab === 'sistem'">
        <Sistem />
      </div>
    </main>
    
    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-nav no-print" style="background: var(--bg-card); border-color: var(--border-color);">
      <button @click="switchTab('overview')" :class="['mobile-nav-btn', { active: activeTab === 'overview' }]">
        <i class="fas fa-chart-line"></i>
        <span>Overview</span>
      </button>
      <button @click="switchTab('process')" :class="['mobile-nav-btn', { active: activeTab === 'process' }]">
        <i class="fas fa-sitemap"></i>
        <span>Proses</span>
      </button>
      <button @click="switchTab('kinerja')" :class="['mobile-nav-btn', { active: activeTab === 'kinerja' }]">
        <i class="fas fa-bullseye"></i>
        <span>IKU</span>
      </button>
      <button @click="switchTab('aktivitas')" :class="['mobile-nav-btn', { active: activeTab === 'aktivitas' }]">
        <i class="fas fa-calendar"></i>
        <span>Kegiatan</span>
      </button>
      <button @click="switchTab('kesimpulan')" :class="['mobile-nav-btn', { active: activeTab === 'kesimpulan' }]">
        <i class="fas fa-clipboard-check"></i>
        <span>Kesimpulan</span>
      </button>
    </nav>
  </div>
</template>

<style scoped>
/* Scoped styles if any, otherwise they are global in style.css */
</style>
