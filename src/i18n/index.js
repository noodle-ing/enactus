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
            alumi: 'Alumnus',
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
            heroSubtitleKz: 'NATIONAL CUP IN ENTREPRENEURSHIP, STARTUPS <br /> AND INNOVATION AMONG SCHOOL AND UNIVERSITY STUDENTS <br /> ENACTUS KAZAKHSTAN 2026',
            joinBtn: 'Join Us',
            aboutTitlePart1: 'WHAT IS ',
            aboutTitlePart2: 'ENACTUS?',
            aboutP1: 'ENACTUS is an international non-profit organization that brings together students, academics and business leaders to develop youth entrepreneurship.',
            aboutP2: 'Our goal is to inspire students to create social business projects that solve important socio-economic, environmental and humanitarian problems.',
            quote: 'We believe that by investing in students who take entrepreneurial action for others, we create a better world for us all.',
            timer: {
                days: 'DAYS',
                hours: 'HOURS',
                minutes: 'MINS',
                seconds: 'SECS',
            },
            event: {
                date: 'April 28–29, 2026',
                location: 'Almaty city, 42 k1 Timiryazev St.',
            },
            stats: {
                regions: 'regions of Kazakhstan',
                institutions: 'educational institutions',
                students: 'participants annually',
                companies: 'partner companies',
            },
        },
        projects: {
            title: 'Finalists of the ENACTUS KAZAKHSTAN 2025 National Cup - World Cup League',
            items: {
                amu: {name: 'Astana Medical University', desc: 'ZhanCare — a new generation medical ecosystem.'},
                kaznu: {name: 'Al-Farabi KazNU', desc: 'Innovative project in ecology and IT.'},
                narxoz: {name: 'Narxoz University', desc: 'Social entrepreneurship and youth support.'},
                coll: {name: 'College of Foreign Languages', desc: 'Educational platform for language learning.'}
            }
        },
        news: {
            title: 'Press About Us',
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
            success: 'Application successfully sent',
            error: 'An error occurred while sending the application.',
            emailLabel: 'EMAIL:',
            phoneLabel: 'PHONE:'
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
                albina: { name: 'Albina Aisamutdinova', role: 'Regional Coordinator, ENACTUS KAZAKHSTAN, Astana' },
                diana: { name: 'Diana Nurzhanova', role: 'International Relations manager' },
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
            howToCreate: 'How to create a team',
            tabs: {
                vuz: 'Universities',
                colleges: 'Colleges',
                schools: 'Schools',
            },
            cities: {
                astana: {
                    name: 'Astana',
                    universities: [
                        'Astana Medical University',
                        'Astana International University',
                        'Astana IT University',
                        'L.N. Gumilyov Eurasian National University',
                        'Turan-Astana University',
                        'Coventry University Kazakhstan',
                        'S. Seifullin Kazakh Agrotechnical Research University',
                        'Maqsut Narikbayev University',
                        'Esil University',
                        'Kazakh National University of Sports',
                        'Kazakhstan International Linguistic College',
                        'Urban College',
                        'Higher College of Transport and Communications',
                        'Astana IT College',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №2',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №3',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №4',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №5',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №6',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №7',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №8',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №9',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №10',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №11',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №12',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №13',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №14',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №15',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №16',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №17',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №18',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №19',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №20',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №21',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №22',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №23',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №24',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Astana, team №25',
                        'Astana International School, team №1',
                        'Astana International School, team №2',
                        'National School of Business and Engineering, Astana, team №1',
                        'National School of Business and Engineering, Astana, team №2',
                        'National School of Business and Engineering, Astana, team №3',
                        'Rivera International School by Quantum',
                        'Lyceum School №10, Astana',
                        'Lyceum School №89, Astana, team №1',
                        'Lyceum School №89, Astana, team №2',
                        'Bilim International School',
                        'Space School',
                        'Gymnasium School №17, Astana',
                    ],
                },

                almaty: {
                    name: 'Almaty',
                    universities: [
                        'Narxoz University',
                        'Turan University',
                        'Almaty University of Technology',
                        'Kazakh National Women\'s Teacher Training University',
                        'De Montfort University',
                        'International University of Information Technologies',
                        'Almaty Management University',
                        'Kazakh National Medical University named after S. Asfendiyarov',
                        'Al-Farabi Kazakh National University',
                        'Kazakh-British Technical University',
                        'Satbayev University',
                        'Almaty University of Power Engineering and Telecommunications named after G. Daukeev',
                        'Caspian University',
                        'UIB',
                        'Printmedia Technologies College',
                        'International Engineering and Technology University',
                        'Kazakh-German University',
                        'Abai Kazakh University',
                        'Caspian University College, Almaty',
                        'Almaty State Business College',
                        'College of Tourism and Hospitality Industry',
                        'Almaty Construction and Technology College',
                        'International Academy of Business',
                        'Almaty Economic, Legal and Pedagogical College',
                        'Adilet College',
                        'Almaty Electromechanical College',
                        'Almaty State Polytechnic College',
                        'Almaty State College of Service and Technology',
                        'Almaty State Humanitarian and Pedagogical College',
                        'Innovative Technical College',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Almaty, team №1',
                        'Republican Physics and Mathematics School, Almaty',
                    ],
                },

                shymkent: {
                    name: 'Shymkent',
                    universities: [
                        'South Kazakhstan Pedagogical University named after U. Zhanibek',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Shymkent, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Shymkent, team №2',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Shymkent, team №3',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Shymkent, team №4',
                    ],
                },

                abay: {
                    name: 'Abay Region',
                    universities: [
                        'Shakarim University, Semey',
                        'Semey Medical University',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Semey, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Semey, team №2',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Semey, team №3',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Semey, team №4',
                    ],
                },

                akmola: {
                    name: 'Akmola Region',
                    universities: [
                        'Kokshetau University named after A. Myrzakhmetov',
                        'IQanat High School of Burabay, team №1',
                        'IQanat High School of Burabay, team №2',
                        'IQanat High School of Burabay, team №3',
                        'IQanat High School of Burabay, team №4',
                        'IQanat High School of Burabay, team №5',
                        'IQanat High School of Burabay, team №6',
                        'IQanat High School of Burabay, team №7',
                        'IQanat High School of Burabay, team №8',
                        'IQanat High School of Burabay, team №9',
                        'IQanat High School of Burabay, team №10',
                        'IQanat High School of Burabay, team №11',
                    ],
                },

                aktobe: {
                    name: 'Aktobe Region',
                    universities: [
                        'West Kazakhstan Medical University named after M. Ospanov, Aktobe',
                        'Aktobe Regional University named after K. Zhubanov',
                        'QAZGUU School Aqtobe, team №1',
                        'QAZGUU School Aqtobe, team №2',
                    ],
                },

                atyrau: {
                    name: 'Atyrau Region',
                    universities: [
                        'Atyrau University named after Kh. Dosmukhamedov',
                        'Bilim International Study Centre, Atyrau, team №1',
                        'Bilim International Study Centre, Atyrau, team №2',
                        'Bilim International Study Centre, Atyrau, team №3',
                    ],
                },

                eastKazakhstan: {
                    name: 'East Kazakhstan Region',
                    universities: [
                        'Kazakhstan-American Free University, Ust-Kamenogorsk',
                        'Higher College of Kazakhstan-American Free University, Ust-Kamenogorsk',
                        'Higher Polytechnic College, Ust-Kamenogorsk',
                        'Ridder College, Ridder',
                    ],
                },

                zhambyl: {
                    name: 'Zhambyl Region',
                    universities: [
                        'Taraz University named after M.Kh. Dulati',
                        'International Taraz Innovation Institute named after Sherkhan Murtaza',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Taraz, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Taraz, team №2',
                    ],
                },

                zhetysu: {
                    name: 'Zhetysu Region',
                    universities: [
                        'Zhetysu University named after Ilyas Zhansugurov, Taldykorgan',
                        'Zhansugurov College, Taldykorgan',
                    ],
                },

                westKazakhstan: {
                    name: 'West Kazakhstan Region',
                    universities: [
                        'West Kazakhstan Innovation and Technology University',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Uralsk, team №1',
                    ],
                },

                karaganda: {
                    name: 'Karaganda Region',
                    universities: [
                        'Karaganda University named after Academician E.A. Buketov',
                        'Karaganda Medical University',
                        'Karaganda University of Kazpotrebsoyuz',
                        'Karaganda Technical University named after A. Saginov',
                        'Karaganda Higher Polytechnic College',
                        'Saran Humanitarian and Technical College named after Abai Kunanbayev',
                        'College of Innovative Technologies of Karaganda Technical University named after A. Saginov',
                        'Karaganda Regional Higher Nursing College',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №2',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №3',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №4',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №5',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №6',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №7',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №8',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №9',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №10',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Karaganda, team №11',
                        'Gymnasium named after Kanysh Satpayev, Karaganda',
                        'Specialized IT Boarding Lyceum School, Karaganda',
                        'QSchool Qaraganda, team №1',
                        'QSchool Qaraganda, team №2',
                        'QSchool Qaraganda, team №3',
                        'QSchool Qaraganda, team №4',
                        'QSchool Qaraganda, team №5',
                        'QSchool Qaraganda, team №6',
                    ],
                },

                kostanay: {
                    name: 'Kostanay Region',
                    universities: [
                        'Kostanay Regional University named after A. Baitursynov',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Kostanay, team №1',
                        'QAZGUU School Kostanay, team №1',
                    ],
                },

                kyzylorda: {
                    name: 'Kyzylorda Region',
                    universities: [
                        'Kyzylorda University named after Korkyt Ata',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Kyzylorda, team №1',
                    ],
                },

                mangystau: {
                    name: 'Mangystau Region',
                    universities: [
                        'Yessenov University, Aktau',
                        'Mangystau Higher Polytechnic College named after Kh. Uzbekgaliyev',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Aktau, team №1',
                    ],
                },

                pavlodar: {
                    name: 'Pavlodar Region',
                    universities: [
                        'Toraighyrov University',
                        'Pavlodar Pedagogical University named after Ä. Märgulan',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Pavlodar, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Pavlodar, team №2',
                        'Secondary School №2, Pavlodar, team №1',
                    ],
                },

                northKazakhstan: {
                    name: 'North Kazakhstan Region',
                    universities: [
                        'North Kazakhstan University named after M. Kozybaev',
                        'North Kazakhstan Higher Medical College',
                        'Higher College named after Magzhan Zhumabayev',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Petropavlovsk, team №1',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Petropavlovsk, team №2',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Petropavlovsk, team №4',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Petropavlovsk, team №5',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Petropavlovsk, team №6',
                        'Nazarbayev Intellectual School of Physics and Mathematics, Petropavlovsk, team №7',
                        'Buketov Gymnasium School, Sergeyevka',
                    ],
                },

                turkestan: {
                    name: 'Turkestan Region',
                    universities: [
                        'International University of Tourism and Hospitality',
                        'International Kazakh-Turkish University named after Khoja Ahmed Yasawi',
                    ],
                },

                ulytau: {
                    name: 'Ulytau Region',
                    universities: [
                        'Specialized Boarding School named after Abai, Zhezkazgan, team №1',
                    ],
                },

                almatyRegion: {
                    name: 'Almaty Region',
                    universities: [
                        'SDU University, Kaskelen',
                    ],
                },
            },
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
        competitions: {
            breadcrumbs: {
                current: 'Competitions'
            },
            title: 'Competitions',
            types: {
                worldCup: 'World Cup',
                nationalExpo: 'National Expo',
                schoolChampionship: 'National School Entrepreneurship Championship'
            },
            links: {
                results: 'Results',
                photos: 'Photos',
                resultsUrl: 'https://site.com/results-2025',
                photosUrl: 'https://flickr.com/photos-2025',
            },
            years: {
                2025: {
                    title: 'WORLD CUP 2025',
                    announcementTitle: 'ENACTUS WORLD CUP 2025 AFTER MOVIE',
                    description: '<p>Watch the best moments of the 2025 World Cup.</p>',
                    resultsUrl: 'https://canva.link/n3wpy5k4hh3zwkh',
                    photosUrl: 'https://flickr.com/photos-2025',
                },
                2024: {
                    title: 'WORLD CUP 2024',
                    announcementTitle: 'ENACTUS WORLD CUP 2024 ANNOUNCEMENT',
                    description: `
      <p>For the first time, Kazakhstan hosted the ENACTUS student entrepreneurship World Cup.</p>
      <p>All ENACTUS student business projects are aimed at achieving the 17 UN Sustainable Development Goals.</p>
    `,
                    resultsUrl: 'https://canva.link/ylt8jj146zxdsxb',
                    photosUrl: 'https://flickr.com/photos-2025',
                },
                2023: {
                    title: 'WORLD CUP 2023',
                    announcementTitle: 'ENACTUS WORLD CUP 2023 AFTERMOVIE',
                    description: '<p>Results of the World Cup in the Netherlands.</p>',
                    resultsUrl: 'https://canva.link/i3ksvkqlkdw33ur',
                    photosUrl: 'https://flickr.com/photos-2025',
                }
            }
        },
        newsPage: {
            breadcrumbs: {
                current: 'News'
            },
            title: 'Press About Us',
            banner: {
                title: 'How ENACTUS Kazakhstan Unites Students and Businesses to Solve Societal Problems',
                subtitle: 'Over the 30 years of the program\'s operation in Kazakhstan, students have created thousands of business cases'
            }
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
                    name: 'SAULE ZEINOLLA',
                    role: 'Chairperson of the Academic Council of ENACTUS Kazakhstan, PhD, Independent UNESCO Expert'
                },
                askar: {
                    name: 'ASKAR NURSHA',
                    role: 'Political Scientist, Advisor to the Director of the Kazakhstan Institute for Strategic Studies'
                },
                bakirova: {
                    name: 'KULZHAKHAN BAKIROVA',
                    role: 'Professor at Abai KazNPU, Doctor of Pedagogical Sciences, Candidate of Biological Sciences. Academician of RAE, Corresponding Member of APN RK and International Academy FIDJIP - EUROTALENT (France)'
                },
                galia: {
                    name: 'GALIYA NURMUKHANBETOVA',
                    role: 'Associate Professor of the International Information Technology University (IITU)'
                },
                enlik: {
                    name: 'YENLIK BAISHEVA',
                    role: 'Candidate of Economic Sciences, Associate Professor of the Department of Finance and Accounting at UIB named after K. Sagadiyev'
                },
                zhenis:{
                    name: 'ZHENIS ZHARLYGASOV',
                    role: 'Vice-Rector for Research, Innovation and Digitalization of the Akhmet Baitursynuly Kostanay Regional University, Candidate of Agricultural Sciences, Associate Professor'
                },
                zhannet:{
                    name: 'ZHANNETTA KALISHEVA',
                    role: 'Head of the MNU Bureau for Evaluation and Certification of Lawyers, Candidate of Legal Sciences, Professor Emeritus'
                },
                danial: {
                    name: 'DANIAL SAARI',
                    role: 'Director of the Center for Political Studies, AlmaU'
                },
                yerlan: {
                    name: 'YERLAN KARIMOV',
                    role: 'Advisor to the international company ARETERA PUBLIC AFFAIRS'
                },
                gulsim: {
                    name: 'GULSIM AITKHOZHAEVA',
                    role: 'Head of the Office of International Mobility and Programs at Al-Farabi Kazakh National University, Acting Associate Professor',
                },
                galiya: {
                    name: 'GALIYA MYAMESHEVA',
                    role: "Associate Professor of the Faculty of World Politics of KNU"
                }

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
            alumi: 'Выпускники',
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
            heroSubtitle: 'Станьте частью студенческого движения, меняющего будущее Казахстана через предпринимательство.',
            heroSubtitleKz: 'НАЦИОНАЛЬНЫЙ КУБОК ПО ПРЕДПРИНИМАТЕЛЬСТВУ, СТАРТАПАМ <br /> И ИННОВАЦИЯМ СРЕДИ ШКОЛЬНИКОВ И СТУДЕНТОВ <br /> ENACTUS KAZAKHSTAN 2026',
            joinBtn: 'Присоединиться',
            aboutTitlePart1: 'ЧТО ТАКОЕ ',
            aboutTitlePart2: 'ENACTUS?',
            aboutP1: 'ENACTUS — это международная некоммерческая организация, объединяющая студентов, академических и бизнес-лидеров для развития молодежного предпринимательства.',
            aboutP2: 'Наша цель — вдохновить студентов на создание социальных бизнес-проектов, решающих важные социально-экономические, экологические и гуманитарные проблемы.',
            quote: 'Мы верим, что инвестируя в студентов, предпринимающих действия ради других, мы создаем лучший мир для всех нас.',
            timer: {
                days: 'ДНЕЙ',
                hours: 'ЧАСОВ',
                minutes: 'МИНУТ',
                seconds: 'СЕКУНД',
            },
            event: {
                date: '28–29 апреля 2026',
                location: 'г. Алматы, ул. Тимирязева, 42 к1',
            },
            stats: {
                regions: 'регионов Казахстана',
                institutions: 'учебных заведений',
                students: 'участников ежегодно',
                companies: 'компаний-партнеров',
            },
        },
        projects: {
            title: 'Финалисты Лиги World Cup Национального кубка ENACTUS Kazakhstan 2025',
            items: {
                amu: { name: 'Astana Medical University', desc: 'ZhanCare — медицинская экосистема нового поколения.' },
                kaznu: { name: 'КазНУ им. Аль-Фараби', desc: 'Инновационный проект в области экологии и IT.' },
                narxoz: { name: 'Narxoz University', desc: 'Социальное предпринимательство и поддержка молодежи.' },
                coll: { name: 'Колледж иностранных языков', desc: 'Образовательная платформа для изучения языков.' }
            }
        },
        news: {
            title: 'СМИ о нас',
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
            success: 'Заявка успешно отправлена',
            error: 'Произошла ошибка при отправке заявки.',
            emailLabel: 'ЭЛЕКТРОННАЯ ПОЧТА:',
            phoneLabel: 'ТЕЛЕФОН:'
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
                albina: { name: 'Albina Aisamutdinova', role: 'Региональный координатор ENACTUS KAZAKHSTAN, г. Астана' },
                diana: { name: 'Diana Nurzhanova', role: 'Менеджер по международным отношениям' },
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
            howToCreate: 'Как создать команду',
            tabs: {
                vuz: 'ВУЗы',
                colleges: 'Колледжи',
                schools: 'Школы',
            },
            cities: {
                astana: {
                    name: 'Астана',
                    universities: [
                        'Медицинский университет Астана',
                        'Международный университет Астана',
                        'Астана IT университет',
                        'Евразийский национальный университет имени Л. Н. Гумилёва',
                        'Университет Туран – Астана',
                        'Coventry University Kazakhstan',
                        'Казахский агротехнический исследовательский университет имени С.Сейфуллина',
                        'Maqsut Narikbayev University',
                        'Esil University',
                        'Казахский Национальный университет спорта',
                        'Казахстанский Международный Лингвистический колледж',
                        'Urban College',
                        'Высший колледж транспорта и коммуникаций',
                        'Колледж Astana IT',
                        'Назарбаев интеллектуальная школа г.Астана, команда №1',
                        'Назарбаев интеллектуальная школа г.Астана, команда №2',
                        'Назарбаев интеллектуальная школа г.Астана, команда №3',
                        'Назарбаев интеллектуальная школа г.Астана, команда №4',
                        'Назарбаев интеллектуальная школа г.Астана, команда №5',
                        'Назарбаев интеллектуальная школа г.Астана, команда №6',
                        'Назарбаев интеллектуальная школа г.Астана, команда №7',
                        'Назарбаев интеллектуальная школа г.Астана, команда №8',
                        'Назарбаев интеллектуальная школа г.Астана, команда №9',
                        'Назарбаев интеллектуальная школа г.Астана, команда №10',
                        'Назарбаев интеллектуальная школа г.Астана, команда №11',
                        'Назарбаев интеллектуальная школа г.Астана, команда №12',
                        'Назарбаев интеллектуальная школа г.Астана, команда №13',
                        'Назарбаев интеллектуальная школа г.Астана, команда №14',
                        'Назарбаев интеллектуальная школа г.Астана, команда №15',
                        'Назарбаев интеллектуальная школа г.Астана, команда №16',
                        'Назарбаев интеллектуальная школа г.Астана, команда №17',
                        'Назарбаев интеллектуальная школа г.Астана, команда №18',
                        'Назарбаев интеллектуальная школа г.Астана, команда №19',
                        'Назарбаев интеллектуальная школа г.Астана, команда №20',
                        'Назарбаев интеллектуальная школа г.Астана, команда №21',
                        'Назарбаев интеллектуальная школа г.Астана, команда №22',
                        'Назарбаев интеллектуальная школа г.Астана, команда №23',
                        'Назарбаев интеллектуальная школа г.Астана, команда №24',
                        'Назарбаев интеллектуальная школа г.Астана, команда №25',
                        'Международная школа Астана, команда №1',
                        'Международная школа Астана, команда №2',
                        'Национальная школа бизнеса и инжиниринга г.Астана, команда №1',
                        'Национальная школа бизнеса и инжиниринга г.Астана, команда №2',
                        'Национальная школа бизнеса и инжиниринга г.Астана, команда №3',
                        'Rivera International School by Quantum',
                        'Школа-лицей №10, г.Астана',
                        'Школа-лицей №89, г.Астана, команда №1',
                        'Школа-лицей №89, г.Астана, команда №2',
                        'Bilim International School',
                        'Space School',
                        'Школа-гимназия №17, г.Астана',
                    ],
                },

                almaty: {
                    name: 'Алматы',
                    universities: [
                        'Университет Нархоз',
                        'Университет Туран',
                        'Алматинский технический университет',
                        'Казахский национальный женский педагогический университет',
                        'De Monfort University',
                        'Международный университет информационных технологий',
                        'Almaty Management University',
                        'Казахский национальный медицинский университет имени С.Асфендиярова',
                        'Казахский национальный университет имени Аль-Фараби',
                        'Казахско-британский технический университет',
                        'Satbayev University',
                        'Алматинский университет энергетики и связи имени Г.Даукеева',
                        'Caspian University',
                        'UIB',
                        'Принтмедиа технологиялар колледжі',
                        'Международный инженерно-технологический университет',
                        'Казахско-немецкий университет',
                        'Казахский университет имени Абая',
                        'Колледж Каспийского университета, г.Алматы',
                        'Алматинский государственный бизнес колледж',
                        'Колледж индустрии туризма и гостеприимства',
                        'Алматинский строительно-технический колледж',
                        'Международная академия бизнеса',
                        'Алматинский экономическо-правовой и педагогический колледж',
                        'Колледж Әділет',
                        'Алматинский электромеханический колледж',
                        'Алматинский государственный политехнический колледж',
                        'Алматинский государственный колледж сервиса и технологий',
                        'Алматинский государственный гуманитарно-педагогический колледж',
                        'Инновационный технический колледж',
                        'Назарбаев интеллектуальная школа г.Алматы, команда №1',
                        'Республиканская физико-математическая школа г.Алматы',
                    ],
                },

                shymkent: {
                    name: 'Шымкент',
                    universities: [
                        'Южно-казахстанский педагогический университет имени У.Жанибекова',
                        'Назарбаев интеллектуальная школа г.Шымкент, команда №1',
                        'Назарбаев интеллектуальная школа г.Шымкент, команда №2',
                        'Назарбаев интеллектуальная школа г.Шымкент, команда №3',
                        'Назарбаев интеллектуальная школа г.Шымкент, команда №4',
                    ],
                },

                abay: {
                    name: 'Абайская область',
                    universities: [
                        'Shakarim University, г.Семей',
                        'Медицинский университет города Семей',
                        'Назарбаев интеллектуальная школа г.Семей, команда №1',
                        'Назарбаев интеллектуальная школа г.Семей, команда №2',
                        'Назарбаев интеллектуальная школа г.Семей, команда №3',
                        'Назарбаев интеллектуальная школа г.Семей, команда №4',
                    ],
                },

                akmola: {
                    name: 'Акмолинская область',
                    universities: [
                        'Кокшетауский университет имени А.Мырзахметова',
                        'IQanat High School of Burabay, команда №1',
                        'IQanat High School of Burabay, команда №2',
                        'IQanat High School of Burabay, команда №3',
                        'IQanat High School of Burabay, команда №4',
                        'IQanat High School of Burabay, команда №5',
                        'IQanat High School of Burabay, команда №6',
                        'IQanat High School of Burabay, команда №7',
                        'IQanat High School of Burabay, команда №8',
                        'IQanat High School of Burabay, команда №9',
                        'IQanat High School of Burabay, команда №10',
                        'IQanat High School of Burabay, команда №11',
                    ],
                },

                aktobe: {
                    name: 'Актюбинская область',
                    universities: [
                        'Западно-казахстанский медицинский университет имени М.Оспанова, г.Актобе',
                        'Актюбинский региональный университет имени К.Жубанова',
                        'QAZGUU School Aqtobe, команда №1',
                        'QAZGUU School Aqtobe, команда №2',
                    ],
                },

                atyrau: {
                    name: 'Атырауская область',
                    universities: [
                        'Атырауский университет имени Х.Досмухамедова',
                        'Bilim International Study Centre г.Атырау, команда №1',
                        'Bilim International Study Centre г.Атырау, команда №2',
                        'Bilim International Study Centre г.Атырау, команда №3',
                    ],
                },

                eastKazakhstan: {
                    name: 'Восточно-Казахстанская область',
                    universities: [
                        'Казахстанско-американский свободный университет, г.Усть-Каменогорск',
                        'Высший колледж Казахстанско-Американского свободного университета, г.Усть-Каменогорск',
                        'Высший Политехнический колледж, г.Усть-Каменогорск',
                        'Риддерский колледж, г.Риддер',
                    ],
                },

                zhambyl: {
                    name: 'Жамбылская область',
                    universities: [
                        'Таразский университет имени М.Х.Дулати',
                        'Международный Таразский инновационный институт им.Шерхана Муртазы',
                        'Назарбаев интеллектуальная школа г.Тараз, команда №1',
                        'Назарбаев интеллектуальная школа г.Тараз, команда №2',
                    ],
                },

                zhetysu: {
                    name: 'Жетысуская область',
                    universities: [
                        'Жетысуский университет имени Ильяса Жансугурова, г.Талдыкорган',
                        'Zhansugurov College, г.Талдыкорган',
                    ],
                },

                westKazakhstan: {
                    name: 'Западно-Казахстанская область',
                    universities: [
                        'Западно-Казахстанский инновационно-технологический университет',
                        'Назарбаев интеллектуальная школа г.Уральск, команда №1',
                    ],
                },

                karaganda: {
                    name: 'Карагандинская область',
                    universities: [
                        'Карагандинский университет имени академика Е.А.Букетова',
                        'Карагандинский медицинский университет',
                        'Карагандинский университет Казпотребсоюза',
                        'Карагандинский технический университет имени А.Сагинова',
                        'Карагандинский высший политехнический колледж',
                        'Саранский гуманитарно-технический колледж имени Абая Кунанбаева',
                        'Колледж инновационных технологий Карагандинского технического университета имени А.Сагинова',
                        'Карагандинский областной высший сестринский колледж',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №1',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №2',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №3',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №4',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №5',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №6',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №7',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №8',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №9',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №10',
                        'Назарбаев интеллектуальная школа г.Караганда, команда №11',
                        'Гимназия имени Каныша Сатпаева, г.Караганда',
                        'Специализированная Школа-Лицей-Интернат Информационных Технологий, г.Караганда',
                        'QSchool Qaraganda, команда №1',
                        'QSchool Qaraganda, команда №2',
                        'QSchool Qaraganda, команда №3',
                        'QSchool Qaraganda, команда №4',
                        'QSchool Qaraganda, команда №5',
                        'QSchool Qaraganda, команда №6',
                    ],
                },

                kostanay: {
                    name: 'Костанайская область',
                    universities: [
                        'Костанайский региональный университет имени А.Байтурсынова',
                        'Назарбаев интеллектуальная школа г.Костанай, команда №1',
                        'QAZGUU School Kostanay, команда №1',
                    ],
                },

                kyzylorda: {
                    name: 'Кызылординская область',
                    universities: [
                        'Кызылординский университет имени Коркыт Ата',
                        'Назарбаев интеллектуальная школа г.Кызылорда, команда №1',
                    ],
                },

                mangystau: {
                    name: 'Мангистауская область',
                    universities: [
                        'Yessenov University, г.Актау',
                        'Мангистауский высший политехнический колледж имени Х.Узбекгалиева',
                        'Назарбаев интеллектуальная школа г.Актау, команда №1',
                    ],
                },

                pavlodar: {
                    name: 'Павлодарская область',
                    universities: [
                        'Toraighyrov University',
                        'Павлодарский педагогический университет имени Ә.Марғұлан',
                        'Назарбаев интеллектуальная школа г.Павлодар, команда №1',
                        'Назарбаев интеллектуальная школа г.Павлодар, команда №2',
                        'Средняя образовательная школа №2, г.Павлодар, команда №1',
                    ],
                },

                northKazakhstan: {
                    name: 'Северо-Казахстанская область',
                    universities: [
                        'Северо-Казахстанский университет имени М.Козыбаева',
                        'Северо-Казахстанский высший медицинский колледж',
                        'Высший колледж имени Магжана Жумабаева',
                        'Назарбаев интеллектуальная школа г.Петропавловск, команда №1',
                        'Назарбаев интеллектуальная школа г.Петропавловск, команда №2',
                        'Назарбаев интеллектуальная школа г.Петропавловск, команда №4',
                        'Назарбаев интеллектуальная школа г.Петропавловск, команда №5',
                        'Назарбаев интеллектуальная школа г.Петропавловск, команда №6',
                        'Назарбаев интеллектуальная школа г.Петропавловск, команда №7',
                        'Школа-гимназия имени Букетова, с.Сергеевка',
                    ],
                },

                turkestan: {
                    name: 'Туркестанская область',
                    universities: [
                        'Международный университет туризма и гостеприимства',
                        'Международный Казахско-Турецкий университет им.Ходжа Ахмет Ясауи',
                    ],
                },

                ulytau: {
                    name: 'Улытауская область',
                    universities: [
                        'Специализированная школа-интернат имени Абая, г.Жезказган, команда №1',
                    ],
                },

                almatyRegion: {
                    name: 'Алматинская область',
                    universities: [
                        'SDU University, г.Каскелен',
                    ],
                },
            },
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
        competitions: {
            breadcrumbs: {
                current: 'Соревнования'
            },
            title: 'Соревнования',
            types: {
                worldCup: 'WORLD CUP',
                nationalExpo: 'NATIONAL EXPO',
                schoolChampionship: 'Республиканский чемпионат школьного предпринимательства'
            },
            links: {
                results: 'Результаты',
                photos: 'Фото'
            },
            years: {
                2025: {
                    title: 'WORLD CUP 2025',
                    announcementTitle: 'ENACTUS WORLD CUP 2025 AFTER MOVIE',
                    description: '<p>Смотрите лучшие моменты мирового кубка 2025 года.</p>'
                },
                2024: {
                    title: 'WORLD CUP 2024',
                    announcementTitle: 'ENACTUS WORLD CUP 2024 ANNOUNCEMENT',
                    description: `
      <p>Впервые в Казахстане состоялся мировой кубок студенческого предпринимательства ENACTUS...</p>
      <p>Все бизнес-проекты студентов ENACTUS направлены на достижение 17 Целей устойчивого развития ООН...</p>
    `
                },
                2023: {
                    title: 'WORLD CUP 2023',
                    announcementTitle: 'ENACTUS WORLD CUP 2023 AFTERMOVIE',
                    description: '<p>Итоги мирового кубка в Нидерландах.</p>'
                }
            }
        },
        newsPage: {
            breadcrumbs: {
                current: 'Новости'
            },
            title: 'СМИ о нас',
            banner: {
                title: ' Как ENACTUS Kazakhstan объединяет студентов и бизнес для решения проблем общества ',
                subtitle: 'За 30 лет работы программы в Казахстане студенты создали тысячи бизнес-кейсов и сотни реальных проектов '
            }
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
                    name: 'SAULE ZEINOLLA',
                    role: 'Председатель Академического совета ENACTUS Kazakhstan, Доктор PhD, независимый эксперт ЮНЕСКО'
                },
                askar: {
                    name: 'ASKAR NURSHA',
                    role: 'Политолог, советник директора Казахстанского института стратегических исследований'
                },
                bakirova: {
                    name: 'KULZHAKHAN BAKIROVA',
                    role: 'Профессор КазНПУ им. Абая, д.п.н., к.б.н. Академик РАЕ, член-корр. АПН РК и МА ФИДЖИП - ЕВРОТАЛАНТ (Франция)'
                },
                galia: {
                    name: 'GALIYA NURMUKHANBETOVA',
                    role: 'Ассоциированный профессор Международного Университета Информационных Технологий (МУИТ)'
                },
                enlik: {
                    name: 'YENLIK BAISHEVA',
                    role: 'Кандидат экономических наук, доцент кафедры "Финансы и учёт" UIB им. К. Сагадиева'
                },
                zhenis:{
                    name: 'ZHENIS ZHARLYGASOV',
                    role: 'Проректор по исследованиям, инновациям и цифровизации НАО “Костанайский региональный университет имени Ахмет Байтұрсынұлы”, кандидат сельскохозяйственных наук, ассоциированный профессор'
                },
                zhannet:{
                    name: 'ZHANNETTA KALISHEVA',
                    role: 'Руководитель Бюро по оценке и сертификации юристов MNU, кандидат юридических наук, Professor Emeritus'
                },
                danial: {
                    name: 'DANIAL SAARI',
                    role: 'Директор Центра политических исследований, AlmaU'
                },
                yerlan: {
                    name: 'GALIYA MYAMESHEVA',
                    role: 'Советник в международной компании ARETERA PUBLIC AFFAIRS'
                },
                gulsim: {
                    name: 'GULSIM AITKHOZHAEVA',
                    role: 'Руководитель Офиса международной мобильности и программ Казахского национального университета им. Aль-Фараби, ИО ассоциированного профессора',
                },
                galiya: {
                    name: 'GALIYA MYAMESHEVA',
                    role: "Aссоциированный профессор Факультета Мировой Политики КНУ"
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
            alumi: 'Түлектер',
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
            heroSubtitle: 'Кәсіпкерлік арқылы Қазақстанның болашағын өзгертетін студенттік қозғалыстың бір бөлігі бол.',
            heroSubtitleKz: 'МЕКТЕП ОҚУШЫЛАРЫ МЕН СТУДЕНТТЕР АРАСЫНДА КӘСІПКЕРЛІК, <br /> СТАРТАПТАР ЖӘНЕ ИННОВАЦИЯЛАР БОЙЫНША ENACTUS KAZAKHSTAN 2026 <br /> ҰЛТТЫҚ КУБОГІ',
            joinBtn: 'Бізге қосыл',
            aboutTitlePart1: 'ENACTUS ',
            aboutTitlePart2: 'ДЕГЕНІМІЗ НЕ?',
            aboutP1: 'ENACTUS — студенттердің, академиялық және бизнес көшбасшыларының басын қосып, жастар кәсіпкерлігін дамытатын халықаралық коммерциялық емес ұйым.',
            aboutP2: 'Біздің мақсатымыз — студенттерді маңызды әлеуметтік-экономикалық, экологиялық және гуманитарлық мәселелерді шешетін әлеуметтік бизнес-жобаларды құруға шабыттандыру.',
            quote: 'Біз басқалар үшін кәсіпкерлік әрекеттер жасайтын студенттерге инвестиция сала отырып, бәріміз үшін жақсы әлем құратынымызға сенеміз.',
            timer: {
                days: 'КҮН',
                hours: 'САҒАТ',
                minutes: 'МИНУТ',
                seconds: 'СЕКУНД',
            },
            event: {
                date: '28–29 сәуір 2026',
                location: 'Алматы қаласы, Тимирязев көшесі, 42 к1',
            },
            stats: {
                regions: 'Қазақстан аймақтары',
                institutions: 'оқу орындары',
                students: 'жыл сайынғы қатысушылар',
                companies: 'серіктес компаниялар',
            },
        },
        projects: {
            title: 'ENACTUS KAZAKHSTAN 2025 Ұлттық кубогының World Cup лигасының финалисттері',
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
        competitions: {
            breadcrumbs: {
                current: 'Жарыстар'
            },
            title: 'Жарыстар',
            types: {
                worldCup: 'WORLD CUP',
                nationalExpo: 'NATIONAL EXPO',
                schoolChampionship: 'Республикалық мектеп кәсіпкерлігі чемпионаты'
            },
            links: {
                results: 'Нәтижелер',
                photos: 'Фото'
            },
            years: {
                2025: {
                    title: 'WORLD CUP 2025',
                    announcementTitle: 'ENACTUS WORLD CUP 2025 AFTER MOVIE',
                    description: '<p>2025 жылғы әлем кубогының ең жарқын сәттерін көріңіз.</p>'
                },
                2024: {
                    title: 'WORLD CUP 2024',
                    announcementTitle: 'ENACTUS WORLD CUP 2024 ANNOUNCEMENT',
                    description: `
      <p>Қазақстанда алғаш рет ENACTUS студенттік кәсіпкерлік әлемдік кубогы өтті.</p>
      <p>ENACTUS студенттерінің барлық бизнес-жобалары БҰҰ-ның 17 Тұрақты даму мақсатын жүзеге асыруға бағытталған.</p>
    `
                },
                2023: {
                    title: 'WORLD CUP 2023',
                    announcementTitle: 'ENACTUS WORLD CUP 2023 AFTERMOVIE',
                    description: '<p>Нидерландтағы әлемдік кубоктың қорытындылары.</p>'
                }
            }
        },
        newsPage: {
            breadcrumbs: {
                current: 'Жаңалықтар'
            },
            title: 'БАҚ біз туралы',
            banner: {
                title: 'ENACTUS Kazakhstan әлеуметтік мәселелерді шешу үшін студенттер мен бизнесті қалай біріктіреді',
                subtitle: 'Бағдарламаның Қазақстанда жұмыс істеген 30 жылында студенттер әлеуметтік кәсіпкерлік саласында мыңдаған бизнес-кейстер'
            }
        },
        news: {
            title: 'БАҚ біз туралы',
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
            success: 'Өтінім  мекенжайына сәтті жіберілді!',
            error: 'Өтінімді жіберу кезінде қате кетті.',
            emailLabel: 'ЭЛЕКТРОНДЫҚ ПОШТА:',
            phoneLabel: 'ТЕЛЕФОН:'
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
                albina: {name: 'Albina Aisamutdinova', role: 'ENACTUS KAZAKHSTAN өңірлік үйлестірушісі, Астана қ.'},
                diana: { name: 'Diana Nurzhanova', role: 'Халықаралық қатынастар жөніндегі менеджер' },
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
            howToCreate: 'Команда қалай құруға болады',
            tabs: {
                vuz: 'Университеттер',
                colleges: 'Колледждер',
                schools: 'Мектептер',
            },
            cities: {
                astana: {
                    name: 'Астана',
                    universities: [
                        'Астана медицина университеті',
                        'Астана халықаралық университеті',
                        'Астана IT университеті',
                        'Л.Н. Гумилев атындағы Еуразия ұлттық университеті',
                        'Туран-Астана университеті',
                        'Coventry University Kazakhstan',
                        'С. Сейфуллин атындағы Қазақ агротехникалық зерттеу университеті',
                        'Мақсұт Нәрікбаев университеті',
                        'Есіл университеті',
                        'Қазақ ұлттық спорт университеті',
                        'Қазақстан халықаралық лингвистикалық колледжі',
                        'Urban College',
                        'Көлік және коммуникация жоғары колледжі',
                        'Astana IT колледжі',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №3 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №4 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №5 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №6 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №7 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №8 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №9 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №10 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №11 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №12 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №13 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №14 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №15 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №16 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №17 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №18 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №19 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №20 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №21 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №22 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №23 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №24 команда',
                        'Астана қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №25 команда',
                        'Астана халықаралық мектебі, №1 команда',
                        'Астана халықаралық мектебі, №2 команда',
                        'Астана қаласының бизнес және инжиниринг ұлттық мектебі, №1 команда',
                        'Астана қаласының бизнес және инжиниринг ұлттық мектебі, №2 команда',
                        'Астана қаласының бизнес және инжиниринг ұлттық мектебі, №3 команда',
                        'Rivera International School by Quantum',
                        'Астана қаласы №10 мектеп-лицейі',
                        'Астана қаласы №89 мектеп-лицейі, №1 команда',
                        'Астана қаласы №89 мектеп-лицейі, №2 команда',
                        'Bilim International School',
                        'Space School',
                        'Астана қаласы №17 мектеп-гимназиясы',
                    ],
                },

                almaty: {
                    name: 'Алматы',
                    universities: [
                        'Нархоз университеті',
                        'Туран университеті',
                        'Алматы технологиялық университеті',
                        'Қазақ ұлттық қыздар педагогикалық университеті',
                        'De Montfort University',
                        'Халықаралық ақпараттық технологиялар университеті',
                        'Almaty Management University',
                        'С. Асфендияров атындағы Қазақ ұлттық медицина университеті',
                        'Әл-Фараби атындағы Қазақ ұлттық университеті',
                        'Қазақ-британ техникалық университеті',
                        'Satbayev University',
                        'Г. Дәукеев атындағы Алматы энергетика және байланыс университеті',
                        'Каспий университеті',
                        'UIB',
                        'Принтмедиа технологиялар колледжі',
                        'Халықаралық инженерлік-технологиялық университет',
                        'Қазақ-неміс университеті',
                        'Абай атындағы Қазақ университеті',
                        'Каспий университетінің колледжі, Алматы',
                        'Алматы мемлекеттік бизнес колледжі',
                        'Туризм және қонақжайлылық индустриясы колледжі',
                        'Алматы құрылыс-техникалық колледжі',
                        'Халықаралық бизнес академиясы',
                        'Алматы экономикалық-құқықтық және педагогикалық колледжі',
                        'Әділет колледжі',
                        'Алматы электромеханикалық колледжі',
                        'Алматы мемлекеттік политехникалық колледжі',
                        'Алматы мемлекеттік сервис және технологиялар колледжі',
                        'Алматы мемлекеттік гуманитарлық-педагогикалық колледжі',
                        'Инновациялық техникалық колледж',
                        'Алматы қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Алматы қаласының республикалық физика-математика мектебі',
                    ],
                },

                shymkent: {
                    name: 'Шымкент',
                    universities: [
                        'Ұ. Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
                        'Шымкент қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Шымкент қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                        'Шымкент қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №3 команда',
                        'Шымкент қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №4 команда',
                    ],
                },

                abay: {
                    name: 'Абай облысы',
                    universities: [
                        'Shakarim University, Семей',
                        'Семей қаласының медицина университеті',
                        'Семей қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Семей қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                        'Семей қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №3 команда',
                        'Семей қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №4 команда',
                    ],
                },

                akmola: {
                    name: 'Ақмола облысы',
                    universities: [
                        'А. Мырзахметов атындағы Көкшетау университеті',
                        'IQanat High School of Burabay, №1 команда',
                        'IQanat High School of Burabay, №2 команда',
                        'IQanat High School of Burabay, №3 команда',
                        'IQanat High School of Burabay, №4 команда',
                        'IQanat High School of Burabay, №5 команда',
                        'IQanat High School of Burabay, №6 команда',
                        'IQanat High School of Burabay, №7 команда',
                        'IQanat High School of Burabay, №8 команда',
                        'IQanat High School of Burabay, №9 команда',
                        'IQanat High School of Burabay, №10 команда',
                        'IQanat High School of Burabay, №11 команда',
                    ],
                },

                aktobe: {
                    name: 'Ақтөбе облысы',
                    universities: [
                        'М. Оспанов атындағы Батыс Қазақстан медицина университеті, Ақтөбе',
                        'Қ. Жұбанов атындағы Ақтөбе өңірлік университеті',
                        'QAZGUU School Aqtobe, №1 команда',
                        'QAZGUU School Aqtobe, №2 команда',
                    ],
                },

                atyrau: {
                    name: 'Атырау облысы',
                    universities: [
                        'Х. Досмұхамедов атындағы Атырау университеті',
                        'Bilim International Study Centre, Атырау, №1 команда',
                        'Bilim International Study Centre, Атырау, №2 команда',
                        'Bilim International Study Centre, Атырау, №3 команда',
                    ],
                },

                eastKazakhstan: {
                    name: 'Шығыс Қазақстан облысы',
                    universities: [
                        'Қазақстан-Америка еркін университеті, Өскемен',
                        'Қазақстан-Америка еркін университетінің жоғары колледжі, Өскемен',
                        'Жоғары политехникалық колледж, Өскемен',
                        'Риддер колледжі, Риддер',
                    ],
                },

                zhambyl: {
                    name: 'Жамбыл облысы',
                    universities: [
                        'М.Х. Дулати атындағы Тараз университеті',
                        'Шерхан Мұртаза атындағы Халықаралық Тараз инновациялық институты',
                        'Тараз қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Тараз қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                    ],
                },

                zhetysu: {
                    name: 'Жетісу облысы',
                    universities: [
                        'Ілияс Жансүгіров атындағы Жетісу университеті, Талдықорған',
                        'Жансүгіров колледжі, Талдықорған',
                    ],
                },

                westKazakhstan: {
                    name: 'Батыс Қазақстан облысы',
                    universities: [
                        'Батыс Қазақстан инновациялық-технологиялық университеті',
                        'Орал қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                    ],
                },

                karaganda: {
                    name: 'Қарағанды облысы',
                    universities: [
                        'Академик Е.А. Бөкетов атындағы Қарағанды университеті',
                        'Қарағанды медицина университеті',
                        'Қарағанды Қазтұтынуодағы университеті',
                        'А. Сағынов атындағы Қарағанды техникалық университеті',
                        'Қарағанды жоғары политехникалық колледжі',
                        'Абай Құнанбаев атындағы Саран гуманитарлық-техникалық колледжі',
                        'А. Сағынов атындағы Қарағанды техникалық университетінің инновациялық технологиялар колледжі',
                        'Қарағанды облыстық жоғары мейірбике колледжі',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №3 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №4 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №5 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №6 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №7 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №8 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №9 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №10 команда',
                        'Қарағанды қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №11 команда',
                        'Қаныш Сәтпаев атындағы гимназия, Қарағанды',
                        'Ақпараттық технологиялар мамандандырылған мектеп-лицей-интернаты, Қарағанды',
                        'QSchool Qaraganda, №1 команда',
                        'QSchool Qaraganda, №2 команда',
                        'QSchool Qaraganda, №3 команда',
                        'QSchool Qaraganda, №4 команда',
                        'QSchool Qaraganda, №5 команда',
                        'QSchool Qaraganda, №6 команда',
                    ],
                },

                kostanay: {
                    name: 'Қостанай облысы',
                    universities: [
                        'А. Байтұрсынов атындағы Қостанай өңірлік университеті',
                        'Қостанай қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'QAZGUU School Kostanay, №1 команда',
                    ],
                },

                kyzylorda: {
                    name: 'Қызылорда облысы',
                    universities: [
                        'Қорқыт Ата атындағы Қызылорда университеті',
                        'Қызылорда қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                    ],
                },

                mangystau: {
                    name: 'Маңғыстау облысы',
                    universities: [
                        'Есенов университеті, Ақтау',
                        'Х. Өзбекғалиев атындағы Маңғыстау жоғары политехникалық колледжі',
                        'Ақтау қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                    ],
                },

                pavlodar: {
                    name: 'Павлодар облысы',
                    universities: [
                        'Торайғыров университеті',
                        'Ә. Марғұлан атындағы Павлодар педагогикалық университеті',
                        'Павлодар қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Павлодар қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                        'Павлодар қаласы №2 жалпы білім беретін мектебі, №1 команда',
                    ],
                },

                northKazakhstan: {
                    name: 'Солтүстік Қазақстан облысы',
                    universities: [
                        'М. Қозыбаев атындағы Солтүстік Қазақстан университеті',
                        'Солтүстік Қазақстан жоғары медициналық колледжі',
                        'Мағжан Жұмабаев атындағы жоғары колледж',
                        'Петропавл қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №1 команда',
                        'Петропавл қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №2 команда',
                        'Петропавл қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №4 команда',
                        'Петропавл қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №5 команда',
                        'Петропавл қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №6 команда',
                        'Петропавл қаласының физика-математика бағытындағы Назарбаев зияткерлік мектебі, №7 команда',
                        'Бөкетов атындағы мектеп-гимназиясы, Сергеевка ауылы',
                    ],
                },

                turkestan: {
                    name: 'Түркістан облысы',
                    universities: [
                        'Халықаралық туризм және қонақжайлылық университеті',
                        'Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университеті',
                    ],
                },

                ulytau: {
                    name: 'Ұлытау облысы',
                    universities: [
                        'Абай атындағы мамандандырылған мектеп-интернат, Жезқазған, №1 команда',
                    ],
                },

                almatyRegion: {
                    name: 'Алматы облысы',
                    universities: [
                        'SDU University, Қаскелен',
                    ],
                },
            },
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
                    name: 'SAULE ZEINOLLA',
                    role: 'ENACTUS Kazakhstan Академиялық кеңесінің төрайымы, PhD докторы, ЮНЕСКО тәуелсіз сарапшысы'
                },
                askar: {
                    name: 'ASKAR NURSHA',
                    role: 'Саясаттанушы, Қазақстан стратегиялық зерттеулер институты директорының кеңесшісі'
                },
                bakirova: {
                    name: 'KULZHAKHAN BAKIROVA',
                    role: 'Абай атындағы ҚазҰПУ профессоры, п.ғ.д., б.ғ.к. ЖҒА академигі, ҚР ПҒА корреспондент-мүшесі және ФИДЖИП - ЕВРОТАЛАНТ Халықаралық Академиясының корреспондент-мүшесі (Франция)'
                },
                galia: {
                    name: 'GALIYA NURMUKHANBETOVA',
                    role: 'Халықаралық ақпараттық технологиялар университетінің (IITU) қауымдастырылған профессоры'
                },
                enlik: {
                    name: 'YENLIK BAISHEVA',
                    role: 'Экономика ғылымдарының кандидаты, К. Сағадиев атындағы UIB "Қаржы және есеп" кафедрасының доценті'
                },
                zhenis:{
                    name: 'ZHENIS ZHARLYGASOV',
                    role: 'Ахмет Байтұрсынұлы атындағы Қостанай өңірлік университетінің зерттеулер, инновациялар және цифрландыру жөніндегі проректоры, ауыл шаруашылығы ғылымдарының кандидаты, қауымдастырылған профессор'
                },
                zhannet:{
                    name: 'ZHANNΕTTA KALISHEVA',
                    role: 'MNU Заңгерлерді бағалау және сертификаттау бюросының жетекшісі, заң ғылымдарының кандидаты, Professor Emeritus'
                },
                danial:{
                    name: 'DANIAL SAARI',
                    role: 'Саяси зерттеулер орталығының директоры, AlmaU'
                },
                yerlan: {
                    name: 'YERLAN KARIMOV',
                    role: 'ARETERA PUBLIC AFFAIRS халықаралық компаниясының кеңесшісі'
                },
                gulsim: {
                    name: 'GULSIM AITKHOZHAEVA',
                    role: 'Әл-Фараби атындағы Қазақ ұлттық университетінің Халықаралық мобильділік және бағдарламалар бөлімінің меңгерушісі, доцент міндетін атқарушы',
                },
                galiya: {
                    name: 'GALIYA MYAMESHEVA',
                    role: "ҚазҰУ әлемдік саясат факультетінің доценті"
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