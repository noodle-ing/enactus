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

          <form @submit.prevent="handleSubmit" class="card-form">
            <div class="form-inputs">
              <div class="input-group">
                <label>{{ $t('contact.labelName') }}</label>
                <input
                    v-model="form.name"
                    type="text"
                    :placeholder="$t('contact.placeholderName')"
                    required
                    class="custom-input"
                />
              </div>

              <div class="input-group">
                <label>{{ $t('contact.labelPhone') }}</label>
                <div class="phone-input-wrapper">
                  <span class="flag">🇰🇿</span>
                  <input
                      v-model="form.phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                  />
                </div>
              </div>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSending">
              {{ isSending ? $t('contact.btnSending') : $t('contact.btnSubmit') }}
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n'; // Подключаем i18n
import emailjs from '@emailjs/browser';

const { t } = useI18n();

const allLogos = [
  '/images/logo-grand.png',
  '/images/logo-turan.png',
  '/images/logo-kmf.png',
  '/images/logo-kazzinc.jpg',
  '/images/logo-ktcloud.png',
];

const form = reactive({
  name: '',
  phone: ''
});

const isSending = ref(false);

const SERVICE_ID = 'service_xxxxxxx';
const TEMPLATE_ID = 'template_xxxxxxx';
const PUBLIC_KEY = 'your_public_key';

const handleSubmit = () => {
  isSending.value = true;

  const templateParams = {
    user_name: form.name,
    user_phone: form.phone,
    to_email: 'wondefful204@gmail.com'
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        // Переведенное сообщение об успехе
        alert(t('contact.success'));
        form.name = '';
        form.phone = '';
      })
      .catch((err) => {
        console.error('Ошибка EmailJS:', err);
        // Переведенное сообщение об ошибке
        alert(t('contact.error'));
      })
      .finally(() => {
        isSending.value = false;
      });
};
</script>

<style scoped>
/* Основная секция */
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

/* Бесконечная карусель */
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
  transition: transform 0.3s ease;
}

@keyframes continuous-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); }
}

/* --- КАРТОЧКА С ФОРМОЙ --- */
.contact-card {
  background: #1a1a1a;
  border-radius: 40px;
  padding: 60px 80px;
  color: white;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
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
}

.form-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 12px;
  color: #ffffff;
}

/* --- СТИЛИ ИНПУТОВ (БЕЗ СИНЕЙ РАМКИ) --- */
.custom-input, .phone-input-wrapper {
  background: #f0f0f0;
  border-radius: 12px;
  border: 2px solid transparent; /* Чтобы не прыгало при фокусе */
  width: 100%;
  height: 60px;
  transition: all 0.2s ease;
  outline: none !important; /* Убираем синюю обводку браузера */
}

.custom-input {
  padding: 0 20px;
  font-size: 16px;
  color: #333;
}

.phone-input-wrapper {
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: text;
}

.phone-input-wrapper input {
  background: transparent;
  border: none;
  outline: none !important;
  padding: 0 10px;
  flex: 1;
  height: 100%;
  font-size: 16px;
  color: #333;
}

/* Фокус: подсвечиваем всё поле целиком желтым */
.custom-input:focus,
.phone-input-wrapper:focus-within {
  background: #ffffff;
  border-color: #ffc107;
  box-shadow: 0 0 0 1px #ffc107;
}

.flag {
  font-size: 24px;
  pointer-events: none;
}

/* Кнопка */
.submit-btn {
  background: #ffc107;
  color: #1a1a1a;
  border: none;
  padding: 22px 50px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  background: #e6af06;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 193, 7, 0.3);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .card-grid { grid-template-columns: 1fr; gap: 40px; }
  .card-title { font-size: 32px; }
  .contact-card { padding: 40px; }
}

@media (max-width: 768px) {
  .contact-card { padding: 40px 20px; border-radius: 20px; }
  .form-inputs { grid-template-columns: 1fr; }
  .partner-logo { height: 70px; }
}
</style>