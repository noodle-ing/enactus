<template>
  <section class="map-section">
    <div class="container">
      <div class="map-grid">
        <div class="map-content">
          <h2 class="map-title">{{ $t('map.title') }}</h2>
          <p class="map-description">
            {{ $t('map.description') }}
          </p>
        </div>

        <div class="map-visual">
          <div class="map-wrapper">
            <img
                src="/images/kz-map-brands.png"
                :alt="$t('map.title')"
                class="map-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Логика не требуется
</script>

<style scoped>
/* Ваши стили остаются без изменений */
.map-section {
  padding: 100px 0;
  background-color: #f0f0f0;
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
  grid-template-columns: 1fr 1.5fr;
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
  max-width: 700px;
  transition: transform 0.5s ease;
}

.map-wrapper:hover {
  transform: scale(1.02);
}

.map-img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.05));
}

@media (max-width: 992px) {
  .map-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  .map-title { font-size: 28px; }
  .map-content { order: 1; }
  .map-visual { order: 2; }
}
</style>