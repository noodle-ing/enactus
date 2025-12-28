<template>
  <div class="council-card">
    <div class="image-box">
      <img :src="isSaule ? '/images/saule.png' : '/images/askar.png'" alt="Member">
    </div>
    <div class="text-box">
      <h3 class="name">
        {{ isSaule ? 'Сауле Зейнолла' : 'Аскар Нурша' }}
      </h3>
      <p class="role">
        {{ isSaule 
          ? 'Председатель Академического совета ENACTUS Kazakhstan, Доктор PhD, независимый эксперт ЮНЕСКО' 
          : 'Советник директора Казахстанского института стратегических исследований' 
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['type']);
const isSaule = computed(() => props.type === 'saule');
</script>

<style scoped>
.council-card {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 480px; /* Немного шире, так как текст должностей длинный */
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
  max-width: 320px;
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

.pin-icon { color: #ffc107; flex-shrink: 0; font-size: 14px; }

.role {
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  margin: 0;
}
</style>