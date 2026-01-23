<template>
  <div class="page-wrapper">
    <main class="headquarters-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('nav.footerHome') }}</router-link>
          <span class="sep">›</span>
          <router-link to="/about">{{ $t('nav.about') }}</router-link>
          <span class="sep">›</span>
          <span class="current">{{ $t('headquarters.title') }}</span>
        </nav>

        <h1 class="page-title">{{ $t('headquarters.title') }}</h1>

        <section class="ceo-section">
          <div class="ceo-card">
            <div class="image-wrapper">
              <img src="/images/erzhanova.jpg" :alt="$t('headquarters.ceoName')" class="member-photo" />
              <div class="badge ceo-badge">
                <div class="badge-text">
                  <h3 class="badge-name">{{ $t('headquarters.ceoName') }}</h3>
                  <p class="badge-role">{{ $t('headquarters.ceoRole') }}</p>
                </div>
              </div>
            </div>

            <div class="ceo-message">
              <h2>{{ $t('headquarters.ceoGreeting') }}</h2>
              <div class="message-content">
                <p>{{ $t('headquarters.ceoText1') }}</p>
                <p>{{ $t('headquarters.ceoText2') }}</p>
                <p>{{ $t('headquarters.ceoText3') }}</p>
                <p class="signature">{{ $t('headquarters.signature') }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="team-grid">
          <div v-for="(member, index) in localizedTeam" :key="index" class="team-item">
            <div class="image-wrapper">
              <img :src="member.photo" :alt="member.name" class="member-photo" />
              <div class="badge member-badge">
                <div class="badge-text">
                  <h3 class="badge-name">{{ member.name }}</h3>
                  <p class="badge-role">{{ member.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Footer from '@/components/Footer.vue';

const { t } = useI18n();

// Вычисляемый список команды, реагирующий на смену языка
const localizedTeam = computed(() => [
  {
    name: t('headquarters.members.randall.name'),
    role: t('headquarters.members.randall.role'),
    photo: '/images/randall bruins.jpg'
  },
  {
    name: t('headquarters.members.aizhan.name'),
    role: t('headquarters.members.aizhan.role'),
    photo: '/images/Ayzhan Aubakirova.JPG'
  },
  {
    name: t('headquarters.members.aruzhan.name'),
    role: t('headquarters.members.aruzhan.role'),
    photo: '/images/karimova aruzan.jpg'
  },
  {
    name: t('headquarters.members.albina.name'),
    role: t('headquarters.members.albina.role'),
    photo: '/images/Albina Aysamutdinova.jpg'
  },
  {
    name: t('headquarters.members.zhasulan.name'),
    role: t('headquarters.members.zhasulan.role'),
    photo: '/images/Zhasulan.JPG'
  }
]);
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.headquarters-page {
  flex: 1;
  padding: 40px 0 100px;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Навигация */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 30px;
  color: #999;
}
.breadcrumbs a { text-decoration: none; color: #999; transition: 0.2s; }
.breadcrumbs a:hover { color: #333; }
.breadcrumbs .current { color: #333; font-weight: 500; }

.page-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 50px;
  color: #1a1a1a;
}

/* Карточка CEO */
.ceo-card {
  display: flex;
  gap: 60px;
  margin-bottom: 100px;
  align-items: flex-start;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 340px;
  flex-shrink: 0;
}

.member-photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  background-color: #f5f5f5; /* Цвет пока грузится фото */
}

/* Бейджи с именами поверх фото */
.badge {
  position: absolute;
  bottom: 20px;
  left: 15px;
  right: 15px;
  padding: 15px;
  border-radius: 12px;
  backdrop-filter: blur(4px);

  /* НОВЫЕ СВОЙСТВА */
  height: 90px;           /* Фиксированная высота для всех окошек */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрируем текст по вертикали */
  overflow: hidden;        /* Если текст очень длинный, он не выйдет за границы */
}

.ceo-badge {
  background-color: rgba(255, 193, 7, 0.95); /* Желтый Enactus */
  color: #000;
}
.member-badge {
  background-color: rgba(26, 26, 26, 0.9); /* Темный */
  color: #fff;
}

.badge-name {
  font-size: 15px;
  font-weight: 800;
  margin: 0 0 4px 0;
  /* Ограничиваем имя одной строкой, если нужно */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.badge-role {
  font-size: 11px;
  line-height: 1.3;
  margin: 0;
  opacity: 0.9;
  /* Позволяем роли занимать максимум 3 строки */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Текст приветствия */
.ceo-message h2 { font-size: 24px; font-weight: 800; margin-bottom: 25px; color: #1a1a1a; }
.message-content p { font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #444; }
.signature { font-weight: 800; margin-top: 40px; color: #000; border-top: 1px solid #eee; padding-top: 20px; }

/* Сетка команды */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
}

.team-item {
  width: 100%;
  transition: transform 0.3s ease;
}

.team-item:hover {
  transform: translateY(-5px);
}

.team-item .image-wrapper {
  width: 100%;
  max-width: 100%; /* В сетке берем всю ширину колонки */
}

/* Адаптивность */
@media (max-width: 1024px) {
  .ceo-card { flex-direction: column; align-items: center; text-align: center; gap: 40px; }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .signature { margin-top: 20px; }
}

@media (max-width: 600px) {
  .team-grid { grid-template-columns: 1fr; }
  .page-title { font-size: 28px; }
}
</style>