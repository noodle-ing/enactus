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
            <DirectorItem 
              v-for="(member, idx) in doubleMembers" 
              :key="'row1-' + idx" 
              :type="member.type" 
            />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-slow" style="animation-delay: -40s; margin-left: -500px;">
            <DirectorItem 
              v-for="(member, idx) in doubleMembers" 
              :key="'row2-' + idx" 
              :type="member.type" 
            />
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track t-left t-slow" style="animation-delay: -80s; margin-left: -1000px;">
            <DirectorItem 
              v-for="(member, idx) in shuffledMembers" 
              :key="'row3-' + idx" 
              :type="member.type" 
            />
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Footer from '@/components/Footer.vue';
import DirectorItem from '@/components/DirectorItem.vue';

// Список всех участников
const boardMembers = [
  { type: 'batalov' },
  { type: 'erzhanova' },
  { type: 'abdykulova' },
  { type: 'akbalayeva' },
  { type: 'nurkatov' },
  { type: 'kiyassova' },
  { type: 'khojanazarov' },
  { type: 'nabiyev' },
  { type: 'sagdiev' },
  { type: 'myngbay' },
  { type: 'zhukov' },
  { type: 'khamzi' },
  { type: 'aitmaganbet' },
  { type: 'telemtayev' },
  { type: 'kaygorotseva' },
  { type: 'bekmaganbetov' },
  { type: 'ilyassov' },
  { type: 'zhussupekov' },
  { type: 'mukashev' },
  { type: 'umiryaev' },
  { type: 'zhussupov' },
  { type: 'mukhamadiyeva' },
  { type: 'bitemirov' },
  { type: 'lineitsev' },
  { type: 'toleuov' },
  { type: 'naisbecov' },
  { type: 'balgozhina' },
  { type: 'gussein' },
  { type: 'ilyas' },
  { type: 'mukhametov' },
  { type: 'pershin' },
  { type: 'idrissov' },
  { type: 'badina' },
  { type: 'mukushev' }
];

// Дублирование для бесшовного скролла
const doubleMembers = computed(() => [...boardMembers, ...boardMembers]);

// Разворот массива для визуального отличия третьего ряда
const shuffledMembers = computed(() => {
  return [...boardMembers, ...boardMembers].reverse();
});
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
  position: relative;
  will-change: transform;
}

/* Анимация движения только в одну сторону для синхронности */
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}

.t-left { 
  animation: scrollLeft linear infinite; 
}

/* Единая скорость для всех рядов */
.t-slow { 
  animation-duration: 120s; 
}

.carousel-track-wrapper:hover .carousel-track {
  animation-play-state: paused;
}

:deep(footer) {
  margin-top: 0;
}
</style>