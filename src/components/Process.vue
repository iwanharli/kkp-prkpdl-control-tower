<script setup>
import { DASHBOARD_DATA } from '../constants'

const stages = [
  { label: 'Permohonan Masuk', value: DASHBOARD_DATA.totalPermohonan, color: '#003A5C', width: 100 },
  { label: 'Verifikasi Administrasi', value: 3400, color: '#005a7a', width: 85 },
  { label: 'Penilaian Teknis', value: DASHBOARD_DATA.penilaianTeknis, color: '#007a9a', width: 65 },
  { label: 'Verifikasi Lapangan', value: 45, color: '#00A8E0', width: 50 },
  { label: 'KKPRL Diterbitkan', value: DASHBOARD_DATA.kkprlTerbit, color: '#00B4A0', width: 35 },
]

const rows = [
  { status: 'Permohonan Masuk', berusaha: 3223, non: 424, badge: 'info' },
  { status: 'Dalam Proses', berusaha: '~2400', non: '~340', badge: 'warning' },
  { status: 'Ditolak/Dibatalkan', berusaha: '~77', non: '~5', badge: 'danger' },
  { status: 'KKPRL Diterbitkan', berusaha: 746, non: 79, badge: 'success' },
]

const getPct = (berusaha, non) => {
  if (typeof berusaha !== 'number') return '-'
  return ((berusaha + non) / DASHBOARD_DATA.totalPermohonan * 100).toFixed(1) + '%'
}
</script>

<template>
  <section id="process" class="tab-content active">
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-2" style="color: var(--text-primary);">
        <i class="fas fa-sitemap mr-2" style="color: var(--accent-1);"></i>
        Alur Proses KKPRL 2025
      </h2>
      <p class="text-base" style="color: var(--text-secondary);">Funnel & status permohonan perizinan pemanfaatan ruang laut</p>
    </div>
    
    <!-- Funnel Chart -->
    <div class="ocean-card p-6 mb-6">
      <h3 class="text-lg font-bold mb-4" style="color: var(--text-primary);">Funnel Penerbitan KKPRL</h3>
      <div class="max-w-3xl mx-auto">
        <div v-for="s in stages" :key="s.label" class="funnel-bar flex items-center gap-4 mb-2" :style="{ marginLeft: (100 - s.width) / 2 + '%', width: s.width + '%' }">
          <div class="h-10 sm:h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base px-4 transition-all" 
               :style="{ background: s.color, width: '100%', minWidth: '120px', boxShadow: '0 4px 15px ' + s.color + '40' }">
            {{ s.value.toLocaleString('id-ID') }}
          </div>
          <span class="text-xs sm:text-sm font-medium whitespace-nowrap" style="color: var(--text-secondary);">{{ s.label }}</span>
        </div>
      </div>
    </div>
    
    <!-- Status Table -->
    <div class="ocean-card p-6 mb-6">
      <h3 class="text-lg font-bold mb-4" style="color: var(--text-primary);">Status Permohonan KKPRL 2025</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color);">
              <th class="text-left py-3 px-4 font-semibold" style="color: var(--text-muted);">Status</th>
              <th class="text-center py-3 px-4 font-semibold" style="color: var(--text-muted);">Berusaha</th>
              <th class="text-center py-3 px-4 font-semibold" style="color: var(--text-muted);">Non-Berusaha</th>
              <th class="text-center py-3 px-4 font-semibold" style="color: var(--text-muted);">Total</th>
              <th class="text-center py-3 px-4 font-semibold" style="color: var(--text-muted);">% dari Masuk</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in rows" :key="r.status" style="border-bottom: 1px solid var(--border-color);">
              <td class="py-3 px-4 font-medium" style="color: var(--text-primary);">{{ r.status }}</td>
              <td class="py-3 px-4 text-center" style="color: var(--text-secondary);">{{ r.berusaha.toLocaleString('id-ID') }}</td>
              <td class="py-3 px-4 text-center" style="color: var(--text-secondary);">{{ r.non.toLocaleString('id-ID') }}</td>
              <td class="py-3 px-4 text-center font-bold" style="color: var(--text-primary);">{{ (typeof r.berusaha === 'number' ? (r.berusaha + r.non) : '-').toLocaleString('id-ID') }}</td>
              <td class="py-3 px-4 text-center">
                <span :class="['badge', 'badge-' + r.badge, 'text-xs']">{{ getPct(r.berusaha, r.non) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Process Timeline -->
    <div class="ocean-card p-6">
      <h3 class="text-lg font-bold mb-6" style="color: var(--text-primary);">Tahapan Proses KKPRL</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background: rgba(0, 168, 224, 0.1);">
            <span class="font-bold" style="color: var(--accent-1);">1</span>
          </div>
          <h4 class="font-semibold mb-1" style="color: var(--text-primary);">Pendaftaran</h4>
          <p class="text-xs" style="color: var(--text-muted);">OSS (berusaha) / e-SEA (non-berusaha)</p>
        </div>
        <div class="p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background: rgba(0, 168, 224, 0.1);">
            <span class="font-bold" style="color: var(--accent-1);">2</span>
          </div>
          <h4 class="font-semibold mb-1" style="color: var(--text-primary);">Verifikasi Admin</h4>
          <p class="text-xs" style="color: var(--text-muted);">Pemeriksaan kelengkapan dokumen</p>
        </div>
        <div class="p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background: rgba(0, 168, 224, 0.1);">
            <span class="font-bold" style="color: var(--accent-1);">3</span>
          </div>
          <h4 class="font-semibold mb-1" style="color: var(--text-primary);">Penilaian Teknis</h4>
          <p class="text-xs" style="color: var(--text-muted);">Maksimal 14 hari oleh Tim Teknis</p>
        </div>
        <div class="p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background: rgba(0, 180, 160, 0.1);">
            <span class="font-bold" style="color: var(--accent-2);">4</span>
          </div>
          <h4 class="font-semibold mb-1" style="color: var(--text-primary);">Penerbitan</h4>
          <p class="text-xs" style="color: var(--text-muted);">Via OSS/e-SEA, pengambilan di PTSP</p>
        </div>
      </div>
      <div class="mt-4 p-4 rounded-xl flex items-start gap-3" style="background: rgba(0, 168, 224, 0.05); border: 1px solid var(--border-color);">
        <i class="fas fa-info-circle mt-0.5" style="color: var(--accent-1);"></i>
        <p class="text-sm" style="color: var(--text-secondary);">Verifikasi lapangan dilakukan untuk kegiatan berisiko tinggi, berdampak luas, dan/atau berskala besar — diprioritaskan sebelum atau sesudah penilaian teknis.</p>
      </div>
    </div>
  </section>
</template>
