<template>
  <div class="page-wrapper">
    <main class="camp-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link>
          <span class="sep">›</span>
          <span class="no-link">Участникам</span>
          <span class="sep">›</span>
          <span class="current">ENACTUS CAMP</span>
        </nav>

        <h1 class="page-title">ENACTUS CAMP / Акселерационный бизнес-лагерь</h1>

        <div class="photo-grid-top">
          <div class="photo-main">
            <img src="/images/camp-1.jpg" alt="Enactus Camp Group" class="content-img">
          </div>
          <div class="photo-main">
            <img src="/images/camp-2.jpg" alt="Enactus Camp Activity" class="content-img">
          </div>
        </div>

        <section class="info-section">
          <div class="info-header">
            <img src="/images/icons/info-icon.png" alt="Info" class="info-icon">
            <h2>Что такое ENACTUS KAZAKHSTAN BUSINESS CAMPS?</h2>
          </div>
          <div class="info-body">
            <p>Это интенсивное обучение и тренинги, место рождения самых интересных и успешных бизнес-проектов. Цель молодежного бизнес-лагеря: развитие студенческого предпринимательства в Казахстане на основе международного опыта ENACTUS с активным участием зарубежных студентов и вовлечением менторов из сферы бизнеса, обмен опытом в сфере социального предпринимательства.</p>
            
            <div class="program-list">
              <p>В программе:</p>
              <ul>
                <li>интенсивная акселерация стартап-проектов;</li>
                <li>бизнес-консультации от менторов;</li>
                <li>экспертов казахстанского и международного бизнеса;</li>
                <li>систематизация знаний;</li>
                <li>business-networking;</li>
                <li>контакты для успешной карьеры;</li>
                <li>интерактивы для профессионального и личностного развития;</li>
                <li>мастер-классы от партнеров Enactus Kazakhstan;</li>
                <li>получение практических навыков и компетенций;</li>
                <li>личные истории успеха выпускников программы.</li>
              </ul>
            </div>
          </div>
        </section>

        <div class="features-grid">
          <div class="feature-card dark">
            <div class="card-header">
              <span class="check-icon">✓</span>
              <h3>Образование</h3>
            </div>
            <p>В программе бизнес-лагеря вас ждут тренинги и мастер-классы от партнеров программы ENACTUS, консультации от менторов-экспертов казахстанского и международного бизнеса, различные интерактивы для профессионального и личностного развития.</p>
          </div>

          <div class="feature-card dark">
            <div class="card-header">
              <span class="check-icon">✓</span>
              <h3>Нетворкинг</h3>
            </div>
            <p>Знакомство с участниками программы из других команд; Общение с известными деятелями культуры, бизнеса и государства; Business-networking — контакты для успешной карьеры.</p>
          </div>

          <div class="feature-card dark">
            <div class="card-header">
              <span class="check-icon">✓</span>
              <h3>Отдых и оздоровление</h3>
            </div>
            <p>Это успешно достигается благодаря природным лечебно-оздоровительным факторам: соблюдение режима дня, сосновый лес возле санатория, воздух, насыщенный лечебными фитонцидами, озеро с минеральной водой.</p>
          </div>

          <div class="feature-card dark">
            <div class="card-header">
              <span class="check-icon">✓</span>
              <h3>Воспоминания</h3>
            </div>
            <p>В ENACTUS все очень душевно и искренне. Каждый вечер проводятся тематические вечера, что скрасит образовательный процесс. Участники также продолжают тесное общение и после лагеря.</p>
          </div>
        </div>

        <div class="media-grid-bottom">
          <div class="video-item"><div class="play-btn">▶</div></div>
          <div class="video-item"><div class="play-btn">▶</div></div>
          <div class="video-item"><div class="play-btn">▶</div></div>
        </div>

        <a href="#" class="report-btn">
          <span class="link-icon">🔗</span> Отчет с зимнего лагеря 2025
        </a>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
// 2. ДОБАВЛЕН ИМПОРТ КОМПОНЕНТА
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
/* Ваши стили остаются без изменений */
.page-wrapper { background-color: #fff; }
.camp-page { padding: 40px 0 100px; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; display: flex; align-items: center; }
.breadcrumbs a { text-decoration: none; color: #999; }
.breadcrumbs .sep { margin: 0 8px; }
.current { color: #333; pointer-events: none; }

.page-title { font-size: 28px; font-weight: 800; margin-bottom: 40px; }

.photo-grid-top { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 50px; }
.content-img { width: 100%; border-radius: 15px; display: block; height: 350px; object-fit: cover; }

.info-section { margin-bottom: 50px; }
.info-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
.info-icon { 
  width: 24px; 
  height: 24px; 
  object-fit: contain; 
  flex-shrink: 0;
}
.info-body p { font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px; }
.program-list ul { list-style: none; padding: 0; }
.program-list li { font-size: 14px; line-height: 1.5; padding-left: 20px; position: relative; margin-bottom: 5px; }
.program-list li::before { content: "—"; position: absolute; left: 0; }

.features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 50px; }
.feature-card.dark { background: #232323; color: #fff; padding: 30px; border-radius: 15px; }
.card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
.check-icon { color: #FFCC00; font-weight: 800; font-size: 18px; }
.card-header h3 { color: #FFCC00; font-size: 18px; font-weight: 800; }
.feature-card p { font-size: 13px; line-height: 1.5; opacity: 0.9; }

.media-grid-bottom { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; }
.video-item { background: #D9D9D9; aspect-ratio: 16/10; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.play-btn { font-size: 40px; color: rgba(0,0,0,0.2); }

.report-btn { 
  display: inline-flex; 
  align-items: center; 
  background: #FFCC00; 
  color: #232323; 
  padding: 12px 25px; 
  border-radius: 25px; 
  text-decoration: none; 
  font-weight: 700; 
  font-size: 14px;
}
.link-icon { margin-right: 10px; }

@media (max-width: 768px) {
  .photo-grid-top, .features-grid, .media-grid-bottom { grid-template-columns: 1fr; }
  .content-img { height: 250px; }
}
</style>