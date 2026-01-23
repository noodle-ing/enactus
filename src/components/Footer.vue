<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-logo-block">
          <router-link to="/">
            <img src="/images/enactus-logo.png" alt="Enactus Kazakhstan" class="footer-logo" />
          </router-link>
        </div>

        <div class="footer-nav">
          <div class="nav-col">
            <h4 class="nav-title">
              <router-link to="/">{{ $t('nav.footerHome') }}</router-link>
            </h4>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">{{ $t('nav.about') }}</h4>
            <ul class="nav-list">
              <li><router-link to="/about/headquarters">{{ $t('nav.headquarters') }}</router-link></li>
              <li><router-link to="/about/board">{{ $t('nav.board') }}</router-link></li>
              <li><router-link to="/about/council">{{ $t('nav.council') }}</router-link></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">{{ $t('nav.business') }}</h4>
            <ul class="nav-list">
              <li><router-link to="/business">{{ $t('nav.sponsors') }}</router-link></li>
              <li><router-link to="/partnership">{{ $t('nav.partnership') }}</router-link></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">{{ $t('nav.participants') }}</h4>
            <ul class="nav-list">
              <li><router-link to="/teampage">{{ $t('nav.teams') }}</router-link></li>
              <li><router-link to="/createteam">{{ $t('nav.howToCreate') }}</router-link></li>
              <li><router-link to="/enactus-cup">{{ $t('nav.camp') }}</router-link></li>
              <li><router-link to="/road-show">{{ $t('nav.roadshow') }}</router-link></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">{{ $t('nav.competitions') }}</h4>
            <ul class="nav-list">
              <li><router-link to="/competitions">WORLD CUP</router-link></li>
              <li><router-link to="/competitions">NATIONAL EXPO</router-link></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">
              <router-link to="/news">{{ $t('nav.news') }}</router-link>
            </h4>
          </div>
        </div>
      </div>

      <hr class="footer-line" />

      <div class="footer-bottom">
        <p class="copyright">
          © 2026 ENACTUS Kazakhstan. {{ $t('nav.allRights') }}
        </p>

        <div class="social-icons">
          <a href="https://instagram.com/enactus_kazakhstan" target="_blank" class="social-link">
            <img src="/images/icons/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Здесь можно добавить логику, если пункты меню будут динамическими
</script>

<style scoped>



.footer {
  background: #F0F0F0;
  padding: 60px 0 30px;
  width: 100%;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
}

.footer-logo {
  width: 160px;
  height: auto;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 35px;
  height: 35px;
  /* Цвет фона квадратика как на макете */
  background-color: #5a5a5a; 
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  overflow: hidden; /* Чтобы картинка не вылезала за края */
}

.social-link img {
  /* Размер картинки внутри квадрата */
  width: 18px; 
  height: 18px;
  object-fit: contain;
  /* Если ваши картинки цветные, а нужны белые (как иконки), 
     можно добавить этот фильтр: */
  filter: brightness(0) invert(1); 
}

.social-link:hover {
  background-color: #1a1a1a;
  transform: translateY(-3px);
}

/* На мобилках делаем чуть больше расстояние для удобства нажатия пальцем */
@media (max-width: 768px) {
  .social-icons {
    gap: 15px;
    justify-content: center;
  }
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 равных колонок */
  gap: 20px;
  flex: 1;
}

.nav-title {
  font-size: 15px;
  font-weight: 800;
  color: #333;
  margin-bottom: 15px;
  white-space: nowrap;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 8px;
}

.nav-list a {
  text-decoration: none;
  color: #555;
  font-size: 13px;
  line-height: 1.4;
  transition: color 0.2s;
}

.nav-list a:hover {
  color: #ffc107;
}

.footer-line {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 25px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 14px;
  color: #777;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 32px;
  height: 32px;
  background-color: #5a5a5a; /* Темный фон иконок как на картинке */
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  transition: transform 0.2s, background-color 0.2s;
}

.social-link:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
}

/* Адаптивность для мобильных */
@media (max-width: 1024px) {
  .footer-grid {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-nav {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
}

@media (max-width: 600px) {
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
  }
}
</style>