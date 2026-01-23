<template>
  <section class="world-section">
    <div class="container">
      <div class="world-info">
        <h2 class="world-title">{{ $t('world.title') }}</h2>
        <p class="world-text">
          {{ $t('world.text') }}
        </p>
      </div>

      <div class="world-map-container">
        <img
            src="/images/world-map-poly.png"
            :alt="$t('world.title')"
            class="world-map-img"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Логика не требуется, так как i18n плагин доступен глобально в шаблоне
</script>

<style scoped>
/* Стили остаются без изменений */
.world-section {
  background-color: #1a1a1a;
  padding: 100px 0;
  color: #ffffff;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.world-info {
  max-width: 800px;
  margin-bottom: 60px;
}

.world-title {
  font-size: 32px;
  font-weight: 900;
  color: #ffc107;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.world-text {
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  font-weight: 400;
}

.world-map-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.world-map-img {
  width: 100%;
  height: auto;
  max-width: 1000px;
  filter: drop-shadow(0 0 15px rgba(255, 193, 7, 0.1));
  transition: transform 0.4s ease;
}

.world-map-img:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .world-section {
    padding: 60px 0;
  }
  .world-title {
    font-size: 26px;
  }
  .world-text {
    font-size: 14px;
  }
}
</style>