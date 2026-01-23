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
            contact: 'Contact',
            howToCreate: 'How to create a team?',
            schoolCup: 'National School Entrepreneurship Championship',
            allRights: 'All rights reserved.',
            footerHome: 'Home' // Для заголовка колонки
        },
        home: {
            heroTitle: 'WE ALL WIN',
            heroSubtitle: 'Become part of a student movement changing the future of Kazakhstan through entrepreneurship.',
            joinBtn: 'Join Us',
            aboutTitlePart1: 'WHAT IS ',
            aboutTitlePart2: 'ENACTUS?',
            aboutP1: 'ENACTUS is an international non-profit organization that brings together students, academics and business leaders to develop youth entrepreneurship.',
            aboutP2: 'Our goal is to inspire students to create social business projects that solve important socio-economic, environmental and humanitarian problems.',
            quote: 'We believe that by investing in students who take entrepreneurial action for others, we create a better world for us all.',
            stats: {
                regions: 'regions of Kazakhstan',
                institutions: 'educational institutions',
                students: 'students annually',
            }
        },
        projects: {
            title: 'OUR STUDENT PROJECTS',
            items: {
                amu: {name: 'Astana Medical University', desc: 'ZhanCare — a new generation medical ecosystem.'},
                kaznu: {name: 'Al-Farabi KazNU', desc: 'Innovative project in ecology and IT.'},
                narxoz: {name: 'Narxoz University', desc: 'Social entrepreneurship and youth support.'},
                coll: {name: 'College of Foreign Languages', desc: 'Educational platform for language learning.'}
            }
        },
        news: {
            title: 'NEWS',
            viewAll: 'View all news',
            items: {
                expo: {
                    title: 'ENACTUS Kazakhstan National Expo',
                    desc: 'The 30th anniversary Youth Entrepreneurship Cup was held at the Independence Palace in Astana.'
                },
                world25: {
                    title: 'Kazakhstan at the ENACTUS World Cup 2025',
                    desc: 'Based on the results of a two-day decent performance, the university team took an honorable place.'
                },
                world24: {
                    title: 'ENACTUS World Cup 2024 is held in Kazakhstan for the first time',
                    desc: 'The opening ceremony of the World Championship took place on October 2 in Astana.'
                }
            }
        },
        world: {
            title: 'ENACTUS WORLDWIDE',
            text: 'Today, ENACTUS brings together teams from more than 30 countries around the world. Students, professors, and business partners from all corners of the planet implement social entrepreneurship projects aimed at sustainable development, community support, and environmental initiatives.'
        },
        map: {
            title: 'ENACTUS IN KAZAKHSTAN',
            description: 'We bring together universities and students from across the country, creating projects that improve life in cities and regions. Every participant becomes part of a unified team changing the country\'s future.'
        },
        contact: {
            support: 'SUPPORTED BY',
            cardTitle: 'THE WORLD NEEDS US!',
            cardText: 'Become part of a team that acts for real change and helps the world move forward.',
            labelName: 'Name',
            labelPhone: 'Phone number',
            placeholderName: 'Enter your name',
            btnSubmit: 'I want to participate',
            btnSending: 'Sending...',
            success: 'Application successfully sent to wondefful204@gmail.com!',
            error: 'An error occurred while sending the application.'
        },
        headquarters: {
            title: 'Headquarters',
            ceoName: 'Albina Yerzhanova',
            ceoRole: 'CEO & President of ENACTUS KAZAKHSTAN, PhD',
            ceoGreeting: 'Dear friends!',
            ceoText1: 'On behalf of the Enactus Kazakhstan national office, let me welcome you and thank you for your interest in our activities.',
            ceoText2: 'ENACTUS is a non-profit organization whose goal is to improve the standard of living of the population through business.',
            ceoText3: 'Our main activity is focused on working with the future generation of leaders. It is important for us to develop consciousness, social responsibility, talent, and the ability to act in the name of the future progress of our country in young Kazakhstanis.',
            signature: 'Sincerely, Albina Meirbekovna Yerzhanova',
            members: {
                randall: { name: 'Randall Bruins', role: 'Strategic Development Advisor, ENACTUS KAZAKHSTAN' },
                aizhan: { name: 'Aizhan Aubakirova', role: 'Chief Accountant, ENACTUS KAZAKHSTAN' },
                aruzhan: { name: 'Aruzhan Karimova', role: 'Program Manager, ENACTUS KAZAKHSTAN' },
                albina: { name: 'Albina Aysamutdinova', role: 'Regional Coordinator, ENACTUS KAZAKHSTAN, Astana' },
                zhasulan: { name: 'Zhasulan Baurzhanuly', role: 'Regional Coordinator, ENACTUS KAZAKHSTAN, East Kazakhstan Region' }
            }
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
            contact: 'Связаться',
            howToCreate: 'Как создать команду?',
            schoolCup: 'Республиканский чемпионат школьного предпринимательства',
            allRights: 'Все права защищены.',
            footerHome: 'Главная'
        },
        home: {
            heroTitle: 'WE ALL WIN',
            heroSubtitle: 'Стань частью движения студентов, которые меняют будущее Казахстана через предпринимательство.',
            joinBtn: 'Присоединиться',
            aboutTitlePart1: 'ЧТО ТАКОЕ ',
            aboutTitlePart2: 'ENACTUS?',
            aboutP1: 'ENACTUS — это международная некоммерческая организация, которая объединяет студентов, преподавателей и бизнес-лидеров для развития молодежного предпринимательства.',
            aboutP2: 'Наша цель — вдохновлять студентов на создание социальных бизнес-проектов, которые решают важные социально-экономические, экологические и гуманитарные проблемы.',
            quote: 'Мы верим, что, инвестируя в студентов, использующих предпринимательские подходы для других, мы создаём лучший мир для всех нас.',
            stats: {
                regions: 'регионов Казахстана',
                institutions: 'учебных заведений',
                students: 'студентов ежегодно',
                companies: 'компаний'
            }
        },
        projects: {
            title: 'ПРИМЕРЫ ПРОЕКТОВ НАШИХ СТУДЕНТОВ',
            items: {
                amu: { name: 'Astana Medical University', desc: 'ZhanCare — медицинская экосистема нового поколения.' },
                kaznu: { name: 'КазНУ им. Аль-Фараби', desc: 'Инновационный проект в области экологии и IT.' },
                narxoz: { name: 'Narxoz University', desc: 'Социальное предпринимательство и поддержка молодежи.' },
                coll: { name: 'Колледж иностранных языков', desc: 'Образовательная платформа для изучения языков.' }
            }
        },
        news: {
            title: 'НОВОСТИ',
            viewAll: 'Посмотреть все новости',
            items: {
                expo: {
                    title: 'ENACTUS Kazakhstan National Expo',
                    desc: 'Во Дворце Независимости в Астане состоялся 30-й юбилейный Кубок молодежного предпринимательства.'
                },
                world25: {
                    title: 'Казахстан на мировом кубке «ENACTUS World Cup 2025»',
                    desc: 'По результатам двухдневного достойного выступления команда университета заняла почетное место.'
                },
                world24: {
                    title: 'Впервые в Казахстане проходит ENACTUS World Cup 2024',
                    desc: '2 октября в Астане состоялась церемония открытия Чемпионата мира.'
                }
            }
        },
        world: {
            title: 'ENACTUS В МИРЕ',
            text: 'На сегодня ENACTUS объединяет команды более чем 30 стран по всему миру. Студенты, преподаватели и бизнес-партнёры из разных уголков планеты реализуют социально-предпринимательские проекты, направленные на устойчивое развитие, поддержку сообществ и экологические инициативы.'
        },
        map: {
            title: 'ENACTUS В КАЗАХСТАНЕ',
            description: 'Мы объединяем университеты и студентов со всей страны, создавая проекты, которые улучшают жизнь в городах и регионах. Каждый участник становится частью единой команды, меняющей будущее страны.'
        },
        contact: {
            support: 'НАС ПОДДЕРЖИВАЮТ',
            cardTitle: 'МЫ НУЖНЫ МИРУ!',
            cardText: 'Стань частью команды, которая действует ради реальных изменений и помогает миру двигаться вперёд.',
            labelName: 'Имя',
            labelPhone: 'Номер телефона',
            placeholderName: 'Введите имя',
            btnSubmit: 'Хочу участвовать',
            btnSending: 'Отправка...',
            success: 'Заявка успешно отправлена на wondefful204@gmail.com!',
            error: 'Произошла ошибка при отправке заявки.'
        },
        headquarters: {
            title: 'Штаб квартира',
            ceoName: 'Альбина Ержанова',
            ceoRole: 'CEO & Президент ENACTUS KAZAKHSTAN, доктор философских наук',
            ceoGreeting: 'Дорогие друзья!',
            ceoText1: 'Позвольте от имени национального офиса Enactus Kazakhstan приветствовать Вас и поблагодарить за проявленный интерес к нашей деятельности.',
            ceoText2: 'ENACTUS — это некоммерческая организация, целью которой является повышение уровня жизни населения через бизнес.',
            ceoText3: 'Основная наша деятельность направлена на работу с будущим поколением лидеров. Для нас важно развивать в молодых казахстанцах сознательность, социальную ответственность, талант и умение действовать во имя будущего прогресса нашей страны.',
            signature: 'С уважением, Альбина Меирбековна Ержанова',
            members: {
                randall: { name: 'Randall Bruins', role: 'Эдвайзер по стратегическому развитию ENACTUS KAZAKHSTAN' },
                aizhan: { name: 'Аубакирова Айжан', role: 'Главный бухгалтер ENACTUS KAZAKHSTAN' },
                aruzhan: { name: 'Каримова Аружан', role: 'Программный менеджер ENACTUS KAZAKHSTAN' },
                albina: { name: 'Альбина Айсамутдинова', role: 'Региональный координатор ENACTUS KAZAKHSTAN, г. Астана' },
                zhasulan: { name: 'Жасулан Бауржанулы', role: 'Региональный координатор ENACTUS KAZAKHSTAN, Восточно-Казахстанская область' }
            }
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
            contact: 'Байланысу',
            howToCreate: 'Команданы қалай құруға болады?',
            schoolCup: 'Республикалық мектеп кәсіпкерлігі чемпионаты',
            allRights: 'Барлық құқықтар қорғалған.',
            footerHome: 'Басты бет'
        },
        home: {
            heroTitle: 'WE ALL WIN',
            heroSubtitle: 'Кәсіпкерлік арқылы Қазақстанның болашағын өзгертетін студенттік қозғалыстың бір бөлігі бол.',
            joinBtn: 'Қосылу',
            aboutTitlePart1: '',
            aboutTitlePart2: 'ENACTUS ДЕГЕНІМІЗ НЕ?',
            aboutP1: 'ENACTUS — жастар кәсіпкерлігін дамыту үшін студенттердің, оқытушылардың және бизнес-көшбасшылардың басын қосатын халықаралық коммерциялық емес ұйым.',
            aboutP2: 'Біздің мақсатымыз — студенттерді маңызды әлеуметтік-экономикалық, экологиялық және гуманитарлық мәселелерді шешетін әлеуметтік бизнес-жобаларды құруға шабыттандыру.',
            quote: 'Басқалар үшін кәсіпкерлік тәсілдерді қолданатын студенттерге инвестиция салу арқылы біз бәріміз үшін жақсы әлем құратынымызға сенеміз.',
            stats: {
                regions: 'Қазақстан аймағы',
                institutions: 'оқу орны',
                students: 'студент жыл сайын',
                companies: 'компания'
            }
        },
        projects: {
            title: 'СТУДЕНТТЕРІМІЗДІҢ ЖОБАЛАРЫНЫҢ МЫСАЛДАРЫ',
            items: {
                amu: { name: 'Астана медицина университеті', desc: 'ZhanCare — жаңа буын медициналық экожүйесі.' },
                kaznu: { name: 'Әл-Фараби атындағы ҚазҰУ', desc: 'Экология және IT саласындағы инновациялық жоба.' },
                narxoz: { name: 'Нархоз Университеті', desc: 'Әлеуметтік кәсіпкерлік және жастарды қолдау.' },
                coll: { name: 'Шет тілдер колледжі', desc: 'Тілдерді үйренуге арналған білім беру платформасы.' }
            }
        },
        news: {
            title: 'ЖАҢАЛЫҚТАР',
            viewAll: 'Барлық жаңалықтарды көру',
            items: {
                expo: {
                    title: 'ENACTUS Kazakhstan National Expo',
                    desc: 'Астанадағы Тәуелсіздік сарайында жастар кәсіпкерлігінің 30-шы мерейтойлық кубогы өтті.'
                },
                world25: {
                    title: 'Қазақстан «ENACTUS World Cup 2025» әлем кубогында',
                    desc: 'Екі күндік лайықты өнер көрсету нәтижесінде университет командасы жүлделі орынға ие болды.'
                },
                world24: {
                    title: 'ENACTUS World Cup 2024 алғаш рет Қазақстанда өтуде',
                    desc: '2 қазанда Астанада Әлем чемпионатының ашылу салтанаты өтті.'
                }
            }
        },
        world: {
            title: 'ӘЛЕМДЕГІ ENACTUS',
            text: 'Бүгінгі таңда ENACTUS бүкіл әлем бойынша 30-дан астам елдің командаларының басын қосады. Планетаның әр түкпірінен келген студенттер, оқытушылар мен бизнес-серіктестер тұрақты дамуға, қоғамдастықтарды қолдауға және экологиялық бастамаларға бағытталған әлеуметтік-кәсіпкерлік жобаларды жүзеге асыруда.'
        },
        map: {
            title: 'ҚАЗАҚСТАНДАҒЫ ENACTUS',
            description: 'Біз бүкіл елдегі университеттер мен студенттердің басын қосып, қалалар мен аймақтардағы өмірді жақсартатын жобалар жасаймыз. Әрбір қатысушы елдің болашағын өзгертетін біртұтас команданың мүшесіне айналады.'
        },
        contact: {
            support: 'БІЗДІ ҚОЛДАЙТЫНДАР',
            cardTitle: 'БІЗ ӘЛЕМГЕ КЕРЕКПІЗ!',
            cardText: 'Нақты өзгерістер үшін әрекет ететін және әлемнің алға жылжуына көмектесетін команданың мүшесі бол.',
            labelName: 'Атыңыз',
            labelPhone: 'Телефон нөмірі',
            placeholderName: 'Атыңызды енгізіңіз',
            btnSubmit: 'Қатысқым келеді',
            btnSending: 'Жіберу...',
            success: 'Өтінім wondefful204@gmail.com мекенжайына сәтті жіберілді!',
            error: 'Өтінімді жіберу кезінде қате кетті.'
        },
        headquarters: {
            title: 'Штаб-пәтер',
            ceoName: 'Альбина Ержанова',
            ceoRole: 'ENACTUS KAZAKHSTAN CEO және Президенті, философия ғылымдарының докторы',
            ceoGreeting: 'Құрметті достар!',
            ceoText1: 'Enactus Kazakhstan ұлттық кеңсесінің атынан Сіздерге қошемет білдіруге және біздің қызметімізге қызығушылық танытқандарыңыз үшін алғыс айтуға рұқсат етіңіздер.',
            ceoText2: 'ENACTUS — бұл бизнес арқылы халықтың өмір сүру деңгейін көтеруді мақсат ететін коммерциялық емес ұйым.',
            ceoText3: 'Біздің негізгі қызметіміз болашақ көшбасшылармен жұмыс істеуге бағытталған. Біз үшін жас қазақстандықтардың бойында саналылықты, әлеуметтік жауапкершілікті, талант пен еліміздің болашақ прогресі жолында әрекет ету қабілетін дамыту маңызды.',
            signature: 'Құрметпен, Альбина Мейірбекқызы Ержанова',
            members: {
                randall: {name: 'Randall Bruins', role: 'ENACTUS KAZAKHSTAN стратегиялық даму жөніндегі кеңесшісі'},
                aizhan: {name: 'Әубәкірова Айжан', role: 'ENACTUS KAZAKHSTAN бас есепшісі'},
                aruzhan: {name: 'Кәрімова Аружан', role: 'ENACTUS KAZAKHSTAN бағдарламалық менеджері'},
                albina: {name: 'Альбина Айсамутдинова', role: 'ENACTUS KAZAKHSTAN өңірлік үйлестірушісі, Астана қ.'},
                zhasulan: {
                    name: 'Жасұлан Бауыржанұлы',
                    role: 'ENACTUS KAZAKHSTAN өңірлік үйлестірушісі, Шығыс Қазақстан облысы'
                }
            }
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