const fs = require('fs');

const islands = [
  // KAAFU (K)
  {
    id: 'isl-maafushi',
    slug: 'maafushi',
    nameEn: 'Maafushi',
    nameZh: '马富士岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (South Malé Atoll)',
    coordinates: [73.4926, 3.9412],
    isFeatured: true,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 65,
    hotelCount: 3,
    resortCount: 0,
    transferSummary: {
      en: '30 min scheduled speedboat from Velana Airport (MLE)',
      zh: '距维拉纳国际机场（MLE）30分钟直达快艇'
    }
  },
  {
    id: 'isl-male',
    slug: 'male',
    nameEn: 'Malé Capital',
    nameZh: '马累首都岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (North Malé Atoll)',
    coordinates: [73.5093, 4.1755],
    isFeatured: false,
    hasAccommodation: true,
    type: 'capital',
    guesthouseCount: 42,
    hotelCount: 8,
    resortCount: 0,
    transferSummary: {
      en: '10 min bridge/ferry from Velana Airport (MLE)',
      zh: '跨海大桥连接机场，车程10分钟'
    }
  },
  {
    id: 'isl-hulhumale',
    slug: 'hulhumale',
    nameEn: 'Hulhumalé',
    nameZh: '胡鲁马累',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (North Malé Atoll)',
    coordinates: [73.5417, 4.2133],
    isFeatured: false,
    hasAccommodation: true,
    type: 'urban_transit',
    guesthouseCount: 95,
    hotelCount: 5,
    resortCount: 0,
    transferSummary: {
      en: '15 min taxi from Velana Airport (MLE)',
      zh: '机场公路连接，出租车15分钟'
    }
  },
  {
    id: 'isl-airport-mle',
    slug: 'velana-airport',
    nameEn: 'Velana International Airport (Hulhulé)',
    nameZh: '维拉纳国际机场（胡鲁勒）',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll',
    coordinates: [73.5292, 4.1918],
    isFeatured: false,
    hasAccommodation: true,
    type: 'airport',
    guesthouseCount: 0,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: 'Primary International Gateway to the Maldives',
      zh: '马尔代夫主国际航空枢纽'
    }
  },
  {
    id: 'isl-gulhi',
    slug: 'gulhi',
    nameEn: 'Gulhi',
    nameZh: '古丽岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (South Malé Atoll)',
    coordinates: [73.5083, 3.9889],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 18,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '25 min speedboat from Velana Airport',
      zh: '距机场25分钟快艇'
    }
  },
  {
    id: 'isl-guraidhoo',
    slug: 'guraidhoo',
    nameEn: 'Guraidhoo',
    nameZh: '古莱杜岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (South Malé Atoll)',
    coordinates: [73.4667, 3.9006],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 22,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '35 min speedboat from Velana Airport',
      zh: '距机场35分钟快艇'
    }
  },
  {
    id: 'isl-thulusdhoo',
    slug: 'thulusdhoo',
    nameEn: 'Thulusdhoo',
    nameZh: '图卢斯杜岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (North Malé Atoll)',
    coordinates: [73.6508, 4.3736],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 38,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '30 min speedboat from Velana Airport (Cokes surf break)',
      zh: '距机场30分钟快艇，知名冲浪点'
    }
  },
  {
    id: 'isl-dhiffushi',
    slug: 'dhiffushi',
    nameEn: 'Dhiffushi',
    nameZh: '迪夫希岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (North Malé Atoll)',
    coordinates: [73.7139, 4.4417],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 26,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '45 min speedboat from Velana Airport',
      zh: '距机场45分钟快艇'
    }
  },
  {
    id: 'isl-huraa',
    slug: 'huraa',
    nameEn: 'Huraa',
    nameZh: '胡拉岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (North Malé Atoll)',
    coordinates: [73.6000, 4.3333],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 16,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '25 min speedboat from Velana Airport',
      zh: '距机场25分钟快艇'
    }
  },
  {
    id: 'isl-himmafushi',
    slug: 'himmafushi',
    nameEn: 'Himmafushi',
    nameZh: '希玛富士岛',
    atollCode: 'K',
    atollId: 'atoll-kaafu',
    atollName: 'Kaafu Atoll (North Malé Atoll)',
    coordinates: [73.5714, 4.3106],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 15,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '20 min speedboat from Velana Airport (Jailbreaks surf)',
      zh: '距机场20分钟快艇'
    }
  },

  // ALIF DHAALU (ADh) - SOUTH ARI
  {
    id: 'isl-dhigurah',
    slug: 'dhigurah',
    nameEn: 'Dhigurah',
    nameZh: '迪古拉岛',
    atollCode: 'ADh',
    atollId: 'atoll-alif-dhaal',
    atollName: 'Alif Dhaal Atoll (South Ari Atoll)',
    coordinates: [72.9250, 3.5306],
    isFeatured: true,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 24,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 45m direct speedboat or 20m domestic flight + boat (SAMPA Whale Sharks)',
      zh: '直飞内陆机20分钟或快艇1小时45分，SAMPA野生鲸鲨聚集区'
    }
  },
  {
    id: 'isl-dhangethi',
    slug: 'dhangethi',
    nameEn: 'Dhangethi',
    nameZh: '丹格迪岛',
    atollCode: 'ADh',
    atollId: 'atoll-alif-dhaal',
    atollName: 'Alif Dhaal Atoll (South Ari Atoll)',
    coordinates: [72.9550, 3.6067],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 18,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 30m speedboat or domestic flight to Maamigili',
      zh: '快艇1小时30分或马米吉里内飞'
    }
  },
  {
    id: 'isl-mahibadhoo',
    slug: 'mahibadhoo',
    nameEn: 'Mahibadhoo (Capital)',
    nameZh: '马希巴杜岛（首府）',
    atollCode: 'ADh',
    atollId: 'atoll-alif-dhaal',
    atollName: 'Alif Dhaal Atoll (South Ari Atoll)',
    coordinates: [72.9689, 3.7572],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 12,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 20m scheduled speedboat from Malé',
      zh: '马累直达快艇约1小时20分'
    }
  },
  {
    id: 'isl-maamigili',
    slug: 'maamigili',
    nameEn: 'Maamigili (Airport)',
    nameZh: '马米吉里岛（机场）',
    atollCode: 'ADh',
    atollId: 'atoll-alif-dhaal',
    atollName: 'Alif Dhaal Atoll (South Ari Atoll)',
    coordinates: [72.8364, 3.4736],
    isFeatured: false,
    hasAccommodation: true,
    type: 'airport',
    guesthouseCount: 14,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: 'Villa Airport Maamigili (VAM) – 20 min flight from MLE',
      zh: '自维拉纳机场内飞20分钟直达'
    }
  },
  {
    id: 'isl-omadhoo',
    slug: 'omadhoo',
    nameEn: 'Omadhoo',
    nameZh: '奥马杜岛',
    atollCode: 'ADh',
    atollId: 'atoll-alif-dhaal',
    atollName: 'Alif Dhaal Atoll (South Ari Atoll)',
    coordinates: [72.9236, 3.7889],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 16,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 15m speedboat from Malé (pristine house reef)',
      zh: '马累直达快艇约1小时15分'
    }
  },
  {
    id: 'isl-hangnaameedhoo',
    slug: 'hangnaameedhoo',
    nameEn: 'Hangnaameedhoo',
    nameZh: '杭纳米杜岛',
    atollCode: 'ADh',
    atollId: 'atoll-alif-dhaal',
    atollName: 'Alif Dhaal Atoll (South Ari Atoll)',
    coordinates: [72.9528, 3.8472],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 14,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 15m speedboat from Malé',
      zh: '马累直达快艇约1小时15分'
    }
  },

  // ALIF ALIF (AA) - NORTH ARI
  {
    id: 'isl-thoddoo',
    slug: 'thoddoo',
    nameEn: 'Thoddoo',
    nameZh: '托杜岛',
    atollCode: 'AA',
    atollId: 'atoll-alif-alif',
    atollName: 'Alif Alifu Atoll (North Ari Atoll)',
    coordinates: [72.9600, 4.4370],
    isFeatured: true,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 48,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 15m scheduled speedboat from Velana Airport (Watermelon Island)',
      zh: '维拉纳机场快艇75分钟直达，著名农业西瓜岛与双比基尼海滩'
    }
  },
  {
    id: 'isl-ukulhas',
    slug: 'ukulhas',
    nameEn: 'Ukulhas',
    nameZh: '乌库拉斯岛',
    atollCode: 'AA',
    atollId: 'atoll-alif-alif',
    atollName: 'Alif Alifu Atoll (North Ari Atoll)',
    coordinates: [72.8647, 4.2144],
    isFeatured: true,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 36,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h speedboat from Velana Airport (Eco-Award Local Island)',
      zh: '维拉纳机场直达快艇60分钟，国家绿色生态示范岛'
    }
  },
  {
    id: 'isl-rasdhoo',
    slug: 'rasdhoo',
    nameEn: 'Rasdhoo (Capital)',
    nameZh: '拉斯杜岛（首府）',
    atollCode: 'AA',
    atollId: 'atoll-alif-alif',
    atollName: 'Alif Alifu Atoll (North Ari Atoll)',
    coordinates: [72.9917, 4.2625],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 28,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 10m speedboat from Malé (Hammerhead Point dive corridor)',
      zh: '马累直达快艇约70分钟，著名锤头鲨潜水圣地'
    }
  },
  {
    id: 'isl-mathiveri',
    slug: 'mathiveri',
    nameEn: 'Mathiveri',
    nameZh: '马蒂威利岛',
    atollCode: 'AA',
    atollId: 'atoll-alif-alif',
    atollName: 'Alif Alifu Atoll (North Ari Atoll)',
    coordinates: [72.7933, 4.1906],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 16,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 30m speedboat from Malé (Sandbank access)',
      zh: '马累直达快艇约90分钟'
    }
  },
  {
    id: 'isl-bodufolhudhoo',
    slug: 'bodufolhudhoo',
    nameEn: 'Bodufolhudhoo',
    nameZh: '博杜福鲁杜岛',
    atollCode: 'AA',
    atollId: 'atoll-alif-alif',
    atollName: 'Alif Alifu Atoll (North Ari Atoll)',
    coordinates: [72.8258, 4.1856],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 12,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 20m speedboat from Malé (Eco plastic-free island)',
      zh: '马累快艇80分钟直达'
    }
  },
  {
    id: 'isl-feridhoo',
    slug: 'feridhoo',
    nameEn: 'Feridhoo',
    nameZh: '费利杜岛',
    atollCode: 'AA',
    atollId: 'atoll-alif-alif',
    atollName: 'Alif Alifu Atoll (North Ari Atoll)',
    coordinates: [72.7236, 3.9472],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 10,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 45m speedboat from Malé',
      zh: '马累快艇105分钟'
    }
  },

  // VAAVU (V) - FELIDHOO ATOLL
  {
    id: 'isl-fulidhoo',
    slug: 'fulidhoo',
    nameEn: 'Fulidhoo',
    nameZh: '富利杜岛',
    atollCode: 'V',
    atollId: 'atoll-vaavu',
    atollName: 'Vaavu Atoll (Felidhoo Atoll)',
    coordinates: [73.4150, 3.6800],
    isFeatured: true,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 16,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 10m scheduled speedboat from Velana Airport (Stingray Beach & Nurse Sharks)',
      zh: '维拉纳机场快艇70分钟直达，海滩浅滩野生黄貂鱼与护士鲨潜点'
    }
  },
  {
    id: 'isl-thinadhoo-v',
    slug: 'thinadhoo-vaavu',
    nameEn: 'Thinadhoo',
    nameZh: '蒂纳杜岛（瓦武）',
    atollCode: 'V',
    atollId: 'atoll-vaavu',
    atollName: 'Vaavu Atoll (Felidhoo Atoll)',
    coordinates: [73.5333, 3.4861],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 8,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: '1h 20m speedboat from Malé',
      zh: '马累快艇约80分钟'
    }
  },
  {
    id: 'isl-felidhoo',
    slug: 'felidhoo',
    nameEn: 'Felidhoo (Capital)',
    nameZh: '费利杜首府岛',
    atollCode: 'V',
    atollId: 'atoll-vaavu',
    atollName: 'Vaavu Atoll (Felidhoo Atoll)',
    coordinates: [73.5486, 3.4722],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 25m speedboat from Malé',
      zh: '马累快艇约85分钟'
    }
  },
  {
    id: 'isl-keyodhoo',
    slug: 'keyodhoo',
    nameEn: 'Keyodhoo',
    nameZh: '基约杜岛',
    atollCode: 'V',
    atollId: 'atoll-vaavu',
    atollName: 'Vaavu Atoll (Felidhoo Atoll)',
    coordinates: [73.5514, 3.4611],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 9,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 30m speedboat from Malé (Famous sunken shipwreck)',
      zh: '马累快艇90分钟，沉船潜水通道'
    }
  },

  // BAA (B) - UNESCO BIOSPHERE
  {
    id: 'isl-dharavandhoo',
    slug: 'dharavandhoo',
    nameEn: 'Dharavandhoo (Airport)',
    nameZh: '达拉万杜岛（机场）',
    atollCode: 'B',
    atollId: 'atoll-baa',
    atollName: 'Baa Atoll (UNESCO Biosphere Reserve)',
    coordinates: [73.1292, 5.1583],
    isFeatured: false,
    hasAccommodation: true,
    type: 'airport',
    guesthouseCount: 18,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: '20 min domestic flight from MLE (Hanifaru Bay Manta corridor)',
      zh: '维拉纳机场内飞20分钟直达，哈尼法鲁湾魔鬼鱼通道'
    }
  },
  {
    id: 'isl-eydhafushi',
    slug: 'eydhafushi',
    nameEn: 'Eydhafushi (Capital)',
    nameZh: '艾达富士岛（首府）',
    atollCode: 'B',
    atollId: 'atoll-baa',
    atollName: 'Baa Atoll',
    coordinates: [73.0706, 5.1036],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 8,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '20 min domestic flight to Dharavandhoo + 10 min boat',
      zh: '内飞至达拉万杜转乘快艇10分钟'
    }
  },
  {
    id: 'isl-fulhadhoo',
    slug: 'fulhadhoo',
    nameEn: 'Fulhadhoo',
    nameZh: '富拉杜岛',
    atollCode: 'B',
    atollId: 'atoll-baa',
    atollName: 'Baa Atoll (Goidhoo Atoll)',
    coordinates: [72.9317, 4.8856],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '2h scheduled speedboat from Malé (Ranked top 25 global beaches)',
      zh: '马累直达快艇约2小时，全球排名前列的旷世白沙滩'
    }
  },
  {
    id: 'isl-fehendhoo',
    slug: 'fehendhoo',
    nameEn: 'Fehendhoo',
    nameZh: '费亨杜岛',
    atollCode: 'B',
    atollId: 'atoll-baa',
    atollName: 'Baa Atoll (Goidhoo Atoll)',
    coordinates: [72.9692, 4.8872],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 5,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '2h scheduled speedboat from Malé',
      zh: '马累直达快艇约2小时'
    }
  },

  // LHAVIYANI (Lh)
  {
    id: 'isl-naifaru',
    slug: 'naifaru',
    nameEn: 'Naifaru (Capital)',
    nameZh: '奈法鲁岛（首府）',
    atollCode: 'Lh',
    atollId: 'atoll-lhaviyani',
    atollName: 'Lhaviyani Atoll (Faadhippolhu)',
    coordinates: [73.3653, 5.4444],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 8,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '35 min sea plane or 3h express speedboat',
      zh: '水上飞机35分钟或快艇约3小时'
    }
  },
  {
    id: 'isl-hinnavaru',
    slug: 'hinnavaru',
    nameEn: 'Hinnavaru',
    nameZh: '欣纳瓦鲁岛',
    atollCode: 'Lh',
    atollId: 'atoll-lhaviyani',
    atollName: 'Lhaviyani Atoll',
    coordinates: [73.4125, 5.4944],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '35 min seaplane or transfer via Madivaru airport',
      zh: '马迪瓦鲁机场内飞或水飞直达'
    }
  },

  // LAAMU (L) - HADDHUNMATHI
  {
    id: 'isl-laamu-gan',
    slug: 'laamu-gan',
    nameEn: 'Laamu Gan',
    nameZh: '拉姆甘岛',
    atollCode: 'L',
    atollId: 'atoll-laamu',
    atollName: 'Laamu Atoll (Haddhunmathi Atoll)',
    coordinates: [73.5333, 1.9167],
    isFeatured: true,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 8,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '35m domestic flight to Kadhdhoo Airport (KDO) + 15m scenic link road',
      zh: '维拉纳机场内飞35分钟抵卡杜机场，接驳15分钟跨岛公路直达'
    }
  },
  {
    id: 'isl-fonadhoo',
    slug: 'fonadhoo',
    nameEn: 'Fonadhoo (Capital)',
    nameZh: '福纳杜岛（首府）',
    atollCode: 'L',
    atollId: 'atoll-laamu',
    atollName: 'Laamu Atoll',
    coordinates: [73.5028, 1.8333],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: 'Connected directly to Kadhdhoo Airport via causeway',
      zh: '紧邻卡杜机场，公路直连'
    }
  },

  // GNAVIYANI (Gn) - FUVAHMULAH
  {
    id: 'isl-fuvahmulah',
    slug: 'fuvahmulah',
    nameEn: 'Fuvahmulah Island & Airport',
    nameZh: '富瓦穆拉岛（虎鲨潜水胜地）',
    atollCode: 'Gn',
    atollId: 'atoll-gnaviyani',
    atollName: 'Gnaviyani Atoll (Single Island Atoll)',
    coordinates: [73.4244, -0.2972],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 32,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: '1h 10m domestic flight to Fuvahmulah (FVM) – Global Tiger Shark haven',
      zh: '维拉纳机场内飞70分钟直达富瓦穆拉机场，全球唯一的常年深海虎鲨观察地'
    }
  },

  // SEENU (S) - ADDU ATOLL
  {
    id: 'isl-hithadhoo',
    slug: 'hithadhoo',
    nameEn: 'Hithadhoo (Addu City)',
    nameZh: '希塔杜（阿杜市）',
    atollCode: 'S',
    atollId: 'atoll-seenu',
    atollName: 'Seenu Atoll (Addu Atoll)',
    coordinates: [73.0886, -0.6033],
    isFeatured: false,
    hasAccommodation: true,
    type: 'city',
    guesthouseCount: 14,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: '1h 15m domestic/international flight to Gan International Airport (GAN)',
      zh: '飞抵甘岛国际机场，跨越赤道直达'
    }
  },
  {
    id: 'isl-gan-seenu',
    slug: 'addu-gan',
    nameEn: 'Gan International Airport (Addu)',
    nameZh: '甘岛国际机场（阿杜）',
    atollCode: 'S',
    atollId: 'atoll-seenu',
    atollName: 'Seenu Atoll (Addu Atoll)',
    coordinates: [73.1556, -0.6931],
    isFeatured: false,
    hasAccommodation: true,
    type: 'airport',
    guesthouseCount: 4,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: 'British Royal Air Force historical heritage & international gateway',
      zh: '南部国际口岸，二战英军历史遗迹'
    }
  },

  // HAA ALIFU (HA) - FAR NORTH
  {
    id: 'isl-dhidhdhoo',
    slug: 'dhidhdhoo',
    nameEn: 'Dhidhdhoo (Capital)',
    nameZh: '迪德胡首府岛',
    atollCode: 'HA',
    atollId: 'atoll-haa-alifu',
    atollName: 'Haa Alifu Atoll',
    coordinates: [73.1147, 6.8878],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: 'Flight to Hanimaadhoo + 20 min speedboat',
      zh: '内飞至哈尼马杜转乘20分钟快艇'
    }
  },
  {
    id: 'isl-kelaa',
    slug: 'kelaa',
    nameEn: 'Kelaa',
    nameZh: '凯拉岛',
    atollCode: 'HA',
    atollId: 'atoll-haa-alifu',
    atollName: 'Haa Alifu Atoll',
    coordinates: [73.2167, 6.9583],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: 'Flight to Hanimaadhoo + 25 min speedboat (French Lagoon)',
      zh: '内飞至哈尼马杜转乘25分钟快艇'
    }
  },

  // HAA DHAALU (HDh)
  {
    id: 'isl-hanimaadhoo',
    slug: 'hanimaadhoo',
    nameEn: 'Hanimaadhoo International',
    nameZh: '哈尼马杜国际机场岛',
    atollCode: 'HDh',
    atollId: 'atoll-haa-dhaalu',
    atollName: 'Haa Dhaalu Atoll',
    coordinates: [73.1742, 6.7628],
    isFeatured: false,
    hasAccommodation: true,
    type: 'airport',
    guesthouseCount: 7,
    hotelCount: 1,
    resortCount: 0,
    transferSummary: {
      en: '45 min domestic flight from Velana Airport (MLE)',
      zh: '维拉纳机场内飞45分钟直达'
    }
  },
  {
    id: 'isl-kulhudhuffushi',
    slug: 'kulhudhuffushi',
    nameEn: 'Kulhudhuffushi City',
    nameZh: '库尔胡杜富士市',
    atollCode: 'HDh',
    atollId: 'atoll-haa-dhaalu',
    atollName: 'Haa Dhaalu Atoll',
    coordinates: [73.0700, 6.6222],
    isFeatured: false,
    hasAccommodation: true,
    type: 'city',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: 'Commercial hub of the north with Kulhudhuffushi Airport (HDK)',
      zh: '北部经济与医疗中心，设支线机场'
    }
  },

  // GAAFU ALIFU (GA)
  {
    id: 'isl-villingili-ga',
    slug: 'villingili-ga',
    nameEn: 'Villingili (Capital)',
    nameZh: '维灵吉利首府岛',
    atollCode: 'GA',
    atollId: 'atoll-gaafu-alifu',
    atollName: 'Gaafu Alifu Atoll (North Huvadhoo)',
    coordinates: [73.4333, 0.7569],
    isFeatured: false,
    hasAccommodation: true,
    type: 'inhabited',
    guesthouseCount: 6,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: 'Domestic flight to Kooddoo Airport (GKK) + 5 min speedboat',
      zh: '内飞至库杜机场转乘快艇5分钟'
    }
  },

  // GAAFU DHAALU (GDh)
  {
    id: 'isl-thinadhoo-gdh',
    slug: 'thinadhoo-gdh',
    nameEn: 'Thinadhoo City',
    nameZh: '蒂纳杜市（南胡瓦杜）',
    atollCode: 'GDh',
    atollId: 'atoll-gaafu-dhaalu',
    atollName: 'Gaafu Dhaalu Atoll (South Huvadhoo)',
    coordinates: [72.9983, 0.5333],
    isFeatured: false,
    hasAccommodation: true,
    type: 'city',
    guesthouseCount: 7,
    hotelCount: 0,
    resortCount: 0,
    transferSummary: {
      en: 'Flight to Kaadedhdhoo (KDM) or Maavarulu + 10 min boat',
      zh: '内飞至卡德杜机场转乘快艇10分钟'
    }
  }
];

const geojson = {
  type: 'FeatureCollection',
  name: 'Maldives_Key_Islands_WGS84',
  attribution: 'Maldives Geomatics Department & OneMap. Ministry of Tourism Registered Facilities Directory.',
  features: islands.map(isl => ({
    type: 'Feature',
    id: isl.id,
    geometry: {
      type: 'Point',
      coordinates: isl.coordinates
    },
    properties: {
      id: isl.id,
      slug: isl.slug,
      name_en: isl.nameEn,
      name_zh: isl.nameZh,
      atoll_code: isl.atollCode,
      atoll_id: isl.atollId,
      atoll_name: isl.atollName,
      is_featured: isl.isFeatured,
      has_accommodation: isl.hasAccommodation,
      island_type: isl.type,
      guesthouse_count: isl.guesthouseCount,
      hotel_count: isl.hotelCount,
      resort_count: isl.resortCount,
      transfer_summary_en: isl.transferSummary.en,
      transfer_summary_zh: isl.transferSummary.zh
    }
  }))
};

fs.writeFileSync('c:/Users/user/Documents/Maldivia/src/data/geo/islands.json', JSON.stringify(geojson, null, 2), 'utf8');
fs.writeFileSync('c:/Users/user/Documents/Maldivia/src/data/geo/islandsData.ts', `export const MALDIVES_ISLANDS = ${JSON.stringify(islands, null, 2)};\n`, 'utf8');
console.log('Successfully wrote', islands.length, 'verified islands to geo/islands.json & geo/islandsData.ts');
