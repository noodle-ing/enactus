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
              <img src="/images/pngegg.png" alt="Almaty Akimat" class="partner-logo" />
              <p>{{ $t('partnership.list.akimat') }}</p>
            </div>
            <div class="partner-item">
              <img src="/images/gerb_01.png" alt="Ministry" class="partner-logo" />
              <p>{{ $t('partnership.list.ministry') }}</p>
            </div>
          </div>
        </section>

        <section class="info-blocks">
          <div class="info-item" v-for="n in 3" :key="n">
            <div class="info-title">
              <img :src="`/images/icons/${n === 1 ? 'case' : n === 2 ? 'hands' : 'coins'}.png`" alt="" class="info-icon" />
              <h3>{{ $t(`partnership.blocks.${n === 1 ? 'partnership' : n === 2 ? 'benefits' : 'investments'}.title`) }}</h3>
            </div>
            <p>{{ $t(`partnership.blocks.${n === 1 ? 'partnership' : n === 2 ? 'benefits' : 'investments'}.desc`) }}</p>
          </div>
        </section>

        <section class="callback-section">
          <div class="callback-card">
            <div class="callback-content">
              <h2>{{ $t('partnership.callback.title') }}</h2>
              <p>{{ $t('partnership.callback.desc') }}</p>

              <div class="contact-methods">
                <div class="contact-method-item">
                  <span class="contact-label">{{ $t('partnership.callback.email') }}</span>
                  <a href="mailto:enactuskaz@gmail.com" class="contact-link">enactuskaz@gmail.com</a>
                </div>

                <div class="contact-method-item">
                  <span class="contact-label">{{ $t('partnership.callback.phone') }}</span>
                  <a href="tel:+77057143315" class="contact-link">+7 705 714 3315</a>
                </div>
              </div>
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
import Footer from '@/components/Footer.vue';
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

/* СТИЛИ КОНТАКТОВ В КАРТОЧКЕ */
.callback-card {
  background-color: #1a1a1a;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  color: #fff;
  min-height: 400px;
}
.callback-content { flex: 1.2; padding: 50px; }
.callback-image { flex: 0.8; position: relative; }
.callback-image img { width: 100%; height: 100%; object-fit: cover; }

.callback-content h2 { color: #FFCC00; font-size: 28px; font-weight: 900; margin-bottom: 20px; }
.callback-content p { font-size: 14px; line-height: 1.6; margin-bottom: 40px; color: #ccc; }

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-method-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact-label {
  font-size: 11px;
  font-weight: 700;
  color: #FFCC00;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-link {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  text-decoration: none;
  transition: 0.3s ease;
}

.contact-link:hover {
  color: #FFCC00;
  padding-left: 5px;
}

@media (max-width: 992px) {
  .callback-card { flex-direction: column; }
  .callback-content { padding: 40px 20px; }
  .partners-grid { flex-wrap: wrap; }
  .contact-link { font-size: 18px; }
}
</style>