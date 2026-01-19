<template>
  <div class="page-wrapper">
    <main class="council-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link> 
          <span class="sep">›</span>
          <router-link to="/about">О нас</router-link> 
          <span class="sep">›</span>
          <span class="current">Академический совет</span>
        </nav>

        <h1 class="page-title">Академический совет</h1>
      </div>

      <div class="carousel-section full-width">
        
        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-slow">
            <CouncilItem v-for="n in 12" :key="'r1-'+n" :type="n % 2 === 0 ? 'saule' : 'askar'" />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-right t-fast">
            <CouncilItem v-for="n in 12" :key="'r2-'+n" :type="n % 2 === 0 ? 'askar' : 'saule'" />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-medium">
            <CouncilItem v-for="n in 12" :key="'r3-'+n" :type="n % 2 === 0 ? 'saule' : 'askar'" />
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
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}

.council-page {
  flex: 1;
  padding: 40px 0 100px;
  background-color: #ffffff;
  overflow-x: hidden; 
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumbs {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
.breadcrumbs a { text-decoration: none; color: #999; }
.sep { margin: 0 8px; }

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

/* Бесконечный цикл */
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

.t-slow { animation-duration: 65s; }
.t-medium { animation-duration: 50s; }
.t-fast { animation-duration: 35s; }

.carousel-track-wrapper:hover .carousel-track {
  animation-play-state: paused;
}
</style>