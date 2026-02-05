<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <img src="/images/enactus-logo.png" alt="Enactus Logo" class="logo-img">
        </router-link>
      </div>

      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">
          {{ $t('nav.home') }}
        </router-link>

        <div
            class="dropdown-wrapper"
            @mouseenter="isAboutOpen = true"
            @mouseleave="isAboutOpen = false"
        >
          <router-link to="/about/headquarters" class="nav-link" @click="closeMenu">
            {{ $t('nav.about') }} <span class="arrow-mini">▼</span>
          </router-link>

          <transition name="fade">
            <div v-if="isAboutOpen" class="dropdown-box">
              <router-link to="/about/headquarters" class="dropdown-item" @click="closeMenu">{{ $t('nav.headquarters') }}</router-link>
              <router-link to="/about/board" class="dropdown-item" @click="closeMenu">{{ $t('nav.board') }}</router-link>
              <router-link to="/about/council" class="dropdown-item" @click="closeMenu">{{ $t('nav.council') }}</router-link>
            </div>
          </transition>
        </div>

        <div
            class="dropdown-wrapper"
            @mouseenter="isBusinessOpen = true"
            @mouseleave="isBusinessOpen = false"
        >
          <router-link to="/business" class="nav-link" @click="closeMenu">
            {{ $t('nav.business') }} <span class="arrow-mini">▼</span>
          </router-link>

          <transition name="fade">
            <div v-if="isBusinessOpen" class="dropdown-box">
              <router-link to="/business" class="dropdown-item" @click="closeMenu">{{ $t('nav.sponsors') }}</router-link>
              <router-link to="/partnership" class="dropdown-item" @click="closeMenu">{{ $t('nav.partnership') }}</router-link>
            </div>
          </transition>
        </div>

        <div
            class="dropdown-wrapper"
            @mouseenter="isParticipantsOpen = true"
            @mouseleave="isParticipantsOpen = false"
        >
          <router-link to="/teampage" class="nav-link" @click="closeMenu">
            {{ $t('nav.participants') }} <span class="arrow-mini">▼</span>
          </router-link>

          <transition name="fade">
            <div v-if="isParticipantsOpen" class="dropdown-box">
              <router-link to="/teampage" class="dropdown-item" @click="closeMenu">{{ $t('nav.teams') }}</router-link>
              <router-link to="/enactus-cup" class="dropdown-item" @click="closeMenu">{{ $t('nav.camp') }}</router-link>
              <router-link to="/road-show" class="dropdown-item" @click="closeMenu">{{ $t('nav.roadshow') }}</router-link>
            </div>
          </transition>
        </div>

        <router-link to="/competitions" class="nav-link" @click="closeMenu">{{ $t('nav.competitions') }}</router-link>
        <router-link to="/news" class="nav-link" @click="closeMenu">{{ $t('nav.news') }}</router-link>

        <button class="contact-btn" @click="isContactOpen = true">
          <img src="/images/phone-icon.png" alt="" class="btn-icon">
          {{ $t('nav.contact') }}
        </button>
      </div>

      <div class="nav-actions">
        <div class="language-dropdown" @mouseenter="isLangOpen = true" @mouseleave="isLangOpen = false">
          <span class="lang-current">
            {{ locale.toUpperCase() }} <span class="arrow">▼</span>
          </span>
          <transition name="fade">
            <div v-if="isLangOpen" class="dropdown-content">
              <a href="#" class="lang-item" @click.prevent="changeLanguage('ru')">RU</a>
              <a href="#" class="lang-item" @click.prevent="changeLanguage('kz')">KZ</a>
              <a href="#" class="lang-item" @click.prevent="changeLanguage('en')">ENG</a>
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

    <transition name="fade">
      <div v-if="isContactOpen" class="modal-overlay" @click.self="isContactOpen = false">
        <div class="modal-content">
          <button class="close-modal" @click="isContactOpen = false">&times;</button>

          <h3 class="modal-title">{{ $t('nav.contact') }}</h3>

          <div class="contact-info">
            <div class="contact-item">
              <span class="label">{{ $t('contact.emailLabel') }}</span>
              <a href="mailto:enactuskaz@gmail.com" class="value">enactuskaz@gmail.com</a>
            </div>

            <div class="contact-item">
              <span class="label">{{ $t('contact.phoneLabel') }}</span>
              <a href="tel:+77057143315" class="value">+7 705 714 3315</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isMenuOpen = ref(false)
const isLangOpen = ref(false)
const isAboutOpen = ref(false)
const isBusinessOpen = ref(false)
const isParticipantsOpen = ref(false)
const isContactOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isAboutOpen.value = false
  isBusinessOpen.value = false
  isParticipantsOpen.value = false
}

const changeLanguage = (lang) => {
  locale.value = lang
  isLangOpen.value = false
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.navbar {
  font-family: 'Montserrat', sans-serif;
  background: #F0F0F0;
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
  height: 80px;
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

.contact-btn {
  background: #FFC007;
  border: none;
  padding: 10px 24px;
  border-radius: 50px;
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

/* МОДАЛЬНОЕ ОКНО */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 24px;
  position: relative;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f0f0f0;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-modal:hover { background: #e0e0e0; color: #000; }

.modal-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1a1a1a;
  text-transform: uppercase;
}

.contact-item {
  margin-bottom: 25px;
}

.label {
  display: block;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 700;
  color: #999;
  margin-bottom: 8px;
}

.value {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.value:hover { color: #FFC007; }

/* АНИМАЦИИ */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-10px); }

.nav-toggle { display: none; cursor: pointer; flex-direction: column; gap: 5px; }
.bar { width: 25px; height: 3px; background: #333; border-radius: 3px; }

@media (max-width: 1024px) {
  .nav-menu { gap: 1rem; }
  .nav-link { font-size: 0.9rem; }
}

@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 80px;
    flex-direction: column;
    background: #F0F0F0;
    width: 100%;
    height: calc(100vh - 80px);
    transition: 0.3s;
    padding: 2rem 0;
    overflow-y: auto;
  }
  .nav-menu.active { left: 0; }
  .dropdown-box { position: static; box-shadow: none; width: 100%; background: #e8e8e8; margin-top: 10px; }
}
</style>