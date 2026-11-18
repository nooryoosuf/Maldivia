import type { Experience } from '@/types/domain';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-snorkelling',
    slug: 'coral-reef-turtle-snorkelling',
    category: 'snorkelling',
    title: {
      en: 'Coral Reef & Sea Turtle Snorkelling',
      zh: '珊瑚礁、海龟与护士鲨浮潜探索',
    },
    subtitle: {
      en: 'Shore-Entry House Reefs & Guided Dhoni Reef Safaris',
      zh: '从比基尼海滩直接岸潜，或乘多尼船探访外礁海龟与护士鲨',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Sea_turtle_Maldives_%2829736704146%29.jpg/1920px-Sea_turtle_Maldives_%2829736704146%29.jpg',
      alt: {
        en: 'Wild sea turtle swimming effortlessly through clear blue water above a coral reef in the Maldives',
        zh: '在马尔代夫清澈珊瑚礁海域自在游弋的野生海龟',
      },
      credit: 'Photo by dronepicr / Wikimedia Commons (CC BY 2.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'The shallow inner lagoons and reef edges surrounding Maldivian inhabited islands host extraordinary marine biodiversity. On islands such as Thoddoo and Ukulhas in North Ari Atoll, swimmers can walk directly off the white-sand Bikini Beach with a mask and fins to observe green and hawksbill sea turtles, blacktip reef sharks, parrotfish, and table corals without boarding a boat.',
        zh: '马尔代夫居民岛周边的浅海泻湖与珊瑚礁断层孕育着极高密度的海洋生物。在北阿里环礁的托杜岛（Thoddoo）与乌库拉斯岛（Ukulhas），住客甚至无需乘船，直接佩戴面镜与脚蹼从比基尼海滩游出几十米，即可在天然房礁（House Reef）偶遇觅食的野生绿海龟、玳瑁、黑鳍礁鲨与五彩斑斓的鹦嘴鱼。',
      },
      {
        en: 'For outer-reef exploration, guesthouses organise half-day boat safaris accompanied by local guides who understand tidal currents and reef entry points—ranging from Biyadhoo and Turtle Reef near Maafushi to Shark Point in Vaavu Atoll where benign nurse sharks gather in clear turquoise channels.',
        zh: '若想探索更壮观的外堡礁，各家民宿均提供由熟悉洋流与潮汐的本地向导带队的半日出海浮潜之旅——从马富士岛周边的海龟礁（Turtle Reef），到瓦武环礁富力杜岛附近与温顺野生护士鲨同游的 Shark Point。',
      },
    ],
    relevantIslands: ['thoddoo', 'ukulhas', 'maafushi', 'fulidhoo', 'dhigurah'],
    relevantIslandsLabel: {
      en: 'Thoddoo, Ukulhas, Maafushi, Fulidhoo & Dhigurah',
      zh: '托杜岛、乌库拉斯岛、马富士岛、富力杜岛、迪古拉岛',
    },
    typicalDuration: {
      en: 'Shore snorkelling at leisure; boat safaris typically 2.5 – 4 hours',
      zh: '房礁岸潜全天自由进行；乘船出海浮潜通常为 2.5 – 4 小时',
    },
    typicallyIncluded: {
      en: [
        'Mask, snorkel, and fins provided by the guesthouse excursion desk',
        'In-water safety guide & life vests / flotation aids upon request',
        'Drinking water and beach towels on boat trips',
      ],
      zh: [
        '民宿出海中心提供的面镜、呼吸管与脚蹼装备',
        '专业水下领队护航及救生衣/浮力辅助设备',
        '出海船只配备饮用水与沙滩毛巾',
      ],
    },
    importantRequirements: {
      en: [
        'Non-swimmers or beginners must inform the guide before departure and wear a flotation vest.',
        'Never stand on coral formations or touch sea turtles, rays, or sharks.',
        'Use reef-safe sunscreen or UV rashguards to protect coral polyps.',
      ],
      zh: [
        '不熟悉水性或初次浮潜者请在出发前告知领队并全程穿戴救生衣。',
        '严禁踩踏活体珊瑚，请勿追逐或触摸海龟、魔鬼鱼与护士鲨。',
        '建议穿着物理防晒水母衣或使用海洋友好型防晒霜以保护珊瑚生态。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'All partner guesthouse guides brief guests on reef entry channels and surface current direction prior to entering the water.',
      zh: '每次下水前，向导均会详细讲解珊瑚礁出入水道位置与海面洋流方向，确保安全与生态零破坏。',
    },
  },
  {
    id: 'exp-scuba-diving',
    slug: 'padi-scuba-diving-whale-sharks-mantas',
    category: 'scuba-diving',
    title: {
      en: 'Scuba Diving, Whale Sharks & Manta Cleaning Stations',
      zh: '水肺深潜、南阿里鲸鲨与蝠鲼清洁站',
    },
    subtitle: {
      en: 'PADI-Certified Channel Drift Dives, Thilas & Pelagic Encounters',
      zh: 'PADI 持牌潜店带队探索环礁水道放流潜、水下珊瑚海山与巨型海洋生物',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Whale_shark_Maldives.jpg/1920px-Whale_shark_Maldives.jpg',
      alt: {
        en: 'Spotted whale shark gliding through sunlit blue waters in the Maldives',
        zh: '在马尔代夫蔚蓝海水中巡游的野生鲸鲨',
      },
      credit: 'Photo by Tchami / Wikimedia Commons (CC BY-SA 3.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Staying on a local island provides direct access to the exact same iconic dive sites visited by luxury liveaboards and private resorts. From Dhigurah in South Ari Atoll, divers explore the year-round whale shark corridor of Maamigili Beyru and the soft-coral pinnacle of Kuda Rah Thila. From Ukulhas, dive dhonis reach the manta ray cleaning stations of North Ari Atoll within fifteen minutes.',
        zh: '入住马尔代夫居民岛，您将与顶奢度假村和船宿潜水船共享同一片世界级潜点。从南阿里环礁的迪古拉岛（Dhigurah）出发，潜水员可全年探访野生鲸鲨巡游带 Maamigili Beyru 以及软珊瑚密布的 Kuda Rah Thila；从乌库拉斯岛出发，乘多尼船15分钟即可抵达北阿里环礁的蝠鲼（魔鬼鱼）清洁站。',
      },
      {
        en: 'For experienced channel divers, Vaavu Atoll (Fulidhoo), South Malé Atoll (Maafushi), and Laamu Atoll (Gan) offer exhilarating incoming-current drift dives at Miyaru Kandu, Kandooma Thila, and Fushi Kandu alongside grey reef sharks, eagle rays, and schooling jacks. Beginners can also complete PADI Discover Scuba Diving or Open Water certification in calm lagoon waters.',
        zh: '对于进阶持证潜水员，瓦武环礁的 Miyaru Kandu、南马累环礁的 Kandooma Thila 以及南部拉姆环礁的 Fushi Kandu 提供了极具震撼力的通道放流潜体验，成群灰礁鲨、鹰鳐与杰克鱼风暴令人叹为观止。零基础游客亦可在平静泻湖中体验 PADI 体验水肺潜水（DSD）或考取 OW 开放水域潜水员证书。',
      },
    ],
    relevantIslands: ['dhigurah', 'ukulhas', 'maafushi', 'fulidhoo', 'laamu-gan'],
    relevantIslandsLabel: {
      en: 'Dhigurah, Ukulhas, Maafushi, Fulidhoo & Laamu Gan',
      zh: '迪古拉岛、乌库拉斯岛、马富士岛、富力杜岛、拉姆甘岛',
    },
    typicalDuration: {
      en: 'Single or two-tank morning dives (3–4.5 hours); PADI courses 1–4 days',
      zh: '上午单瓶或双瓶船潜（约 3–4.5 小时）；PADI 课程 1–4 天',
    },
    typicallyIncluded: {
      en: [
        'Dive dhoni transfer, tanks, weights, and PADI Divemaster / Instructor guide',
        'BCD, regulator, wetsuit, dive computer, mask, and fins rental options',
        'Surface interval refreshments on board',
      ],
      zh: [
        '专业潜水多尼船接送、气瓶、配重及 PADI 潜水长/教练带队',
        '提供 BCD、调节器、湿衣、潜水电脑表及面镜脚蹼租赁',
        '水面休息期间提供茶点与饮用水',
      ],
    },
    importantRequirements: {
      en: [
        'Certified divers must present their PADI / SSI / CMAS certification card and logbook.',
        'A mandatory minimum surface interval of 24 hours is required before flying (including domestic flights from Maamigili or Kadhdhoo).',
        'Standard PADI medical questionnaire required prior to diving.',
      ],
      zh: [
        '持证潜水员需出示 PADI / SSI 等潜水证书及潜水日志。',
        '搭乘国际航班或马尔代夫内陆航班前，必须严格遵守至少 24 小时的禁飞水面休息时间。',
        '下水前需填写标准潜水健康声明表。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'All South Ari MPA whale shark excursions adhere to Maldives Whale Shark Research Programme (MWSRP) codes of conduct: no flash photography, minimum 3–4 metre distance, and speed limits inside the reef zone.',
      zh: '所有南阿里保护区鲸鲨潜游均严格遵守马尔代夫鲸鲨研究项目（MWSRP）保育规范：禁止使用闪光灯、保持3–4米以上安全距离、保护区内船只限速航行。',
    },
  },
  {
    id: 'exp-sandbank',
    slug: 'maldivian-sandbank-excursions',
    category: 'sandbank',
    title: {
      en: 'Uninhabited Sandbank Excursions',
      zh: '印度洋海中央无人拖尾沙洲之旅',
    },
    subtitle: {
      en: 'Pure Coral Sandbars Surrounded by 360-Degree Turquoise Lagoons',
      zh: '踏上被360度双色渐变果冻海环绕的纯白珊瑚沙洲',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Kuramathi_Sandbank_001.jpg/1920px-Kuramathi_Sandbank_001.jpg',
      alt: {
        en: 'Narrow white sandbar tapering into luminous turquoise lagoon waters in the Maldives',
        zh: '马尔代夫伸入双色渐变碧绿海水中的唯美拖尾白沙滩',
      },
      credit: 'Photo by MBraun Germany / Wikimedia Commons (CC BY-SA 3.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Known locally in Dhivehi as "Finolhu" or "Thundi", sandbanks are shifting ribbons of pure white coral sand emerging straight out of shallow turquoise lagoons. On Dhigurah Island, you can walk directly onto the famous southern Dhigurah Thundi sandbank on foot, whereas from Maafushi, Fulidhoo, and Ukulhas, speedboats whisk guests to isolated mid-ocean sandbars in fifteen to twenty minutes.',
        zh: '在马尔代夫迪维希语中被称为“Finolhu”或“Thundi”的沙洲，是浮现于浅海泻湖中央的纯白珊瑚沙带。在迪古拉岛（Dhigurah），您可以徒步走上岛屿最南端长达一公里的天然长尾沙洲；而在马富士、富力杜与乌库拉斯岛，乘快艇15至20分钟即可登上四周空无一物的海中央沙洲。',
      },
      {
        en: 'Sandbank excursions offer calm, waist-deep water in every direction, shaded beach umbrellas set up by your boat crew, shallow reef snorkelling around the perimeter, and unspoiled horizons ideal for photography and quiet relaxation.',
        zh: '在无人沙洲上，四周皆是齐腰深的清澈果冻海。随行船员会为您支起遮阳伞，准备冰镇饮品或沙滩野餐，您可以在沙洲边缘的浅水珊瑚礁自在浮潜，或拍摄极具视觉震撼力的海岛大片。',
      },
    ],
    relevantIslands: ['dhigurah', 'maafushi', 'fulidhoo', 'ukulhas', 'thoddoo'],
    relevantIslandsLabel: {
      en: 'Dhigurah, Maafushi, Fulidhoo, Ukulhas & Thoddoo',
      zh: '迪古拉岛、马富士岛、富力杜岛、乌库拉斯岛、托杜岛',
    },
    typicalDuration: {
      en: 'Half-day (2–3 hours) or combined with reef snorkelling (4–5 hours)',
      zh: '半日游（2–3 小时）或结合珊瑚礁浮潜的全日游（4–5 小时）',
    },
    typicallyIncluded: {
      en: [
        'Round-trip speedboat or dhoni transfer to the sandbank',
        'Beach shade umbrella, towels, drinking water, and light lunch/refreshments',
        'Snorkelling mask and fins for exploring the surrounding lagoon reef',
      ],
      zh: [
        '往返无人沙洲的快艇或多尼船接驳',
        '沙滩遮阳伞、毛巾、饮用水及简餐/热带水果',
        '沙洲周边浅海浮潜面镜与脚蹼',
      ],
    },
    importantRequirements: {
      en: [
        'Sandbanks have no natural tree shade; high-SPF reef-safe sun protection, hats, and sunglasses are essential.',
        'All waste and reusable containers are carried back to the main island by the crew.',
      ],
      zh: [
        '海中央沙洲通常无高大树木遮阴，请务必做好防晒措施（防晒衣、遮阳帽、墨镜）。',
        '遵循“无痕海岛”原则，船员会将所有餐具与物品全部带回主岛处理。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'Sandbank visits are timed with local tide tables to ensure optimal exposed sand area and safe lagoon anchorage.',
      zh: '沙洲行程均根据当日潮汐表精准安排出发时间，以确保在退潮至平潮时段呈现最美的沙洲形态。',
    },
  },
  {
    id: 'exp-dolphin-cruise',
    slug: 'spinner-dolphin-sunset-cruise',
    category: 'dolphin-cruise',
    title: {
      en: 'Wild Spinner Dolphin Sunset Cruise',
      zh: '野生飞旋海豚日落巡航',
    },
    subtitle: {
      en: 'Late-Afternoon Atoll Channel Voyages as Pods Head Out to the Open Ocean',
      zh: '黄昏时分乘船驶入环礁水道，邂逅成群跃水旋转的野生飞旋海豚',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Stenella_longirostris_Maldives.jpg/1920px-Stenella_longirostris_Maldives.jpg',
      alt: {
        en: 'Pod of wild spinner dolphins leaping above the waves in the Maldives',
        zh: '在马尔代夫海面上成群跃水旋转的野生飞旋海豚',
      },
      credit: 'Photo by Alexia Pihier / Wikimedia Commons (CC BY-SA 3.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Tens of thousands of wild spinner dolphins (Stenella longirostris) and bottlenose dolphins inhabit the Maldivian archipelago. Following a natural daily rhythm, pods rest inside sheltered atoll lagoons during the day and swim out through the atoll channels toward the open ocean at dusk to feed.',
        zh: '数以万计的野生飞旋海豚（Stenella longirostris）与宽吻海豚栖息在马尔代夫群岛海域。遵循自然的昼夜节律，海豚群白天在平静的环礁内海休息，傍晚日落时分则会成群结队穿过环礁水道游向外海觅食。',
      },
      {
        en: 'Departing in the golden hour before sunset, local captains steer along these channel corridors. Spinner dolphins frequently ride the bow wave of the boat and perform their signature acrobatic mid-air spins against the backdrop of an Indian Ocean sunset.',
        zh: '在日落前的金色黄昏时分出发，经验丰富的本地船长会驾驶多尼船或快艇驶往海豚迁徙水道。天性活泼的飞旋海豚经常主动游至船头乘浪前行，并在漫天晚霞下跃出水面完成招牌式的空中旋转。',
      },
    ],
    relevantIslands: ['maafushi', 'ukulhas', 'fulidhoo', 'dhigurah', 'laamu-gan'],
    relevantIslandsLabel: {
      en: 'Maafushi, Ukulhas, Fulidhoo, Dhigurah & Laamu Gan',
      zh: '马富士岛、乌库拉斯岛、富力杜岛、迪古拉岛、拉姆甘岛',
    },
    typicalDuration: {
      en: '1.5 – 2 hours during late afternoon / sunset',
      zh: '傍晚日落时段约 1.5 – 2 小时',
    },
    typicallyIncluded: {
      en: [
        'Guided sunset boat cruise along atoll dolphin channels',
        'Life jackets and onboard refreshments',
      ],
      zh: [
        '环礁水道日落巡航游船与经验船长领航',
        '船上救生衣与饮用水/软饮',
      ],
    },
    importantRequirements: {
      en: [
        'Suitable for all ages, including families with young children and senior travellers.',
        'Dolphins are wild marine mammals observed in their natural habitat without feeding or chasing.',
      ],
      zh: [
        '老少咸宜，非常适合亲子家庭与长辈共同参与。',
        '海豚为纯野生海洋哺乳动物，船只遵循平行伴航原则，绝不强行追逐或投喂。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'Boats maintain steady, predictable speeds and never cut across the path of a pod with calves.',
      zh: '游船保持平稳航速，绝不横穿带有幼豚的海豚群航线。',
    },
  },
  {
    id: 'exp-sunset-fishing',
    slug: 'traditional-dhoni-sunset-fishing',
    category: 'sunset-fishing',
    title: {
      en: 'Traditional Maldivian Sunset Handline Fishing',
      zh: '传统多尼船日落手线海钓（含渔获现烤晚餐）',
    },
    subtitle: {
      en: 'Experience Centuries-Old Maldivian Reef Fishing & Dine on Your Catch',
      zh: '体验世代传承的马尔代夫手线海钓技艺，归来后由民宿大厨为您炭烤鲜鱼',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Dhoni_Sailboat_in_the_Maldives_6968.jpg/1920px-Dhoni_Sailboat_in_the_Maldives_6968.jpg',
      alt: {
        en: 'Traditional wooden Maldivian dhoni boat gliding across a turquoise lagoon in the Maldives',
        zh: '航行在马尔代夫碧绿泻湖上的传统木制多尼船（Dhoni）',
      },
      credit: 'Photo by Nevit Dilmen / Wikimedia Commons (CC BY-SA 3.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Fishing has been the lifeblood of Maldivian society for over two millennia, practiced sustainably with single lines rather than industrial nets. As the sun dips below the horizon and nocturnal reef fish become active, guests board a boat with local island fishermen to anchor beside a coral reef drop-off.',
        zh: '两千多年来，渔业一直是马尔代夫岛民赖以生存的命脉，且全国坚持采用可持续的单钩与手线垂钓，严禁工业拖网捕捞。当夕阳沉入印度洋海平线、夜间珊瑚礁鱼类开始活跃觅食时，您将跟随当地老渔民乘船停泊在珊瑚礁断层边缘。',
      },
      {
        en: 'Using simple wooden handlines baited with fresh bonito, even first-time anglers regularly catch red snapper, emperor fish, and grouper. Upon returning to the island, your guesthouse kitchen cleans and grills your catch with Maldivian spices for dinner.',
        zh: '使用缠绕在木盘上的传统手线与新鲜鱼饵，即使是零基础的初学者也常能收获红鲷鱼（Red Snapper）、龙占鱼与石斑鱼。满载归航后，民宿餐厅主厨会将您的战利品现场处理并佐以马尔代夫香料炭烤，化作当晚的鲜美海鲜大餐。',
      },
    ],
    relevantIslands: ['ukulhas', 'maafushi', 'fulidhoo', 'thoddoo', 'dhigurah', 'laamu-gan'],
    relevantIslandsLabel: {
      en: 'Available across all six featured islands',
      zh: '全部六座精选居民岛均可体验',
    },
    typicalDuration: {
      en: '2 – 2.5 hours at dusk, followed by dinner on the island',
      zh: '黄昏出海约 2 – 2.5 小时，返岛后享用作晚餐',
    },
    typicallyIncluded: {
      en: [
        'Boat transfer, handline tackle, hooks, sinkers, and fresh bait',
        'Assistance from local Maldivian fishermen',
        'Preparation and grilling of your catch at the guesthouse restaurant',
      ],
      zh: [
        '出海船只、传统手线渔具、鱼钩及新鲜鱼饵',
        '当地资深渔民手把手指导',
        '返岛后由民宿餐厅免费或按套餐为您加工炭烤渔获',
      ],
    },
    importantRequirements: {
      en: [
        'Protected reef species (such as Napoleon wrasse, sharks, and parrotfish) are immediately released unharmed if hooked.',
      ],
      zh: [
        '若意外钓获受马尔代夫法律保护的鱼种（如苏眉鱼、鹦嘴鱼或鲨鱼），船员会立即无损放流。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: '100% selective single-hook handline fishing—one of the most environmentally low-impact fishing methods in the world.',
      zh: '100%采用传统单钩手线垂钓，是全球公认对海洋生态影响最小的环保捕鱼方式。',
    },
  },
  {
    id: 'exp-island-hopping',
    slug: 'inter-island-atoll-hopping',
    category: 'island-hopping',
    title: {
      en: 'Atoll Island Hopping & Picnic Islands',
      zh: '环礁跳岛游与无人野餐岛探索',
    },
    subtitle: {
      en: 'Compare Neighbouring Local Communities, Lagoons & Uninhabited Coral Cayes',
      zh: '一日之内串联邻近居民岛、无人野餐岛与环礁珊瑚花园',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Traveling_in_Maldives_-_Flickr_-_nattu.jpg/1920px-Traveling_in_Maldives_-_Flickr_-_nattu.jpg',
      alt: {
        en: 'Boat cruising across brilliant turquoise lagoon waters toward a palm-dotted island in the Maldives',
        zh: '乘快艇穿越马尔代夫蔚蓝环礁水道前往热带海岛跳岛游',
      },
      credit: 'Photo by Nattu Adnan / Wikimedia Commons (CC BY 2.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Every Maldivian island has a distinct character shaped by its geography and livelihood. Island-hopping excursions allow travellers to experience multiple islands within a single atoll—such as combining Maafushi with peaceful Gulhi (famous for its traditional boatyard) in South Malé Atoll, or pairing Ukulhas with Rasdhoo and Mathiveri in North Ari Atoll.',
        zh: '马尔代夫的每一座岛屿都有着截然不同的地貌与人文风情。跳岛游（Island Hopping）让您在同一环礁内一次饱览多座海岛的魅力——例如从南马累环礁的马富士岛乘船探访拥有传统造船厂的古莉岛（Gulhi），或在北阿里环礁串联乌库拉斯、拉斯杜（Rasdhoo）与无人野餐岛。',
      },
      {
        en: ' down in Laamu Atoll, island hopping can also be done on two wheels: a continuous 18-kilometre paved causeway links Gan, Mandhoo, Kadhdhoo, and Fonadhoo across turquoise reef flats.',
        zh: '而在南部的拉姆环礁（Laamu Atoll），您甚至可以骑着自行车完成“陆路跳岛”：沿着18公里长的跨海连岛公路，一路骑行跨越碧绿礁盘，串联甘岛（Gan）、Mandhoo、Kadhdhoo 与 Fonadhoo 四座南部海岛。',
      },
    ],
    relevantIslands: ['maafushi', 'ukulhas', 'fulidhoo', 'laamu-gan'],
    relevantIslandsLabel: {
      en: 'Maafushi, Ukulhas, Fulidhoo & Laamu Gan',
      zh: '马富士岛、乌库拉斯岛、富力杜岛、拉姆甘岛',
    },
    typicalDuration: {
      en: 'Half-day or full-day (4 – 6 hours)',
      zh: '半日或全日行程（约 4 – 6 小时）',
    },
    typicallyIncluded: {
      en: [
        'Inter-island boat transfers or guided causeway tour',
        'Local village walking tour and snorkelling stops',
        'Island lunch or picnic refreshments',
      ],
      zh: [
        '岛际快艇接驳或跨海公路向导伴游',
        '邻岛村落人文漫步与中途珊瑚礁浮潜',
        '海岛特色午餐或野餐茶点',
      ],
    },
    importantRequirements: {
      en: [
        'Please bring a light cover-up or t-shirt and shorts for walking through inhabited island villages.',
      ],
      zh: [
        '登临其他有人居住的当地海岛村落时，请随身备好T恤与短裤/长裙以便在村内漫步。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'Supports small family-owned cafés, artisans, and community fees across neighbouring inhabited islands.',
      zh: '跳岛行程直接支持邻近小岛的家庭咖啡馆与手工艺人，促进当地社区均衡发展。',
    },
  },
  {
    id: 'exp-cultural',
    slug: 'maldivian-island-culture-plantations-heritage',
    category: 'cultural',
    title: {
      en: 'Local Island Culture, Plantations & Heritage',
      zh: '马尔代夫海岛人文、果园骑行与古迹寻访',
    },
    subtitle: {
      en: 'Bodu Beru Percussion, Thoddoo Fruit Farms, Hedhikaa Tea & Pre-Islamic Ruins',
      zh: '体验 Bodu Beru 传统鼓乐、托杜热带果园、下午茶点 Hedhikaa 与千年佛塔遗迹',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Buiobuione_Maafushi_Road.jpg/1920px-Buiobuione_Maafushi_Road.jpg',
      alt: {
        en: 'Sandy local island street shaded by coconut palms on Maafushi Island, Maldives',
        zh: '马尔代夫居民岛上椰影婆娑的珊瑚白沙街道与本土风情',
      },
      credit: 'Photo by Buiobuione / Wikimedia Commons (CC BY-SA 4.0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Travelling to inhabited islands opens a window into authentic Dhivehi culture that private resort islands rarely show. On Thoddoo Island, guests cycle through tidy agricultural plots where farmers tend watermelons and papayas, and visit the coral-stone foundations of a pre-Islamic Buddhist stupa. On Laamu Gan, visitors can explore the 7th-century monastery mound of Kuruhinna Tharaagandu.',
        zh: '造访马尔代夫居民岛，您将真正走进私人度假村无法呈现的迪维希（Dhivehi）本土文化。在托杜岛，您可以骑车穿行于当地农夫精心打理的西瓜与木瓜田，并探访珊瑚石砌成的古代佛教佛塔地基；在拉姆甘岛，更可寻访公元7世纪的 Kuruhinna Tharaagandu 古寺院遗址。',
      },
      {
        en: 'In the late afternoon across every island, local teashops ("Hotaa") serve freshly fried Maldivian short-eats known as Hedhikaa—such as Bajiya (spiced tuna pastries) and Gulha (crispy smoked-tuna dumplings)—paired with black tea. On Fulidhoo and Maafushi, evening cultural gatherings showcase traditional Bodu Beru drumming and Fulidhoo’s unique Langiri dance.',
        zh: '每天下午四点左右，各个居民岛上的本地茶馆（Hotaa）都会飘出传统下午茶点“Hedhikaa”的香气——用烟熏金枪鱼、椰丝与青柠叶制作的酥脆鱼球（Gulha）与三角酥角（Bajiya）配上一杯红茶。而在富力杜岛与马富士岛的夜晚，您还可以欣赏充满生命力的 Bodu Beru 椰木鼓乐与传统舞蹈。',
      },
    ],
    relevantIslands: ['thoddoo', 'fulidhoo', 'laamu-gan', 'maafushi', 'ukulhas'],
    relevantIslandsLabel: {
      en: 'Thoddoo, Fulidhoo, Laamu Gan, Maafushi & Ukulhas',
      zh: '托杜岛、富力杜岛、拉姆甘岛、马富士岛、乌库拉斯岛',
    },
    typicalDuration: {
      en: '1.5 – 3 hours during afternoon or evening',
      zh: '午后或晚间 1.5 – 3 小时',
    },
    typicallyIncluded: {
      en: [
        'Guided village and heritage walk or bicycle plantation tour',
        'Tasting of traditional Maldivian Hedhikaa short-eats or fresh island fruit',
      ],
      zh: [
        '本土向导带领的村落历史漫步或果园自行车骑行',
        '品尝地道马尔代夫下午茶点（Hedhikaa）或现摘热带水果',
      ],
    },
    importantRequirements: {
      en: [
        'Modest dress (covering shoulders and knees) is required during village walks and heritage site visits.',
        'Please ask permission before photographing local residents.',
      ],
      zh: [
        '参访村落、茶馆与历史遗迹时，请穿着遮盖肩膀与膝盖的得体衣物。',
        '拍摄当地居民肖像前请先微笑征得对方同意。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'Fosters genuine cultural exchange and respect between international visitors and Maldivian island communities.',
      zh: '促进国际旅行者与马尔代夫岛民社区之间真诚、互相尊重的文化交流。',
    },
  },
  {
    id: 'exp-beach-relaxation',
    slug: 'bikini-beaches-lagoon-relaxation',
    category: 'beach-relaxation',
    title: {
      en: 'Bikini Beaches, Palm Hammocks & Lagoon Sunset Swims',
      zh: '比基尼白沙滩、椰林吊床与泻湖日落慢生活',
    },
    subtitle: {
      en: 'Uncrowded Coral-Sand Shores & Calm Turquoise Waters Across Six Islands',
      zh: '在细如面粉的珊瑚白沙滩与温暖平静的浅海泻湖中彻底放松身心',
    },
    heroImage: {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Maldives_%28Unsplash_ZEfzyduAyJU%29.jpg/1920px-Maldives_%28Unsplash_ZEfzyduAyJU%29.jpg',
      alt: {
        en: 'Silhouettes of coconut palm trees along a tranquil Maldivian beach at sunset',
        zh: '马尔代夫海滩日落时分静谧的椰林剪影与晚霞',
      },
      credit: 'Photo by Ibrahim Asad (@asadphoto) / Wikimedia Commons (CC0)',
      aspectRatio: '16:9',
    },
    description: [
      {
        en: 'Every inhabited island featured on our platform maintains clearly designated Bikini Beaches where international guests can sunbathe and swim in standard beachwear. Because Maldivian beaches are composed of 100% organic coralline sand ( largely formed by parrotfish grazing on coral), the sand remains remarkably cool underfoot even under the midday equatorial sun.',
        zh: '本平台甄选的每一座居民岛均设有专门划定、风光绝美的比基尼海滩（Bikini Beach），国际游客可在此自由穿着泳装享受日光浴与海泳。由于马尔代夫的沙滩由100%天然珊瑚钙质白沙组成（很大程度上归功于鹦嘴鱼分解珊瑚），即使在赤道正午的阳光下，白沙踩在脚下依然清凉细腻、毫不烫脚。',
      },
      {
        en: 'From the 3-kilometre palm-backed ribbon of Dhigurah Bikini Beach and the 1-kilometre crescent of Ukulhas to the tranquil overwater swings and woven Joali hammocks of Thoddoo and Maafushi, days unfold at an unhurried pace culminating in warm Indian Ocean sunsets.',
        zh: '无论是迪古拉岛长达3公里的原始椰林白沙滩、乌库拉斯1公里长的新月海湾，还是托杜岛与马富士岛海边的传统编织吊床（Joali）与海上秋千，您都可以在温暖平静的果冻海与绚烂的印度洋晚霞中度过真正松弛的海岛假期。',
      },
    ],
    relevantIslands: ['dhigurah', 'ukulhas', 'thoddoo', 'maafushi', 'fulidhoo', 'laamu-gan'],
    relevantIslandsLabel: {
      en: 'All six featured islands (Maafushi, Dhigurah, Fulidhoo, Thoddoo, Ukulhas & Laamu Gan)',
      zh: '全部六座精选居民岛均设专属比基尼海滩',
    },
    typicalDuration: {
      en: 'At your own leisure throughout your stay',
      zh: '入住期间全天候自由享受',
    },
    typicallyIncluded: {
      en: [
        'Complimentary sun loungers, beach umbrellas, and fresh beach towels provided by your guesthouse',
        'Access to non-motorised kayaking and stand-up paddleboards (SUP) on the lagoon',
      ],
      zh: [
        '所住民宿免费提供的沙滩躺椅、遮阳伞与干净沙滩浴巾',
        '可在平静泻湖体验透明皮划艇或立式桨板（SUP）',
      ],
    },
    importantRequirements: {
      en: [
        'Swimwear and bikinis are welcomed within the signposted Bikini Beach zones; please put on a cover-up or t-shirt before walking back into the village streets.',
      ],
      zh: [
        '在标示清晰的比基尼海滩区域内可完全自由穿着比基尼与泳裤；离开海滩返回村落街道前，请穿好外搭罩衫或T恤短裤。',
      ],
    },
    sustainabilityAndSafetyNote: {
      en: 'Protected by outer atoll ring reefs, local island Bikini Beaches offer gentle, wave-free lagoon waters ideal for relaxed swimming.',
      zh: '受外环礁珊瑚堤的天然屏障保护，居民岛比基尼海滩外侧多为平静无浪的浅水泻湖，非常适合安心畅游。',
    },
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}
