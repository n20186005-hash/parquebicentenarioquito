import type { Locale } from "@/i18n/translations";
import { landmarks, type LandmarkSlug } from "./landmarks";

const metro = "https://metrodequito.gob.ec/estaciones/";

export const landmarkLabels = {
  es: {
    nearby: "Más lugares para visitar en Quito",
    nearbyIntro: "Combina el Bicentenario con parques y visitas en el centro histórico accesibles en Metro.",
    about: "Acerca de este lugar",
    design: "Historia visible y detalles arquitectónicos",
    walk: "Recorrido a pie",
    photo: "Dónde tomar fotos",
    questions: "Pregunta frecuente",
    source: "Información del lugar",
    metro: "Metro de Quito · estaciones y horarios",
    publicAccess: "Espacio público; recintos interiores con acceso propio.",
    parkAccess: "Paseo por el parque sin entrada general; recintos y actividades pueden tener condiciones propias.",
    indoorAccess: "Consulta las modalidades de visita y las tarifas en la fuente del lugar.",
    checkHours: "Consulta la fuente del lugar antes de salir.",
    parkHours: "Consulta avisos municipales y horarios de los recintos interiores.",
    resized: "Imagen reducida",
  },
  en: {
    nearby: "More places to visit in Quito",
    nearbyIntro: "Pair Bicentenario with parks and stops in the historic centre reachable by Metro.",
    about: "About this place",
    design: "History and architectural details",
    walk: "Walking route",
    photo: "Where to take photos",
    questions: "Frequently asked question",
    source: "Visitor information source",
    metro: "Metro de Quito · stations and hours",
    publicAccess: "Public space. Indoor venues have separate access.",
    parkAccess: "Free general park access. Facilities and activities may have separate conditions.",
    indoorAccess: "Check visitor options and ticket prices with the venue.",
    checkHours: "Check the venue’s visitor information before leaving.",
    parkHours: "Check municipal notices and the hours of any indoor facilities.",
    resized: "Resized image",
  },
  zh: {
    nearby: "基多周邊遊覽",
    nearbyIntro: "從二百周年公園搭地鐵，串遊其他公園與歷史城區景點。",
    about: "關於景點",
    design: "歷史與建築觀察",
    walk: "步行遊覽路線",
    photo: "拍攝機位",
    questions: "常見問題",
    source: "景點參觀資料",
    metro: "基多地鐵車站與營運時間",
    publicAccess: "公共空間；周圍室內場館另有入場安排。",
    parkAccess: "公園一般遊覽免費；園內場館與活動可有各自安排。",
    indoorAccess: "請查看場館公布的入場方式與票價。",
    checkHours: "出發前請查閱場館的參觀公告。",
    parkHours: "請查閱市府公告及園內場館的開放時間。",
    resized: "縮小尺寸",
  },
};

const publicSquares: LandmarkSlug[] = ["plaza-grande", "la-ronda"];
const parks: LandmarkSlug[] = ["itchimbia", "alameda", "ejido"];
const parkSchedule = "https://quitoinforma.quito.gob.ec/2024/01/11/los-parques-metropolitanos-regresan-a-sus-horarios-habituales/";

const ticketDetails = {
  es: {
    franciscan: "Museo: 09:00–17:00 diario. Adultos nacionales USD 4; visitantes extranjeros USD 6.",
    compania: "Lun–vie 09:30–18:00; sáb y feriados 10:00–16:00; dom 12:00–16:00. Adultos nacionales USD 3; extranjeros USD 6.",
    city: "Mar–vie 08:30–16:30, último ingreso 16:00; sáb 09:30–19:00, último ingreso 18:00; dom y feriados 09:00–17:30, último ingreso 16:30.",
    yaku: "Mar–vie 08:00–16:30 (sep–jun) o 09:00–17:30 (jul–ago); fines de semana y feriados 09:00–17:30. Tarifas por categoría.",
  },
  en: {
    franciscan: "Museum: daily 09:00–17:00. Ecuadorian adult admission USD 4; international visitors USD 6.",
    compania: "Mon–Fri 09:30–18:00; Sat and holidays 10:00–16:00; Sun 12:00–16:00. Ecuadorian adults USD 3; international adults USD 6.",
    city: "Tue–Fri 08:30–16:30, last entry 16:00; Sat 09:30–19:00, last entry 18:00; Sun and holidays 09:00–17:30, last entry 16:30.",
    yaku: "Tue–Fri 08:00–16:30 (Sep–Jun) or 09:00–17:30 (Jul–Aug); weekends and holidays 09:00–17:30. Rates vary by category.",
  },
  zh: {
    franciscan: "博物館每日 09:00–17:00。厄瓜多成人票 4 美元、外國訪客票 6 美元。",
    compania: "週一至五 09:30–18:00，週六與假日 10:00–16:00，週日 12:00–16:00。厄瓜多成人票 3 美元、外國成人票 6 美元。",
    city: "週二至五 08:30–16:30，最後入場 16:00；週六 09:30–19:00，最後入場 18:00；週日與假日 09:00–17:30，最後入場 16:30。",
    yaku: "週二至五：9 月至翌年 6 月 08:00–16:30，7 至 8 月 09:00–17:30；週末與假日 09:00–17:30。票價按類別計算。",
  },
};

export function landmarkMap(slug: LandmarkSlug) {
  const { es, address } = landmarks[slug];
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${es.title}, ${address}, Quito, Ecuador`)}`;
}

export function landmarkGuide(slug: LandmarkSlug, locale: Locale) {
  const landmark = landmarks[slug];
  const item = landmark[locale];
  const labels = landmarkLabels[locale];
  const isPark = parks.includes(slug);
  const details = ticketDetails[locale];
  const admission = {
    "san-francisco": details.franciscan,
    compania: details.compania,
    "museo-ciudad": details.city,
    yaku: details.yaku,
  };
  const schedule = admission[slug as keyof typeof admission];
  return {
    title: item.title,
    description: item.intro,
    about: item.about,
    address: landmark.address,
    station: landmark.station,
    transport: item.transport,
    access: publicSquares.includes(slug) ? labels.publicAccess : isPark ? labels.parkAccess : labels.indoorAccess,
    hours: schedule ?? (isPark ? labels.parkHours : labels.checkHours),
    sections: [
      { title: labels.design, paragraphs: [item.architecture] },
      { title: labels.walk, paragraphs: [], steps: item.route },
      { title: labels.photo, paragraphs: [item.photo] },
    ],
    faq: item.faq,
    sources: [
      { name: labels.source, url: landmark.source },
      { name: labels.metro, url: metro },
      ...(isPark ? [{ name: labels.parkHours, url: parkSchedule }] : []),
    ],
  };
}
