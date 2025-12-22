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
        <router-link to="/about" class="nav-link" @click="closeMenu">О нас</router-link>
        <router-link to="/business" class="nav-link" @click="closeMenu">Бизнес</router-link>
        <router-link to="/participants" class="nav-link" @click="closeMenu">Участникам</router-link>
        <router-link to="/competitions" class="nav-link" @click="closeMenu">Соревнования</router-link>
        <router-link to="/news" class="nav-link" @click="closeMenu">Новости</router-link>
        <button class="contact-btn">Связаться</button>
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
const isLangOpen = ref(false) // Состояние для выпадающего списка языков

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  /* Убираем space-between, центрируем содержимое или прижимаем к краям через gap */
  justify-content: center; 
  align-items: center;
  height: 70px;
  gap: 2rem; /* Это значение теперь управляет ВСЕМИ отступами в навбаре */
}

.nav-logo {
  height: 40px;
  width: auto;
}

.logo-img {
  height: 60px;
  width: auto;
  position: relative;
  top: -15px;
}

.nav-menu {
  display: flex;
  gap: 2rem; /* Должно совпадать с gap в .nav-container */
  align-items: center;
  margin-left: 0; /* Убираем margin-left: auto */
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ffd700;
}

/* ... (стили для router-link-active остаются без изменений) ... */

.nav-actions {
  display: flex;
  align-items: center;
  margin-left: 0; /* Убираем margin-left: 1.5rem */
}

.language-dropdown {
  position: relative;
  cursor: pointer;
  padding: 10px 0;
}

.lang-current {
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 4px;
}

.arrow {
  font-size: 0.6rem;
  transition: transform 0.3s;
}

.language-dropdown:hover .arrow {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1001;
}

.lang-item {
  padding: 8px 15px;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s;
}

.lang-item:hover {
  background: #f5f5f5;
  color: #ffd700;
}

/* Анимация появления */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.nav-link, .lang-item, .logo-link {
  background: transparent !important;
  outline: none !important;
  -webkit-tap-highlight-color: transparent; /* Убирает синюю/зеленую вспышку на смартфонах */
}

/* Убедитесь, что здесь нет фона */
.nav-link:hover {
  color: #ffd700;
  background: none !important; 
}

.contact-btn {
  background: #ffd700;
  color: #1a1a2e;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.contact-btn:hover {
  background: #ffed4e;
  transform: translateY(-1px);
}

.language-selector {
  font-weight: 600;
  color: #333;
  cursor: pointer;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 1.2rem; /* Уменьшаем расстояние на средних экранах, чтобы всё влезло */
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
    gap: 2rem; /* На мобилке возвращаем крупный отступ */
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }
}
</style>