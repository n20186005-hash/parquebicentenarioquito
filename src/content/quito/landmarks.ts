import { moreLandmarks } from "./more-landmarks";

type Localized = {
  title: string;
  intro: string;
  about: string;
  architecture: string;
  route: [string, string, string];
  transport: string;
  photo: string;
  faq: [string, string];
};

export type Landmark = {
  address: string;
  station: string;
  source: string;
  es: Localized;
  en: Localized;
  zh: Localized;
};

export const landmarks = {
  "plaza-grande": {
    address: "Venezuela y García Moreno, Plaza de la Independencia",
    station: "San Francisco",
    source: "https://www.quito-turismo.gob.ec/descargas/MAPA_2023_DIGITAL.pdf",
    es: {
      title: "Plaza Grande de Quito", intro: "El monumento a la Independencia, Carondelet y la Catedral en el corazón del damero histórico.",
      about: "El Municipio de Quito atiende el espacio público de la Plaza de la Independencia. La antigua plaza mayor organizó el trazado colonial; el monumento colocado en 1906 dio forma a su nombre oficial.",
      architecture: "Compara el pórtico alargado de Carondelet con el costado de la Catedral. El monumento central ofrece un punto de referencia para orientarse entre las fachadas.",
      route: ["Entra desde la calle Espejo.", "Rodea el monumento para ver los distintos frentes de la plaza.", "Sal por García Moreno hacia La Compañía."],
      transport: "Desde la estación San Francisco, sigue por Sucre hacia García Moreno y gira hacia la plaza.",
      photo: "Desde el paseo oriental encuadra el monumento con el Palacio de Carondelet detrás.",
      faq: ["¿El paseo por la plaza incluye Carondelet?", "La plaza es espacio público. Cualquier visita al palacio se consulta por separado."],
    },
    en: {
      title: "Plaza Grande, Quito", intro: "See the Independence Monument, Carondelet Palace and the Cathedral at the centre of Quito’s colonial grid.",
      about: "Quito Municipality looks after the public square. The former main square anchored the colonial street grid, and the monument installed in 1906 gave Independence Square its official name.",
      architecture: "Compare Carondelet’s long portico with the side of the cathedral. Use the central monument as a reference point as you look around the square.",
      route: ["Enter from Calle Espejo.", "Walk around the monument to see the square’s different façades.", "Leave via García Moreno toward La Compañía."],
      transport: "From San Francisco station, take Sucre toward García Moreno, then turn toward the square.",
      photo: "Frame the monument from the eastern path with Carondelet Palace in the background.",
      faq: ["Does a visit to the square include the palace?", "The square is a public space. Check arrangements for any palace visit separately."],
    },
    zh: {
      title: "基多獨立廣場", intro: "在歷史城區的棋盤式街廓中心，看獨立紀念碑、卡隆德萊特宮和大教堂。",
      about: "獨立廣場的公共空間由基多市政府管理。昔日的主廣場是殖民時期街廓的中心，1906 年設立的獨立紀念碑也為廣場帶來今日的正式名稱。",
      architecture: "比對總統府的長柱廊與大教堂的側立面，再用中央紀念碑作為辨別各棟建築方位的參照。",
      route: ["由 Espejo 街進入廣場。", "繞獨立紀念碑一圈，觀察各面建築。", "經 García Moreno 街前往耶穌會教堂。"],
      transport: "由 San Francisco 地鐵站沿 Sucre 街走到 García Moreno 街，再轉往廣場。",
      photo: "在廣場東側步道構圖，將紀念碑與後方的卡隆德萊特宮同框。",
      faq: ["逛廣場可以順便進總統府嗎？", "廣場是公共空間，總統府的參觀安排須另外查詢。"],
    },
  },
  "san-francisco": {
    address: "Cuenca 477 y Sucre, Plaza de San Francisco",
    station: "San Francisco",
    source: "https://museosquito.gob.ec/espacios/museo-franciscano-fray-pedro-gocial/",
    es: {
      title: "Iglesia y convento de San Francisco", intro: "Fachada de piedra, patios conventuales y obras de la Escuela Quiteña frente a la plaza de San Francisco.",
      about: "La comunidad franciscana custodia el conjunto. El Museo Fray Pedro Gocial, dentro del convento, conserva obras religiosas de los siglos XVII y XVIII.",
      architecture: "Observa desde la plaza cómo la escalinata eleva la iglesia sobre el espacio abierto. En el museo, compara la escala de los patios con la de las salas.",
      route: ["Sal del Metro hacia la plaza.", "Cruza hasta el frente de la iglesia.", "Busca el ingreso del Museo Fray Pedro Gocial por Cuenca."],
      transport: "La estación San Francisco desemboca junto a la plaza; el acceso al museo está en Cuenca y Sucre.",
      photo: "Desde el borde opuesto de la plaza se pueden enmarcar juntas la escalinata y las torres.",
      faq: ["¿El horario indicado es para todo el convento?", "Es el horario publicado del museo. Consulta por separado el acceso al templo y los servicios religiosos."],
    },
    en: {
      title: "San Francisco Church and Convent", intro: "Explore a stone façade, convent courtyards and Quito School art beside Plaza de San Francisco.",
      about: "The Franciscan community looks after the complex. The Fray Pedro Gocial Museum inside the convent preserves religious art from the seventeenth and eighteenth centuries.",
      architecture: "From the square, notice how the stairs raise the church above the open space. Inside the museum, compare the scale of the courtyards and galleries.",
      route: ["Exit the Metro toward the square.", "Cross the square toward the church frontage.", "Find the Fray Pedro Gocial Museum entrance on Cuenca."],
      transport: "San Francisco station opens beside the square. The museum entrance is at Cuenca and Sucre.",
      photo: "Frame the steps and towers together from the opposite edge of the square.",
      faq: ["Do the listed hours cover the whole convent?", "They are the published museum hours. Check church access and services separately."],
    },
    zh: {
      title: "聖方濟各教堂與修道院", intro: "從聖方濟各廣場看石造立面，再進修道院瞭解基多畫派宗教藝術。",
      about: "建築群由方濟各會管理。修道院內的 Fray Pedro Gocial 博物館儲存十七至十八世紀的宗教藝術品。",
      architecture: "從廣場看大階梯如何把教堂與開闊地面分開。進博物館後，比對庭院與展廳的尺度。",
      route: ["從地鐵站出站往廣場。", "穿過廣場察看教堂正面。", "沿 Cuenca 街找 Fray Pedro Gocial 博物館入口。"],
      transport: "San Francisco 地鐵站就在廣場旁，博物館入口位於 Cuenca 與 Sucre 街口。",
      photo: "從廣場對側把大階梯和兩座塔樓放入同一畫面。",
      faq: ["頁面的開放時間適用於整座修道院嗎？", "所列是博物館公佈的時間。教堂出入與宗教活動請另外核對。"],
    },
  },
  "basilica": {
    address: "Venezuela 11-263 y Francisco de Caldas",
    station: "La Alameda",
    source: "https://www.basilicadelvotonacionalecuador.com/",
    es: {
      title: "Basílica del Voto Nacional", intro: "Un hito neogótico en la parte alta del casco histórico, con torres y detalles inspirados en la fauna del Ecuador.",
      about: "El templo está atendido por la parroquia Sagrado Corazón de Jesús y los Padres Oblatos. Su silueta neogótica se reconoce desde numerosos puntos del centro.",
      architecture: "Busca los remates animales a lo largo de los muros laterales y compara sus formas con las líneas verticales de los arcos apuntados.",
      route: ["Llega por Venezuela y Caldas.", "Mira la fachada desde el exterior antes de recorrer un lateral.", "Pregunta en el recinto por el acceso a torres antes de decidir si subes."],
      transport: "Desde la estación La Alameda, sigue hacia San Blas y continúa cuesta arriba hacia Francisco de Caldas.",
      photo: "Fotografía las torres desde la acera de Caldas; para los detalles de fauna usa el lateral.",
      faq: ["¿Las torres forman parte de la visita al templo?", "Consulta la modalidad de acceso a las torres y a la nave por separado."],
    },
    en: {
      title: "Basílica del Voto Nacional", intro: "A neo-Gothic landmark above Quito’s old town, with tall towers and details inspired by Ecuadorian wildlife.",
      about: "The Sacred Heart parish and the Oblate fathers care for the church. Its neo-Gothic silhouette is visible from many parts of the historic centre.",
      architecture: "Look for animal figures along the sides and compare their shapes with the strong vertical lines of the pointed arches.",
      route: ["Arrive at Venezuela and Caldas.", "Look at the frontage from outside before walking along one side.", "Ask about tower access before deciding whether to climb."],
      transport: "From La Alameda station, walk toward San Blas and continue uphill toward Francisco de Caldas.",
      photo: "Photograph the towers from the Caldas pavement and use the side of the building for wildlife details.",
      faq: ["Is the tower climb included in a church visit?", "Check access arrangements for the towers and the nave separately."],
    },
    zh: {
      title: "基多國家誓願聖殿", intro: "走訪老城高處的新哥德式聖殿，觀察尖塔與厄瓜多動物造型裝飾。",
      about: "聖殿由耶穌聖心堂區與獻主會神父照管。新哥德式尖塔從歷史城區多處都能辨認。",
      architecture: "沿側牆尋找動物造型，對照尖拱與塔樓強調向上的構圖。",
      route: ["前往 Venezuela 與 Caldas 街口。", "先從外側看正面，再沿側牆散步。", "到現場瞭解塔樓通行方式，再決定是否登塔。"],
      transport: "由 La Alameda 地鐵站朝 San Blas 走，再沿坡道往 Francisco de Caldas。",
      photo: "從 Caldas 街人行道拍塔樓，在建築側面拍動物細節。",
      faq: ["參觀教堂就能登塔嗎？", "塔樓與教堂中殿有各自的入場安排，請分開核對。"],
    },
  },
  compania: {
    address: "García Moreno y Sucre", station: "San Francisco",
    source: "https://museosquito.gob.ec/espacios/fundacion-iglesia-de-la-compania-de-jesus/",
    es: { title: "Iglesia de la Compañía de Jesús", intro: "Una iglesia jesuita en la esquina de García Moreno y Sucre, conocida por el contraste entre piedra y dorado.", about: "La Fundación Iglesia de La Compañía custodia el conjunto. Construido entre 1605 y 1765, conserva una de las expresiones más destacadas del barroco quiteño.", architecture: "Compara las columnas salomónicas de la portada labrada con los retablos dorados del interior.", route: ["Llega por Sucre desde San Francisco.", "Detente frente a la portada, dejando espacio en la acera.", "Entra por el acceso de visita y recorre la nave según las indicaciones."], transport: "Desde San Francisco camina por Sucre hasta García Moreno.", photo: "Desde la esquina opuesta busca una vista completa de la portada antes de fotografiar los detalles.", faq: ["¿Las criptas y cúpulas se incluyen en la entrada general?", "Consulta las modalidades y tarifas de cada recorrido en la ficha del recinto."] },
    en: { title: "Church of La Compañía de Jesús", intro: "Visit the Jesuit church at García Moreno and Sucre, where a carved stone frontage gives way to a gilded interior.", about: "The Fundación Iglesia de La Compañía safeguards the church. Built between 1605 and 1765, it preserves one of the strongest expressions of Quito’s Baroque tradition.", architecture: "Compare the twisted columns of the carved frontage with the gilded altarpieces inside.", route: ["Approach along Sucre from San Francisco.", "Pause across from the entrance without blocking the pavement.", "Use the visitor entrance and follow the posted route through the nave."], transport: "From San Francisco station follow Sucre to García Moreno.", photo: "From the opposite corner, frame the full frontage before photographing individual carvings.", faq: ["Does general admission cover the crypts and domes?", "Check the venue’s separate routes and ticket categories before buying."] },
    zh: { title: "基多耶穌會教堂", intro: "走進 García Moreno 與 Sucre 街角的耶穌會教堂，比對石雕外牆與金飾內部。", about: "教堂由耶穌會教堂基金會照管。建築於 1605 至 1765 年間興建，是基多巴洛克藝術的重要例子。", architecture: "先看石雕門面的扭柱，再比對室內貼金祭壇在材質和光線上的差異。", route: ["由 San Francisco 沿 Sucre 街抵達。", "在對街停留看立面，讓出人行道。", "由參觀入口進入，依現場動線走訪中殿。"], transport: "由 San Francisco 地鐵站沿 Sucre 街走到 García Moreno 街口。", photo: "先在斜對角拍完整立面，再拍門柱和雕刻細部。", faq: ["一般門票包括地下墓室和圓頂嗎？", "請在購票前查閱各種路線和票價的場館公告。"] },
  },
  catedral: {
    address: "Espejo N3-117, acceso por Venezuela junto a Plaza Grande", station: "San Francisco",
    source: "https://www.turismo.gob.ec/wp-content/uploads/2019/01/Directorio-Nacional-de-Museos-2019.pdf",
    es: { title: "Catedral Metropolitana de Quito", intro: "Descubre cómo se integra la catedral al costado sur de la Plaza Grande.", about: "El directorio nacional identifica el Cabildo Eclesiástico como responsable de la iglesia museo. La catedral forma parte del conjunto cívico y religioso que rodea la plaza mayor.", architecture: "Observa la fachada lateral blanca, la escalera y los niveles de cubierta desde la plaza antes de buscar la entrada.", route: ["Llega al borde sur de Plaza Grande.", "Sigue la fachada hacia Venezuela.", "Busca el acceso al museo y revisa las condiciones de visita."], transport: "Desde San Francisco toma Sucre hasta García Moreno y continúa hacia Espejo.", photo: "Desde el borde norte de la plaza puedes enmarcar la fachada lateral y la escalinata sin quedar pegado al muro.", faq: ["¿Se entra por la escalinata que se ve desde la plaza?", "El directorio indica el ingreso al museo por Venezuela, junto a la plaza. Sigue la señalización del día."] },
    en: { title: "Quito Metropolitan Cathedral", intro: "See how Quito’s cathedral fits into the south side of Independence Square.", about: "Ecuador’s museum directory lists the ecclesiastical chapter as the museum church’s operator. The cathedral is part of the civic and religious ensemble around Quito’s main square.", architecture: "Look at the white side elevation, stairs and roof levels from the square before approaching the entrance.", route: ["Reach the south edge of Plaza Grande.", "Follow the cathedral frontage toward Venezuela.", "Find the museum entrance and check admission arrangements."], transport: "From San Francisco follow Sucre to García Moreno and continue toward Espejo.", photo: "From the north edge of the square there is enough room to frame the cathedral’s side elevation and stairs together.", faq: ["Is the museum entrance on the large staircase?", "The museum directory lists access from Venezuela beside the square. Follow the current signs."] },
    zh: { title: "基多都主教座堂", intro: "從獨立廣場南側，認識主教座堂與周圍市政建築的空間關係。", about: "厄瓜多國家博物館名錄列明教堂博物館由教會參事會管理。主教座堂與市政及宗教建築共同圍成歷史城區的主廣場。", architecture: "先從廣場觀察白色側立面、階梯和疊出的屋頂線，再找入口。", route: ["抵達獨立廣場南側。", "沿教堂立面走向 Venezuela 街。", "找到博物館入口，核對當天參觀安排。"], transport: "由 San Francisco 地鐵站沿 Sucre 街走到 García Moreno，再往 Espejo 街。", photo: "在廣場北側退遠，讓教堂側立面和階梯完整入鏡。", faq: ["博物館從廣場的大階梯進去嗎？", "館方名錄列出的入口在廣場旁的 Venezuela 街，請依現場標示入場。"] },
  },
  "la-ronda": {
    address: "Juan de Dios Morales, sector Bulevar 24 de Mayo", station: "San Francisco",
    source: "https://dspace.udla.edu.ec/bitstream/33000/4513/1/UDLA-EC-TTAB-2015-10.pdf",
    es: { title: "Calle La Ronda", intro: "Recorre la calle Juan de Dios Morales entre fachadas estrechas, balcones y talleres del centro histórico.", about: "El Municipio de Quito atiende el espacio público; cada taller o local gestiona su atención. La calle pasó de ser un corredor residencial y artesanal a un eje de visita cultural tras su rehabilitación.", architecture: "Fíjate en el ritmo de las puertas bajas, balcones y aleros a medida que la calle gira.", route: ["Baja hacia Bulevar 24 de Mayo.", "Entra en Juan de Dios Morales y recorre sus curvas.", "Detente en los talleres que estén abiertos sin ocupar los accesos."], transport: "Desde San Francisco sigue hacia el sur por García Moreno hasta las inmediaciones de 24 de Mayo.", photo: "Desde uno de los cambios de dirección encuadra las fachadas a ambos lados para mostrar la escala de la calle.", faq: ["¿La calle y los talleres tienen el mismo horario?", "La calle es pública. Horarios y reservas de los interiores dependen de cada establecimiento."] },
    en: { title: "La Ronda Street", intro: "Walk Juan de Dios Morales past narrow façades, balconies and workshops in Quito’s old town.", about: "Quito Municipality looks after the public street and individual businesses run their own premises. The former residential and craft corridor developed into a cultural visitor route following rehabilitation.", architecture: "Follow the rhythm of low doorways, balconies and eaves as the street changes direction.", route: ["Walk down toward Bulevar 24 de Mayo.", "Enter Juan de Dios Morales and follow its bends.", "Stop at open workshops without blocking doorways."], transport: "From San Francisco follow García Moreno south toward 24 de Mayo.", photo: "At a bend, frame both sides to show how narrow the street is.", faq: ["Do the street and workshops have the same hours?", "The street is public. Each shop or workshop sets its own hours and booking rules."] },
    zh: { title: "基多拉龍達老街", intro: "沿 Juan de Dios Morales 街行走，看工藝店、陽臺和歷史街屋。", about: "街道公共空間由基多市政府管理，各店家自行安排營業。這條昔日的住宅與手工業街道在整修後成為文化遊覽路線。", architecture: "隨街道彎折觀察矮門、陽臺和屋簷的節奏，留意視線如何在轉角被收窄。", route: ["往 Bulevar 24 de Mayo 下行。", "轉入 Juan de Dios Morales 街，沿彎道步行。", "遇到開放的工坊可停留，但請讓出門口。"], transport: "由 San Francisco 地鐵站沿 García Moreno 向南走到 24 de Mayo 一帶。", photo: "從街道轉角把兩側立面拍進同一畫面，呈現巷道尺度。", faq: ["老街和工坊的開放時間一樣嗎？", "老街是公共道路，各店家自行安排營業與預約。"] },
  },
  itchimbia: {
    address: "Calle José María Aguirre, sector El Dorado y La Tola", station: "La Alameda",
    source: "https://epmmop.quito.gob.ec/parque-itchimbia/",
    es: { title: "Parque Itchimbía", intro: "Sube a la colina para observar el centro de Quito y la estructura metálica del antiguo mercado.", about: "La EPMMOP del Municipio de Quito atiende el parque. El centro cultural reutiliza la estructura del antiguo mercado de Santa Clara, importada de Hamburgo a finales del siglo XIX.", architecture: "Desde el exterior del Palacio de Cristal observa el ritmo de las piezas de hierro y la transparencia de los paños. La colina deja ver la trama urbana al oeste.", route: ["Ubica la entrada en José María Aguirre.", "Sigue los caminos hacia el Palacio de Cristal.", "Recorre el mirador y vuelve por la misma salida."], transport: "La Alameda es una referencia de Metro. El tramo final sube hacia La Tola; considera taxi hasta la entrada si quieres evitar la cuesta.", photo: "Desde el paseo del mirador hacia el centro busca una vista amplia de las cubiertas; para el palacio retrocede al borde del camino.", faq: ["¿El acceso al parque asegura la entrada al Palacio de Cristal?", "El acceso al centro cultural depende de su programación. Revisa la agenda si quieres entrar."] },
    en: { title: "Itchimbía Park", intro: "Climb the hill for views of Quito’s centre and the iron structure of a former market.", about: "Quito Municipality’s EPMMOP looks after the park. The cultural centre reuses the frame of the former Santa Clara Market, imported from Hamburg in the late nineteenth century.", architecture: "From outside the Crystal Palace, notice the repeating ironwork and the transparent panels. The hill opens up views of the street grid to the west.", route: ["Find the entrance on José María Aguirre.", "Follow park paths toward the Crystal Palace.", "Walk the overlook and return to the same exit."], transport: "La Alameda is a Metro reference point. The final leg into La Tola climbs uphill, so consider a taxi to the gate if needed.", photo: "Use the overlook facing the old town for rooflines. For the palace, step back to the edge of the path.", faq: ["Does park access guarantee entry to the Crystal Palace?", "Cultural centre access follows its event programme. Check the listings if you plan to go inside."] },
    zh: { title: "伊欽比亞公園", intro: "登上山丘俯瞰基多老城，觀察由昔日市場構架改建的水晶宮。", about: "公園由基多市政府旗下 EPMMOP 維護。水晶宮文化中心沿用舊 Santa Clara 市場的構架，原構架於十九世紀末從漢堡引進。", architecture: "從水晶宮外側觀察重複排列的鐵構件與通透牆面，再由山坡朝西看老城街廓。", route: ["找到 José María Aguirre 街上的入口。", "沿園內步道前往水晶宮。", "走到觀景區後，由原路返回入口。"], transport: "可從 La Alameda 地鐵站接駁，通往 La Tola 的最後一段為上坡；也可搭車至公園入口。", photo: "到朝向老城的觀景步道拍屋頂線；拍水晶宮時可退至步道外緣。", faq: ["進入公園就能參觀水晶宮嗎？", "文化中心依活動安排開放，想進入室內請先檢視展演資訊。"] },
  },
  alameda: {
    address: "Av. Gran Colombia y Av. 10 de Agosto, sector La Alameda", station: "La Alameda",
    source: "https://www.epmmop.gob.ec/parques/parque-la-alameda/",
    es: { title: "Parque La Alameda", intro: "Un paseo histórico alrededor de la laguna, el Observatorio Astronómico y el mirador de El Churo.", about: "La EPMMOP del Municipio de Quito mantiene La Alameda, que describe como el parque más antiguo de la ciudad. Su observatorio se construyó en 1873.", architecture: "Compara el volumen del observatorio con la rampa en espiral de El Churo y observa cómo ambos se integran al jardín.", route: ["Entra desde el sector de Gran Colombia.", "Bordea la laguna hasta los caminos del observatorio.", "Completa el paseo junto al Churo."], transport: "Baja en La Alameda, Línea 1; consulta la salida más próxima a Gran Colombia.", photo: "Encuadra la laguna desde el sendero de la orilla, con el arbolado al fondo.", faq: ["¿Puedo visitar el observatorio con la entrada al parque?", "El observatorio tiene su propia atención. Consulta su programación si quieres entrar."] },
    en: { title: "La Alameda Park", intro: "Walk around the lagoon, the Astronomical Observatory and the spiral viewpoint known as El Churo.", about: "Quito Municipality’s EPMMOP maintains La Alameda, which it identifies as the city’s oldest park. Its observatory was built in 1873.", architecture: "Compare the observatory building with the spiral ramp of El Churo and notice how both fit into the gardens.", route: ["Enter near Gran Colombia.", "Follow the lagoon toward the observatory paths.", "Finish beside El Churo."], transport: "Take Line 1 to La Alameda and use the exit nearest Gran Colombia.", photo: "Frame the lagoon from the shore path, using the trees as a backdrop.", faq: ["Does park access include the observatory?", "The observatory has its own visitor arrangements. Check its programme if you want to go inside."] },
    zh: { title: "拉阿拉梅達公園", intro: "沿湖走一圈，觀察天文臺與稱為 El Churo 的螺旋形觀景臺。", about: "拉阿拉梅達公園由基多市政府旗下 EPMMOP 維護，管理單位稱其為基多最古老的公園。園內天文臺建於 1873 年。", architecture: "比較天文臺建築與 El Churo 螺旋坡道的形體，觀察兩者如何嵌入園林。", route: ["由 Gran Colombia 一帶進入。", "沿湖走到天文臺周圍的步道。", "最後到 El Churo 旁停留。"], transport: "搭 1 號線到 La Alameda，檢視最靠近 Gran Colombia 大道的出口。", photo: "在湖岸步道拍攝水面，讓對岸樹列成為背景。", faq: ["進入公園就可以參觀天文臺嗎？", "天文臺有自己的參觀安排，想進室內請先查閱開放公告。"] },
  },
  ejido: {
    address: "Av. Patria y Av. 10 de Agosto", station: "El Ejido",
    source: "https://epmmop.quito.gob.ec/el-ejido/",
    es: { title: "Parque El Ejido", intro: "Senderos, esculturas y el arco de La Circasiana en el antiguo borde norte de Quito.", about: "El Municipio de Quito, a través de la EPMMOP, mantiene El Ejido. El nombre recuerda el antiguo límite norte de la ciudad hacia 1880.", architecture: "Busca el arco de piedra de La Circasiana y después observa las esculturas distribuidas entre los senderos.", route: ["Entra por el sector de Patria.", "Localiza el arco y recorre los caminos interiores.", "Vuelve al borde de Patria para enlazar con el Metro."], transport: "Baja en El Ejido, Línea 1, y sigue la señalización hacia el parque.", photo: "Desde el camino frente al arco, enmarca su piedra desde un punto que no bloquee el paso.", faq: ["¿Se puede encontrar siempre la feria de artistas?", "La actividad de los artistas puede variar. Si te interesa, verifica el día y horario antes de salir."] },
    en: { title: "El Ejido Park", intro: "Walk among sculptures and the La Circasiana arch on what was once Quito’s northern edge.", about: "Quito Municipality maintains El Ejido through EPMMOP. Its name recalls the northern boundary of the city around 1880.", architecture: "Find the stone La Circasiana arch, then look for the sculptures spread along the park paths.", route: ["Enter from the Patria side.", "Find the arch and walk the inner paths.", "Return to Patria to reconnect with the Metro."], transport: "Take Line 1 to El Ejido and follow the signs toward the park.", photo: "Use the path opposite the stone arch to frame it while leaving the walkway clear.", faq: ["Is the artists’ market there every day?", "Artists’ activity varies. Check days and times if the market is the reason for your visit."] },
    zh: { title: "埃希多公園", intro: "在昔日基多北緣的綠地步行，看雕塑和 La Circasiana 石拱。", about: "公園由基多市政府旗下 EPMMOP 維護。El Ejido 的名稱反映此處約在 1880 年曾位於城市北界。", architecture: "先找 La Circasiana 石拱，再沿步道觀察散佈園內的雕塑。", route: ["從 Patria 大道一側入園。", "找到石拱後沿內側步道散步。", "回到 Patria 大道搭地鐵。"], transport: "搭 1 號線到 El Ejido，依站內指標往公園出口。", photo: "由石拱對面的步道拍攝，構圖時保留通行空間。", faq: ["每天都能逛到藝術市集嗎？", "藝術家擺攤時間可能不同，專程前往前請檢視當日安排。"] },
  },
  "museo-ciudad": {
    address: "García Moreno y Rocafuerte, antiguo Hospital San Juan de Dios", station: "San Francisco",
    source: "https://fundacionmuseosquito.gob.ec/museo-de-la-ciudad/",
    es: { title: "Museo de la Ciudad de Quito", intro: "Conoce la historia social de Quito en los patios y salas del antiguo Hospital San Juan de Dios.", about: "La Fundación Museos de la Ciudad gestiona el museo. El antiguo hospital es parte de la visita y conserva espacios que explican la historia de esta institución.", architecture: "Observa cómo las galerías de los patios conectan las salas. Compara los ambientes históricos con el montaje de las exposiciones sobre la ciudad.", route: ["Entra por García Moreno y revisa el plano.", "Empieza por la sala del hospital.", "Continúa por las exposiciones abiertas antes de volver al patio."], transport: "Desde San Francisco baja por García Moreno hacia Rocafuerte.", photo: "Si se permite fotografiar, encuadra el patio desde un acceso para mostrar la profundidad de las galerías.", faq: ["¿Puedo llegar a la hora de cierre?", "La fundación publica una última hora de ingreso distinta según el día. Revísala antes de salir."] },
    en: { title: "Museum of the City of Quito", intro: "Explore Quito’s social history in the galleries and courtyards of the former San Juan de Dios hospital.", about: "The Fundación Museos de la Ciudad manages the museum. The former hospital is part of the visit, with spaces that explain the institution’s history.", architecture: "Notice how the courtyard galleries connect the rooms. Compare the historic spaces with the displays on the city’s development.", route: ["Enter on García Moreno and check the museum plan.", "Start with the hospital gallery.", "Continue through the open exhibitions before returning to the courtyard."], transport: "From San Francisco station follow García Moreno downhill toward Rocafuerte.", photo: "Where photography is allowed, frame the courtyard from a doorway to show the depth of its galleries.", faq: ["Can I arrive at closing time?", "The foundation lists a last-entry time for each day. Check it before leaving."] },
    zh: { title: "基多城市博物館", intro: "在昔日聖胡安德迪奧斯醫院的庭院與展廳，瞭解基多的城市生活史。", about: "博物館由基多城市博物館基金會營運。昔日醫院本身也是展覽的一部分，保留的空間有助理解醫院的歷史。", architecture: "留意庭院的廊道如何串接各展廳，並比較舊醫院空間與呈現城市發展的展覽設計。", route: ["從 García Moreno 街進館並檢視平面圖。", "先看醫院展廳。", "走完當天開放的展覽，再回庭院。"], transport: "由 San Francisco 地鐵站沿 García Moreno 街下行至 Rocafuerte 一帶。", photo: "若館方允許拍攝，可由庭院出入口拍出廊道的縱深。", faq: ["閉館前才到還能入場嗎？", "館方按星期公佈不同的最後入場時間，出發前請先核對。"] },
  },
  yaku: {
    address: "El Placer Oe11-271, ingreso peatonal", station: "San Francisco",
    source: "https://museosquito.gob.ec/espacios/yaku-parque-museo-del-agua/",
    es: { title: "Yaku Parque Museo del Agua", intro: "Un museo en el barrio El Placer que conecta la vida cotidiana de Quito con el agua.", about: "Yaku forma parte de la Fundación Museos de la Ciudad. Sus espacios en El Placer interpretan la relación entre el agua, los ecosistemas y la vida urbana.", architecture: "Observa cómo se alternan los edificios, las fuentes exteriores y los espacios de exhibición en el terreno de la ladera.", route: ["Llega por el acceso elegido en El Placer.", "Consulta la programación de salas y actividades.", "Termina en el área exterior de fuentes si está habilitada."], transport: "San Francisco sirve de referencia para el Metro. Por la pendiente hacia El Placer, considera un taxi. La ficha del museo distingue dos entradas.", photo: "Desde el área exterior, si está abierta, encuadra las fuentes con el edificio del museo.", faq: ["¿Puedo llegar en auto por la entrada peatonal?", "La ficha distingue El Placer Oe11-271 para peatones y el acceso peatonal y vehicular por Bolívar y Rocafuerte."] },
    en: { title: "Yaku Water Museum", intro: "Explore the role of water in Quito’s everyday life at a museum in the El Placer neighbourhood.", about: "Yaku is part of the Fundación Museos de la Ciudad. Its El Placer spaces interpret the relationships between water, ecosystems and urban life.", architecture: "Notice how the buildings, outdoor fountains and exhibition areas fit along the sloping site.", route: ["Arrive at your chosen El Placer entrance.", "Check which exhibitions and activities are running.", "Finish in the outdoor fountain area if it is open."], transport: "San Francisco is the Metro reference point. Consider a taxi for the uphill leg to El Placer. The museum lists two different entrances.", photo: "If the outdoor area is open, frame the fountains with the museum building.", faq: ["Can I drive to the pedestrian entrance?", "The museum lists El Placer Oe11-271 for pedestrians and Bolívar and Rocafuerte for pedestrians and vehicles."] },
    zh: { title: "Yaku 水博物館", intro: "走進 El Placer 街區的水博物館，瞭解水與基多的城市生活如何相連。", about: "Yaku 隸屬基多城市博物館基金會。El Placer 的展覽空間用於介紹水、生態與都市生活的關係。", architecture: "觀察山坡上館舍、戶外噴泉與展覽空間如何依地形相間排列。", route: ["依交通方式選擇 El Placer 的入口。", "進館先看當日展廳和活動時段。", "若戶外區開放，可在噴泉區結束行程。"], transport: "可從 San Francisco 地鐵站接駁。前往 El Placer 有上坡，可以搭車；出發前先核對館方的兩處入口。", photo: "戶外區開放時，可將噴泉和後方館舍一起入鏡。", faq: ["可以從行人入口開車進去嗎？", "館方列明 El Placer Oe11-271 供行人使用，Bolívar 與 Rocafuerte 入口可供行人及車輛使用。"] },
  },
  ...moreLandmarks,
} satisfies Record<string, Landmark>;

export type LandmarkSlug = keyof typeof landmarks;
export const landmarkTopics = Object.keys(landmarks) as LandmarkSlug[];
