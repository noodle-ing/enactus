<template>
  <div class="director-card">
    <div class="image-box">
      <img :src="currentDirectorData.image" :alt="currentDirectorData.name">
    </div>
    <div class="text-box">
      <h3 class="name">
        {{ currentDirectorData.name }}
      </h3>
      <p class="role">
        {{ currentDirectorData.role }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps(['type']);
const { t } = useI18n();

// 1. Справочник только для путей к изображениям и имен (статичные данные)
const staticData = {
  batalov: { name: 'RAIMBEK BATALOV', image: '/images/batalov.png' },
  erzhanova: { name: 'ALBINA YERZHANOVA', image: '/images/erzhanova.jpg' },
  abdykulova: { name: 'AIMAN ABDYKULOVA', image: '/images/AIMAN ABDYKULOVA.jpeg' },
  akbalayeva: { name: 'GULBANU AKBALAYEVA', image: '/images/GULBANU AKBALAYEVA.jpg' },
  nurkatov: { name: 'ARNUR NURKATOV', image: '/images/ARNUR NURKATOV.jpg' },
  kiyassova: { name: 'AIZHAN KIYASSOVA', image: '/images/AIZHAN KIYASSOVA.jpg' },
  khojanazarov: { name: 'BARZONI NABIYEV', image: '/images/BARZONI NABIYEV.jpg' },
  nabiyev: { name: 'AIDARBEK KHOJANAZAROV', image: '/images/AIDARBEK KHOJANAZAROV.jpg' },
  sagdiev: { name: 'ASKHAT SAGDIYEV', image: '/images/ASKHAT SAGDIYEV.jpeg' },
  myngbay: { name: 'DARKHAN MYNGBAY', image: '/images/DARKHAN MYNGBAY.jpg' },
  zhukov: { name: 'DMITRY ZHUKOV', image: '/images/DMITRY ZHUKOV.jpg' },
  khamzi: { name: 'GANI KHAMZIN', image: '/images/GANI KHAMZIN.jpg' },
  aitmaganbet: { name: 'MAKSUTBEK AITMAGANBET', image: '/images/MAKSUTBEK AITMAGANBET.jpeg' },
  telemtayev: { name: 'MAXIM TELEMTAYEV', image: '/images/MAXIM TELEMTAYEV.jpg' },
  kaygorotseva: { name: 'MAYA KAYGORODTSEVA', image: '/images/MAYYA KAYGORODTSEVA.jpg' },
  bekmaganbetov: { name: 'MAKSUT BEKMAGANBETOV', image: '/images/MAKSUT BEKMAGANBETOV.jpg' },
  ilyassov: { name: 'MURAT ILYASSOV', image: '/images/MURAT ILYASSOV.jpg' },
  zhussupekov: { name: 'MURATBEK ZHUSSUPEKOV', image: '/images/MURATBEK ZHUSSUPEKOV.jpg' },
  mukashev: { name: 'BALTABEK MUKASHEV', image: '/images/BALTABEK.jpg' },
  umiryaev: { name: 'MUSLIM UMIRYAEV', image: '/images/MUSLIM UMIRYAEV.jpg' },
  zhussupov: { name: 'SHALKAR ZHUSSUPOV', image: '/images/SHALKAR ZHUSSUPOV.jpg' },
  mukhamadiyeva: { name: 'AIGUL MUKHAMADIYEVA', image: '/images/AIGUL MUKHAMADIYEVA.jpg' },
  bitemirov: { name: 'BAKYTZHAN BITEMIROV', image: '/images/BAKYTZHAN BITEMIROV.jpg' },
  lineitsev: { name: 'ROMAN LINEITSEV', image: '/images/ROMAN LINEITSEV.jpg' },
  toleuov: { name: 'YERGALY TOLEUOV', image: '/images/YERGALY TOLEUOV.jpg' },
  naisbecov: { name: 'YERNAR NAKISBEKOV', image: '/images/YERNAR NAKISBEKOV.jpg' },
  balgozhina: { name: 'MEIRAMGUL BALGOZHINA', image: '/images/MEIRAMGUL BALGOZHINA.jpg' },
  gussein: { name: 'GUSSEIN NABIYEV', image: '/images/GUSSEIN NABIYEV.jpg' },
  ilyas: { name: 'ILYAS NABIYEV', image: '/images/ILYAS NABIYEV.jpg' },
  mukhametov: { name: 'ALMAS MUKHAMETOV', image: '/images/ALMAS MUKHAMETOV.jpg' },
  pershin: { name: 'VLADISLAV PERSHIN', image: '/images/VLADISLAV PERSHIN.jpg' },
  idrissov: { name: 'RUSLAN IDRISSOV', image: '/images/RUSLAN IDRISSOV.jpg' },
  badina: { name: 'ASSEL BADINA', image: '/images/ASSEL BADINA.jpg' },
  mukushev: { name: 'BULAT MUKUSHEV', image: '/images/HB POSTERS.png' },
  muhtar : {name: 'MURAT AKHMETOV', image: '/images/muhtar.jpg' },
};

// 2. Полностью динамическое вычисление данных текущего директора
const currentDirectorData = computed(() => {
  const type = props.type || 'batalov';
  const person = staticData[type] || staticData.batalov;

  return {
    name: person.name,
    image: person.image,
    // Вызов t() внутри computed гарантирует реактивность при смене locale
    role: t(`board.members.${type}.role`)
  };
});
</script>

<style scoped>
.director-card {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 450px;
  background: white;
  padding: 10px;
  border-radius: 20px;
  /* Устанавливаем высоту, чтобы карточки были одинаковыми */
  min-height: 160px;
}

.image-box img {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
}

.text-box {
  max-width: 280px;
  text-align: left;
}

.name {
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: #333;
}

.role {
  font-size: 11px;
  line-height: 1.3;
  color: #555;
  margin: 0;
}
</style>