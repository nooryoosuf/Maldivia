export type Locale = 'en' | 'zh';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface LocalizedStringArray {
  en: string[];
  zh: string[];
}

export interface VerifiedImage {
  url: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  credit?: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1' | '4:5';
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Atoll {
  id: string;
  slug: string;
  officialName: LocalizedText;
  administrativeCode: string; // e.g. Kaafu (K), Alif Alif (AA), Alif Dhaal (ADh), Vaavu (V)
  traditionalName: LocalizedText;
  description: LocalizedText;
  coordinates: Coordinates;
  distanceFromMaleKm: string;
  knownFor: LocalizedStringArray;
}

export interface TransferOption {
  method: 'speedboat' | 'public_ferry' | 'domestic_flight_speedboat';
  methodLabel: LocalizedText;
  duration: LocalizedText;
  frequencySummary: LocalizedText;
  departurePoint: LocalizedText;
  notes?: LocalizedText;
}

export interface Destination {
  id: string;
  slug: string;
  name: LocalizedText;
  atollId: string;
  atollName: LocalizedText;
  administrativeAtoll: string;
  coordinates: Coordinates;
  islandDimensions: LocalizedText;
  distanceFromAirport: LocalizedText;
  heroImage: VerifiedImage;
  gallery: VerifiedImage[];
  shortSummary: LocalizedText;
  editorialDescription: LocalizedText[];
  transferOptions: TransferOption[];
  activities: LocalizedStringArray;
  attractions: {
    title: LocalizedText;
    description: LocalizedText;
  }[];
  visitorInformation: {
    bikiniBeach: LocalizedText;
    houseReef: LocalizedText;
    atmAndCurrency: LocalizedText;
    medicalFacility: LocalizedText;
    localCultureNote: LocalizedText;
  };
  featured: boolean;
}

export interface RoomCategory {
  name: LocalizedText;
  occupancy: LocalizedText;
  bedConfiguration?: LocalizedText;
  viewType?: LocalizedText;
  verifiedFacilities: LocalizedStringArray;
  description: LocalizedText;
}

export interface Guesthouse {
  id: string;
  slug: string;
  officialName: string;
  localizedSubtitle: LocalizedText;
  destinationSlug: string;
  islandName: LocalizedText;
  atollName: LocalizedText;
  coordinates: Coordinates;
  heroImage: VerifiedImage;
  gallery: VerifiedImage[];
  conciseDescription: LocalizedText;
  editorialOverview: LocalizedText[];
  verifiedHighlights: LocalizedStringArray;
  propertyCategory: LocalizedText;
  totalRoomsInfo?: LocalizedText;
  roomTypes: RoomCategory[];
  propertyAmenities: LocalizedStringArray;
  diningInformation: {
    restaurantName?: string;
    summary: LocalizedText;
    dietaryAndHalalNote: LocalizedText;
  };
  accessibilityInformation: LocalizedText;
  locationAndTransfer: {
    islandLocationNote: LocalizedText;
    distanceFromAirport: LocalizedText;
    transferSummary: LocalizedText;
    transferMethods: TransferOption[];
    transferArrangementNote: LocalizedText;
  };
  nearbyAttractions: {
    name: LocalizedText;
    distanceOrNote: LocalizedText;
  }[];
  importantGuestInformation: LocalizedStringArray;
  officialContact: {
    websiteUrl?: string;
    officialPhone?: string;
    officialEmail?: string;
    address: string;
    bookingMethod: LocalizedText;
    cancellationPolicyNote: LocalizedText;
  };
  featured: boolean;
}

export interface Experience {
  id: string;
  slug: string;
  category:
    | 'snorkelling'
    | 'scuba-diving'
    | 'sandbank'
    | 'dolphin-cruise'
    | 'sunset-fishing'
    | 'island-hopping'
    | 'cultural'
    | 'beach-relaxation';
  title: LocalizedText;
  subtitle: LocalizedText;
  heroImage: VerifiedImage;
  description: LocalizedText[];
  relevantIslands: string[]; // destination slugs
  relevantIslandsLabel: LocalizedText;
  typicalDuration?: LocalizedText;
  typicallyIncluded: LocalizedStringArray;
  importantRequirements: LocalizedStringArray;
  sustainabilityAndSafetyNote: LocalizedText;
}

export interface TravelGuideArticle {
  id: string;
  slug: string;
  category:
    | 'arrival-transfers'
    | 'practical-info'
    | 'culture-etiquette'
    | 'weather-safety';
  categoryLabel: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  heroImage: VerifiedImage;
  lastReviewedDate: string; // YYYY-MM-DD
  readingTimeMinutes: number;
  keyTakeaways: LocalizedStringArray;
  sections: {
    heading: LocalizedText;
    paragraphs: LocalizedText[];
    bulletPoints?: LocalizedStringArray;
  }[];
  officialReferenceUrl?: string;
  officialReferenceLabel?: LocalizedText;
}

export interface PolicyDocument {
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  lastReviewed: string;
  requiresBusinessInputFlags: LocalizedStringArray;
  sections: {
    heading: LocalizedText;
    body: LocalizedText[];
    bullets?: LocalizedStringArray;
  }[];
}

export interface EnquiryPayload {
  fullName: string;
  email: string;
  countryOfResidence: string;
  preferredLanguage: Locale;
  arrivalDate: string;
  departureDate: string;
  adults: number;
  children: number;
  preferredDestinationOrGuesthouse?: string;
  selectedGuesthouses?: string[];
  selectedDestinations?: string[];
  interestedExperiences: string[];
  additionalRequirements?: string;
  privacyConsent: boolean;
  honeypot?: string;
}

export interface StoredEnquiry extends EnquiryPayload {
  id: string;
  referenceCode: string;
  createdAt: string;
  status: 'received' | 'in_review' | 'quoted' | 'archived';
  ipHash?: string;
}

export interface AccommodationProperty {
  id: string;
  officialName: string;
  propertyType: 'guesthouse' | 'resort' | 'hotel';
  island: string;
  islandSlug?: string;
  atollCode: string; // e.g. 'K', 'AA', 'ADh', 'V', 'B', 'L'
  atollId: string;
  coordinates?: Coordinates;
  registrationStatus: 'registered' | 'operating' | 'pending';
  featuredStatus: 'featured' | 'standard';
  availabilityStatus: 'connected' | 'on_request' | 'unavailable';
  rooms?: number;
  beds?: number;
  verifiedSource: string;
  slug?: string;
  heroImage?: string;
  startingPriceUsd?: number;
}

export interface AtollAccommodationStats {
  atollCode: string;
  atollName: LocalizedText;
  adminCode: string;
  registeredGuesthouses: number;
  registeredResorts: number;
  registeredHotels: number;
  totalRegisteredFacilities: number;
  islandsWithAccommodation: number;
  guesthouseBeds: number;
  resortBeds: number;
  hotelBeds: number;
  totalBeds: number;
  featuredGuesthouses: number;
  availableGuesthouses: number;
  dataSource: string;
  lastVerifiedDate: string;
  featuredIslands: {
    slug: string;
    name: LocalizedText;
    coordinates: Coordinates;
    guesthouseCount: number;
  }[];
}
