<template>
  <div class="page-wrapper">
    <main class="partnership-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">Главная</router-link> 
          <span class="sep">›</span>
          <router-link to="/business">Бизнесу</router-link> 
          <span class="sep">›</span>
          <span class="current">Партнёрство</span>
        </nav>

        <h1 class="page-title">Партнёрство</h1>

        <section class="partners-tier">
          <div class="tier-header official-bg">
            <h2>ОФИЦИАЛЬНЫЕ ПАРТНЁРЫ</h2>
          </div>
          <div class="partners-logos">
            <img src="/images/partners/atameken.png" alt="Атамекен" class="partner-logo-lg" />
            <img src="/images/partners/almaty-akimat.png" alt="Акимат Алматы" class="partner-logo-lg" />
            <img src="/images/partners/ministry.png" alt="Министерство" class="partner-logo-lg" />
          </div>
        </section>

        <section class="info-section">
          <div class="info-item">
            <div class="info-title">
              <span class="icon">💼</span>
              <h3>Партнёрство с ENACTUS</h3>
            </div>
            <p>Как спонсор и партнер ENACTUS, Вы будете играть важную роль в продвижении нашей работы по повышению качества жизни в стране, совершенствованию общества, воспитанию будущих деловых лидеров.</p>
          </div>

          <div class="info-item">
            <div class="info-title">
              <span class="icon">🏆</span>
              <h3>Преимущества партнёрства с ENACTUS</h3>
            </div>
            <p>Партнерство с ENACTUS станет ценным дополнением к портфелю социально ответственной компании. В рамках реализации проектов вы сможете контактировать со студентами и решать вместе интересующие вас задачи.</p>
          </div>

          <div class="info-item">
            <div class="info-title">
              <span class="icon">🌱</span>
              <h3>Роль инвестиций в ENACTUS</h3>
            </div>
            <p>Инвестиции в ENACTUS играют важную роль в развитии предпринимательской деятельности и инноваций, которые влияют на жизнь людей и создают лучшее будущее.</p>
          </div>
        </section>

        <section class="contact-card">
          <div class="card-content">
            <div class="form-side">
              <h2 class="form-title">ПРИГЛАШАЕМ К ПАРТНЁРСТВУ!</h2>
              <p class="form-desc">Присоединяйтесь к более чем 550 партнерам по всему миру, которые активно вкладывают средства в предпринимательскую деятельность для устойчивых изменений и развития общества.</p>
              
              <form @submit.prevent="submitForm" class="partnership-form">
                <div class="input-group">
                  <div class="field">
                    <label>Имя</label>
                    <input type="text" placeholder="Text" v-model="form.name" />
                  </div>
                  <div class="field">
                    <label>Номер телефона</label>
                    <div class="phone-input">
                      <span class="flag">🇰🇿 ▾</span>
                      <input type="tel" placeholder="Text" v-model="form.phone" />
                    </div>
                  </div>
                </div>
                <button type="submit" class="submit-btn">Отправить заявку</button>
              </form>
            </div>
            <div class="image-side">
              <img src="/images/partnership-photo.jpg" alt="Enactus Kazakhstan Event" class="side-img" />
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Footer from '@/components/Footer.vue';

const form = reactive({
  name: '',
  phone: ''
});

const submitForm = () => {
  console.log('Данные формы:', form);
  alert('Заявка отправлена!');
};
</script>

<style scoped>
.page-wrapper { background-color: #fff; }
.partnership-page { padding: 40px 0 100px; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* Крошки и заголовок */
.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; }
.page-title { font-size: 32px; font-weight: 800; margin-bottom: 50px; }

/* Плашка партнеров */
.tier-header {
  height: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
.official-bg {
  background: linear-gradient(90deg, #1a1a1a 0%, #1a1a1a 45%, #f4c402 100%);
  color: #f4c402;
}
.tier-header h2 { font-size: 24px; font-weight: 900; }

.partners-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  gap: 30px;
}
.partner-logo-lg { height: 100px; object-fit: contain; }

/* Текстовые блоки */
.info-section { margin-bottom: 80px; }
.info-item { margin-bottom: 40px; }
.info-title { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
.info-title .icon { font-size: 24px; }
.info-title h3 { font-size: 20px; font-weight: 800; margin: 0; }
.info-item p { font-size: 15px; line-height: 1.6; color: #333; max-width: 1000px; }

/* Темная карта с формой */
.contact-card {
  background-color: #232323;
  border-radius: 30px;
  overflow: hidden;
  color: #fff;
}
.card-content { display: flex; align-items: stretch; }
.form-side { flex: 1; padding: 60px; }
.image-side { flex: 0.8; }
.side-img { width: 100%; height: 100%; object-fit: cover; }

.form-title { font-size: 28px; font-weight: 900; color: #f4c402; margin-bottom: 20px; }
.form-desc { font-size: 14px; line-height: 1.5; color: #ccc; margin-bottom: 40px; }

.input-group { display: flex; gap: 20px; margin-bottom: 30px; }
.field { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.field label { font-size: 14px; font-weight: 600; }
.field input {
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 14px;
}
.phone-input {
  display: flex;
  background: #f2f2f2;
  border-radius: 10px;
  align-items: center;
  padding-left: 15px;
}
.phone-input .flag { color: #333; font-size: 14px; margin-right: 10px; }
.phone-input input { flex: 1; background: transparent; }

.submit-btn {
  background-color: #f4c402;
  color: #232323;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s;
}
.submit-btn:hover { transform: translateY(-2px); }

@media (max-width: 992px) {
  .card-content { flex-direction: column; }
  .image-side { order: -1; height: 250px; }
  .partners-logos { flex-wrap: wrap; justify-content: center; }
  .input-group { flex-direction: column; }
}
</style>