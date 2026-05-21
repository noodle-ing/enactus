<template>
  <div class="graduate-card">
    <div class="image-box">
      <img :src="images[props.type] || images.saule" :alt="displayName">
    </div>
    <div class="text-box">
      <h3 class="name">{{ displayName }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['type']);

const images = {
  yerzhight:    '/images/alumin/YERZHIGIT NABIYEV.png',
  marina:       '/images/alumin/MARINA ORYNBAYEVA.png',
  adar:         '/images/alumin/AIDAR KAKABAYEV.png',
  maya:         '/images/alumin/MAYA KAIGORODSEVA.png',
  almas:        '/images/alumin/Almas Mukhametov.png',
  dauren:       '/images/alumin/DAUREN ZHAKAY.png',
  nurbakhyt:    '/images/alumin/NURBAKHYT NURBAYEV.png',
  assel:        '/images/alumin/ASSEL BADINA .png',
  karimzhan:    '/images/alumin/KARIMZHAN SULEIMANOV .png',
  aruzhan:      '/images/alumin/ARUZHAN KARIMOVA .png',
  ALIZHAN:      '/images/alumin/ALIZHAN NURGAZY.png',
  VLADISLAV:    '/images/alumin/VLADISLAV PERsHiN.png',
  ALIYA:        '/images/alumin/ALIYA RYSBEKOVA.png',
  MUKAGALI:     '/images/alumin/MUKAGALI IKRAMOV .png',
  TEMIRLAN:     '/images/alumin/TEMIRLAN ABZHANOV.png',
  DIANA:        '/images/alumin/DIANA NURZHANova.png',
  ALINA:        '/images/alumin/ALINA BEGIMOVA.png',
  BEKZHAN:      '/images/alumin/BEKZHAN SERIKKALIYEV.png',
  BENAZIR:      '/images/alumin/BENAZIR MAMYTOVA.png',
  SULTAN:       '/images/alumin/sultan mukhamedkaliev.png',
  ANEL:         '/images/alumin/ANEL KOBEY.png',
  SULEIMEN:     '/images/alumin/SULEIMEN MAMEN.png',
  NAZERKE:      '/images/alumin/NAZERKE ORYNKHAN .png',
  DAURZHAN:     '/images/alumin/Daurzhan Augambau .png',
  TEMIRLAN2:    '/images/alumin/TEMIRLAN BERKIMBAYEV.png',
  ULYKZHAN:     '/images/alumin/ulykzhan Kakharmanuly.png',
  AMINA:        '/images/alumin/AMINA KENES.png',
  DANIYAL:      '/images/alumin/Daniyal KAKABAYEV.png',
  AIKENZHE:     '/images/alumin/Aikenzhe Zhassulanova.png',
  ZHANBOTA:     '/images/alumin/IMG_7165.JPG',
};

const alumniData = {
  yerzhight: "YERZHIGIT NABIYEV",
  marina: "MARINA ORYNBAYEVA",
  adar: "AIDAR KAKABAYEV",
  maya: "MAYA KAIGORODSEVA",
  almas: "ALMAS MUKHAMETOV",
  dauren: "DAUREN ZHAKAY",
  nurbakhyt: "NURBAKHYT NURBAYEV",
  assel: "ASSEL BADINA",
  karimzhan: "KARIMZHAN SULEIMANOV",
  aruzhan: "ARUZHAN KARIMOVA",
  ALIZHAN: "ALIZHAN NURGAZY",
  VLADISLAV: "VLADISLAV PERSHIN",
  ALIYA: "ALIYA RYSBEKOVA",
  MUKAGALI: "MUKAGALI IKRAMOV",
  TEMIRLAN: "TEMIRLAN ABZHANOV",
  DIANA: "DIANA NURZHANOVA",
  ALINA: "ALINA BEGIMOVA",
  BEKZHAN: "BEKZHAN SERIKKALIYEV",
  BENAZIR: "BENAZIR MAMYTOVA",
  SULTAN: "SULTAN MUKHAMEDKALIEV",
  ANEL: "ANEL KOBEY",
  SULEIMEN: "SULEIMEN MAMEN",
  NAZERKE: "NAZERKE ORYNKHAN",
  DAURZHAN: "DAURZHAN AUGAMBAY",
  TEMIRLAN2: "TEMIRLAN BERKIMBAYEV",
  ULYKZHAN: "ULYKZHAN KAKHARMANULY",
  AMINA: "AMINA KENES",
  DANIYAL: "DANIYAL KAKABAYEV",
  AIKENZHE: "AIKENZHE ZHASSULANOVA",
  ZHANBOTA: "ZHANBOTA ANUAR",
};

const displayName = computed(() => {
  // Ищем имя в нашем объекте, если нет — выводим пустую строку или заглушку
  return alumniData[props.type] || "Graduate";
});
</script>

<style scoped>
.graduate-card {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 320px; /* Немного увеличил, чтобы длинные имена не сжимались */
  background: white;
  padding: 10px;
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
  text-align: left;
}

.name {
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: #333;
  text-transform: uppercase; /* Чтобы все имена были в одном стиле, как в списке */
}
</style>