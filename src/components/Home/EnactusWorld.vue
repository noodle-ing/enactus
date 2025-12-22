<template>
  <section class="world-section">
    <div class="container">
      <div class="world-info">
        <h2 class="world-title">ENACTUS В МИРЕ</h2>
        <p class="world-text">
          На сегодня ENACTUS объединяет команды более чем 30 стран по всему миру. 
          Студенты, преподаватели и бизнес-партнёры из разных уголков планеты 
          реализуют социально-предпринимательские проекты, направленные на 
          устойчивое развитие, поддержку сообществ и экологические инициативы.
        </p>
      </div>

      <div class="world-map-container">
        <img 
          src="/images/world-map-poly.png" 
          alt="Карта мира Enactus" 
          class="world-map-img"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Компонент презентационный, логика не требуется
</script>

<style scoped>
.world-section {
  background-color: #1a1a1a; /* Глубокий темный фон */
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
  align-items: flex-start; /* Выравнивание контента по левому краю */
}

.world-info {
  max-width: 800px; /* Ограничиваем ширину текста для читаемости */
  margin-bottom: 60px;
}

.world-title {
  font-size: 32px;
  font-weight: 900;
  color: #ffc107; /* Желтый акцент для заголовка */
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
  /* Добавляем легкое свечение карте, если нужно */
  filter: drop-shadow(0 0 15px rgba(255, 193, 7, 0.1));
  transition: transform 0.4s ease;
}

.world-map-img:hover {
  transform: scale(1.02);
}

/* Адаптивность */
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