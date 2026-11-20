import { nearbyGuides, nearbyTopics } from "./nearby-guides";
import type { Locale } from "@/i18n/translations";

export const locales = ["en", "es", "zh"] as const;
export const topics = ["arena-bicentenario", "como-llegar", ...nearbyTopics] as const;
export type Topic = (typeof topics)[number];

export function guidePath(locale: Locale, topic: Topic) {
  return `/${locale}/guide/${topic}`;
}

const parkMap = "https://maps.app.goo.gl/6nQEPT1UWiVMPZDH8";
const city = "https://quitoinforma.quito.gob.ec";
const metro = "https://metrodequito.gob.ec/estaciones/";
const gates = `${city}/2022/06/08/el-parque-bicentenario-tiene-6-accesos-operativos/`;
const closures = `${city}/2026/08/28/accesos-al-parque-bicentenario-estaran-cerrados-temporalmente-durante-el-festival-ftc-live-al-parque/`;

export const guideLabels = {
  es: { home: "Parque Bicentenario", guides: "Guías de visita", related: "Planifica el resto de tu visita", map: "Abrir Google Maps", sources: "Fuentes oficiales", languages: "Idiomas" },
  en: { home: "Parque Bicentenario", guides: "Visit guides", related: "Plan the rest of your visit", map: "Open Google Maps", sources: "Official sources", languages: "Languages" },
  zh: { home: "基多二百周年公園", guides: "遊覽指南", related: "繼續規劃行程", map: "開啟 Google 地圖", sources: "官方資料來源", languages: "語言" },
} satisfies Record<Locale, Record<string, string>>;

type Guide = {
  title: string;
  description: string;
  sections: { title: string; paragraphs: string[]; steps?: string[] }[];
  sources: { name: string; url: string }[];
};

export const guideMaps: Record<Topic, string> = {
  "arena-bicentenario": "https://www.google.com/maps/search/?api=1&query=Arena+Bicentenario%2C+Quito%2C+Ecuador",
  "como-llegar": parkMap,
  "parque-la-carolina": "https://www.google.com/maps/search/?api=1&query=Parque+La+Carolina%2C+Quito",
  "jardin-botanico-quito": "https://www.google.com/maps/search/?api=1&query=Jard%C3%ADn+Bot%C3%A1nico+de+Quito%2C+Rumipamba+E6-264",
};

export const guides: Record<Topic, Record<Locale, Guide>> = {
  ...nearbyGuides,
  "arena-bicentenario": {
    es: {
      title: "Arena Bicentenario Quito: conciertos, agenda e ingreso",
      description: "Consulta dónde verificar qué hay hoy en el Bicentenario, cómo identificar el acceso de tu concierto y cómo planificar el regreso desde el norte de Quito.",
      sections: [
        { title: "¿Qué hay hoy en el Bicentenario?", paragraphs: ["Busca el nombre del evento y la fecha en Quito Informa y confirma los detalles en el anuncio del organizador. Revisa que el cartel diga Arena Bicentenario y Quito. Un anuncio anterior puede seguir apareciendo aunque la fecha ya haya pasado."] },
        { title: "Antes de salir para el concierto", paragraphs: ["La Arena es un recinto de eventos dentro del conjunto del Bicentenario. El acceso para asistentes y el ingreso para pasear por el parque pueden seguir instrucciones distintas."], steps: ["Comprueba la fecha, la apertura de puertas y el sector de tu entrada en el anuncio del organizador.", "Abre el mapa del recinto y contrástalo con la puerta indicada en el boleto o en el aviso municipal del evento.", "Verifica cierres, objetos permitidos y el horario de regreso del Metro antes de salir."] },
        { title: "Accesos y regreso después del evento", paragraphs: ["Para FTC Live al Parque de agosto de 2026, el Municipio informó de cierres temporales en el parque y señaló un ingreso junto al Centro de Convenciones para asistentes. Para otra fecha, consulta el operativo correspondiente.", "El Labrador es la terminal norte de la Línea 1. Si el espectáculo termina tarde, confirma el último servicio y acuerda un punto de encuentro fuera de los cierres."] },
      ],
      sources: [{ name: "Quito Informa · anuncios municipales", url: city }, { name: "Quito Informa · operativo FTC Live al Parque", url: closures }, { name: "Metro de Quito · horarios y estaciones", url: metro }],
    },
    en: {
      title: "Arena Bicentenario Quito: concerts, events and entry",
      description: "Find where to check what’s on today, how to identify your concert entrance and how to plan the trip back from northern Quito.",
      sections: [
        { title: "What’s on at Bicentenario today?", paragraphs: ["Search Quito Informa for the event name and date, then confirm the details in the organizer’s announcement. Check that the listing names Arena Bicentenario and Quito. Older listings can remain visible after an event ends."] },
        { title: "Before you leave for a concert", paragraphs: ["The arena is an event venue within the Bicentenario complex. Concert admission and ordinary park visits may use different entrances."], steps: ["Check the date, door opening time and the entrance sector in the organizer’s instructions.", "Open the venue map and compare it with the gate named on your ticket or in the municipal event notice.", "Check street closures, permitted items and Metro service for the trip home."] },
        { title: "Getting in and getting home", paragraphs: ["For FTC Live al Parque in August 2026, the city announced temporary park closures and directed ticket holders to an entrance by the convention center. Look up the entry plan for your own event date.", "El Labrador is the northern terminus of Metro Line 1. If your show ends late, check the last service and choose a meeting point beyond the closures."] },
      ],
      sources: [{ name: "Quito Informa · municipal announcements", url: city }, { name: "Quito Informa · FTC Live entry notice", url: closures }, { name: "Metro de Quito · hours and stations", url: metro }],
    },
    zh: {
      title: "基多 Arena Bicentenario：演唱會、活動公告與入場",
      description: "查詢基多二百周年公園今天有什麼活動、如何確認演唱會入口，以及散場後如何搭車。",
      sections: [
        { title: "今天有什麼活動？", paragraphs: ["到基多市府的 Quito Informa 搜尋活動名稱與日期，再以主辦方公告核對細節。確認活動頁標示基多的 Arena Bicentenario，並留意搜尋結果可能仍顯示已結束的場次。"] },
        { title: "出發看演出前", paragraphs: ["Arena 是二百周年公園園區內的活動場地。演唱會觀眾與一般遊園旅客可能使用不同入口。"], steps: ["核對活動日期、開放入場時間及票券所屬區域。", "開啟場地地圖，對照票券或市府活動公告指定的入口。", "查閱道路管制、可攜入物品與回程地鐵服務。"] },
        { title: "入場與散場交通", paragraphs: ["2026 年 8 月 FTC Live al Parque 舉辦期間，市府公布公園入口暫時關閉，並安排觀眾從會展中心旁入場。前往其他場次時，請查閱該場活動的交通公告。", "El Labrador 是基多地鐵 1 號線北端終點。若演出較晚結束，先查末班車，並約在管制範圍外集合。"] },
      ],
      sources: [{ name: "Quito Informa 市府公告", url: city }, { name: "Quito Informa：FTC Live 入場公告", url: closures }, { name: "基多地鐵營運時間與車站", url: metro }],
    },
  },
  "como-llegar": {
    es: {
      title: "Cómo llegar al Parque Bicentenario de Quito: Metro y entradas",
      description: "Planea tu llegada al Parque Bicentenario desde El Labrador y elige un acceso según tu destino dentro del antiguo aeropuerto de Quito.",
      sections: [
        { title: "En Metro hasta El Labrador", paragraphs: ["Toma la Línea 1 en dirección a El Labrador. La terminal queda en el extremo sur del parque. Si vas a la zona norte, abre el mapa antes de salir de la estación y valora si te conviene continuar a pie por fuera del parque."], steps: ["Consulta el horario de la Línea 1 del día de tu visita en el sitio de Metro de Quito.", "Al llegar a El Labrador, confirma la salida hacia el parque con la señalización de la estación.", "Ubica tu punto de encuentro y confirma que el acceso elegido esté habilitado."] },
        { title: "Entradas para llegar a pie o en auto", paragraphs: ["La información municipal de 2022 identifica accesos por avenida Amazonas, Rafael Aulestia, Real Audiencia, Ramos y Luis Tufiño, además del acceso por el estacionamiento 1 de Amazonas. Usa el nombre de la calle para ubicar tu puerta y confirma aperturas y estacionamiento el día de la visita.", "El parque ocupa el antiguo aeropuerto Mariscal Sucre, al norte de Quito. Si vas en taxi, indica el nombre del parque y la puerta o calle que necesitas."] },
        { title: "Una visita corta por el antiguo aeropuerto", paragraphs: ["Para un primer paseo, entra por el lado sur si llegas en Metro, busca un tramo de la antigua pista abierto al público y vuelve por el mismo acceso. El terreno abierto ofrece poca sombra en algunos tramos. En días de concierto, verifica los desvíos antes de elegir la entrada."] },
      ],
      sources: [{ name: "Metro de Quito · horarios y estaciones", url: metro }, { name: "Quito Informa · entradas y administración EPMMOP", url: gates }, { name: "Quito Informa · ejemplo de cierres por eventos", url: closures }],
    },
    en: {
      title: "How to get to Parque Bicentenario Quito: Metro and entrances",
      description: "Plan your trip from El Labrador and choose a park entrance based on where you want to go on Quito’s former airport grounds.",
      sections: [
        { title: "Take the Metro to El Labrador", paragraphs: ["Ride Line 1 toward El Labrador. The terminal is at the southern end of the park. If you are meeting someone near the north end, check the map before leaving the station and consider using the surrounding streets."], steps: ["Check Line 1 hours for your visit on the Metro de Quito website.", "Follow station signs toward the park when you arrive at El Labrador.", "Locate your meeting point and confirm that your chosen entrance is open."] },
        { title: "Park entrances on foot or by car", paragraphs: ["The city’s 2022 access notice lists gates on Avenida Amazonas, Rafael Aulestia, Real Audiencia, Ramos and Luis Tufiño, plus access through Amazonas car park 1. Use the street name to find the gate and check access and parking on the day.", "The park occupies the former Mariscal Sucre airport grounds in northern Quito. If arriving by taxi, give the park name and your chosen gate or street."] },
        { title: "A short walk on the former airport grounds", paragraphs: ["For a first visit by Metro, start at the south end, look for a public section of the old runway and return through the same gate. Parts of the open grounds offer little shade. Check event-day diversions before choosing an entrance."] },
      ],
      sources: [{ name: "Metro de Quito · hours and stations", url: metro }, { name: "Quito Informa · gates and EPMMOP management", url: gates }, { name: "Quito Informa · example event closures", url: closures }],
    },
    zh: {
      title: "基多二百周年公園怎麼去：El Labrador 地鐵與公園入口",
      description: "從 El Labrador 地鐵站前往基多二百周年公園，依舊機場園區內的目的地選擇入口。",
      sections: [
        { title: "搭地鐵到 El Labrador", paragraphs: ["搭乘基多地鐵 1 號線往 El Labrador，終點站在公園南端。如果約在園區北側，出站前先核對地圖，再決定是否沿園區外道路前往。"], steps: ["到基多地鐵官網查看造訪當天的 1 號線營運時間。", "抵達 El Labrador 後，依車站指標找往公園的出口。", "確認集合地點，並查閱所選公園入口是否開放。"] },
        { title: "步行與開車入口", paragraphs: ["基多市府 2022 年公報列有 Amazonas 大道、Rafael Aulestia、Real Audiencia、Ramos、Luis Tufiño，以及 Amazonas 大道第 1 停車場入口。可按街道定位，出發當天再核對入口及停車狀況。", "公園位於基多北部舊蘇克雷元帥機場原址。搭計程車時，可以同時提供公園名稱和預計前往的入口或街道。"] },
        { title: "沿舊機場跑道短程散步", paragraphs: ["第一次搭地鐵來，可由南側進入，挑一段對外開放的舊跑道步行，再原路返回。部分空曠路段遮蔭較少；遇到大型活動，先查閱當天的出入口管制。"] },
      ],
      sources: [{ name: "基多地鐵營運時間與車站", url: metro }, { name: "Quito Informa：入口及管理單位 EPMMOP", url: gates }, { name: "Quito Informa：活動期間管制案例", url: closures }],
    },
  },
};
