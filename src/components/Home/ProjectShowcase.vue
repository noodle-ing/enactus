<template>
  <section class="projects-section">
    <div class="container">
      <div
        v-for="showcase in showcases"
        :key="showcase.key"
        class="showcase-block"
      >
        <h2 class="projects-title">{{ showcase.title }}</h2>

        <div class="projects-grid">
          <div class="projects-nav">
            <button
                v-for="project in showcase.projects"
                :key="project.id"
                class="nav-item"
                :class="{ 'active': showcase.activeId.value === project.id }"
                @click="showcase.activeId.value = project.id"
            >
              <span class="nav-label">{{ project.name }}</span>
              <span class="arrow">▶</span>
            </button>
          </div>

          <div class="project-display">
            <div class="project-card-ui">
              <div class="img-container">
                <img
                  :src="imageErrors[showcase.activeProject.id] ? showcase.activeProject.fallbackImage : showcase.activeProject.image"
                  :alt="showcase.activeProject.name"
                  class="project-img"
                  @error="handleImageError(showcase.activeProject.id)"
                >
              </div>
              <div class="project-info-bar">
                <h3 class="project-name">{{ showcase.activeProject.name }}</h3>
                <div v-if="showcase.activeProject.summary" class="project-summary">
                  <p>{{ showcase.activeProject.summary }}</p>
                </div>
                <div v-if="showcase.activeProject.details.length" class="project-details">
                  <div v-for="detail in showcase.activeProject.details" :key="detail.title" class="project-detail-item">
                    <h4 class="detail-title">{{ detail.title }}</h4>
                    <p class="detail-text">{{ detail.desc }}</p>
                  </div>
                </div>
              </div>
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

const activeId = ref(1)
const earlyStageActiveId = ref('early-1')
const collegeCupActiveId = ref('college-1')
const schoolCupActiveId = ref('school-1')
const juniorLeagueActiveId = ref('junior-1')
const imageErrors = ref({})

const handleImageError = (projectId) => {
  imageErrors.value = {
    ...imageErrors.value,
    [projectId]: true
  }
}

const buildDetails = (basePath, projectKeys) => projectKeys.map((projectKey) => ({
  title: t(`${basePath}.${projectKey}Title`),
  desc: t(`${basePath}.${projectKey}Desc`)
}))

const localizedProjects = computed(() => [
  {
    id: 1,
    name: t('projects.items.amu.name'),
    summary: t('projects.items.amu.summary'),
    details: [
      {
        title: t('projects.items.amu.projectOneTitle'),
        desc: t('projects.items.amu.projectOneDesc')
      },
      {
        title: t('projects.items.amu.projectTwoTitle'),
        desc: t('projects.items.amu.projectTwoDesc')
      }
    ],
    image: '/images/aitu-medical-ai.jpg',
    fallbackImage: '/images/astanameduni.png'
  },
  {
    id: 2,
    name: t('projects.items.kaznu.name'),
    summary: t('projects.items.kaznu.summary'),
    details: [
      {
        title: t('projects.items.kaznu.projectOneTitle'),
        desc: t('projects.items.kaznu.projectOneDesc')
      },
      {
        title: t('projects.items.kaznu.projectTwoTitle'),
        desc: t('projects.items.kaznu.projectTwoDesc')
      }
    ],
    image: '/images/amu-medical-ai.jpg',
    fallbackImage: '/images/astanameduni.png'
  },
  {
    id: 3,
    name: t('projects.items.narxoz.name'),
    summary: t('projects.items.narxoz.summary'),
    details: [
      {
        title: t('projects.items.narxoz.projectOneTitle'),
        desc: t('projects.items.narxoz.projectOneDesc')
      }
    ],
    image: '/images/kaznu-asyl-zher.jpg',
    fallbackImage: '/images/kaznu.png'
  },
  {
    id: 4,
    name: t('projects.items.coll.name'),
    summary: t('projects.items.coll.summary'),
    details: [
      {
        title: t('projects.items.coll.projectOneTitle'),
        desc: t('projects.items.coll.projectOneDesc')
      },
      {
        title: t('projects.items.coll.projectTwoTitle'),
        desc: t('projects.items.coll.projectTwoDesc')
      },
      {
        title: t('projects.items.coll.projectThreeTitle'),
        desc: t('projects.items.coll.projectThreeDesc')
      }
    ],
    image: '/images/zhetysu-agro.jpg',
    fallbackImage: '/images/languagecoleg.png'
  },
])

const earlyStageProjects = computed(() => [
  {
    id: 'early-1',
    name: t('projects.earlyStage.items.zhans.name'),
    summary: t('projects.earlyStage.items.zhans.summary'),
    details: buildDetails('projects.earlyStage.items.zhans', ['projectOne', 'projectTwo']),
    image: '/images/earlystage-zhansugurov.jpg',
    fallbackImage: '/images/earlystage-zhansugurov.jpg'
  },
  {
    id: 'early-2',
    name: t('projects.earlyStage.items.aituCollege.name'),
    summary: t('projects.earlyStage.items.aituCollege.summary'),
    details: buildDetails('projects.earlyStage.items.aituCollege', ['projectOne', 'projectTwo']),
    image: '/images/earlystage-aitu-college.jpg',
    fallbackImage: '/images/earlystage-aitu-college.jpg'
  },
  {
    id: 'early-3',
    name: t('projects.earlyStage.items.coventry.name'),
    summary: t('projects.earlyStage.items.coventry.summary'),
    details: buildDetails('projects.earlyStage.items.coventry', ['projectOne']),
    image: '/images/earlystage-coventry.jpg',
    fallbackImage: '/images/earlystage-coventry.jpg'
  },
  {
    id: 'early-4',
    name: t('projects.earlyStage.items.myrzakhmetov.name'),
    summary: t('projects.earlyStage.items.myrzakhmetov.summary'),
    details: buildDetails('projects.earlyStage.items.myrzakhmetov', ['projectOne', 'projectTwo', 'projectThree']),
    image: '/images/earlystage-myrzakhmetov.jpg',
    fallbackImage: '/images/earlystage-myrzakhmetov.jpg'
  }
])

const collegeCupProjects = computed(() => [
  {
    id: 'college-1',
    name: t('projects.collegeCup.items.acst.name'),
    summary: t('projects.collegeCup.items.acst.summary'),
    details: buildDetails('projects.collegeCup.items.acst', ['projectOne', 'projectTwo']),
    image: '/images/collegecup-acst.jpg',
    fallbackImage: '/images/collegecup-acst.jpg'
  },
  {
    id: 'college-2',
    name: t('projects.collegeCup.items.acep.name'),
    summary: t('projects.collegeCup.items.acep.summary'),
    details: buildDetails('projects.collegeCup.items.acep', ['projectOne']),
    image: '/images/collegecup-acep.jpg',
    fallbackImage: '/images/collegecup-acep.jpg'
  },
  {
    id: 'college-3',
    name: t('projects.collegeCup.items.caspian.name'),
    summary: t('projects.collegeCup.items.caspian.summary'),
    details: buildDetails('projects.collegeCup.items.caspian', ['projectOne', 'projectTwo']),
    image: '/images/collegecup-caspian.jpg',
    fallbackImage: '/images/collegecup-caspian.jpg'
  },
  {
    id: 'college-4',
    name: t('projects.collegeCup.items.tourism.name'),
    summary: t('projects.collegeCup.items.tourism.summary'),
    details: buildDetails('projects.collegeCup.items.tourism', ['projectOne']),
    image: '/images/collegecup-tourism.jpg',
    fallbackImage: '/images/collegecup-tourism.jpg'
  }
])

const schoolCupProjects = computed(() => [
  {
    id: 'school-1',
    name: t('projects.schoolCup.items.nis20.name'),
    summary: t('projects.schoolCup.items.nis20.summary'),
    details: buildDetails('projects.schoolCup.items.nis20', ['projectOne']),
    image: '/images/schoolcup-nis20.jpg',
    fallbackImage: '/images/schoolcup-nis20.jpg'
  },
  {
    id: 'school-2',
    name: t('projects.schoolCup.items.nis5.name'),
    summary: t('projects.schoolCup.items.nis5.summary'),
    details: buildDetails('projects.schoolCup.items.nis5', ['projectOne']),
    image: '/images/schoolcup-nis5.jpg',
    fallbackImage: '/images/schoolcup-nis5.jpg'
  },
  {
    id: 'school-3',
    name: t('projects.schoolCup.items.nisSemey1.name'),
    summary: t('projects.schoolCup.items.nisSemey1.summary'),
    details: buildDetails('projects.schoolCup.items.nisSemey1', ['projectOne', 'projectTwo']),
    image: '/images/schoolcup-nissemey1.jpg',
    fallbackImage: '/images/schoolcup-nissemey1.jpg'
  },
  {
    id: 'school-4',
    name: t('projects.schoolCup.items.nisShymkent.name'),
    summary: t('projects.schoolCup.items.nisShymkent.summary'),
    details: buildDetails('projects.schoolCup.items.nisShymkent', ['projectOne']),
    image: '/images/schoolcup-shymkent.jpg',
    fallbackImage: '/images/schoolcup-shymkent.jpg'
  }
])

const juniorLeagueProjects = computed(() => [
  {
    id: 'junior-1',
    name: t('projects.juniorLeague.items.aquashield.name'),
    summary: t('projects.juniorLeague.items.aquashield.summary'),
    details: buildDetails('projects.juniorLeague.items.aquashield', ['projectOne']),
    image: '/images/junior-aquashield.jpg',
    fallbackImage: '/images/junior-aquashield.jpg'
  },
  {
    id: 'junior-2',
    name: t('projects.juniorLeague.items.airlight.name'),
    summary: t('projects.juniorLeague.items.airlight.summary'),
    details: buildDetails('projects.juniorLeague.items.airlight', ['projectOne']),
    image: '/images/junior-airlight.jpg',
    fallbackImage: '/images/junior-airlight.jpg'
  },
  {
    id: 'junior-3',
    name: t('projects.juniorLeague.items.ecobus.name'),
    summary: t('projects.juniorLeague.items.ecobus.summary'),
    details: buildDetails('projects.juniorLeague.items.ecobus', ['projectOne']),
    image: '/images/junior-ecobusstop.jpg',
    fallbackImage: '/images/junior-ecobusstop.jpg'
  },
  {
    id: 'junior-4',
    name: t('projects.juniorLeague.items.amanat.name'),
    summary: t('projects.juniorLeague.items.amanat.summary'),
    details: buildDetails('projects.juniorLeague.items.amanat', ['projectOne']),
    image: '/images/junior-amanat.jpg',
    fallbackImage: '/images/junior-amanat.jpg'
  },
  {
    id: 'junior-5',
    name: t('projects.juniorLeague.items.rainbow.name'),
    summary: t('projects.juniorLeague.items.rainbow.summary'),
    details: buildDetails('projects.juniorLeague.items.rainbow', ['projectOne']),
    image: '/images/junior-rainbow.jpg',
    fallbackImage: '/images/junior-rainbow.jpg'
  }
])

const activeProject = computed(() => {
  return localizedProjects.value.find(p => p.id === activeId.value) || localizedProjects.value[0]
})

const earlyStageActiveProject = computed(() => {
  return earlyStageProjects.value.find(p => p.id === earlyStageActiveId.value) || earlyStageProjects.value[0]
})

const collegeCupActiveProject = computed(() => {
  return collegeCupProjects.value.find(p => p.id === collegeCupActiveId.value) || collegeCupProjects.value[0]
})

const schoolCupActiveProject = computed(() => {
  return schoolCupProjects.value.find(p => p.id === schoolCupActiveId.value) || schoolCupProjects.value[0]
})

const juniorLeagueActiveProject = computed(() => {
  return juniorLeagueProjects.value.find(p => p.id === juniorLeagueActiveId.value) || juniorLeagueProjects.value[0]
})

const showcases = computed(() => [
  {
    key: 'world-cup',
    title: t('projects.title'),
    projects: localizedProjects.value,
    activeId,
    activeProject: activeProject.value
  },
  {
    key: 'early-stage',
    title: t('projects.earlyStage.title'),
    projects: earlyStageProjects.value,
    activeId: earlyStageActiveId,
    activeProject: earlyStageActiveProject.value
  },
  {
    key: 'college-cup',
    title: t('projects.collegeCup.title'),
    projects: collegeCupProjects.value,
    activeId: collegeCupActiveId,
    activeProject: collegeCupActiveProject.value
  },
  {
    key: 'school-cup',
    title: t('projects.schoolCup.title'),
    projects: schoolCupProjects.value,
    activeId: schoolCupActiveId,
    activeProject: schoolCupActiveProject.value
  },
  {
    key: 'junior-league',
    title: t('projects.juniorLeague.title'),
    projects: juniorLeagueProjects.value,
    activeId: juniorLeagueActiveId,
    activeProject: juniorLeagueActiveProject.value
  }
])
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

.showcase-block + .showcase-block {
  margin-top: 90px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 20px;
  align-items: start;
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
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.img-container {
  position: relative;
  overflow: hidden;
  min-height: 420px;
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

.project-name {
  margin: 0 0 14px;
  font-size: 1.7rem;
  font-weight: 800;
}

.project-summary p,
.detail-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  opacity: 0.95;
}

.project-details {
  margin-top: 20px;
  display: grid;
  gap: 18px;
}

.detail-title {
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffc107;
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  .img-container {
    height: 300px;
    min-height: 300px;
  }
  .nav-item {
    padding: 25px 30px;
    margin-bottom: 5px;
  }
}
</style>
