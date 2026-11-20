import type { Locale } from "@/i18n/translations";
import type { LandmarkSlug } from "./landmarks";

export const fieldNoteLabel: Record<Locale, string> = {
  es: "Detalles para observar durante la visita",
  en: "Details to look for during your visit",
  zh: "現場觀察重點",
};

export const fieldNotes: Record<LandmarkSlug, readonly [string, string, string]> = {
  "plaza-grande": [
    "El monumento conmemora el levantamiento del 10 de agosto de 1809 y fue inaugurado en 1906 por Eloy Alfaro. En 2022, el Instituto Metropolitano de Patrimonio anunció trabajos para conservarlo. Empieza en el borde de la plaza para leer cómo se relacionan los edificios públicos y religiosos, y acércate después al pedestal para observar las figuras.",
    "The monument commemorates the uprising of 10 August 1809. President Eloy Alfaro inaugurated it in 1906, and the Metropolitan Heritage Institute announced conservation work in 2022. Start at the edge of the square to see how civic and religious buildings share the space, then approach the pedestal to examine its figures.",
    "獨立紀念碑紀念 1809 年 8 月 10 日的起義，1906 年由總統埃洛伊・阿爾法羅揭幕。基多都會文化資產研究所於 2022 年啟動修復。先從廣場邊緣看市政、政府與宗教建築如何共用同一個公共空間，再走近基座觀察雕像細節。",
  ],
  "san-francisco": [
    "Al cruzar la plaza, fíjate en el cambio de escala entre la explanada, los peldaños y la puerta. Dentro del museo, compara cómo se ven las esculturas de cerca con la forma en que se perciben desde la nave.",
    "On the approach, compare the scale of the open square, the steps and the doorway. In the museum, look at sculpture up close and consider how differently the same details would read from the nave.",
    "橫越廣場時，可觀察開闊地坪、階梯和門口的尺度變化。進館後近看雕像細節，想像從教堂中殿觀看時會先注意哪些部分。",
  ],
  basilica: [
    "Usa los arcos apuntados para seguir la altura de la fachada con la mirada. Con un encuadre cerrado, compara las figuras de animales con las molduras que las rodean.",
    "Follow the pointed arches upward to read the height of the façade. Use a tighter frame to compare the carved animals and the mouldings around them.",
    "沿尖拱向上看，可讀出立面的垂直比例。用較窄的構圖觀察動物雕像與周圍石雕線腳。",
  ],
  compania: [
    "Detente frente a la portada para observar la repetición de columnas y relieves. Dentro, busca cómo la luz cambia la lectura del dorado al mirar hacia la bóveda y el altar.",
    "Pause opposite the entrance to observe repeating columns and reliefs. Inside, see how light changes the appearance of the gilding toward the vault and altar.",
    "先在門面對側看柱列與浮雕如何重複排列。入內後分別望向拱頂與祭壇，觀察採光對金飾層次的影響。",
  ],
  catedral: [
    "Desde la Plaza Grande, aléjate de la escalinata para ver cómo el templo ocupa un costado de la plaza. Acércate después a las puertas para comparar la escala de los detalles con la del frente completo.",
    "Step back from the stairs in Plaza Grande to see how the cathedral occupies one edge of the square. Approach the doors afterwards to compare their details with the scale of the whole building.",
    "從獨立廣場退到階梯外觀察教堂如何界定廣場一側，再走近門口比較整片立面與門飾的尺度。",
  ],
  "la-ronda": [
    "Entre un taller y el siguiente, mira hacia los pisos altos: la sucesión de balcones ayuda a leer el ritmo de las fachadas de esta calle estrecha.",
    "Between workshops, look up at the upper floors. The succession of balconies makes the rhythm of the façades easier to see on this narrow street.",
    "工坊之間的路段記得抬頭看樓上陽臺。沿窄街前行時，連續的陽臺可幫助辨識各棟房屋的立面節奏。",
  ],
  itchimbia: [
    "Rodea el Palacio de Cristal antes de volver al mirador. Mira cómo cambia la transparencia del edificio según la posición del sol y después busca las torres del casco histórico en el horizonte.",
    "Circle the Crystal Palace before returning to the overlook. Notice how the transparency changes with the light, then look for the towers of the historic centre on the skyline.",
    "回觀景臺前先繞水晶宮一圈，觀察光線如何改變玻璃的通透感，再從天際線辨認老城的塔樓。",
  ],
  alameda: [
    "Haz una pausa en el borde de la laguna para ver el trazado del paseo. Cambia después a la zona del observatorio para comparar el espacio abierto con la escala del edificio científico.",
    "Pause at the lagoon to read the layout of the path. Then shift to the observatory and compare the open park with the scale of the scientific building.",
    "先在湖邊停下看看步道的走向，再走到天文臺一帶，比較開放園地與科學建築的尺度。",
  ],
  ejido: [
    "Desde el arco de piedra, sigue el eje del paseo principal y observa cómo se abre hacia el césped. Para seguir al museo, vuelve a Patria por el sendero que mejor conecte con el cruce señalizado.",
    "From the stone arch, follow the main path to see where it opens onto the lawns. To continue to the museum, return to Patria using the path that best meets a marked crossing.",
    "從石拱沿主步道走，觀察路徑如何通往草地。續訪博物館時，選擇最接近行人穿越道的步道回到 Patria 大道。",
  ],
  "museo-ciudad": [
    "En el antiguo hospital, mira los corredores que conectan los patios y vuelve a esa observación al leer la exposición: la distribución de los espacios también cuenta la historia del lugar.",
    "In the former hospital, look at the corridors connecting the courtyards. Return to that observation in the galleries: the layout itself helps tell the building’s story.",
    "在舊醫院裡先看連接庭院的走廊，讀展覽時再回想這段動線。空間配置本身也能說明建築昔日如何使用。",
  ],
  yaku: [
    "Tras las salas, mira Quito desde la zona exterior. La pendiente de los barrios es una buena referencia para pensar en el recorrido del agua entre las laderas y la ciudad.",
    "After the galleries, look over Quito from outside. The neighbourhood slopes give you a concrete way to think about how water travels between the hillsides and the city.",
    "逛完展廳到戶外望向基多。街區起伏正好作為參照，想想水如何在山坡和城市之間流動。",
  ],
  panecillo: [
    "Primero observa la figura desde el borde de la explanada y luego acércate al pedestal. Para la vista urbana, recorre otro lado de la explanada y compara la continuidad de los tejados del centro.",
    "View the figure first from the edge of the forecourt and then approach the pedestal. For city views, move along the forecourt to compare how the rooftops of the centre run together.",
    "先從山頂廣場邊緣看巨像全身，再走近基座。要看市景，可沿廣場移到另一側，比較老城屋頂在坡地上的分布。",
  ],
  "siete-cruces": [
    "En cada tramo de García Moreno, usa la siguiente cruz como referencia y mira dónde se coloca respecto al templo y a la acera. Te ayudará a distinguir las paradas durante la caminata.",
    "On each stretch of García Moreno, use the next cross as a reference. Check where it stands in relation to the church and pavement to distinguish the stops along the walk.",
    "沿 García Moreno 街步行時，可逐段找下一座十字架，觀察它與教堂及人行道的相對位置，用來辨認各站。",
  ],
  "santo-domingo": [
    "Compara la vista frontal desde la plaza con la vista lateral junto al arco. Cambiar de ángulo ayuda a leer cómo el conjunto se encuentra con el desnivel de la calle.",
    "Compare the frontal view from the square with the side view by the arch. The change in angle reveals how the complex meets the slope of the street.",
    "從廣場先看教堂正面，再到拱門旁看側面。換角度可看出建築如何接合街道的高差。",
  ],
  "la-merced": [
    "En la esquina de Chile y Cuenca, mira alternativamente a lo largo de ambas calles. La perspectiva oblicua permite ver la torre y el frente en una misma lectura.",
    "From the corner of Chile and Cuenca, look along each street in turn. The angled view helps you read the tower and frontage together.",
    "在 Chile 與 Cuenca 街口沿兩條街分別觀察。斜角視野有助於同時看清塔樓與正立面。",
  ],
  "plaza-teatro": [
    "Observa el eje central de la fachada del Sucre desde la plaza y después acércate al pórtico. Durante una función, deja libre la zona de entrada al comparar ambas perspectivas.",
    "Read the Sucre Theatre’s central axis from the square, then approach the portico. On performance days, keep the entry area clear while comparing the views.",
    "先在廣場辨認蘇克雷劇院立面的中軸，再走近柱廊。演出時段觀察兩種角度時，請留出入場動線。",
  ],
  "san-blas": [
    "Detente dentro de la plaza para ver cómo se separan los recorridos a pie hacia el casco histórico y La Alameda. Elige el cruce marcado antes de continuar hacia tu siguiente parada.",
    "Pause inside the square to see where walking routes toward the historic centre and La Alameda diverge. Locate a marked crossing before continuing to your next stop.",
    "在廣場內辨認前往老城與拉阿拉梅達公園的兩個方向，先找行人穿越道，再往下一站走。",
  ],
  belmonte: [
    "Mira desde la acera cómo la entrada del recinto se inserta entre las fachadas del barrio. En un día de evento, identifica con antelación la puerta de tu localidad.",
    "From the pavement, see how the venue entrance fits between neighbourhood façades. On event days, identify the gate for your seating section in advance.",
    "可從人行道看場館入口如何嵌在街區立面之間。遇活動日，先核對票券所列座區和入口。",
  ],
  "san-marcos": [
    "Desde la plazoleta, vuelve la vista hacia Junín y compara las alturas de puertas, balcones y aleros. Es una forma de observar el carácter residencial sin acercarte a las ventanas.",
    "Look back along Junín from the small square and compare the heights of doors, balconies and eaves. You can observe the residential character without approaching windows.",
    "從小廣場回望 Junín 街，比較門口、陽臺與屋簷的高低。在公共空間就能觀察住宅街景，拍照時請與窗戶保持距離。",
  ],
  alabado: [
    "Entre salas, vuelve al patio para orientarte dentro de la casa. En la colección, elige dos piezas del mismo tema y compara los materiales y la forma en que están iluminadas.",
    "Return to the courtyard between galleries to orient yourself in the house. In the collection, choose two objects on the same theme and compare their materials and lighting.",
    "換展廳時可回庭院辨認位置。選兩件主題相近的館藏，比較材質與展櫃照明下的細節。",
  ],
  urrutia: [
    "Sigue el paso de un ambiente doméstico al siguiente y observa qué muebles ocupan el centro de cada sala. Los objetos ayudan a distinguir las habitaciones de recepción de los espacios privados.",
    "Follow the transition between domestic rooms and notice which pieces anchor each one. The furnishings help distinguish reception rooms from more private spaces.",
    "沿各房間依序參觀，留意每間房以哪件家具為中心，可從陳設區分接待賓客和私人起居空間。",
  ],
  "mena-caamano": [
    "Después de recorrer las escenas de cera, vuelve a mirar los espacios de circulación del edificio. Contrasta lo que cuenta la exposición con los detalles que pertenecen al inmueble.",
    "After the wax tableaux, look again at the building’s circulation spaces. Compare the story told by the displays with the details of the building itself.",
    "看完蠟像場景後，再留心館內走廊與通道。可把展覽講述的事件與建築本身保留的細節一起觀察。",
  ],
  "arte-contemporaneo": [
    "Cruza uno de los patios para volver a ver la fachada interior del antiguo hospital. Contrasta su distribución con la manera en que las exposiciones usan las salas hoy.",
    "Cross one courtyard to view the former hospital’s interior façade. Compare its layout with how exhibitions use the rooms today.",
    "穿過庭院回望舊醫院的內側立面，再比對原本的空間配置與今日的展覽動線。",
  ],
  observatorio: [
    "En las salas de instrumentos, distingue los objetos diseñados para orientar la observación de los que registraban mediciones. Mira después la forma de la torre desde el parque.",
    "In the instrument galleries, compare objects for directing observations with those for recording measurements. Afterwards, study the shape of the tower from the park.",
    "在儀器展廳比較用於定位觀測方向與記錄測量結果的器具，離館後再從公園看天文臺塔樓的外形。",
  ],
  "san-diego": [
    "Sigue las indicaciones del recinto y elige un recorrido corto entre corredores y monumentos funerarios. Observa inscripciones y proporciones desde el paso autorizado.",
    "Follow venue signs and choose a short walk among the passages and funerary monuments. Look at lettering and proportions from the permitted path.",
    "依現場標示選一段短路線，在允許通行的步道看墓園碑文、紀念造型與廊道比例。",
  ],
  guapulo: [
    "Antes de bajar, localiza desde arriba el santuario y el recorrido de la pendiente. En la plaza, vuelve la vista hacia la ladera para entender el cambio de escala.",
    "Before descending, locate the sanctuary and the line of the slope from above. In the square, look uphill to appreciate the change in scale.",
    "下坡前先從高處找聖堂與坡道的走向。抵達廣場後回望山坡，可體會地勢高差與聚落尺度。",
  ],
  "capilla-hombre": [
    "Recorre el exterior para observar el volumen del edificio y entra después a ver cómo cambia la escala frente a las obras. Dedica tiempo a una pieza antes de pasar a la siguiente sala.",
    "Walk around the exterior to study the building’s mass, then see how your sense of scale changes in front of the artwork. Give one piece time before moving to the next room.",
    "先從外部觀察建築量體，入內後比較大型作品帶來的尺度感。選一件作品細看，再到下一個展間。",
  ],
  muna: [
    "Elige una secuencia de salas y compárala con la cronología que ofrece el museo. Detente en dos piezas de materiales distintos para ver cómo la presentación explica su uso.",
    "Choose a sequence of galleries and compare it with the museum’s chronology. Pause at two objects of different materials to see how the displays explain their use.",
    "挑幾間展廳依序走，再對照館內的年代資訊。可選兩件材質不同的展品，看看展陳如何說明原本用途。",
  ],
  guanguiltagua: [
    "En los cruces de senderos, guarda una referencia visual del camino de ida. Compara las vistas desde un tramo arbolado y otro más abierto antes de elegir el retorno.",
    "At trail junctions, save a visual reference for your outbound route. Compare the views from wooded and open stretches before choosing your return.",
    "遇步道岔路先記下來程地標。可比較樹林段與開闊段的視野，再決定沿哪條路返回。",
  ],
  teleferiqo: [
    "Al bajar de la cabina, dedica la primera pausa a reconocer la ciudad desde el área de llegada. Si continúas a pie, deja margen para volver a la estación superior antes del último descenso.",
    "When you leave the cabin, pause at the arrival area to orient yourself over the city. If you continue on foot, leave time to reach the upper station before the final descent.",
    "出纜車後先在抵達區辨認市區方位。若續走登山步道，請為返回上站與搭乘末班下行纜車預留時間。",
  ],
  arbolito: [
    "Cruza por un sendero interior para comparar el espacio del parque con el frente de la Casa de la Cultura. Usa el paso señalizado si sigues a El Ejido.",
    "Take an interior path to compare the park’s open space with the frontage of the Casa de la Cultura. Use a marked crossing if continuing to El Ejido.",
    "沿園內步道走，對照公園開放空間與文化之家立面。若接著去埃希多公園，請走有標示的行人穿越道。",
  ],
};
