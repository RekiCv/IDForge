import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import type { FictionalCard, Gender, Identity, Lore, TimelineEvent } from "./types";
import {
  cardBrands,
  childhoodActivities,
  childhoodDetails,
  childhoodTraits,
  companies,
  educationOptions,
  emailDomains,
  favorites,
  fears,
  firstNames,
  hobbies,
  languages,
  lastNames,
  livingWith,
  maritalStatuses,
  occupations,
  partnerNames,
  petOptions,
  places,
  presentDetails,
  quirks,
  quotes,
  savings,
  secrets,
  timelineTitles,
  traits,
  turningEvents,
  turningResults,
} from "./data";

const pick = <T,>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const randInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const pickMany = <T,>(items: readonly T[], count: number): T[] => {
  const pool = [...items];
  const result: T[] = [];
  while (result.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(index, 1)[0]);
  }
  return result;
};

const pad = (value: number): string => value.toString().padStart(2, "0");

const slug = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "");

const randomDigits = (length: number): string =>
  Array.from({ length }, () => randInt(0, 9)).join("");

const luhnValid = (digits: string): boolean => {
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let value = Number(digits[i]);
    if (double) {
      value *= 2;
      if (value > 9) value -= 9;
    }
    sum += value;
    double = !double;
  }
  return sum % 10 === 0;
};

const makeInvalidCardNumber = (): string => {
  const digits = randomDigits(16).split("");
  if (luhnValid(digits.join(""))) {
    digits[15] = String((Number(digits[15]) + 1) % 10);
  }
  return digits.join("").replace(/(.{4})/g, "$1 ").trim();
};

const makeCard = (fullName: string): FictionalCard => {
  const brand = pick(cardBrands);
  const expiryYear = new Date().getFullYear() + randInt(1, 6);
  return {
    brand: brand.name,
    tier: brand.tier,
    number: makeInvalidCardNumber(),
    holder: fullName.toUpperCase(),
    expiry: `${pad(randInt(1, 12))}/${String(expiryYear).slice(-2)}`,
    cvv: randomDigits(3),
    gradient: brand.gradient,
    accent: brand.accent,
  };
};

const zodiacFor = (month: number, day: number): string => {
  const signs: readonly [number, number, string][] = [
    [1, 20, "Capricornio"],
    [2, 19, "Acuario"],
    [3, 21, "Piscis"],
    [4, 20, "Aries"],
    [5, 21, "Tauro"],
    [6, 21, "Géminis"],
    [7, 23, "Cáncer"],
    [8, 23, "Leo"],
    [9, 23, "Virgo"],
    [10, 23, "Libra"],
    [11, 22, "Escorpio"],
    [12, 22, "Sagitario"],
    [12, 22, "Capricornio"],
  ];
  let sign = "Capricornio";
  for (const [m, d, name] of signs) {
    if (month > m || (month === m && day >= d)) sign = name;
  }
  return sign;
};

const makeBirthDate = (age: number): { date: string; month: number; day: number } => {
  const today = new Date();
  const year = today.getFullYear() - age;
  const month = randInt(1, 12);
  const daysInMonth = new Date(year, month, 0).getDate();
  const day = randInt(1, daysInMonth);
  return {
    date: `${pad(day)}/${pad(month)}/${year}`,
    month,
    day,
  };
};

const makeAvatar = (seed: string): string =>
  createAvatar(lorelei, {
    seed,
    radius: 50,
    backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf", "c1f0dc"],
    backgroundType: ["gradientLinear"],
  }).toDataUri();

const makeLore = (identity: Omit<Identity, "lore">): Lore => {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - identity.age;
  const turningAge = Math.max(16, Math.min(identity.age - 2, randInt(17, 34)));
  const turningYear = birthYear + turningAge;
  const midYear = birthYear + Math.max(6, Math.round(identity.age * 0.3));

  const paragraphs = [
    `${identity.firstName} nació en ${identity.city} (${identity.country}) hace ${identity.age} años, en una casa donde ${pick(childhoodDetails)}. Durante la infancia solía ${pick(childhoodActivities)}, y ya entonces ${pick(childhoodTraits)}.`,
    `A los ${turningAge} años, ${pick(turningEvents)}. Aquello le obligó a ${pick(turningResults)}. Desde entonces arrastra la costumbre de no planear demasiado y de guardar los billetes de tren.`,
    `Hoy se dedica a ${identity.occupation} en ${identity.company} y vive en ${identity.city} con ${pick(livingWith)}. ${pick(presentDetails)}`,
    `Su frase de cabecera: ${identity.quote} Quienes le conocen saben que ${identity.quirk}. Lo que casi nadie sabe es que ${identity.secret}.`,
  ];

  const timeline: TimelineEvent[] = [
    {
      year: birthYear,
      title: "El principio",
      text: `Nace en ${identity.city}, ${identity.country}.`,
    },
    {
      year: midYear,
      title: pick(timelineTitles),
      text: pick([
        `Descubre ${pick(identity.hobbies)} y no lo suelta.`,
        `Empieza a pasar los veranos fuera de casa.`,
        `Conoce a ${pick(partnerNames)}, que se queda en su vida.`,
        `Se muda por primera vez a un piso compartido.`,
      ]),
    },
    {
      year: turningYear,
      title: "El giro",
      text: `${pick(turningEvents)}. Decide ${pick(turningResults)}.`,
    },
    {
      year: currentYear,
      title: "El presente",
      text: `Vive en ${identity.city}, se dedica a ${identity.occupation} y ${identity.quirk}.`,
    },
  ].sort((a, b) => a.year - b.year);

  return {
    headline: pick([
      `La vida de ${identity.firstName} en cuatro actos`,
      `El expediente incompleto de ${identity.fullName}`,
      `Breve historia de ${identity.firstName}`,
      `${identity.firstName}, según quienes le conocen`,
      `Una vida que cabe en una servilleta`,
    ]),
    paragraphs,
    timeline,
  };
};

export const generateIdentity = (): Identity => {
  const gender = pick<Gender>(["masculino", "femenino", "no binario"]);
  const firstName = pick(firstNames[gender]);
  const lastName = `${pick(lastNames)} ${pick(lastNames)}`;
  const fullName = `${firstName} ${lastName}`;
  const age = randInt(18, 82);
  const birth = makeBirthDate(age);
  const place = pick(places);
  const postalCode = `${place.postalPrefix}${String(randInt(0, 999)).padStart(3, "0")}`;
  const address = `${pick(place.streets)} ${randInt(1, 180)}, ${randInt(1, 9)}º ${pick(["A", "B", "C", "D"])}`;
  const phone = `+1 (555) 01${pad(randInt(0, 99))}`;
  const email = `${slug(firstName)}.${slug(lastName.split(" ")[0])}${randInt(1, 99)}@${pick(emailDomains)}`;

  const maritalStatus = pick(maritalStatuses[gender]);
  const hasPartner = /pareja|casad|viud/.test(maritalStatus);
  const partner = hasPartner ? pick(partnerNames) : null;
  const children = /casad|viud|divorciad|separ/.test(maritalStatus) ? randInt(0, 3) : randInt(0, 1);

  const base: Omit<Identity, "lore"> = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `id-${Date.now()}-${randomDigits(6)}`,
    createdAt: new Date().toISOString(),
    firstName,
    lastName,
    fullName,
    gender,
    age,
    birthDate: birth.date,
    zodiac: zodiacFor(birth.month, birth.day),
    city: place.city,
    country: place.country,
    address,
    postalCode,
    phone,
    email,
    occupation: pick(occupations),
    company: pick(companies),
    education: pick(educationOptions),
    maritalStatus,
    partner,
    children,
    pets: pick(petOptions),
    languages: Array.from(new Set(["español", ...pickMany(languages, randInt(1, 3))])),
    hobbies: pickMany(hobbies, randInt(3, 4)),
    traits: pickMany(traits, 4),
    fear: pick(fears),
    quirk: pick(quirks),
    favorite: pick(favorites),
    quote: pick(quotes),
    secret: pick(secrets),
    savings: pick(savings),
    avatar: makeAvatar(`${fullName}-${age}-${Math.random().toString(36).slice(2)}`),
    card: makeCard(fullName),
  };

  return { ...base, lore: makeLore(base) };
};
