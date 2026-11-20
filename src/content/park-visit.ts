export const parkHours = "05:00–19:00";
export const parkHoursSource = "https://quitoinforma.quito.gob.ec/2024/01/11/los-parques-metropolitanos-regresan-a-sus-horarios-habituales/";
export const cityAgenda = "https://cultura.quito.gob.ec/";
export const quitoFestSource = "https://quitoinforma.quito.gob.ec/2026/11/11/el-quitofest-si-va-municipio-realizara-el-festival-de-musica-independiente-mas-importante-del-pais/";
export const agendaChecked = "2026-11-20";

export const arenaSessions = [
  { localTime: "2026-12-05T14:00:00-05:00", name: { es: "QuitoFest Música Nacional", en: "QuitoFest Ecuadorian Music", zh: "QuitoFest 厄瓜多音樂場" } },
  { localTime: "2026-12-06T14:00:00-05:00", name: { es: "QuitoFest Alternativo", en: "QuitoFest Alternative Music", zh: "QuitoFest 另類音樂場" } },
];

export const parkVisit = {
  es: {
    hours: `Horario habitual publicado por el Municipio: ${parkHours}. Los eventos y cierres temporales pueden cambiar los accesos.`,
    hoursSource: "Horario municipal del parque",
    arrival: "Metro Línea 1 hasta El Labrador, en el extremo sur del parque. Para otros sectores, elige la entrada según tu destino.",
    agendaTitle: "Agenda publicada de Arena Bicentenario",
    agendaNote: "Horarios locales de Quito. Confirma cambios y condiciones de ingreso en el anuncio antes de salir.",
    emptyAgenda: "Esta guía no tiene próximas fechas verificadas. Consulta la agenda municipal para conocer las novedades de hoy.",
    checked: "Última revisión",
    eventSource: "Anuncio municipal de QuitoFest",
    calendar: "Consultar la agenda cultural de Quito",
    maps: ["Estación El Labrador", "Acceso Luis Tufiño", "Arena Bicentenario"],
  },
  en: {
    hours: `Usual hours published by the city: ${parkHours}. Events and temporary closures can affect park entrances.`,
    hoursSource: "Municipal park hours",
    arrival: "Take Metro Line 1 to El Labrador at the south end. For other areas, choose a gate near your destination.",
    agendaTitle: "Announced events at Arena Bicentenario",
    agendaNote: "Times are local to Quito. Check the announcement for changes and entry rules before leaving.",
    emptyAgenda: "This guide has no verified upcoming dates. Check the city calendar for today’s listings.",
    checked: "Last checked",
    eventSource: "City announcement for QuitoFest",
    calendar: "Check Quito’s cultural calendar",
    maps: ["El Labrador station", "Luis Tufiño entrance", "Arena Bicentenario"],
  },
  zh: {
    hours: `市府公佈的常規開放時段為 ${parkHours}。活動與臨時管制可能影響園區出入口。`,
    hoursSource: "市府公佈的公園開放時間",
    arrival: "搭乘地鐵 1 號線至公園南端的 El Labrador。前往其他區域時，請依目的地選擇入口。",
    agendaTitle: "Arena Bicentenario 已公告活動",
    agendaNote: "時間以基多當地時間為準。出發前請檢視公告，核對時間變更與入場規定。",
    emptyAgenda: "本指南目前沒有已核實的近期場次。查詢今天的活動，請檢視市府文化行事曆。",
    checked: "最後核對",
    eventSource: "市府 QuitoFest 公告",
    calendar: "檢視基多市府文化行事曆",
    maps: ["El Labrador 地鐵站", "Luis Tufiño 入口", "Arena Bicentenario 活動場地"],
  },
};

const gateQueries = ["Estación El Labrador, Quito", "Parque Bicentenario acceso Luis Tufiño, Quito", "Arena Bicentenario, Quito"];

export const parkRouteMaps = gateQueries.map((query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
);
