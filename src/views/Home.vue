<template>
  <div class="home-wrapper">
    <section class="hero">
      <div class="hero-image-container">
        <img src="/images/mainpage-picture.jpg" alt="Enactus students" class="bg-img" />
        <div class="overlay"></div>
      </div>

      <div class="hero-content">
        <h1 class="hero-title">WE ALL WIN</h1>
        <p class="hero-subtitle">
          Стань частью движения студентов, которые меняют<br>
          будущее Казахстана через предпринимательство.
        </p>
        <button class="hero-button">Присоединиться</button>
      </div>
    </section>

    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <h2 class="about-title">ЧТО ТАКОЕ <span class="yellow-text">ENACTUS?</span></h2>
          <div class="about-description">
            <p>
              ENACTUS — это международная некоммерческая организация, которая объединяет студентов, 
              преподавателей и бизнес-лидеров для развития молодежного предпринимательства.
            </p>
            <p>
              Наша цель — вдохновлять студентов на создание социальных бизнес-проектов, которые решают 
              важные социально-экономические, экологические и гуманитарные проблемы.
            </p>
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
          <p class="quote-text">
            Мы верим, что инвестирование в студентов, которые совершают предпринимательские 
            действия для других, создает лучший мир для всех нас.
          </p>
        </div>
      </div>

      <div class="stats-content-wrapper">
        <div class="stats-container">
          <div class="stats-grid">
            <div class="stats-image-box">
              <img src="/images/students-flags.jpg" alt="Students in Kazakhstan" class="stats-img">
            </div>
            
            <div class="stats-cards-grid">
              <div class="stat-card">
                <span class="stat-num">20</span>
                <span class="stat-desc">регионов Казахстана</span>
              </div>
              <div class="stat-card">
                <span class="stat-num">150+</span>
                <span class="stat-desc">учебных заведений</span>
              </div>
              <div class="stat-card">
                <span class="stat-num">12 000+</span>
                <span class="stat-desc">студентов ежегодно</span>
              </div>
              <div class="stat-card">
                <span class="stat-num">120+</span>
                <span class="stat-desc">компаний</span>
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
  </div>
</template>

<script setup>
import EnactusMap from '@/components/Home/EnactusMap.vue';
import EnactusWorld from '@/components/Home/EnactusWorld.vue';
import NewsCarousel from '@/components/Home/NewsCarousel.vue'
import ProjectShowcase from '@/components/Home/ProjectShowcase.vue'
</script>

<style scoped>
/* --- 1. Общие стили и Hero --- */
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
  height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  color: white;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-button {
  background: #ffd700;
  color: #000;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.2s;
}

/* --- 2. Секция "О нас" --- */
.about-section {
  padding: 120px 0;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 80px;
}

.about-content { flex: 1; }

.about-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 30px;
  color: #1a1a1a;
}

.yellow-text { color: #ffd700; }

.about-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
}

.about-visual { flex: 1; display: flex; justify-content: center; }

.image-stack {
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shape-img {
  position: absolute;
  width: 100%;
  z-index: 1;
}

.photo-frame {
  position: relative;
  z-index: 2;
  width: 85%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.main-photo { width: 100%; display: block; object-fit: cover; }

/* --- 3. Секция Статистика --- */
.stats-section {
  background-color: #f6f6f6;
  padding-bottom: 100px;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.quote-banner {
  background-color: #1e1e1e;
  color: white;
  padding: 60px 0;
  border-radius: 40px 40px 0 0;
  text-align: center;
}

.quote-text {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
  max-width: 1000px;
  margin: 0 auto;
}

.stats-content-wrapper { padding-top: 60px; }

/* Сетка: Картинка слева, Карточки справа */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr; /* Увеличили место под карточки */
  gap: 40px;
  align-items: center;
}

.stats-img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.stats-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: #fff;
  padding: 30px 25px; /* Умеренный padding, чтобы карточка была длиннее */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}

.stat-num {
  color: #ffd700;
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -2px; /* Плотность для больших чисел */
  white-space: nowrap; /* ЗАПРЕТ ПЕРЕНОСА */
}

.stat-desc {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
}

/* --- 4. Адаптивность (Media Queries) --- */

/* Планшеты */
@media (max-width: 992px) {
  .about-container, .stats-grid {
    flex-direction: column;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  
  .about-visual { order: 2; }
  .quote-text { font-size: 1.2rem; }
  
  .stat-card { align-items: center; text-align: center; }
}

/* Мобильные (горизонтальные и большие телефоны) */
@media (max-width: 768px) {
  .about-section { padding: 60px 0; }
  
  .stats-cards-grid { grid-template-columns: 1fr; }
  
  .quote-banner {
    border-radius: 20px 20px 0 0;
    padding: 40px 1rem;
  }
  
  .hero-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

/* Маленькие телефоны */
@media (max-width: 480px) {
  .stat-num { font-size: 2.8rem; }
  .hero-title { font-size: 2.4rem; }
  .about-title { font-size: 2rem; }
}
</style>