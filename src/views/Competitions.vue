<template>
  <div class="page-wrapper">
    <main class="competitions-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link>
          <span class="sep">›</span>
          <span class="current">Соревнования</span>
        </nav>

        <h1 class="page-title">Соревнования</h1>

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
                    <div class="video-placeholder">
                      <div class="play-icon">▶</div>
                    </div>
                    <div class="video-placeholder">
                      <div class="play-icon">▶</div>
                    </div>
                  </div>

                  <div class="announcement">
                    <h3>{{ year.announcementTitle }}</h3>
                    <div class="text-content" v-html="year.description"></div>
                    
                    <div class="links">
                      <a href="#" class="accent-link">Результаты</a>
                      <a href="#" class="accent-link">Фото</a>
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
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

const activeType = ref('world-cup');
const openYear = ref('2024');

const competitionTypes = [
  { id: 'world-cup', label: 'WORLD CUP' },
  { id: 'national-expo', label: 'NATIONAL EXPO' },
  { id: 'school-championship', label: 'Республиканский чемпионат школьного предпринимательства' },
];

const yearsData = [
  { id: '2025', title: 'WORLD CUP 2025', announcementTitle: '', description: '' },
  { 
    id: '2024', 
    title: 'WORLD CUP 2024', 
    announcementTitle: 'ENACTUS WORLD CUP 2024 ANNOUNCEMENT',
    description: `
      <p>Впервые в Казахстане состоится мировой кубок студенческого предпринимательства ENACTUS...</p>
      <p>Все бизнес-проекты студентов ENACTUS направлены на достижение 17 Целей устойчивого развития ООН...</p>
      <p>ENACTUS World Cup — это мероприятие, которое проводится ежегодно с 2001 года...</p>
    `
  },
  { id: '2023', title: 'WORLD CUP 2023', announcementTitle: '', description: '' },
  { id: '2022', title: 'WORLD CUP 2022', announcementTitle: '', description: '' },
  { id: '2021', title: 'WORLD CUP 2021', announcementTitle: '', description: '' },
  { id: '2020', title: 'WORLD CUP 2020', announcementTitle: '', description: '' },
  { id: '2019', title: 'WORLD CUP 2019', announcementTitle: '', description: '' },
];

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

/* Хлебные крошки */
.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; }
.breadcrumbs a { text-decoration: none; color: inherit; }
.current { color: #333; pointer-events: none; }

.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; }

/* Сетка контента */
.competitions-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  align-items: start;
}

/* Боковое меню */
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

/* Аккордеон */
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

/* Сетка медиа (плейсхолдеры видео) */
.media-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.video-placeholder {
  background-color: #C4C4C4;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.play-icon {
  font-size: 40px;
  color: rgba(0,0,0,0.3);
}

/* Текст внутри аккордеона */
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

.text-content p { margin-bottom: 15px; }

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

/* Анимация появления */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Мобильная адаптация */
@media (max-width: 850px) {
  .competitions-layout { grid-template-columns: 1fr; }
  .sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 10px; }
  .sidebar-btn { min-width: 200px; padding: 15px; font-size: 14px; }
  .media-grid { grid-template-columns: 1fr; }
}
</style>