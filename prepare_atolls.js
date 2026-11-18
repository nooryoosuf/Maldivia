const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('c:/Users/user/Documents/Maldivia/atolls.json', 'utf8'));

// Metadata map for all 20 atolls with official names, Dhivehi / Traditional names, codes
const atollMeta = {
  'HA': {
    code: 'HA',
    adminCode: 'Haa Alifu (HA)',
    nameEn: 'Haa Alifu Atoll',
    nameZh: '哈阿里夫环礁',
    traditionalEn: 'Thiladhunmathi Uthuruburi',
    traditionalZh: '北提拉顿马蒂传统环礁',
    capital: 'Dhidhdhoo',
    zone: 'north'
  },
  'HDh': {
    code: 'HDh',
    adminCode: 'Haa Dhaalu (HDh)',
    nameEn: 'Haa Dhaalu Atoll',
    nameZh: '哈达卢环礁',
    traditionalEn: 'Thiladhunmathi Dhekunuburi',
    traditionalZh: '南提拉顿马蒂传统环礁',
    capital: 'Kulhudhuffushi',
    zone: 'north'
  },
  'Sh': {
    code: 'Sh',
    adminCode: 'Shaviyani (Sh)',
    nameEn: 'Shaviyani Atoll',
    nameZh: '沙维亚尼环礁',
    traditionalEn: 'Miladhunmadulu Uthuruburi',
    traditionalZh: '北米拉敦马杜鲁传统环礁',
    capital: 'Funadhoo',
    zone: 'north'
  },
  'N': {
    code: 'N',
    adminCode: 'Noonu (N)',
    nameEn: 'Noonu Atoll',
    nameZh: '诺努环礁',
    traditionalEn: 'Miladhunmadulu Dhekunuburi',
    traditionalZh: '南米拉敦马杜鲁传统环礁',
    capital: 'Manadhoo',
    zone: 'north'
  },
  'R': {
    code: 'R',
    adminCode: 'Raa (R)',
    nameEn: 'Raa Atoll',
    nameZh: '拉环礁',
    traditionalEn: 'Maalhosmadulu Uthuruburi',
    traditionalZh: '北马洛斯马杜鲁传统环礁',
    capital: 'Ungoofaaru',
    zone: 'north'
  },
  'B': {
    code: 'B',
    adminCode: 'Baa (B)',
    nameEn: 'Baa Atoll (UNESCO Biosphere Reserve)',
    nameZh: '芭环礁（联合国教科文组织生物圈保护区）',
    traditionalEn: 'Maalhosmadulu Dhekunuburi',
    traditionalZh: '南马洛斯马杜鲁传统环礁',
    capital: 'Eydhafushi',
    zone: 'central'
  },
  'Lh': {
    code: 'Lh',
    adminCode: 'Lhaviyani (Lh)',
    nameEn: 'Lhaviyani Atoll',
    nameZh: '拉薇亚妮环礁',
    traditionalEn: 'Faadhippolhu',
    traditionalZh: '法迪波卢传统环礁',
    capital: 'Naifaru',
    zone: 'central'
  },
  'K': {
    code: 'K',
    adminCode: 'Kaafu (K)',
    nameEn: 'Kaafu Atoll (North & South Malé Atoll)',
    nameZh: '卡夫环礁（北马累与南马累环礁）',
    traditionalEn: 'Malé Atholhu',
    traditionalZh: '马累传统环礁',
    capital: 'Thulusdhoo',
    zone: 'central'
  },
  'AA': {
    code: 'AA',
    adminCode: 'Alifu Alifu (AA)',
    nameEn: 'Alifu Alifu Atoll (North Ari Atoll)',
    nameZh: '阿里夫阿里夫环礁（北阿里环礁）',
    traditionalEn: 'Ari Atholhu Uthuruburi',
    traditionalZh: '北阿里传统环礁',
    capital: 'Rasdhoo',
    zone: 'central'
  },
  'ADh': {
    code: 'ADh',
    adminCode: 'Alifu Dhaalu (ADh)',
    nameEn: 'Alifu Dhaalu Atoll (South Ari Atoll)',
    nameZh: '阿里夫达尔环礁（南阿里环礁）',
    traditionalEn: 'Ari Atholhu Dhekunuburi',
    traditionalZh: '南阿里传统环礁',
    capital: 'Mahibadhoo',
    zone: 'central'
  },
  'V': {
    code: 'V',
    adminCode: 'Vaavu (V)',
    nameEn: 'Vaavu Atoll (Felidhoo Atoll)',
    nameZh: '瓦武环礁（费利杜环礁）',
    traditionalEn: 'Felidhe Atholhu',
    traditionalZh: '费利杜传统环礁',
    capital: 'Felidhoo',
    zone: 'central'
  },
  'M': {
    code: 'M',
    adminCode: 'Meemu (M)',
    nameEn: 'Meemu Atoll',
    nameZh: '美穆环礁',
    traditionalEn: 'Mulaku Atholhu',
    traditionalZh: '穆拉库传统环礁',
    capital: 'Muli',
    zone: 'central'
  },
  'F': {
    code: 'F',
    adminCode: 'Faafu (F)',
    nameEn: 'Faafu Atoll',
    nameZh: '法夫环礁',
    traditionalEn: 'Nilandhe Atholhu Uthuruburi',
    traditionalZh: '北尼兰德传统环礁',
    capital: 'Nilandhoo',
    zone: 'central'
  },
  'Dh': {
    code: 'Dh',
    adminCode: 'Dhaalu (Dh)',
    nameEn: 'Dhaalu Atoll',
    nameZh: '达鲁环礁',
    traditionalEn: 'Nilandhe Atholhu Dhekunuburi',
    traditionalZh: '南尼兰德传统环礁',
    capital: 'Kudahuvadhoo',
    zone: 'central'
  },
  'Th': {
    code: 'Th',
    adminCode: 'Thaa Atoll',
    nameEn: 'Thaa Atoll',
    nameZh: '塔环礁',
    traditionalEn: 'Kolhumadulu',
    traditionalZh: '科卢马杜鲁传统环礁',
    capital: 'Veymandoo',
    zone: 'central'
  },
  'L': {
    code: 'L',
    adminCode: 'Laamu (L)',
    nameEn: 'Laamu Atoll (Haddhunmathi Atoll)',
    nameZh: '拉姆环礁（哈敦马蒂环礁）',
    traditionalEn: 'Haddhunmathi',
    traditionalZh: '哈敦马蒂传统环礁',
    capital: 'Fonadhoo',
    zone: 'south'
  },
  'GA': {
    code: 'GA',
    adminCode: 'Gaafu Alifu (GA)',
    nameEn: 'Gaafu Alifu Atoll (North Huvadhoo)',
    nameZh: '卡夫阿里夫环礁（北胡瓦杜环礁）',
    traditionalEn: 'Huvadhu Atholhu Uthuruburi',
    traditionalZh: '北胡瓦杜传统环礁',
    capital: 'Villingili',
    zone: 'south'
  },
  'GDh': {
    code: 'GDh',
    adminCode: 'Gaafu Dhaalu (GDh)',
    nameEn: 'Gaafu Dhaalu Atoll (South Huvadhoo)',
    nameZh: '卡夫达鲁环礁（南胡瓦杜环礁）',
    traditionalEn: 'Huvadhu Atholhu Dhekunuburi',
    traditionalZh: '南胡瓦杜传统环礁',
    capital: 'Thinadhoo',
    zone: 'south'
  },
  'Gn': {
    code: 'Gn',
    adminCode: 'Gnaviyani (Gn)',
    nameEn: 'Gnaviyani Atoll (Fuvahmulah)',
    nameZh: '加纳维亚尼环礁（富瓦穆拉岛）',
    traditionalEn: 'Fuvahmulah',
    traditionalZh: '富瓦穆拉独岛环礁',
    capital: 'Fuvahmulah',
    zone: 'south'
  },
  'S': {
    code: 'S',
    adminCode: 'Seenu (S)',
    nameEn: 'Seenu Atoll (Addu Atoll)',
    nameZh: '塞努环礁（阿杜环礁）',
    traditionalEn: 'Addu Atholhu',
    traditionalZh: '阿杜传统环礁',
    capital: 'Hithadhoo',
    zone: 'south'
  }
};

const enrichedFeatures = raw.features.map(f => {
  const meta = atollMeta[f.id] || {
    code: f.id,
    adminCode: f.id,
    nameEn: f.properties.name + ' Atoll',
    nameZh: f.properties.name,
    traditionalEn: f.properties.name,
    traditionalZh: f.properties.name,
    capital: '',
    zone: 'central'
  };

  let minLng = 180, maxLng = -180, minLat = 90, maxLat = -90;
  function scan(c) {
    if (typeof c[0] === 'number') {
      minLng = Math.min(minLng, c[0]);
      maxLng = Math.max(maxLng, c[0]);
      minLat = Math.min(minLat, c[1]);
      maxLat = Math.max(maxLat, c[1]);
    } else c.forEach(scan);
  }
  scan(f.geometry.coordinates);

  const centerLng = (minLng + maxLng) / 2;
  const centerLat = (minLat + maxLat) / 2;

  return {
    type: 'Feature',
    id: f.id,
    properties: {
      id: f.id,
      code: f.id,
      name: meta.nameEn,
      name_en: meta.nameEn,
      name_zh: meta.nameZh,
      admin_code: meta.adminCode,
      traditional_en: meta.traditionalEn,
      traditional_zh: meta.traditionalZh,
      capital: meta.capital,
      zone: meta.zone,
      center: [centerLng, centerLat],
      bbox: [minLng, minLat, maxLng, maxLat]
    },
    geometry: f.geometry
  };
});

const output = {
  type: 'FeatureCollection',
  name: 'Maldives_Administrative_Atolls_WGS84',
  crs: {
    type: 'name',
    properties: {
      name: 'urn:ogc:def:crs:OGC:1.3:CRS84'
    }
  },
  attribution: 'Maldives Land and Survey Authority / Geomatics Department, OneMap Maldives GIS. Verified WGS84 / EPSG:4326',
  features: enrichedFeatures
};

fs.writeFileSync('c:/Users/user/Documents/Maldivia/src/data/geo/atolls.json', JSON.stringify(output, null, 2), 'utf8');
console.log('Successfully wrote', enrichedFeatures.length, 'atolls to src/data/geo/atolls.json');
