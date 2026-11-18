import type { PolicyDocument } from '@/types/domain';

export const POLICY_DOCUMENTS: PolicyDocument[] = [
  {
    slug: 'privacy-policy',
    title: {
      en: 'Privacy Policy',
      zh: '隐私政策 (Privacy Policy)',
    },
    subtitle: {
      en: 'How we collect, process, and protect your personal enquiry and itinerary data.',
      zh: '关于我们如何收集、处理与保护您的个人咨询与行程规划数据的说明。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Official Legal Entity Name & Maldives Ministry of Economic Development Registration Number',
        'Registered Data Protection Contact Address & Designated Privacy Officer Email',
        'Specific Statutory Data Retention Period (to be confirmed by legal counsel prior to production launch)',
      ],
      zh: [
        '需补充：公司正式注册法人名称及马尔代夫经济发展部营业执照编号',
        '需补充：注册办公地址与指定数据保护负责人（DPO）官方联系邮箱',
        '需补充：经法务确认的咨询记录具体保存期限',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. Scope & Purpose of Data Collection',
          zh: '1. 数据收集的范围与目的',
        },
        body: [
          {
            en: 'When you submit a trip planning request or property enquiry on this platform, we collect only the information you explicitly provide: your full name, email address, country of residence, preferred language, planned travel dates, guest count, and selected Maldivian islands, guesthouses, or marine experiences.',
            zh: '当您在本平台提交行程规划需求或民宿咨询表单时，我们仅收集您主动填写的必要信息：姓名、电子邮箱、常住国家/地区、语言偏好、计划出行日期、同行人数，以及您感兴趣的马尔代夫居民岛、民宿或出海体验项目。',
          },
          {
            en: 'This data is used strictly to verify real-time accommodation availability, coordinate inter-atoll transfer schedules (speedboats or domestic flights), and prepare your requested travel quotation.',
            zh: '上述信息仅用于为您向马尔代夫认证民宿核实实时房态、协调岛际交通（快艇或内陆航班）班次，并向您发送定制报价单。',
          },
        ],
      },
      {
        heading: {
          en: '2. Sharing with Verified Maldivian Properties & Transfer Operators',
          zh: '2. 与马尔代夫认证民宿及接驳运营商的信息共享',
        },
        body: [
          {
            en: 'To check availability or secure a reservation on your behalf, relevant travel details (dates, guest count, and arrival flight timings once confirmed) are shared only with the specific Maldivian guesthouses and licensed transfer operators included in your itinerary.',
            zh: '为核实房态或按您的指示锁定预订，相关的出行日期与人数（以及确认预订后的航班接机信息）仅会提供给您所选定的马尔代夫合法持牌民宿及快艇/内陆航空接驳方。我们绝不向任何无关第三方出售或出租您的个人信息。',
          },
        ],
      },
      {
        heading: {
          en: '3. Your Privacy Rights',
          zh: '3. 您的个人数据权利',
        },
        body: [
          {
            en: 'You may request access to, correction of, or deletion of your enquiry records at any time by contacting our support desk with your Enquiry Reference Code.',
            zh: '您可随时凭咨询参考编号（Reference Code）联系我们的客服团队，要求查询、更正或彻底删除您的咨询记录。',
          },
        ],
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: {
      en: 'Terms and Conditions',
      zh: '网站使用与服务条款 (Terms & Conditions)',
    },
    subtitle: {
      en: 'Conditions governing the use of the Maldivia platform, editorial content, and enquiry services.',
      zh: '规范使用本平台、编辑级出行指南及行程咨询服务的条款。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Official Registered Company Name & Maldivian Tourism / Travel Agency Licence Details',
        'Governing Law & Exclusive Court Jurisdiction Clause (awaiting legal counsel sign-off)',
      ],
      zh: [
        '需补充：公司正式注册名称及马尔代夫旅游部旅行社许可证号',
        '需补充：适用法律与管辖法院条款（待法务最终审定）',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. Platform Role & Enquiry Nature',
          zh: '1. 平台定位与咨询性质',
        },
        body: [
          {
            en: 'This website operates as a curated Maldives travel information and itinerary planning platform. Submitting an enquiry or building a draft in the Trip Planner constitutes a request for availability verification and quotation—it does not create an instant binding reservation until confirmed in writing.',
            zh: '本网站为马尔代夫居民岛旅行指南与定制咨询平台。在网站提交咨询表单或使用“行程规划器”生成草案仅代表您发起房态核实与询价请求，在收到书面确认单并完成约定预订流程前，不构成即时生效的住宿合同。',
          },
        ],
      },
      {
        heading: {
          en: '2. Accuracy of Property & Transfer Information',
          zh: '2. 民宿与交通信息的准确性',
        },
        body: [
          {
            en: 'All property profiles, island guides, and transfer durations are researched from verified sources. However, inter-island speedboat schedules and marine excursions remain subject to prevailing weather, sea conditions, and operator adjustments.',
            zh: '本平台展示的所有民宿档案、海岛数据与快艇航程均基于严谨核实的信息编写。但海上快艇时刻与出海活动受实时天气、海况及运营商调度影响可能发生变动，最终以您的出行确认单为准。',
          },
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: {
      en: 'Cookie Policy',
      zh: 'Cookie 与本地存储政策 (Cookie Policy)',
    },
    subtitle: {
      en: 'Transparent explanation of browser storage and cookies used on this website.',
      zh: '清晰说明本网站所使用的浏览器本地存储与 Cookie 机制。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Third-Party Analytics Provider List (if optional analytics scripts are enabled post-launch)',
      ],
      zh: [
        '需补充：如正式上线后启用第三方统计脚本，需在此列明具体服务商名称',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. Essential & Functional Storage',
          zh: '1. 必要与功能性本地存储',
        },
        body: [
          {
            en: 'We use lightweight browser local storage to remember your selected language (`en` or `zh`), your Cookie Consent preferences, and the islands/guesthouses you add to your interactive Trip Planner so your draft is not lost as you browse between pages.',
            zh: '我们使用轻量级浏览器本地存储（Local Storage）来保存您的语言偏好（英文 / 简体中文）、Cookie 授权状态，以及您在“行程规划器”中添加的居民岛与民宿清单，确保您在浏览不同页面时行程草案不会丢失。',
          },
        ],
      },
      {
        heading: {
          en: '2. Consent-Based Optional Analytics',
          zh: '2. 基于用户授权的可选分析统计',
        },
        body: [
          {
            en: 'Optional privacy-conscious analytics are disabled by default until you explicitly opt in via our Cookie Preferences interface.',
            zh: '任何非必要的访问统计功能默认均处于关闭状态，仅在您通过“Cookie 偏好设置”主动勾选同意后方可启用。',
          },
        ],
      },
    ],
  },
  {
    slug: 'cookie-preferences',
    title: {
      en: 'Cookie Preferences',
      zh: 'Cookie 偏好设置 (Cookie Preferences)',
    },
    subtitle: {
      en: 'Review and manage your browser storage and consent settings at any time.',
      zh: '随时查看并管理您的浏览器存储与隐私授权偏好。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [],
      zh: [],
    },
    sections: [
      {
        heading: {
          en: 'Interactive Consent Controls',
          zh: '交互式隐私与存储控制',
        },
        body: [
          {
            en: 'Use the interactive Cookie Preferences control panel on this page (or the "Cookie Preferences" button in the footer) to toggle functional and analytics preferences at any time.',
            zh: '您可直接使用本页下方的交互式控制面板（或点击网站底部“Cookie 偏好设置”按钮）随时开启或关闭功能性存储与分析选项。',
          },
        ],
      },
    ],
  },
  {
    slug: 'booking-policy',
    title: {
      en: 'Booking Policy',
      zh: '预订政策 (Booking Policy)',
    },
    subtitle: {
      en: 'How enquiries transition into verified guesthouse and transfer reservations.',
      zh: '从提交行程咨询到确认民宿房间与快艇接驳的完整流程说明。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Official Merchant Payment Gateway & Bank Account Details',
        'Deposit Percentage & Balance Due Timeline (to be finalised by business owner)',
      ],
      zh: [
        '需补充：公司官方收款银行账户及持牌支付网关信息',
        '需补充：预订定金比例与尾款支付时间节点（待业主最终确认）',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. Verification-First Quotation Process',
          zh: '1. “先核实、后报价”的透明预订流程',
        },
        body: [
          {
            en: 'Unlike automated aggregators that display cached or outdated inventory, every enquiry submitted on our platform is checked directly against current room availability at the selected Maldivian guesthouse and synchronised with scheduled speedboat or domestic flight seats.',
            zh: '不同于展示缓存或过期房态的模板网站，您在本平台提交的每一份行程需求，均由团队直接与对应的马尔代夫居民岛民宿核实实时房态，并同步确认您的国际航班能否衔接当日快艇或内陆航班。',
          },
        ],
      },
      {
        heading: {
          en: '2. Itemised Taxes & Fees',
          zh: '2. 税费与接驳费用透明列明',
        },
        body: [
          {
            en: 'All written quotations clearly itemise room rates, meal plans, Maldivian Tourism Goods & Services Tax (17% TGST), Service Charge (10%), statutory Green Tax, and round-trip airport transfers.',
            zh: '所有正式书面报价单均会清晰分项列明：房费、餐标、马尔代夫17%旅游商品服务税（TGST）、10%服务费、政府法定绿色税（Green Tax）以及往返机场快艇/内陆机票接驳费用，绝无隐形消费。',
          },
        ],
      },
    ],
  },
  {
    slug: 'cancellation-and-refund-policy',
    title: {
      en: 'Cancellation and Refund Policy',
      zh: '取消与退改政策 (Cancellation & Refund Policy)',
    },
    subtitle: {
      en: 'How property-specific cancellation windows, weather disruptions, and refunds are handled.',
      zh: '关于各民宿具体退改期限、不可抗力天气影响及退款处理的原则说明。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Standard Agency Cancellation Notice Periods & Administrative Fee Schedule',
        'Refund Processing Timeframe & Currency Settlement Terms',
      ],
      zh: [
        '需补充：平台标准免费取消天数规定及退改手续费标准',
        '需补充：退款原路退回的处理工作日时限说明',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. Property-Specific Cancellation Terms',
          zh: '1. 民宿特定退改条款',
        },
        body: [
          {
            en: 'Each featured Maldivian property (Kaani Palm Beach, Bliss Dhigurah, Kinan Retreat, Karaa Village, Coral Reef View Inn, and Reveries Diving Village) applies seasonal cancellation terms depending on low season, high season, and peak festive dates. The exact verified cancellation conditions for your chosen dates are provided in writing on your quotation prior to any commitment.',
            zh: '六家精选马尔代夫民宿（Kaani Palm Beach、Bliss Dhigurah、Kinan Retreat、Karaa Village、Coral Reef View Inn 与 Reveries Diving Village）在不同季节（淡季、旺季及跨年节庆高峰期）执行各自的退改规则。在您确认任何预订前，您的书面报价单中均会附带所选日期对应的准确退改条款。',
          },
        ],
      },
      {
        heading: {
          en: '2. Weather & Maritime Transfer Disruptions',
          zh: '2. 天气与海事交通延误处理',
        },
        body: [
          {
            en: 'In the event that the Maldives National Meteorological Centre (MET Office) or Coast Guard issues a maritime travel advisory affecting inter-atoll speedboat operations, we coordinate directly with your guesthouse and transfer operator to reschedule transfers or adjust nights.',
            zh: '若遇马尔代夫国家气象局（MET Office）或海岸警卫队发布海事气象预警导致快艇停航，我们将第一时间协调所住民宿与船运公司为您调整接驳方案或顺延住宿安排。',
          },
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: {
      en: 'Disclaimer',
      zh: '免责声明 (Disclaimer)',
    },
    subtitle: {
      en: 'Important disclosures regarding marine wildlife sightings, ocean activities, and official immigration rules.',
      zh: '关于野生海洋生物观测、水上活动安全及官方入境法规的重要声明。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Formal Limitation of Liability Clause (subject to Maldivian legal counsel review)',
      ],
      zh: [
        '需补充：经马尔代夫执业律师审定的正式责任限制条款文本',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. Wild Marine Life Sightings',
          zh: '1. 野生海洋生物自然出没声明',
        },
        body: [
          {
            en: 'Whale sharks in South Ari Atoll, manta rays in North Ari Atoll, sea turtles on Thoddoo, and stingrays on Fulidhoo are 100% wild marine animals living in the open Indian Ocean. While our featured islands are located in the premier year-round habitats for these species, sightings on any single excursion depend on natural ocean conditions and can never be artificially guaranteed.',
            zh: '南阿里环礁的鲸鲨、北阿里环礁的礁蝠鲼、托杜岛的海龟及富力杜岛的黄貂鱼均为生活在广阔印度洋中的100%纯野生海洋生物。尽管我们精选的居民岛位于这些物种常年栖息的核心海域，但单次出海能否偶遇仍取决于当日自然洋流与海洋环境，无法作出人工绝对保证。',
          },
        ],
      },
      {
        heading: {
          en: '2. Official Government Entry Requirements',
          zh: '2. 官方入境与签证法规',
        },
        body: [
          {
            en: 'Entry rules, IMUGA declaration requirements, and tax rates are set by the Government of the Republic of Maldives (Maldives Immigration and MIRA). Travellers should always verify their passport validity before departure.',
            zh: '入境政策、IMUGA 电子申报要求及税率由马尔代夫共和国政府（马尔代夫移民局与税务局 MIRA）制定，旅客在出发前请务必核实个人护照有效期。',
          },
        ],
      },
    ],
  },
  {
    slug: 'accessibility-statement',
    title: {
      en: 'Accessibility Statement',
      zh: '无障碍声明 (Accessibility Statement)',
    },
    subtitle: {
      en: 'Our commitment to WCAG 2.2 AA digital accessibility and transparent physical island accessibility information.',
      zh: '我们对 WCAG 2.2 AA 网页无障碍标准的承诺，以及关于马尔代夫居民岛实地无障碍环境的透明说明。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [],
      zh: [],
    },
    sections: [
      {
        heading: {
          en: '1. Digital Accessibility (WCAG 2.2 AA Target)',
          zh: '1. 网站数字无障碍设计（对标 WCAG 2.2 AA 标准）',
        },
        body: [
          {
            en: 'We have engineered this website to conform to Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards. Features include semantic HTML5 landmarks, keyboard-navigable menus and tabs, high-contrast typography (#252B2D Charcoal on #F8F6F0 Warm Ivory and #123B4A Deep Ocean Blue), visible focus rings (#F47732 Orange), descriptive bilingual image alt attributes, and full support for `prefers-reduced-motion`.',
            zh: '本网站严格按照 Web 内容无障碍指南（WCAG 2.2 AA 级）标准设计开发，支持语义化 HTML5 结构、全键盘导航、高对比度文字配色、清晰的焦点高亮边框、中英双语图片替代文本（Alt Text）以及减弱动态效果（prefers-reduced-motion）模式。',
          },
        ],
      },
      {
        heading: {
          en: '2. Physical Island & Boat Transfer Accessibility',
          zh: '2. 海岛实地环境与交通无障碍建议',
        },
        body: [
          {
            en: 'Inhabited Maldivian islands have unpaved coral-sand streets, and boarding speedboats requires stepping between a jetty and a vessel. For travellers seeking the smoothest step-free transfer, we highlight Reveries Diving Village on Laamu Gan (accessible via domestic flight to Kadhdhoo KDO followed by a paved road transfer) and Kaani Palm Beach on Maafushi (equipped with an internal passenger elevator).',
            zh: '马尔代夫大多数居民岛为天然珊瑚沙路面，且上下海上快艇需跨越码头台阶。对于行动不便或携高龄长辈出行的旅客，我们特别推荐拉姆甘岛的 Reveries Diving Village（内陆飞机落地后全程柏油公路专车直达，无需乘船）以及马富士岛配备客用电梯的 Kaani Palm Beach。',
          },
        ],
      },
    ],
  },
  {
    slug: 'travel-insurance-information',
    title: {
      en: 'Travel Insurance Information',
      zh: '旅行与潜水保险指南 (Travel Insurance Information)',
    },
    subtitle: {
      en: 'Essential coverage recommendations for inter-atoll travel, snorkelling, and scuba diving in the Maldives.',
      zh: '前往马尔代夫进行跨环礁旅行、浮潜及水肺深潜的核心保险配置建议。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [],
      zh: [],
    },
    sections: [
      {
        heading: {
          en: '1. Why Comprehensive Travel Insurance is Essential',
          zh: '1. 为什么强烈建议配置综合境外旅行险',
        },
        body: [
          {
            en: 'Because the Maldives is an island archipelago scattered across 800 kilometres of the Indian Ocean, any serious medical emergency on an outer island requires speedboat or air ambulance transfer to Malé (IGMH or ADK Hospital). We strongly recommend that all travellers obtain comprehensive international travel insurance prior to departure.',
            zh: '由于马尔代夫是由散布在印度洋上的众多珊瑚岛组成的群岛国家，若在外环礁岛屿发生严重医疗状况，通常需要调用快艇或水上飞机/医疗包机转运至首都马累的大型医院（IGMH 或 ADK 医院）。因此我们强烈建议所有旅客在出发前购买涵盖紧急医疗转运的综合境外旅行保险。',
          },
        ],
      },
      {
        heading: {
          en: '2. Scuba Diving & Hyperbaric Chamber Coverage',
          zh: '2. 水肺深潜专项保险（DAN / 美亚等潜水险）',
        },
        body: [
          {
            en: 'If you plan to scuba dive at depth across South Malé, Ari, Vaavu, or Laamu Atolls, ensure your policy explicitly covers scuba diving to your certified depth (e.g., 18 m or 30 m) and includes hyperbaric (decompression) chamber treatment and marine evacuation.',
            zh: '如果您计划在马尔代夫参加水肺深潜（Scuba Diving），请务必确认您的保单明确包含您所持证书深度的潜水意外保障（如18米或30米深度）以及高压氧舱（减压舱）治疗与海上搜救转运费用（推荐配置 DAN 潜水险或包含高风险涉水运动的专项旅游险）。',
          },
        ],
      },
    ],
  },
  {
    slug: 'complaints-and-customer-support-policy',
    title: {
      en: 'Complaints and Customer Support Policy',
      zh: '客户支持与投诉处理政策 (Customer Support Policy)',
    },
    subtitle: {
      en: 'How we assist travellers before, during, and after their Maldives island journey.',
      zh: '我们在行前咨询、在岛期间及行程结束后的客户支持与问题解决机制。',
    },
    lastReviewed: '2026-10-15',
    requiresBusinessInputFlags: {
      en: [
        'Official Customer Support Escalation Email & Maldives Duty Phone / WeChat Service Account',
        'Regulatory Dispute Resolution Body Reference (Maldives Ministry of Tourism)',
      ],
      zh: [
        '需补充：官方客户服务监督邮箱、马尔代夫本地值班电话及企业微信客服号',
        '需补充：马尔代夫旅游部（Ministry of Tourism）官方争议调解备案信息',
      ],
    },
    sections: [
      {
        heading: {
          en: '1. On-Island Issue Resolution',
          zh: '1. 在岛期间的即时响应机制',
        },
        body: [
          {
            en: 'If any aspect of your room, meal plan, or scheduled transfer does not match your confirmed itinerary while you are in the Maldives, please notify both the guesthouse front desk and our support team immediately so the issue can be rectified on the spot.',
            zh: '在您入住马尔代夫居民岛期间，若遇到任何房型、餐标或接驳安排与确认单不符的情况，请第一时间告知民宿前台并同步联系我们的客服团队，以便我们在您在岛期间即刻协调解决。',
          },
        ],
      },
      {
        heading: {
          en: '2. Formal Written Feedback & Review Process',
          zh: '2. 正式书面反馈与核查流程',
        },
        body: [
          {
            en: 'Written complaints or feedback referencing your Enquiry / Booking Reference Code are logged and reviewed directly with the respective property management.',
            zh: '任何附带咨询/预订参考编号（Reference Code）的书面反馈或投诉均会被正式登记，并由我们与相关民宿管理层逐项核查回复。',
          },
        ],
      },
    ],
  },
];

export function getPolicyBySlug(slug: string): PolicyDocument | undefined {
  return POLICY_DOCUMENTS.find((p) => p.slug === slug);
}
