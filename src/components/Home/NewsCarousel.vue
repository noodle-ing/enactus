<template>
  <section class="news-section">
    <div class="content-limit">
      <div class="news-header">
        <h2 class="news-title">НОВОСТИ</h2>
        <a href="#" class="all-news-btn">Посмотреть все новости</a>
      </div>

      <div class="carousel-container">
        <button class="nav-btn prev-btn" @click="goPrev">◀</button>
        
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          @swiper="onSwiper"
          :breakpoints="{
            '768': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 }
          }"
          class="news-swiper"
        >
          <swiper-slide v-for="item in newsItems" :key="item.id" class="custom-slide">
            <div class="news-card">
              <div class="news-img-box">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="news-content">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-description">{{ item.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <button class="nav-btn next-btn" @click="goNext">▶</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const modules = [Navigation];
const swiperInstance = ref(null);

// Сохраняем экземпляр swiper при инициализации
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

// Исправленные функции навигации
const goPrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev();
};

const goNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext();
};

const newsItems = [
  {
    id: 1,
    title: 'ENACTUS Kazakhstan National Expo',
    description: 'Во Дворце Независимости в Астане состоялся 30-й юбилейный Кубок молодежного предпринимательства.',
    image: '/images/nationalexpo.jpg'
  },
  {
    id: 2,
    title: 'Казахстан на мировом кубке «ENACTUS World Cup 2025»',
    description: 'По результатам двухдневного достойного выступления команда университета заняла почетное место.',
    image: '/images/enactusworldcup2025.png'
  },
  {
    id: 3,
    title: 'Впервые в Казахстане проходит ENACTUS World Cup 2024',
    description: '2 октября в Астане состоялась церемония открытия Чемпионата мира.',
    image: '/images/enactusworldcup2024.png'
  },
   {
    id: 4,
    title: 'Впервые в Казахстане проходит ENACTUS World Cup 2024',
    description: '2 октября в Астане состоялась церемония открытия Чемпионата мира.',
    image: '/images/enactusworldcup2024.png'
  }
];
</script>

<style scoped>
.news-section {
  background-color: #ffc107;
  padding: 80px 0;
  width: 100%;
  margin: 0;
  /* Скругление только сверху */
  border-radius: 30px 30px 0 0; 
  position: relative;
}

.content-limit {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 70px;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.news-title {
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  color: #1a1a1a;
}

.all-news-btn {
  background: #1a1a1a;
  color: white;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
}

.news-swiper {
  width: 100%;
}

.custom-slide {
  display: flex;
  height: auto;
}

.news-card {
  background: white;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.news-img-box {
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 15px;
}

.news-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1.2;
}

.card-description {
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}

.nav-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #1a1a1a;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  padding: 15px;
  transition: opacity 0.2s;
}

.nav-btn:hover {
  opacity: 0.6;
}

.prev-btn { left: -60px; }
.next-btn { right: -60px; }

@media (max-width: 1024px) {
  .content-limit { padding: 0 50px; }
  .prev-btn { left: -45px; }
  .next-btn { right: -45px; }
}

@media (max-width: 768px) {
  .news-section { border-radius: 0; }
  .nav-btn { display: none; }
  .content-limit { padding: 0 20px; }
}
</style>