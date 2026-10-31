export type Gender = "masculino" | "femenino" | "no binario";

export type FictionalCard = {
  brand: string;
  tier: string;
  number: string;
  holder: string;
  expiry: string;
  cvv: string;
  gradient: string;
  accent: string;
};

export type TimelineEvent = {
  year: number;
  title: string;
  text: string;
};

export type Lore = {
  headline: string;
  paragraphs: string[];
  timeline: TimelineEvent[];
};

export type Identity = {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: Gender;
  age: number;
  birthDate: string;
  zodiac: string;
  city: string;
  country: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  occupation: string;
  company: string;
  education: string;
  maritalStatus: string;
  partner: string | null;
  children: number;
  pets: string;
  languages: string[];
  hobbies: string[];
  traits: string[];
  fear: string;
  quirk: string;
  favorite: string;
  quote: string;
  secret: string;
  savings: string;
  avatar: string;
  card: FictionalCard;
  lore: Lore;
};
