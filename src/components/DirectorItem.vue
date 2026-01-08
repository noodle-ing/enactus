<template>
  <div class="director-card">
    <div class="image-box">
      <img :src="currentDirector.image" :alt="currentDirector.name">
    </div>
    <div class="text-box">
      <h3 class="name">
        {{ currentDirector.name }}
      </h3>
      <p class="role">
        {{ currentDirector.role }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['type']);

// 1. Создаем справочник всех участников
const directorsData = {
  batalov: {
    name: 'Раимбек Баталов',
    role: 'Chairman of the Board of Directors, ENACTUS Kazakhstan; Chairman of the Board of Directors, RAIMBEK BOTTLERS GROUP',
    image: '/images/batalov.png'
  },
  erzhanova: {
    name: 'Альбина Ержанова',
    role: 'Президент и CEO Enactus Kazakhstan',
    image: '/images/erzhanova.jpg'
  },
  // ДОБАВЛЯЙТЕ НОВЫХ ЛЮДЕЙ НИЖЕ:
  abdykulova: {
    name: 'AIMAN ABDYKULOVA',
    role: 'Deputy Director for Development - Financial Director, MODERN ELECTRO PLUS',
    image: '/images/AIMAN ABDYKULOVA.jpeg'
  },
  akbalayeva: {
    name: 'GULBANU AKBALAYEVA',
    role: 'Deputy Chairman of the Board of Directors, ENACTUS Kazakhstan',
    image: '/images/GULBANU AKBALAYEVA.jpg'
  },
  
  nurkatov: {
    name: 'ARNUR NURKATOV',
    role: 'Member of Board of directors ENACTUS Kazakhstan',
    image: 'public/images/ARNUR NURKATOV.jpg'
  },

  kiyassova: {
    name: 'AIZHAN KIYASSOVA',
    role: 'Deputy Chairman of the Regional Commission for Women and Family and Demographic Policy',
    image: 'images/AIZHAN KIYASSOVA.jpg'
  },

  khojanazarov: {
    name: 'AIDARBEK KHOJANAZAROV',
    role: 'Chairman of the Supervisory Board, A.B.S. Stroy',
    image: '/images/BARZONI NABIYEV.jpg'
  },

   nabiyev: {
    name: 'BARZONI NABIYEV',
    role: 'Deputy of the Majilis of the Parliament of the Republic of Kazakhstan Chairman of the Respublica',
    image: '/images/AIDARBEK KHOJANAZAROV.jpg'
  },


   sagdiev: {
    name: 'ASKHAT SAGDIYEV',
    role: 'Председатель совета директоров Most Holding',
    image: '/images/ASKHAT SAGDIYEV.jpeg'
  },

   myngbay: {
    name: 'DARKHAN MYNGBAY',
    role: 'Member of the Board of Directors ENACTUS Kazakhstan, Kazakh statesman',
    image: '/images/DARKHAN MYNGBAY.jpg'
  },

   zhukov: {
    name: 'DMITRY ZHUKOV',
    role: 'Executive Director, QazSpirits Association',
    image: '/images/DMITRY ZHUKOV.jpg'
  },

   khamzi: {
    name: 'GANI KHAMZIN',
    role: 'Deputy of the Mazhilis of the Parliament of the Republic of Kazakhstan',
    image: '/images/GANI KHAMZIN.jpg'
  },

   aitmaganbet: {
    name: 'MAKSUTBEK AITMAGANBET',
    role: 'Председатель республиканского общественного объединения "Союз отцов"',
    image: '/images/MAKSUTBEK AITMAGANBET.jpeg'
  },

   telemtayev: {
    name: 'MAXIM TELEMTAYEV',
    role: 'MANAGING PARTNER, WHITE&CASE Kazakhstan',
    image: '/images/MAXIM TELEMTAYEV.jpg'
  },

  kaygorotseva: {
    name: 'MAYYA KAYGORODTSEVA',
    role: 'General Director, engineering company “Leader”',
    image: '/images/MAYYA KAYGORODTSEVA.jpg'
  },

  bekmaganbetov: {
    name: 'MAKSUT BEKMAGANBETOV',
    role: 'Member of the Board of Directors ENACTUS Kazakhstan',
    image: '/images/MAKSUT BEKMAGANBETOV.jpg'
  },

  ilyassov: {
    name: 'MURAT ILYASSOV',
    role: 'Deputy Director for Development, KT Cloud Lab',
    image: '/images/MURAT ILYASSOV.jpg'
  },

  zhussupekov: {
    name: 'MURATBEK ZHUSSUPEKOV',
    role: 'Financial Director, KT CLOUD LAB',
    image: '/images/MURATBEK ZHUSSUPEKOV.jpg'
  },

  mukashev: {
    name: 'BALTABEK MUKASHEV',
    role: 'Member of the Board of Directors ENACTUS Kazakhstan',
    image: '/images/BALTABEK.jpg'
  },

  umiryaev: {
    name: 'MUSLIM UMIRYAEV',
    role: 'General Director, Global BEVERAGES',
    image: '/images/MUSLIM UMIRYAEV.jpg'
  },

  zhussupov: {
    name: 'SHALKAR ZHUSSUPOV',
    role: 'Chairman of the Board, "KMF" Bank',
    image: '/images/SHALKAR ZHUSSUPOV.jpg'
  },

  mukhamadiyeva: {
    name: 'AIGUL MUKHAMADIYEVA',
    role: 'Managing Director - Head of the Directorate for Natural Resources and Agriculture. Member of the Board of the Eurasian Development Bank',
    image: '/images/AIGUL MUKHAMADIYEVA.jpg'
  },

  bitemirov: {
    name: 'BAKYTZHAN BITEMIROV',
    role: 'MSc, CSE - Chief Executive Officer - KBSTECH',
    image: '/images/BAKYTZHAN BITEMIROV.jpg'
  },

  lineitsev: {
    name: 'ROMAN LINEITSEV',
    role: 'CEO Grand Mobile',
    image: '/images/ROMAN LINEITSEV.jpg'
  },

  toleuov: {
    name: 'YERGALY TOLEUOV',
    role: 'Директор Nova Capital LLP',
    image: '/images/YERGALY TOLEUOV.jpg'
  },

  naisbecov: {
    name: 'YERNAR NAKISBEKOV',
    role: 'GENERAL DIRECTOR, ZOR TECHNOLOGIES',
    image: '/images/YERNAR NAKISBEKOV.jpg'
  },

  balgozhina: {
    name: 'MEIRAMGUL BALGOZHINA',
    role: '”CEO “EMPIRE TRAVEL QAZAQSTAN”',
    image: '/images/MEIRAMGUL BALGOZHINA.jpg'
  },

  gussein: {
    name: 'GUSSEIN NABIYEV',
    role: 'Commercial Director of ATK-2005',
    image: '/images/GUSSEIN NABIYEV.jpg'
  },

  ilyas: {
    name: 'ILYAS NABIYEV',
    role: 'Директор по развитию бизнеса ТОО “ABS строй”',
    image: '/images/ILYAS NABIYEV.jpg'
  },

  mukhametov: {
    name: 'ALMAS MUKHAMETOV',
    role: 'Founder of the "Pharmaland" company',
    image: '/images/ALMAS MUKHAMETOV.jpg'
  },

  pershin: {
    name: 'VLADISLAV PERSHIN',
    role: 'General Director of the 99.99 Agency',
    image: '/images/VLADISLAV PERSHIN.jpg'
  },

  idrissov: {
    name: 'RUSLAN IDRISSOV',
    role: 'GENERAL DIRECTOR, GLOBAL FOODS',
    image: '/images/RUSLAN IDRISSOV.jpg'
  },
  badina: {
    name: 'ASSEL BADINA',
    role: 'Head of the Personnel Assessment and Development Department (Head of T&D) "Kazakhmys Corporation" LLP',
    image: '/images/ASSEL BADINA.jpg'
  },

  mukushev: {
    name: 'BULAT MUKUSHEV',
    role: 'President, TSSP Group',
    image: '/images/HB POSTERS.png'
  }
};

// 2. Вычисляем, какого именно директора показать
const currentDirector = computed(() => {
  // Если тип не найден в списке, покажем Баталова по умолчанию
  return directorsData[props.type] || directorsData['batalov'];
});
</script>

<style scoped>
/* Стили остаются без изменений, они у вас отличные */
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