<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="projects-title">ПРИМЕРЫ ПРОЕКТОВ НАШИХ СТУДЕНТОВ</h2>
      <div class="projects-grid">
        <div class="projects-nav">
          <button 
            v-for="project in projects" 
            :key="project.id"
            class="nav-item"
            :class="{ 'active': activeTab.id === project.id }"
            @click="activeTab = project"
          >
            <span class="nav-label">{{ project.name }}</span>
            <span class="arrow">▶</span>
          </button>
        </div>

        <div class="project-display">
          <div class="project-card-ui">
            <div class="img-container">
              <img :src="activeTab.image" :alt="activeTab.name" class="project-img">
            </div>
            <div class="project-info-bar">
              <p class="project-text">{{ activeTab.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = [
  { id: 1, name: 'Astana Medical University', description: 'ZhanCare — медицинская экосистема нового поколения.', image: '/images/astanameduni.png' },
  { id: 2, name: 'КазНУ им. Аль-Фараби', description: 'Инновационный проект в области экологии и IT.', image: '/images/kaznu.png' },
  { id: 3, name: 'Narxoz University', description: 'Социальное предпринимательство и поддержка молодежи.', image: '/images/narxoz.png' },
  { id: 4, name: 'Колледж иностранных языков', description: 'Образовательная платформа для изучения языков.', image: '/images/languagecoleg.png' },
]

const activeTab = ref(projects[0])
</script>

<style scoped>
.projects-section { 
  padding: 80px 0; 
  background: #fff; 
}

.container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 2rem; 
}

.projects-title { 
  font-size: 2.2rem; 
  font-weight: 900; 
  margin-bottom: 40px; 
  text-transform: uppercase; 
  letter-spacing: -0.5px;
}

/* Сетка с фиксированной высотой для выравнивания сторон */
.projects-grid { 
  display: grid; 
  grid-template-columns: 1fr 1.8fr; 
  gap: 20px; 
  height: 520px; /* Фиксируем общую высоту блока */
}

/* Левая навигация */
.projects-nav { 
  display: flex; 
  flex-direction: column; 
  gap: 15px; 
  height: 100%; 
}

.nav-item {
  flex: 1; /* РАСТЯГИВАЕМ КНОПКИ по всей высоте колонки */
  background: #8e8e8e; 
  color: white; 
  border: none; 
  padding: 0 30px; 
  border-radius: 12px; 
  font-weight: 700; 
  font-size: 1.1rem;
  text-align: left; 
  cursor: pointer;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  transition: 0.3s ease;
}

.nav-item.active { 
  background: #ffc107; 
  color: #1a1a1a; 
}

.nav-item:hover:not(.active) { 
  background: #a1a1a1; 
}

.arrow { font-size: 12px; }

/* Правая карточка */
.project-display {
  height: 100%;
}

.project-card-ui { 
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px; 
  overflow: hidden; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
}

.img-container {
  flex-grow: 1; /* Занимает всё пространство над текстом */
  position: relative;
  overflow: hidden;
}

.project-img { 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.project-info-bar { 
  background: #1a1a1a; 
  padding: 25px 35px; 
  color: white; 
  flex-shrink: 0; /* Высота подвала не меняется */
}

.project-text { 
  font-size: 1.1rem; 
  font-weight: 400; 
  margin: 0; 
}

@media (max-width: 992px) {
  .projects-grid { 
    grid-template-columns: 1fr; 
    height: auto; /* На мобилках высота подстраивается под контент */
  }
  .img-container {
    height: 300px;
  }
  .nav-item { 
    padding: 25px 30px; 
    margin-bottom: 5px;
  }
}
</style>