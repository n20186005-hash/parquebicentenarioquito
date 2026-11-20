import type { Locale } from "@/i18n/translations";
import type { LandmarkSlug } from "./landmarks";

export const adviceLabels = {
  es: { tips: "Consejos para la visita", about: "Acerca de", directions: "Cómo llegar en Google Maps" },
  en: { tips: "Visit tips", about: "About", directions: "Get directions with Google Maps" },
  zh: { tips: "遊覽建議", about: "關於", directions: "使用 Google 地圖導航" },
};

export const visitAdvice = {
  "plaza-grande": {
    es: "Empieza por el monumento y rodea la plaza antes de visitar interiores. Si hay un acto público, recorre las fachadas desde las aceras habilitadas.",
    en: "Start at the monument and circle the square before visiting interiors. During a civic ceremony, use the pavements that remain open.",
    zh: "先繞獨立紀念碑一圈再安排室內參觀。遇市政活動，沿開放的人行道觀察周圍建築。",
  },
  "san-francisco": {
    es: "Separa el paseo por la plaza de la visita al museo. Si dispones de poco tiempo, prioriza la escalinata y la vista del conjunto desde el lado opuesto.",
    en: "Allow separate time for the square and museum. On a short stop, prioritise the steps and the view of the full complex from across the square.",
    zh: "廣場與博物館分開留時間。若只短停，先走大階梯前方，再到廣場對側看完整建築群。",
  },
  basilica: {
    es: "La llegada por Caldas tiene pendiente. Empieza por el exterior y decide en la entrada si las escaleras de las torres encajan en tu visita.",
    en: "The Caldas approach climbs uphill. Start with the exterior, then decide at the entrance whether the tower stairs suit your visit.",
    zh: "Caldas 街有上坡，先在外面看塔樓與動物石雕，再按體力和開放情況決定是否登塔。",
  },
  compania: {
    es: "Reserva una primera parada para la portada de piedra. En el interior, empieza por la nave; confirma si las criptas o cúpulas requieren otra entrada.",
    en: "Allow time for the carved stone frontage. Start inside with the nave and check separate admission for the crypts or domes.",
    zh: "可先留時間看石雕門面，入內以中殿為主，再查地下墓室與圓頂是否需另外購票。",
  },
  catedral: {
    es: "Combina la visita con Plaza Grande. Si el acceso al museo está cerrado, todavía puedes observar la escalinata y la fachada lateral desde la plaza.",
    en: "Pair the cathedral with Plaza Grande. If museum access is closed, the steps and side elevation are visible from the square.",
    zh: "可與獨立廣場合併遊覽。博物館若未開放，仍可由廣場觀察階梯與教堂側立面。",
  },
  "la-ronda": {
    es: "Recorre primero la calle completa y vuelve a los talleres que te interesen. Comprueba las horas de cada local si vas por una actividad concreta.",
    en: "Walk the length of the street first, then return to the workshops that interest you. Check individual hours for a specific activity.",
    zh: "先走完整段老街，再回到有興趣的工坊。若專程參加某項體驗，請核對店家營業時間。",
  },
  itchimbia: {
    es: "Haz primero el mirador si el cielo está despejado. Si vas a una exposición, comprueba el acceso al Palacio de Cristal antes de subir.",
    en: "Visit the overlook first if the sky is clear. For an exhibition, check Crystal Palace access before climbing the hill.",
    zh: "天氣清朗時可以先走觀景區。若為展覽而來，上山前先查水晶宮當天是否開放。",
  },
  alameda: {
    es: "Usa la laguna para orientarte y deja el observatorio para una visita aparte. Comprueba el acceso al Churo si quieres subir al mirador.",
    en: "Use the lagoon to orient yourself and allow separate time for the observatory. Check access to El Churo if you want to climb it.",
    zh: "先以湖泊辨位，另留時間參觀天文臺。想上 El Churo 觀景臺，先查現場通行狀況。",
  },
  ejido: {
    es: "Si tienes poco tiempo, enfoca el paseo en el arco. Para combinarlo con el MuNa, vuelve a la avenida Patria y cruza por los pasos marcados.",
    en: "On a short stop, focus on the stone arch. To continue to MuNa, return to Avenida Patria and use the marked crossings.",
    zh: "短停可先看石拱。若要接續國家博物館，回到 Patria 大道並利用行人穿越道。",
  },
  "museo-ciudad": {
    es: "Elige las salas prioritarias al llegar. La exposición del hospital ayuda a interpretar el propio edificio antes de pasar a la historia de Quito.",
    en: "Choose priority galleries on arrival. The hospital exhibition explains the building before you move on to Quito’s wider history.",
    zh: "抵達後先選重點展廳。從醫院展區開始，可先讀懂建築本身，再接續基多城市史。",
  },
  yaku: {
    es: "Decide antes de salir si usarás el ingreso peatonal o vehicular. Elige las actividades interiores y deja las fuentes para el final si están abiertas.",
    en: "Choose the pedestrian or vehicle entrance before leaving. Start with indoor activities and save the fountains for last if open.",
    zh: "出發前先決定使用行人或車行入口。可先安排室內活動，噴泉區開放時再到戶外。",
  },
  panecillo: {
    es: "Acuerda la recogida en la misma explanada. Si hay nubes bajas, dedica la visita a la escultura y sus alrededores inmediatos.",
    en: "Arrange pickup at the same forecourt. In low cloud, focus the visit on the statue and its immediate surroundings.",
    zh: "回程上車點可約在同一山頂廣場。低雲遮住市景時，可把重點放在巨像與基座周圍。",
  },
  "siete-cruces": {
    es: "Guarda los cruces de calles de la ruta. En un paseo corto, recorre el tramo de Plaza Grande a Carmen Alto y deja Ambato para una visita más larga.",
    en: "Save the street junctions. For a shorter walk, go from Plaza Grande to Carmen Alto and leave Ambato for a longer visit.",
    zh: "先記下沿途路口。時間不足時，優先走獨立廣場至 Carmen Alto，把 Ambato 留給完整路線。",
  },
  "santo-domingo": {
    es: "Mira primero la torre desde la plaza y luego rodea hacia el arco. Si quieres ver la capilla, confirma antes que el templo admita visitas.",
    en: "Look at the tower from the square, then walk around toward the arch. Confirm visitor access before planning an interior chapel visit.",
    zh: "先在廣場看塔樓，再由外側繞到拱門。想看小堂內部，請先確認教堂當天接受參觀。",
  },
  "la-merced": {
    es: "Lleva la esquina de Chile y Cuenca como referencia. Si hay un oficio, dedica esa parada al exterior y vuelve después.",
    en: "Use Chile and Cuenca as your reference point. During a service, focus on the exterior and return later for the interior.",
    zh: "以 Chile 和 Cuenca 街口為定位。若遇禮拜，先看外觀，室內留待活動結束。",
  },
  "plaza-teatro": {
    es: "La fachada se aprecia desde el centro de la plaza. Si vas a una función, comprueba la hora y la puerta del teatro antes de llegar.",
    en: "The centre of the square gives a direct view of the frontage. For a performance, check the show time and theatre entrance in advance.",
    zh: "從廣場中央可正看劇院立面。若來看演出，先核對開演時間和劇院入口。",
  },
  "san-blas": {
    es: "Combina esta parada con La Alameda o Teatro Sucre. Usa los cruces señalizados en vez de cortar por las vías junto a la plaza.",
    en: "Combine the stop with La Alameda or Teatro Sucre. Use marked crossings around the square.",
    zh: "可接拉阿拉梅達公園或蘇克雷劇院。廣場周邊車道多，請走標示的行人穿越道。",
  },
  belmonte: {
    es: "Si vas por un espectáculo, guarda la convocatoria con su acceso. De día, puedes enlazar el exterior con un paseo por el barrio San Blas.",
    en: "For a show, save the event listing and its entry instructions. By day, pair an exterior stop with a walk through San Blas.",
    zh: "若為演出而來，可先存主辦公告和入口。白天看完外觀可接聖布拉斯街區散步。",
  },
  "san-marcos": {
    es: "Camina despacio por Junín y usa la plazoleta como punto de descanso. Mantén despejadas las puertas de las casas y del templo.",
    en: "Walk slowly along Junín and use the square for a short rest. Keep the doors to homes and the church clear.",
    zh: "慢走 Junín 街，在小廣場稍作休息。拍照時請讓出住家和教堂出入口。",
  },
  alabado: {
    es: "Elige el turno antes de organizar el resto de la mañana; el museo publica cupos por horario. Deja el patio para la parte final del recorrido.",
    en: "Choose a slot before planning the rest of the morning. The museum publishes capacity by time. Save the courtyard for the end.",
    zh: "館方按時段安排名額，宜先核對入場再排當天行程。庭院可留在參觀最後。",
  },
  urrutia: {
    es: "Busca el número N2-60. Compara las habitaciones por su función; la visita se concentra en objetos que conservan el uso doméstico de la casa.",
    en: "Look for number N2-60. Compare the rooms by function, paying attention to objects that show how the house was used.",
    zh: "認準 N2-60 門牌。可按房間用途觀察傢俱，從生活物件理解昔日的起居方式。",
  },
  "mena-caamano": {
    es: "Distingue las exposiciones del Centro Cultural del recorrido del museo de cera. Pregunta cuál es el último ingreso al museo.",
    en: "Check which displays belong to the cultural centre and which are part of the wax museum route. Ask for the museum’s last admission time.",
    zh: "先區分文化中心的展覽與蠟像博物館的參觀動線，並向館方確認蠟像館最後入場時間。",
  },
  "arte-contemporaneo": {
    es: "Elige la exposición antes de subir a San Juan. Deja margen para recorrer los patios y guarda la dirección de entrada para el regreso.",
    en: "Choose an exhibition before heading uphill to San Juan. Allow time for the courtyards and save the entrance address for the return.",
    zh: "先查想看的展覽再上 San Juan 坡道，留時間走庭院，並記下回程接車用的門口地址。",
  },
  observatorio: {
    es: "Si te interesan los instrumentos, comprueba primero el horario del museo. Para observación nocturna, revisa la actividad específica antes de salir.",
    en: "Check museum hours first if the instruments are your focus. For night observing, verify the specific activity in advance.",
    zh: "以儀器展為主時先查博物館開放時間；若想夜間觀星，須另查當天活動。",
  },
  "san-diego": {
    es: "Recorre solo los ejes abiertos que indique el personal. Si hay una ceremonia en el sector que ibas a visitar, cambia de recorrido.",
    en: "Use only the open paths recommended by staff. If a ceremony is taking place in the area you planned to see, take another route.",
    zh: "只走園方指示開放的主要道路。若預定走訪區域有儀式，請改走其他路線。",
  },
  guapulo: {
    es: "Organiza el regreso en vehículo si prefieres evitar la subida. Confirma la visita al museo antes de bajar al santuario.",
    en: "Arrange a ride back if you prefer to avoid the climb. Confirm museum access before heading down to the sanctuary.",
    zh: "不想徒步上坡可安排搭車回程。若專為博物館而來，下坡前先確認館方開放。",
  },
  "capilla-hombre": {
    es: "Empieza en la Capilla y reserva tiempo aparte para la Casa Museo si vas a visitar ambos recintos. Consulta los horarios de recorridos guiados.",
    en: "Start at the chapel and allow separate time for the house museum if visiting both. Check the guided-tour schedule.",
    zh: "可先看禮拜堂，想走訪故居博物館則另留時間。參加導覽前先核對場次。",
  },
  muna: {
    es: "Busca el letrero MuNa en el complejo cultural. Empieza por la sala de contexto y escoge las colecciones según el tiempo disponible.",
    en: "Look for the MuNa sign in the cultural complex. Start with the introductory gallery and choose collections based on your available time.",
    zh: "在文化建築群內認準 MuNa 標誌，先看導覽展廳，再按停留時間選擇收藏區。",
  },
  guanguiltagua: {
    es: "Si es tu primera visita, elige un solo mirador y vuelve por el mismo sendero. Guarda el nombre del acceso para pedir el vehículo de regreso.",
    en: "On a first visit, pick one viewpoint and return along the same trail. Save the entrance name for the ride back.",
    zh: "首次造訪可選一處觀景點原路折返，並記下所用入口名稱方便叫車。",
  },
  teleferiqo: {
    es: "Lleva una capa de abrigo para la estación superior y deja margen para retornar. Consulta al operador si el viento o las nubes afectan el servicio.",
    en: "Bring a warm layer for the upper station and allow time to return. Ask the operator whether wind or cloud is affecting service.",
    zh: "上站可備外套，並預留回到纜車站的時間。風勢或雲量較大時先查營運方公告。",
  },
  arbolito: {
    es: "Añade el parque antes o después del MuNa. Elige un cruce señalizado en Patria o 12 de Octubre para enlazar ambos lugares.",
    en: "Visit before or after MuNa. Use a marked crossing on Patria or 12 de Octubre to link the two stops.",
    zh: "可排在國家博物館前後。往返兩處時，走 Patria 或 12 de Octubre 的行人穿越道。",
  },
} satisfies Record<LandmarkSlug, Record<Locale, string>>;
