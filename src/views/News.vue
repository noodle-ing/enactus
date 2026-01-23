<template>
  <div class="page-wrapper">
    <main class="news-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link>
          <span class="sep">›</span>
          <span class="current">Новости</span>
        </nav>

        <h1 class="page-title">Новости</h1>

        <section class="top-banner">
          <div class="banner-content">
            <div class="banner-brand">
              <img src="/images/forbs.png" alt="Forbes" class="forbes-logo" />
            </div>
            <div class="banner-text">
              <h3>Заботливый бизнес: как молодые предприниматели программы ENACTUS меняют мир</h3>
              <p>Казахстан впервые в своей истории и в истории СНГ провел мировой чемпионат ENACTUS World Cup 2024 в Астане</p>
            </div>
            <div class="banner-action">
              <span class="play-arrow">▶</span>
            </div>
          </div>
        </section>

        <section class="news-grid">
          <article v-for="(item, index) in newsItems" :key="index" class="news-card">
            <div class="card-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="card-body">
              <h4>{{ item.title }}</h4>
              <p>{{ item.excerpt }}</p>
            </div>
          </article>
        </section>

        <nav class="pagination">
          <button class="pag-arrow">◀</button>
          <button
            v-for="page in [1, 2, 3, 4]"
            :key="page"
            :class="['pag-num', { active: currentPage === page }]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          <span class="pag-dots">...</span>
          <button class="pag-num">10</button>
          <button class="pag-arrow">▶</button>
        </nav>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

const currentPage = ref(1);

const newsItems = Array(9).fill({
  title: 'Впервые в Казахстане проходит ENACTUS World Cup 2024',
  excerpt: '2 октября в Астане состоялась церемония открытия Чемпионата мира «Enactus World Cup...»',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop'
});
</script>

<style scoped>
.page-wrapper { background-color: #fff; }
.news-page { padding: 40px 0 100px; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; }
.breadcrumbs a { text-decoration: none; color: inherit; }
.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; }

/* Forbes Banner */
.top-banner {
  background: linear-gradient(90deg, #FFCC00 0%, #FFCC00 100%);
  border-radius: 15px;
  padding: 25px 40px; /* Немного уменьшил внутренние отступы */
  margin-bottom: 50px;
  cursor: pointer;
  transition: transform 0.2s;
}

.top-banner:hover { transform: scale(1.005); }

.banner-content {
  display: flex;
  align-items: center;
  gap: 25px;
}

.banner-brand {
  min-width: 120px; /* Контейнер для логотипа */
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.forbes-logo { 
  height: 30px; /* Уменьшенный размер логотипа */
  width: auto;
  object-fit: contain;
  filter: brightness(0); 
}

.banner-text h3 {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 5px;
  color: #232323;
  line-height: 1.3;
}

.banner-text p {
  font-size: 14px;
  color: #333;
  margin: 0;
  opacity: 0.9;
}

.banner-action {
  margin-left: auto;
}

.play-arrow { font-size: 20px; color: #232323; }

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.news-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
  transition: 0.3s;
}

.news-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }

.card-image { height: 200px; overflow: hidden; }
.card-image img { width: 100%; height: 100%; object-fit: cover; }

.card-body { padding: 25px; }
.card-body h4 {
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.4;
  color: #232323;
}

.card-body p {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.pag-num, .pag-arrow {
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #232323;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.pag-num.active {
  background-color: #FFCC00;
  border-radius: 50%;
}

.pag-num:hover:not(.active) { color: #FFCC00; }
.pag-dots { color: #999; }

@media (max-width: 992px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
  .banner-content { flex-direction: column; text-align: center; }
  .banner-brand { min-width: auto; }
  .banner-action { margin-left: 0; margin-top: 10px; }
}

@media (max-width: 600px) {
  .news-grid { grid-template-columns: 1fr; }
  .forbes-logo { height: 25px; }
}
</style>