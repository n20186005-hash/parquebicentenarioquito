import { practicalDetails } from "./practical-details";
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
    nearbyIntro: "從二百週年公園搭地鐵，串遊其他公園與歷史城區景點。",
    about: "關於景點",
    design: "歷史與建築觀察",
    walk: "步行遊覽路線",
    photo: "拍攝機位",
    questions: "常見問題",
    source: "景點參觀資料",
    metro: "基多地鐵車站與營運時間",
    publicAccess: "公共空間；周圍室內場館另有入場安排。",
    parkAccess: "公園一般遊覽免費；園內場館與活動可有各自安排。",
    indoorAccess: "請檢視場館公佈的入場方式與票價。",
    checkHours: "出發前請查閱場館的參觀公告。",
    parkHours: "請查閱市府公告及園內場館的開放時間。",
    resized: "縮小尺寸",
  },
};

const publicSquares: LandmarkSlug[] = ["plaza-grande", "la-ronda", "siete-cruces", "plaza-teatro", "san-blas", "san-marcos"];
const parks: LandmarkSlug[] = ["itchimbia", "alameda", "ejido", "guanguiltagua", "arbolito"];
const parkSchedule = "https://quitoinforma.quito.gob.ec/2024/01/11/los-parques-metropolitanos-regresan-a-sus-horarios-habituales/";

const ticketDetails = {
  es: {
    franciscan: "Museo: 09:00–17:00 diario.",
    compania: "Lun–vie 09:30–18:00; sáb y feriados 10:00–16:00; dom 12:00–16:00.",
    city: "Mar–vie 08:30–16:30, último ingreso 16:00; sáb 09:30–19:00, último ingreso 18:00; dom y feriados 09:00–17:30, último ingreso 16:30.",
    urrutia: "Mar–dom 09:00–17:00.",
    capilla: "Mar–dom 10:00–17:00. Cerrado los lunes.",
    teleferiqo: "Lun–jue 10:00–18:00; vie 08:00–18:00; sáb–dom 08:00–19:00. Consulta última venta y último descenso.",
    yaku: "Mar–vie 08:00–16:30 (sep–jun) o 09:00–17:30 (jul–ago); fines de semana y feriados 09:00–17:30.",
  },
  en: {
    franciscan: "Museum: daily 09:00–17:00.",
    compania: "Mon–Fri 09:30–18:00; Sat and holidays 10:00–16:00; Sun 12:00–16:00.",
    city: "Tue–Fri 08:30–16:30, last entry 16:00; Sat 09:30–19:00, last entry 18:00; Sun and holidays 09:00–17:30, last entry 16:30.",
    urrutia: "Tue–Sun 09:00–17:00.",
    capilla: "Tue–Sun 10:00–17:00. Closed Mondays.",
    teleferiqo: "Mon–Thu 10:00–18:00; Fri 08:00–18:00; Sat–Sun 08:00–19:00. Check last ticket sales and descent.",
    yaku: "Tue–Fri 08:00–16:30 (Sep–Jun) or 09:00–17:30 (Jul–Aug); weekends and holidays 09:00–17:30.",
  },
  zh: {
    franciscan: "博物館每日 09:00–17:00。",
    compania: "週一至五 09:30–18:00，週六與假日 10:00–16:00，週日 12:00–16:00。",
    city: "週二至五 08:30–16:30，最後入場 16:00；週六 09:30–19:00，最後入場 18:00；週日與假日 09:00–17:30，最後入場 16:30。",
    urrutia: "週二至日 09:00–17:00。",
    capilla: "週二至日 10:00–17:00；週一休館。",
    teleferiqo: "週一至四 10:00–18:00，週五 08:00–18:00，週六、日 08:00–19:00。請核對最後售票與下山時間。",
    yaku: "週二至五：9 月至翌年 6 月 08:00–16:30，7 至 8 月 09:00–17:30；週末與假日 09:00–17:30。",
  },
};

const verifiedFees = {
  "es": {
    "franciscan": "Adultos nacionales USD 4; visitantes extranjeros USD 6.",
    "compania": "Adultos nacionales USD 3; extranjeros USD 6.",
    "urrutia": "Adultos USD 3; extranjeros USD 4.",
    "yaku": "Tarifas por categoría."
  },
  "en": {
    "franciscan": "Ecuadorian adult admission USD 4; international visitors USD 6.",
    "compania": "Ecuadorian adults USD 3; international adults USD 6.",
    "urrutia": "Adults USD 3; international visitors USD 4.",
    "yaku": "Rates vary by category."
  },
  "zh": {
    "franciscan": "厄瓜多成人票 4 美元、外國訪客票 6 美元。",
    "compania": "厄瓜多成人票 3 美元、外國成人票 6 美元。",
    "urrutia": "成人票 3 美元，外國訪客票 4 美元。",
    "yaku": "票價按類別計算。"
  }
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
    urrutia: details.urrutia,
    "capilla-hombre": details.capilla,
    teleferiqo: details.teleferiqo,
  };
  const schedule = admission[slug as keyof typeof admission];
  const extra = practicalDetails[slug]?.[locale];
  const fees = verifiedFees[locale];
  const byVenue: Partial<Record<LandmarkSlug, string>> = {
    "san-francisco": fees.franciscan,
    compania: fees.compania,
    urrutia: fees.urrutia,
    yaku: fees.yaku,
  };
  const freeMuseum = {
    es: { hours: "Mar–sáb 10:00–17:00; dom y feriados 10:00–16:00.", fee: "Entrada libre." },
    en: { hours: "Tue–Sat 10:00–17:00; Sun and holidays 10:00–16:00.", fee: "Free admission." },
    zh: { hours: "週二至六 10:00–17:00；週日與假日 10:00–16:00。", fee: "免費參觀。" },
  }[locale];
  return {
    title: item.title,
    description: item.intro,
    about: item.about,
    address: landmark.address,
    station: landmark.station,
    transport: item.transport,
    access: extra?.fee ?? byVenue[slug] ?? (slug === "muna" ? freeMuseum.fee : publicSquares.includes(slug) ? labels.publicAccess : isPark ? labels.parkAccess : labels.indoorAccess),
    hours: extra?.hours ?? (slug === "muna" ? freeMuseum.hours : schedule ?? (isPark ? labels.parkHours : labels.checkHours)),
    practicalSource: extra?.source ?? landmark.source,
    sections: [
      { title: labels.design, paragraphs: [item.architecture] },
      { title: labels.walk, paragraphs: [], steps: item.route },
      { kind: "photo", title: labels.photo, paragraphs: [item.photo] },
    ],
    faq: item.faq,
    sources: [
      { name: labels.source, url: landmark.source },
      ...(extra?.source && extra.source !== landmark.source && slug !== "teleferiqo" ? [{ name: labels.checkHours, url: extra.source }] : []),
      { name: labels.metro, url: metro },
      ...(slug === "plaza-grande" ? [{ name: "Quito Informa", url: "https://quitoinforma.quito.gob.ec/2022/04/12/el-monumento-a-la-independencia-se-renueva/" }] : []),
      ...(slug === "teleferiqo" ? [{ name: labels.checkHours, url: "https://teleferico.com.ec/horarios-y-tarifas/" }] : []),
      ...(isPark ? [{ name: labels.parkHours, url: parkSchedule }] : []),
    ],
  };
}
