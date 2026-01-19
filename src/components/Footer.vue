<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-logo-block">
          <img src="/images/enactus-logo.png" alt="Enactus Kazakhstan" class="footer-logo" />
        </div>

        <div class="footer-nav">
          <div class="nav-col">
            <h4 class="nav-title">Главная</h4>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">О нас</h4>
            <ul class="nav-list">
              <li><a href="#">Штаб квартира</a></li>
              <li><a href="#">Совет директоров</a></li>
              <li><a href="#">Академический совет</a></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">Бизнесу</h4>
            <ul class="nav-list">
              <li><a href="#">Спонсоры</a></li>
              <li><a href="#">Партнёрство</a></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">Участникам</h4>
            <ul class="nav-list">
              <li><a href="#">Команды</a></li>
              <li><a href="#">Как создать команду?</a></li>
              <li><a href="#">ENACTUS CAMP</a></li>
              <li><a href="#">ROAD SHOW</a></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">Соревнования</h4>
            <ul class="nav-list">
              <li><a href="#">WORLD CUP</a></li>
              <li><a href="#">NATIONAL EXPO</a></li>
              <li><a href="#">Республиканский чемпионат школьного предпринимательства</a></li>
            </ul>
          </div>

          <div class="nav-col">
            <h4 class="nav-title">Новости</h4>
          </div>
        </div>
      </div>

      <hr class="footer-line" />

      <div class="footer-bottom">
        <p class="copyright">
          © 2025 ENACTUS Kazakhstan. Все права защищены.
        </p>
        
<div class="social-icons">
  <a href="#" class="social-link">
    <img src="/images/icons/instagram.png" alt="Instagram" />
  </a>
  <a href="#" class="social-link">
    <img src="/images/icons/facebook.png" alt="Facebook" />
  </a>
  <a href="#" class="social-link">
    <img src="/images/icons/telegram.png" alt="Telegram" />
  </a>
  <a href="#" class="social-link">
    <img src="/images/icons/youtube.png" alt="YouTube" />
  </a>
  <a href="#" class="social-link">
    <img src="/images/icons/linkedin.png" alt="LinkedIn" />
  </a>
  <a href="#" class="social-link">
    <img src="/images/icons/twiter.png" alt="Twitter" />
  </a>
  <a href="#" class="social-link">
    <img src="/images/icons/tiktok.png" alt="TikTok" />
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