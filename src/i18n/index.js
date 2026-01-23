import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            headquarters: 'Headquarters',
            board: 'Board of Directors',
            council: 'Academic Council',
            business: 'Business',
            sponsors: 'Sponsors',
            partnership: 'Partnership',
            participants: 'For Participants',
            teams: 'Teams',
            camp: 'Enactus Camp',
            roadshow: 'Road Show',
            competitions: 'Competitions',
            news: 'News',
            contact: 'Contact'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            about: 'О нас',
            headquarters: 'Штаб-квартира',
            board: 'Совет директоров',
            council: 'Академический совет',
            business: 'Бизнес',
            sponsors: 'Спонсоры',
            partnership: 'Партнерство',
            participants: 'Участникам',
            teams: 'Команды',
            camp: 'Enactus Camp',
            roadshow: 'Road Show',
            competitions: 'Соревнования',
            news: 'Новости',
            contact: 'Связаться'
        }
    },
    kz: {
        nav: {
            home: 'Басты бет',
            about: 'Біз туралы',
            headquarters: 'Штаб-пәтер',
            board: 'Директорлар кеңесі',
            council: 'Академиялық кеңес',
            business: 'Бизнес',
            sponsors: 'Демеушілер',
            partnership: 'Серіктестік',
            participants: 'Қатысушыларға',
            teams: 'Командалар',
            camp: 'Enactus Camp',
            roadshow: 'Road Show',
            competitions: 'Жарыстар',
            news: 'Жаңалықтар',
            contact: 'Байланысу'
        }
    }
}

const i18n = createI18n({
    legacy: false, // Обязательно для Vue 3 Composition API
    locale: localStorage.getItem('lang') || 'ru', // Берем из памяти или ставим RU
    fallbackLocale: 'en',
    messages,
})

export default i18n