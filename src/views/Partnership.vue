<template>
  <div class="page-wrapper">
    <main class="partnership-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">&nbsp;›&nbsp;</span>
          <router-link to="/business">{{ $t('breadcrumbs.business') }}</router-link>
          <span class="sep">&nbsp;›&nbsp;</span>
          <span class="current">{{ $t('partnership.title') }}</span>
        </nav>

        <h1 class="page-title">{{ $t('partnership.title') }}</h1>

        <section class="partners-hero">
          <div class="tier-header partners-bg">
            <h2>{{ $t('partnership.officialPartners') }}</h2>
          </div>
          <div class="partners-grid">
            <img src="/images/logo-atameken.png" alt="Atameken" class="partner-logo" />
            <div class="partner-item">
              <img src="/images/logo-almaty.png" alt="Almaty Akimat" class="partner-logo" />
              <p>{{ $t('partnership.list.akimat') }}</p>
            </div>
            <div class="partner-item">
              <img src="/images/logo-min.png" alt="Ministry" class="partner-logo" />
              <p>{{ $t('partnership.list.ministry') }}</p>
            </div>
          </div>
        </section>

        <section class="info-blocks">
          <div class="info-item">
            <div class="info-title">
              <img src="/images/icons/case.png" alt="" class="info-icon" />
              <h3>{{ $t('partnership.blocks.partnership.title') }}</h3>
            </div>
            <p>{{ $t('partnership.blocks.partnership.desc') }}</p>
          </div>

          <div class="info-item">
            <div class="info-title">
              <img src="/images/icons/hands.png" alt="" class="info-icon" />
              <h3>{{ $t('partnership.blocks.benefits.title') }}</h3>
            </div>
            <p>{{ $t('partnership.blocks.benefits.desc') }}</p>
          </div>

          <div class="info-item">
            <div class="info-title">
              <img src="/images/icons/coins.png" alt="" class="info-icon" />
              <h3>{{ $t('partnership.blocks.investments.title') }}</h3>
            </div>
            <p>{{ $t('partnership.blocks.investments.desc') }}</p>
          </div>
        </section>

        <section class="callback-section">
          <div class="callback-card">
            <div class="callback-content">
              <h2>{{ $t('partnership.callback.title') }}</h2>
              <p>{{ $t('partnership.callback.desc') }}</p>

              <form @submit.prevent="handleSubmit" class="callback-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>{{ $t('partnership.form.name') }}</label>
                    <input type="text" :placeholder="$t('partnership.form.placeholder')" v-model="form.name" />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('partnership.form.phone') }}</label>
                    <div class="phone-input">
                      <span class="flag">🇰🇿</span>
                      <input type="tel" :placeholder="$t('partnership.form.placeholder')" v-model="form.phone" />
                    </div>
                  </div>
                </div>
                <button type="submit" class="submit-btn">{{ $t('partnership.form.submit') }}</button>
              </form>
            </div>
            <div class="callback-image">
              <img src="/images/partnership-event.jpg" alt="Enactus Event" />
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

const handleSubmit = () => {
  console.log('Данные формы:', form);
  alert('Заявка отправлена!');
};
</script>

<style scoped>
.page-wrapper { background-color: #fff; }
.partnership-page { padding: 40px 0 100px; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumbs { font-size: 14px; color: #999; margin-bottom: 20px; }
.breadcrumbs a { text-decoration: none; color: inherit; }
.page-title { font-size: 32px; font-weight: 800; margin-bottom: 40px; }

/* Секция партнеров */
.partners-hero { margin-bottom: 60px; }
.partners-bg {
  background: linear-gradient(90deg, #232323 0%, #232323 50%, #FFCC00 100%);
  color: #FFCC00;
  height: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 40px;
}
.partners-bg h2 { font-size: 26px; font-weight: 900; }

.partners-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  text-align: center;
}
.partner-logo { height: 100px; object-fit: contain; margin-bottom: 10px; }
.partner-item { max-width: 300px; }
.partner-item p { font-size: 12px; font-weight: 700; color: #232323; line-height: 1.2; }

/* Инфо-блоки */
.info-blocks { margin-bottom: 80px; }
.info-item { margin-bottom: 35px; }
.info-title { display: flex; align-items: center; margin-bottom: 10px; }
.info-icon { width: 24px; margin-right: 15px; }
.info-title h3 { font-size: 20px; font-weight: 800; color: #232323; }
.info-item p { font-size: 15px; color: #444; line-height: 1.5; max-width: 950px; }

/* Карточка обратной связи */
.callback-card {
  background-color: #1a1a1a;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  color: #fff;
  min-height: 400px;
}
.callback-content { flex: 1; padding: 50px; }
.callback-image { flex: 1; position: relative; }
.callback-image img { width: 100%; height: 100%; object-fit: cover; }

.callback-content h2 { color: #FFCC00; font-size: 28px; font-weight: 900; margin-bottom: 20px; }
.callback-content p { font-size: 14px; line-height: 1.6; margin-bottom: 30px; color: #ccc; }

.form-row { display: flex; gap: 20px; margin-bottom: 25px; }
.form-group { flex: 1; }
.form-group label { display: block; font-size: 12px; margin-bottom: 8px; color: #fff; }
.form-group input {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: none;
  background: #f0f0f0;
  color: #333;
}

.phone-input { display: flex; align-items: center; background: #f0f0f0; border-radius: 8px; padding-left: 10px; }
.phone-input input { background: transparent; }
.flag { margin-right: 5px; }

.submit-btn {
  background-color: #FFCC00;
  color: #232323;
  border: none;
  padding: 15px 40px;
  border-radius: 25px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
}
.submit-btn:hover { background-color: #e6b800; transform: translateY(-2px); }

@media (max-width: 992px) {
  .callback-card { flex-direction: column; }
  .partners-grid { flex-wrap: wrap; }
  .form-row { flex-direction: column; }
}
</style>