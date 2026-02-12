<template>
  <div class="home-wrapper">
    <section class="hero">
      <div class="hero-image-container">
        <img src="/images/mainpage-picture.jpg" alt="Enactus students" class="bg-img" />
        <div class="overlay"></div>
      </div>

      <div class="hero-content">
        <h1 class="hero-title">
          ENACTUS KAZAKHSTAN <br />
          NATIONAL COMPETITION 2026
        </h1>

        <p class="hero-subtitle-kz" v-html="$t('home.heroSubtitleKz')"></p>

        <div class="countdown-container">
          <div class="timer-item">
            <span class="timer-val">{{ timeLeft.days }}</span>
            <span class="timer-label">{{ $t('home.timer.days') }}</span>
          </div>
          <div class="timer-item">
            <span class="timer-val">{{ timeLeft.hours }}</span>
            <span class="timer-label">{{ $t('home.timer.hours') }}</span>
          </div>
          <div class="timer-item">
            <span class="timer-val">{{ timeLeft.minutes }}</span>
            <span class="timer-label">{{ $t('home.timer.minutes') }}</span>
          </div>
          <div class="timer-item">
            <span class="timer-val">{{ timeLeft.seconds }}</span>
            <span class="timer-label">{{ $t('home.timer.seconds') }}</span>
          </div>
        </div>

        <div class="event-info-bar">
          <div class="info-item">
            <i class="calendar-icon">📅</i>
            <span>{{ $t('home.event.date') }}</span>
          </div>
          <div class="info-divider">|</div>
          <div class="info-item">
            <i class="location-icon">📍</i>
            <span>{{ $t('home.event.location') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <h2 class="about-title">
            {{ $t('home.aboutTitlePart1') }}<span class="yellow-text">{{ $t('home.aboutTitlePart2') }}</span>
          </h2>
          <div class="about-description">
            <p>{{ $t('home.aboutP1') }}</p>
            <p>{{ $t('home.aboutP2') }}</p>
          </div>
        </div>
        <div class="about-visual">
          <div class="image-stack">
            <img src="/images/yellow-geometry.png" alt="decor" class="shape-img">
            <div class="photo-frame">
              <img src="/images/team-photo.jpg" alt="Enactus Team" class="main-photo">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="quote-banner">
        <div class="stats-container">
          <p class="quote-text">{{ $t('home.quote') }}</p>
        </div>
      </div>
      <div class="stats-content-wrapper">
        <div class="stats-container">
          <div class="stats-grid">
            <div class="stats-image-box">
              <img src="/images/students-flags.jpg" alt="Students" class="stats-img">
            </div>
            <div class="stats-cards-grid">
              <div class="stat-card" v-for="stat in ['regions', 'institutions', 'students', 'companies']" :key="stat">
                <span class="stat-num">{{ getStatValue(stat) }}</span>
                <span class="stat-desc">{{ $t(`home.stats.${stat}`) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProjectShowcase />
    <NewsCarousel />
    <EnactusMap />
    <EnactusWorld />
    <PartnersAndForm id="join-form" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Footer from '@/components/Footer.vue';
import EnactusMap from '@/components/Home/EnactusMap.vue';
import EnactusWorld from '@/components/Home/EnactusWorld.vue';
import NewsCarousel from '@/components/Home/NewsCarousel.vue';
import PartnersAndForm from '@/components/Home/PartnersAndForm.vue';
import ProjectShowcase from '@/components/Home/ProjectShowcase.vue';

// --- Timer Logic ---
const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const targetDate = new Date('2026-04-28T09:00:00').getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff > 0) {
    timeLeft.value = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  }
};

let timerInterval;
onMounted(() => {
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
});
onUnmounted(() => clearInterval(timerInterval));

// Хелпер для получения цифр статистики (чтобы не дублировать код в шаблоне)
const getStatValue = (key) => {
  const values = { regions: '20', institutions: '150+', students: '12 000+', companies: '120+' };
  return values[key];
};
</script>

<style scoped>
/* Стили остаются прежними из предыдущего ответа */
.home-wrapper {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  overflow-x: hidden;
  background-color: #fff;
}

.hero {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.hero-image-container { position: absolute; inset: 0; z-index: 1; }

/* Находим этот блок в вашем <style> */
.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* Измените 1.1 на 1.25 или выше для более сильного зума */
  transform: scale(1.6);

  /* Центрируем точку увеличения */
  transform-origin: center;

  /* Добавим плавность, если планируете делать анимацию при наведении */
  transition: transform 0.5s ease;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;
  color: white;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.hero-subtitle-kz {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-weight: 400;
  opacity: 0.9;
}

.countdown-container {
  background-color: #ffc107;
  display: inline-flex;
  gap: 40px;
  padding: 20px 50px;
  border-radius: 12px;
  color: #000;
  margin-bottom: 2.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.timer-item { display: flex; flex-direction: column; align-items: center; }
.timer-val { font-size: 3rem; font-weight: 800; line-height: 1; }
.timer-label { font-size: 0.8rem; font-weight: 700; margin-top: 4px; }

.event-info-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.2rem;
  font-weight: 500;
}

.info-item { display: flex; align-items: center; gap: 10px; }
.info-divider { opacity: 0.5; font-weight: 300; }

/* --- About & Stats --- */
.about-section { padding: 120px 0; }
.about-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; gap: 80px; }
.about-content { flex: 1; }
.about-title { font-size: 2.5rem; font-weight: 900; margin-bottom: 30px; }
.yellow-text { color: #ffd700; }
.about-description p { font-size: 1.1rem; line-height: 1.6; color: #444; margin-bottom: 20px; }
.about-visual { flex: 1; display: flex; justify-content: center; }
.image-stack { position: relative; width: 100%; max-width: 500px; display: flex; justify-content: center; align-items: center; }
.shape-img { position: absolute; width: 100%; z-index: 1; }
.photo-frame { position: relative; z-index: 2; width: 85%; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
.main-photo { width: 100%; display: block; object-fit: cover; }

.stats-section { background-color: #f6f6f6; padding-bottom: 100px; }
.stats-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.quote-banner { background-color: #1e1e1e; color: white; padding: 60px 0; border-radius: 40px 40px 0 0; text-align: center; }
.quote-text { font-size: 1.4rem; font-weight: 600; line-height: 1.4; }
.stats-content-wrapper { padding-top: 60px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 40px; align-items: center; }
.stats-img { width: 100%; border-radius: 20px; }
.stats-cards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.stat-card { background: #fff; padding: 30px 25px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
.stat-num { color: #ffd700; font-size: 3.2rem; font-weight: 900; line-height: 1; }
.stat-desc { color: #666; font-size: 1rem; font-weight: 500; }

@media (max-width: 768px) {
  .hero { height: auto; padding: 100px 0; }
  .countdown-container { gap: 20px; padding: 15px 25px; }
  .timer-val { font-size: 2rem; }
  .event-info-bar { flex-direction: column; gap: 10px; }
  .info-divider { display: none; }
  .about-container, .stats-grid { flex-direction: column; text-align: center; }
  .stats-cards-grid { grid-template-columns: 1fr; }
}
</style>