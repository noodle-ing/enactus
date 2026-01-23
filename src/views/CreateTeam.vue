<template>
  <div class="page-wrapper">
    <main class="create-team-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">›</span>
          <router-link to="/teampage">{{ $t('nav.participants') }}</router-link>
          <span class="sep">›</span>
          <span class="no-link">{{ $t('nav.teams') }}</span>
          <span class="sep">›</span>
          <span class="current">{{ $t('createTeam.title') }}</span>
        </nav>

        <h1 class="page-title">{{ $t('createTeam.title') }}</h1>

        <div class="steps-container">
          <section class="step-card">
            <div class="step-header">
              <span class="step-number">1</span>
              <h2>{{ $t('createTeam.step1.title') }}</h2>
            </div>
            <div class="step-content">
              <p>{{ $t('createTeam.step1.desc') }}</p>
            </div>
          </section>

          <section class="step-card">
            <div class="step-header">
              <span class="step-number">2</span>
              <h2>{{ $t('createTeam.step2.title') }}</h2>
            </div>
            <div class="step-content">
              <p>{{ $t('createTeam.step2.desc') }}</p>
            </div>
          </section>

          <section class="step-card">
            <div class="step-header">
              <span class="step-number">3</span>
              <h2>{{ $t('createTeam.step3.title') }}</h2>
            </div>
            <div class="step-content">
              <p>{{ $t('createTeam.step3.desc') }}</p>
            </div>
          </section>

          <section class="step-card">
            <div class="step-header">
              <span class="step-number">4</span>
              <h2>{{ $t('createTeam.step4.title') }}</h2>
            </div>
            <div class="step-content">
              <p>{{ $t('createTeam.step4.desc') }}</p>
            </div>
          </section>
        </div>

        <div class="application-forms">
          <h3 class="forms-subtitle">{{ $t('createTeam.formsTitle') }}</h3>
          <div class="button-group">
            <a href="#" class="download-btn student-btn">
              <i class="icon-file">📄</i> {{ $t('createTeam.forStudents') }}
            </a>
            <a href="#" class="download-btn school-btn">
              <i class="icon-file">📄</i> {{ $t('createTeam.forSchools') }}
            </a>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.page-wrapper {
  background-color: #fff;
}

.create-team-page {
  padding: 40px 0 100px;
}

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
}

.page-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 50px;
}

/* Контейнер для шагов */
.steps-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 60px;
}

/* Карточка шага */
.step-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 35px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); /* Мягкая тень как на макете */
  border: 1px solid #f2f2f2;
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.step-number {
  background-color: #FFCC00;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 16px;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-header h2 {
  font-size: 20px;
  font-weight: 800;
  color: #232323;
}

.step-content {
  padding-left: 45px; /* Чтобы текст был под заголовком */
}

.step-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}

/* Секция форм */
.application-forms {
  margin-top: 50px;
}

.forms-subtitle {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 25px;
}

.button-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.download-btn {
  display: flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  font-size: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.student-btn {
  background-color: #FFCC00;
  color: #232323;
}

.school-btn {
  background-color: #232323;
  color: #fff;
}

.icon-file {
  margin-right: 10px;
  font-style: normal;
}

@media (max-width: 768px) {
  .page-title { font-size: 26px; }
  .step-card { padding: 25px; }
  .step-header h2 { font-size: 18px; }
  .step-content { padding-left: 0; }
  .button-group { flex-direction: column; }
  .download-btn { justify-content: center; }
}
</style>