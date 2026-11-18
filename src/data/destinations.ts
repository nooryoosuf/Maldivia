import type { Atoll, Destination } from '@/types/domain';

export const ATOLLS: Atoll[] = [
  {
    id: 'atoll-kaafu',
    slug: 'kaafu-south-male-atoll',
    officialName: {
      en: 'Kaafu Atoll (South Malé Atoll)',
      zh: '卡夫环礁（南马累环礁）',
    },
    administrativeCode: 'Kaafu (K)',
    traditionalName: {
      en: 'Maale Atholhu Dhekunuburi',
      zh: '南马累传统环礁',
    },
    description: {
      en: 'Located immediately south of Velana International Airport across the Vaadhoo Kandu channel, South Malé Atoll combines rapid 30-minute speedboat accessibility with deep oceanic channels, soft-coral thilas, and the Maldives’ most established inhabited island tourism infrastructure.',
      zh: '位于维拉纳国际机场（MLE）正南方向，隔瓦杜水道（Vaadhoo Kandu）相望。南马累环礁兼具30分钟快艇直达的便捷交通、深海水道潜点与马尔代夫最成熟的居民岛旅游基础设施。',
    },
    coordinates: { lat: 3.9412, lng: 73.4926 },
    distanceFromMaleKm: '27 km south of Malé',
    knownFor: {
      en: [
        '30-minute direct speedboat access from Velana Airport',
        'Kandooma Thila & Embudu Express drift diving',
        'Lively local island hospitality on Maafushi',
      ],
      zh: [
        '距马累维拉纳国际机场仅30分钟快艇航程',
        'Kandooma Thila 等知名通道放流潜点',
        '马富士岛（Maafushi）成熟丰富的海岛生活与出海体验',
      ],
    },
  },
  {
    id: 'atoll-alif-dhaal',
    slug: 'alif-dhaal-south-ari-atoll',
    officialName: {
      en: 'Alif Dhaal Atoll (South Ari Atoll)',
      zh: '阿里夫达尔环礁（南阿里环礁）',
    },
    administrativeCode: 'Alif Dhaal (ADh)',
    traditionalName: {
      en: 'Ari Atholhu Dhekunuburi',
      zh: '南阿里传统环礁',
    },
    description: {
      en: 'Home to the South Ari Marine Protected Area (SAMPA), South Ari Atoll is one of the very few places on Earth where juvenile whale sharks aggregate along the outer reef shelf throughout all twelve months of the year.',
      zh: '南阿里环礁拥有马尔代夫最大的海洋保护区——南阿里海洋保护区（SAMPA），是全球罕见的能够全年十二个月在环礁外侧珊瑚架偶遇野生鲸鲨与礁蝠鲼的海域。',
    },
    coordinates: { lat: 3.5306, lng: 72.925 },
    distanceFromMaleKm: '96 km southwest of Malé',
    knownFor: {
      en: [
        'Year-round Whale Shark aggregation zone (SAMPA)',
        'Dhigurah’s 3 km lagoon beach and natural southern sandbank',
        'Protected marine pinnacles including Kuda Rah Thila',
      ],
      zh: [
        '南阿里海洋保护区（SAMPA）全年野生鲸鲨观测带',
        '迪古拉岛（Dhigurah）3公里白沙滩与天然长尾沙洲',
        'Kuda Rah Thila 水下保护珊瑚山潜点',
      ],
    },
  },
  {
    id: 'atoll-vaavu',
    slug: 'vaavu-felidhoo-atoll',
    officialName: {
      en: 'Vaavu Atoll (Felidhoo Atoll)',
      zh: '瓦武环礁（费利杜环礁）',
    },
    administrativeCode: 'Vaavu (V)',
    traditionalName: {
      en: 'Felidhu Atholhu',
      zh: '费利杜传统环礁',
    },
    description: {
      en: 'With one of the smallest resident populations in the Maldives, Vaavu Atoll is prized for its quiet coral villages, shallow lagoons frequented by wild whipray stingrays and nurse sharks, and dramatic eastern channel dives.',
      zh: '瓦武环礁是马尔代夫常住人口最少、原生态保护极佳的环礁之一，以宁静的珊瑚沙村落、浅水岸边成群巡游的野生黄貂鱼与护士鲨，以及东侧壮观的深海水道潜点闻名。',
    },
    coordinates: { lat: 3.6803, lng: 73.4161 },
    distanceFromMaleKm: '57 km south of Malé',
    knownFor: {
      en: [
        'Shoreline stingray encounters on Fulidhoo Island',
        'Nurse shark snorkelling and Miyaru Kandu channel diving',
        'Traditional Bodu Beru & Langiri island percussion heritage',
      ],
      zh: [
        '富力杜岛（Fulidhoo）浅滩每日野生黄貂鱼互动',
        '护士鲨同游与 Miyaru Kandu 通道深潜',
        '传统 Bodu Beru 鼓乐与 Langiri 民俗文化',
      ],
    },
  },
  {
    id: 'atoll-alif-alif',
    slug: 'alif-alif-north-ari-atoll',
    officialName: {
      en: 'Alif Alif Atoll (North Ari Atoll)',
      zh: '阿里夫阿里夫环礁（北阿里环礁）',
    },
    administrativeCode: 'Alif Alif (AA)',
    traditionalName: {
      en: 'Ari Atholhu Uthuruburi',
      zh: '北阿里传统环礁',
    },
    description: {
      en: 'Encompassing both the main northern Ari reef rim and isolated oceanic islands like Thoddoo, North Ari Atoll features sea-turtle-rich house reefs, manta ray cleaning stations, and pioneering community environmental stewardship.',
      zh: '涵盖北阿里主环礁与托杜等独立珊瑚岛，北阿里环礁以岸潜即达的海龟草甸、礁蝠鲼清洁站、生态环保示范岛乌库拉斯（Ukulhas）以及热带水果种植园著称。',
    },
    coordinates: { lat: 4.2153, lng: 72.8636 },
    distanceFromMaleKm: '67–72 km west-northwest of Malé',
    knownFor: {
      en: [
        'Thoddoo’s green sea turtle reefs and tropical fruit farms',
        'Ukulhas eco-stewardship and 1 km crescent Bikini Beach',
        'Ukulhas Thila manta ray cleaning stations',
      ],
      zh: [
        '托杜岛（Thoddoo）海龟房礁与热带西瓜木瓜果园',
        '乌库拉斯岛（Ukulhas）环保模范社区与1公里新月形比基尼海滩',
        'Ukulhas Thila 蝠鲼（魔鬼鱼）清洁站',
      ],
    },
  },
  {
    id: 'atoll-laamu',
    slug: 'laamu-haddhunmathi-atoll',
    officialName: {
      en: 'Laamu Atoll (Haddhunmathi Atoll)',
      zh: '拉姆环礁（哈杜马蒂环礁）',
    },
    administrativeCode: 'Laamu (L)',
    traditionalName: {
      en: 'Haddhunmathi Atholhu',
      zh: '哈杜马蒂南部环礁',
    },
    description: {
      en: 'Situated just two degrees north of the Equator in the southern Maldives, Laamu Atoll features the country’s largest island chain connected by an 18 km causeway, ancient pre-Islamic archaeological mounds, world-class reef-pass surf breaks, and uncrowded channel diving.',
      zh: '位于赤道以北仅两度的马尔代夫南部海域，拉姆环礁拥有由18公里跨海公路串联的马尔代夫最大居民岛链、古老佛教遗迹、世界级冲浪浪点以及少有人迹的纯净珊瑚礁。',
    },
    coordinates: { lat: 1.9153, lng: 73.5431 },
    distanceFromMaleKm: '250 km south of Malé',
    knownFor: {
      en: [
        'Gan Island: the largest single inhabited island in the Maldives',
        '18 km scenic causeway connecting four southern islands',
        'Fushi Kandu channel dives, Yin Yang surf break, and ancient ruins',
      ],
      zh: [
        '甘岛（Laamu Gan）：马尔代夫面积最大的天然居民岛',
        '18公里跨海连岛公路骑行探索四座南部海岛',
        'Fushi Kandu 原生态通道潜水、冲浪与古代佛塔遗迹',
      ],
    },
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-maafushi',
    slug: 'maafushi',
    name: {
      en: 'Maafushi Island',
      zh: '马富士岛 (Maafushi)',
    },
    atollId: 'atoll-kaafu',
    atollName: {
      en: 'Kaafu Atoll (South Malé Atoll)',
      zh: '卡夫环礁（南马累环礁）',
    },
    administrativeAtoll: 'Kaafu (K)',
    coordinates: { lat: 3.9412, lng: 73.4926 },
    islandDimensions: {
      en: 'Approx. 1.3 km × 0.27 km',
      zh: '约 1.3 公里 × 0.27 公里',
    },
    distanceFromAirport: {
      en: '27 km south of Velana International Airport (MLE)',
      zh: '距维拉纳国际机场 (MLE) 以南约 27 公里',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Maafushi_island.jpg/1920px-Maafushi_island.jpg',
      alt: {
        en: 'Palm-fringed white sand beach and turquoise lagoon on Maafushi local island, Kaafu Atoll, Maldives',
        zh: '马尔代夫卡夫环礁马富士居民岛（Maafushi）椰林白沙滩与碧蓝泻湖',
      },
      credit: 'Photo by Nattu Adnan / Wikimedia Commons (CC BY 2.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/On_My_Way_-_Maafushi%2C_Maldives_%28Unsplash%29.jpg/1920px-On_My_Way_-_Maafushi%2C_Maldives_%28Unsplash%29.jpg',
        alt: {
          en: 'Overhead drone view of a wooden jetty extending into turquoise waters on Maafushi Island, Maldives',
          zh: '马尔代夫马富士岛探入碧绿海水的木栈桥航拍',
        },
        credit: 'Photo by Ahmed Saffu / Wikimedia Commons (CC0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Buiobuione_Maafushi_Town.jpg/1920px-Buiobuione_Maafushi_Town.jpg',
        alt: {
          en: 'Waterfront view of Maafushi town and local guesthouses in South Malé Atoll, Maldives',
          zh: '马尔代夫南马累环礁马富士居民岛海滨与精品酒店建筑群',
        },
        credit: 'Photo by Buiobuione / Wikimedia Commons (CC BY-SA 4.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Maafushi-Beach-Maldives.jpg/1920px-Maafushi-Beach-Maldives.jpg',
        alt: {
          en: 'Coconut palms leaning over white coral sand on Maafushi Beach, Maldives',
          zh: '马尔代夫马富士岛海滩上的椰树与细白珊瑚沙',
        },
        credit: 'Photo by Nicolai Edgar Andersen / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    shortSummary: {
      en: 'The pioneer of local island hospitality in the Maldives, situated 30 minutes by speedboat from Velana Airport with beachfront dining, PADI dive centres, and rapid access to South Malé Atoll reefs.',
      zh: '马尔代夫居民岛旅游的发源地与标杆，距马累机场仅30分钟快艇航程，拥有完善的海滨餐饮、持牌潜水中心及通往南马累环礁著名潜点的便捷航线。',
    },
    editorialDescription: [
      {
        en: 'Following the Maldives government’s 2009 reform permitting guesthouses on inhabited islands, Maafushi in Kaafu Atoll became the country’s flagship community tourism hub. Positioned just 27 kilometres south of Velana International Airport, it removes the need for domestic flights while offering immediate access to the turquoise lagoons and outer channels of South Malé Atoll.',
        zh: '自2009年马尔代夫政府开放居民岛经营民宿以来，卡夫环礁的马富士岛（Maafushi）便成为马尔代夫最具代表性的居民岛旅游中心。全岛位于维拉纳国际机场以南27公里处，无需搭乘内陆飞机，下机后乘快艇30分钟即可踏上细白珊瑚沙滩。',
      },
      {
        en: 'The northern end of Maafushi centres around its palm-shaded Bikini Beach, oceanfront cafés, and properties such as Kaani Palm Beach. Daily excursion boats depart from the main jetty to nearby sandbanks, nurse shark snorkelling sites in Vaavu Atoll, and world-renowned drift dive sites including Kandooma Thila and Cocoa Corner.',
        zh: '岛屿北端汇聚了椰影环绕的比基尼海滩（Bikini Beach）、海景餐厅以及如 Kaani Palm Beach 等地标性海景酒店。每日清晨，多尼船与出海快艇从主码头出发，前往附近的拖尾沙洲、护士鲨浮潜点以及 Kandooma Thila 等世界级深潜潜点。',
      },
    ],
    transferOptions: [
      {
        method: 'speedboat',
        methodLabel: {
          en: 'Scheduled Speedboat',
          zh: '定期直达快艇',
        },
        duration: {
          en: '30–35 minutes',
          zh: '30–35 分钟',
        },
        frequencySummary: {
          en: 'Multiple daily departures between Velana Airport (MLE), Malé jetty, and Maafushi harbour.',
          zh: '每日多班往返于维拉纳国际机场（MLE）、马累码头与马富士港口。',
        },
        departurePoint: {
          en: 'Velana International Airport (MLE) Arrival Jetty',
          zh: '维拉纳国际机场 (MLE) 抵达快艇码头',
        },
      },
      {
        method: 'public_ferry',
        methodLabel: {
          en: 'MTCC Public Ferry (Route 306 / 309)',
          zh: 'MTCC 公共渡轮（306 / 309 航线）',
        },
        duration: {
          en: 'Approx. 90 minutes',
          zh: '约 90 分钟',
        },
        frequencySummary: {
          en: 'Operates daily except Fridays (Islamic holy day).',
          zh: '除周五（伊斯兰主麻日）停航外，其余日期每日运营。',
        },
        departurePoint: {
          en: 'Villingili Ferry Terminal, Malé',
          zh: '马累西南角 Villingili 公共渡轮码头',
        },
      },
    ],
    activities: {
      en: [
        'Snorkelling safaris to Biyadhoo Reef and Turtle Reef',
        'Scuba diving at Kandooma Thila, Cocoa Corner, and Kuda Giri Wreck',
        'Half-day sandbank excursions in South Malé Lagoon',
        'Sunset traditional handline fishing by dhoni',
        'Motorised and non-motorised lagoon water sports',
      ],
      zh: [
        'Biyadhoo 珊瑚花园与海龟礁浮潜探索',
        'Kandooma Thila、Cocoa Corner 与 Kuda Giri 沉船水肺深潜',
        '南马累环礁无人沙洲半日游与航拍体验',
        '乘传统多尼船体验日落手线海钓',
        '泻湖皮划艇、立式桨板与水上运动',
      ],
    },
    attractions: [
      {
        title: {
          en: 'Maafushi Northwestern Bikini Beach',
          zh: '马富士西北角比基尼海滩',
        },
        description: {
          en: 'A sheltered white-sand bay enclosed by breakwater reefs, offering calm swimming conditions and beachfront loungers.',
          zh: '受防波珊瑚礁庇护的白沙海湾，海水温和清澈，设有沙滩躺椅与遮阳伞，适合全天候游泳与日光浴。',
        },
      },
      {
        title: {
          en: 'Kandooma Thila & Kuda Giri Wreck',
          zh: 'Kandooma Thila 潜点与 Kuda Giri 沉船',
        },
        description: {
          en: 'Located a short boat ride south of Maafushi, featuring grey reef sharks, eagle rays, and an intact submerged cargo wreck surrounded by glassfish.',
          zh: '位于马富士以南短途船程处，以灰礁鲨、鹰鳐巡游及长满珊瑚的水下沉船景观著称。',
        },
      },
    ],
    visitorInformation: {
      bikiniBeach: {
        en: 'Designated Bikini Beach on the northwestern shoreline with direct access from beachfront hotels.',
        zh: '岛屿西北部设有专门划定的比基尼海滩（Bikini Beach），海滨酒店出门即达。',
      },
      houseReef: {
        en: 'Calm shallow lagoon off the beach; best coral and reef fish diversity accessed via 10–15 minute boat trips to nearby reefs.',
        zh: '岸边为平静浅海泻湖；最佳珊瑚群与鱼群建议乘船10–15分钟前往周边珊瑚礁。',
      },
      atmAndCurrency: {
        en: 'Bank of Maldives (BML) ATM located on the island dispensing MVR; USD cash and major credit cards widely accepted.',
        zh: '岛上设有马尔代夫银行（BML）ATM机（可取拉菲亚 MVR）；美元现金及主流信用卡广泛通用。',
      },
      medicalFacility: {
        en: 'Maafushi Health Centre operates 24 hours on the island, with rapid speedboat access to Malé hospitals.',
        zh: '岛上设有24小时运营的马富士医疗中心（Maafushi Health Centre），并可乘快艇30分钟直达马累大型医院。',
      },
      localCultureNote: {
        en: 'Modest dress (covering shoulders and knees) is required when walking through the central village streets and harbour.',
        zh: '在村落主街、港口及当地商店区域行走时，请穿着得体（遮盖肩膀与膝盖）。',
      },
    },
    featured: true,
  },
  {
    id: 'dest-dhigurah',
    slug: 'dhigurah',
    name: {
      en: 'Dhigurah Island',
      zh: '迪古拉岛 (Dhigurah)',
    },
    atollId: 'atoll-alif-dhaal',
    atollName: {
      en: 'Alif Dhaal Atoll (South Ari Atoll)',
      zh: '阿里夫达尔环礁（南阿里环礁）',
    },
    administrativeAtoll: 'Alif Dhaal (ADh)',
    coordinates: { lat: 3.5306, lng: 72.925 },
    islandDimensions: {
      en: 'Approx. 3.8 km × 0.3 km (plus southern sandbank)',
      zh: '约 3.8 公里 × 0.3 公里（南端延伸天然长尾沙洲）',
    },
    distanceFromAirport: {
      en: '96 km southwest of Velana International Airport (MLE)',
      zh: '距维拉纳国际机场 (MLE) 西南约 96 公里',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Dhigurah.jpg/1920px-Dhigurah.jpg',
      alt: {
        en: 'Endless white sand beach and calm turquoise lagoon on Dhigurah Island, South Ari Atoll, Maldives',
        zh: '马尔代夫南阿里环礁迪古拉岛（Dhigurah）绵延白沙滩与澄澈泻湖',
      },
      credit: 'Photo by Syced / Wikimedia Commons (CC0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Sun_Island_Resort%2C_Alif_Dhaal_Atoll%2C_Maldives_%28Unsplash%29.jpg/1920px-Sun_Island_Resort%2C_Alif_Dhaal_Atoll%2C_Maldives_%28Unsplash%29.jpg',
        alt: {
          en: 'Aerial view of turquoise reefs and islands in Alif Dhaal (South Ari) Atoll, Maldives',
          zh: '马尔代夫南阿里环礁碧绿泻湖与珊瑚礁航拍',
        },
        credit: 'Photo by Syd Sujuaan / Wikimedia Commons (CC0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Whale_shark_Maldives.jpg/1920px-Whale_shark_Maldives.jpg',
        alt: {
          en: 'Spotted whale shark gliding through sunlit blue waters in the Maldives',
          zh: '在马尔代夫南阿里环礁蔚蓝海水中巡游的野生鲸鲨',
        },
        credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    shortSummary: {
      en: 'A slender 3.8 km ribbon of palm forest and powder-white sand bordering the South Ari Marine Protected Area—the premier year-round whale shark sanctuary in the Maldives.',
      zh: '全长3.8公里的狭长椰林珊瑚岛，紧邻南阿里海洋保护区（SAMPA），以全年偶遇野生鲸鲨、3公里原始白沙滩与南端壮观的天然拖尾沙洲享誉全球。',
    },
    editorialDescription: [
      {
        en: 'In Dhivehi, Dhigurah translates simply to "Long Island." Stretching nearly four kilometres along the southeastern rim of South Ari Atoll, the island’s compact village occupies the northern harbour area, leaving the remaining three kilometres covered in dense coastal jungle bordered by an uninterrupted western lagoon beach.',
        zh: '在马尔代夫迪维希语中，“Dhigurah”意为“长岛”。这座狭长海岛沿着南阿里环礁东南边缘绵延近四公里，居民社区集中在北端港口附近，而南侧长达三公里的岛体则保留了茂密的原生态热带丛林与毫无遮挡的西侧泻湖白沙滩。',
      },
      {
        en: 'Dhigurah’s outer ocean reef forms part of the South Ari Marine Protected Area (SAMPA). Nutrient-rich upwellings along this southern shelf attract whale sharks year-round, making Dhigurah the most reliable base in the Maldives for ethical whale shark snorkelling and diving alongside reef manta rays.',
        zh: '迪古拉岛外侧的深海珊瑚礁直接隶属于南阿里海洋保护区（SAMPA）。受印度洋上升流带来的丰富浮游生物吸引，野生鲸鲨全年在此海域巡游，使迪古拉成为马尔代夫观测鲸鲨与礁蝠鲼最具代表性的生态胜地。',
      },
    ],
    transferOptions: [
      {
        method: 'speedboat',
        methodLabel: {
          en: 'Direct Scheduled Speedboat',
          zh: '机场直达定期快艇',
        },
        duration: {
          en: '1 hour 45 minutes – 2 hours',
          zh: '约 1 小时 45 分钟 – 2 小时',
        },
        frequencySummary: {
          en: 'Daily morning and afternoon scheduled departures from Velana Airport / Malé via Dhangethi.',
          zh: '每日上下午均有固定班次从维拉纳机场/马累出发直达迪古拉岛。',
        },
        departurePoint: {
          en: 'Velana International Airport (MLE)',
          zh: '维拉纳国际机场 (MLE) 快艇码头',
        },
      },
      {
        method: 'domestic_flight_speedboat',
        methodLabel: {
          en: 'Domestic Flight to Maamigili (VAM) + Speedboat',
          zh: '内陆航班（飞往 Maamigili）+ 快艇接驳',
        },
        duration: {
          en: '20 min flight + 20 min speedboat',
          zh: '20 分钟内陆航程 + 20 分钟快艇',
        },
        frequencySummary: {
          en: 'Multiple daily domestic flights operated to Villa Airport Maamigili (VAM).',
          zh: '每日多班内陆航班飞往南阿里环礁 Maamigili 机场 (VAM)。',
        },
        departurePoint: {
          en: 'MLE Domestic Terminal',
          zh: '维拉纳国际机场国内航站楼',
        },
      },
    ],
    activities: {
      en: [
        'Year-round whale shark snorkelling and diving along South Ari MPA',
        'Sunset walk along Dhigurah Thundi (southern natural sandbank)',
        'Scuba diving at Kuda Rah Thila and Broken Rock',
        'Manta ray cleaning station excursions in Ari Atoll lagoon',
        'Jungle trail walking from the northern village to the southern tip',
      ],
      zh: [
        '南阿里海洋保护区（SAMPA）全年野生鲸鲨寻访与同游',
        '漫步迪古拉南端天然拖尾沙洲（Dhigurah Thundi）观赏日落',
        'Kuda Rah Thila 水下保护珊瑚山与 Broken Rock 峡谷深潜',
        '阿里环礁泻湖蝠鲼（魔鬼鱼）清洁站浮潜',
        '穿越3公里原始椰林步道徒步探索',
      ],
    },
    attractions: [
      {
        title: {
          en: 'Dhigurah Thundi (Southern Sandbank)',
          zh: '迪古拉长尾沙洲 (Dhigurah Thundi)',
        },
        description: {
          en: 'A natural ribbon of pure coral sand extending over a kilometre from the southern tip of the island toward neighbouring Lux* South Ari Atoll.',
          zh: '从岛屿最南端向碧蓝海中自然延伸超过一公里的纯白珊瑚沙洲，退潮时可徒步走入海中央。',
        },
      },
      {
        title: {
          en: 'South Ari Marine Protected Area (Maamigili Beyru)',
          zh: '南阿里海洋保护区外礁 (Maamigili Beyru)',
        },
        description: {
          en: 'Located minutes by dhoni from Dhigurah harbour, this outer reef edge is internationally recognised for year-round sightings of Rhincodon typus (whale sharks).',
          zh: '距离迪古拉码头仅数分钟船程的环礁外侧礁缘，是国际公认的全年野生鲸鲨聚集栖息带。',
        },
      },
    ],
    visitorInformation: {
      bikiniBeach: {
        en: 'Over 2.5 kilometres of designated Bikini Beach along the western sunset coast.',
        zh: '西侧日落海岸拥有超过 2.5 公里长的指定比基尼海滩，沙质细腻且人迹罕至。',
      },
      houseReef: {
        en: 'Accessible along the western lagoon drop-off with reef fish, turtles, and eagle rays.',
        zh: '西侧泻湖边缘即为房礁断层，岸潜即可偶遇海龟、鹰鳐及丰富珊瑚礁鱼群。',
      },
      atmAndCurrency: {
        en: 'BML ATM available near the harbour; guesthouses and dive centres accept USD and major credit cards.',
        zh: '港口附近设有马尔代夫银行（BML）ATM机；岛上民宿与潜水中心普遍接受美元与信用卡。',
      },
      medicalFacility: {
        en: 'Dhigurah Health Centre is located in the northern village.',
        zh: '岛屿北部社区设有迪古拉医疗中心（Dhigurah Health Centre）。',
      },
      localCultureNote: {
        en: 'The northern village area around the harbour and mosque requires modest attire; swimwear is restricted to the western Bikini Beach and southern sandbank.',
        zh: '在北部港口与清真寺周边的居民区请穿着遮盖肩膝的日常服装；泳装仅限在西侧比基尼海滩与南端沙洲穿着。',
      },
    },
    featured: true,
  },
  {
    id: 'dest-fulidhoo',
    slug: 'fulidhoo',
    name: {
      en: 'Fulidhoo Island',
      zh: '富力杜岛 (Fulidhoo)',
    },
    atollId: 'atoll-vaavu',
    atollName: {
      en: 'Vaavu Atoll (Felidhoo Atoll)',
      zh: '瓦武环礁（费利杜环礁）',
    },
    administrativeAtoll: 'Vaavu (V)',
    coordinates: { lat: 3.6803, lng: 73.4161 },
    islandDimensions: {
      en: 'Approx. 0.67 km × 0.22 km',
      zh: '约 0.67 公里 × 0.22 公里',
    },
    distanceFromAirport: {
      en: '57 km south of Velana International Airport (MLE)',
      zh: '距维拉纳国际机场 (MLE) 以南约 57 公里',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Felidhoo%2C_Maldives_%28Unsplash%29.jpg/1920px-Felidhoo%2C_Maldives_%28Unsplash%29.jpg',
      alt: {
        en: 'Aerial view of white coral sand and turquoise reef lagoon on a local island in Vaavu Atoll, Maldives',
        zh: '马尔代夫瓦武环礁居民岛白沙滩与翡翠色珊瑚泻湖航拍',
      },
      credit: 'Photo by Ahmed Saffu / Wikimedia Commons (CC0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Vaavu_Atoll%2C_Maldives_-_panoramio_%2823%29.jpg/1920px-Vaavu_Atoll%2C_Maldives_-_panoramio_%2823%29.jpg',
        alt: {
          en: 'Luminous turquoise lagoon waters and coral sand beach in Vaavu Atoll, Maldives',
          zh: '马尔代夫瓦武环礁晶莹剔透的泻湖与珊瑚沙滩',
        },
        credit: 'Photo by goldpicasa / Wikimedia Commons (CC BY 3.0)',
      },
    ],
    shortSummary: {
      en: 'An intimate, car-free coral island on the northern rim of Vaavu Atoll where wild stingrays glide into the shallow shore and world-famous channel dives lie minutes away.',
      zh: '瓦武环礁北缘一座宁静无车的袖珍珊瑚岛，野生黄貂鱼与护士鲨每日游至岸边浅滩，距离著名的护士鲨潜点与深海水道仅数分钟船程。',
    },
    editorialDescription: [
      {
        en: 'Walkable from end to end in under ten minutes, Fulidhoo offers a tranquil counterpoint to larger islands. Its sandy lanes are shaded by breadfruit and banyan trees, with zero motor cars and a deeply rooted cultural heritage celebrated through traditional Langiri and Bodu Beru music.',
        zh: '从岛东头走到西头不到十分钟，富力杜岛（Fulidhoo）完美保留了马尔代夫古朴宁静的海岛慢生活。全岛没有汽车，珊瑚白沙铺就的小巷掩映在面包树与榕树浓荫之下，当地社区至今传承着悠久的 Langiri 与 Bodu Beru 传统鼓乐。',
      },
      {
        en: 'Along the southern jetty shoreline, wild pink whipray stingrays and nurse sharks regularly patrol the knee-deep water. Offshore, Vaavu Atoll’s eastern channels—such as Miyaru Kandu and Alimatha—offer some of the highest concentrations of nurse sharks and pelagic life in the central Maldives.',
        zh: '在南侧主码头旁如玻璃般透明的浅滩中，野生黄貂鱼（魔鬼鱼）与护士鲨每天都会游到岸边浅水区。乘船出海数分钟，即可抵达瓦武环礁著名的护士鲨聚集地（Shark Point）以及 Miyaru Kandu 等世界级通道潜点。',
      },
    ],
    transferOptions: [
      {
        method: 'speedboat',
        methodLabel: {
          en: 'Scheduled Speedboat',
          zh: '定期直达快艇',
        },
        duration: {
          en: '1 hour 10 minutes – 1 hour 25 minutes',
          zh: '约 1 小时 10 分钟 – 1 小时 25 分钟',
        },
        frequencySummary: {
          en: 'Daily scheduled speedboat departures from Velana Airport and Malé.',
          zh: '每日均有定期快艇从维拉纳国际机场及马累发船。',
        },
        departurePoint: {
          en: 'Velana International Airport (MLE)',
          zh: '维拉纳国际机场 (MLE) 快艇码头',
        },
      },
      {
        method: 'public_ferry',
        methodLabel: {
          en: 'MTCC Public Ferry (Route 306)',
          zh: 'MTCC 公共渡轮（306 航线）',
        },
        duration: {
          en: 'Approx. 3.5 hours',
          zh: '约 3.5 小时',
        },
        frequencySummary: {
          en: 'Operates three days per week (Sunday, Tuesday, Thursday) from Malé via Maafushi.',
          zh: '每周三班（周日、周二、周四）从马累经停马富士前往富力杜。',
        },
        departurePoint: {
          en: 'Villingili Ferry Terminal, Malé',
          zh: '马累 Villingili 公共渡轮码头',
        },
      },
    ],
    activities: {
      en: [
        'Snorkelling with wild nurse sharks at Shark Point in Vaavu Atoll',
        'Observing wild whipray stingrays along the Fulidhoo shoreline',
        'Scuba diving at Miyaru Kandu, Fotteyo Kandu, and Alimatha',
        'Excursions to the half-submerged Keyodhoo Shipwreck and sandbanks',
        'Experiencing authentic Fulidhoo Langiri cultural drum performances',
      ],
      zh: [
        '瓦武环礁 Shark Point 与成群野生护士鲨同游浮潜',
        '在富力杜岸边浅滩近距离观赏野生黄貂鱼',
        'Miyaru Kandu 与 Fotteyo Kandu 著名通道水肺深潜',
        '前往瓦武环礁网红半露出水面沉船（Keyodhoo Shipwreck）与无人沙洲',
        '欣赏富力杜特有的传统 Langiri 与 Bodu Beru 民俗鼓乐表演',
      ],
    },
    attractions: [
      {
        title: {
          en: 'Fulidhoo Southern Lagoon Shoreline',
          zh: '富力杜南岸野生黄貂鱼浅滩',
        },
        description: {
          en: 'Clear shallow waters by the arrival jetty where wild stingrays and nurse sharks swim freely up to the shoreline.',
          zh: '主码头两侧澄澈的浅水滩，每天都能看到野生黄貂鱼与护士鲨在齐膝深的海水中巡游。',
        },
      },
      {
        title: {
          en: 'Eastern Crescent Bikini Beach',
          zh: '富力杜东端新月比基尼海滩',
        },
        description: {
          en: 'A quiet, palm-backed white coral beach facing a calm turquoise lagoon ideal for swimming.',
          zh: '位于岛屿东侧的静谧白沙滩，面朝宽阔平静的浅绿泻湖，非常适合游泳与浮潜。',
        },
      },
    ],
    visitorInformation: {
      bikiniBeach: {
        en: 'Dedicated Bikini Beach situated along the eastern end of the island.',
        zh: '岛屿东端设有专门划定的静谧比基尼海滩。',
      },
      houseReef: {
        en: 'Accessible from the northern and eastern reef edges with healthy table corals and reef sharks.',
        zh: '从北侧和东侧海滩游出即可到达房礁边缘，拥有健康的桌形珊瑚与礁鲨。',
      },
      atmAndCurrency: {
        en: 'No ATM on Fulidhoo Island; please bring sufficient USD or MVR cash alongside credit cards for incidental expenses.',
        zh: '富力杜岛上暂无ATM取款机；建议随身携带适量美元（2013年版以后崭新纸币）或拉菲亚现金及信用卡。',
      },
      medicalFacility: {
        en: 'Fulidhoo Health Centre provides basic medical care; regional hospital located on Felidhoo within the same atoll.',
        zh: '岛上设有富力杜卫生站提供基础医疗，同环礁的费利杜岛（Felidhoo）设有环礁医院。',
      },
      localCultureNote: {
        en: 'Fulidhoo is a small, close-knit community; guests are kindly asked to wear t-shirts and shorts/skirts outside the Bikini Beach.',
        zh: '富力杜社区民风淳朴，离开比基尼海滩进入村落或码头区域时请穿好T恤与短裤/长裙。',
      },
    },
    featured: true,
  },
  {
    id: 'dest-thoddoo',
    slug: 'thoddoo',
    name: {
      en: 'Thoddoo Island',
      zh: '托杜岛 (Thoddoo)',
    },
    atollId: 'atoll-alif-alif',
    atollName: {
      en: 'Alif Alif Atoll (North Ari Atoll)',
      zh: '阿里夫阿里夫环礁（北阿里环礁）',
    },
    administrativeAtoll: 'Alif Alif (AA)',
    coordinates: { lat: 4.4375, lng: 72.9561 },
    islandDimensions: {
      en: 'Approx. 1.6 km × 1.2 km',
      zh: '约 1.6 公里 × 1.2 公里',
    },
    distanceFromAirport: {
      en: '67 km northwest of Velana International Airport (MLE)',
      zh: '距维拉纳国际机场 (MLE) 西北约 67 公里',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Lonely_old_boat_at_Thoddoo_island%2C_Maldives.jpg/1920px-Lonely_old_boat_at_Thoddoo_island%2C_Maldives.jpg',
      alt: {
        en: 'Wooden boat resting in the crystal-clear turquoise lagoon at Thoddoo Island, Maldives',
        zh: '马尔代夫托杜农业居民岛（Thoddoo）澄澈浅海泻湖中的木船与白沙滩',
      },
      credit: 'Photo by Alessandro Caproni / Wikimedia Commons (CC BY 2.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Maldives%2C_Thoddoo_-_panoramio_%2810%29.jpg/1920px-Maldives%2C_Thoddoo_-_panoramio_%2810%29.jpg',
        alt: {
          en: 'Lush coconut palms and tropical greenery along the shore of Thoddoo Island, Maldives',
          zh: '马尔代夫托杜岛茂密的椰林与热带海岛风光',
        },
        credit: 'Photo by Alx R / Wikimedia Commons (CC BY 3.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Sea_turtle_Maldives_%2829736704146%29.jpg/1920px-Sea_turtle_Maldives_%2829736704146%29.jpg',
        alt: {
          en: 'Wild sea turtle swimming effortlessly through clear blue water above a coral reef in the Maldives',
          zh: '在马尔代夫托杜岛珊瑚礁海域自在游弋的野生海龟',
        },
        credit: 'Photo by dronepicr / Wikimedia Commons (CC BY 2.0)',
      },
    ],
    shortSummary: {
      en: 'Known as the green agricultural heart of the Maldives, this oval coral island pairs shaded bicycle lanes and tropical fruit plantations with two expansive Bikini Beaches and a resident sea turtle reef.',
      zh: '被誉为“马尔代夫果篮”的翠绿圆形珊瑚岛，全岛三分之二为热带西瓜与木瓜种植园，拥有两条林荫自行车道、两处宽阔比基尼海滩及岸潜即见海龟的天然房礁。',
    },
    editorialDescription: [
      {
        en: 'Unlike narrow ribbon islands, Thoddoo is a broad, fertile oval island standing on its own oceanic reef north of Rasdhoo Atoll. Roughly one-third of the island houses the village and boutique garden guesthouses, while the surrounding lands are cultivated with watermelon, papaya, passionfruit, and coconut plantations.',
        zh: '与狭长型珊瑚岛不同，托杜岛（Thoddoo）是一座独立于深海环礁之上的宽阔椭圆形岛屿。全岛仅三分之一为宁静的村落与花园民宿，其余大片土地则是郁郁葱葱的西瓜、木瓜、百香果与椰林种植园，因此得名“马尔代夫的果篮”。',
      },
      {
        en: 'Visitors explore Thoddoo primarily by bicycle along sandy avenues shaded by towering palms. Both the western Sunset Bikini Beach and eastern Sunrise Bikini Beach offer wide arcs of powder-fine sand, and the western house reef is renowned for resident green and hawksbill sea turtles.',
        zh: '在托杜岛，最惬意的方式是骑着民宿提供的自行车穿过椰树成荫的白沙小径。岛屿西侧的日落比基尼海滩与东侧的日出比基尼海滩均拥有细腻宽阔的白沙，从西侧海滩直接游出几十米即可在海草床与珊瑚架间邂逅常驻的野生绿海龟与玳瑁。',
      },
    ],
    transferOptions: [
      {
        method: 'speedboat',
        methodLabel: {
          en: 'Direct Scheduled Speedboat',
          zh: '定期直达快艇',
        },
        duration: {
          en: 'Approx. 1 hour 15 minutes',
          zh: '约 1 小时 15 分钟',
        },
        frequencySummary: {
          en: 'Daily scheduled speedboats between Velana Airport / Malé and Thoddoo.',
          zh: '每日均有定期快艇往返于维拉纳机场/马累与托杜岛。',
        },
        departurePoint: {
          en: 'Velana International Airport (MLE)',
          zh: '维拉纳国际机场 (MLE) 快艇码头',
        },
      },
      {
        method: 'public_ferry',
        methodLabel: {
          en: 'MTCC Public Ferry (Route 303)',
          zh: 'MTCC 公共渡轮（303 航线）',
        },
        duration: {
          en: 'Approx. 4.5 hours',
          zh: '约 4.5 小时',
        },
        frequencySummary: {
          en: 'Operates on scheduled days from Malé via Rasdhoo and Ukulhas.',
          zh: '按MTCC班期从马累经停拉斯杜（Rasdhoo）与乌库拉斯（Ukulhas）抵达。',
        },
        departurePoint: {
          en: 'Villingili Ferry Terminal, Malé',
          zh: '马累 Villingili 公共渡轮码头',
        },
      },
    ],
    activities: {
      en: [
        'Shore-entry snorkelling with green and hawksbill sea turtles on Thoddoo House Reef',
        'Cycling through Thoddoo’s watermelon, papaya, and coconut plantations',
        'Visiting the pre-Islamic Buddhist temple ruins (Thoddoo Dagaba)',
        'Manta ray and Rasdhoo Atoll reef excursions by boat',
        'Sunset relaxation on the western Bikini Beach palm swings',
      ],
      zh: [
        '从西侧比基尼海滩直接下水岸潜，与野生绿海龟和玳瑁同游',
        '骑自行车漫游托杜岛热带西瓜、木瓜与百香果种植园',
        '探访托杜岛公元前佛教佛塔考古遗址（Thoddoo Dagaba）',
        '乘船前往北阿里环礁蝠鲼清洁站与无人沙洲',
        '在西岸日落海滩的海上秋千与吊床上欣赏印度洋晚霞',
      ],
    },
    attractions: [
      {
        title: {
          en: 'Thoddoo Western Sunset Bikini Beach & Turtle Reef',
          zh: '托杜西岸日落比基尼海滩与海龟礁',
        },
        description: {
          en: 'A wide, palm-fringed beach where sea turtles regularly feed along the shallow reef edge just offshore.',
          zh: '宽阔迷人的椰林白沙滩，游出岸边浅滩即可在珊瑚礁边缘看到常驻觅食的野生海龟。',
        },
      },
      {
        title: {
          en: 'Thoddoo Agricultural Plantations',
          zh: '托杜热带水果种植园',
        },
        description: {
          en: 'Shaded farm tracks where local growers cultivate the Maldives’ famous sweet watermelons and papayas.',
          zh: '绿意盎然的农田小径，盛产供应整个马尔代夫的清甜西瓜、木瓜与热带果蔬。',
        },
      },
    ],
    visitorInformation: {
      bikiniBeach: {
        en: 'Two designated Bikini Beaches (Western Sunset Beach and Eastern Sunrise Beach).',
        zh: '拥有西侧日落海滩（Sunset Beach）与东侧日出海滩两处大型指定比基尼海滩。',
      },
      houseReef: {
        en: 'Direct shore-entry house reef off Sunset Bikini Beach with high sea turtle density.',
        zh: '从日落比基尼海滩直接下水即可到达房礁，野生海龟出没频率极高。',
      },
      atmAndCurrency: {
        en: 'Bank of Maldives (BML) ATM located in the village; USD cash and cards accepted at guesthouses.',
        zh: '村中心设有马尔代夫银行（BML）ATM机；民宿普遍接受美元与信用卡。',
      },
      medicalFacility: {
        en: 'Thoddoo Health Centre operates 24/7 in the main village.',
        zh: '村内设有全天候服务的托杜医疗中心（Thoddoo Health Centre）。',
      },
      localCultureNote: {
        en: 'When cycling between the village and the Bikini Beaches, please wear a shirt/cover-up over swimwear.',
        zh: '骑行往返于村落民宿与比基尼海滩途经林荫道时，请在泳衣外穿好T恤或罩衫。',
      },
    },
    featured: true,
  },
  {
    id: 'dest-ukulhas',
    slug: 'ukulhas',
    name: {
      en: 'Ukulhas Island',
      zh: '乌库拉斯岛 (Ukulhas)',
    },
    atollId: 'atoll-alif-alif',
    atollName: {
      en: 'Alif Alif Atoll (North Ari Atoll)',
      zh: '阿里夫阿里夫环礁（北阿里环礁）',
    },
    administrativeAtoll: 'Alif Alif (AA)',
    coordinates: { lat: 4.2153, lng: 72.8636 },
    islandDimensions: {
      en: 'Approx. 1.0 km × 0.25 km',
      zh: '约 1.0 公里 × 0.25 公里',
    },
    distanceFromAirport: {
      en: '72 km west-northwest of Velana International Airport (MLE)',
      zh: '距维拉纳国际机场 (MLE) 西北偏西约 72 公里',
    },
    heroImage: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Dhoani_view_of_Ukulhas.jpg',
      alt: {
        en: 'Approaching Ukulhas local island over turquoise waters from the bow of a traditional Maldivian dhoni',
        zh: '乘马尔代夫传统多尼船穿过碧蓝海水驶向北阿里环礁乌库拉斯岛（Ukulhas）',
      },
      credit: 'Photo by Rappey / Wikimedia Commons (CC BY-SA 4.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Fushi_%28Ukulhas_picnic_island%29.jpg/1920px-Fushi_%28Ukulhas_picnic_island%29.jpg',
        alt: {
          en: 'White coral sand beach and clear lagoon of Fushi picnic island near Ukulhas, North Ari Atoll, Maldives',
          zh: '马尔代夫北阿里环礁乌库拉斯附近的无人野餐岛与清澈泻湖',
        },
        credit: 'Photo by Ukulhas / Wikimedia Commons (CC BY-SA 3.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Manta_Ray_Maldives.jpg/1920px-Manta_Ray_Maldives.jpg',
        alt: {
          en: 'Graceful reef manta ray soaring through clear underwater currents in the Maldives',
          zh: '在马尔代夫乌库拉斯附近海底清洁站优雅滑翔的礁蝠鲼（魔鬼鱼）',
        },
        credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    shortSummary: {
      en: 'An environmental pioneer in the Maldives with immaculate coral-sand streets, a nearly 1-kilometre-long crescent Bikini Beach, a vibrant shore-entry house reef, and year-round manta ray sites.',
      zh: '曾获马尔代夫国家级环保大奖的生态模范岛，拥有整洁的珊瑚沙街巷、长达近1公里的新月形比基尼海滩、岸潜极佳的珊瑚房礁以及毗邻的蝠鲼清洁站。',
    },
    editorialDescription: [
      {
        en: 'Ukulhas earned national recognition as the first inhabited island in the Maldives to implement a comprehensive island-wide recycling, composting, and waste management programme. That civic pride is immediately visible along its spotless coral-sand streets and pristine western coastline.',
        zh: '乌库拉斯岛（Ukulhas）因在马尔代夫率先建立全岛垃圾分类、有机堆肥与海洋生态保护体系而荣获政府“绿色环保大奖”。漫步在岛上，一尘不染的珊瑚白沙街道与清澈纯净的西岸海湾令人印象深刻。',
      },
      {
        en: 'Stretching nearly a full kilometre along the western shore, Ukulhas Bikini Beach opens directly onto a healthy house reef where snorkellers encounter schooling fusiliers, blacktip reef sharks, sea turtles, and eagle rays. Just offshore lies Ukulhas Thila, a premier North Ari manta ray cleaning station.',
        zh: '沿着岛屿西岸绵延近一公里的乌库拉斯比基尼海滩，出门即达生态极佳的珊瑚房礁。无需乘船出海，直接从沙滩游出即可观赏成群的热带鱼、黑鳍礁鲨、海龟与鹰鳐；而距离海岛仅十余分钟船程的 Ukulhas Thila 则是北阿里环礁著名的蝠鲼清洁站。',
      },
    ],
    transferOptions: [
      {
        method: 'speedboat',
        methodLabel: {
          en: 'Scheduled Speedboat',
          zh: '定期直达快艇',
        },
        duration: {
          en: '1 hour 15 minutes – 1 hour 30 minutes',
          zh: '约 1 小时 15 分钟 – 1 小时 30 分钟',
        },
        frequencySummary: {
          en: 'Scheduled daily speedboats between Velana Airport / Malé and Ukulhas.',
          zh: '每日上下午均有定期快艇往返于马累/维拉纳机场与乌库拉斯岛。',
        },
        departurePoint: {
          en: 'Velana International Airport (MLE)',
          zh: '维拉纳国际机场 (MLE) 快艇码头',
        },
      },
      {
        method: 'public_ferry',
        methodLabel: {
          en: 'MTCC Public Ferry (Route 303)',
          zh: 'MTCC 公共渡轮（303 航线）',
        },
        duration: {
          en: 'Approx. 3.5 – 4 hours',
          zh: '约 3.5 – 4 小时',
        },
        frequencySummary: {
          en: 'Operates on scheduled days from Malé via Rasdhoo.',
          zh: '按MTCC班期从马累经停拉斯杜（Rasdhoo）抵达乌库拉斯。',
        },
        departurePoint: {
          en: 'Villingili Ferry Terminal, Malé',
          zh: '马累 Villingili 公共渡轮码头',
        },
      },
    ],
    activities: {
      en: [
        'Shore-entry snorkelling along the 1 km Ukulhas House Reef',
        'Manta ray snorkelling and diving at Ukulhas Thila and Manta Point',
        'Sandbank picnics at nearby Mathiveri Finolhu',
        'Traditional yellowfin tuna fishing excursions with Ukulhas captains',
        'Sunset dolphin cruises in North Ari Atoll channels',
      ],
      zh: [
        '沿着1公里长的乌库拉斯房礁（House Reef）自由岸潜观赏礁鲨与海龟',
        '前往 Ukulhas Thila 蝠鲼清洁站与野生魔鬼鱼同游',
        '乘船前往附近的 Mathiveri 拖尾沙洲野餐',
        '跟随著名的乌库拉斯金枪鱼渔民体验传统海钓',
        '北阿里环礁日落野生海豚巡航',
      ],
    },
    attractions: [
      {
        title: {
          en: 'Ukulhas Western Bikini Beach & House Reef',
          zh: '乌库拉斯1公里新月比基尼海滩与房礁',
        },
        description: {
          en: 'One of the longest and cleanest local island Bikini Beaches in North Ari Atoll, with complimentary sun loungers and immediate reef drop-off access.',
          zh: '北阿里环礁最长、最整洁的居民岛比基尼海滩之一，免费提供沙滩椅，且距岸数十米即为珊瑚礁断层。',
        },
      },
      {
        title: {
          en: 'Ukulhas Thila Cleaning Station',
          zh: 'Ukulhas Thila 蝠鲼清洁站',
        },
        description: {
          en: 'Submerged coral pinnacle frequented by reef manta rays, grey reef sharks, and napoleon wrasse.',
          zh: '水下珊瑚海山，常年吸引礁蝠鲼、灰礁鲨与苏眉鱼在此停留清洁。',
        },
      },
    ],
    visitorInformation: {
      bikiniBeach: {
        en: 'Nearly 1 km long designated Bikini Beach along the entire western shoreline.',
        zh: '贯穿岛屿西侧海岸、全长近1公里的指定比基尼海滩。',
      },
      houseReef: {
        en: 'Outstanding shore-accessible house reef directly in front of the Bikini Beach.',
        zh: '极佳的岸潜房礁，直接从比基尼海滩下水即可抵达。',
      },
      atmAndCurrency: {
        en: 'Bank of Maldives (BML) ATM available near the harbour; USD and credit cards accepted at guesthouses.',
        zh: '港口旁设有马尔代夫银行（BML）ATM机；岛上民宿与餐厅接受美元和信用卡。',
      },
      medicalFacility: {
        en: 'Ukulhas Health Centre operates 24 hours; Atoll Hospital located 20 minutes away by boat on Rasdhoo.',
        zh: '岛上设有24小时乌库拉斯医疗中心；乘船20分钟即可抵达拉斯杜岛（Rasdhoo）环礁医院。',
      },
      localCultureNote: {
        en: 'Ukulhas maintains strict plastic-reduction and waste-sorting practices; guests are encouraged to use refillable water stations provided by guesthouses.',
        zh: '乌库拉斯高度重视环保与减塑，鼓励住客使用民宿提供的免费纯净水补给站。',
      },
    },
    featured: true,
  },
  {
    id: 'dest-laamu-gan',
    slug: 'laamu-gan',
    name: {
      en: 'Gan Island (Laamu Atoll)',
      zh: '拉姆甘岛 (Laamu Gan)',
    },
    atollId: 'atoll-laamu',
    atollName: {
      en: 'Laamu Atoll (Haddhunmathi Atoll)',
      zh: '拉姆环礁（哈杜马蒂环礁）',
    },
    administrativeAtoll: 'Laamu (L)',
    coordinates: { lat: 1.9153, lng: 73.5431 },
    islandDimensions: {
      en: 'Approx. 7.8 km × 3.4 km (linked via 18 km causeway)',
      zh: '约 7.8 公里 × 3.4 公里（18公里跨海公路连岛链）',
    },
    distanceFromAirport: {
      en: '250 km south of Velana International Airport (MLE)',
      zh: '距维拉纳国际机场 (MLE) 以南约 250 公里',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Aerial_shot_of_a_small_island_on_a_coral_reef_in_the_Maldives.jpg/1920px-Aerial_shot_of_a_small_island_on_a_coral_reef_in_the_Maldives.jpg',
      alt: {
        en: 'Seaplane aerial view of a coral reef and island in the southern Maldives',
        zh: '俯瞰马尔代夫南部纯净珊瑚礁与深海断层',
      },
      credit: 'Photo by Dr. Ondřej Havelka / Wikimedia Commons (CC BY-SA 4.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Maldives_tropical_island_%28Unsplash%29.jpg/1920px-Maldives_tropical_island_%28Unsplash%29.jpg',
        alt: {
          en: 'Aerial view of a lush coral island ringed by white sand and a turquoise lagoon in the Maldives',
          zh: '马尔代夫被白沙滩与碧绿泻湖环绕的热带珊瑚岛航拍全景',
        },
        credit: 'Photo by Ishan (@seefromthesky) / Wikimedia Commons (CC0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Maldives_soft_coral.jpg/1920px-Maldives_soft_coral.jpg',
        alt: {
          en: 'Vibrant pink and orange soft corals teeming with tropical reef fish underwater in the Maldives',
          zh: '马尔代夫水下绚丽多彩的软珊瑚群与热带珊瑚礁鱼类',
        },
        credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    shortSummary: {
      en: 'The largest island in the Maldives, located in the untouched southern atoll of Laamu—combining 18 kilometres of causeway-linked islands, ancient Buddhist stupa ruins, inland freshwater lakes, and pristine channel diving.',
      zh: '马尔代夫面积最大的天然岛屿，坐落于赤道附近的南部拉姆环礁，由18公里跨海大桥串联四座岛屿，汇聚千年佛教遗址、内陆淡水湖、世界级冲浪浪点与原生态深海潜点。',
    },
    editorialDescription: [
      {
        en: 'Located 250 kilometres south of Malé in Haddhunmathi (Laamu) Atoll, Gan offers a perspective on the Maldives few international travellers ever witness. Measuring nearly eight kilometres in length and linked by causeway bridges to neighbouring Mandhoo, Kadhdhoo, and Fonadhoo, it forms an 18-kilometre coastal road corridor ideal for cycling and exploration.',
        zh: '位于马累以南250公里的哈杜马蒂（拉姆）环礁，甘岛（Laamu Gan）展现了马尔代夫截然不同的一面。全岛长近8公里，并通过跨海公路与毗邻的 Kadhdhoo、Fonadhoo 等岛屿相连，形成一条长达18公里的壮丽跨海景观大道。',
      },
      {
        en: 'Far removed from central atoll boat traffic, Laamu’s reefs remain remarkably untouched. Divers explore high-energy channels such as Fushi Kandu and Maabaidhoo Kandu alongside sharks and manta rays, while onshore explorers can visit the ancient pre-Islamic Buddhist stupa mounds of Kuruhinna Tharaagandu and the natural inland lake of Paree Fenganda.',
        zh: '远离中部环礁的密集船只，拉姆环礁的珊瑚礁保持着令人惊叹的原始状态。潜水员可在 Fushi Kandu 水道与鲨鱼群、蝠鲼同游，冲浪爱好者可挑战著名的 Yin Yang 浪点；而在陆地上，您还可以探访公元前佛教佛塔遗址（Kuruhinna Tharaagandu）与神秘的丛林内陆红树林淡水湖（Paree Fenganda）。',
      },
    ],
    transferOptions: [
      {
        method: 'domestic_flight_speedboat',
        methodLabel: {
          en: 'Domestic Flight to Kadhdhoo (KDO) + Causeway Car Transfer',
          zh: '内陆航班（飞往 Kadhdhoo KDO）+ 跨海公路专车接驳',
        },
        duration: {
          en: '40 min domestic flight + 15 min road transfer',
          zh: '40 分钟内陆航班 + 15 分钟跨海公路专车（无需换乘快艇）',
        },
        frequencySummary: {
          en: 'Multiple daily flights operated by Maldivian from Velana Airport (MLE) to Kadhdhoo Airport (KDO).',
          zh: '马尔代夫国家航空（Maldivian）每日运营多班从马累（MLE）直飞拉姆 Kadhdhoo 机场（KDO）的航班，落地后直接乘车经跨海公路抵达酒店，免受风浪颠簸。',
        },
        departurePoint: {
          en: 'MLE Domestic Terminal',
          zh: '维拉纳国际机场国内航站楼',
        },
      },
    ],
    activities: {
      en: [
        'Channel scuba diving at Fushi Kandu and Maabaidhoo Kandu',
        'Surfing the world-renowned Yin Yang reef pass break in Laamu',
        'Cycling across the 18 km causeway linking Gan, Kadhdhoo, and Fonadhoo',
        'Exploring Kuruhinna Tharaagandu ancient Buddhist ruins and Paree Fenganda lake',
        'Relaxing on the solitary white sands of Thundi Bikini Beach',
      ],
      zh: [
        'Fushi Kandu 与 Maabaidhoo Kandu 原生态深海水道水肺潜水',
        '挑战拉姆环礁世界级珊瑚礁冲浪点 Yin Yang',
        '骑行穿越18公里跨海连岛公路探索四座南部海岛',
        '探访 Kuruhinna Tharaagandu 千年佛教遗址与 Paree Fenganda 内陆淡水湖',
        '在北部 Thundi 比基尼海滩独享数公里无人白沙滩',
      ],
    },
    attractions: [
      {
        title: {
          en: 'Thundi Beach (Northern Gan)',
          zh: '甘岛北端 Thundi 原始白沙滩',
        },
        description: {
          en: 'An expansive, uncrowded stretch of powder-white coral sand directly in front of Reveries Diving Village.',
          zh: '位于甘岛最北端、Reveries Diving Village 门前的广阔白沙滩，沙质如粉且极为静谧。',
        },
      },
      {
        title: {
          en: 'Kuruhinna Tharaagandu & Paree Fenganda',
          zh: 'Kuruhinna 古代佛塔遗址与 Paree Fenganda 淡水湖',
        },
        description: {
          en: 'Protected archaeological remains of a 7th–8th century Buddhist monastery Complex and a rare natural freshwater crater lake hidden inside dense island foliage.',
          zh: '保存完好的公元7–8世纪古佛教寺院考古遗址，以及隐藏在热带丛林深处的罕见天然淡水湖。',
        },
      },
    ],
    visitorInformation: {
      bikiniBeach: {
        en: 'Dedicated Thundi Bikini Beach at the northern end of Gan Island.',
        zh: '甘岛北端设有宽阔静谧的 Thundi 指定比基尼海滩。',
      },
      houseReef: {
        en: 'Pristine southern coral gardens accessible directly off Thundi Beach and via short dhoni trips.',
        zh: 'Thundi 海滩外侧及短途多尼船程内分布着保存完好的南部珊瑚花园。',
      },
      atmAndCurrency: {
        en: 'Multiple Bank of Maldives (BML) ATMs and bank branches operate on Gan and Fonadhoo.',
        zh: '甘岛与相连的 Fonadhoo 岛上设有多处马尔代夫银行（BML）支行与ATM机。',
      },
      medicalFacility: {
        en: 'Gan Regional Hospital is one of the largest regional medical facilities in the southern Maldives.',
        zh: '甘岛区域医院（Gan Regional Hospital）是马尔代夫南部规模最大的综合性区域医院之一。',
      },
      localCultureNote: {
        en: 'Gan has four distinct village wards (Thundi, Mathimaradhoo, Mukurimagu); modest dress is observed along the main road and villages.',
        zh: '甘岛由多个传统村落社区组成，在公路骑行及探访村落古迹时请穿着遮盖肩膝的得体服装。',
      },
    },
    featured: true,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getAtollById(id: string): Atoll | undefined {
  return ATOLLS.find((a) => a.id === id);
}
