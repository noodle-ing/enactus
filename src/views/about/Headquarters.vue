<template>
  <div class="page-wrapper">
    <main class="headquarters-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link> 
          <span class="sep">›</span>
          <router-link to="/about">О нас</router-link> 
          <span class="sep">›</span>
          <span class="current">Штаб квартира</span>
        </nav>

        <h1 class="page-title">Штаб квартира</h1>

        <section class="ceo-section">
          <div class="ceo-card">
            <div class="image-wrapper">
              <img src="/images/ceo.jpg" alt="Альбина Ержанова" class="member-photo" />
              <div class="badge ceo-badge">
                <div class="badge-text">
                  <h3 class="badge-name">Альбина Ержанова</h3>
                  <p class="badge-role">CEO & Президент ENACTUS KAZAKHSTAN, доктор философских наук</p>
                </div>
              </div>
            </div>
            
            <div class="ceo-message">
              <h2>Дорогие друзья!</h2>
              <div class="message-content">
                <p>Позвольте от имени национального офиса Enactus Kazakhstan приветствовать Вас и поблагодарить за проявленный интерес к нашей деятельности.</p>
                <p>ENACTUS — это некоммерческая организация, целью которой является повышение уровня жизни населения через бизнес.</p>
                <p>Основная наша деятельность направлена на работу с будущим поколением лидеров. Для нас важно развивать в молодых казахстанцах сознательность, социальную ответственность, талант и умение действовать во имя будущего прогресса нашей страны.</p>
                <p class="signature">С уважением, Альбина Меирбековна Ержанова</p>
              </div>
            </div>
          </div>
        </section>

        <section class="team-grid">
          <div v-for="n in 9" :key="n" class="team-item">
            <div class="image-wrapper">
              <img src="/images/ceo.jpg" alt="Член команды" class="member-photo" />
              <div class="badge member-badge">
                <div class="badge-text">
                  <h3 class="badge-name">Имя Фамилия</h3>
                  <p class="badge-role">{{ getRole(n) }}</p>
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
import Footer from '@/components/Footer.vue';

const getRole = (index) => {
  const roles = [
    'Член академического совета ENACTUS Kazakhstan, программный директор, волонтер',
    'Советник по стратегическому развитию',
    'Главный бухгалтер'
  ];
  return roles[index % roles.length];
};
</script>

<style scoped>
/* Стили без изменений, удалены только упоминания .pin */
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

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 30px;
  color: #999;
}
.breadcrumbs a { text-decoration: none; color: #999; }
.breadcrumbs .current { color: #333; font-weight: 500; }

.page-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 50px;
}

.ceo-card {
  display: flex;
  gap: 60px;
  margin-bottom: 100px;
}

.image-wrapper {
  position: relative;
  width: 340px;
  flex-shrink: 0;
}

.member-photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

.badge {
  position: absolute;
  bottom: 20px;
  left: 15px;
  right: 15px;
  padding: 15px;
  border-radius: 12px;
}

.ceo-badge { background-color: #ffc107; color: #000; }
.member-badge { background-color: #1a1a1a; color: #fff; }

.badge-name { font-size: 15px; font-weight: 800; margin: 0 0 4px 0; }
.badge-role { font-size: 11px; line-height: 1.3; margin: 0; opacity: 0.9; }

.ceo-message h2 { font-size: 24px; font-weight: 800; margin-bottom: 25px; }
.message-content p { font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #444; }
.signature { font-weight: 800; margin-top: 40px; color: #000; }

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
}

@media (max-width: 1024px) {
  .ceo-card { flex-direction: column; align-items: center; }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .team-grid { grid-template-columns: 1fr; }
}
</style>