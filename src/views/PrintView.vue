<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { DASHBOARD_DATA, IKU_DATA, ACTIVITIES, AI_MODULES } from '../constants'
import Overview from '../components/Overview.vue'
import Process from '../components/Process.vue'
import Kinerja from '../components/Kinerja.vue'
import Aktivitas from '../components/Aktivitas.vue'
import BlueEconomy from '../components/BlueEconomy.vue'
import Kesimpulan from '../components/Kesimpulan.vue'
import Sistem from '../components/Sistem.vue'

const route = useRoute()

const tabOptions = [
  { id: 'cover', label: 'Halaman Sampul (Cover)' },
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'KKPRL Process' },
  { id: 'kinerja', label: 'Kinerja & IKU' },
  { id: 'aktivitas', label: 'Aktivitas' },
  { id: 'blue-economy', label: 'Blue Economy AI' },
  { id: 'kesimpulan', label: 'Kesimpulan' },
  { id: 'sistem', label: 'Sistem & Data' }
]

const selectedTabs = computed(() => {
  const tabsQuery = route.query.tabs
  if (!tabsQuery) return []
  const tabIds = tabsQuery.split(',')
  return tabOptions.filter(opt => tabIds.includes(opt.id))
})

const printDate = computed(() => {
  return new Date().toLocaleDateString('id-ID', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
})

const formatCurrency = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val)
}

const triggerPrint = () => {
  window.print()
}

// Force light mode IMMEDIATELY before child components mount
// so that Chart.js instances pick up the light theme colors.
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('light')
  document.documentElement.classList.remove('dark')
}

onMounted(() => {
  // Logic untuk auto-print native jika dipanggil dari iframe
  if (route.query.auto_print === 'true') {
    setTimeout(() => {
      window.print()
    }, 800)
  }
})
</script>

<template>
  <div class="print-container">
    <div id="pdf-content">
      <!-- COVER PAGE (Page 1) -->
      <div v-if="selectedTabs.some(t => t.id === 'cover')" class="page cover-page">
        <div class="cover-content">
        <div class="cover-header">
          <div class="main-logo-container">
            <i class="fas fa-water"></i>
          </div>
          <div class="instansi-name">
            <p class="instansi-top">Kementerian Kelautan dan Perikanan</p>
            <p class="instansi-bottom">Republik Indonesia</p>
          </div>
        </div>

        <div class="cover-body">
          <div class="report-type">LAPORAN CAPAIAN KINERJA</div>
          <h1 class="report-title">PRKPDL <span class="highlight">CONTROL TOWER</span></h1>
          <div class="report-period">TAHUN ANGGARAN 2025 – 2026</div>
          <div class="decoration-line"></div>
          
          <div class="doc-meta-cover">
            <table class="cover-meta-table">
              <tr>
                <td class="label">Nama Dokumen</td>
                <td class="colon">:</td>
                <td class="value">Laporan Capaian Kinerja Control Tower 2025</td>
              </tr>
              <tr>
                <td class="label">Tanggal Cetak</td>
                <td class="colon">:</td>
                <td class="value">{{ printDate }}</td>
              </tr>
              <tr>
                <td class="label">Status Data</td>
                <td class="colon">:</td>
                <td class="value">Live Data per Oktober 2025</td>
              </tr>

            </table>
          </div>
        </div>

        <div class="cover-footer">
          <div class="footer-branding">
            Direktorat Jenderal Pengelolaan Kelautan dan Ruang Laut
          </div>
          <div class="page-number-cover-text">Halaman 1</div>
        </div>
      </div>
    </div>

    <!-- CONTENT PAGES (Starting Page 2) -->
    <div v-for="(tab, index) in selectedTabs.filter(t => t.id !== 'cover')" :key="tab.id" class="page">


      <div class="section-container">
        <h2 class="section-title">{{ tab.label }}</h2>
        
        <div class="component-wrapper">
          <Overview v-if="tab.id === 'overview'" />
          <Process v-else-if="tab.id === 'process'" />
          <Kinerja v-else-if="tab.id === 'kinerja'" />
          <Aktivitas v-else-if="tab.id === 'aktivitas'" />
          <BlueEconomy v-else-if="tab.id === 'blue-economy'" />
          <Kesimpulan v-else-if="tab.id === 'kesimpulan'" />
          <Sistem v-else-if="tab.id === 'sistem'" />
        </div>
      </div>
    </div>
    </div> <!-- End pdf-content -->

    <!-- Print Button -->
    <div class="no-print fixed-actions">
      <button @click="triggerPrint" class="print-btn">
        <i class="fas fa-print"></i> Cetak Laporan
      </button>
    </div>
  </div>
</template>

<style>
/* ROBUST DOCUMENT CSS FOR PDF STABILITY */
:root {
  --primary-doc: #003A5C;
  --secondary-doc: #00A8E0;
  --text-main: #1a1a1a;
  --text-gray: #475569;
  --border-light: #e2e8f0;
}

body { margin: 0; padding: 0; background: #f1f5f9; }

.print-container {
  font-family: 'Plus Jakarta Sans', Arial, sans-serif;
  color: var(--text-main);
  line-height: 1.5;
}

.page {
  background: white;
  width: 210mm;
  padding: 20mm;
  margin: 20px auto;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  page-break-after: always;
}

/* COVER PAGE SPECIFIC */
.cover-page {
  height: 297mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15mm;
  box-shadow: none;
}

.cover-content {
  width: 100%;
  height: 100%;
  border: 1.5px solid var(--primary-doc);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.cover-header { display: flex; align-items: center; gap: 15px; }
.main-logo-container { width: 60px; height: 60px; background: var(--primary-doc); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; }
.instansi-top { font-size: 12px; font-weight: 700; color: var(--primary-doc); margin: 0; text-transform: uppercase; }
.instansi-bottom { font-size: 16px; font-weight: 800; color: #1a1a1a; margin: 0; text-transform: uppercase; }

.cover-body { text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center; }
.report-type { font-size: 16px; font-weight: 700; color: var(--secondary-doc); letter-spacing: 2px; margin-bottom: 20px; }
.report-title { font-size: 54px; font-weight: 900; color: var(--primary-doc); line-height: 1; margin: 0; }
.report-title .highlight { color: var(--secondary-doc); display: block; }
.report-period { font-size: 18px; font-weight: 700; color: var(--text-gray); margin-top: 10px; margin-bottom: 40px; }
.decoration-line { width: 80px; height: 1px; background: #cbd5e1; margin: 0 auto 40px; }

.doc-meta-cover { background: white; border-radius: 16px; padding: 25px; border: 1px solid #f1f5f9; box-shadow: 0 10px 30px rgba(0,0,0,0.05); width: 400px; margin: 0 auto; }
.cover-meta-table { width: 100%; border-collapse: collapse; text-align: left; }
.cover-meta-table td { padding: 10px 0; font-size: 13px; border-bottom: 1px solid #f8fafc; vertical-align: top; }
.cover-meta-table .label { font-weight: 800; color: var(--primary-doc); width: 120px; }
.cover-meta-table .colon { width: 20px; text-align: center; font-weight: 800; color: var(--primary-doc); }
.cover-meta-table .value { color: var(--text-main); }

.cover-footer { text-align: center; border-top: 1px solid #f1f5f9; padding-top: 30px; }
.footer-branding { font-size: 11px; font-weight: 700; color: var(--text-gray); text-transform: uppercase; margin-bottom: 5px; }
.page-number-cover-text { font-size: 11px; color: #94a3b8; }

/* CONTENT PAGE STYLES */
.mini-header { display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }
.mini-logo { width: 30px; height: 30px; background: var(--primary-doc); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; }
.mini-title { font-size: 11px; font-weight: 700; color: var(--primary-doc); text-transform: uppercase; }

.section-container { flex-grow: 1; margin-bottom: 30mm; } /* Extra space for footer */
.section-title { font-size: 20px; font-weight: 800; color: var(--primary-doc); border-left: 5px solid var(--secondary-doc); padding-left: 15px; margin-bottom: 25px; text-transform: uppercase; }
.sub-title { font-size: 16px; font-weight: 700; color: var(--primary-doc); margin: 30px 0 15px; border-bottom: 1px solid #eee; padding-bottom: 5px; }

.metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
.simple-card { border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; }
.card-label { font-size: 12px; font-weight: 700; color: var(--text-gray); text-transform: uppercase; }
.card-value { font-size: 32px; font-weight: 900; color: var(--primary-doc); margin: 5px 0; }
.card-sub { font-size: 11px; color: var(--text-gray); font-weight: 600; }

.simple-table { width: 100%; border-collapse: collapse; }
.simple-table td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }

.formal-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
.formal-table th { background: #f8fafc; text-align: left; padding: 12px; border-bottom: 2px solid var(--primary-doc); font-size: 12px; font-weight: 800; color: var(--primary-doc); }
.formal-table td { padding: 12px; border-bottom: 1px solid #edf2f7; font-size: 13px; line-height: 1.4; }

.data-item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f1f5f9; }
.data-item h4 { margin: 0 0 10px; font-size: 15px; color: var(--primary-doc); display: flex; justify-content: space-between; align-items: center; }
.status-badge { font-size: 10px; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; color: var(--secondary-doc); font-weight: 700; }
.data-item p { margin: 0; font-size: 13px; color: var(--text-gray); }

.text-right { text-align: right; }
.text-center { text-align: center; }
.text-muted { color: #94a3b8; font-size: 14px; }

.text-muted { color: #94a3b8; font-size: 14px; }

.fixed-actions { position: fixed; bottom: 30px; right: 30px; z-index: 1000; }
.print-btn { background: #00A8E0; color: white; border: none; padding: 14px 28px; border-radius: 50px; font-weight: 700; box-shadow: 0 4px 15px rgba(0,0,0,0.15); cursor: pointer; display: flex; align-items: center; gap: 10px; }

@media print {
  @page { size: A4; margin: 0; }
  body { 
    background: white !important; 
    color: black !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  /* Disable animations for printing */
  * {
    animation: none !important;
    transition: none !important;
  }

  .print-container { background: white; }

  /* Page handling */
  .page { 
    margin: 0 !important; 
    padding: 10mm 15mm !important;
    border: none !important; 
    box-shadow: none !important; 
    height: auto !important; 
    min-height: auto !important;
    width: 100% !important;
    page-break-after: always; 
  }
  
  .page.cover-page {
    height: 297mm !important;
    padding: 15mm !important;
    justify-content: center;
  }

  /* Force grids and flex layouts for A4 width (simulating lg breakpoint) */
  .lg\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  .lg\:flex-row { flex-direction: row !important; }
  .sm\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
  .sm\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
  .sm\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  .gap-3 { gap: 0.75rem !important; }
  .gap-4 { gap: 1rem !important; }
  .gap-6 { gap: 1.5rem !important; }

  /* Card fixes */
  .ocean-card {
    break-inside: avoid;
    page-break-inside: avoid;
    border: 1px solid #ccc !important;
    box-shadow: none !important;
    color: black !important;
  }
  
  .print-breakable {
    break-inside: auto !important;
    page-break-inside: auto !important;
  }
  
  .timeline-item {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  

  
  .gradient-text {
    background: none !important;
    -webkit-text-fill-color: #003A5C !important;
    color: #003A5C !important;
  }

  .no-print { display: none !important; }
}
</style>
