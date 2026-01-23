<template>
  <div class="page-wrapper">
    <main class="roadshow-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">&nbsp;›&nbsp;</span>
          <span class="no-link">{{ $t('breadcrumbs.participants') }}</span>
          <span class="sep">&nbsp;›&nbsp;</span>
          <span class="current">ROAD SHOW</span>
        </nav>

        <h1 class="page-title">ROAD SHOW</h1>

        <section class="info-intro">
          <div class="info-header">
            <img src="/images/icons/info-icon.png" alt="Info" class="info-icon">
            <h2>{{ $t('roadshow.whatIs.header') }}</h2>
          </div>
          <p class="info-text">
            {{ $t('roadshow.whatIs.desc') }}
          </p>
        </section>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-value">52</span>
            <span class="stat-label">{{ $t('roadshow.stats.institutions') }}</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">12</span>
            <span class="stat-label">{{ $t('roadshow.stats.regions') }}</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">300+</span>
            <span class="stat-label">{{ $t('roadshow.stats.participants') }}</span>
          </div>
        </div>

        <a href="#" class="photo-report-btn">
          <span class="link-icon">🔗</span> {{ $t('roadshow.photoReport') }}
        </a>

        <div class="photo-gallery">
          <a
              v-for="(item, index) in galleryItems"
              :key="index"
              :href="item.reelsUrl"
              target="_blank"
              class="gallery-item"
          >
            <img
                :src="item.imgSrc"
                :alt="item.title"
                class="gallery-img"
                @error="(e) => e.target.style.display = 'none'"
            >
            <div class="img-overlay">
              <span class="play-icon">▶</span>
              <p class="overlay-text">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';

// Массив объектов остается прежним, так как названия городов (Almaty, Taraz) интернациональны
const galleryItems = [
  {
    title: 'Almaty 2025',
    imgSrc: '/images/road-1.jpg',
    reelsUrl: 'https://www.instagram.com/reel/DKzVmGTsbYp/?igsh=OWw3NWFweGpmbno3'
  },
  {
    title: 'Kyzylorda 2025',
    imgSrc: '/images/road-2.jpg',
    reelsUrl: 'https://www.instagram.com/reel/DJ4VJxjsQru/?igsh=ZHZqY3J4ZWdtbWNt'
  },
  {
    title: 'Oskemen 2025',
    imgSrc: '/images/road-3.jpg',
    reelsUrl: 'https://www.instagram.com/reel/DQ_PfNnjJYv/?igsh=MWJoNnB3cW8wd2FiZw=='
  },
  {
    title: 'Taraz 2024',
    imgSrc: '/images/road-4.jpg',
    reelsUrl: 'https://www.instagram.com/reel/DC_UWA-O8fg/?igsh=MWp1MDZqMjlvNmFkYQ=='
  },
  {
    title: 'Oskemen 2023',
    imgSrc: '/images/road-5.jpg',
    reelsUrl: 'https://www.instagram.com/reel/CxpubEJs0DR/?igsh=aTMwcm9vZmJza3g5'
  },
  {
    title: 'Kostanay 2023',
    imgSrc: '/images/road-6.jpg',
    reelsUrl: 'https://www.instagram.com/reel/Cxf0v4dMkiu/?igsh=OWdmemIxcW9lNjZl'
  }
];
</script>
<style scoped>
.page-wrapper { background-color: #fff; min-height: 100vh; }
.roadshow-page { padding: 40px 0 100px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }

.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; display: flex; align-items: center; }
.breadcrumbs a { text-decoration: none; color: #999; }
.breadcrumbs .sep { margin: 0 8px; }
.current { color: #333; pointer-events: none; }

.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; color: #232323; }

.info-header { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
.info-icon { width: 24px; height: 24px; }
.info-header h2 { font-size: 20px; font-weight: 800; color: #232323; }
.info-text { font-size: 15px; color: #444; margin-bottom: 40px; }

.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 40px; }
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

.photo-report-btn {
  display: inline-flex;
  align-items: center;
  background: #FFCC00;
  color: #232323;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 50px;
}

/* ГАЛЕРЕЯ */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f0f0f0;
  position: relative;
  display: block; /* Ссылка как блок */
  text-decoration: none;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Эффект при наведении */
.img-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.gallery-item:hover .img-overlay {
  opacity: 1;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.play-icon {
  font-size: 40px;
  margin-bottom: 8px;
}

.overlay-text {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 0 10px;
}

@media (max-width: 768px) {
  .stats-grid, .photo-gallery { grid-template-columns: 1fr; }
}
</style>