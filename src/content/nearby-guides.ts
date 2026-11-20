import type { Locale } from "@/i18n/translations";

export const nearbyTopics = ["parque-la-carolina", "jardin-botanico-quito"] as const;

const metro = "https://metrodequito.gob.ec/estaciones/";
const parkNotice = "https://quitoinforma.quito.gob.ec/2024/01/11/los-parques-metropolitanos-regresan-a-sus-horarios-habituales/";
const parkWorks = "https://quitoinforma.quito.gob.ec/2026/01/20/un-parque-que-no-se-apaga-la-carolina-mantiene-su-iluminacion-todos-los-dias/";
const gardenVisit = "https://jardinbotanicoquito.com/es/visitas/";
const gardenCollections = "https://jardinbotanicoquito.com/es/ecosistemas-y-jardines/";

export const nearbyPhotos = {
  "parque-la-carolina": {
    src: "/nearby/carolina.jpg", width: 960, height: 540, author: "2210777dak",
    source: "https://commons.wikimedia.org/wiki/File:Parque_La_Carolina_in_Quito.jpg",
  },
  "jardin-botanico-quito": {
    src: "/nearby/botanico.jpg", width: 960, height: 720, author: "David Adam Kess",
    source: "https://commons.wikimedia.org/wiki/File:Jardín_Botánico_de_Quito_(Bonsai)_Parque_La_Carolina.jpg",
  },
};

export const nearbyGuides = {
  "parque-la-carolina": {
    es: {
      title: "Parque La Carolina, Quito",
      description: "Pasea por un parque urbano con praderas, senderos, áreas deportivas y una laguna. Desde el Bicentenario puedes llegar en Metro.",
      sections: [
        { title: "Qué ver", paragraphs: ["Los caminos de La Carolina conectan zonas deportivas, jardines y la laguna. Cerca de las avenidas principales se aprecia el contraste entre el parque y los edificios que lo rodean."] },
        { title: "Paseo recomendado", paragraphs: ["Empieza en la estación La Carolina, dedica un tramo a la laguna y continúa hacia el Jardín Botánico si quieres visitar las colecciones. Reserva tiempo aparte para el ingreso al jardín."] },
      ],
      sources: [{ name: "Quito Informa · horario de parques", url: parkNotice }, { name: "Quito Informa · mantenimiento de La Carolina", url: parkWorks }, { name: "Metro de Quito · estaciones", url: metro }],
    },
    en: {
      title: "La Carolina Park, Quito",
      description: "Explore an urban park with lawns, paths, sports areas and a lagoon. Take the Metro from Bicentenario for a second park stop.",
      sections: [
        { title: "What to see", paragraphs: ["La Carolina’s paths connect sports areas, gardens and the lagoon. The open spaces along the main avenues give a clear view of the surrounding skyline."] },
        { title: "Suggested walk", paragraphs: ["Start at La Carolina station, walk toward the lagoon and continue to the Botanical Garden if you want to see the collections. Allow extra time for the garden’s separate admission."] },
      ],
      sources: [{ name: "Quito Informa · park hours", url: parkNotice }, { name: "Quito Informa · La Carolina maintenance", url: parkWorks }, { name: "Metro de Quito · stations", url: metro }],
    },
    zh: {
      title: "基多拉卡羅利納公園",
      description: "沿草坪、運動區和湖畔步道散步，從二百週年公園可搭地鐵接續遊覽。",
      sections: [
        { title: "園區看點", paragraphs: ["園內步道串起運動區、花園和湖畔。走到靠主要大道的開闊地帶，可以觀察公園綠地與周圍高樓的對比。"] },
        { title: "建議步行路線", paragraphs: ["從 La Carolina 地鐵站出發，先走一段湖畔步道，再前往基多植物園。若想參觀植物收藏，請另留購票入園的時間。"] },
      ],
      sources: [{ name: "基多市府公告：公園開放時間", url: parkNotice }, { name: "基多市府公告：公園維護", url: parkWorks }, { name: "基多地鐵車站", url: metro }],
    },
  },
  "jardin-botanico-quito": {
    es: {
      title: "Jardín Botánico de Quito",
      description: "Visita los orquidearios y las colecciones botánicas dentro de La Carolina. Consulta la entrada, los horarios y la tarifa del jardín.",
      sections: [
        { title: "Orquídeas y ecosistemas andinos", paragraphs: ["El jardín reúne colecciones vivas y recrea ambientes andinos. Sus dos orquidearios ofrecen ambientes de distintas temperaturas. Fíjate en cómo cambian las formas y tamaños de las plantas entre las salas."] },
        { title: "Cómo recorrer el jardín", paragraphs: ["Entra por el acceso señalizado del jardín y consulta el plano en taquilla. Da prioridad a los orquidearios y continúa por los senderos exteriores hacia las colecciones que estén abiertas ese día."] },
      ],
      sources: [{ name: "Jardín Botánico · horarios, entradas y dirección", url: gardenVisit }, { name: "Jardín Botánico · ecosistemas y colecciones", url: gardenCollections }, { name: "Metro de Quito · estaciones", url: metro }],
    },
    en: {
      title: "Quito Botanical Garden",
      description: "Visit orchid houses and botanical collections inside La Carolina Park. Check where to enter, opening hours and garden admission.",
      sections: [
        { title: "Orchids and Andean habitats", paragraphs: ["The garden maintains living collections and recreates Andean habitats. Its two orchid houses offer different temperature conditions. Look for differences in the shapes and sizes of plants in each space."] },
        { title: "How to plan your visit", paragraphs: ["Use the signed garden entrance and check the plan at the ticket desk. Start with the orchid houses, then follow the outdoor paths to the collections open that day."] },
      ],
      sources: [{ name: "Botanical Garden · hours, tickets and address", url: gardenVisit }, { name: "Botanical Garden · habitats and collections", url: gardenCollections }, { name: "Metro de Quito · stations", url: metro }],
    },
    zh: {
      title: "基多植物園",
      description: "走訪拉卡羅利納公園內的蘭花館和植物收藏，出發前核對植物園入口、開放時間與票價。",
      sections: [
        { title: "蘭花與安地斯生境", paragraphs: ["園內儲存活體植物收藏，也重現安地斯山地的部分生境。兩座蘭花館提供不同溫度環境，可以比較各區植物的大小與形態。"] },
        { title: "建議參觀順序", paragraphs: ["依植物園入口指標抵達售票處，先檢視園區圖。優先參觀蘭花館，再走戶外步道，探訪當天開放的植物收藏。"] },
      ],
      sources: [{ name: "植物園官網：開放時間、票價及地址", url: gardenVisit }, { name: "植物園官網：生境與收藏", url: gardenCollections }, { name: "基多地鐵車站", url: metro }],
    },
  },
};

type VisitFacts = { manager: string; address: string; hours: string; fee: string; transit: string };

export const visitFacts: Record<string, Record<Locale, VisitFacts>> = {
  "parque-la-carolina": {
    es: { manager: "Municipio de Quito · EPMMOP", address: "Av. de los Shyris y Av. Naciones Unidas, Quito (sector norte del parque)", hours: "05:00–19:00 según el horario municipal de parques; verifica avisos vigentes.", fee: "Acceso al parque gratuito. Algunas instalaciones tienen acceso independiente.", transit: "Desde El Labrador toma la Línea 1 hacia Quitumbe. Baja en Iñaquito para el extremo norte o en La Carolina para el extremo sur." },
    en: { manager: "Quito Municipality · EPMMOP", address: "Avenida de los Shyris and Avenida Naciones Unidas, Quito (north end)", hours: "05:00–19:00 under the published municipal schedule. Check current notices.", fee: "Free park access. Some facilities have separate admission.", transit: "From El Labrador take Line 1 toward Quitumbe. Use Iñaquito for the north end or La Carolina for the south end." },
    zh: { manager: "基多市政府 · EPMMOP", address: "Av. de los Shyris 與 Av. Naciones Unidas 路口，基多（公園北端）", hours: "市府公佈的常規時段為 05:00–19:00，出發前請查閱最新公告。", fee: "進入公園免費；部分園內設施另設入口。", transit: "從 El Labrador 搭 1 號線往 Quitumbe。前往北端可在 Iñaquito 下車，前往南端可在 La Carolina 下車。" },
  },
  "jardin-botanico-quito": {
    es: { manager: "Jardín Botánico de Quito · Fundación Botánica Andina", address: "Pasaje N34, Rumipamba E6-264 y Av. de los Shyris, dentro de La Carolina", hours: "10:00–16:00 todos los días, según el jardín.", fee: "Adultos USD 5; tarifa para extranjeros USD 6. Otras categorías en la web del jardín.", transit: "Desde El Labrador toma la Línea 1 hacia Quitumbe hasta La Carolina. Sigue la ruta peatonal hasta el acceso de Pasaje N34." },
    en: { manager: "Quito Botanical Garden · Fundación Botánica Andina", address: "Pasaje N34, Rumipamba E6-264 and Avenida de los Shyris, inside La Carolina Park", hours: "10:00–16:00 daily, according to the garden.", fee: "Adults USD 5; international visitor rate USD 6. See the garden website for other categories.", transit: "Take Line 1 from El Labrador toward Quitumbe and get off at La Carolina. Walk to the garden entrance at Pasaje N34." },
    zh: { manager: "基多植物園 · 安地斯植物基金會（Fundación Botánica Andina）", address: "Pasaje N34，Rumipamba E6-264 與 Av. de los Shyris，位於拉卡羅利納公園內", hours: "植物園官網公佈每日 10:00–16:00。", fee: "成人 5 美元，外國遊客票 6 美元；其他票種見植物園官網。", transit: "從 El Labrador 搭 1 號線往 Quitumbe，在 La Carolina 下車，步行至 Pasaje N34 的植物園入口。" },
  },
  "arena-bicentenario": {
    es: { manager: "El organizador de cada evento publica las condiciones de ingreso; el Municipio de Quito comunica operativos y cierres.", address: "Recinto Bicentenario, Av. Amazonas, Quito. Busca la puerta que figure en tu entrada.", hours: "Según el evento.", fee: "Según la convocatoria del organizador.", transit: "Metro Línea 1 hasta El Labrador; sigue el acceso indicado en el aviso del evento." },
    en: { manager: "Each event organizer handles admission. Quito Municipality publishes access and road-closure notices.", address: "Bicentenario grounds, Avenida Amazonas, Quito. Check the gate named on your ticket.", hours: "Set for each event.", fee: "See the event organizer’s announcement.", transit: "Take Metro Line 1 to El Labrador and follow the gate instructions for your event." },
    zh: { manager: "各場活動主辦方發布入場規定；基多市政府公告出入口和道路管制。", address: "基多 Amazonas 大道二百週年園區；按票券標示前往指定入口。", hours: "依各場活動公告。", fee: "依活動主辦方公告。", transit: "搭乘地鐵 1 號線至 El Labrador，再依活動公告前往指定入口。" },
  },
  "como-llegar": {
    es: { manager: "Municipio de Quito · EPMMOP", address: "Av. Amazonas, antiguo aeropuerto Mariscal Sucre, Quito.", hours: "05:00–19:00 según el horario municipal. Consulta cierres temporales.", fee: "Entrada general gratuita.", transit: "Metro Línea 1 hasta El Labrador, en el extremo sur del parque." },
    en: { manager: "Quito Municipality · EPMMOP", address: "Avenida Amazonas, former Mariscal Sucre airport, Quito.", hours: "05:00–19:00 under the published municipal schedule. Check temporary closures.", fee: "Free general admission.", transit: "Metro Line 1 to El Labrador at the south end of the park." },
    zh: { manager: "基多市政府 · EPMMOP", address: "基多 Amazonas 大道，舊蘇克雷元帥機場原址。", hours: "市府公佈的常規時段為 05:00–19:00，請查閱臨時管制公告。", fee: "公園一般入園免費。", transit: "搭乘地鐵 1 號線至園區南端的 El Labrador。" },
  },
};

export const factLabels: Record<Locale, Record<keyof VisitFacts | "basic" | "reviews" | "reviewLink" | "photo", string>> = {
  es: { basic: "Información práctica", manager: "Gestión y acceso", address: "Ubicación", hours: "Horario", fee: "Entrada", transit: "Transporte", reviews: "Opiniones de visitantes", reviewLink: "Ver reseñas y valoración en Google Maps", photo: "Foto" },
  en: { basic: "Visitor information", manager: "Management and access", address: "Location", hours: "Hours", fee: "Admission", transit: "Transport", reviews: "Visitor reviews", reviewLink: "See ratings and reviews on Google Maps", photo: "Photo" },
  zh: { basic: "基本資料", manager: "管理與入場", address: "位置", hours: "開放時間", fee: "門票", transit: "交通", reviews: "遊客評價", reviewLink: "在 Google 地圖檢視評分與評論", photo: "照片" },
};

export const reviewChecked = "2026-11-20";
export const reviewSnapshots: Partial<Record<string, { score: string; count: number; url: string }>> = {
  "parque-la-carolina": {
    score: "4.4", count: 873,
    url: "https://www.tripadvisor.com/Attraction_Review-g294308-d590820-Reviews-Parque_La_Carolina-Quito_Pichincha_Province.html",
  },
  "jardin-botanico-quito": {
    score: "4.4", count: 227,
    url: "https://www.tripadvisor.com/Attraction_Review-g294308-d5893921-Reviews-Jardin_Botanico_de_Quito-Quito_Pichincha_Province.html",
  },
  "como-llegar": {
    score: "4.1", count: 60,
    url: "https://www.tripadvisor.com/Attraction_Review-g294308-d8403949-Reviews-Parque_Bicentenario-Quito_Pichincha_Province.html",
  },
};

export const reviewText = {
  es: { count: "opiniones", checked: "Referencia consultada el", park: "Parque Bicentenario" },
  en: { count: "reviews", checked: "Reference checked on", park: "Parque Bicentenario" },
  zh: { count: "則評論", checked: "查閱日期", park: "基多二百週年公園" },
};
