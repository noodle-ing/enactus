<template>
  <section class="partners-form-section">
    <div class="container">
      
      <div class="partners-wrapper">
        <h2 class="section-title">НАС ПОДДЕРЖИВАЮТ</h2>
        
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
            <h2 class="card-title">МЫ НУЖНЫ МИРУ!</h2>
            <p class="card-text">
              Стань частью команды, которая действует ради реальных изменений и помогает миру двигаться вперёд.
            </p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="card-form">
            <div class="form-inputs">
              <div class="input-group">
                <label>Имя</label>
                <input type="text" placeholder="Text" required class="custom-input" />
              </div>

              <div class="input-group">
                <label>Номер телефона</label>
                <div class="phone-input-wrapper">
                  <span class="flag">🇰🇿</span>
                  <input type="tel" placeholder="Text" required />
                </div>
              </div>
            </div>
            <button type="submit" class="submit-btn">Хочу участвовать</button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const allLogos = [
  '/images/logo-grand.png',
  '/images/logo-turan.png',
  '/images/logo-kmf.png',
  '/images/logo-kazzinc.jpg',
  '/images/logo-ktcloud.png',
];

const handleSubmit = () => {
  alert('Ваша заявка принята!');
};
</script>

<style scoped>
/* Стили карусели оставляем без изменений */
.partners-form-section { padding: 80px 0 120px; background-color: #ffffff; overflow: hidden; }
.container { max-width: 1240px; margin: 0 auto; padding: 0 20px; }
.section-title { font-size: 32px; font-weight: 900; margin-bottom: 50px; text-transform: uppercase; color: #1a1a1a; }
.marquee-viewport { width: 100%; overflow: hidden; display: flex; background: white; padding: 20px 0 80px; }
.marquee-content { display: flex; width: max-content; animation: continuous-scroll 40s linear infinite; }
.logo-group { display: flex; align-items: center; gap: 130px; padding-right: 130px; }
.partner-logo { height: 120px; width: auto; object-fit: contain; transition: transform 0.3s ease; }
@keyframes continuous-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-25%); } }

/* --- КАРТОЧКА И ФОРМА --- */
.contact-card { background: #1a1a1a; border-radius: 40px; padding: 60px 80px; color: white; }
.card-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: center; }
.card-title { color: #ffc107; font-size: 42px; font-weight: 900; margin-bottom: 20px; }
.card-text { font-size: 18px; line-height: 1.5; color: #ffffff; }

.form-inputs { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px; }
.input-group label { display: block; font-size: 14px; margin-bottom: 12px; color: #ffffff; }

/* --- ГЛАВНЫЕ ИСПРАВЛЕНИЯ ТУТ --- */

/* Общие стили для инпутов и обертки телефона */
.custom-input, .phone-input-wrapper {
  background: #f0f0f0;
  border-radius: 12px;
  border: 2px solid transparent; /* Заранее выделяем место под рамку */
  width: 100%;
  height: 60px;
  transition: all 0.2s ease;
  outline: none !important; /* Убираем стандартный синий контур браузера */
}

/* Специфические стили для текстового инпута */
.custom-input {
  padding: 0 20px;
  font-size: 16px;
  color: #333;
}

/* Специфические стили для обертки телефона */
.phone-input-wrapper {
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: text;
}

.phone-input-wrapper input {
  background: transparent;
  border: none;
  outline: none !important; /* Убираем синюю рамку у самого инпута */
  padding: 0 10px;
  flex: 1;
  height: 100%;
  font-size: 16px;
  color: #333;
}

/* ЭФФЕКТ ФОКУСА (Заменяем синий на желтый и подсвечиваем все поле) */
.custom-input:focus, 
.phone-input-wrapper:focus-within {
  background: #ffffff;
  border-color: #ffc107; /* Желтая рамка Enactus */
  box-shadow: 0 0 0 1px #ffc107; /* Делаем рамку четче без размытия */
}

.flag { font-size: 24px; pointer-events: none; }

/* Кнопка */
.submit-btn { background: #ffc107; color: #1a1a1a; border: none; padding: 22px 50px; border-radius: 50px; font-weight: 800; font-size: 16px; cursor: pointer; transition: all 0.3s ease; }
.submit-btn:hover { background: #e6af06; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255, 193, 7, 0.3); }

/* Адаптивность */
@media (max-width: 1024px) { .card-grid { grid-template-columns: 1fr; gap: 40px; } .card-title { font-size: 32px; } }
@media (max-width: 768px) { .contact-card { padding: 40px 20px; border-radius: 20px; } .form-inputs { grid-template-columns: 1fr; } }
</style>