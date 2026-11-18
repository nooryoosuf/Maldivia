import type { Guesthouse } from '@/types/domain';

export const GUESTHOUSES: Guesthouse[] = [
  {
    id: 'gh-kaani-palm-beach',
    slug: 'kaani-palm-beach-maafushi',
    officialName: 'Kaani Palm Beach',
    localizedSubtitle: {
      en: 'Beachfront Hotel with Rooftop Infinity Pool on Maafushi Bikini Beach',
      zh: '坐落于马富士岛比基尼海滩正前方的屋顶无边泳池海景酒店',
    },
    destinationSlug: 'maafushi',
    islandName: {
      en: 'Maafushi Island',
      zh: '马富士岛 (Maafushi)',
    },
    atollName: {
      en: 'Kaafu Atoll (South Malé Atoll)',
      zh: '卡夫环礁（南马累环礁）',
    },
    coordinates: { lat: 3.9412, lng: 73.4926 },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Buiobuione_Maafushi_Town.jpg/1920px-Buiobuione_Maafushi_Town.jpg',
      alt: {
        en: 'Waterfront view of Maafushi beachfront hotels and turquoise lagoon in South Malé Atoll, Maldives',
        zh: '马尔代夫南马累环礁马富士居民岛海滨酒店与碧蓝泻湖风光',
      },
      credit: 'Photo by Buiobuione / Wikimedia Commons (CC BY-SA 4.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Maafushi_island.jpg/1920px-Maafushi_island.jpg',
        alt: {
          en: 'Palm-fringed white sand beach and turquoise lagoon on Maafushi local island, Kaafu Atoll, Maldives',
          zh: '马富士岛椰林白沙滩与碧蓝泻湖',
        },
        credit: 'Photo by Nattu Adnan / Wikimedia Commons (CC BY 2.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/On_My_Way_-_Maafushi%2C_Maldives_%28Unsplash%29.jpg/1920px-On_My_Way_-_Maafushi%2C_Maldives_%28Unsplash%29.jpg',
        alt: {
          en: 'Wooden jetty extending into turquoise waters on Maafushi Island, Maldives',
          zh: '马富士岛探入清澈海水的木栈桥',
        },
        credit: 'Photo by Ahmed Saffu / Wikimedia Commons (CC0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Maafushi-Beach-Maldives.jpg/1920px-Maafushi-Beach-Maldives.jpg',
        alt: {
          en: 'Coconut palms leaning over white coral sand on Maafushi Bikini Beach',
          zh: '马富士比基尼海滩上的椰林与白沙',
        },
        credit: 'Photo by Nicolai Edgar Andersen / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    conciseDescription: {
      en: 'Located directly on Maafushi’s northwestern Bikini Beach, Kaani Palm Beach combines direct white-sand lagoon access with a rooftop infinity swimming pool, Sampa Spa, beachfront dining, and its own fleet of scheduled airport speedboats.',
      zh: '直接坐落于马富士岛西北角比基尼海滩（Bikini Beach）一线海景位置，Kaani Palm Beach 拥有俯瞰印度洋的屋顶无边际泳池、Sampa 水疗中心、海滩餐厅以及自营的维拉纳国际机场快艇接驳船队。',
    },
    editorialOverview: [
      {
        en: 'Operated by Kaani Hotels—one of the foundational hospitality groups on Maafushi Island—Kaani Palm Beach stands directly on the edge of the island’s designated Bikini Beach. Guests step straight from the ground-floor terrace onto soft coral sand shaded by coconut palms, with sheltered turquoise lagoon waters immediately in front of the property.',
        zh: '由马富士岛最具规模的本土酒店管理集团 Kaani Hotels 运营，Kaani Palm Beach 直接伫立于岛屿指定的比基尼海滩（Bikini Beach）岸畔。住客从酒店一层露台迈步即可踏上椰影婆娑的细白珊瑚沙滩，正前方即是受防波礁保护的平静碧蓝泻湖。',
      },
      {
        en: 'The property was among the first inhabited-island hotels in the Maldives to introduce a rooftop infinity pool overlooking the Indian Ocean horizon. Combined with its dedicated Kaani Express speedboat fleet operating directly from Velana International Airport (MLE) and an in-house excursion desk organising daily snorkelling and dive trips across South Malé and Vaavu Atolls, it offers a seamless introduction to Maldivian local island travel.',
        zh: '作为马尔代夫最早引入屋顶无边海景泳池的居民岛酒店之一，顶层泳池可远眺壮丽的印度洋日落。酒店同时拥有自营的“Kaani Express”高速快艇船队，提供从维拉纳国际机场（MLE）直达马富士岛的无缝接驳，并设有一站式出海中心，每日组织前往南马累环礁与瓦武环礁的浮潜、深潜及沙洲野餐之旅。',
      },
    ],
    verifiedHighlights: {
      en: [
        'Direct beachfront position on Maafushi Bikini Beach',
        'Rooftop infinity pool overlooking the Indian Ocean',
        '30-minute direct speedboat transfer via Kaani Express from Velana Airport (MLE)',
        'In-house Sampa Spa & beachfront Palm Beach Restaurant',
        'Daily organised snorkelling, nurse shark, and sandbank excursions',
      ],
      zh: [
        '马富士岛比基尼海滩（Bikini Beach）零距离一线海景位置',
        '饱览印度洋日落全景的顶层屋顶无边际泳池',
        '自营 Kaani Express 快艇从马累机场（MLE）30分钟直达',
        '配备 Sampa Spa 水疗中心与海滨沙滩餐厅',
        '每日发团前往护士鲨浮潜点、珊瑚礁与无人拖尾沙洲',
      ],
    },
    propertyCategory: {
      en: 'Beachfront Guesthouse Hotel',
      zh: '海滨精品酒店型民宿',
    },
    roomTypes: [
      {
        name: {
          en: 'Standard Double Room',
          zh: '标准双人房 (Standard Double Room)',
        },
        occupancy: {
          en: 'Up to 2 adults',
          zh: '最多入住 2 位成人',
        },
        bedConfiguration: {
          en: '1 Queen Bed',
          zh: '1 张大床 (Queen Bed)',
        },
        viewType: {
          en: 'Interior / Island View',
          zh: '内景或海岛街景',
        },
        verifiedFacilities: {
          en: [
            'Air conditioning',
            'Private ensuite bathroom with rain shower',
            'Complimentary Wi-Fi',
            'Flat-screen TV',
            'In-room safe & minibar',
            'Electric kettle with tea/coffee facilities',
          ],
          zh: [
            '独立空调系统',
            '带热带雨林花洒的私人卫浴',
            '免费无线网络 (Wi-Fi)',
            '平板电视',
            '房内保险箱与迷你吧',
            '电热水壶及茶包/咖啡冲泡设施',
          ],
        },
        description: {
          en: 'Comfortable air-conditioned double room designed for travellers spending their days out on the reefs and beaches of South Malé Atoll.',
          zh: '舒适整洁的空调双人客房，非常适合白天出海浮潜、深潜与探索南马累环礁的旅行者。',
        },
      },
      {
        name: {
          en: 'Deluxe Double Room with Balcony & Sea View',
          zh: '豪华海景阳台大床房 (Deluxe Double Sea View)',
        },
        occupancy: {
          en: 'Up to 2 adults + 1 child',
          zh: '最多入住 2 位成人 + 1 名儿童',
        },
        bedConfiguration: {
          en: '1 King or Queen Bed',
          zh: '1 张特大床或大床',
        },
        viewType: {
          en: 'Direct Indian Ocean & Bikini Beach View',
          zh: '直面印度洋与比基尼海滩海景',
        },
        verifiedFacilities: {
          en: [
            'Private ocean-facing balcony with seating',
            'Air conditioning',
            'Ensuite bathroom with hot/cold rain shower & hairdryer',
            'Complimentary Wi-Fi',
            'Minibar, in-room safe, and flat-screen satellite TV',
          ],
          zh: [
            '配备休闲座椅的私人面海阳台',
            '独立空调系统',
            '冷热水淋浴私人卫浴与吹风机',
            '免费无线网络 (Wi-Fi)',
            '迷你吧、保险箱及卫星电视',
          ],
        },
        description: {
          en: 'Features a private balcony overlooking Maafushi Bikini Beach and the turquoise lagoon of Kaafu Atoll.',
          zh: '设有独立面海阳台，推门即可俯瞰马富士比基尼海滩与卡夫环礁的渐变碧蓝泻湖。',
        },
      },
      {
        name: {
          en: 'Deluxe Family / Quadruple Room (City or Sea View)',
          zh: '豪华家庭房 / 四人房（街景或海景）',
        },
        occupancy: {
          en: 'Up to 4 guests',
          zh: '最多入住 4 位宾客',
        },
        bedConfiguration: {
          en: '2 Double Beds or 1 Double + Twin Beds',
          zh: '2 张双人床 或 1大床+单人床组合',
        },
        viewType: {
          en: 'Island View or Sea View options',
          zh: '提供海岛景观或海景房型选择',
        },
        verifiedFacilities: {
          en: [
            'Spacious family layout',
            'Air conditioning',
            'Private bathroom with shower & toiletries',
            'Complimentary Wi-Fi',
            'Minibar, safe, and kettle',
          ],
          zh: [
            '宽敞的多人家庭居住空间',
            '独立空调系统',
            '私人卫浴及洗浴用品',
            '免费无线网络 (Wi-Fi)',
            '迷你吧、保险箱与电热水壶',
          ],
        },
        description: {
          en: 'Designed for families or small groups of friends travelling together to Maafushi.',
          zh: '专为结伴出游的家庭或好友小团队设计的宽敞房型。',
        },
      },
    ],
    propertyAmenities: {
      en: [
        'Rooftop infinity swimming pool with ocean views',
        'Direct beachfront access to Maafushi Bikini Beach with sun loungers',
        'Sampa Spa offering Thai, Balinese, and aromatherapy massages',
        '24-hour front desk & multilingual concierge team',
        'In-house excursion, water sports, and PADI diving desk',
        'Elevator access across floors',
        'Complimentary Wi-Fi throughout the property',
      ],
      zh: [
        '顶层全景海景无边际泳池',
        '出门即达马富士比基尼海滩并配备沙滩躺椅',
        'Sampa Spa 水疗中心（提供泰式、巴厘岛式及芳疗按摩）',
        '24小时前台与多语种礼宾服务',
        '酒店内设出海浮潜、水上运动与 PADI 深潜报名中心',
        '配备客用电梯（方便携带大件行李与长辈出行）',
        '全馆覆盖免费高速 Wi-Fi',
      ],
    },
    diningInformation: {
      restaurantName: 'Palm Beach Restaurant & Rooftop Café',
      summary: {
        en: 'Serves daily Continental, Asian, and traditional Maldivian breakfast (including Mas Huni with freshly baked Roshi flatbread), alongside à-la-carte lunches and beachfront seafood barbecue buffets in the evening.',
        zh: '每日供应欧陆式、亚洲风味及传统马尔代夫当地早餐（含经典的金枪鱼椰丝 Mas Huni 配现烤薄饼），午晚餐提供单点菜肴及海滩星光海鲜烧烤自助餐。',
      },
      dietaryAndHalalNote: {
        en: 'All meats and poultry served are 100% Halal in accordance with Maldivian law. Vegetarian options and Chinese-friendly hot dishes are available; no alcohol is sold on inhabited local islands.',
        zh: '根据马尔代夫法律，所有肉类均为100%清真（Halal）食材，并提供素食及符合中国游客口味的热食与海鲜料理；居民岛上不售卖含酒精饮品。',
      },
    },
    accessibilityInformation: {
      en: 'Equipped with passenger elevator access between floors and step-free beachfront terrace access; guests with specific mobility requirements are encouraged to mention their needs during enquiry so ground- or lower-floor rooms near the lift can be confirmed.',
      zh: '酒店楼层间配备客用电梯，一层露台可平步直达沙滩；如有无障碍出行或长辈同行的特殊需求，请在提交咨询时备注，以便为您锁定靠近电梯或低楼层的便利客房。',
    },
    locationAndTransfer: {
      islandLocationNote: {
        en: 'Positioned on Ziyaaraiy Magu at the northwestern tip of Maafushi Island, directly fronting Bikini Beach and approximately 7 minutes’ walk from Maafushi Harbour.',
        zh: '位于马富士岛西北角 Ziyaaraiy Magu 路，正对比基尼海滩，距离马富士抵达码头步行约7分钟（酒店提供码头行李接送服务）。',
      },
      distanceFromAirport: {
        en: '27 km south of Velana International Airport (MLE)',
        zh: '距维拉纳国际机场 (MLE) 以南 27 公里',
      },
      transferSummary: {
        en: '30–35 minutes by direct scheduled Kaani Express speedboat from Velana International Airport.',
        zh: '从维拉纳国际机场搭乘 Kaani Express 定期快艇 30–35 分钟直达。',
      },
      transferMethods: [
        {
          method: 'speedboat',
          methodLabel: {
            en: 'Kaani Express Scheduled Speedboat',
            zh: 'Kaani Express 酒店自营定期快艇',
          },
          duration: {
            en: '30–35 minutes',
            zh: '30–35 分钟',
          },
          frequencySummary: {
            en: 'Multiple daily departures from Velana Airport (MLE) and Malé to Maafushi.',
            zh: '每日多班往返于维拉纳机场（MLE）与马富士岛。',
          },
          departurePoint: {
            en: 'Velana International Airport (MLE) Arrival Counter / Jetty',
            zh: '维拉纳国际机场 (MLE) 到达大厅接待柜台及快艇码头',
          },
        },
        {
          method: 'public_ferry',
          methodLabel: {
            en: 'MTCC Public Ferry (Route 306)',
            zh: 'MTCC 公共渡轮（306 航线）',
          },
          duration: {
            en: '90 minutes',
            zh: '约 90 分钟',
          },
          frequencySummary: {
            en: 'Daily except Fridays from Villingili Ferry Terminal, Malé.',
            zh: '除周五外每日从马累 Villingili 渡轮码头出发。',
          },
          departurePoint: {
            en: 'Villingili Ferry Terminal, Malé',
            zh: '马累 Villingili 渡轮码头',
          },
        },
      ],
      transferArrangementNote: {
        en: 'When you submit your flight arrival details through our enquiry form, speedboat seats and airport meet-and-greet are coordinated in advance with the property.',
        zh: '在您提交行程咨询并提供国际航班号后，我们将提前与酒店协调预留快艇座位及机场接机引导服务。',
      },
    },
    nearbyAttractions: [
      {
        name: {
          en: 'Maafushi Bikini Beach',
          zh: '马富士比基尼海滩 (Maafushi Bikini Beach)',
        },
        distanceOrNote: {
          en: '0 metres — directly in front of the property',
          zh: '0 米 — 酒店正门外即是海滩',
        },
      },
      {
        name: {
          en: 'Maafushi Dive & Water Sports Centres',
          zh: '马富士潜水与水上运动中心',
        },
        distanceOrNote: {
          en: '1–3 minutes’ walk along the beachfront promenade',
          zh: '沿滨海步道步行 1–3 分钟',
        },
      },
      {
        name: {
          en: 'Kandooma Thila & Kuda Giri Wreck Dive Sites',
          zh: 'Kandooma Thila 与沉船潜点',
        },
        distanceOrNote: {
          en: '10–20 minutes by dive dhoni from Maafushi jetty',
          zh: '从马富士码头乘潜水多尼船 10–20 分钟即达',
        },
      },
    ],
    importantGuestInformation: {
      en: [
        'Green Tax, TGST (17%), and Service Charge (10%) apply in accordance with Maldivian tax regulations and will be itemised transparently in your quotation.',
        'Swimwear is welcomed on Maafushi Bikini Beach and at the rooftop pool; please wear modest clothing when walking through village streets.',
        'Alcoholic beverages are prohibited by law on all inhabited Maldivian islands.',
      ],
      zh: [
        '根据马尔代夫税法规定，房价需计入政府绿色税（Green Tax）、17%旅游商品与服务税（TGST）及10%服务费，所有税费将在您的定制报价单中清晰列明。',
        '比基尼海滩与酒店屋顶泳池可自由穿着泳装；进入村落街道与港口时请穿着遮盖肩膝的日常衣物。',
        '马尔代夫所有居民岛依法禁止携带或售卖含酒精饮品。',
      ],
    },
    officialContact: {
      websiteUrl: 'https://www.kaanihotels.com',
      officialPhone: '+960 950-0770',
      officialEmail: 'reservations@kaanimaldives.com',
      address: 'Ziyaaraiy Magu Road, Maafushi 08090, Kaafu Atoll, Republic of Maldives',
      bookingMethod: {
        en: 'Submit an enquiry with your travel dates to receive verified room availability, meal plan options, and speedboat transfer coordination.',
        zh: '提交您的出行日期与人数，我们将为您核实实时房态、早晚餐升级方案及往返机场快艇接驳报价。',
      },
      cancellationPolicyNote: {
        en: 'Cancellation windows and deposit terms vary by season (standard vs. peak festive dates) and rate plan; exact verified cancellation terms are provided in writing with every quotation.',
        zh: '取消与退改政策取决于淡旺季及所选套餐类型；每一份正式报价单均会书面附带经核实的退改条款。',
      },
    },
    featured: true,
  },
  {
    id: 'gh-bliss-dhigurah',
    slug: 'bliss-dhigurah',
    officialName: 'Bliss Dhigurah',
    localizedSubtitle: {
      en: 'Boutique Design Guesthouse, Bakery & Whale Shark Excursion Hub in South Ari Atoll',
      zh: '南阿里环礁鲸鲨保护区畔的精品设计美宿、手工烘焙坊与潜水中心',
    },
    destinationSlug: 'dhigurah',
    islandName: {
      en: 'Dhigurah Island',
      zh: '迪古拉岛 (Dhigurah)',
    },
    atollName: {
      en: 'Alif Dhaal Atoll (South Ari Atoll)',
      zh: '阿里夫达尔环礁（南阿里环礁）',
    },
    coordinates: { lat: 3.5306, lng: 72.925 },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Dhigurah.jpg/1920px-Dhigurah.jpg',
      alt: {
        en: 'White sand beach and turquoise lagoon on Dhigurah Island, South Ari Atoll, Maldives',
        zh: '马尔代夫南阿里环礁迪古拉岛绵延白沙滩与澄澈泻湖',
      },
      credit: 'Photo by Syced / Wikimedia Commons (CC0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Sun_Island_Resort%2C_Alif_Dhaal_Atoll%2C_Maldives_%28Unsplash%29.jpg/1920px-Sun_Island_Resort%2C_Alif_Dhaal_Atoll%2C_Maldives_%28Unsplash%29.jpg',
        alt: {
          en: 'Aerial view of turquoise reefs in Alif Dhaal (South Ari) Atoll, Maldives',
          zh: '南阿里环礁碧绿泻湖与珊瑚礁航拍',
        },
        credit: 'Photo by Syd Sujuaan / Wikimedia Commons (CC0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Whale_shark_Maldives.jpg/1920px-Whale_shark_Maldives.jpg',
        alt: {
          en: 'Spotted whale shark gliding through sunlit blue waters in South Ari Atoll, Maldives',
          zh: '在南阿里环礁蔚蓝海水中巡游的野生鲸鲨',
        },
        credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    conciseDescription: {
      en: 'Set a one-minute stroll through tropical palms from Dhigurah’s 3-kilometre Bikini Beach, Bliss Dhigurah pairs contemporary European-Maldivian boutique design with its renowned Hermit’s artisanal bakery, rooftop jacuzzi, and year-round whale shark safaris.',
      zh: '距迪古拉岛长达3公里的比基尼海滩仅1分钟椰林步程，Bliss Dhigurah 将现代简约海岛设计与著名的 Hermit’s 手工烘焙餐厅、屋顶按摩浴池及全年野生鲸鲨出海寻访体验完美融合。',
    },
    editorialOverview: [
      {
        en: 'Positioned on Dhigurah Island alongside the South Ari Marine Protected Area (SAMPA), Bliss Dhigurah was created for independent travellers and ocean lovers seeking boutique hotel refinement on a quiet local island. Just steps away through a lush palm path lies Dhigurah’s western lagoon beach, where complimentary loungers face three kilometres of powder-white sand.',
        zh: '坐落于紧邻南阿里海洋保护区（SAMPA）的迪古拉岛，Bliss Dhigurah 专为追求品质与海洋生态体验的旅行者打造。从民宿穿过几十米绿意盎然的椰林小径，即可踏上迪古拉岛著名的3公里西岸泻湖白沙滩，并享有专属沙滩躺椅。',
      },
      {
        en: 'On-site, Hermit’s Restaurant & Bakery prepares freshly baked sourdough bread, wood-fired pizzas, homemade gelato, and Maldivian seafood curries daily. The property’s excursion and PADI dive team leads regular boat trips along the outer Maamigili-Dhigurah reef shelf—globally celebrated for year-round whale shark encounters—while prioritising eco-conscious practices such as solar water heating and refillable glass water bottles.',
        zh: '民宿内的 Hermit’s 餐厅与烘焙坊每日新鲜出炉手工欧包、窑烤披萨、自制意式冰淇淋（Gelato）以及正宗马尔代夫海鲜咖喱。其经验丰富的出海与 PADI 潜水团队常年带领住客前往外礁保护区寻访野生鲸鲨与蝠鲼，并在全馆践行太阳能热水、免费玻璃瓶纯净水补给等可持续环保理念。',
      },
    ],
    verifiedHighlights: {
      en: [
        '1-minute walk to Dhigurah’s 3 km western Bikini Beach',
        'Year-round whale shark snorkelling & PADI diving in South Ari MPA',
        'In-house Hermit’s Restaurant, artisanal bakery & homemade gelato',
        'Rooftop relaxation terrace with jacuzzi / hot tubs & Zen Spa',
        'Eco-conscious operation with reusable water bottles and reef-safe toiletries',
      ],
      zh: [
        '步行1分钟即达迪古拉岛3公里长的西岸比基尼白沙滩',
        '全年组织南阿里海洋保护区（SAMPA）野生鲸鲨浮潜与深潜',
        '内设口碑极佳的 Hermit’s 餐厅、手工烘焙坊与自制冰淇淋',
        '配备屋顶观景露台按摩泡池与 Zen Spa 舒缓水疗',
        '践行海洋环保：全房提供环保洗浴用品与免费饮用水补给',
      ],
    },
    propertyCategory: {
      en: 'Boutique Design Guesthouse & Dive Hub',
      zh: '设计师精品民宿与鲸鲨潜游中心',
    },
    roomTypes: [
      {
        name: {
          en: 'Compact & Standard Double / Twin Rooms',
          zh: '精致双人房 / 标准双床房',
        },
        occupancy: {
          en: 'Up to 2 adults',
          zh: '最多入住 2 位成人',
        },
        bedConfiguration: {
          en: '1 Double Bed or 2 Twin Beds',
          zh: '1 张双人床 或 2 张单人床',
        },
        viewType: {
          en: 'Island / Palm View',
          zh: '热带椰林或海岛街景',
        },
        verifiedFacilities: {
          en: [
            'Air conditioning & ceiling fan',
            'Private bathroom with solar-heated hot shower & eco-toiletries',
            'Complimentary Wi-Fi',
            'In-room safe & minibar',
            'Beach towels & reusable water bottles',
          ],
          zh: [
            '独立空调与静音吊扇',
            '配备太阳能热水淋浴与环保洗护用品的私人卫浴',
            '免费无线网络 (Wi-Fi)',
            '房内保险箱与迷你吧',
            '免费提供沙滩巾与可重复灌装饮水瓶',
          ],
        },
        description: {
          en: 'Clean, bright Scandinavian-tropical rooms ideal for couples or dive buddies exploring South Ari Atoll.',
          zh: '明亮清爽的现代热带风格客房，非常适合专注于鲸鲨浮潜与水肺深潜的伴侣或潜伴。',
        },
      },
      {
        name: {
          en: 'Deluxe Double Room',
          zh: '豪华双人房 (Deluxe Double Room)',
        },
        occupancy: {
          en: 'Up to 2 adults + 1 child',
          zh: '最多入住 2 位成人 + 1 名儿童',
        },
        bedConfiguration: {
          en: '1 King or Queen Bed',
          zh: '1 张特大床或大床',
        },
        viewType: {
          en: 'Tropical Foliage View',
          zh: '热带绿植景观',
        },
        verifiedFacilities: {
          en: [
            'Spacious bedroom layout',
            'Air conditioning & ceiling fan',
            'Ensuite bathroom with hot shower & hairdryer',
            'Complimentary Wi-Fi, minibar & safe',
          ],
          zh: [
            '宽敞的起居睡眠空间',
            '独立空调与吊扇',
            '私人冷热水卫浴与吹风机',
            '免费 Wi-Fi、迷你吧与保险箱',
          ],
        },
        description: {
          en: 'Generously proportioned double room crafted with natural wood accents and calm island tones.',
          zh: '空间宽敞的豪华客房，采用温暖的原木元素与柔和的海岛色调装饰。',
        },
      },
      {
        name: {
          en: 'Family Room & Loft Suite',
          zh: '家庭连通房 / 阁楼套房 (Family Room & Suite)',
        },
        occupancy: {
          en: 'Up to 4 guests',
          zh: '最多入住 4 位宾客',
        },
        bedConfiguration: {
          en: 'Interconnected Double + Twin or Suite with Lounge',
          zh: '连通双卧室 或 带起居室与浴缸的套房',
        },
        viewType: {
          en: 'Upper-Floor Island & Canopy View',
          zh: '高楼层树冠与海岛视野',
        },
        verifiedFacilities: {
          en: [
            'Two interconnected bedrooms (Family) or separate lounge & bathtub (Suite)',
            'Air conditioning & ceiling fans',
            'Private ensuite bathroom(s)',
            'Complimentary Wi-Fi, minibar & safe',
          ],
          zh: [
            '双卧连通布局（家庭房）或独立起居室配浴缸（套房）',
            '独立空调与吊扇',
            '私人独立卫浴',
            '免费 Wi-Fi、迷你吧与保险箱',
          ],
        },
        description: {
          en: 'Designed for families or travellers desiring extra living space during an extended stay in South Ari Atoll.',
          zh: '专为家庭旅客或希望在南阿里环礁享受宽敞长住体验的宾客打造。',
        },
      },
    ],
    propertyAmenities: {
      en: [
        'Hermit’s Restaurant, Artisanal Bakery & Homemade Gelato Bar',
        'Direct coordination with PADI Dive Centre & Whale Shark Safari boats',
        'Rooftop sunset terrace with outdoor jacuzzi / hot tubs',
        'Zen Spa massage & wellness treatment rooms',
        'Fitness room / gym & complimentary beach sunbeds on Bikini Beach',
        'Complimentary drinking water refill stations & high-speed Wi-Fi',
      ],
      zh: [
        'Hermit’s 餐厅、手工烘焙面包坊与自制意式冰淇淋吧',
        '无缝衔接 PADI 潜水中心与全年野生鲸鲨出海寻访船只',
        '配备露天按摩泡池（Jacuzzi）的屋顶日落露台',
        'Zen Spa 芳疗按摩室与小型健身房',
        '比基尼海滩专属免费沙滩躺椅与遮阳伞',
        '全馆免费直饮水补给站与高速 Wi-Fi',
      ],
    },
    diningInformation: {
      restaurantName: 'Hermit’s Restaurant & Bakery',
      summary: {
        en: 'Celebrated across South Ari Atoll for its freshly baked artisanal breads, espresso coffee, homemade gelato, wood-fired pizzas, grilled reef fish, and authentic Maldivian curries.',
        zh: '在南阿里环礁颇具盛名的美食据点，供应现烤手工面包、意式浓缩咖啡、自制冰淇淋、现烤披萨、炭烤海鱼及地道马尔代夫咖喱。',
      },
      dietaryAndHalalNote: {
        en: '100% Halal kitchen with vegetarian, vegan, and gluten-free dishes readily prepared upon request.',
        zh: '100%清真（Halal）厨房，可根据需求定制素食、纯素及儿童餐食。',
      },
    },
    accessibilityInformation: {
      en: 'Ground-floor restaurant and reception areas are accessible from the sandy street; please inform us during enquiry if ground-floor accommodation is required.',
      zh: '一层餐厅与前台区域可从珊瑚沙街道平步进入；如需安排底层无台阶客房，请在咨询时提前告知。',
    },
    locationAndTransfer: {
      islandLocationNote: {
        en: 'Located near the northern edge of Dhigurah’s palm forest, 5 minutes from Dhigurah Harbour and 1 minute from the 3 km Bikini Beach.',
        zh: '位于迪古拉岛北部与原始椰林交界处，距码头约5分钟车程（提供免费接送），步行1分钟即达3公里长的西岸比基尼海滩。',
      },
      distanceFromAirport: {
        en: '96 km southwest of Velana International Airport (MLE)',
        zh: '距维拉纳国际机场 (MLE) 西南 96 公里',
      },
      transferSummary: {
        en: '1 hour 45 minutes by direct scheduled speedboat from MLE, or 20-minute domestic flight to Maamigili (VAM) plus 20-minute boat.',
        zh: '从马累机场乘定期直达快艇约 1小时45分钟，或搭乘20分钟内陆航班至 Maamigili (VAM) 再转乘20分钟快艇。',
      },
      transferMethods: [
        {
          method: 'speedboat',
          methodLabel: {
            en: 'Direct Scheduled Speedboat',
            zh: '机场定期直达快艇',
          },
          duration: {
            en: '1 hour 45 minutes – 2 hours',
            zh: '1 小时 45 分钟 – 2 小时',
          },
          frequencySummary: {
            en: 'Daily scheduled departures from Velana Airport (MLE) to Dhigurah.',
            zh: '每日固定班次从维拉纳国际机场（MLE）直达迪古拉岛。',
          },
          departurePoint: {
            en: 'Velana International Airport (MLE)',
            zh: '维拉纳国际机场 (MLE) 快艇码头',
          },
        },
        {
          method: 'domestic_flight_speedboat',
          methodLabel: {
            en: 'Domestic Flight (VAM) + Speedboat',
            zh: '内陆航班 (VAM) + 快艇联运',
          },
          duration: {
            en: '20 min flight + 20 min boat',
            zh: '20 分钟飞行 + 20 分钟快艇',
          },
          frequencySummary: {
            en: 'Daily domestic flights to Maamigili Airport followed by short boat transfer.',
            zh: '每日多班飞往 Maamigili 机场，下机后由快艇接驳上岛。',
          },
          departurePoint: {
            en: 'MLE Domestic Terminal',
            zh: '维拉纳国际机场国内航站楼',
          },
        },
      ],
      transferArrangementNote: {
        en: 'Speedboat or domestic flight seats must be pre-booked at least 72 hours prior to arrival; our team coordinates the entire transfer schedule with Bliss Dhigurah.',
        zh: '前往迪古拉岛的快艇或内陆机票需至少提前72小时实名预订，我们将协助您与 Bliss Dhigurah 全程无缝衔接。',
      },
    },
    nearbyAttractions: [
      {
        name: {
          en: 'Dhigurah Western Bikini Beach',
          zh: '迪古拉西岸3公里比基尼海滩',
        },
        distanceOrNote: {
          en: '1 minute walk through the palm trail',
          zh: '穿过椰林小径步行 1 分钟即达',
        },
      },
      {
        name: {
          en: 'South Ari Marine Protected Area (Whale Shark Zone)',
          zh: '南阿里海洋保护区（野生鲸鲨栖息带）',
        },
        distanceOrNote: {
          en: '10–15 minutes by excursion dhoni',
          zh: '乘出海多尼船 10–15 分钟即达外礁',
        },
      },
      {
        name: {
          en: 'Dhigurah Thundi (Southern Sandbank)',
          zh: '迪古拉南端天然长尾沙洲 (Thundi)',
        },
        distanceOrNote: {
          en: '45-minute scenic beach walk or 10-minute ride to the southern tip',
          zh: '沿海岸或林荫道向南漫步约45分钟（或乘接驳车10分钟）',
        },
      },
    ],
    importantGuestInformation: {
      en: [
        'Whale sharks in South Ari MPA are wild pelagic creatures; while sightings occur year-round, all excursions follow strict no-touch and safe-distance conservation guidelines.',
        'Green Tax, TGST (17%), and Service Charge (10%) apply per Maldivian law.',
      ],
      zh: [
        '南阿里海洋保护区的鲸鲨为纯野生海洋生物，全年均有极高偶遇率；出海寻访严格遵守马尔代夫不触碰、保持安全距离的生态保护准则。',
        '住宿费用依法适用马尔代夫政府绿色税、17% TGST 及 10% 服务费。',
      ],
    },
    officialContact: {
      websiteUrl: 'https://bliss.mv',
      officialPhone: '+960 720-1234',
      officialEmail: 'info@bliss.mv',
      address: 'Bliss Dhigurah, Dhigurah 00050, Alif Dhaal Atoll, Republic of Maldives',
      bookingMethod: {
        en: 'Enquire with your preferred travel window to verify room category availability and coordinate speedboat or domestic flight transfers.',
        zh: '提交您的计划出行日期，我们将为您向 Bliss Dhigurah 核实实时房态并统筹安排快艇或内陆航班接驳。',
      },
      cancellationPolicyNote: {
        en: 'Verified cancellation and deposit terms are supplied with your formal itinerary quotation.',
        zh: '经核实的预订定金与退改条款将随正式行程报价单一并提供。',
      },
    },
    featured: true,
  },
  {
    id: 'gh-kinan-retreat',
    slug: 'kinan-retreat-fulidhoo',
    officialName: 'Kinan Retreat',
    localizedSubtitle: {
      en: 'Oceanfront Boutique Guesthouse on Tranquil Fulidhoo Island, Vaavu Atoll',
      zh: '瓦武环礁富力杜岛上面朝碧绿泻湖的静谧海滨精品美宿',
    },
    destinationSlug: 'fulidhoo',
    islandName: {
      en: 'Fulidhoo Island',
      zh: '富力杜岛 (Fulidhoo)',
    },
    atollName: {
      en: 'Vaavu Atoll (Felidhoo Atoll)',
      zh: '瓦武环礁（费利杜环礁）',
    },
    coordinates: { lat: 3.6803, lng: 73.4161 },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Felidhoo%2C_Maldives_%28Unsplash%29.jpg/1920px-Felidhoo%2C_Maldives_%28Unsplash%29.jpg',
      alt: {
        en: 'Aerial view of white coral sand and turquoise reef lagoon in Vaavu Atoll, Maldives',
        zh: '马尔代夫瓦武环礁白沙滩与翡翠色珊瑚泻湖航拍',
      },
      credit: 'Photo by Ahmed Saffu / Wikimedia Commons (CC0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Vaavu_Atoll%2C_Maldives_-_panoramio_%2823%29.jpg/1920px-Vaavu_Atoll%2C_Maldives_-_panoramio_%2823%29.jpg',
        alt: {
          en: 'Luminous turquoise lagoon waters and coral sand beach in Vaavu Atoll, Maldives',
          zh: '瓦武环礁晶莹剔透的泻湖与珊瑚沙滩',
        },
        credit: 'Photo by goldpicasa / Wikimedia Commons (CC BY 3.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Dhoni_Sailboat_in_the_Maldives_6968.jpg/1920px-Dhoni_Sailboat_in_the_Maldives_6968.jpg',
        alt: {
          en: 'Traditional wooden Maldivian dhoni gliding across a turquoise lagoon in the Maldives',
          zh: '航行在马尔代夫碧绿泻湖上的传统木制多尼船',
        },
        credit: 'Photo by Nevit Dilmen / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    conciseDescription: {
      en: 'Steps from Fulidhoo’s turquoise lagoon and eastern Bikini Beach, Kinan Retreat offers sea-view balconies, authentic Maldivian beachside dining, and daily excursions to Vaavu Atoll’s nurse shark points and half-submerged shipwrecks.',
      zh: '毗邻富力杜岛碧绿泻湖与东端比基尼海滩，Kinan Retreat 拥有全景海景阳台客房、海滨露台餐厅，以及每日前往瓦武环礁护士鲨潜点与网红半沉船的特色出海行程。',
    },
    editorialOverview: [
      {
        en: 'Situated on the serene, car-free coral island of Fulidhoo in Vaavu Atoll, Kinan Retreat blends warm Maldivian family hospitality with unobstructed ocean views. From the upper-floor sea-view balconies, guests look directly across the crystalline lagoon where reef fish, eagle rays, and pods of spinner dolphins frequently pass.',
        zh: '坐落于瓦武环礁宁静无车的富力杜珊瑚岛（Fulidhoo），Kinan Retreat 将淳朴热情的马尔代夫家族式待客之道与一线海景视野融为一体。站在高楼层海景房的私人阳台上，凭栏即可俯瞰清澈见底的浅海泻湖，时常可见鹰鳐与飞旋海豚群游过海面。',
      },
      {
        en: 'Fulidhoo is famous across the Maldives for the wild whipray stingrays and nurse sharks that gather voluntarily in the shallow shore waters just a short walk from Kinan Retreat. The guesthouse’s dedicated excursion crew organises intimate boat trips to Shark Point, the Keyodhoo Shipwreck, and secluded Vaavu sandbanks.',
        zh: '富力杜岛以每日游至岸边浅水区的野生黄貂鱼（魔鬼鱼）与护士鲨而闻名遐迩，从民宿步行数分钟即可在沙滩边近距离观赏。Kinan Retreat 的专业船队每日组织小团出海，带您前往瓦武环礁著名的护士鲨聚集点（Shark Point）、Keyodhoo 半沉船遗迹以及原生态无人沙洲。',
      },
    ],
    verifiedHighlights: {
      en: [
        'Ocean-facing location on car-free Fulidhoo Island in Vaavu Atoll',
        'Short walk to Fulidhoo’s shoreline stingray beach & eastern Bikini Beach',
        'Sea-view rooms with private balconies overlooking the Indian Ocean',
        'Curated Vaavu Atoll nurse shark, shipwreck, and sandbank excursions',
        'Beachside dining and traditional Fulidhoo cultural evenings',
      ],
      zh: [
        '坐落于瓦武环礁无车原生态富力杜岛的海滨核心位置',
        '步行即达野生黄貂鱼互动浅滩与东侧新月比基尼海滩',
        '提供带私人观海阳台的豪华海景客房',
        '精选瓦武环礁护士鲨同游、网红沉船浮潜与无人沙洲野餐',
        '海滨露天餐饮体验与富力杜传统民俗鼓乐之夜',
      ],
    },
    propertyCategory: {
      en: 'Intimate Beachfront Boutique Guesthouse',
      zh: '海滨静谧精品民宿',
    },
    roomTypes: [
      {
        name: {
          en: 'Standard Double Room',
          zh: '标准双人房 (Standard Room)',
        },
        occupancy: {
          en: 'Up to 2 adults',
          zh: '最多入住 2 位成人',
        },
        bedConfiguration: {
          en: '1 Queen Bed',
          zh: '1 张大床 (Queen Bed)',
        },
        viewType: {
          en: 'Island / Courtyard View',
          zh: '海岛村落或庭院景观',
        },
        verifiedFacilities: {
          en: [
            'Air conditioning',
            'Private bathroom with hot/cold shower & bidet',
            'Complimentary Wi-Fi',
            'In-room safe, minibar & electric kettle',
          ],
          zh: [
            '独立空调系统',
            '冷热水淋浴私人卫浴',
            '免费无线网络 (Wi-Fi)',
            '保险箱、迷你吧与电热水壶',
          ],
        },
        description: {
          en: 'Well-appointed air-conditioned room steps from the beach and restaurant terrace.',
          zh: '温馨整洁的空调客房，下楼即达海滨餐厅与沙滩。',
        },
      },
      {
        name: {
          en: 'Super Deluxe / King Deluxe Sea View Room',
          zh: '至尊豪华海景大床房 (King Deluxe Sea View)',
        },
        occupancy: {
          en: 'Up to 2 adults + 1 child',
          zh: '最多入住 2 位成人 + 1 名儿童',
        },
        bedConfiguration: {
          en: '1 King Bed',
          zh: '1 张特大床 (King Bed)',
        },
        viewType: {
          en: 'Panoramic Lagoon & Indian Ocean View',
          zh: '全景碧绿泻湖与印度洋海景',
        },
        verifiedFacilities: {
          en: [
            'Private balcony facing the ocean',
            'Air conditioning & ceiling fan',
            'Ensuite bathroom with hot/cold shower & hairdryer',
            'Complimentary Wi-Fi, minibar, safe & tea/coffee maker',
          ],
          zh: [
            '正对大海的私人观景阳台',
            '独立空调与吊扇',
            '私人卫浴与吹风机',
            '免费 Wi-Fi、迷你吧、保险箱及茶咖冲泡设备',
          ],
        },
        description: {
          en: 'Bright upper-floor room with floor-to-ceiling glass doors opening onto a private sea-view balcony.',
          zh: '采光极佳的高楼层海景客房，落地玻璃门直通私人海景阳台。',
        },
      },
    ],
    propertyAmenities: {
      en: [
        'On-site oceanfront restaurant serving Bed & Breakfast, Half Board, and Full Board plans',
        'Dedicated Vaavu Atoll excursion & snorkelling safari boat crew',
        'Complimentary beach towels and sun loungers',
        'Harbour meet-and-greet with luggage transfer on arrival and departure',
        'Complimentary Wi-Fi in rooms and public areas',
      ],
      zh: [
        '海滨景观餐厅（提供含早 BB、早晚餐 HB 及三餐全包 FB 方案）',
        '专属瓦武环礁出海浮潜与海钓船队',
        '免费提供沙滩巾与沙滩休闲设施',
        '富力杜码头专人迎送及行李接驳服务',
        '客房及公共区域免费 Wi-Fi 覆盖',
      ],
    },
    diningInformation: {
      restaurantName: 'Kinan Beachside Restaurant',
      summary: {
        en: 'Offers fresh reef fish grills, Maldivian tuna specialities, continental dishes, and romantic private beach dinners under the stars.',
        zh: '供应新鲜现捕珊瑚鱼烧烤、马尔代夫传统金枪鱼料理、西式简餐，并可预约浪漫的星空海滩烛光晚餐。',
      },
      dietaryAndHalalNote: {
        en: 'All meals are prepared Halal; dietary preferences can be accommodated with advance notice.',
        zh: '全部餐食均为清真（Halal）食材制作，如有忌口或素食需求可提前告知厨房。',
      },
    },
    accessibilityInformation: {
      en: 'Fulidhoo is a flat, compact coral-sand island with no motor vehicles; ground-floor rooms at Kinan Retreat are available upon request.',
      zh: '富力杜全岛地势平坦、无机动车辆，步行十分轻松；如需入住一层免爬楼客房可在咨询时注明。',
    },
    locationAndTransfer: {
      islandLocationNote: {
        en: 'Located on the shoreline of Fulidhoo Island, 3 minutes’ walk from the main jetty and eastern Bikini Beach.',
        zh: '坐落于富力杜岛海岸边，步行至主码头与东端比基尼海滩均仅需约3分钟。',
      },
      distanceFromAirport: {
        en: '57 km south of Velana International Airport (MLE)',
        zh: '距维拉纳国际机场 (MLE) 以南 57 公里',
      },
      transferSummary: {
        en: '70–85 minutes by direct scheduled speedboat from Velana International Airport.',
        zh: '从维拉纳国际机场搭乘定期直达快艇约 70–85 分钟即达。',
      },
      transferMethods: [
        {
          method: 'speedboat',
          methodLabel: {
            en: 'Scheduled Speedboat',
            zh: '定期直达快艇',
          },
          duration: {
            en: '1 hour 10 minutes – 1 hour 25 minutes',
            zh: '1 小时 10 分钟 – 1 小时 25 分钟',
          },
          frequencySummary: {
            en: 'Daily scheduled departures between Velana Airport (MLE) and Fulidhoo.',
            zh: '每日固定班次往返于维拉纳机场（MLE）与富力杜岛。',
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
            en: 'Operates Sunday, Tuesday, and Thursday from Malé.',
            zh: '每周日、周二、周四从马累发船。',
          },
          departurePoint: {
            en: 'Villingili Ferry Terminal, Malé',
            zh: '马累 Villingili 渡轮码头',
          },
        },
      ],
      transferArrangementNote: {
        en: 'Notice Reminder: Fulidhoo Island does not have an ATM; we recommend bringing USD cash alongside your bank card.',
        zh: '温馨提示：富力杜岛上暂无ATM取款机，建议您在马累机场或国内提前准备适量美元现金（2013年及以后版本崭新纸币）与信用卡。',
      },
    },
    nearbyAttractions: [
      {
        name: {
          en: 'Fulidhoo Stingray & Nurse Shark Shoreline',
          zh: '富力杜野生黄貂鱼浅水岸滩',
        },
        distanceOrNote: {
          en: '2–3 minutes’ walk along the southern shore',
          zh: '沿南岸步行 2–3 分钟即达',
        },
      },
      {
        name: {
          en: 'Fulidhoo Eastern Bikini Beach',
          zh: '富力杜东侧新月比基尼海滩',
        },
        distanceOrNote: {
          en: '2 minutes’ walk',
          zh: '步行 2 分钟即达',
        },
      },
      {
        name: {
          en: 'Vaavu Shark Point & Keyodhoo Shipwreck',
          zh: '瓦武环礁护士鲨潜点与半沉船',
        },
        distanceOrNote: {
          en: '15–25 minutes by speedboat excursion',
          zh: '乘出海快艇 15–25 分钟',
        },
      },
    ],
    importantGuestInformation: {
      en: [
        'No ATM is present on Fulidhoo Island; Kinan Retreat accepts major credit cards and USD cash.',
        'Please do not touch or feed wild stingrays and nurse sharks along the shoreline.',
      ],
      zh: [
        '富力杜岛无ATM机；Kinan Retreat 接受主流信用卡及美元现金结算。',
        '在浅滩观赏野生黄貂鱼与护士鲨时，请勿伸手触摸或投喂，共同守护海洋生物。',
      ],
    },
    officialContact: {
      websiteUrl: 'http://kinanhotels.com',
      officialPhone: '+960 988-2881',
      officialEmail: 'reservations@kinanhotels.com',
      address: 'Finihiyaage, V. Fulidhoo 10010, Vaavu Atoll, Republic of Maldives',
      bookingMethod: {
        en: 'Submit your dates via our enquiry form to check sea-view room availability and speedboat timings.',
        zh: '通过咨询表单提交您的出行日期，我们将为您核实海景房档期及往返快艇时刻。',
      },
      cancellationPolicyNote: {
        en: 'Verified booking and cancellation conditions are provided in full with your written quotation.',
        zh: '具体的预订及免费取消期限将在书面报价单中明确列明。',
      },
    },
    featured: true,
  },
  {
    id: 'gh-karaa-village',
    slug: 'karaa-village-thoddoo',
    officialName: 'Karaa Village',
    localizedSubtitle: {
      en: 'Tropical Garden Courtyard Guesthouse with Bicycles on Agricultural Thoddoo Island',
      zh: '北阿里环礁“水果之岛”托杜的热带花园庭院美宿（含骑行探索与海龟房礁体验）',
    },
    destinationSlug: 'thoddoo',
    islandName: {
      en: 'Thoddoo Island',
      zh: '托杜岛 (Thoddoo)',
    },
    atollName: {
      en: 'Alif Alif Atoll (North Ari Atoll)',
      zh: '阿里夫阿里夫环礁（北阿里环礁）',
    },
    coordinates: { lat: 4.4375, lng: 72.9561 },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Lonely_old_boat_at_Thoddoo_island%2C_Maldives.jpg/1920px-Lonely_old_boat_at_Thoddoo_island%2C_Maldives.jpg',
      alt: {
        en: 'Crystal-clear turquoise lagoon and white sand beach at Thoddoo Island, Maldives',
        zh: '马尔代夫托杜岛澄澈浅海泻湖与白沙滩',
      },
      credit: 'Photo by Alessandro Caproni / Wikimedia Commons (CC BY 2.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Maldives%2C_Thoddoo_-_panoramio_%2810%29.jpg/1920px-Maldives%2C_Thoddoo_-_panoramio_%2810%29.jpg',
        alt: {
          en: 'Lush coconut palms and tropical greenery along the shore of Thoddoo Island, Maldives',
          zh: '托杜岛茂密的椰林与热带海岛风光',
        },
        credit: 'Photo by Alx R / Wikimedia Commons (CC BY 3.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Sea_turtle_Maldives_%2829736704146%29.jpg/1920px-Sea_turtle_Maldives_%2829736704146%29.jpg',
        alt: {
          en: 'Wild sea turtle swimming over the house reef at Thoddoo Island, Maldives',
          zh: '在托杜岛珊瑚房礁游弋的野生海龟',
        },
        credit: 'Photo by dronepicr / Wikimedia Commons (CC BY 2.0)',
      },
    ],
    conciseDescription: {
      en: 'Named after the Dhivehi word for watermelon ("Karaa"), Karaa Village is a tranquil garden courtyard sanctuary on Thoddoo offering private patio rooms, guest bicycles for exploring fruit plantations, and easy access to Thoddoo’s turtle-rich Bikini Beach.',
      zh: '以迪维希语中的“西瓜（Karaa）”命名，Karaa Village 是一座掩映在托杜岛热带绿植中的花园庭院美宿，客房均设私人庭院露台，并配备自行车供住客骑行穿越热带果园前往海龟栖息的比基尼海滩。',
    },
    editorialOverview: [
      {
        en: 'In the Maldivian language of Dhivehi, "Karaa" means watermelon—a tribute to Thoddoo Island’s centuries-old heritage as the agricultural fruit basket of the Maldives. Tucked along a quiet sandy street in the heart of Thoddoo, Karaa Village surrounds a lush tropical courtyard shaded by palms, bougainvillea, and woven hammocks.',
        zh: '在马尔代夫迪维希语中，“Karaa”意为西瓜——致敬托杜岛作为“马尔代夫热带果篮”的悠久种植传统。Karaa Village 坐落于托杜岛宁静的白沙街巷旁，客房环绕着种满棕榈树、三角梅并挂有编织吊床的私密热带花园庭院而建。',
      },
      {
        en: 'Because Thoddoo is a broad oval island bordered by farm tracks and palm avenues, Karaa Village provides bicycles so guests can ride effortlessly through the watermelon and papaya plantations to Sunset Bikini Beach, where wild green and hawksbill sea turtles graze daily along the shallow house reef.',
        zh: '由于托杜岛面积宽阔且林荫小径纵横，民宿贴心提供自行车，住客可随时骑车穿过清香四溢的西瓜与木瓜果园，几分钟即可抵达西岸日落比基尼海滩（Sunset Bikini Beach），直接从沙滩下水与常驻房礁的野生绿海龟和玳瑁同游。',
      },
    ],
    verifiedHighlights: {
      en: [
        'Lush tropical garden courtyard with private ground-floor room patios',
        'Guest bicycles for riding through Thoddoo’s fruit plantations to Bikini Beach',
        'Shore-accessible house reef famous for resident green and hawksbill sea turtles',
        'Fresh island-grown Thoddoo watermelon, papaya, and passionfruit served daily',
        'Harbour meet-and-greet and guided reef snorkelling excursions',
      ],
      zh: [
        '绿意盎然的私密热带花园庭院，每间客房均带私人花园露台',
        '配备客用自行车，轻松骑行探索果园与比基尼海滩',
        '比基尼海滩直接岸潜即可邂逅野生海龟群',
        '每日供应托杜本岛现摘的清甜西瓜、木瓜与百香果',
        '提供码头专车接送及海龟/蝠鲼出海浮潜行程',
      ],
    },
    propertyCategory: {
      en: 'Boutique Garden Courtyard Guesthouse',
      zh: '热带花园庭院精品民宿',
    },
    roomTypes: [
      {
        name: {
          en: 'Deluxe Double / Queen Room with Garden Patio',
          zh: '豪华花园露台大床房 (Deluxe Double with Patio)',
        },
        occupancy: {
          en: 'Up to 2 adults + 1 child',
          zh: '最多入住 2 位成人 + 1 名儿童',
        },
        bedConfiguration: {
          en: '1 Queen or King Bed',
          zh: '1 张大床或特大床',
        },
        viewType: {
          en: 'Tropical Garden Courtyard View',
          zh: '热带花园庭院景观',
        },
        verifiedFacilities: {
          en: [
            'Private outdoor garden patio with seating',
            'Air conditioning & ceiling fan',
            'Private ensuite bathroom with walk-in shower & toiletries',
            'Complimentary Wi-Fi, flat-screen TV, minibar & kettle',
            'In-room safe & beach towels',
          ],
          zh: [
            '配备户外休闲椅的私人花园露台',
            '独立空调与吊扇',
            '步入式淋浴私人卫浴与洗护用品',
            '免费 Wi-Fi、平板电视、迷你吧与电热水壶',
            '房内保险箱与沙滩巾',
          ],
        },
        description: {
          en: 'Opens directly onto the tranquil palm-shaded garden courtyard with private outdoor seating.',
          zh: '推门即入绿树成荫的静谧花园庭院，享有专属户外露台休憩空间。',
        },
      },
      {
        name: {
          en: 'Deluxe Twin / Family Room',
          zh: '豪华双床 / 家庭客房',
        },
        occupancy: {
          en: 'Up to 3 adults',
          zh: '最多入住 3 位宾客',
        },
        bedConfiguration: {
          en: 'Twin Beds or Double + Single Bed',
          zh: '2 张单人床 或 1大床+1单人床',
        },
        viewType: {
          en: 'Garden Courtyard View',
          zh: '花园庭院景观',
        },
        verifiedFacilities: {
          en: [
            'Private veranda',
            'Air conditioning',
            'Ensuite bathroom with hot/cold shower',
            'Complimentary Wi-Fi, minibar, safe & tea/coffee facilities',
          ],
          zh: [
            '私人花园游廊',
            '独立空调系统',
            '冷热水私人卫浴',
            '免费 Wi-Fi、迷你吧、保险箱及茶咖冲泡设施',
          ],
        },
        description: {
          en: 'Ideal for friends or small families exploring Thoddoo’s reefs and cycling trails.',
          zh: '适合好友结伴或三口之家体验托杜岛骑行与海龟浮潜。',
        },
      },
    ],
    propertyAmenities: {
      en: [
        'Garden courtyard restaurant serving fresh Thoddoo tropical produce & seafood',
        'Guest bicycles for island and beach exploration',
        'Sun loungers and umbrellas at Thoddoo Bikini Beach',
        'Snorkelling gear, night fishing, manta ray & sandbank excursions',
        '24-hour front desk & harbour buggy transfer',
      ],
      zh: [
        '花园庭院餐厅（供应本岛鲜摘热带水果与现捕海鲜）',
        '住客专属海岛自行车队',
        '托杜比基尼海滩专属沙滩躺椅与遮阳伞',
        '提供浮潜装备、夜钓、蝠鲼寻访及无人沙洲出海体验',
        '24小时前台服务与码头免费接送',
      ],
    },
    diningInformation: {
      restaurantName: 'Karaa Garden Restaurant',
      summary: {
        en: 'Breakfast and dinner are served in the shaded courtyard garden, featuring freshly harvested Thoddoo watermelon juice, papayas, grilled reef fish, and Maldivian and continental favourites.',
        zh: '在绿树成荫的花园庭院中享用早晚餐，每日供应托杜岛现摘鲜榨西瓜汁、木瓜、炭烤海鱼及马尔代夫与西式料理。',
      },
      dietaryAndHalalNote: {
        en: '100% Halal ingredients; abundant fresh vegetarian and fruit-based dishes available.',
        zh: '100%清真（Halal）食材，并拥有丰富的鲜果与素食菜品选择。',
      },
    },
    accessibilityInformation: {
      en: 'Ground-floor courtyard layout provides step-free access to rooms and the garden dining area.',
      zh: '庭院式底层建筑布局，客房与花园餐厅之间平步可达，无需频繁爬楼。',
    },
    locationAndTransfer: {
      islandLocationNote: {
        en: 'Situated on Shaheed Ali Hingun in Thoddoo village, approx. 5–7 minutes by bicycle through palm-lined farm lanes to Sunset Bikini Beach.',
        zh: '位于托杜村中心 Shaheed Ali Hingun 路，骑自行车穿过椰林农田小径约 5–7 分钟即可抵达西岸日落比基尼海滩。',
      },
      distanceFromAirport: {
        en: '67 km northwest of Velana International Airport (MLE)',
        zh: '距维拉纳国际机场 (MLE) 西北 67 公里',
      },
      transferSummary: {
        en: 'Approx. 1 hour 15 minutes by direct scheduled speedboat from Velana Airport / Malé.',
        zh: '从维拉纳国际机场/马累搭乘定期直达快艇约 1小时15分钟。',
      },
      transferMethods: [
        {
          method: 'speedboat',
          methodLabel: {
            en: 'Scheduled Speedboat',
            zh: '定期直达快艇',
          },
          duration: {
            en: '1 hour 15 minutes',
            zh: '约 1 小时 15 分钟',
          },
          frequencySummary: {
            en: 'Daily scheduled speedboats between Velana Airport (MLE) and Thoddoo.',
            zh: '每日固定班次往返于维拉纳机场（MLE）与托杜岛。',
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
            en: '4.5 hours',
            zh: '约 4.5 小时',
          },
          frequencySummary: {
            en: 'Scheduled MTCC ferry from Malé via Rasdhoo and Ukulhas.',
            zh: '按MTCC班期从马累经停拉斯杜与乌库拉斯抵达。',
          },
          departurePoint: {
            en: 'Villingili Ferry Terminal, Malé',
            zh: '马累 Villingili 渡轮码头',
          },
        },
      ],
      transferArrangementNote: {
        en: 'Speedboat transfers are pre-booked according to your flight arrival time and include complimentary buggy pickup at Thoddoo Harbour.',
        zh: '快艇座位将根据您的航班抵达时间提前预订，包含托杜岛码头免费专车接送。',
      },
    },
    nearbyAttractions: [
      {
        name: {
          en: 'Thoddoo Sunset Bikini Beach & Turtle House Reef',
          zh: '托杜日落比基尼海滩与野生海龟房礁',
        },
        distanceOrNote: {
          en: '5–7 minutes by bicycle along shaded farm lanes',
          zh: '沿林荫农田小径骑行 5–7 分钟',
        },
      },
      {
        name: {
          en: 'Thoddoo Watermelon & Papaya Plantations',
          zh: '托杜热带西瓜与木瓜种植园',
        },
        distanceOrNote: {
          en: '2 minutes’ walk or ride from the courtyard gate',
          zh: '出庭院步行或骑行 2 分钟即达',
        },
      },
      {
        name: {
          en: 'Ancient Buddhist Temple Ruins (Thoddoo Dagaba)',
          zh: '托杜古佛教佛塔考古遗址',
        },
        distanceOrNote: {
          en: '10 minutes by bicycle',
          zh: '骑行约 10 分钟',
        },
      },
    ],
    importantGuestInformation: {
      en: [
        'When cycling between the village and the Bikini Beaches, please wear a t-shirt and shorts/cover-up in respect of local island customs.',
        'Please maintain a respectful distance from grazing sea turtles on the house reef and never block their path to the surface for air.',
      ],
      zh: [
        '骑行往返于村落与比基尼海滩途中，请穿好T恤与短裤/外搭，尊重当地社区习俗。',
        '在房礁浮潜观赏海龟时，请保持礼貌距离，切勿追逐或阻挡海龟浮出水面换气。',
      ],
    },
    officialContact: {
      officialPhone: '+960 735-4664',
      officialEmail: 'karaavillage@gmail.com',
      address: 'Shaheed Ali Hingun, AA. Thoddoo 09020, Alif Alif Atoll, Republic of Maldives',
      bookingMethod: {
        en: 'Submit your preferred dates via our enquiry form to verify garden room availability and arrange speedboat transfers.',
        zh: '通过咨询表单提交您的行程日期，我们将为您核实花园房态并安排往返快艇接驳。',
      },
      cancellationPolicyNote: {
        en: 'Exact deposit and cancellation conditions are confirmed in writing with your quotation.',
        zh: '具体的预订与退改细则将在您的书面报价单中完整提供。',
      },
    },
    featured: true,
  },
  {
    id: 'gh-coral-reef-view-inn',
    slug: 'coral-reef-view-inn-ukulhas',
    officialName: 'Coral Reef View Inn',
    localizedSubtitle: {
      en: 'Steps from Ukulhas’ 1 km Bikini Beach & Shore-Entry House Reef in North Ari Atoll',
      zh: '北阿里环礁环保模范岛乌库拉斯近1公里比基尼海滩与岸潜房礁畔的温馨美宿',
    },
    destinationSlug: 'ukulhas',
    islandName: {
      en: 'Ukulhas Island',
      zh: '乌库拉斯岛 (Ukulhas)',
    },
    atollName: {
      en: 'Alif Alif Atoll (North Ari Atoll)',
      zh: '阿里夫阿里夫环礁（北阿里环礁）',
    },
    coordinates: { lat: 4.2153, lng: 72.8636 },
    heroImage: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Dhoani_view_of_Ukulhas.jpg',
      alt: {
        en: 'Approaching Ukulhas local island over turquoise waters in North Ari Atoll, Maldives',
        zh: '乘传统多尼船驶向北阿里环礁乌库拉斯岛',
      },
      credit: 'Photo by Rappey / Wikimedia Commons (CC BY-SA 4.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Fushi_%28Ukulhas_picnic_island%29.jpg/1920px-Fushi_%28Ukulhas_picnic_island%29.jpg',
        alt: {
          en: 'White coral sand beach and clear lagoon near Ukulhas, North Ari Atoll, Maldives',
          zh: '乌库拉斯附近的白珊瑚沙滩与清澈泻湖',
        },
        credit: 'Photo by Ukulhas / Wikimedia Commons (CC BY-SA 3.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Manta_Ray_Maldives.jpg/1920px-Manta_Ray_Maldives.jpg',
        alt: {
          en: 'Graceful reef manta ray soaring through clear underwater currents near Ukulhas, Maldives',
          zh: '在乌库拉斯附近清洁站滑翔的礁蝠鲼（魔鬼鱼）',
        },
        credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    conciseDescription: {
      en: 'Positioned right beside Ukulhas’ nearly 1-kilometre-long crescent Bikini Beach, Coral Reef View Inn gives snorkellers immediate shore access to one of North Ari Atoll’s healthiest house reefs and nearby manta ray cleaning stations.',
      zh: '紧邻乌库拉斯岛长达近1公里的新月形比基尼海滩，Coral Reef View Inn 让浮潜爱好者出门数步即可直接下水探索北阿里环礁生态极佳的珊瑚房礁，并可乘船十余分钟前往蝠鲼清洁站。',
    },
    editorialOverview: [
      {
        en: 'Situated on Vasha Magu along the western shoreline of eco-awarded Ukulhas Island, Coral Reef View Inn places guests within footsteps of the white coral sands of Ukulhas Bikini Beach. Unlike islands where boat trips are required every time you wish to see coral, Ukulhas features a thriving shore-entry house reef directly in front of the beach.',
        zh: '坐落于荣获马尔代夫国家级环保大奖的乌库拉斯岛（Ukulhas）西岸 Vasha Magu 路，Coral Reef View Inn 距离洁白细腻的比基尼海滩仅数步之遥。与必须每次乘船出海才能看到珊瑚的岛屿不同，乌库拉斯的海滩正前方就是生机勃勃的岸潜房礁（House Reef）。',
      },
      {
        en: 'Run by experienced Ukulhas hosts, the inn provides dedicated beach sunbeds and umbrellas, fresh yellowfin tuna dining (celebrating Ukulhas’ reputation as a premier tuna-fishing island), and boat excursions to Ukulhas Thila Manta Point and nearby uninhabited sandbanks.',
        zh: '由热情专业的乌库拉斯本地团队经营，民宿为住客提供专属海滩躺椅与遮阳伞、采用本岛每日鲜捕黄鳍金枪鱼烹制的海岛美食（乌库拉斯是马尔代夫著名的金枪鱼渔岛），以及前往 Ukulhas Thila 蝠鲼清洁站和无人野餐沙洲的出海行程。',
      },
    ],
    verifiedHighlights: {
      en: [
        'Steps from Ukulhas’ 1 km western Bikini Beach and shore-entry house reef',
        'Complimentary beach loungers, umbrellas, and beach towels',
        '15-minute boat access to Ukulhas Thila manta ray cleaning station',
        'Freshly caught Ukulhas yellowfin tuna and Maldivian seafood dining',
        'Located on the Maldives’ pioneering eco-model island',
      ],
      zh: [
        '出门即达乌库拉斯1公里长的新月比基尼海滩与极佳岸潜房礁',
        '免费提供海滩专属躺椅、遮阳伞与沙滩巾',
        '乘船约15分钟即达 Ukulhas Thila 蝠鲼（魔鬼鱼）清洁站',
        '供应乌库拉斯本岛每日鲜捕的黄鳍金枪鱼与马尔代夫海鲜料理',
        '坐落于马尔代夫环保模范居民岛，街道整洁宁静',
      ],
    },
    propertyCategory: {
      en: 'Beachside Guesthouse & Snorkelling Base',
      zh: '海滨岸潜精品民宿',
    },
    roomTypes: [
      {
        name: {
          en: 'Standard / Comfort Double Room',
          zh: '舒适双人房 (Standard / Comfort Double)',
        },
        occupancy: {
          en: 'Up to 2 adults',
          zh: '最多入住 2 位成人',
        },
        bedConfiguration: {
          en: '1 Queen Bed',
          zh: '1 张大床 (Queen Bed)',
        },
        viewType: {
          en: 'Island / Garden View',
          zh: '海岛或庭院景观',
        },
        verifiedFacilities: {
          en: [
            'Air conditioning & ceiling fan',
            'Private bathroom with hot/cold shower',
            'Complimentary Wi-Fi, flat-screen TV, minibar & kettle',
            'Safety deposit box & daily housekeeping',
          ],
          zh: [
            '独立空调与吊扇',
            '冷热水淋浴私人卫浴',
            '免费 Wi-Fi、平板电视、迷你吧与电热水壶',
            '保险箱与每日客房清洁服务',
          ],
        },
        description: {
          en: 'Comfortable, spotless room steps from the beach path.',
          zh: '干净舒适的空调客房，出门数步即可通往海滩小径。',
        },
      },
      {
        name: {
          en: 'Deluxe Double Room with Beach / Sea Access',
          zh: '豪华海滨大床房 (Deluxe Double Room)',
        },
        occupancy: {
          en: 'Up to 2 adults + 1 child',
          zh: '最多入住 2 位成人 + 1 名儿童',
        },
        bedConfiguration: {
          en: '1 King Bed',
          zh: '1 张特大床 (King Bed)',
        },
        viewType: {
          en: 'Beachside / Partial Lagoon View',
          zh: '海滨椰林与泻湖景观',
        },
        verifiedFacilities: {
          en: [
            'Air conditioning & ceiling fan',
            'Ensuite bathroom with hot/cold shower & hairdryer',
            'Complimentary Wi-Fi, minibar, safe & tea/coffee maker',
            'Outdoor seating area',
          ],
          zh: [
            '独立空调与吊扇',
            '冷热水卫浴与吹风机',
            '免费 Wi-Fi、迷你吧、保险箱及茶咖冲泡设备',
            '户外休闲座区',
          ],
        },
        description: {
          en: 'Spacious double room offering immediate access toward Ukulhas Bikini Beach.',
          zh: '宽敞明亮的豪华大床房，步行数秒即达乌库拉斯比基尼海滩。',
        },
      },
      {
        name: {
          en: 'Family Room',
          zh: '家庭客房 (Family Room)',
        },
        occupancy: {
          en: 'Up to 4 guests',
          zh: '最多入住 4 位宾客',
        },
        bedConfiguration: {
          en: '1 Double Bed + Twin Beds',
          zh: '1 张大床 + 单人床组合',
        },
        viewType: {
          en: 'Garden / Island View',
          zh: '庭院或海岛景观',
        },
        verifiedFacilities: {
          en: [
            'Generous family layout',
            'Air conditioning',
            'Private bathroom with shower',
            'Complimentary Wi-Fi, minibar, safe & kettle',
          ],
          zh: [
            '适合家庭入住的宽敞空间',
            '独立空调系统',
            '私人淋浴卫浴',
            '免费 Wi-Fi、迷你吧、保险箱与电热水壶',
          ],
        },
        description: {
          en: 'Practical and welcoming room for families enjoying Ukulhas’ calm lagoon and house reef.',
          zh: '专为携儿童出行、喜爱在乌库拉斯平静泻湖与房礁浮潜的家庭设计。',
        },
      },
    ],
    propertyAmenities: {
      en: [
        'On-site restaurant with indoor and alfresco garden dining',
        'Reserved beach sunbeds and umbrellas on Ukulhas Bikini Beach',
        'Guided manta ray, coral garden, and sandbank excursions',
        'Traditional handline and big-game tuna fishing trips',
        'Harbour meet-and-greet & complimentary Wi-Fi',
      ],
      zh: [
        '内设室内及户外花园餐厅',
        '乌库拉斯比基尼海滩专属沙滩躺椅与遮阳伞',
        '组织蝠鲼（魔鬼鱼）同游、珊瑚花园浮潜与无人沙洲野餐',
        '正宗乌库拉斯黄鳍金枪鱼海钓与日落手线钓体验',
        '码头专人接送及全馆免费 Wi-Fi',
      ],
    },
    diningInformation: {
      restaurantName: 'Coral Reef View Restaurant',
      summary: {
        en: 'Specialises in fresh yellowfin tuna steaks, grilled reef fish, Maldivian curries, and continental dishes served indoors or in the open-air garden.',
        zh: '主打乌库拉斯特色现捕黄鳍金枪鱼排、炭烤珊瑚鱼、马尔代夫传统咖喱及西式简餐，可在室内或露天花园用餐。',
      },
      dietaryAndHalalNote: {
        en: '100% Halal kitchen; vegetarian and child-friendly meals prepared daily.',
        zh: '100%清真（Halal）餐饮，每日可提供素食及儿童喜爱的不辣餐食。',
      },
    },
    accessibilityInformation: {
      en: 'Flat coral-sand streets lead directly from the harbour and beach; ground-floor rooms available on request.',
      zh: '全岛为平坦的珊瑚白沙街道，提供一层无台阶客房选择。',
    },
    locationAndTransfer: {
      islandLocationNote: {
        en: 'Located on Vasha Magu along the western side of Ukulhas Island, steps from Bikini Beach and 5 minutes’ walk from Ukulhas Harbour.',
        zh: '位于乌库拉斯岛西岸 Vasha Magu 路，紧邻比基尼海滩，距乌库拉斯码头步行约5分钟。',
      },
      distanceFromAirport: {
        en: '72 km west-northwest of Velana International Airport (MLE)',
        zh: '距维拉纳国际机场 (MLE) 西北偏西 72 公里',
      },
      transferSummary: {
        en: '1 hour 15 minutes – 1 hour 30 minutes by direct scheduled speedboat from Velana Airport / Malé.',
        zh: '从维拉纳国际机场/马累搭乘定期直达快艇约 1小时15分钟 – 1小时30分钟。',
      },
      transferMethods: [
        {
          method: 'speedboat',
          methodLabel: {
            en: 'Scheduled Speedboat',
            zh: '定期直达快艇',
          },
          duration: {
            en: '1 hour 15 minutes – 1 hour 30 minutes',
            zh: '1 小时 15 分钟 – 1 小时 30 分钟',
          },
          frequencySummary: {
            en: 'Daily morning and afternoon scheduled departures from Malé / Velana Airport.',
            zh: '每日上下午固定班次往返于马累/维拉纳机场与乌库拉斯岛。',
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
            en: '3.5 – 4 hours',
            zh: '3.5 – 4 小时',
          },
          frequencySummary: {
            en: 'Operates on scheduled days from Malé via Rasdhoo.',
            zh: '按MTCC班期从马累经停拉斯杜抵达。',
          },
          departurePoint: {
            en: 'Villingili Ferry Terminal, Malé',
            zh: '马累 Villingili 渡轮码头',
          },
        },
      ],
      transferArrangementNote: {
        en: 'Our team coordinates your speedboat seat reservation directly with Coral Reef View Inn based on your flight arrival.',
        zh: '我们将根据您的航班抵达时间，直接与 Coral Reef View Inn 协调预订您的往返快艇座位。',
      },
    },
    nearbyAttractions: [
      {
        name: {
          en: 'Ukulhas Bikini Beach & Shore-Entry House Reef',
          zh: '乌库拉斯比基尼海滩与岸潜房礁',
        },
        distanceOrNote: {
          en: '1 minute walk (less than 50 metres)',
          zh: '步行不到 50 米（约1分钟）',
        },
      },
      {
        name: {
          en: 'Ukulhas Thila Manta Point',
          zh: 'Ukulhas Thila 蝠鲼清洁站',
        },
        distanceOrNote: {
          en: '15 minutes by boat',
          zh: '乘船约 15 分钟',
        },
      },
    ],
    importantGuestInformation: {
      en: [
        'Please use reef-safe sunscreen and never stand on or touch live coral when entering the Ukulhas House Reef from the beach.',
        'Bank of Maldives (BML) ATM is available on Ukulhas near the harbour.',
      ],
      zh: [
        '从海滩下水进入乌库拉斯房礁浮潜时，请使用海洋友好型防晒霜，切勿踩踏或触碰活体珊瑚。',
        '乌库拉斯码头附近设有马尔代夫银行（BML）ATM取款机。',
      ],
    },
    officialContact: {
      websiteUrl: 'http://www.coralreefviewinn.com',
      officialPhone: '+960 778-3518',
      address: 'Vasha Magu, AA. Ukulhas 09030, Alif Alif Atoll, Republic of Maldives',
      bookingMethod: {
        en: 'Submit an enquiry with your travel dates to confirm availability and speedboat transfer schedules.',
        zh: '提交您的出行日期咨询，我们将为您核实实时房态与快艇班次。',
      },
      cancellationPolicyNote: {
        en: 'Verified cancellation conditions are provided in writing with your itinerary quotation.',
        zh: '经核实的退改条款将在书面报价单中明确列明。',
      },
    },
    featured: true,
  },
  {
    id: 'gh-reveries-diving-village',
    slug: 'reveries-diving-village-laamu-gan',
    officialName: 'Reveries Diving Village',
    localizedSubtitle: {
      en: 'Southern Atoll Boutique Dive & Surf Hotel on Gan Island, Laamu Atoll',
      zh: '南部拉姆环礁甘岛集潜水、冲浪、双泳池与古迹探索于一体的精品度假酒店',
    },
    destinationSlug: 'laamu-gan',
    islandName: {
      en: 'Gan Island (Laamu Atoll)',
      zh: '拉姆甘岛 (Laamu Gan)',
    },
    atollName: {
      en: 'Laamu Atoll (Haddhunmathi Atoll)',
      zh: '拉姆环礁（哈杜马蒂环礁）',
    },
    coordinates: { lat: 1.9153, lng: 73.5431 },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Beach_and_bungalow._Eriyadu%2C_Maldives.jpg/1920px-Beach_and_bungalow._Eriyadu%2C_Maldives.jpg',
      alt: {
        en: 'Beachside stay tucked beneath coconut palms steps from the white sand beach in the Maldives',
        zh: '马尔代夫掩映在椰林树影下、出门即达白沙滩的海滨度假美宿',
      },
      credit: 'Photo by Пчерка / Wikimedia Commons (CC BY-SA 4.0)',
      aspectRatio: '16:9',
    },
    gallery: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Aerial_shot_of_a_small_island_on_a_coral_reef_in_the_Maldives.jpg/1920px-Aerial_shot_of_a_small_island_on_a_coral_reef_in_the_Maldives.jpg',
        alt: {
          en: 'Aerial view of a coral reef and deep blue channel in the Maldives',
          zh: '马尔代夫珊瑚礁与深海断层航拍',
        },
        credit: 'Photo by Dr. Ondřej Havelka / Wikimedia Commons (CC BY-SA 4.0)',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Maldives_soft_coral.jpg/1920px-Maldives_soft_coral.jpg',
        alt: {
          en: 'Vibrant soft corals and tropical reef fish underwater in the Maldives',
          zh: '马尔代夫水下绚丽多彩的软珊瑚群与热带鱼',
        },
        credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      },
    ],
    conciseDescription: {
      en: 'Situated beside the uncrowded white sands of Thundi Beach on Laamu Gan, Reveries Diving Village offers indoor and outdoor pools, a PADI 5-Star Dive Centre, rooftop ocean-view dining, and road transfers directly from Kadhdhoo Airport with zero open-ocean boat ride required.',
      zh: '坐落于南部拉姆环礁甘岛北端静谧的 Thundi 白沙滩畔，Reveries Diving Village 拥有室内外双泳池、PADI 五星潜水中心、屋顶海景餐厅，且从 Kadhdhoo 内陆机场下机后可直接乘专车经跨海公路抵达，完全无需换乘海上快艇。',
    },
    editorialOverview: [
      {
        en: 'Located just two degrees north of the Equator on Gan Island in Laamu Atoll, Reveries Diving Village pioneered boutique community-integrated tourism in the southern Maldives. Fronting the vast, uncrowded expanse of Thundi Beach, the property combines full hotel amenities—including both an outdoor swimming pool and an indoor pool, a spa, and a 24-hour gym—with direct access to some of the most pristine coral reefs in the archipelago.',
        zh: '坐落于赤道以北仅两度的拉姆环礁甘岛（Laamu Gan），Reveries Diving Village 开创了马尔代夫南部环礁高品质居民岛度假的先河。酒店正对广阔静谧的 Thundi 白沙滩，兼具室外与室内游泳池、水疗中心、24小时健身房与 PADI 潜水中心，让您深入探索马尔代夫南部少有人迹的纯净珊瑚礁。',
      },
      {
        en: 'One of Reveries’ unique advantages for travellers sensitive to sea swell is its transfer route: after a scenic 40-minute domestic flight from Velana International Airport (MLE) to Kadhdhoo Airport (KDO), guests travel by air-conditioned car across the scenic causeway road directly to the hotel without needing a speedboat transfer.',
        zh: '对于容易晕船或携长辈儿童出行的旅行者而言，Reveries 拥有一项得天独厚的交通优势：从马累维拉纳国际机场（MLE）搭乘40分钟内陆航班降落拉姆 Kadhdhoo 机场（KDO）后，无需换乘任何海上快艇，直接乘坐空调专车沿18公里跨海连岛公路15分钟即可平步抵达酒店大堂。',
      },
    ],
    verifiedHighlights: {
      en: [
        'Direct road transfer from Kadhdhoo Airport (KDO) via scenic causeway — no speedboat required',
        'Directly fronts the uncrowded powder-white sands of Thundi Bikini Beach',
        'In-house PADI Dive & Water Sports Centre exploring untouched Laamu channels & Yin Yang surf break',
        'Indoor and outdoor swimming pools, spa, and 24-hour fitness gym',
        'Bicycles available to explore 18 km of causeway-linked islands and ancient Buddhist ruins',
      ],
      zh: [
        '内陆航班落地 Kadhdhoo 机场 (KDO) 后专车经跨海公路直达，免去海上快艇颠簸',
        '出门即达甘岛北端长达数公里、静谧无人的 Thundi 比基尼白沙滩',
        '内设 PADI 潜水与冲浪中心，直通 Fushi Kandu 水道与 Yin Yang 世界级冲浪点',
        '配备室外与室内双泳池、Spa 水疗中心及24小时健身房',
        '提供自行车骑行探索18公里跨海连岛公路、千年佛教遗址与内陆淡水湖',
      ],
    },
    propertyCategory: {
      en: 'Southern Atoll Dive, Surf & Boutique Hotel',
      zh: '南部环礁潜水冲浪精品度假酒店',
    },
    roomTypes: [
      {
        name: {
          en: 'Deluxe Room (Garden View / Sea View)',
          zh: '豪华客房（花园景 / 海景）',
        },
        occupancy: {
          en: 'Up to 2 adults + 1 child',
          zh: '最多入住 2 位成人 + 1 名儿童',
        },
        bedConfiguration: {
          en: '1 Double Bed or 2 Twin Beds',
          zh: '1 张大床 或 2 张单人床',
        },
        viewType: {
          en: 'Garden View or Indian Ocean View',
          zh: '热带花园景观 或 印度洋海景',
        },
        verifiedFacilities: {
          en: [
            'Private balcony or terrace',
            'Air conditioning',
            'Ensuite bathroom with hot/cold shower & toiletries',
            'Flat-screen satellite TV, minibar, safe & kettle',
            'Complimentary Wi-Fi',
          ],
          zh: [
            '私人阳台或露台',
            '独立空调系统',
            '冷热水淋浴私人卫浴与洗浴用品',
            '卫星平板电视、迷你吧、保险箱与电热水壶',
            '免费无线网络 (Wi-Fi)',
          ],
        },
        description: {
          en: 'Contemporary island guestrooms overlooking the tropical garden or the turquoise waters off Thundi Beach.',
          zh: '现代海岛风格的舒适客房，可俯瞰热带花园或 Thundi 海滩外的碧蓝泻湖。',
        },
      },
      {
        name: {
          en: 'Reveries Three-Bedroom Bungalow',
          zh: 'Reveries 三卧室独立别墅 (Three-Bedroom Bungalow)',
        },
        occupancy: {
          en: 'Up to 6 guests',
          zh: '最多入住 6 位宾客',
        },
        bedConfiguration: {
          en: '3 Separate Bedrooms + Living & Dining Room',
          zh: '3 间独立卧室 + 客厅、餐厅与厨房',
        },
        viewType: {
          en: 'Private Garden Compound',
          zh: '独立私密花园庭院',
        },
        verifiedFacilities: {
          en: [
            'Three air-conditioned bedrooms with ensuite bathrooms',
            'Private living room, dining area, kitchen & washing machine',
            'Private garden courtyard',
            'Complimentary Wi-Fi & full access to all hotel pools and facilities',
          ],
          zh: [
            '3间带独立卫浴的空调卧室',
            '独立起居室、用餐区、厨房及洗衣机',
            '私密花园庭院',
            '免费 Wi-Fi 并可尊享酒店主楼全部泳池、餐厅与潜水设施',
          ],
        },
        description: {
          en: 'Ideal for extended families, dive groups, or surf charters seeking a private residence on Laamu Gan.',
          zh: '专为多代同堂家庭、潜水小队或冲浪爱好者打造的私密独栋三居室居所。',
        },
      },
    ],
    propertyAmenities: {
      en: [
        'Main Restaurant, Rooftop Ocean-View Terrace Restaurant & Garden Café',
        'Outdoor swimming pool and indoor swimming pool',
        'In-house PADI Dive Centre & surf boat transfers to Yin Yang break',
        'Full-service Spa & 24-hour fitness gym',
        'Bicycle rentals for exploring the 18 km Laamu causeway',
        'Airport car transfer from Kadhdhoo Domestic Airport (KDO)',
      ],
      zh: [
        '主餐厅、屋顶海景露台餐厅与花园咖啡馆',
        '室外游泳池与室内恒温泳池',
        '内设 PADI 潜水中心及前往 Yin Yang 冲浪点的出海快艇',
        '全方位水疗中心（Spa）与24小时健身房',
        '提供自行车租赁（可骑行探索18公里跨海连岛公路）',
        'Kadhdhoo 内陆机场（KDO）专车直达接送服务',
      ],
    },
    diningInformation: {
      restaurantName: 'Reveries Main & Rooftop Terrace Restaurant',
      summary: {
        en: 'Offers daily breakfast buffets, freshly caught southern atoll reef fish and lobster dinners, Maldivian short-eats (hedhikaa) at Café 20, and rooftop sunset dining.',
        zh: '提供每日自助早餐、南部环礁现捕海鱼与龙虾晚宴、Café 20 地道马尔代夫下午茶点（Hedhikaa）以及屋顶露台日落晚宴。',
      },
      dietaryAndHalalNote: {
        en: '100% Halal cuisine; vegetarian, Asian, and continental dishes available daily.',
        zh: '100%清真（Halal）餐饮，每日供应素食、亚洲风味热菜及西式料理。',
      },
    },
    accessibilityInformation: {
      en: 'Because transfers from Kadhdhoo Airport (KDO) to Reveries Diving Village take place entirely by road vehicle across the bridge causeway, guests avoid stepping onto wet boat jetties or speedboats.',
      zh: '由于从 Kadhdhoo 机场（KDO）前往酒店全程通过跨海大桥陆路专车接驳，宾客无需上下摇晃的快艇台阶，对长辈与行动不便人士极为友好。',
    },
    locationAndTransfer: {
      islandLocationNote: {
        en: 'Located in the Thundi ward at the northern tip of Gan Island, Laamu Atoll, 15 minutes’ drive along the paved causeway from Kadhdhoo Airport (KDO).',
        zh: '位于拉姆环礁甘岛最北端的 Thundi 社区，距离 Kadhdhoo 内陆机场（KDO）沿跨海柏油公路仅 15 分钟车程。',
      },
      distanceFromAirport: {
        en: '250 km south of Velana International Airport (MLE)',
        zh: '距维拉纳国际机场 (MLE) 以南 250 公里',
      },
      transferSummary: {
        en: '40-minute domestic flight from MLE to Kadhdhoo Airport (KDO), followed by a 15-minute scenic car transfer across the causeway.',
        zh: '从马累（MLE）搭乘 40 分钟内陆航班飞抵 Kadhdhoo 机场（KDO），随后乘空调专车 15 分钟经跨海大桥直达酒店。',
      },
      transferMethods: [
        {
          method: 'domestic_flight_speedboat',
          methodLabel: {
            en: 'Domestic Flight to Kadhdhoo (KDO) + Causeway Car Transfer',
            zh: '内陆航班（飞往 KDO）+ 跨海公路专车直达',
          },
          duration: {
            en: '40 min flight + 15 min road drive',
            zh: '40 分钟内陆飞行 + 15 分钟陆路专车',
          },
          frequencySummary: {
            en: 'Multiple daily scheduled flights operated by Maldivian from MLE to KDO.',
            zh: '马尔代夫国家航空（Maldivian）每日运营多班从马累直飞拉姆 KDO 的航班。',
          },
          departurePoint: {
            en: 'Velana International Airport (MLE) Domestic Terminal',
            zh: '维拉纳国际机场 (MLE) 国内航站楼',
          },
        },
      ],
      transferArrangementNote: {
        en: 'Domestic flights between MLE and KDO are booked in coordination with your international arrival and departure times.',
        zh: '往返马累（MLE）与拉姆（KDO）的内陆机票及接送专车将根据您的国际航班时间统一协调预订。',
      },
    },
    nearbyAttractions: [
      {
        name: {
          en: 'Thundi Bikini Beach',
          zh: '甘岛北端 Thundi 比基尼海滩',
        },
        distanceOrNote: {
          en: '1 minute walk — directly across from the property',
          zh: '步行 1 分钟即达',
        },
      },
      {
        name: {
          en: 'Kuruhinna Tharaagandu Ancient Buddhist Ruins',
          zh: 'Kuruhinna 千年佛教遗址',
        },
        distanceOrNote: {
          en: '10 minutes by bicycle or car on Gan Island',
          zh: '骑行或乘车约 10 分钟',
        },
      },
      {
        name: {
          en: 'Paree Fenganda Freshwater Lake',
          zh: 'Paree Fenganda 丛林内陆淡水湖',
        },
        distanceOrNote: {
          en: '12 minutes by bicycle or car',
          zh: '骑行或乘车约 12 分钟',
        },
      },
    ],
    importantGuestInformation: {
      en: [
        'Domestic flight baggage allowance on Maldivian is typically 20 kg checked luggage plus 5 kg hand luggage; dive/surf equipment allowances can be arranged in advance.',
        'Gan Regional Hospital and BML ATMs are located on the island.',
      ],
      zh: [
        '马尔代夫内陆航班常规免费行李额为20公斤托运+5公斤手提；如携带潜水或冲浪板装备，可提前申请运动器材行李额。',
        '甘岛设有大型区域医院（Gan Regional Hospital）及多处马尔代夫银行（BML）ATM机。',
      ],
    },
    officialContact: {
      websiteUrl: 'https://reveriesmaldives.com',
      officialPhone: '+960 680-8866',
      officialEmail: 'reservations@reveriesmaldives.com',
      address: 'Monaan, Namoona Magu, Thundi 15061, Laamu Gan, Republic of Maldives',
      bookingMethod: {
        en: 'Submit your dates and group size via our enquiry form to receive a complete quotation including domestic flights (MLE–KDO) and accommodation.',
        zh: '通过咨询表单提交您的日期与人数，我们将为您整合提供包含马累往返拉姆内陆机票（MLE–KDO）与住宿的完整报价单。',
      },
      cancellationPolicyNote: {
        en: 'Verified hotel and domestic airline cancellation terms are included with every quotation.',
        zh: '经核实的酒店及内陆机票退改条款将在书面报价单中明确列明。',
      },
    },
    featured: true,
  },
];

export function getGuesthouseBySlug(slug: string): Guesthouse | undefined {
  return GUESTHOUSES.find((g) => g.slug === slug);
}

export function getGuesthousesByDestination(destinationSlug: string): Guesthouse[] {
  return GUESTHOUSES.filter((g) => g.destinationSlug === destinationSlug);
}
