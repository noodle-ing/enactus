<template>
  <div class="council-card">
    <div class="image-box">
      <img :src="images[props.type] || images.saule" :alt="memberText.name">
    </div>
    <div class="text-box">
      <h3 class="name">{{ memberText.name }}</h3>
      <p class="role">{{ memberText.role }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, rt } = useI18n();
const props = defineProps(['type']);

// Храним только пути к картинкам
const images = {
  saule: '/images/saule.JPG',
  askar: '/images/askar.jpeg',
  bakirova: '/images/bakirova.JPG',
  galia: '/images/galia.JPG',
  enlik: '/images/enlik.JPG',
  zhenis: '/images/zhenis.jpg',
  zhannet: '/images/zhannet.jpeg',
  danial: '/images/danial.jpeg',
  yerlan: '/images/Yerlan Karimov.JPG',
  gulsim: '/images/Gulsim Aitkhozhaeva.JPG',
  galiya: '/images/Galiya Myamesheva .JPG',
};

// Получаем переведенные данные из i18n
const memberText = computed(() => {
  // tm('council.members') возвращает весь объект переводов
  const allMembers = tm('council.members');
  const data = allMembers[props.type] || allMembers.saule;

  return {
    name: rt(data.name),
    role: rt(data.role)
  };
});
</script>

<style scoped>
.council-card {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 500px;
  background: white;
  padding: 10px; /* Добавил немного отступа */
}

.image-box img {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  background-color: #f5f5f5;
}

.text-box {
  max-width: 340px;
  text-align: left;
}

.name {
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #333;
}

.role {
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  margin: 0;
}
</style>