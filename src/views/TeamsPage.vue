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
        </div>

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
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Footer from '@/components/Footer.vue';

const { tm, rt } = useI18n();

// По умолчанию можно оставить Алматы или закрыть все (null)
const openCity = ref('almaty');

// Полный список ключей для всех 20 регионов
const citiesData = [
  { key: 'astana' },
  { key: 'almaty' },
  { key: 'shymkent' },
  { key: 'abay' },
  { key: 'akmola' },
  { key: 'aktobe' },
  { key: 'almatyRegion' },
  { key: 'atyrau' },
  { key: 'vko' },
  { key: 'zhambyl' },
  { key: 'jetysu' },
  { key: 'zko' },
  { key: 'karaganda' },
  { key: 'kostanay' },
  { key: 'kyzylorda' },
  { key: 'mangistau' },
  { key: 'pavlodar' },
  { key: 'sko' },
  { key: 'turkestan' },
  { key: 'ulytau' }
];

const toggleAccordion = (cityKey) => {
  openCity.value = openCity.value === cityKey ? null : cityKey;
};
</script>

<style scoped>
/* Стили остаются прежними, они отлично работают с желтым фоном */
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
  color: inherit;
  transition: color 0.2s;
}

.breadcrumbs a:hover { color: #333; }
.breadcrumbs .sep { margin: 0 8px; }
.no-link { cursor: default; }
.current { color: #333; font-weight: 500; }

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.page-title { font-size: 32px; font-weight: 800; color: #333; }

.create-team-btn {
  background-color: #232323;
  color: #fff;
  padding: 12px 25px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.create-team-btn:hover { background-color: #333; }

.teams-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.accordion-item {
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-header {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  background-color: #FFCC00;
  color: #232323;
  transition: background-color 0.3s;
}

.accordion-header:hover {
  background-color: #e6b800;
}

.chevron {
  font-size: 12px;
  color: #232323;
}

.accordion-body {
  padding: 0 25px 25px 50px;
  background-color: #FFCC00;
  color: #232323;
}

.university-list {
  padding-left: 0;
  margin: 0;
  line-height: 1.8;
  font-size: 14px;
}

.university-list li {
  margin-bottom: 5px;
  color: #232323;
}

@media (max-width: 768px) {
  .header-flex {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}
</style>