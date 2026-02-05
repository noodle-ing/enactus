<template>
  <section class="partners-form-section">
    <div class="container">

      <div class="partners-wrapper">
        <h2 class="section-title">{{ $t('contact.support') }}</h2>
        <div class="marquee-viewport">
          <div class="marquee-content">
            <div class="logo-group" v-for="i in 4" :key="i">
              <img v-for="(img, index) in allLogos" :key="index" :src="img" class="partner-logo" />
            </div>
          </div>
        </div>
      </div>

      <div class="contact-card">
        <div class="card-grid">
          <div class="card-info">
            <h2 class="card-title">{{ $t('contact.cardTitle') }}</h2>
            <p class="card-text">{{ $t('contact.cardText') }}</p>
          </div>

          <div class="contacts-display">
            <div class="contact-item">
              <span class="contact-label">ЭЛЕКТРОННАЯ ПОЧТА:</span>
              <a href="mailto:enactuskaz@gmail.com" class="contact-link">enactuskaz@gmail.com</a>
            </div>

            <div class="contact-item">
              <span class="contact-label">ТЕЛЕФОН:</span>
              <a href="tel:+77057143315" class="contact-link">+7 705 714 3315</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const allLogos = [
  '/images/logo-grand.png',
  '/images/logo-turan.png',
  '/images/logo-kmf.png',
  '/images/logo-kazzinc.jpg',
  '/images/logo-ktcloud.png',
];
</script>

<style scoped>
/* Основная секция и карусель остаются прежними */
.partners-form-section {
  padding: 80px 0 120px;
  background-color: #ffffff;
  overflow: hidden;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 50px;
  text-transform: uppercase;
  color: #1a1a1a;
}

.marquee-viewport {
  width: 100%;
  overflow: hidden;
  display: flex;
  background: white;
  padding: 20px 0 80px;
}

.marquee-content {
  display: flex;
  width: max-content;
  animation: continuous-scroll 40s linear infinite;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 130px;
  padding-right: 130px;
}

.partner-logo {
  height: 120px;
  width: auto;
  object-fit: contain;
}

@keyframes continuous-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}

/* --- ОБНОВЛЕННЫЕ СТИЛИ КАРТОЧКИ --- */
.contact-card {
  background: #1a1a1a;
  border-radius: 40px;
  padding: 80px;
  color: white;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.card-title {
  color: #ffc107;
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 20px;
}

.card-text {
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
  opacity: 0.9;
}

/* Стили для контактов */
.contacts-display {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-label {
  font-size: 14px;
  font-weight: 700;
  color: #ffc107;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-link {
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #ffc107;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .card-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
  .contact-link { font-size: 24px; }
  .contact-card { padding: 50px 40px; }
}

@media (max-width: 768px) {
  .contact-card { padding: 40px 20px; border-radius: 30px; }
  .card-title { font-size: 32px; }
  .partner-logo { height: 70px; }
  .contact-link { font-size: 20px; }
}
</style>