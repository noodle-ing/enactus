<template>
  <section class="map-section">
    <div class="container">
      <div class="map-grid">
        <div class="map-content">
          <h2 class="map-title">ENACTUS В КАЗАХСТАНЕ</h2>
          <p class="map-description">
            Мы объединяем университеты и студентов со всей страны, создавая проекты, 
            которые улучшают жизнь в городах и регионах. Каждый участник становится 
            частью единой команды, меняющей будущее страны.
          </p>
        </div>

        <div class="map-visual">
          <div class="map-wrapper">
            <img src="/images/kz-map-brands.png" alt="Карта Enactus в Казахстане" class="map-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Скрипты здесь не требуются, если карта статична. 
// Если захотите сделать точки кликабельными, можно добавить массив координат.
</script>

<style scoped>
.map-section {
  padding: 100px 0;
  background-color: #f0f0f0; /* Светло-серый фон как на макете */
  display: flex;
  align-items: center;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.map-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* Текст уже, карта шире */
  gap: 60px;
  align-items: center;
}

.map-title {
  font-size: 36px;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 25px;
  text-transform: uppercase;
  line-height: 1.1;
}

.map-description {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  font-weight: 500;
}

.map-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-wrapper {
  width: 100%;
  max-width: 700px; /* Ограничиваем размер карты */
  transition: transform 0.5s ease;
}

.map-wrapper:hover {
  transform: scale(1.02); /* Легкий эффект при наведении */
}

.map-img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.05));
}

/* Адаптивность для планшетов и мобилок */
@media (max-width: 992px) {
  .map-grid {
    grid-template-columns: 1fr; /* В одну колонку */
    text-align: center;
    gap: 40px;
  }
  
  .map-title {
    font-size: 28px;
  }

  .map-content {
    order: 1; /* Текст сверху */
  }

  .map-visual {
    order: 2; /* Карта снизу */
  }
}
</style>