const config = {
    companyName: "Zednické Práce",
    companySlogan: "Profesionální zednické služby pro všechny vaše potřeby",
    phone: "(420) 123 456 789",
    email: "info@zednickeprace.cz",
    address: "123 Hlavní ulice, Město, 12345",
    socialMedia: {
        facebook: "https://facebook.com/zednickeprace",
        instagram: "https://instagram.com/zednickeprace",
        linkedin: "https://linkedin.com/company/zednickeprace"
    },
    services: [
        {
            title: 'Komplexní stavební projekty',
            description: 'Zajišťujeme všechny fáze stavebních projektů od návrhu až po dokončení, včetně novostaveb, rekonstrukcí a renovací.',
            image: 'outside_sun.png'
        },
        {
            title: 'Opravy základů a konstrukcí',
            description: 'Diagnostikujeme a opravujeme základy budov, aby byla zajištěna jejich stabilita a dlouhodobá odolnost.',
            image: 'fixing_disaster2.png'
        },
        {
            title: 'Pokládání obkladů a dlažeb',
            description: 'Provádíme profesionální pokládání obkladů a dlažeb v interiérech i exteriérech s důrazem na preciznost a kvalitu.',
            image: 'laying_tiles.png'
        },
        {
            title: 'Realizace fasád',
            description: 'Vytváříme estetické a energeticky účinné fasády, které zlepšují vzhled i tepelnou izolaci budov.',
            image: 'masonry4.png'
        },
        {
            title: 'Cihlové ploty a zídky',
            description: 'Nabízíme stavbu cihlových plotů a zídek, které poskytují bezpečnost a estetický doplněk vaší nemovitosti.',
            image: 'masonry2.png'
        },
    ],
    portfolio: [
        {
            title: 'Moderní renovace domu',
            description: 'Kompletní renovace exteriéru s vlastním kamenným obkladem.',
            images: ['outside_sun.png', 'masonry1.png', 'masonry2.png'],
            testimonial: 'Tým odvedl úžasnou práci na naší renovaci domu. Nemohli jsme být šťastnější!',
            client: 'Jan D.',
            details: 'Tento projekt zahrnoval kompletní renovaci exteriéru domu z 70. let. Vyměnili jsme starou cihlovou fasádu za moderní kamenný obklad, přestavěli komín a přidali vlastní kamenné obklady kolem oken a dveří.'
        },
        {
            title: 'Restaurace komerční budovy',
            description: 'Restaurace historické budovy v centru města.',
            images: ['inside_building.png', 'masonry3.png', 'masonry4.png'],
            testimonial: 'Zednické Práce přivedly naši starou budovu zpět k životu. Úžasná práce!',
            client: 'Sára M.',
            details: 'Restaurovali jsme fasádu 100 let staré komerční budovy v centru města. Projekt zahrnoval opravu všech cihelných prací, výměnu poškozených cihel a obnovu zdobených kamenných detailů kolem oken a říms.'
        },
        {
            title: 'Venkovní krb na zakázku',
            description: 'Návrh a stavba unikátního venkovního obytného prostoru.',
            images: ['masonry4.png', 'masonry5.png', 'outside_sun.png'],
            testimonial: 'Náš nový venkovní krb je středobodem naší zahrady. Děkujeme!',
            client: 'Michal R.',
            details: 'Navrhli a postavili jsme zakázkový venkovní krb jako středobod nové terasy. Krb má kombinaci přírodního kamene a cihel, vestavěný úložný prostor na dřevo a vyvýšené ohniště pro sezení.'
        }
    ],
    reviews: [
        {
            id: 1,
            author: "Jana Nováková",
            rating: 5,
            text: "Vynikající práce! Tým byl profesionální, dochvilný a výsledky předčily naše očekávání."
        },
        {
            id: 2,
            author: "Tomáš Novotný",
            rating: 4,
            text: "Skvělý servis a kvalitní zpracování. Určitě doporučuji ostatním."
        },
        {
            id: 3,
            author: "Martina Svobodová",
            rating: 5,
            text: "Fantastická práce na naší renovaci terasy. Pozornost k detailu byla působivá."
        }
    ],
    team: [
        {
            name: 'Tomáš Kamenský',
            role: 'Zedník',
            image: 'masonry5.png',
            bio: 'S více než 20 lety zkušeností vede náš tým s odborností a oddaností.',
            experience: 5
        },
        {
            name: 'Tomáš Kamenský 2',
            role: 'Projektový manažer',
            image: 'fixing_disaster.png',
            bio: 'Tomáš zajišťuje hladký průběh každého projektu od začátku do konce.',
            experience: 10
        }
    ]
};
