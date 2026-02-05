<template>
  <section class="news-section">
    <div class="content-limit">
      <div class="news-header">
        <h2 class="news-title">{{ $t('news.title') }}</h2>
        <router-link to="/news" class="all-news-btn">
          {{ $t('news.viewAll') }}
        </router-link>
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
          <swiper-slide v-for="item in localizedNewsItems" :key="item.id" class="custom-slide">
            <a :href="item.link" target="_blank" rel="noopener noreferrer" class="news-card-link">
              <div class="news-card">
                <div class="news-img-box">
                  <img :src="item.image" :alt="item.title" />
                </div>
                <div class="news-content">
                  <h3 class="card-title">{{ item.title }}</h3>
                  <p class="card-description">{{ item.description }}</p>
                </div>
              </div>
            </a>
          </swiper-slide>
        </swiper>

        <button class="nav-btn next-btn" @click="goNext">▶</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { useI18n } from 'vue-i18n';
import 'swiper/css';

const { t } = useI18n();

const modules = [Navigation];
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const goPrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev();
};

const goNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext();
};

// Данные с вашими ссылками, но СТАРЫМИ путями к картинкам
const localizedNewsItems = computed(() => [
  {
    id: 1,
    title: 'Победители Enactus Kazakhstan National Expo представят республику на мировой арене',
    description: 'Официальный отчет о победителях национального кубка предпринимательства.',
    image: '/images/nationalexpo.jpg', // Старая картинка
    link: 'https://primeminister.kz/ru/news/pobediteli-kubka-molodezhnogo-predprinimatelstva-enactus-kazakhstan-national-predstavyat-respubliku-na-mirovoy-arene-30000'
  },
  {
    id: 2,
    title: 'Заботливый бизнес: как молодые предприниматели меняют мир',
    description: 'Как социальные проекты студентов Enactus превращаются в реальный бизнес.',
    image: '/images/enactusworldcup2025.png', // Старая картинка
    link: 'https://forbes.kz/articles/zabotlivyy-biznes-kak-molodye-predprinimateli-programmy-enactus-menyayut-mir-9ddd3a'
  },
  {
    id: 3,
    title: 'Министерство науки и высшего образования РК: Enactus Kazakhstan',
    description: 'Поддержка молодежных инициатив на государственном уровне.',
    image: '/images/enactusworldcup2024.png', // Старая картинка
    link: 'https://www.gov.kz/memleket/entities/sci/press/news/details/846381?lang=ru'
  },
  {
    id: 4,
    title: 'Бизнес помогает развитию молодежного IT-предпринимательства',
    description: 'Интеграция IT-решений в современные студенческие стартапы.',
    image: '/images/news4.jpeg', // Старая картинка
    link: 'https://tengrinews.kz/internet/biznes-pomogaet-razvitiyu-molodejnogo-it-predprinimatelstva-484767/'
  }
]);
</script>

<style scoped>
.news-section {
  background-color: #ffc107;
  padding: 80px 0;
  width: 100%;
  margin: 0;
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
  transition: all 0.3s;
}

.all-news-btn:hover {
  background: #333;
  transform: scale(1.05);
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

.news-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;
}

.news-card-link:hover {
  transform: translateY(-8px);
}

.news-card {
  background: white;
  border-radius: 20px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  min-height: 400px;
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
}

.prev-btn { left: -60px; }
.next-btn { right: -60px; }

@media (max-width: 1024px) {
  .content-limit { padding: 0 50px; }
  .prev-btn { left: -45px; }
  .next-btn { right: -45px; }
}

@media (max-width: 768px) {
  .nav-btn { display: none; }
  .content-limit { padding: 0 20px; }
}
</style>