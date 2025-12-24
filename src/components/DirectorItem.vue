<template>
  <div class="director-card">
    <div class="image-box">
      <img :src="isBatalov ? '/images/batalov.png' : '/images/erzhanova.jpg'" alt="Director">
    </div>
    <div class="text-box">
      <h3 class="name">
        {{ isBatalov ? 'Раимбек Баталов' : 'Альбина Ержанова' }}
      </h3>
      <p class="role">
        {{ isBatalov 
          ? 'Chairman of the Board of Directors, ENACTUS Kazakhstan; Chairman of the Board of Directors, RAIMBEK BOTTLERS GROUP' 
          : 'Президент и CEO Enactus Kazakhstan' 
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['type']);
const isBatalov = computed(() => props.type === 'batalov');
</script>

<style scoped>
.director-card {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 450px;
  background: white;
}

.image-box img {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  object-fit: cover;
  display: block;
}

.text-box {
  max-width: 280px;
  text-align: left;
}

.name {
  font-size: 16px;
  font-weight: 800;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0 0 8px 0;
  color: #333;
}

.pin-icon { 
  color: #ffc107; 
  flex-shrink: 0;
  font-size: 14px;
}

.role {
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  margin: 0;
}
</style>