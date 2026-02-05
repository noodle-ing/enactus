<template>
  <div class="page-wrapper">
    <main class="competitions-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">›</span>
          <span class="current">{{ $t('competitions.breadcrumbs.current') }}</span>
        </nav>

        <h1 class="page-title">{{ $t('competitions.title') }}</h1>

        <div class="competitions-layout">
          <aside class="sidebar">
            <button 
              v-for="tab in competitionTypes" 
              :key="tab.id"
              :class="['sidebar-btn', { active: activeType === tab.id }]"
              @click="activeType = tab.id"
            >
              {{ tab.label }}
              <span class="arrow">▶</span>
            </button>
          </aside>

          <section class="content">
            <div 
              v-for="year in yearsData" 
              :key="year.id"
              class="accordion-item"
              :class="{ open: openYear === year.id }"
            >
              <div class="accordion-header" @click="toggleYear(year.id)">
                <span>{{ year.title }}</span>
                <span class="chevron">{{ openYear === year.id ? '▲' : '▼' }}</span>
              </div>

              <transition name="fade">
                <div class="accordion-body" v-if="openYear === year.id">
                  <div class="media-grid">
                    <a 
                      v-for="(video, vIdx) in year.videos" 
                      :key="vIdx"
                      :href="video.link" 
                      target="_blank" 
                      class="video-card"
                    >
                      <img :src="getThumbnail(video.id)" :alt="year.title" class="video-thumb">
                      <div class="play-overlay">
                        <div class="play-icon">▶</div>
                      </div>
                    </a>
                  </div>

                  <div class="announcement">
                    <h3>{{ year.announcementTitle }}</h3>
                    <div class="text-content" v-html="year.description"></div>
                    
                    <div class="links">
                      <a href="#" class="accent-link">{{ $t('competitions.links.results') }}</a>
                      <a href="#" class="accent-link">{{ $t('competitions.links.photos') }}</a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Footer from '@/components/Footer.vue';

const { t } = useI18n();

const activeType = ref('world-cup');
const openYear = ref('2025');

const competitionTypes = computed(() => [
  { id: 'world-cup', label: t('competitions.types.worldCup') },
  { id: 'national-expo', label: t('competitions.types.nationalExpo') },
  { id: 'school-championship', label: t('competitions.types.schoolChampionship') },
]);

const yearsData = computed(() => [
  { 
    id: '2025', 
    title: t('competitions.years.2025.title'),
    announcementTitle: t('competitions.years.2025.announcementTitle'),
    description: t('competitions.years.2025.description'),
    videos: [{ id: '2QLHepslVVE', link: 'https://youtu.be/2QLHepslVVE' }]
  },
  { 
    id: '2024', 
    title: t('competitions.years.2024.title'),
    announcementTitle: t('competitions.years.2024.announcementTitle'),
    description: t('competitions.years.2024.description'),
    videos: [{ id: 'j8K9KNDcjYM', link: 'https://youtu.be/j8K9KNDcjYM' }]
  },
  { 
    id: '2023', 
    title: t('competitions.years.2023.title'),
    announcementTitle: t('competitions.years.2023.announcementTitle'),
    description: t('competitions.years.2023.description'),
    videos: [{ id: 'KH4X_hWQqNA', link: 'https://youtu.be/KH4X_hWQqNA' }]
  },
]);

// Функция для получения обложки YouTube
const getThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const toggleYear = (id) => {
  openYear.value = openYear.value === id ? null : id;
};
</script>

<style scoped>
.page-wrapper { background-color: #fff; }
.competitions-page { padding: 40px 0 100px; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; }
.breadcrumbs a { text-decoration: none; color: inherit; }
.current { color: #333; pointer-events: none; }

.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; }

.competitions-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  align-items: start;
}

.sidebar { display: flex; flex-direction: column; gap: 15px; }

.sidebar-btn {
  background-color: #939598;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 25px 20px;
  font-weight: 800;
  font-size: 16px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  line-height: 1.2;
}

.sidebar-btn.active {
  background-color: #FFCC00;
  color: #232323;
}

.arrow { font-size: 12px; }

.content { display: flex; flex-direction: column; gap: 10px; }

.accordion-item {
  background-color: #F2F2F2;
  border-radius: 10px;
  overflow: hidden;
}

.accordion-header {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
}

.accordion-body {
  padding: 10px 25px 30px;
}

/* Сетка видео */
.media-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.video-card {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
  display: block;
}

.video-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.video-card:hover .video-thumb {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.2);
  transition: background 0.3s;
}

.video-card:hover .play-overlay {
  background: rgba(0,0,0,0.4);
}

.play-icon {
  width: 60px;
  height: 60px;
  background-color: #FFCC00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  padding-left: 5px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.announcement h3 {
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 15px;
}

.text-content {
  font-size: 13px;
  line-height: 1.5;
  color: #333;
}

.links {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accent-link {
  color: #333;
  font-weight: 800;
  text-decoration: underline;
  font-size: 14px;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 850px) {
  .competitions-layout { grid-template-columns: 1fr; }
  .sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 10px; }
  .sidebar-btn { min-width: 200px; padding: 15px; font-size: 14px; }
  .media-grid { grid-template-columns: 1fr; }
}
</style>