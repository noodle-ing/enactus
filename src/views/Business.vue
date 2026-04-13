<template>
  <div class="page-wrapper">
    <main class="sponsors-page">
      <div class="container">
        <nav class="breadcrumbs">
          <router-link to="/">{{ $t('breadcrumbs.home') }}</router-link>
          <span class="sep">›</span>
          <router-link to="/business">{{ $t('breadcrumbs.business') }}</router-link>
          <span class="sep">›</span>
          <span class="current">{{ $t('sponsors.title') }}</span>
        </nav>

        <h1 class="page-title">{{ $t('sponsors.title') }}</h1>

        <div class="sponsors-container">

<!--          <section class="sponsor-tier">-->
<!--            <div class="tier-header general-bg">-->
<!--              <img src="/images/icons/diamond.png" alt="" class="tier-icon" />-->
<!--              <h2>{{ $t('sponsors.tiers.general') }}</h2>-->
<!--            </div>-->
<!--            <div class="logos-grid central">-->
<!--              <img src="/images/logo-grand.png" alt="Grand Mobile" class="logo-large" />-->
<!--            </div>-->
<!--          </section>-->

          <section class="sponsor-tier">
            <div class="tier-header platinum-bg">
              <h2>{{ $t('sponsors.tiers.platinum') }}</h2>
            </div>
            <div class="logos-grid platinum-grid">
              <img src="/images/logo-turan.png" alt="Turan" class="logo-md" />
              <div class="logo-group">
                <img src="/images/logo-kmf.png" alt="KMF" class="logo-sm" />
              </div>
              <img src="/images/logo-kazzinc.jpg" alt="Kazzinc" class="logo-md" />
            </div>
          </section>

          <section class="sponsor-tier">
            <div class="tier-header gold-bg">
              <h2>{{ $t('sponsors.tiers.gold') }}</h2>
            </div>
            <div class="logos-grid">
              <img src="/images/white-case.png" alt="White & Case" class="logo-md" />
            </div>
          </section>

          <section class="sponsor-tier">
            <div class="tier-header silver-bg">
              <h2>{{ $t('sponsors.tiers.silver') }}</h2>
            </div>
            <div class="logos-grid silver-grid">
              <img src="/images/tssp.png" alt="TSSP" class="logo-xs" />
              <img src="/images/abs.png" alt="ABS" class="logo-xs" />
              <img src="/images/most.png" alt="MOST" class="logo-xs" />
              <img src="/images/leader.png" alt="Leagder" class="logo-xs" />
              <img src="/images/empire.png" alt="Empire" class="logo-xs" />
              <img src="/images/atameken.jpg" alt="Atameken" class="logo-xs" />
              <img src="/images/kbstech.jpg" alt="KBSTECH" class="logo-xs" />
              <img src="/images/logo-ktcloud.png" alt="KT Cloud Lab" class="logo-md" />
            </div>
          </section>

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

.sponsors-page {
  padding: 40px 0 100px;
}

.container {
  max-width: 1100px;
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

.breadcrumbs a {
  text-decoration: none;
  color: inherit;
}

.page-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 50px;
}

.sponsor-tier {
  margin-bottom: 80px;
}

.tier-header {
  height: 100px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.tier-header h2 {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.5px;
}

.tier-icon {
  width: 35px;
  margin-right: 20px;
}

/* Цвета плашек */
.general-bg {
  background: linear-gradient(90deg, #232323 0%, #232323 40%, #FFCC00 100%);
  color: #FFCC00;
}
.platinum-bg { background-color: #232323; color: #FFCC00; }
.gold-bg { background-color: #FFC107; color: #232323; }
.silver-bg { background-color: #F2F2F2; color: #232323; }

/* Сетки логотипов */
.logos-grid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 0;
  width: 100%;
}

/* General — СЛЕВА */
.central {
  justify-content: flex-start;
}

/* Platinum — ПО ЦЕНТРУ */
.platinum-grid {
  justify-content: center;
}

/* Остальные — СЛЕВА */
.logos-grid:not(.platinum-grid) {
  justify-content: flex-start;
}

/* Размеры картинок (Silver увеличены) */
.logo-large { height: 220px; object-fit: contain; max-width: 350px; }
.logo-md    { height: 160px; object-fit: contain; max-width: 320px; }
.logo-sm    { height: 130px; object-fit: contain; }
.logo-xs    { height: 120px; object-fit: contain; max-width: 200px; }

.logo-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.silver-grid {
  gap: 40px;
}

@media (max-width: 768px) {
  .tier-header { height: 70px; padding: 0 20px; }
  .tier-header h2 { font-size: 18px; }
  .logos-grid { gap: 20px; justify-content: center; }
  .logo-large { height: 150px; }
  .logo-md    { height: 100px; }
  .logo-sm    { height: 80px; }
  .logo-xs    { height: 70px; }
}
</style>