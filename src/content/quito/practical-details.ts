import type { Locale } from "@/i18n/translations";
import type { LandmarkSlug } from "./landmarks";

type PracticalDetails = { hours?: string; fee?: string; source?: string };
type LocalizedDetails = Record<Locale, PracticalDetails>;

const alabado = "https://alabado.org/planifica-tu-visita/";
const observatory = "https://oaq.epn.edu.ec/museo/index.php/horario-y-tarifas";
const contemporary = "https://museosquito.gob.ec/espacios/centro-de-arte-contemporaneo/";
const cableCar = "https://teleferico.com.ec/horarios-y-tarifas/";

export const practicalDetails: Partial<Record<LandmarkSlug, LocalizedDetails>> = {
  alabado: {
    es: { hours: "Miércoles a domingo, 09:00–17:00. Lunes y martes, con reserva.", fee: "Adultos USD 10, estudiantes con identificación y adultos mayores nacionales USD 5. Menores de 8 años, personas con discapacidad y guías de turismo entran gratis. El último miércoles del mes es gratuito con reserva.", source: alabado },
    en: { hours: "Wednesday to Sunday, 09:00–17:00. Monday and Tuesday by reservation.", fee: "Adults USD 10. Students with ID and Ecuadorian seniors USD 5. Children under eight, people with disabilities and tour guides enter free. The last Wednesday of the month is free with a reservation.", source: alabado },
    zh: { hours: "週三至週日 09:00–17:00。週一、週二須預約。", fee: "成人 10 美元；持證學生及厄瓜多高齡者 5 美元。未滿 8 歲兒童、身心障礙者和導遊免費。每月最後一個週三預約可免費參觀。", source: alabado },
  },
  observatorio: {
    es: { hours: "Museo: lunes a viernes, 09:00–13:00 y 14:00–17:00. Las sesiones nocturnas se programan por separado.", fee: "Entrada general USD 2. Tarifa reducida USD 1 para los grupos que indica el museo; menores de ocho años gratis.", source: observatory },
    en: { hours: "Museum: Monday to Friday, 09:00–13:00 and 14:00–17:00. Night sessions are scheduled separately.", fee: "General admission USD 2. The museum lists USD 1 for eligible groups. Children under eight enter free.", source: observatory },
    zh: { hours: "博物館週一至週五 09:00–13:00、14:00–17:00。夜間觀星另行安排。", fee: "一般門票 2 美元，符合館方優惠資格者 1 美元，未滿 8 歲兒童免費。", source: observatory },
  },
  "arte-contemporaneo": {
    es: { hours: "Miércoles a viernes, 09:00–16:30 (último ingreso 15:45). Fines de semana, feriados y horario de verano, 10:00–17:30 (último ingreso 16:45).", fee: "Entrada libre en el horario publicado.", source: contemporary },
    en: { hours: "Wednesday to Friday, 09:00–16:30 (last entry 15:45). Weekends, public holidays and summer hours, 10:00–17:30 (last entry 16:45).", fee: "Free admission during published hours.", source: contemporary },
    zh: { hours: "週三至週五 09:00–16:30（最後入場 15:45）；週末、假日及暑期 10:00–17:30（最後入場 16:45）。", fee: "公告開放時段免費。", source: contemporary },
  },
  teleferiqo: {
    es: { fee: "Tarifa publicada: adultos USD 9, menores de 18 años USD 7, adultos mayores y personas con discapacidad USD 6,50. Hay tarifas promocionales con cédula ecuatoriana.", source: cableCar },
    en: { fee: "Published rates: adults USD 9, under 18 USD 7, and older adults and visitors with disabilities USD 6.50. Promotional rates are available with Ecuadorian ID.", source: cableCar },
    zh: { fee: "公告票價為成人 9 美元、未滿 18 歲 7 美元、高齡者及身心障礙者 6.50 美元。持厄瓜多身分證可查詢優惠票價。", source: cableCar },
  },
};

export const structureLabels = {
  es: { name: "Nombre del lugar", city: "Ciudad y país", discover: "Explora el lugar", highlights: "Qué observar", hours: "Horario de apertura", fee: "Precio de entrada", transport: "Cómo llegar", notice: "Antes de ir", stay: "Dónde alojarse", address: "Dirección y mapa", metro: "Estación de referencia", official: "Consultar información de visita", officialLodging: "Directorio de alojamientos de Quito Turismo" },
  en: { name: "Attraction name", city: "City and country", discover: "Explore the attraction", highlights: "What to look for", hours: "Opening hours", fee: "Admission", transport: "Getting there", notice: "Before you go", stay: "Where to stay", address: "Address and map", metro: "Metro reference station", official: "Check visitor information", officialLodging: "Quito Turismo accommodation directory" },
  zh: { name: "景點名稱", city: "城市與國家", discover: "探索景點", highlights: "景點特色", hours: "開放時間", fee: "門票價格", transport: "交通方式", notice: "遊覽須知", stay: "住宿建議", address: "交通指南", metro: "參考地鐵站", official: "查閱參觀資料", officialLodging: "基多觀光局住宿名錄" },
};

export const lodgingDirectory = "https://quito-turismo.gob.ec/descargas/DISTINTIVO_Q/directorio_alojamiento.pdf";

export function lodgingAdvice(locale: Locale, station: string) {
  const historic = station === "San Francisco" || station === "La Alameda";
  const north = station === "Iñaquito";
  const copy = {
    es: historic ? "El Centro Histórico es una base práctica para encadenar varias visitas a pie. Antes de reservar, compara la pendiente y el acceso en vehículo desde el alojamiento al punto de partida." : north ? "Compara alojamientos en el entorno de La Carolina si crees combinar este paseo con el Bicentenario. Comprueba el tramo final desde tu alojamiento y prevé un taxi si la ruta sube por Bellavista." : "La Mariscal y el entorno de El Ejido son bases prácticas para enlazar el Metro con otras visitas. Comprueba la salida de estación más cómoda y, cuando haga falta, el punto de recogida en taxi.",
    en: historic ? "The Historic Centre is a practical base for several sights on foot. Before booking, compare gradients and vehicle access between the accommodation and the start of your walk." : north ? "Compare places around La Carolina if pairing this outing with Bicentenario. Check the last leg from your accommodation and allow for a taxi if the route climbs through Bellavista." : "La Mariscal and the El Ejido area are convenient bases for combining the Metro with other visits. Check your station exit and, where needed, a taxi pickup point.",
    zh: historic ? "若要步行串遊多處老城景點，可比較歷史城區的住宿。訂房前留意旅館到路線起點的坡度及車輛接送條件。" : north ? "計畫同遊二百週年公園時，可比較拉卡羅利納公園一帶的住宿。先查宿處到景點的最後一段，若須經貝拉維斯塔上坡，可安排搭車。" : "拉馬里斯卡爾及埃希多公園一帶可作為搭地鐵串遊的住宿區。先確認較方便的地鐵出口，必要時約好計程車接車點。",
  };
  return copy[locale];
}

export const landmarkRatings: Partial<Record<LandmarkSlug, { score: string; count: number; url: string }>> = {
  "san-francisco": { score: "4.5", count: 1731, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d314185-Reviews-Iglesia_y_Convento_de_San_Francisco-Quito_Pichincha_Province.html" },
  "catedral": { score: "4.3", count: 480, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d314605-Reviews-Catedral_Metropolitana_de_Quito-Quito_Pichincha_Province.html" },
  "alameda": { score: "3.7", count: 40, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d590821-Reviews-Parque_La_Alameda-Quito_Pichincha_Province.html" },
  "ejido": { score: "4.0", count: 325, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d315597-Reviews-Parque_El_Ejido-Quito_Pichincha_Province.html" },
  "panecillo": { score: "4.3", count: 1646, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d315509-Reviews-El_Panecillo-Quito_Pichincha_Province.html" },
  "alabado": { score: "4.7", count: 837, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d2215642-Reviews-Museo_Casa_del_Alabado-Quito_Pichincha_Province.html" },
  "capilla-hombre": { score: "4.7", count: 1677, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d1213080-Reviews-La_Capilla_Del_Hombre-Quito_Pichincha_Province.html" },
  "teleferiqo": { score: "4.4", count: 4696, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d602301-Reviews-TeleferiQo_Quito-Quito_Pichincha_Province.html" },
  "muna": { score: "4.4", count: 459, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d314218-Reviews-Museo_Nacional_del_Ecuador-Quito_Pichincha_Province.html" },
  basilica: { score: "4.6", count: 3974, url: "https://www.tripadvisor.com/Attraction_Review-g294308-d318045-Reviews-Basilica_del_Voto_Nacional-Quito_Pichincha_Province.html" },
};

export const landmarkHighlights = {
  "plaza-grande": ["Monumento de 1906, pórtico de Carondelet y Catedral.", "The 1906 monument, Carondelet portico and Cathedral.", "1906 年獨立紀念碑、卡隆德萊特宮柱廊與主教座堂。"],
  "san-francisco": ["Escalinata, fachada y arte de la Escuela Quiteña.", "Monumental steps, church façade and Quito School art.", "大階梯、教堂立面與基多畫派宗教藝術。"],
  basilica: ["Torres neogóticas, arcos apuntados y figuras de fauna.", "Neo-Gothic towers, pointed arches and animal figures.", "新哥德式塔樓、尖拱與動物雕飾。"],
  compania: ["Columnas salomónicas en piedra y retablos dorados.", "Twisted stone columns and gilded altarpieces.", "石雕扭柱與金飾祭壇。"],
  catedral: ["Escalinata, muro lateral blanco y cubiertas escalonadas.", "Staircase, white side elevation and layered roofline.", "廣場階梯、白色側立面與層疊屋頂。"],
  "la-ronda": ["Curvas, balcones y talleres de la calle Morales.", "Bends, balconies and workshops along Calle Morales.", "Morales 街的轉角、陽臺與工坊。"],
  itchimbia: ["Palacio de Cristal y panorámica de cubiertas del centro.", "Crystal Palace and views of the historic rooftops.", "水晶宮鐵構與老城屋脊全景。"],
  alameda: ["Laguna, observatorio y rampa espiral de El Churo.", "Lagoon, observatory and the spiral ramp at El Churo.", "湖泊、天文臺與 El Churo 螺旋坡道。"],
  ejido: ["Arco de La Circasiana y esculturas junto a los senderos.", "La Circasiana arch and sculptures along the paths.", "La Circasiana 石拱與步道雕塑。"],
  "museo-ciudad": ["Patio y salas del antiguo Hospital San Juan de Dios.", "Courtyard and galleries of the former San Juan de Dios hospital.", "舊聖胡安德迪奧斯醫院的庭院與展廳。"],
  yaku: ["Fuentes exteriores y muestras sobre el agua y la ciudad.", "Outdoor fountains and exhibits on water and the city.", "戶外噴泉與水資源、城市生活展覽。"],
  panecillo: ["Virgen alada y contraste entre las vistas al norte y al sur.", "Winged Virgin and contrasting views north and south.", "有翼聖母像與南北兩側不同的城市景觀。"],
  "siete-cruces": ["Cruces de piedra y portadas religiosas de García Moreno.", "Stone crosses and church entrances along García Moreno.", "García Moreno 街上的石十字架與教堂門面。"],
  "santo-domingo": ["Torre, capilla del Rosario y Arco de la Loma.", "Tower, Rosary Chapel and Arco de la Loma.", "塔樓、玫瑰聖母小堂及 Arco de la Loma 拱門。"],
  "la-merced": ["Torre de esquina y cúpula sobre el crucero.", "Corner tower and dome above the crossing.", "街角塔樓及交叉部上方的圓頂。"],
  "plaza-teatro": ["Pórtico y frontón del Teatro Nacional Sucre.", "Sucre National Theatre’s portico and pediment.", "蘇克雷國家劇院的柱廊與山牆。"],
  "san-blas": ["Atrio y escalinata en la entrada norte del casco histórico.", "Church forecourt and steps at the old town’s northern approach.", "老城北側入口的教堂前庭與階梯。"],
  belmonte: ["Graderío circular y arena adaptada para espectáculos.", "Circular seating and an arena adapted for performances.", "環形階梯座席與改作展演的場地。"],
  "san-marcos": ["Atrio de la iglesia y frentes residenciales en Junín.", "Church forecourt and residential façades on Junín.", "教堂前庭與 Junín 街住宅立面。"],
  alabado: ["Colección precolombina, vanos y patios de una casa histórica.", "Pre-Columbian collection and the openings and patios of a historic house.", "前哥倫布時期收藏、歷史宅邸的門窗與庭院。"],
  urrutia: ["Mobiliario, retratos y distribución de una casa quiteña.", "Furniture, portraits and the layout of a Quito home.", "基多故居的傢俱、肖像與房間配置。"],
  "mena-caamano": ["Escenas de cera y pasillos del Centro Cultural Metropolitano.", "Wax scenes and corridors of the Metropolitan Cultural Centre.", "歷史蠟像場景與都會文化中心的走廊。"],
  "arte-contemporaneo": ["Exposiciones y patios del antiguo Hospital Militar.", "Exhibitions and courtyards of the former Military Hospital.", "舊軍事醫院的當代展覽與庭院。"],
  observatorio: ["Torre histórica e instrumentos de astronomía y cartografía.", "Historic tower and instruments for astronomy and mapping.", "歷史觀測塔、天文及測繪儀器。"],
  "san-diego": ["Mausoleos, nichos y escultura funeraria.", "Mausoleums, burial niches and funerary sculpture.", "陵墓、壁龕與喪葬雕塑。"],
  guapulo: ["Santuario franciscano frente a las casas de ladera.", "Franciscan sanctuary set against hillside houses.", "方濟各會聖所與斜坡住宅。"],
  "capilla-hombre": ["Patio monumental, salas y obra de Guayasamín.", "Monumental courtyard, galleries and Guayasamín’s work.", "紀念性庭院、展廳與瓜亞薩明作品。"],
  muna: ["Sala de contexto y colecciones de arte y arqueología.", "Introductory gallery and art and archaeology collections.", "導覽展廳、藝術與考古收藏。"],
  guanguiltagua: ["Senderos entre árboles y claros con vistas urbanas.", "Wooded paths and clearings with city views.", "林間步道與可眺望基多的空地。"],
  teleferiqo: ["Ascenso en cabina y miradores de Cruz Loma.", "Cable car ascent and the Cruz Loma viewpoints.", "纜車上山體驗與 Cruz Loma 觀景點。"],
  arbolito: ["Explanada cívica y entorno de la Casa de la Cultura.", "Civic open space and the Casa de la Cultura surroundings.", "市民綠地與厄瓜多文化之家周邊。"],
} satisfies Record<LandmarkSlug, [string, string, string]>;
