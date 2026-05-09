<template>
  <div class="page-wrapper">
    <main class="news-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">›</span>
          <span class="current">{{ $t('newsPage.breadcrumbs.current') }}</span>
        </nav>

        <h1 class="page-title">{{ $t('newsPage.title') }}</h1>

        <section
            class="top-banner"
            @click="openLink('https://forbes.kz/articles/kak-enactus-kazakhstan-obedinyaet-studentov-i-biznes-dlya-resheniya-problem-obshestva-78a62b?ysclid=mno94zh1o970340751')"
        >
          <div class="banner-content">
            <div class="banner-brand">
              <img src="/images/forbs.png" alt="Forbes" class="forbes-logo" />
            </div>
            <div class="banner-text">
              <h3>{{ $t('newsPage.banner.title') }}</h3>
              <p>{{ $t('newsPage.banner.subtitle') }}</p>
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
import { useI18n } from 'vue-i18n';
import Footer from '@/components/Footer.vue';

const { t } = useI18n();

const currentPage = ref(1);
const itemsPerPage = 9;

// Функция для обработки битых картинок
const handleImageError = (e) => {
  e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800';
};

// Полный список новостей на основе ваших 40 ссылок
const allNews = [
  {
    title: 'Enactus Kazakhstan: в Алматы определили лучших молодых предпринимателей',
    excerpt: 'Победителем World Cup League стала команда Astana IT University, которая представит Казахстан на Enactus World Cup 2026 в Сан-Паулу.',
    image: '/images/aitu-medical-ai.jpg',
    url: 'https://total.kz/ru/news/biznes/enactus_kazakhstan_v_almati_opredelili_luchshih_molodih_predprinimatelei_date_2026_05_06',
    source: 'Total.kz'
  },
  {
    title: 'Финал Enactus Kazakhstan National Expo 2021 состоится 18 июня',
    excerpt: 'Студенты и школьники со всего Казахстана соревнуются за титул национального чемпиона Enactus Kazakhstan National Expo 2021.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    url: 'https://inbusiness.kz/ru/last/final-enactus-kazakhstan-national-expo-2021-sostoitsya-18-iyunya',
    source: 'Inbusiness.kz'
  },
  {
    title: 'Национальный кубок студенческого предпринимательства прошел в столице',
    excerpt: 'В рамках Enactus Kazakhstan National Expo 2021 прошёл Национальный кубок студенческого предпринимательства, стартапов и инноваций.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
    url: 'https://tengrinews.kz/kazakhstan_news/natsionalnyiy-kubok-studencheskogo-predprinimatelstva-440972/',
    source: 'Tengrinews.kz'
  },
  {
  title: 'Казахстанские студенты вышли в полуфинал чемпионата мира Enactus',
  excerpt: 'Команда Медицинского университета Астана вошла в число полуфиналистов мирового чемпионата Enactus.',
  image: 'https://img.forbes.kz/forbes-photobank/media/2024-06-10/e484cf3c-b149-48fa-b8fc-7a28969a8fb3.webp',
  url: 'https://forbes.kz/articles/kazahstanskie_studentyi_vyishli_v_polufinal_chempionata_mira_enactus',
  source: 'Forbes.kz'
  },
  {
    title: 'Завершение сезона Enactus Kazakhstan',
    excerpt: 'Итоги очередного сезона программы Enactus Kazakhstan и представленных молодежных проектов.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
    url: 'https://ecolomist.kz/zavershenie-sezona-enactus-kazakhstan/',
    source: 'Ecolomist'
  },
  {
  title: 'Казахстанские студенты вышли в полуфинал Enactus World Cup 2022',
  excerpt: 'Команда КазАТУ им. С. Сейфуллина вошла в топ‑16 команд мира на Enactus World Cup 2022.',
  image: 'https://cdn.nur.kz/images/1200x675/a3ad4fb4beebede2.jpeg?version=1',
  url: 'https://www.nur.kz/society/1997590-kazahstanskie-studenty-vyshli-v-polufinal-enactus-world-cup-2022/',
  source: 'Nur.kz'
  },
  {
    title: 'Казахстанские студенты стали полуфиналистами Enactus World Cup 2022',
    excerpt: 'Казахстанская команда Enactus по итогам отборочного тура вышла в полуфинал мирового чемпионата.',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800',
    url: 'https://inbusiness.kz/ru/last/kazahstanskie-studenty-stali-polufinalistami-enactus-world-cup-2022',
    source: 'Inbusiness.kz'
  },
  {
    title: 'Enactus Kazakhstan National Expo 2022: итоги сезона',
    excerpt: 'Национальный кубок школьного и студенческого предпринимательства Enactus Kazakhstan по итогам 2022 года.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800',
    url: 'https://ecolomist.kz/enactus-kazakhstan-national-expo-2022/',
    source: 'Ecolomist'
  },
  {
    title: 'Национальный кубок школьного и студенческого предпринимательства Enactus Kazakhstan',
    excerpt: 'Масштабный национальный кубок школьного и студенческого предпринимательства в Казахстане.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800',
    url: 'https://dknews.kz/ru/dk-life/235076-nacionalnyy-kubok-shkolnogo-i-studencheskogo',
    source: 'DKNews'
  },
  {
    title: 'Молодежный бизнес‑форум Enactus Kazakhstan Business Collaboration Forum прошёл в Алматы',
    excerpt: 'Бизнес‑форум, объединивший студентов, предпринимателей и партнёров программы Enactus Kazakhstan.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
    url: 'https://almaty.atameken.kz/ru/news/48313-molodezhnyj-biznes-forum-enactuskazakhstanbusinesscollaborationforumproshel-v-almaty',
    source: 'Atameken'
  },
  {
    title: 'Enactus Kazakhstan и развитие молодёжного туризма',
    excerpt: 'Материал о роли Enactus Kazakhstan и партнёров в развитии туризма и молодежных инициатив.',
    image: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=800',
    url: 'https://qaztourism.kz/ru/press-center/all/832/',
    source: 'Qaztourism'
  },
  {
    title: 'Стали известны победители Национального кубка Enactus Kazakhstan National Competition 2023',
    excerpt: 'Forbes.kz рассказывает о победителях Национального кубка Enactus Kazakhstan 2023.',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800',
    url: 'https://forbes.kz/articles/stali_izvestnyi_pobediteli_natsionalnogo_kubka_enactus_kazakhstan_national_competition_2023',
    source: 'Forbes.kz'
  },
  {
    title: 'Enactus Kazakhstan National Expo 2023 в вузах Казахстана',
    excerpt: 'О проведении мероприятий Enactus Kazakhstan National Expo 2023 на базе казахстанских университетов.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    url: 'https://www.gov.kz/memleket/entities/sci/press/news/details/549025?lang=ru&',
    source: 'Gov.kz'
  },
  {
    title: 'Enactus Kazakhstan National Expo 2023 состоится в Астане',
    excerpt: 'Анонс проведения Enactus Kazakhstan National Expo 2023 в столице Казахстана.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
    url: 'https://www.zakon.kz/press-relizy/6391564-Enactus-Kazakhstan-National-Expo-2023-sostoitsya-v-astane.html',
    source: 'Zakon.kz'
  },
  {
    title: 'Сквер Enactus: новый общественный проект',
    excerpt: 'Открытие сквера Enactus как примера социального предпринимательства и городской трансформации.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800',
    url: 'https://kz.kursiv.media/2023-04-25/skvr-enactus/',
    source: 'Kursiv'
  },
  {
    title: 'Enactus Kazakhstan: партнёрство с Astana Development Center',
    excerpt: 'Совместные инициативы Enactus Kazakhstan и региональных партнёров по развитию молодежного предпринимательства.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800',
    url: 'https://adc.com.kz/press-center/news/258/?',
    source: 'ADC'
  },
  {
    title: 'Enactus Kazakhstan National Expo: поддержка молодежного предпринимательства',
    excerpt: 'Материал о проведении и значении кубка молодежного предпринимательства Enactus Kazakhstan.',
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=800',
    url: 'https://www.gov.kz/memleket/entities/sci/press/news/details/859718?lang=ru&',
    source: 'Gov.kz'
  },
  {
    title: 'Победители кубка молодежного предпринимательства представят Казахстан на мировой арене',
    excerpt: 'Команды‑победители Enactus Kazakhstan National получают право представить страну на мировом кубке.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    url: 'https://www.inform.kz/ru/pobediteli-kubka-molodezhnogo-predprinimatelstva-predstavyat-kazahstan-namirovoy-arene-f4d893',
    source: 'Inform.kz'
  },
  {
    title: 'Победители кубка молодежного предпринимательства Enactus Kazakhstan National представят республику на мировой арене',
    excerpt: 'Официальный материал о победителях Enactus Kazakhstan National от Правительства РК.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    url: 'https://primeminister.kz/ru/news/pobediteli-kubka-molodezhnogo-predprinimatelstva-enactus-kazakhstan-national-predstavyat-respubliku-na-mirovoy-arene-30000',
    source: 'Primeminister.kz'
  },
  {
    title: 'Астанинский медстартап с ИИ представит Казахстан на мировом кубке Enactus',
    excerpt: 'Проект на базе искусственного интеллекта выиграл национальный финал Enactus Kazakhstan.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
    url: 'https://atameken.kz/ru/news/55275-astaninskij-medstartap-s-ii-predstavit-kazahstan-na-mirovom-kubke-enactusv-bangkoke',
    source: 'Atameken'
  },
  {
    title: 'Казахстанские студенты вошли в топ‑16 лучших команд на Enactus World Cup 2025',
    excerpt: 'Казахстанская команда стала одной из 16 сильнейших на мировом кубке Enactus World Cup 2025.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
    url: 'https://total.kz/ru/news/ekonomika_sobitiya/kazahstanskie_studenti_voshli_v_top16_luchshih_komand_na_enactus_world_cup_2025_date_2025_10_06',
    source: 'Total.kz'
  },
  {
    title: 'Enactus открывает новые возможности',
    excerpt: 'Как участие в Enactus открывает новые образовательные и карьерные возможности для молодежи Казахстана.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    url: 'https://kazpravda.kz/n/enactus-otkryvaet-novye-vozmozhnosti/',
    source: 'Kazpravda'
  },
  {
    title: 'В Алматы стартовал новый сезон молодежных бизнес‑проектов Enactus',
    excerpt: 'Открытие нового сезона проектов Enactus Kazakhstan в Алматы.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    url: 'https://vecher.kz/ru/article/v-almaty-startoval-novyi-sezon-molodejnyh-biznes-proektov-enactus.html',
    source: 'Vecher.kz'
  },
  {
    title: 'Как Enactus Kazakhstan объединяет студентов и бизнес для решения проблем общества',
    excerpt: 'Платформа Enactus Kazakhstan как точка пересечения студентов, предпринимателей и социальных инициатив.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    url: 'https://forbes.kz/articles/kak-enactus-kazakhstan-obedinyaet-studentov-i-biznes-dlya-resheniya-problem-obshestva-78a62b',
    source: 'Forbes.kz'
  },
  {
    title: 'Enactus Kazakhstan отмечает 30‑летие программы в Казахстане',
    excerpt: 'Юбилейный сезон крупнейшей предпринимательской сети для молодежи в Казахстане.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    url: 'https://total.kz/ru/news/ekonomika_sobitiya/enactus_kazakhstan_otmechaet_30letie_programmi_v_kazahstane_date_2025_12_22',
    source: 'Total.kz'
  },
  {
    title: 'Enactus Kazakhstan как платформа взаимодействия студентов и бизнеса',
    excerpt: 'Как Enactus формирует экосистему сотрудничества между студентами, университетами и бизнес‑сообществом.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
    url: 'https://forbes.kz/articles/enactus_kazakhstan_kak_platforma_vzaimodeystviya_studentov_i_biznesa',
    source: 'Forbes.kz'
  },
  {
    title: 'Молодежный бизнес‑форум Enactus Kazakhstan Business Collaboration Forum прошёл в Алматы',
    excerpt: 'Форум, на котором обсудили перспективы развития молодежного предпринимательства и проектов Enactus.',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800',
    url: 'https://almaty.atameken.kz/ru/news/48313-molodezhnyj-biznes-forum-enactuskazakhstanbusinesscollaborationforumproshel-v-almaty',
    source: 'Atameken'
  },
  {
    title: 'Официальный старт сезона бизнес‑проектов Enactus Kazakhstan дан на форуме в Алматы',
    excerpt: 'На форуме в Алматы объявлен официальный старт нового сезона Enactus Kazakhstan.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    url: 'https://vecher.kz/ru/article/ofisialnyi-start-sezona-biznes-proektov-enactus-kazakhstan-dan-na-forume-v-almaty.html',
    source: 'Vecher.kz'
  },
  {
    title: 'Три лучших цифровых стартапа получат гранты от Beeline Казахстан',
    excerpt: 'Beeline Казахстан поддерживает цифровые стартапы молодых предпринимателей программы Enactus.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800',
    url: 'https://forbes.kz/articles/tri_luchshih_tsifrovyih_startapa_poluchat_grantyi_ot_beeline_kazahstan?fbclid=PAb21jcAPnDGpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacxTK0lf-P9wNVSnRx1_CRL0gBPVX7G5P8DDF9NgQXmG4CJ0OrdQK_1IT5S_Q_aem_Abx8DX5WzSw-Cqmo9go1Ww',
    source: 'Forbes.kz'
  },
  {
    title: 'Enactus Kazakhstan Business Summer Camp 2024 стартовал в Восточно‑Казахстанской области',
    excerpt: 'Летний лагерь для будущих предпринимателей в рамках программы Enactus Kazakhstan.',
    image: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=800',
    url: 'https://altainews.kz/ru/novosti/56216-enactus-kazakhstan-business-summer-camp-2024-startoval-v-vostochno-kazahstanskoj-oblasti-video.html',
    source: 'AltaiNews'
  },
  {
    title: 'Заботливый бизнес: как молодые предприниматели программы Enactus меняют мир',
    excerpt: 'Истории молодых предпринимателей Enactus, которые создают социально ответственный бизнес.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    url: 'https://forbes.kz/articles/zabotlivyy-biznes-kak-molodye-predprinimateli-programmy-enactus-menyayut-mir-9ddd3a',
    source: 'Forbes.kz'
  },
  {
    title: 'Enactus Kazakhstan Business Summer Camp: школа молодежного предпринимательства',
    excerpt: 'О реализации образовательных лагерей и программ Enactus Kazakhstan при поддержке государственных органов.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    url: 'https://www.gov.kz/memleket/entities/sci/press/news/details/846381?lang=ru',
    source: 'Gov.kz'
  },
  {
    title: 'Развитие молодежного предпринимательства в рамках программы Enactus Kazakhstan',
    excerpt: 'О поддержке молодежного предпринимательства и проектах Enactus в учебных заведениях страны.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    url: 'https://www.gov.kz/memleket/entities/sci/press/news/details/768139?lang=ru',
    source: 'Gov.kz'
  },
  {
    title: 'Будущее предпринимательства Казахстана',
    excerpt: 'Взгляд молодых лидеров и экспертов на будущее предпринимательства в Казахстане.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800',
    url: 'https://np.kz/news/obshhestvo/x/budushhee-predprinimatelstva-kazahstana',
    source: 'Новое Поколение'
  },
  {
    title: 'Enactus Kazakhstan Business Collaboration Forum пройдёт в Алматы',
    excerpt: 'Анонс крупного форума Enactus Kazakhstan Business Collaboration Forum в Алматы.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800',
    url: 'https://businessfm.kz/business/enactus-kazakhstan-business-collaboration-forum-projdyot-v-almaty',
    source: 'Business FM'
  }
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
