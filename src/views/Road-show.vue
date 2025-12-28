<template>
  <div class="page-wrapper">
    <main class="roadshow-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link>
          <span class="sep">›</span>
          <span class="no-link">Участникам</span>
          <span class="sep">›</span>
          <span class="current">ROAD SHOW</span>
        </nav>

        <h1 class="page-title">ROAD SHOW</h1>

        <section class="info-intro">
          <div class="info-header">
            <img src="/images/icons/info-icon.png" alt="Info" class="info-icon">
            <h2>Что такое ROAD SHOW?</h2>
          </div>
          <p class="info-text">
            Road Show - выездные тренинги от Национального офиса ENACTUS Kazakhstan, выпускников программы и партнеров
          </p>
        </section>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-value">52</span>
            <span class="stat-label">учебных заведения</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">12</span>
            <span class="stat-label">регионов</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">300+</span>
            <span class="stat-label">участников</span>
          </div>
        </div>

        <a href="#" class="photo-report-btn">
          <span class="link-icon">🔗</span> Фото-отчёт
        </a>

        <div class="photo-gallery">
          <div v-for="(img, index) in galleryImages" :key="index" class="gallery-item">
            <img 
              :src="img" 
              alt="Road Show Event" 
              class="gallery-img"
              @error="(e) => e.target.style.display = 'none'"
            >
            <div class="img-placeholder-text">Фото {{ index + 1 }}</div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';

// Просто назовите свои файлы в папке public/images/ вот так, 
// и они сразу появятся на странице
const galleryImages = [
  '/images/road-1.jpg',
  '/images/road-2.jpg',
  '/images/road-3.jpg',
  '/images/road-4.jpg',
  '/images/road-5.jpg',
  '/images/road-6.jpg'
];
</script>

<style scoped>
.page-wrapper { background-color: #fff; min-height: 100vh; }
.roadshow-page { padding: 40px 0 100px; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Хлебные крошки */
.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; display: flex; align-items: center; }
.breadcrumbs a { text-decoration: none; color: #999; }
.breadcrumbs .sep { margin: 0 8px; }
.current { color: #333; pointer-events: none; }

.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; color: #232323; }

/* Инфо блок */
.info-header { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
.info-icon { width: 24px; height: 24px; }
.info-header h2 { font-size: 20px; font-weight: 800; color: #232323; }
.info-text { font-size: 15px; color: #444; margin-bottom: 40px; }

/* Сетка статистики */
.stats-grid { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 25px; 
  margin-bottom: 40px; 
}

.stat-card {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  border: 1px solid #f2f2f2;
}

.stat-value { font-size: 42px; font-weight: 900; color: #FFCC00; margin-bottom: 5px; }
.stat-label { font-size: 14px; color: #333; font-weight: 600; }

/* Кнопка */
.photo-report-btn {
  display: inline-flex;
  align-items: center;
  background: #FFCC00;
  color: #232323;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 50px;
  transition: transform 0.2s;
}

.photo-report-btn:hover { transform: translateY(-2px); }
.link-icon { margin-right: 10px; }

/* Галерея как в макете */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f0f0f0; /* Цвет заглушки, пока фото нет */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.img-placeholder-text {
  color: #ccc;
  font-size: 12px;
  position: absolute;
  z-index: 1;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  position: relative;
  z-index: 2;
}

.gallery-img:hover { transform: scale(1.05); }

/* Адаптивность */
@media (max-width: 768px) {
  .stats-grid, .photo-gallery { grid-template-columns: 1fr; }
  .stat-card { padding: 20px; align-items: center; text-align: center; }
}
</style>