<template>
  <div class="page-wrapper">
    <main class="teams-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link> 
          <span class="sep">›</span>
          <span>Участникам</span> 
          <span class="sep">›</span>
          <span class="current">Команды</span>
        </nav>

        <div class="header-flex">
          <h1 class="page-title">Команды</h1>
          <button class="create-team-btn">Как создать команду?</button>
        </div>

        <div class="teams-layout">
          <aside class="teams-sidebar">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              :class="['tab-button', { active: activeTab === tab.id }]"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
              <span class="arrow">▶</span>
            </button>
          </aside>

          <section class="teams-content">
            <div 
              v-for="(city, index) in citiesData" 
              :key="index"
              class="accordion-item"
              :class="{ open: openCity === city.name }"
            >
              <div class="accordion-header" @click="toggleAccordion(city.name)">
                <span>{{ city.name }}</span>
                <span class="chevron">{{ openCity === city.name ? '▲' : '▼' }}</span>
              </div>
              
              <div class="accordion-body" v-if="openCity === city.name">
                <ol class="university-list">
                  <li v-for="(uni, uIdx) in city.universities" :key="uIdx">
                    {{ uni }}
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
import Footer from '@/components/Footer.vue';

const activeTab = ref('vuz');
const openCity = ref('Алматы'); // По умолчанию открыт Алматы как на макете

const tabs = [
  { id: 'vuz', label: 'Активные ВУЗы' },
  { id: 'colleges', label: 'Активные колледжи' },
  { id: 'schools', label: 'Активные школы' },
];

const citiesData = [
  { name: 'Астана', universities: ['Университет Астана', 'ЕНУ им. Гумилева'] },
  { 
    name: 'Алматы', 
    universities: [
      'Университет Нархоз',
      'Университет Туран',
      'Satbayev University',
      'Университет Международного Бизнеса имени Кенжегали Сагадиева (UIB)',
      'Казахский Национальный Женский Педагогический Университет',
      'Международный университет информационных технологий',
      'Казахстанско-Британский Технический университет',
      'Казахский Национальный университет им. Аль-Фараби',
      'Almaty Management University',
      'Алматинский университет энергетики и связи им. Г. Даукеева',
      'SDU',
      'Казахская Национальная академия искусств им. Т. Жургенова',
      'Казахский Национальный Медицинский университет',
      'Caspian University'
    ] 
  },
  { name: 'Шымкент', universities: ['ЮКУ им. Ауэзова'] },
  { name: 'Абайская область', universities: ['университет им. Шакарима'] },
  { name: 'Акмолинская область', universities: ['КРУ им. Валиханова'] },
  { name: 'Актюбинская область', universities: ['Жубанов университет'] },
  { name: 'Алматинская область', universities: ['Жетысуский университет'] },
  { name: 'Атырауская область', universities: ['Атырауский университет нефти и газа'] },
];

const toggleAccordion = (cityName) => {
  openCity.value = openCity.value === cityName ? null : cityName;
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

.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; }
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