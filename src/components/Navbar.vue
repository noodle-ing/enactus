<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <img src="/images/enactus-logo.png" alt="Enactus Logo" class="logo-img">
        </router-link>
      </div>

      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Главная</router-link>

        <div
            class="dropdown-wrapper"
            @mouseenter="isAboutOpen = true"
            @mouseleave="isAboutOpen = false"
        >
          <router-link to="/about/headquarters" class="nav-link" @click="closeMenu">
            О нас <span class="arrow-mini">▼</span>
          </router-link>

          <transition name="fade">
            <div v-if="isAboutOpen" class="dropdown-box">
              <router-link to="/about/headquarters" class="dropdown-item" @click="closeMenu">Штаб квартира</router-link>
              <router-link to="/about/board" class="dropdown-item" @click="closeMenu">Совет директоров</router-link>
              <router-link to="/about/council" class="dropdown-item" @click="closeMenu">Академический совет</router-link>
            </div>
          </transition>
        </div>

        <div
            class="dropdown-wrapper"
            @mouseenter="isBusinessOpen = true"
            @mouseleave="isBusinessOpen = false"
        >
          <router-link to="/business" class="nav-link" @click="closeMenu">
            Бизнес <span class="arrow-mini">▼</span>
          </router-link>

          <transition name="fade">
            <div v-if="isBusinessOpen" class="dropdown-box">
              <router-link to="/business" class="dropdown-item" @click="closeMenu">Спонсоры</router-link>
              <router-link to="/partnership" class="dropdown-item" @click="closeMenu">Партнерство</router-link>
            </div>
          </transition>
        </div>

        <div
            class="dropdown-wrapper"
            @mouseenter="isParticipantsOpen = true"
            @mouseleave="isParticipantsOpen = false"
        >
          <router-link to="/teampage" class="nav-link" @click="closeMenu">
            Участникам <span class="arrow-mini">▼</span>
          </router-link>

          <transition name="fade">
            <div v-if="isParticipantsOpen" class="dropdown-box">
              <router-link to="/teampage" class="dropdown-item" @click="closeMenu">Команды</router-link>
              <router-link to="/enactus-cup" class="dropdown-item" @click="closeMenu">Enactus Camp</router-link>
              <router-link to="/road-show" class="dropdown-item" @click="closeMenu">Road Show</router-link>
            </div>
          </transition>
        </div>

        <router-link to="/competitions" class="nav-link" @click="closeMenu">Соревнования</router-link>
        <router-link to="/news" class="nav-link" @click="closeMenu">Новости</router-link>

        <button class="contact-btn">
          <img src="/images/phone-icon.png" alt="" class="btn-icon">
          Связаться
        </button>
      </div>

      <div class="nav-actions">
        <div class="language-dropdown" @mouseenter="isLangOpen = true" @mouseleave="isLangOpen = false">
          <span class="lang-current">RU <span class="arrow">▼</span></span>
          <transition name="fade">
            <div v-if="isLangOpen" class="dropdown-content">
              <a href="#" class="lang-item">KZ</a>
              <a href="#" class="lang-item">ENG</a>
            </div>
          </transition>
        </div>
      </div>

      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isLangOpen = ref(false)
const isAboutOpen = ref(false)
const isBusinessOpen = ref(false)
const isParticipantsOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isAboutOpen.value = false
  isBusinessOpen.value = false
  isParticipantsOpen.value = false
}
</script>

<style scoped>
/* Подключаем шрифт Montserrat (если он не подключен глобально) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.navbar {
  font-family: 'Montserrat', sans-serif;
  background: #F0F0F0; /* Серый фон навбара */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* Немного увеличили высоту для визуального баланса */
}

.nav-logo { height: 40px; }
.logo-img {
  height: 60px;
  position: relative;
  top: -12px;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover { color: #FFC007; }

.arrow-mini {
  font-size: 0.6rem;
  vertical-align: middle;
  margin-left: 4px;
}

/* Стили кнопки «Связаться» по макету */
.contact-btn {
  background: #FFC007;
  border: none;
  padding: 10px 24px;
  border-radius: 50px; /* Полностью круглая форма */
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-left: 10px;
}

.contact-btn:hover {
  background: #e6ac00;
  transform: translateY(-1px);
}

.btn-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

/* Выпадающие списки */
.dropdown-wrapper {
  position: relative;
  padding: 10px 0;
}

.dropdown-box {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  min-width: 220px;
  padding: 10px 0;
  z-index: 1001;
}

.dropdown-item {
  padding: 12px 20px;
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: #f5f5f5;
  color: #FFC007;
  padding-left: 25px;
}

.nav-actions { display: flex; align-items: center; margin-left: 1rem; }
.language-dropdown { position: relative; cursor: pointer; }
.lang-current { font-weight: 600; display: flex; align-items: center; gap: 4px; }

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 70px;
  overflow: hidden;
}

.lang-item {
  padding: 8px 15px;
  display: block;
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.lang-item:hover { background: #f5f5f5; }

/* Анимации */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }

/* Мобильная версия */
@media (max-width: 1024px) {
  .nav-menu { gap: 1rem; }
  .nav-link { font-size: 0.9rem; }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: #F0F0F0;
    width: 100%;
    height: calc(100vh - 70px);
    transition: 0.3s;
    padding: 2rem 0;
  }
  .nav-menu.active { left: 0; }
  .dropdown-box {
    position: static;
    box-shadow: none;
    background: transparent;
    width: 100%;
    text-align: center;
  }
}

/* Сброс стилей router-link */
.router-link-active { background: none !important; }
</style>