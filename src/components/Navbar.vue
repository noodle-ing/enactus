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
          <router-link to="/about" class="nav-link" @click="closeMenu">
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
const isLangOpen = ref(false)
const isAboutOpen = ref(false) 
const isBusinessOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const isParticipantsOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
  isAboutOpen.value = false
  isBusinessOpen.value = false
  isParticipantsOpen.value = false
}


</script>

<style scoped>
/* Сохраняем ваши базовые стили и добавляем новые для Dropdown */

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
  justify-content: center; 
  align-items: center;
  height: 70px;
  gap: 2rem;
}

.nav-logo { height: 40px; }
.logo-img {
  height: 60px;
  position: relative;
  top: -15px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
  background: transparent;
}

.nav-link:hover { color: #ffd700; }

.arrow-mini {
  font-size: 0.5rem;
  vertical-align: middle;
  margin-left: 2px;
}

/* --- СТИЛИ ВЫПАДАЮЩЕГО ОКНА "О НАС" --- */
.dropdown-wrapper {
  position: relative;
  padding: 10px 0; /* Чтобы не терять фокус при наведении */
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
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: #f9f9f9;
  color: #ffd700;
  padding-left: 25px; /* Легкий эффект сдвига */
}

/* --- ОСТАЛЬНЫЕ ВАШИ СТИЛИ --- */
.nav-actions { display: flex; align-items: center; }
.language-dropdown { position: relative; cursor: pointer; padding: 10px 0; }
.lang-current { font-weight: 600; display: flex; align-items: center; gap: 4px; }

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 70px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
}

.lang-item {
  padding: 8px 15px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.contact-btn {
  background: #ffd700;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
}

/* Анимация */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.router-link-active, 
.router-link-exact-active {
  background: none !important;
  outline: none !important;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    transition: 0.3s;
    padding: 2rem 0;
  }
  .nav-menu.active { left: 0; }
  .dropdown-box {
    position: static; /* На мобилках лучше раскрывать вниз */
    box-shadow: none;
    background: #fdfdfd;
    width: 100%;
    text-align: center;
  }
}
</style>