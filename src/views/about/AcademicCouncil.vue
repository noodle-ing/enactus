<template>
  <div class="page-wrapper">
    <main class="council-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link>
          <span class="sep">›</span>
          <router-link to="#">О нас</router-link>
          <span class="sep">›</span>
          <span class="current">Академический совет</span>
        </nav>
        <h1 class="page-title">Академический совет</h1>
      </div>

      <div class="carousel-section full-width">
        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-slow">
            <CouncilItem v-for="(type, idx) in [...row1, ...row1]" :key="'r1-'+idx" :type="type" />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-right t-fast">
            <CouncilItem v-for="(type, idx) in [...row2, ...row2]" :key="'r2-'+idx" :type="type" />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-medium">
            <CouncilItem v-for="(type, idx) in [...row3, ...row3]" :key="'r3-'+idx" :type="type" />
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import CouncilItem from '@/components/CouncilItem.vue';

// Формируем разные наборы для визуального разнообразия
const row1 = ['saule', 'askar', 'bakirova', 'galia', 'enlik', 'zhenis', 'zhannet', 'danial', 'yerlan','gulsim','galiya'];
const row2 = ['enlik', 'galia', 'bakirova', 'askar', 'saule', 'zhenis', 'zhannet', 'danial', 'yerlan', 'gulsim','galiya'];
const row3 = ['bakirova', 'saule', 'enlik', 'askar', 'galia', 'zhenis', 'zhannet', 'danial', 'yerlan', 'gulsim','galiya'];
</script>

<style scoped>
/* Стили остаются без изменений из вашего исходного кода */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}

.council-page {
  flex: 1;
  padding: 40px 0 100px;
  overflow-x: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 60px;
  color: #333;
}

.carousel-section.full-width {
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 40px; /* Уменьшил отступ между рядами для компактности */
}

.carousel-track-wrapper {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: max-content;
  gap: 40px;
}

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

.t-slow { animation-duration: 50s; }
.t-medium { animation-duration: 40s; }
.t-fast { animation-duration: 30s; }

.carousel-track-wrapper:hover .carousel-track {
  animation-play-state: paused;
}
</style>