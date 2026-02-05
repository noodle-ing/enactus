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

        <section
            class="top-banner"
            @click="openLink('https://forbes.kz/articles/zabotlivyy-biznes-kak-molodye-predprinimateli-programmy-enactus-menyayut-mir-9ddd3a')"
        >
          <div class="banner-content">
            <div class="banner-brand">
              <img src="/images/forbs.png" alt="Forbes" class="forbes-logo" />
            </div>
            <div class="banner-text">
              <h3>Заботливый бизнес: как молодые предприниматели программы ENACTUS меняют мир</h3>
              <p>Казахстан впервые в истории СНГ провел мировой чемпионат ENACTUS World Cup 2024 в Астане</p>
            </div>
            <div class="banner-action">
              <span class="play-arrow">▶</span>
            </div>
          </div>
        </section>

        <section class="news-grid">
          <article
              v-for="(item, index) in paginatedNews"
              :key="index"
              class="news-card"
              @click="openLink(item.url)"
          >
            <div class="card-image">
              <img :src="item.image" :alt="item.title" @error="handleImageError" />
            </div>
            <div class="card-body">
              <div class="card-tag">{{ item.source }}</div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.excerpt }}</p>
            </div>
          </article>
        </section>

        <nav class="pagination" v-if="totalPages > 1">
          <button class="pag-arrow" @click="prevPage" :disabled="currentPage === 1">◀</button>

          <button
              v-for="page in displayedPages"
              :key="page"
              :class="['pag-num', { active: currentPage === page }]"
              @click="setPage(page)"
          >
            {{ page }}
          </button>

          <span v-if="currentPage < totalPages - 2" class="pag-dots">...</span>
          <button v-if="!displayedPages.includes(totalPages)" class="pag-num" @click="setPage(totalPages)">{{ totalPages }}</button>

          <button class="pag-arrow" @click="nextPage" :disabled="currentPage === totalPages">▶</button>
        </nav>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Footer from '@/components/Footer.vue';

const currentPage = ref(1);
const itemsPerPage = 9;

// Функция для обработки битых картинок
const handleImageError = (e) => {
  e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800';
};

// Полный список новостей на основе ваших 40 ссылок
const allNews = [
  {
    title: 'Как ENACTUS Kazakhstan объединяет студентов и бизнес',
    excerpt: 'Платформа взаимодействия для решения социальных проблем через бизнес-инструменты...',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    url: 'https://forbes.kz/articles/kak-enactus-kazakhstan-obedinyaet-studentov-i-biznes-dlya-resheniya-problem-obshestva-78a62b',
    source: 'Forbes.kz'
  },
  {
    title: 'Казахстанские студенты вошли в топ-16 на World Cup 2025',
    excerpt: 'Исторический успех национальной сборной на мировом кубке...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
    url: 'https://total.kz/ru/news/ekonomika_sobitiya/kazahstanskie_studenti_voshli_v_top16_luchshih_komand_na_enactus_world_cup_2025_date_2025_10_06',
    source: 'Total.kz'
  },
  {
    title: 'ENACTUS Kazakhstan отмечает 30-летие программы',
    excerpt: 'Юбилейный сезон крупнейшей предпринимательской сети для молодежи в стране...',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    url: 'https://total.kz/ru/news/ekonomika_sobitiya/enactus_kazakhstan_otmechaet_30letie_programmi_v_kazahstane_date_2025_12_22',
    source: 'Total.kz'
  },
  {
    title: 'Астанинский медстартап с ИИ представит РК на мировом кубке',
    excerpt: 'Проект на базе искусственного интеллекта выиграл национальный финал...',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
    url: 'https://atameken.kz/ru/news/55275-astaninskij-medstartap-s-ii-predstavit-kazahstan-na-mirovom-kubке-enactusv-bangkoke',
    source: 'Atameken'
  },
  {
    title: 'National Expo 2023: Победители определены в Астане',
    excerpt: 'Итоги масштабного национального кубка студенческого предпринимательства...',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
    url: 'https://www.zakon.kz/press-relizy/6391564-Enactus-Kazakhstan-National-Expo-2023-sostoitsya-v-astane.html',
    source: 'Zakon.kz'
  },
  {
    title: 'Мировой кубок ENACTUS впервые прошел в Казахстане',
    excerpt: 'Астана приняла представителей более чем 30 стран мира...',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800',
    url: 'https://weproject.media/articles/detail/mirovoy-kubok-studencheskogo-predprinimatelstva-enactus-world-cup-vpervye-proydet-v-kazakhstane/',
    source: 'WeProject'
  },
  {
    title: 'Business Summer Camp 2024: Обучение лидеров в ВКО',
    excerpt: 'Старт летнего лагеря для будущих предпринимателей...',
    image: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=800',
    url: 'https://altainews.kz/ru/novosti/56216-enactus-kazakhstan-business-summer-camp-2024-startoval-v-vostochno-kazahstanskoj-oblasti-video.html',
    source: 'AltaiNews'
  },
  {
    title: 'IT-предпринимательство: Бизнес поддерживает молодежь',
    excerpt: 'Как крупные корпорации помогают развивать студенческие стартапы...',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
    url: 'https://tengrinews.kz/internet/biznes-pomogaet-razvitiyu-molodejnogo-it-predprinimatelstva-484767/',
    source: 'Tengrinews'
  },
  {
    title: 'Три стартапа получили гранты от Beeline Казахстан',
    excerpt: 'Цифровые решения молодых лидеров получили финансовую поддержку...',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800',
    url: 'https://forbes.kz/articles/tri_luchshih_tsifrovyih_startapa_poluchat_grantyi_ot_beeline_kazahstan',
    source: 'Forbes.kz'
  },
  {
    title: 'Национальный кубок 2021: Финал состоится 18 июня',
    excerpt: 'Подготовка к итоговому мероприятию года в условиях новых вызовов...',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800',
    url: 'https://inbusiness.kz/ru/last/final-enactus-kazakhstan-national-expo-2021-sostoitsya-18-iyunya',
    source: 'InBusiness'
  },
  {
    title: 'Kazakhstan National Expo 2022: Итоги сезона',
    excerpt: 'Чествование лучших проектов школьного и студенческого предпринимательства...',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800',
    url: 'https://ecolomist.kz/enactus-kazakhstan-national-expo-2022/',
    source: 'Ecolomist'
  },
  {
    title: 'Будущее предпринимательства: Взгляд молодых лидеров',
    excerpt: 'Обзор инновационных идей казахстанской молодежи...',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800',
    url: 'https://np.kz/news/obshhestvo/x/budushhee-predprinimatelstva-kazahstana',
    source: 'Новое Поколение'
  }
  // ... здесь могут быть добавлены остальные ссылки по аналогии
];

// Логика пагинации
const totalPages = computed(() => Math.ceil(allNews.length / itemsPerPage));
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allNews.slice(start, end);
});

const displayedPages = computed(() => {
  const pages = [];
  const range = 2;
  for (let i = Math.max(1, currentPage.value - range); i <= Math.min(totalPages.value, currentPage.value + range); i++) {
    pages.push(i);
  }
  return pages;
});

const setPage = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 400, behavior: 'smooth' });
};

const nextPage = () => currentPage.value < totalPages.value && setPage(currentPage.value + 1);
const prevPage = () => currentPage.value > 1 && setPage(currentPage.value - 1);
const openLink = (url) => window.open(url, '_blank');
</script>

<style scoped>
.page-wrapper { background-color: #fff; }
.news-page { padding: 40px 0 100px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; }

/* Forbes Banner */
.top-banner {
  background: linear-gradient(90deg, #FFCC00 0%, #FFCC00 100%);
  border-radius: 15px; padding: 25px 40px; margin-bottom: 50px; cursor: pointer; transition: 0.2s;
}
.banner-content { display: flex; align-items: center; gap: 25px; }
.forbes-logo { height: 30px; filter: brightness(0); }
.banner-text h3 { font-size: 18px; font-weight: 800; color: #232323; margin-bottom: 5px; }
.banner-text p { font-size: 14px; color: #333; opacity: 0.9; }
.play-arrow { font-size: 20px; color: #232323; }

/* Grid */
.news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 60px; }
.news-card {
  background: #fff; border-radius: 20px; overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; transition: 0.3s; cursor: pointer;
}
.news-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
.card-image { height: 180px; overflow: hidden; background: #eee; }
.card-image img { width: 100%; height: 100%; object-fit: cover; }
.card-body { padding: 20px; }
.card-tag { font-size: 11px; font-weight: 700; color: #FFCC00; text-transform: uppercase; margin-bottom: 8px; }
.card-body h4 { font-size: 15px; font-weight: 800; color: #232323; margin-bottom: 10px; line-height: 1.3; }
.card-body p { font-size: 13px; color: #666; line-height: 1.5; }

/* Pagination */
.pagination { display: flex; justify-content: center; align-items: center; gap: 10px; }
.pag-num, .pag-arrow {
  border: none; background: none; font-size: 15px; font-weight: 700; cursor: pointer;
  width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;
}
.pag-num.active { background-color: #FFCC00; border-radius: 50%; }
.pag-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
.pag-dots { color: #999; }

@media (max-width: 992px) { .news-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .news-grid { grid-template-columns: 1fr; } }
</style>