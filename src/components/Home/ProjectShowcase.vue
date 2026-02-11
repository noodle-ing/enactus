<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="projects-title">{{ $t('projects.title') }}</h2>

      <div class="projects-grid">
        <div class="projects-nav">
          <button
              v-for="project in localizedProjects"
              :key="project.id"
              class="nav-item"
              :class="{ 'active': activeId === project.id }"
              @click="activeId = project.id"
          >
            <span class="nav-label">{{ project.name }}</span>
            <span class="arrow">▶</span>
          </button>
        </div>

        <div class="project-display">
          <div class="project-card-ui">
            <div class="img-container">
              <img :src="activeProject.image" :alt="activeProject.name" class="project-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Храним только ID активного проекта
const activeId = ref(1)

// Вычисляемый массив проектов (обновляется при смене языка)
const localizedProjects = computed(() => [
  {
    id: 1,
    name: t('projects.items.amu.name'),
    description: t('projects.items.amu.desc'),
    image: '/images/astanameduni.png'
  },
  {
    id: 2,
    name: t('projects.items.kaznu.name'),
    description: t('projects.items.kaznu.desc'),
    image: '/images/kaznu.png'
  },
  {
    id: 3,
    name: t('projects.items.narxoz.name'),
    description: t('projects.items.narxoz.desc'),
    image: '/images/narxoz.png'
  },
  {
    id: 4,
    name: t('projects.items.coll.name'),
    description: t('projects.items.coll.desc'),
    image: '/images/languagecoleg.png'
  },
])

// Вычисляем объект активного проекта для отображения в правой части
const activeProject = computed(() => {
  return localizedProjects.value.find(p => p.id === activeId.value) || localizedProjects.value[0]
})
</script>

<style scoped>
/* Стили остаются без изменений, так как структура классов сохранена */
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

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 20px;
  height: 520px;
}

.projects-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
}

.nav-item {
  flex: 1;
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
  flex-grow: 1;
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
  flex-shrink: 0;
}

.project-text {
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: 1fr;
    height: auto;
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