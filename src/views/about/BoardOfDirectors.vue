<template>
  <div class="page-wrapper">
    <main class="board-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link> 
          <span class="sep">›</span>
          <router-link to="/about">О нас</router-link> 
          <span class="sep">›</span>
          <span class="current">Совет директоров</span>
        </nav>

        <h1 class="page-title">Совет директоров</h1>
      </div>

      <div class="carousel-section full-width">
        
        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-slow">
            <DirectorItem v-for="n in 12" :key="'r1-'+n" :type="n % 2 === 0 ? 'batalov' : 'erzhanova'" />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-right t-fast">
            <DirectorItem v-for="n in 12" :key="'r2-'+n" :type="n % 2 === 0 ? 'erzhanova' : 'batalov'" />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-medium">
            <DirectorItem v-for="n in 12" :key="'r3-'+n" :type="n % 2 === 0 ? 'batalov' : 'erzhanova'" />
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import DirectorItem from '@/components/DirectorItem.vue';
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}

.board-page {
  flex: 1;
  padding: 40px 0 80px;
  background-color: #ffffff;
  /* Скрываем выходящие за край карусели на уровне страницы */
  overflow-x: hidden; 
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Хлебные крошки */
.breadcrumbs {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
.breadcrumbs a { 
  text-decoration: none; 
  color: #999; 
  transition: color 0.3s;
}
.breadcrumbs a:hover { color: #ffc107; }
.sep { margin: 0 8px; }

.page-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 60px;
  color: #333;
}

/* Карусель на весь экран */
.carousel-section.full-width {
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.carousel-track-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  width: max-content;
  gap: 40px;
}

/* Анимации бесконечного скролла */
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}

@keyframes scrollRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.t-left { animation: scrollLeft linear infinite; }
.t-right { animation: scrollRight linear infinite; }

/* Скорости анимации */
.t-slow { animation-duration: 60s; }
.t-medium { animation-duration: 50s; }
.t-fast { animation-duration: 40s; }

/* Остановка при наведении */
.carousel-track-wrapper:hover .carousel-track {
  animation-play-state: paused;
}

/* Убираем лишние отступы у Footer, если они есть */
:deep(footer) {
  margin-top: 0;
}
</style>