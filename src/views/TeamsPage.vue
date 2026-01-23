<template>
  <div class="page-wrapper">
    <main class="teams-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">&nbsp;›&nbsp;</span>
          <span class="no-link">{{ $t('breadcrumbs.participants') }}</span>
          <span class="sep">&nbsp;›&nbsp;</span>
          <span class="current">{{ $t('teams.title') }}</span>
        </nav>

        <div class="header-flex">
          <h1 class="page-title">{{ $t('teams.title') }}</h1>
          <router-link to="/createteam" class="create-team-btn">
            {{ $t('teams.howToCreate') }}
          </router-link>
        </div>

        <div class="teams-layout">
          <aside class="teams-sidebar">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                :class="['tab-button', { active: activeTab === tab.id }]"
                @click="activeTab = tab.id"
            >
              {{ $t(`teams.tabs.${tab.id}`) }}
              <span class="arrow">▶</span>
            </button>
          </aside>

          <section class="teams-content">
            <div
                v-for="(city, index) in citiesData"
                :key="index"
                class="accordion-item"
                :class="{ open: openCity === city.key }"
            >
              <div class="accordion-header" @click="toggleAccordion(city.key)">
                <span>{{ $t(`teams.cities.${city.key}.name`) }}</span>
                <span class="chevron">{{ openCity === city.key ? '▲' : '▼' }}</span>
              </div>

              <div class="accordion-body" v-if="openCity === city.key">
                <ol class="university-list">
                  <li v-for="(uni, uIdx) in $tm(`teams.cities.${city.key}.universities`)" :key="uIdx">
                    {{ rt(uni) }}
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Footer from '@/components/Footer.vue';

const { t, tm, rt } = useI18n();

const activeTab = ref('vuz');
const openCity = ref('almaty'); // Используем ключ 'almaty' вместо строки 'Алматы'

const tabs = [
  { id: 'vuz' },
  { id: 'colleges' },
  { id: 'schools' },
];

// Список ключей городов. Сами данные (названия и вузы) выносим в i18n.js
const citiesData = [
  { key: 'astana' },
  { key: 'almaty' },
  { key: 'shymkent' },
  { key: 'abay' },
  { key: 'akmola' },
  { key: 'aktobe' },
  { key: 'almatyRegion' },
  { key: 'atyrau' },
];

const toggleAccordion = (cityKey) => {
  openCity.value = openCity.value === cityKey ? null : cityKey;
};
</script>

<style scoped>
.page-wrapper { background-color: #fff; }
.teams-page { padding: 40px 0 100px; }

.container {
  max-width: 1100px;
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
  color: inherit; /* Ссылка берет серый цвет родителя */
  transition: color 0.2s;
}

.breadcrumbs a:hover {
  color: #333; /* При наведении на главную она чуть темнеет */
}

.breadcrumbs .sep { 
  margin: 0 8px; 
}

/* Стили для некликабельных сегментов */
.no-link {
  cursor: default;
}

.current { 
  color: #333; /* Текущая страница выделена темным цветом */
  font-weight: 500;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.page-title { font-size: 32px; font-weight: 800; }

.create-team-btn {
  background-color: #232323;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  /* Добавляем эти свойства для корректного отображения ссылки как кнопки */
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.create-team-btn:hover {
  background-color: #333; /* Небольшой эффект при наведении */
}

/* Сетка страницы */
.teams-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

/* Сайдбар */
.teams-sidebar {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tab-button {
  height: 90px;
  border-radius: 10px;
  border: none;
  background-color: #939598; /* Серый как на макете */
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
}

.tab-button.active {
  background-color: #FFCC00;
  color: #232323;
  box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
}

.arrow { font-size: 12px; }

/* Аккордеон */
.teams-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-item {
  background-color: #F2F2F2;
  border-radius: 10px;
  overflow: hidden;
}

.accordion-header {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
}

.accordion-body {
  padding: 0 25px 25px 50px;
  background-color: #F2F2F2;
}

.university-list {
  padding-left: 0;
  margin: 0;
  line-height: 1.8;
  font-size: 14px;
  color: #333;
}

.university-list li {
  margin-bottom: 5px;
}

@media (max-width: 850px) {
  .teams-layout { grid-template-columns: 1fr; }
  .teams-sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 10px; }
  .tab-button { min-width: 200px; height: 60px; font-size: 14px; }
}
</style>