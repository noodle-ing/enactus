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
        sponsors: {
            title: 'Sponsors',
            tiers: {
                general: 'GENERAL SPONSOR',
                platinum: 'PLATINUM SPONSORS',
                gold: 'GOLD SPONSORS',
                silver: 'SILVER SPONSORS'
            }
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
            },
        },
        camp: {
            title: 'ENACTUS CAMP / Acceleration Business Camp',
            whatIs: {
                header: 'What is ENACTUS KAZAKHSTAN BUSINESS CAMPS?',
                desc: 'This is an intensive training and workshop program, the birthplace of the most interesting and successful business projects. The goal of the youth business camp is to develop student entrepreneurship in Kazakhstan based on the international experience of ENACTUS.'
            },
            program: {
                label: 'In the program:',
                items: [
                    'intensive acceleration of startup projects;',
                    'business consultations from mentors;',
                    'experts from Kazakhstani and international business;',
                    'systematization of knowledge;',
                    'business-networking;',
                    'contacts for a successful career;',
                    'interactives for professional and personal development;',
                    'master classes from Enactus Kazakhstan partners;',
                    'gaining practical skills and competencies;',
                    'personal success stories of program alumni.'
                ]
            },
            features: {
                edu: { title: 'Education', desc: 'The program includes workshops from ENACTUS partners, consultations with business experts, and personal development interactives.' },
                net: { title: 'Networking', desc: 'Meeting participants from other teams; Connecting with culture and business leaders; Business-networking for your career.' },
                rest: { title: 'Rest & Wellness', desc: 'Natural healing factors: pine forest, fresh air, and a lake with mineral water.' },
                mem: { title: 'Memories', desc: 'Everything in ENACTUS is heartfelt. Themed evenings brighten the educational process, and connections last long after the camp.' }
            },
            reportBtn: 'Winter Camp Report 2025'
        },
        teams: {
            title: 'Teams',
            howToCreate: 'How to create a team?',
            tabs: {
                vuz: 'Active Universities',
                colleges: 'Active Colleges',
                schools: 'Active Schools'
            },
            cities: {
                astana: {
                    name: 'Astana',
                    universities: ['Astana University', 'L.N. Gumilyov Eurasian National University']
                },
                almaty: {
                    name: 'Almaty',
                    universities: [
                        'Narxoz University', 'Turan University', 'Satbayev University',
                        'Kenzhegali Sagadiyev University of International Business (UIB)',
                        'Kazakh National Women\'s Teacher Training University',
                        'International IT University (IITU)',
                        'Kazakh-British Technical University (KBTU)',
                        'Al-Farabi Kazakh National University',
                        'Almaty Management University (AlmaU)',
                        'Almaty University of Power Engineering and Telecommunications',
                        'SDU University', 'T.K. Zhurgenov Kazakh National Academy of Arts',
                        'Asfendiyarov Kazakh National Medical University', 'Caspian University'
                    ]
                },
                shymkent: { name: 'Shymkent', universities: ['M. Auezov South Kazakhstan University'] },
                abay: { name: 'Abai Region', universities: ['Shakarim University'] },
                akmola: { name: 'Akmola Region', universities: ['Sh. Ualikhanov Kokshetau University'] },
                aktobe: { name: 'Aktobe Region', universities: ['K. Zhubanov Aktobe Regional University'] },
                almatyRegion: { name: 'Almaty Region', universities: ['Zhetysu University'] },
                atyrau: { name: 'Atyrau Region', universities: ['Atyrau Oil and Gas University'] }
            }
        },
        board: {
            title: 'Board of Directors',
            members: {
                batalov: {
                    name: 'RAIMBEK BATALOV',
                    role: 'Chairman of the Board of Directors, ENACTUS Kazakhstan; Chairman of the Board of Directors, RAIMBEK BOTTLERS GROUP'
                },
                erzhanova: {name: 'ALBINA YERZHANOVA', role: 'President and CEO, Enactus Kazakhstan'},
                abdykulova: {
                    name: 'AIMAN ABDYKULOVA',
                    role: 'Deputy Director for Development - Financial Director, MODERN ELECTRO PLUS'
                },
                akbalayeva: {
                    name: 'GULBANU AKBALAYEVA',
                    role: 'Deputy Chairman of the Board of Directors, ENACTUS Kazakhstan'
                },
                nurkatov: {name: 'ARNUR NURKATOV', role: 'Member of the Board of Directors, ENACTUS Kazakhstan'},
                kiyassova: {
                    name: 'AIZHAN KIYASSOVA',
                    role: 'Deputy Chairman of the Regional Commission for Women and Family Policy'
                },
                khojanazarov: {name: 'AIDARBEK KHOJANAZAROV', role: 'Chairman of the Supervisory Board, A.B.S. Stroy'},
                nabiyev: {
                    name: 'BARZONI NABIYEV',
                    role: 'Deputy of the Majilis of the Parliament of the RK, Chairman of Respublica'
                },
                sagdiev: {name: 'ASKHAT SAGDIYEV', role: 'Chairman of the Board of Directors, Most Holding'},
                myngbay: {
                    name: 'DARKHAN MYNGBAY',
                    role: 'Member of the Board of Directors ENACTUS Kazakhstan, Kazakh statesman'
                },
                zhukov: {name: 'DMITRY ZHUKOV', role: 'Executive Director, QazSpirits Association'},
                khamzi: {
                    name: 'GANI KHAMZIN',
                    role: 'Deputy of the Mazhilis of the Parliament of the Republic of Kazakhstan'
                },
                aitmaganbet: {
                    name: 'MAKSUTBEK AITMAGANBET',
                    role: 'Chairman of the Republican Public Association "Union of Fathers"'
                },
                telemtayev: {name: 'MAXIM TELEMTAYEV', role: 'Managing Partner, WHITE&CASE Kazakhstan'},
                kaygorotseva: {name: 'MAYYA KAYGORODTSEVA', role: 'General Director, engineering company “Leader”'},
                bekmaganbetov: {
                    name: 'MAKSUT BEKMAGANBETOV',
                    role: 'Member of the Board of Directors, ENACTUS Kazakhstan'
                },
                ilyassov: {name: 'MURAT ILYASSOV', role: 'Deputy Director for Development, KT Cloud Lab'},
                zhussupekov: {name: 'MURATBEK ZHUSSUPEKOV', role: 'Financial Director, KT CLOUD LAB'},
                mukashev: {name: 'BALTABEK MUKASHEV', role: 'Member of the Board of Directors, ENACTUS Kazakhstan'},
                umiryaev: {name: 'MUSLIM UMIRYAEV', role: 'General Director, Global BEVERAGES'},
                zhussupov: {name: 'SHALKAR ZHUSSUPOV', role: 'Chairman of the Board, "KMF" Bank'},
                mukhamadiyeva: {name: 'AIGUL MUKHAMADIYEVA', role: 'Managing Director, Eurasian Development Bank'},
                bitemirov: {name: 'BAKYTZHAN BITEMIROV', role: 'Chief Executive Officer, KBSTECH'},
                lineitsev: {name: 'ROMAN LINEITSEV', role: 'CEO, Grand Mobile'},
                toleuov: {name: 'YERGALY TOLEUOV', role: 'Director, Nova Capital LLP'},
                naisbecov: {name: 'YERNAR NAKISBEKOV', role: 'General Director, ZOR TECHNOLOGIES'},
                balgozhina: {name: 'MEIRAMGUL BALGOZHINA', role: 'CEO, EMPIRE TRAVEL QAZAQSTAN'},
                gussein: {name: 'GUSSEIN NABIYEV', role: 'Commercial Director, ATK-2005'},
                ilyas: {name: 'ILYAS NABIYEV', role: 'Business Development Director, ABS Stroy'},
                mukhametov: {name: 'ALMAS MUKHAMETOV', role: 'Founder of the "Pharmaland" company'},
                pershin: {name: 'VLADISLAV PERSHIN', role: 'General Director of the 99.99 Agency'},
                idrissov: {name: 'RUSLAN IDRISSOV', role: 'General Director, GLOBAL FOODS'},
                badina: {name: 'ASSEL BADINA', role: 'Head of T&D, "Kazakhmys Corporation" LLP'},
                mukushev: {name: 'BULAT MUKUSHEV', role: 'President, TSSP Group'},
                muhtar: {name: 'MURAT AKHMETOV', role: 'Member of the Board of Directors, ENACTUS Kazakhstan'}
            }
        },

        breadcrumbs: {
            home: 'Home',
            about: 'About Us',
            business: 'Business'
        },
        roadshow: {
            whatIs: {
                header: 'What is ROAD SHOW?',
                desc: 'Road Show - field training sessions from the ENACTUS Kazakhstan National Office, program alumni, and partners'
            },
            stats: {
                institutions: 'educational institutions',
                regions: 'regions',
                participants: 'participants'
            },
            photoReport: 'Photo Report'
        },
        partnership: {
            title: 'Partnership',
            officialPartners: 'OFFICIAL PARTNERS',
            list: {
                akimat: 'AKIMAT OF ALMATY CITY',
                ministry: 'MINISTRY OF SCIENCE AND HIGHER EDUCATION OF THE REPUBLIC OF KAZAKHSTAN'
            },
            blocks: {
                partnership: {
                    title: 'Partnership with ENACTUS',
                    desc: 'As an ENACTUS sponsor and partner, you will play a vital role in advancing our work to improve the quality of life in the country, enhance society, and develop future business leaders.'
                },
                benefits: {
                    title: 'Benefits of Partnership with ENACTUS',
                    desc: 'Partnering with ENACTUS will be a valuable addition to the portfolio of a socially responsible company. Within the framework of projects, you will be able to connect with students and solve tasks of interest together.'
                },
                investments: {
                    title: 'The Role of Investment in ENACTUS',
                    desc: 'Investments in ENACTUS play an important role in the development of entrepreneurship and innovation, which impact people\'s lives and create a better future.'
                }
            },
            callback: {
                title: 'JOIN OUR PARTNERSHIP!',
                desc: 'Join more than 550 partners worldwide who actively invest in entrepreneurship for sustainable change and societal development.',
                email: 'EMAIL:',
                phone: 'PHONE:'
            },
            form: {
                name: 'Name',
                phone: 'Phone Number',
                placeholder: 'Text',
                submit: 'Submit Application'
            }
        },
        council: {
            members: {
                saule: {
                    name: 'Saule Zeinolla',
                    role: 'Chairperson of the Academic Council of ENACTUS Kazakhstan, PhD, Independent UNESCO Expert'
                },
                askar: {
                    name: 'Askar Nursha',
                    role: 'Political Scientist, Advisor to the Director of the Kazakhstan Institute for Strategic Studies'
                },
                bakirova: {
                    name: 'Kulzhakhan Bakirova',
                    role: 'Professor at Abai KazNPU, Doctor of Pedagogical Sciences, Candidate of Biological Sciences. Academician of RAE, Corresponding Member of APN RK and International Academy FIDJIP - EUROTALENT (France)'
                },
                galia: {
                    name: 'Galia Nurmukhanbetova',
                    role: 'Associate Professor of the International Information Technology University (IITU)'
                },
                enlik: {
                    name: 'Enlik Baisheva',
                    role: 'Candidate of Economic Sciences, Associate Professor of the Department of Finance and Accounting at UIB named after K. Sagadiyev'
                },
                zhenis:{
                    name: 'Zhenis Zharlygasov',
                    role: 'Vice-Rector for Research, Innovation and Digitalization of the Akhmet Baitursynuly Kostanay Regional University, Candidate of Agricultural Sciences, Associate Professor'
                },
                zhannet:{
                    name: 'Zhannetta Kalisheva',
                    role: 'Head of the MNU Bureau for Evaluation and Certification of Lawyers, Candidate of Legal Sciences, Professor Emeritus'
                },
                danial: {
                    name: 'Danial Saari',
                    role: 'Director of the Center for Political Studies, AlmaU'
                },
            }
        },
        createTeam: {
            title: 'How to create a team?',
            step1: {
                title: 'Registration of participants and the team',
                desc: 'To register, the team sends completed Registration Forms via email to the President of ENACTUS Kazakhstan. Forms are available upon request to the national office (enactuskaz@gmail.com).'
            },
            step2: {
                title: 'Development and implementation of ENACTUS projects',
                desc: 'The team independently chooses the content and scope of its projects, determines the number of projects and the duration of each.'
            },
            step3: {
                title: 'Mandatory reports for ENACTUS teams',
                desc: 'The list of reports can be found in the files attached below.'
            },
            step4: {
                title: 'Participation in ENACTUS competitions',
                desc: 'Teams that have completed registration, training, implemented projects, and submitted reports on time are eligible to participate in the national competition.'
            },
            formsTitle: 'Application forms for team creation',
            forStudents: 'For students',
            forSchools: 'For schoolchildren'
        },

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
        sponsors: {
            title: 'Спонсоры',
            tiers: {
                general: 'ГЕНЕРАЛЬНЫЙ СПОНСОР',
                platinum: 'ПЛАТИНОВЫЕ СПОНСОРЫ',
                gold: 'ЗОЛОТЫЕ СПОНСОРЫ',
                silver: 'СЕРЕБРЯНЫЕ СПОНСОРЫ'
            }
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
            ceoName: 'Albina Yerzhanova',
            ceoRole: 'CEO & Президент ENACTUS KAZAKHSTAN, доктор философских наук',
            ceoGreeting: 'Дорогие друзья!',
            ceoText1: 'Позвольте от имени национального офиса Enactus Kazakhstan приветствовать Вас и поблагодарить за проявленный интерес к нашей деятельности.',
            ceoText2: 'ENACTUS — это некоммерческая организация, целью которой является повышение уровня жизни населения через бизнес.',
            ceoText3: 'Основная наша деятельность направлена на работу с будущим поколением лидеров. Для нас важно развивать в молодых казахстанцах сознательность, социальную ответственность, талант и умение действовать во имя будущего прогресса нашей страны.',
            signature: 'С уважением, Альбина Меирбековна Ержанова',
            members: {
                randall: { name: 'Randall Bruins', role: 'Эдвайзер по стратегическому развитию ENACTUS KAZAKHSTAN' },
                aizhan: { name: 'Aizhan Aubakirova', role: 'Главный бухгалтер ENACTUS KAZAKHSTAN' },
                aruzhan: { name: 'Aruzhan Karimova', role: 'Программный менеджер ENACTUS KAZAKHSTAN' },
                albina: { name: 'Albina Aysamutdinova', role: 'Региональный координатор ENACTUS KAZAKHSTAN, г. Астана' },
                zhasulan: { name: 'Zhasulan Baurzhanuly', role: 'Региональный координатор ENACTUS KAZAKHSTAN, Восточно-Казахстанская область' }
            }
        },
        board: {
            title: 'Совет директоров',
            members: {
                batalov: { name: 'RAIMBEK BATALOV', role: 'Председатель Совета директоров ENACTUS Kazakhstan; Председатель СД RAIMBEK BOTTLERS GROUP' },
                erzhanova: { name: 'ALBINA YERZHANOVA', role: 'Президент и CEO Enactus Kazakhstan' },
                abdykulova: { name: 'AIMAN ABDYKULOVA', role: 'Заместитель директора по развитию — финансовый директор MODERN ELECTRO PLUS' },
                akbalayeva: { name: 'GULBANU AKBALAYEVA', role: 'Заместитель председателя Совета директоров ENACTUS Kazakhstan' },
                nurkatov: { name: 'ARNUR NURKATOV', role: 'Член Совета директоров ENACTUS Kazakhstan' },
                kiyassova: { name: 'AIZHAN KIYASSOVA', role: 'Заместитель председателя региональной комиссии по делам женщин и семейно-демографической политике' },
                khojanazarov: { name: 'AIDARBEK KHOJANAZAROV', role: 'Председатель наблюдательного совета ТОО «ABS строй»' },
                nabiyev: { name: 'BARZONI NABIYEV', role: 'Депутат Мажилиса Парламента РК, Председатель партии Respublica' },
                sagdiev: { name: 'ASKHAT SAGDIYEV', role: 'Председатель совета директоров Most Holding' },
                myngbay: { name: 'DARKHAN MYNGBAY', role: 'Член Совета директоров ENACTUS Kazakhstan, государственный деятель РК' },
                zhukov: { name: 'DMITRY ZHUKOV', role: 'Исполнительный директор ассоциации QazSpirits' },
                khamzi: { name: 'GANI KHAMZIN', role: 'Депутат Мажилиса Парламента Республики Казахстан' },
                aitmaganbet: { name: 'MAKSUTBEK AITMAGANBET', role: 'Председатель республиканского общественного объединения "Союз отцов"' },
                telemtayev: { name: 'MAXIM TELEMTAYEV', role: 'Управляющий партнер WHITE&CASE Kazakhstan' },
                kaygorotseva: { name: 'MAYYA KAYGORODTSEVA', role: 'Генеральный директор инжиниринговой компании «Leader»' },
                bekmaganbetov: { name: 'MAKSUT BEKMAGANBETOV', role: 'Член Совета директоров ENACTUS Kazakhstan' },
                ilyassov: { name: 'MURAT ILYASSOV', role: 'Заместитель директора по развитию KT Cloud Lab' },
                zhussupekov: { name: 'MURATBEK ZHUSSUPEKOV', role: 'Финансовый директор KT CLOUD LAB' },
                mukashev: { name: 'BALTABEK MUKASHEV', role: 'Член Совета директоров ENACTUS Kazakhstan' },
                umiryaev: { name: 'MUSLIM UMIRYAEV', role: 'Генеральный директор Global BEVERAGES' },
                zhussupov: { name: 'SHALKAR ZHUSSUPOV', role: 'Председатель правления банка "KMF"' },
                mukhamadiyeva: { name: 'AIGUL MUKHAMADIYEVA', role: 'Управляющий директор Евразийского банка развития' },
                bitemirov: { name: 'BAKYTZHAN BITEMIROV', role: 'Генеральный директор KBSTECH' },
                lineitsev: { name: 'ROMAN LINEITSEV', role: 'CEO Grand Mobile' },
                toleuov: { name: 'YERGALY TOLEUOV', role: 'Директор Nova Capital LLP' },
                naisbecov: { name: 'YERNAR NAKISBEKOV', role: 'Генеральный директор ZOR TECHNOLOGIES' },
                balgozhina: { name: 'MEIRAMGUL BALGOZHINA', role: 'Генеральный директор EMPIRE TRAVEL QAZAQSTAN' },
                gussein: { name: 'GUSSEIN NABIYEV', role: 'Коммерческий директор АТК-2005' },
                ilyas: { name: 'ILYAS NABIYEV', role: 'Директор по развитию бизнеса ТОО «ABS строй»' },
                mukhametov: { name: 'ALMAS MUKHAMETOV', role: 'Основатель компании "Pharmaland"' },
                pershin: { name: 'VLADISLAV PERSHIN', role: 'Генеральный директор агентства 99.99' },
                idrissov: { name: 'RUSLAN IDRISSOV', role: 'Генеральный директор GLOBAL FOODS' },
                badina: { name: 'ASSEL BADINA', role: 'Руководитель департамента обучения и развития персонала (T&D) ТОО «Корпорация Казахмыс»' },
                mukushev: { name: 'BULAT MUKUSHEV', role: 'Президент TSSP Group' },
                muhtar: {name: 'MURAT AKHMETOV', role: 'Член совета директоров ENACTUS Kazakhstan'}
            }
        },
        camp: {
            title: 'ENACTUS CAMP / Акселерационный бизнес-лагерь',
            whatIs: {
                header: 'Что такое ENACTUS KAZAKHSTAN BUSINESS CAMPS?',
                desc: 'Это интенсивное обучение и тренинги, место рождения самых интересных и успешных бизнес-проектов. Цель молодежного бизнес-лагеря: развитие студенческого предпринимательства в Казахстане на основе международного опыта ENACTUS с активным участием зарубежных студентов и вовлечением менторов из сферы бизнеса, обмен опытом в сфере социального предпринимательства.'
            },
            program: {
                label: 'В программе:',
                items: [
                    'интенсивная акселерация стартап-проектов;',
                    'бизнес-консультации от менторов;',
                    'экспертов казахстанского и международного бизнеса;',
                    'систематизация знаний;',
                    'business-networking;',
                    'контакты для успешной карьеры;',
                    'интерактивы для профессионального и личностного развития;',
                    'мастер-классы от партнеров Enactus Kazakhstan;',
                    'получение практических навыков и компетенций;',
                    'личные истории успеха выпускников программы.'
                ]
            },
            features: {
                edu: { title: 'Образование', desc: 'В программе бизнес-лагеря вас ждут тренинги и мастер-классы от партнеров программы ENACTUS, консультации от менторов-экспертов бизнеса и интерактивы.' },
                net: { title: 'Нетворкинг', desc: 'Знакомство с участниками из других команд; Общение с известными деятелями культуры и бизнеса; Business-networking — контакты для карьеры.' },
                rest: { title: 'Отдых и оздоровление', desc: 'Природные лечебно-оздоровительные факторы: сосновый лес, свежий воздух и озеро с минеральной водой.' },
                mem: { title: 'Воспоминания', desc: 'В ENACTUS все очень душевно. Тематические вечера скрасят образовательный процесс, а общение продолжится и после лагеря.' }
            },
            reportBtn: 'Отчет с зимнего лагеря 2025'
        },
        breadcrumbs: {
            home: 'Главная',
            about: 'О нас',
            business: 'Бизнесу',
            participants: 'Участникам'
        },
        teams: {
            title: 'Команды',
            howToCreate: 'Как создать команду?',
            tabs: {
                vuz: 'Активные ВУЗы',
                colleges: 'Активные колледжи',
                schools: 'Активные школы'
            },
            cities: {
                astana: { name: 'Астана', universities: ['Университет Астана', 'ЕНУ им. Гумилева'] },
                almaty: {
                    name: 'Алматы',
                    universities: [
                        'Университет Нархоз', 'Университет Туран', 'Satbayev University',
                        'Университет Международного Бизнеса имени Кенжегали Сагадиева (UIB)',
                        'Казахский Национальный Женский Педагогический Университет',
                        'Международный университет информационных технологий',
                        'Казахстанско-Британский Технический университет',
                        'Казахский Национальный университет им. Аль-Фараби',
                        'Almaty Management University',
                        'Алматинский университет энергетики и связи им. Г. Даукеева',
                        'SDU', 'Казахская Национальная академия искусств им. Т. Жургенова',
                        'Казахский Национальный Медицинский университет', 'Caspian University'
                    ]
                },
                shymkent: { name: 'Шымкент', universities: ['ЮКУ им. Ауэзова'] },
                abay: { name: 'Абайская область', universities: ['университет им. Шакарима'] },
                akmola: { name: 'Акмолинская область', universities: ['КРУ им. Валиханова'] },
                aktobe: { name: 'Актюбинская область', universities: ['Жубанов университет'] },
                almatyRegion: { name: 'Алматинская область', universities: ['Жетысуский университет'] },
                atyrau: { name: 'Атырауская область', universities: ['Атырауский университет нефти и газа'] }
            }
        },
        roadshow: {
            whatIs: {
                header: 'Что такое ROAD SHOW?',
                desc: 'Road Show - выездные тренинги от Национального офиса ENACTUS Kazakhstan, выпускников программы и партнеров'
            },
            stats: {
                institutions: 'учебных заведения',
                regions: 'регионов',
                participants: 'участников'
            },
            photoReport: 'Фото-отчёт'
        },
        partnership: {
            title: 'Партнёрство',
            officialPartners: 'ОФИЦИАЛЬНЫЕ ПАРТНЁРЫ',
            list: {
                akimat: 'АКИМАТ ГОРОДА АЛМАТЫ',
                ministry: 'МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РЕСПУБЛИКИ КАЗАХСТАН'
            },
            blocks: {
                partnership: {
                    title: 'Партнёрство с ENACTUS',
                    desc: 'Как спонсор и партнер ENACTUS, Вы будете играть важную роль в продвижении нашей работы по повышению качества жизни в стране, совершенствованию общества, воспитанию будущих деловых лидеров.'
                },
                benefits: {
                    title: 'Преимущества партнёрства с ENACTUS',
                    desc: 'Партнерство с ENACTUS станет ценным дополнением к портфелю социально ответственной компании. В рамках реализации проектов вы сможете контактировать со студентами и решать вместе интересующие вас задачи.'
                },
                investments: {
                    title: 'Роль инвестиций в ENACTUS',
                    desc: 'Инвестиции в ENACTUS играют важную роль в развитии предпринимательской деятельности и инноваций, которые влияют на жизнь людей и создают лучшее будущее.'
                }
            },
            callback: {
                title: 'ПРИГЛАШАЕМ К ПАРТНЁРСТВУ!',
                desc: 'Присоединяйтесь к более чем 550 партнерам по всему миру, которые активно вкладывают средства в предпринимательскую деятельность для устойчивых изменений и развития общества.',
                email: 'ЭЛЕКТРОННАЯ ПОЧТА:',
                phone: 'ТЕЛЕФОН:'
            },
            form: {
                name: 'Имя',
                phone: 'Номер телефона',
                placeholder: 'Текст',
                submit: 'Отправить заявку'
            }
        },
        council: {
            members: {
                saule: {
                    name: 'Saule Zeinolla',
                    role: 'Председатель Академического совета ENACTUS Kazakhstan, Доктор PhD, независимый эксперт ЮНЕСКО'
                },
                askar: {
                    name: 'Askar Nursha',
                    role: 'Политолог, советник директора Казахстанского института стратегических исследований'
                },
                bakirova: {
                    name: 'Kulzhakhan Bakirova',
                    role: 'Профессор КазНПУ им. Абая, д.п.н., к.б.н. Академик РАЕ, член-корр. АПН РК и МА ФИДЖИП - ЕВРОТАЛАНТ (Франция)'
                },
                galia: {
                    name: 'Galia Nurmukhanbetova',
                    role: 'Ассоциированный профессор Международного Университета Информационных Технологий (МУИТ)'
                },
                enlik: {
                    name: 'Enlik Baisheva',
                    role: 'Кандидат экономических наук, доцент кафедры "Финансы и учёт" UIB им. К. Сагадиева'
                },
                zhenis:{
                    name: 'Zhenis Zharlygasov',
                    role: 'Проректор по исследованиям, инновациям и цифровизации НАО “Костанайский региональный университет имени Ахмет Байтұрсынұлы”, кандидат сельскохозяйственных наук, ассоциированный профессор'
                },
                zhannet:{
                    name: 'Zhannetta Kalisheva',
                    role: 'Руководитель Бюро по оценке и сертификации юристов MNU, кандидат юридических наук, Professor Emeritus'
                },
                danial: {
                    name: 'Danial Saari',
                    role: 'Директор Центра политических исследований, AlmaU'
                }
            }
        },
        createTeam: {
            title: 'Как создать команду?',
            step1: {
                title: 'Регистрация участников и команды',
                desc: 'Для регистрации команда направляет по электронной почте заполненные Регистрационные формы на имя Президента ENACTUS Казахстан. Бланки Регистрационных форм команда получает по запросу (enactuskaz@gmail.com).'
            },
            step2: {
                title: 'Разработка и реализация проектов ENACTUS',
                desc: 'Команда самостоятельно выбирает содержание и объем своих проектов, определяет количество проектов, продолжительность каждого из них.'
            },
            step3: {
                title: 'Обязательные отчеты команд ENACTUS',
                desc: 'Список отчетов вы можете найти в файлах, прикрепленных ниже.'
            },
            step4: {
                title: 'Участие в конкурсах ENACTUS',
                desc: 'Команды, прошедшие регистрацию и тренинги, реализовавшие проекты и предоставившие отчеты, имеют право принять участие в национальном конкурсе.'
            },
            formsTitle: 'Формы заявки на создание команды',
            forStudents: 'Для студентов',
            forSchools: 'Для школьников'
        },

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
        sponsors: {
            title: 'Sponsors',
            tiers: {
                general: 'GENERAL SPONSOR',
                platinum: 'PLATINUM SPONSORS',
                gold: 'GOLD SPONSORS',
                silver: 'SILVER SPONSORS'
            }
        },
        home: {
            heroTitle: 'WE ALL WIN',
            heroSubtitle: 'Кәсіпкерлік арқылы Қазақстанның болашағын өзгертетін жастардың бір бөлігі бол.',
            joinBtn: 'Қосылу',
            aboutTitlePart1: '',
            aboutTitlePart2: 'ENACTUS ДЕГЕНІМІЗ НЕ?',
            aboutP1: 'ENACTUS — жастар кәсіпкерлігін дамыту үшін студенттердің, оқытушылардың және бизнес-көшбасшылардың басын қосатын халықаралық коммерциялық емес ұйым.',
            aboutP2: 'Біздің мақсатымыз — студенттерді маңызды әлеуметтік-экономикалық, экологиялық және гуманитарлық мәселелерді шешетін әлеуметтік бизнес-жобаларды құруға шабыттандыру.',
            quote: 'Біз басқалар үшін кәсіпкерлік тәсілдерді қолданатын студенттерге инвестиция салу арқылы бәріміз үшін жақсы әлем құратынымызға сенеміз',
            stats: {
                regions: 'Қазақстан өңірлері',
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
        roadshow: {
            whatIs: {
                header: 'ROAD SHOW дегеніміз не?',
                desc: 'Road Show - ENACTUS Kazakhstan ұлттық кеңсесінен, бағдарлама түлектері мен серіктестерінен көшпелі тренингтер'
            },
            stats: {
                institutions: 'оқу орны',
                regions: 'аймақ',
                participants: 'қатысушы'
            },
            photoReport: 'Фото-есеп'
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
            support: 'БІЗДІҢ ДЕМЕУШІЛЕР',
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
            ceoName: 'Albina Yerzhanova',
            ceoRole: 'ENACTUS KAZAKHSTAN CEO және Президенті, философия ғылымдарының докторы',
            ceoGreeting: 'Құрметті достар!',
            ceoText1: 'Enactus Kazakhstan ұлттық кеңсесінің атынан Сіздерге қошемет білдіруге және біздің қызметімізге қызығушылық танытқандарыңыз үшін алғыс айтуға рұқсат етіңіздер.',
            ceoText2: 'ENACTUS — бұл бизнес арқылы халықтың өмір сүру деңгейін көтеруді мақсат ететін коммерциялық емес ұйым.',
            ceoText3: 'Біздің негізгі қызметіміз болашақ көшбасшылармен жұмыс істеуге бағытталған. Біз үшін жас қазақстандықтардың бойында саналылықты, әлеуметтік жауапкершілікті, талант пен еліміздің болашақ прогресі жолында әрекет ету қабілетін дамыту маңызды.',
            signature: 'Құрметпен, Альбина Мейірбекқызы Ержанова',
            members: {
                randall: {name: 'Randall Bruins', role: 'ENACTUS KAZAKHSTAN стратегиялық даму жөніндегі кеңесшісі'},
                aizhan: {name: 'Aizhan Aubakirova', role: 'ENACTUS KAZAKHSTAN бас есепшісі'},
                aruzhan: {name: 'Aruzhan Karimova', role: 'ENACTUS KAZAKHSTAN бағдарламалық менеджері'},
                albina: {name: 'Albina Aysamutdinova', role: 'ENACTUS KAZAKHSTAN өңірлік үйлестірушісі, Астана қ.'},
                zhasulan: {
                    name: 'Zhasulan Baurzhanuly',
                    role: 'ENACTUS KAZAKHSTAN өңірлік үйлестірушісі, Шығыс Қазақстан облысы'
                }
            }
        },
        board: {
            title: 'Директорлар кеңесі',
            members: {
                batalov: { name: 'RAIMBEK BATALOV', role: 'ENACTUS Kazakhstan Директорлар кеңесінің төрағасы; RAIMBEK BOTTLERS GROUP Директорлар кеңесінің төрағасы' },
                erzhanova: { name: 'ALBINA YERZHANOVA', role: 'Enactus Kazakhstan Президенті және CEO' },
                abdykulova: { name: 'AIMAN ABDYKULOVA', role: 'Даму жөніндегі директордың орынбасары — MODERN ELECTRO PLUS қаржы директоры' },
                akbalayeva: { name: 'GULBANU AKBALAYEVA', role: 'ENACTUS Kazakhstan Директорлар кеңесі төрағасының орынбасары' },
                nurkatov: { name: 'ARNUR NURKATOV', role: 'ENACTUS Kazakhstan Директорлар кеңесінің мүшесі' },
                kiyassova: { name: 'AIZHAN KIYASSOVA', role: 'Әйелдер істері және отбасылық-демографиялық саясат жөніндегі өңірлік комиссия төрағасының орынбасары' },
                khojanazarov: { name: 'AIDARBEK KHOJANAZAROV', role: '«ABS строй» ЖШС Байқау кеңесінің төрағасы' },
                nabiyev: { name: 'BARZONI NABIYEV', role: 'ҚР Парламенті Мәжілісінің депутаты, Respublica партиясының төрағасы' },
                sagdiev: { name: 'ASKHAT SAGDIYEV', role: 'Most Holding Директорлар кеңесінің төрағасы' },
                myngbay: { name: 'DARKHAN MYNGBAY', role: 'ENACTUS Kazakhstan Директорлар кеңесінің мүшесі, ҚР мемлекеттік қайраткері' },
                zhukov: { name: 'DMITRY ZHUKOV', role: 'QazSpirits қауымдастығының атқарушы директоры' },
                khamzi: { name: 'GANI KHAMZIN', role: 'Қазақстан Республикасы Парламенті Мәжілісінің депутаты' },
                aitmaganbet: { name: 'MAKSUTBEK AITMAGANBET', role: '«Әкелер одағы» республикалық қоғамдық бірлестігінің төрағасы' },
                telemtayev: { name: 'MAXIM TELEMTAYEV', role: 'WHITE&CASE Kazakhstan басқарушы серіктесі' },
                kaygorotseva: { name: 'MAYYA KAYGORODTSEVA', role: '«Leader» инжинирингтік компаниясының бас директоры' },
                bekmaganbetov: { name: 'MAKSUT BEKMAGANBETOV', role: 'ENACTUS Kazakhstan Директорлар кеңесінің мүшесі' },
                ilyassov: { name: 'MURAT ILYASSOV', role: 'KT Cloud Lab даму жөніндегі директордың орынбасары' },
                zhussupekov: { name: 'MURATBEK ZHUSSUPEKOV', role: 'KT CLOUD LAB қаржы директоры' },
                mukashev: { name: 'BALTABEK MUKASHEV', role: 'ENACTUS Kazakhstan Директорлар кеңесінің мүшесі' },
                umiryaev: { name: 'MUSLIM UMIRYAEV', role: 'Global BEVERAGES бас директоры' },
                zhussupov: { name: 'SHALKAR ZHUSSUPOV', role: '«KMF» банкінің басқарма төрағасы' },
                mukhamadiyeva: { name: 'AIGUL MUKHAMADIYEVA', role: 'Еуразиялық даму банкінің басқарушы директоры' },
                bitemirov: { name: 'BAKYTZHAN BITEMIROV', role: 'KBSTECH бас директоры' },
                lineitsev: { name: 'ROMAN LINEITSEV', role: 'Grand Mobile CEO' },
                toleuov: { name: 'YERGALY TOLEUOV', role: 'Nova Capital LLP директоры' },
                naisbecov: { name: 'YERNAR NAKISBEKOV', role: 'ZOR TECHNOLOGIES бас директоры' },
                balgozhina: { name: 'MEIRAMGUL BALGOZHINA', role: 'EMPIRE TRAVEL QAZAQSTAN бас директоры' },
                gussein: { name: 'GUSSEIN NABIYEV', role: 'АТК-2005 коммерциялық директоры' },
                ilyas: { name: 'ILYAS NABIYEV', role: '«ABS строй» ЖШС бизнесті дамыту жөніндегі директоры' },
                mukhametov: { name: 'ALMAS MUKHAMETOV', role: '«Pharmaland» компаниясының негізін қалаушы' },
                pershin: { name: 'VLADISLAV PERSHIN', role: '99.99 агенттігінің бас директоры' },
                idrissov: { name: 'RUSLAN IDRISSOV', role: 'GLOBAL FOODS бас директоры' },
                badina: { name: 'ASSEL BADINA', role: '«Қазақмыс корпорациясы» ЖШС персоналды оқыту және дамыту (T&D) департаментінің басшысы' },
                mukushev: { name: 'BULAT MUKUSHEV', role: 'TSSP Group президенті' },
                muhtar: {name: 'MURAT AKHMETOV', role: 'ENACTUS Kazakhstan Директорлар кеңесінің мүшесі'}
            }
        },
        camp: {
            title: 'ENACTUS CAMP / Акселерациялық бизнес-лагерь',
            whatIs: {
                header: 'ENACTUS KAZAKHSTAN BUSINESS CAMPS дегеніміз не?',
                desc: 'Бұл қарқынды оқыту мен тренингтер, ең қызықты және табысты бизнес-жобалардың туған жері. Жастар бизнес-лагерінің мақсаты: шетелдік студенттердің белсенді қатысуымен және бизнес саласындағы менторларды тарта отырып, ENACTUS халықаралық тәжірибесі негізінде Қазақстанда студенттік кәсіпкерлікті дамыту.'
            },
            program: {
                label: 'Бағдарламада:',
                items: [
                    'стартап-жобаларды қарқынды акселерациялау;',
                    'менторлардан бизнес-консультациялар;',
                    'қазақстандық және халықаралық бизнес сарапшылары;',
                    'білімді жүйелеу;',
                    'business-networking;',
                    'табысты мансап үшін байланыстар;',
                    'кәсіби және тұлғалық дамуға арналған интерактивтер;',
                    'Enactus Kazakhstan серіктестерінен мастер-кластар;',
                    'практикалық дағдылар мен құзыреттерді алу;',
                    'бағдарлама түлектерінің табыс тарихы.'
                ]
            },
            features: {
                edu: { title: 'Білім', desc: 'Бизнес-лагерь бағдарламасында сізді ENACTUS серіктестерінен тренингтер мен мастер-кластар, сарапшылардан кеңестер күтеді.' },
                net: { title: 'Нетворкинг', desc: 'Басқа командалардың қатысушыларымен танысу; Мәдениет және бизнес қайраткерлерімен араласу; Мансап үшін байланыстар.' },
                rest: { title: 'Демалыс және сауықтыру', desc: 'Табиғи емдік-сауықтыру факторлары: қарағайлы орман, таза ауа және минералды суы бар көл.' },
                mem: { title: 'Естеліктер', desc: 'ENACTUS-та бәрі өте жылы әрі шынайы. Тақырыптық кештер оқу процесін қызықты етеді, ал қарым-қатынас лагерьден кейін де жалғасады.' }
            },
            reportBtn: 'Қысқы лагерь есебі 2025'
        },
        breadcrumbs: {
            home: 'Басты бет',
            about: 'Біз туралы',
            business: 'Бизнеске',
            participants: 'Қатысушыларға'
        },
        teams: {
            title: 'Командалар',
            howToCreate: 'Команданы қалай құруға болады?',
            tabs: {
                vuz: 'Белсенді ЖОО',
                colleges: 'Белсенді колледждер',
                schools: 'Белсенді мектептер'
            },
            cities: {
                astana: { name: 'Астана', universities: ['Астана университеті', 'Л.Н. Гумилев атындағы ЕҰУ'] },
                almaty: {
                    name: 'Алматы',
                    universities: [
                        'Нархоз университеті', 'Тұран университеті', 'Satbayev University',
                        'Кенжеғали Сағадиев атындағы Халықаралық Бизнес Университеті (UIB)',
                        'Қазақ ұлттық қыздар педагогикалық университеті',
                        'Халықаралық ақпараттық технологиялар университеті',
                        'Қазақстан-Британ техникалық университеті',
                        'Әл-Фараби атындағы Қазақ ұлттық университеті',
                        'Almaty Management University',
                        'Ғ. Дәукеев атындағы Алматы энергетика және байланыс университеті',
                        'SDU', 'Т. Жүргенов атындағы Қазақ ұлттық өнер академиясы',
                        'Қазақ ұлттық медицина университеті', 'Caspian University'
                    ]
                },
                shymkent: { name: 'Шымкент', universities: ['М. Әуезов атындағы ОҚУ'] },
                abay: { name: 'Абай облысы', universities: ['Шәкәрім атындағы университет'] },
                akmola: { name: 'Ақмола облысы', universities: ['Ш. Уәлиханов атындағы КРУ'] },
                aktobe: { name: 'Ақтөбе облысы', universities: ['Жұбанов университеті'] },
                almatyRegion: { name: 'Алматы облысы', universities: ['Жетісу университеті'] },
                atyrau: { name: 'Атырау облысы', universities: ['Атырау мұнай және газ университеті'] }
            }
        },
        partnership: {
            title: 'Серіктестік',
            officialPartners: 'РЕСМИ СЕРІКТЕСТЕР',
            list: {
                akimat: 'АЛМАТЫ ҚАЛАСЫНЫҢ ӘКІМДІГІ',
                ministry: 'ҚАЗАҚСТАН РЕСПУБЛИКАСЫНЫҢ ҒЫЛЫМ ЖӘНЕ ЖОҒАРҒЫ БІЛІМ МИНИСТРЛІГІ'
            },
            blocks: {
                partnership: {
                    title: 'ENACTUS-пен серіктестік',
                    desc: 'ENACTUS демеушісі және серіктесі ретінде Сіз елдегі өмір сүру сапасын арттыру, қоғамды жетілдіру, болашақ іскер көшбасшыларды тәрбиелеу жолындағы жұмысымызды ілгерілетуде маңызды рөл атқарасыз.'
                },
                benefits: {
                    title: 'ENACTUS-пен серіктестіктің артықшылықтары',
                    desc: 'ENACTUS-пен серіктестік әлеуметтік жауапты компанияның қоржынына құнды қосымша болады. Жобаларды іске асыру аясында сіз студенттермен байланыс орнатып, сізді қызықтыратын міндеттерді бірге шеше аласыз.'
                },
                investments: {
                    title: 'ENACTUS-қа инвестиция салудың рөлі',
                    desc: 'ENACTUS-қа салынған инвестициялар адамдардың өміріне әсер ететін және жақсы болашақ құратын кәсіпкерлік қызмет пен инновацияларды дамытуда маңызды рөл атқарады.'
                }
            },
            callback: {
                title: 'СЕРІКТЕСТІККЕ ШАҚЫРАМЫЗ!',
                desc: 'Тұрақты өзгерістер мен қоғамның дамуы үшін кәсіпкерлік қызметке белсенді түрде қаражат салатын дүние жүзіндегі 550-ден астам серіктеске қосылыңыз.',
                email: 'ЭЛЕКТРОНДЫҚ ПОШТА:',
                phone: 'ТЕЛЕФОН:'
            },
            form: {
                name: 'Есімі',
                phone: 'Телефон нөмірі',
                placeholder: 'Мәтін',
                submit: 'Өтінім жіберу'
            }
        },
        council: {
            members: {
                saule: {
                    name: 'Saule Zeinolla',
                    role: 'ENACTUS Kazakhstan Академиялық кеңесінің төрайымы, PhD докторы, ЮНЕСКО тәуелсіз сарапшысы'
                },
                askar: {
                    name: 'Askar Nursha',
                    role: 'Саясаттанушы, Қазақстан стратегиялық зерттеулер институты директорының кеңесшісі'
                },
                bakirova: {
                    name: 'Kulzhakhan Bakirova',
                    role: 'Абай атындағы ҚазҰПУ профессоры, п.ғ.д., б.ғ.к. ЖҒА академигі, ҚР ПҒА корреспондент-мүшесі және ФИДЖИП - ЕВРОТАЛАНТ Халықаралық Академиясының корреспондент-мүшесі (Франция)'
                },
                galia: {
                    name: 'Galia Nurmukhanbetova',
                    role: 'Халықаралық ақпараттық технологиялар университетінің (IITU) қауымдастырылған профессоры'
                },
                enlik: {
                    name: 'Enlik Baisheva',
                    role: 'Экономика ғылымдарының кандидаты, К. Сағадиев атындағы UIB "Қаржы және есеп" кафедрасының доценті'
                },
                zhenis:{
                    name: 'Zhenis Zharlygasov',
                    role: 'Ахмет Байтұрсынұлы атындағы Қостанай өңірлік университетінің зерттеулер, инновациялар және цифрландыру жөніндегі проректоры, ауыл шаруашылығы ғылымдарының кандидаты, қауымдастырылған профессор'
                },
                zhannet:{
                    name: 'Zhannetta Kalisheva',
                    role: 'MNU Заңгерлерді бағалау және сертификаттау бюросының жетекшісі, заң ғылымдарының кандидаты, Professor Emeritus'
                },
                danial:{
                    name: 'Danial Saari',
                    role: 'Саяси зерттеулер орталығының директоры, AlmaU'
                }
            }
        },
        createTeam: {
            title: 'Команданы қалай құруға болады?',
            step1: {
                title: 'Қатысушыларды және команданы тіркеу',
                desc: 'Тіркелу үшін команда ENACTUS Қазақстан Президентінің атына толтырылған Тіркеу нысандарын электрондық пошта арқылы жібереді. Нысандарды ұлттық кеңсеге (enactuskaz@gmail.com) сұраныс жіберу арқылы алуға болады.'
            },
            step2: {
                title: 'ENACTUS жобаларын әзірлеу және іске асыру',
                desc: 'Команда өз жобаларының мазмұны мен көлемін өз бетінше таңдайды, жобалар санын және әрқайсысының ұзақтығын анықтайды.'
            },
            step3: {
                title: 'ENACTUS командаларының міндетті есептері',
                desc: 'Есептер тізімін төменде тіркелген файлдардан таба аласыз.'
            },
            step4: {
                title: 'ENACTUS конкурстарына қатысу',
                desc: 'Тіркеуден және тренингтерден өткен, жобаларды іске асырған және есептерді уақытында тапсырған командалар ұлттық конкурсқа қатысуға құқылы.'
            },
            formsTitle: 'Команда құруға арналған өтінім нысандары',
            forStudents: 'Студенттер үшін',
            forSchools: 'Оқушылар үшін'
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