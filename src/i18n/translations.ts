export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "公園概覽",
      visiting: "遊覽指南",
      transportation: "交通接駁",
      tips: "遊覽建議",
      gallery: "照片畫廊",
      reviews: "遊客評價",
      faq: "常見問題",
      location: "地圖位置",
    },
    hero: {
      tagline: "基多最大的城市生態公園",
      title: "二百週年公園",
      subtitle: "Parque Bicentenario",
      cta: "探索公園之旅",
    },
    rating: {
      reviews: "條評價",
      source: "Google 評論",
    },
    about: {
      title: "公園概覽：從驚險機場到城市綠肺的傳奇蛻變",
      p1: "📖 傳奇歷史：飛向自由的跑道\n\n名字的由來：為何叫二百週年？\n“二百週年”旨在致敬1822年皮欽查戰役，紀念厄瓜多獨立200週年。這片土地見證了國家的騰飛，如今則守護著市民的寧靜。\n\n一場拒絕商業化的城市奇蹟\n想像一下，幾十年前，巨大的波音客機就在你頭頂幾十米處呼嘯而過，穿梭在安第斯山脈和密集的都市高樓之間。由於基多城市的高速擴張，舊機場最終被完全包圍。曾經，大型客機在降落時必須驚險地貼著市區的屋頂和山脈穿梭，這裡也被認為是世界上最具挑戰性的機場之一。\n\n隨著2013年2月19日最後一架航班起飛，這座處於高海拔且驚險萬分的舊機場完成了它的歷史使命。基多市政府面臨著一個巨大的誘惑：這塊位於市中心的125公頃黃金地段如果賣給房地產商將價值連城。但基多做出了一個造福子孫的決定——將其完全保留並打造成免費的公共生態公園。僅僅兩個月後的2013年4月27日，這裡奇蹟般地化身為生態公園。開園首日，市長帶領上萬名市民湧入這裡，象徵性地“收復”了這片土地，這是一次全球城市規劃史上堪稱典範的“空間回收”奇蹟。",
      p2: "🗺️ 探索公園：您不容錯過的必打卡亮點\n\n🚲 在3公里長的飛機跑道上騎行\n保留下來的長達3000多米、寬46米的原始瀝青主跑道，如今變成了世界上最寬闊的腳踏車和溜冰道。\n\n✈️ 厄瓜多空軍航空航天博物館\n公園內保留了部分航空元素，遊客可以在這裡看到退役的戰鬥機和航空歷史展覽。\n\n🏛️ 基多大都會會議中心（CCMQ）\n建在舊航站樓遺址區域，如今是基多舉辦大型國際展覽和文化活動的核心地標。\n\n🌿 黃樹林（Bosque Amarillo）與溼地\n公園不僅保留了工業遺蹟，還種植了數以千計的安第斯高原特有植物，形成了觀鳥絕佳的微型生態系統。",
      highlights: {
        title: "景點速覽",
        items: [
          "地理位置：厄瓜多，基多，Antigua terminal aerea, Av. Río Amazonas",
          "面積：125 公頃（基多最大城市公園）",
          "前身：舊蘇克雷元帥國際機場（1930s-2013）",
          "核心亮點：3公里舊跑道騎行、航空航天博物館、安第斯溼地觀鳥",
          "開放時間：市府公佈的常規時段為 05:00–19:00，活動期間入口可能調整。",
        ],
      },
      timeline: {
        title: "歷史時間軸",
        events: [
          { period: "1930年代", description: "蘇克雷元帥國際機場在現址正式落成並投入使用" },
          { period: "2013年2月19日", description: "最後一架航班起飛，舊機場正式關閉，結束了其歷史使命" },
          { period: "2013年4月27日", description: "二百週年公園奇蹟般地正式對公眾開放，上萬名市民湧入“收復”這片土地" },
          { period: "至今", description: "公園持續擴建和完善，增設大都會會議中心和生態溼地，成為基多最大的城市綠肺" }
        ]
      },
      management: {
        title: "公園的管理與官方機構",
        content: "二百週年公園由基多公共空間與工程局（EPMMOP）直接管理和維護。作為基多最重要的城市公園之一，公園的日常運營包括綠化養護、安保服務、活動場地租賃以及生態保護專案的實施。公園內設有遊客服務中心，提供園區地圖和基本諮詢服務。建議透過官方網站或電話查詢開放狀態及特別活動資訊。",
      },
    },
    visiting: {
      title: "遊覽指南",
      hours: {
        title: "開放時間",
        content: "市府公佈的常規時段為 05:00–19:00。",
        note: "部分設施（如遊客中心、洗手間）的開放時間可能略有不同，建議出發前透過官方渠道確認。",
      },
      price: {
        title: "門票參考",
        content: "免費入園\n部分特別活動或設施可能需要單獨購票",
        note: "公園對公眾免費開放。寵物入園需繫好牽引繩，並及時清理寵物排洩物。",
      },
      duration: {
        title: "建議遊覽時長與氣候",
        content: "建議預留 2 - 4 小時",
        note: "基多海拔約2,850米，氣候溫和但紫外線強。建議穿著舒適的運動鞋，並做好防曬準備。",
      },
      animals: {
        title: "公園居民：多樣化的生態環境",
        content: "作為一個生態公園，二百週年公園是多種鳥類和小型動物的棲息地。您可能會在溼地保護區觀察到各種安第斯高原鳥類。請尊重野生動物，不要投餵或驚擾它們。寵物可以入園，但必須全程繫好牽引繩。",
      },
      bring: {
        title: "遊覽準備",
        items: [
          "高倍數防曬霜和遮陽帽（高原紫外線極強）",
          "舒適的運動鞋（園區面積大，需要較長時間步行）",
          "飲用水和輕食（園區內有小吃攤，但建議自備）",
          "相機或手機（公園景觀優美，非常適合攝影）",
          "寵物主人請攜帶寵物糞便清理袋",
        ],
      },
    },
    transportation: {
      title: "交通接駁：如何前往二百週年公園",
      airport: {
        title: "從塔巴菲拉新機場（UIO）出發",
        content: "二百週年公園位於基多市區北部，距離新機場約 40 公里，車程約 1 小時。以下是詳細的交通方案：",
        options: [
          {
            name: "方案 A：計程車/網約車（最便捷）",
            price: "$25 - $35 美元",
            time: "約 1 小時",
            steps: [
              "第 1 步：提取行李後，在機場到達大廳的官方計程車櫃檯或網約車接駁區乘車。",
              "第 2 步：告知司機目的地為「Parque Bicentenario」或「Antigua terminal aerea」。",
              "第 3 步：車程約 1 小時，具體時間取決於交通狀況。",
              "第 4 步：公園有多個入口，建議讓司機停在靠近您想先參觀區域的入口。",
            ]
          },
          {
            name: "方案 B：機場快線巴士（經濟實惠）",
            price: "$2 - $3 美元",
            time: "約 1.5 小時",
            steps: [
              "第 1 步：在機場外乘坐前往基多市中心（Centro Histórico）或北部商務區（La Carolina）的機場快線巴士。",
              "第 2 步：在「Río Amazonas」或「La Carolina」站下車。",
              "第 3 步：換乘計程車或步行約 15-20 分鐘到達公園入口。",
            ]
          },
          {
            name: "方案 C：基多地鐵系統（最新最酷的選擇）",
            price: "$0.45 美元",
            time: "約 1 小時",
            steps: [
              "第 1 步：從機場乘坐接駁巴士或計程車前往最近的地鐵站（如 Estación La Magdalena）。",
              "第 2 步：乘坐基多地鐵（Metro de Quito）至「Estación El Labrador」或「Estación Jipijapa」。",
              "第 3 步：出站後換乘計程車或步行約 10-15 分鐘到達公園。",
            ]
          }
        ]
      },
      city: {
        title: "從基多市區自駕或租車",
        content: "如果您在基多租車，前往二百週年公園的路線非常清晰。",
        steps: [
          "導航設定：在 Google Maps 或 Waze 中輸入「Parque Bicentenario Quito」或地址「Av. Río Amazonas, Quito」。",
          "行車路線：從基多市中心或北部商務區出發，沿「Av. Río Amazonas」或「Av. de la Prensa」行駛，根據路標指示即可到達公園入口。",
          "停車指南：公園周邊設有多個停車場，但週末及節假日車位較緊張，建議上午 10:00 前抵達。",
        ]
      },
      selfDrive: {
        title: "從其他城市前往基多",
        content: "如果您從厄瓜多其他主要城市前來，通常需要先抵達基多，再轉車前往公園。",
        steps: [
          "從瓜亞基爾出發：乘坐長途巴士或國內航班飛往基多，再轉乘計程車或地鐵前往公園（總行程約 10-12 小時）。",
          "從昆卡出發：乘坐夜間巴士或國內航班飛往基多，再轉乘計程車或地鐵前往公園（建議至少安排兩天一夜的行程）。",
          "導航提醒：基多市區交通較為擁堵，建議使用導航 App 實時避開擁堵路段。",
        ]
      }
    },
    tips: {
      title: "遊覽建議",
      items: [
        "最佳遊覽時間：清晨 06:00 - 09:00 或傍晚 16:00 - 18:00，氣溫涼爽宜人，適合散步和慢跑。",
        "拍照打卡：舊航站樓遺址和溼地保護區是公園內最受歡迎的拍照地點。",
        "家庭出遊：公園內設有兒童遊樂設施和寵物活動區，非常適合全家出遊。",
        "尊重自然：二百週年公園是重要的生態保護區，請在指定區域內活動，不要採摘植物或驚擾野生動物。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 檢視更多相片",
    },
    reviews: {
      title: "遊客評價",
      subtitle: "來自 Google Maps 的真實評價",
      viewMore: "在 Google Maps 檢視更多評價",
    },
    faq: {
      title: "常見問題",
      subtitle: "深入瞭解二百週年公園",
      items: [
        {
          question: "二百週年公園的前身是什麼？",
          answer: "二百週年公園的前身是蘇克雷元帥國際機場（Aeropuerto Internacional Mariscal Sucre），該機場於2013年2月19日正式關閉。僅僅兩個月後的2013年4月27日，這裡奇蹟般地化身為城市生態公園並對外開放。"
        },
        {
          question: "公園是否免費開放？",
          answer: "是的，二百週年公園對公眾免費開放。您無需購買門票即可進入公園遊覽。不過，部分特別活動或設施（如租賃場地舉辦活動）可能需要單獨付費。"
        },
        {
          question: "公園適合跑步和騎行嗎？",
          answer: "非常適合！公園內設有專門的慢跑徑和腳踏車道，全長約 5-8 公里。許多基多市民會在清晨或傍晚來這裡跑步、騎行或散步。您也可以自帶腳踏車，或在公園附近租賃。"
        },
        {
          question: "可以在公園內野餐嗎？",
          answer: "可以。公園內設有專門的野餐區和休息區，您可以在指定區域內野餐。但請注意，為了保護環境，請勿在草地上生火或使用明火。同時，請務必將垃圾帶走或扔進垃圾桶。"
        },
        {
          question: "公園內有洗手間嗎？",
          answer: "有。公園內設有多個公共洗手間，分佈在主要景點附近。洗手間維護狀況良好，免費使用。建議在遊覽前先檢視園區地圖，標記好洗手間的位置。"
        },
        {
          question: "如果只會說英語，遊覽時會有障礙嗎？",
          answer: "基本不會。基多是一個國際化的城市，許多標識都有英文翻譯。如果您需要幫助，公園的工作人員和服務人員通常能用西班牙語和基本的英語進行溝通。如果您只會說中文，建議提前下載離線翻譯 App（如 Google Translate）。"
        },
        {
          question: "二百週年公園是否適合觀鳥？",
          answer: "非常適合！作為一個生態公園，二百週年公園內設有溼地保護區，是多種安第斯高原鳥類的棲息地。如果您是觀鳥愛好者，建議攜帶雙筒望遠鏡，並在清晨或傍晚時分前往溼地保護區，您可能會觀察到多種珍稀鳥類。"
        },
        {
          question: "附近還有哪些值得一遊的景點？",
          answer: "從二百週年公園出發，您可以順路參觀拉卡羅利納公園（Parque La Carolina）、基多大都會教堂（Catedral Metropolitana de Quito）、基多老城（Centro Histórico，聯合國教科文組織世界遺產）或乘坐基多地鐵體驗這座城市的現代化交通系統。如果時間充裕，還可以前往赤道紀念碑（Mitad del Mundo）感受獨特的赤道文化。"
        }
      ],
    },
    location: {
      title: "地圖位置",
      address: "Antigua terminal aerea, Av. Río Amazonas, 170104 Quito, 厄瓜多",
      openMaps: "在 Google Maps 檢視位置",
    },
    footer: {
      callToAction: "作為城市生態的守護者，請與我們一起遵守“不留痕跡”原則，共同保護這片美麗的城市綠肺。",
      text: "© 2026 二百週年公園旅行指南 · 保留所有權利。\n本網站是一個獨立的第三方旅遊資訊專案。我們與當地政府或其他官方機構沒有任何關聯。",
      made: "本網站是一個獨立的第三方旅遊資訊專案。我們與當地政府或其他官方機構沒有任何關聯。為探索者而制",
      linksTitle: "相關連結",
      links: [
        { name: "基多公共空間與工程局 (EPMMOP)", url: "https://www.epmmop.gob.ec/" },
        { name: "基多旅遊局 (Visit Quito)", url: "https://visitquito.ec/" },
        { name: "基多大都會會議中心 (CCMQ)", url: "https://ccmq.ec/" },
        { name: "基多地鐵系統 (Metro de Quito)", url: "https://metrodequito.gob.ec/" },
        { name: "舊蘇克雷元帥國際機場 (Wikipedia)", url: "https://es.wikipedia.org/wiki/Antiguo_Aeropuerto_Internacional_Mariscal_Sucre" },
      ],
    },
  },
  en: {
    nav: {
      about: "Overview",
      visiting: "Visit Guide",
      transportation: "Getting There",
      tips: "Travel Tips",
      gallery: "Photo Gallery",
      reviews: "Reviews",
      faq: "FAQ",
      location: "Location",
    },
    hero: {
      tagline: "Quito's Largest Urban Ecological Park",
      title: "Parque Bicentenario",
      subtitle: "Bicentennial Park of Quito",
      cta: "Explore the Park",
    },
    rating: {
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "Overview: From Dangerous Airport to Urban Green Lung",
      p1: "📖 Legendary History: The Runway to Freedom\n\nThe Origin of the Name: Why Bicentennial?\nThe name \"Parque Bicentenario\" pays tribute to the 1822 Battle of Pichincha, commemorating the 200th anniversary of Ecuador's independence. This land has witnessed the nation's rise and now guards the tranquility of its citizens.\n\nA Miracle Refusing Commercialization\nImagine decades ago, massive Boeing airliners roaring just meters above your head, navigating through the Andes mountains and dense city high-rises. With the rapid expansion of Quito, the old airport was eventually completely surrounded by the city. On February 19, 2013, the last flight took off, and this thrilling high-altitude airport completed its historical mission. The city government faced a huge temptation: this 125-hectare prime location in the city center would be worth a fortune if sold to real estate developers. But Quito made a decision for future generations—to completely preserve it and transform it into a free public ecological park. Just two months later, on April 27, 2013, it miraculously opened as an ecological park. On opening day, the mayor led tens of thousands of citizens to symbolically \"reclaim\" this land, creating an exemplary \"upcycling\" miracle in global urban planning history.",
      p2: "🗺️ Explore the Park: Must-Visit Highlights\n\n🚲 Cycling on the 3km Runway\nThe preserved 3,000-meter-long, 46-meter-wide original asphalt main runway has now become the world's widest cycling and skating track.\n\n✈️ Ecuadorian Air Force Aeronautical and Space Museum\nThe park retains some aviation elements, and visitors can see retired fighter jets and aviation history exhibitions here.\n\n🏛️ Metropolitan Convention Center of Quito (CCMQ)\nBuilt on the site of the old terminal, it is now Quito's core landmark for hosting large international exhibitions and cultural events.\n\n🌿 Yellow Forest (Bosque Amarillo) and Wetlands\nThe park not only preserves industrial heritage but also has thousands of endemic Andean plants, creating an excellent micro-ecosystem for bird watching.",
      highlights: {
        title: "Quick Facts",
        items: [
          "Location: Antigua terminal aerea, Av. Río Amazonas, Quito, Ecuador",
          "Area: 125 hectares (Quito's largest urban park)",
          "Former Use: Old Mariscal Sucre International Airport (1930s-2013)",
          "Highlights: 3km runway cycling, aerospace museum, Andean wetland bird watching",
          "Usual hours published by the city: 05:00–19:00. Event days may affect access.",
        ],
      },
      timeline: {
        title: "Historical Timeline",
        events: [
          { period: "1930s", description: "Mariscal Sucre International Airport officially opened at the current site" },
          { period: "February 19, 2013", description: "The last flight took off, and the old airport officially closed, completing its historical mission" },
          { period: "April 27, 2013", description: "Parque Bicentenario miraculously opened to the public, with tens of thousands of citizens \"reclaiming\" the land" },
          { period: "Present", description: "The park continues to expand, adding the Metropolitan Convention Center and ecological wetlands, becoming Quito's largest green lung" }
        ]
      },
      management: {
        title: "Park Management and Official Authorities",
        content: "Parque Bicentenario is directly managed and maintained by the Public Space and Works Agency of Quito (EPMMOP). As one of Quito's most important urban parks, the park's daily operations include green space maintenance, security services, event venue rentals, and the implementation of ecological conservation projects. The park has a visitor service center that provides park maps and basic consulting services. It is recommended to check the official website or call to confirm opening status and special event information.",
      },
    },
    visiting: {
      title: "Visitor Information",
      hours: {
        title: "Operating Hours",
        content: "Usual hours published by the city: 05:00–19:00.",
        note: "The opening hours of some facilities (such as the visitor center and restrooms) may vary slightly. It is recommended to confirm via official channels before departure.",
      },
      price: {
        title: "Ticket Information",
        content: "Free Admission\nSome special events or facilities may require separate tickets",
        note: "The park is free and open to the public. Pets are allowed but must be kept on a leash at all times, and owners must clean up after them.",
      },
      duration: {
        title: "Recommended Duration & Climate",
        content: "Recommended visit duration: 2 - 4 hours",
        note: "Quito is located at an altitude of approximately 2,850 meters. The climate is mild but the UV radiation is strong. It is recommended to wear comfortable sneakers and prepare for sun protection.",
      },
      animals: {
        title: "Park Residents: Diverse Ecological Environment",
        content: "As an ecological park, Parque Bicentenario is home to a variety of birds and small animals. You may observe various Andean highland bird species in the wetland conservation area. Please respect wildlife, and do not feed or disturb them. Pets are allowed in the park but must be kept on a leash at all times.",
      },
      bring: {
        title: "Preparation",
        items: [
          "High-SPF sunscreen and sun hat (extreme high-altitude UV exposure)",
          "Comfortable sneakers (the park is large and requires a long time to walk)",
          "Drinking water and light snacks (there are snack stands in the park, but it is recommended to bring your own)",
          "Camera or smartphone (the park has beautiful scenery and is great for photography)",
          "Pet owners should bring pet waste clean-up bags",
        ],
      },
    },
    transportation: {
      title: "Getting There: How to Reach Parque Bicentenario",
      airport: {
        title: "From the New Tababela Airport (UIO)",
        content: "Parque Bicentenario is located in the northern part of Quito, about 40 km from the new airport, about a 1-hour drive. Here are the detailed transportation options:",
        options: [
          {
            name: "Option A: Taxi/Ride-hailing (Most Convenient)",
            price: "$25 - $35 USD",
            time: "About 1 hour",
            steps: [
              "Step 1: After claiming luggage, take a taxi or ride-hailing service from the official taxi counter or ride-hailing pick-up area in the airport arrivals hall.",
              "Step 2: Tell the driver the destination is \"Parque Bicentenario\" or \"Antigua terminal aerea\".",
              "Step 3: The trip takes about 1 hour, depending on traffic conditions.",
              "Step 4: The park has multiple entrances. It is recommended to ask the driver to drop you off at the entrance closest to the area you want to visit first.",
            ]
          },
          {
            name: "Option B: Airport Express Bus (Budget-Friendly)",
            price: "$2 - $3 USD",
            time: "About 1.5 hours",
            steps: [
              "Step 1: Take the airport express bus to the Quito city center (Centro Histórico) or the northern business district (La Carolina) from outside the airport.",
              "Step 2: Get off at the \"Río Amazonas\" or \"La Carolina\" stop.",
              "Step 3: Transfer to a taxi or walk about 15-20 minutes to reach the park entrance.",
            ]
          },
          {
            name: "Option C: Quito Metro System (Newest and Coolest Option)",
            price: "$0.45 USD",
            time: "About 1 hour",
            steps: [
              "Step 1: From the airport, take a shuttle bus or taxi to the nearest metro station (e.g., Estación La Magdalena).",
              "Step 2: Take the Quito Metro (Metro de Quito) to \"Estación El Labrador\" or \"Estación Jipijapa\".",
              "Step 3: After exiting the station, transfer to a taxi or walk about 10-15 minutes to reach the park.",
            ]
          }
        ]
      },
      city: {
        title: "Self-Drive from Quito Downtown",
        content: "If you rent a car in Quito, the route to Parque Bicentenario is very clear.",
        steps: [
          "Navigation: Enter \"Parque Bicentenario Quito\" or the address \"Av. Río Amazonas, Quito\" in Google Maps or Waze.",
          "Driving Route: Depart from Quito city center or the northern business district, drive along \"Av. Río Amazonas\" or \"Av. de la Prensa\", and follow the signs to the park entrance.",
          "Parking: There are multiple parking lots around the park, but parking spaces are tight on weekends and holidays. It is recommended to arrive before 10:00 AM.",
        ]
      },
      selfDrive: {
        title: "Traveling from Other Cities to Quito",
        content: "If you are coming from other major cities in Ecuador, you usually need to arrive in Quito first, then transfer to local transportation to the park.",
        steps: [
          "From Guayaquil: Take a long-distance bus or domestic flight to Quito, then transfer to a taxi or the metro to the park (total trip about 10-12 hours).",
          "From Cuenca: Take an overnight bus or domestic flight to Quito, then transfer to a taxi or the metro to the park (it is recommended to arrange at least a two-day one-night trip).",
          "Navigation reminder: Quito city traffic is heavily congested. It is recommended to use a navigation App to avoid congested road sections in real-time.",
        ]
      }
    },
    tips: {
      title: "Travel Tips",
      items: [
        "Best Time to Visit: Early morning 06:00 - 09:00 or late afternoon 16:00 - 18:00, when the temperature is cool and pleasant, suitable for walking and jogging.",
        "Photo Ops: The old terminal ruins and the wetland conservation area are the most popular photo spots in the park.",
        "Family Outing: The park has children's play facilities and pet activity areas, making it very suitable for family outings.",
        "Respect Nature: Parque Bicentenario is an important ecological conservation area. Please stay within designated areas and do not pick plants or disturb wildlife.",
      ],
    },
    gallery: {
      title: "Photo Gallery",
      viewMore: "View More Photos on Google Maps",
    },
    reviews: {
      title: "Visitor Reviews",
      subtitle: "Real reviews from Google Maps",
      viewMore: "View More Reviews on Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Learn more about Parque Bicentenario",
      items: [
        {
          question: "What was the former use of Parque Bicentenario?",
          answer: "Parque Bicentenario was formerly the Mariscal Sucre International Airport, which officially closed on February 19, 2013. Just two months later, on April 27, 2013, the former airport site was miraculously transformed into an urban ecological park and opened to the public."
        },
        {
          question: "Is the park free to enter?",
          answer: "Yes, Parque Bicentenario is free and open to the public. You do not need to purchase a ticket to enter the park for a visit. However, some special events or facilities (such as venue rentals for events) may require separate payment."
        },
        {
          question: "Is the park suitable for running and cycling?",
          answer: "Very suitable! The park has dedicated jogging paths and cycling lanes, with a total length of about 5-8 km. Many Quito citizens come here to run, cycle, or walk in the early morning or late afternoon. You can bring your own bicycle or rent one near the park."
        },
        {
          question: "Can I have a picnic in the park?",
          answer: "Yes. The park has designated picnic areas and rest areas where you can have a picnic within the designated areas. However, please note that in order to protect the environment, please do not light fires or use open flames on the grass. At the same time, please make sure to take your trash with you or throw it in the trash cans."
        },
        {
          question: "Are there restrooms in the park?",
          answer: "Yes. There are multiple public restrooms in the park, distributed near major attractions. The restrooms are well-maintained and free to use. It is recommended to check the park map before your visit and mark the locations of the restrooms."
        },
        {
          question: "Will there be barriers if I only speak English?",
          answer: "Basically no. Quito is an international city, and many signs have English translations. If you need help, the park's staff and service personnel can usually communicate in Spanish and basic English. If you only speak Chinese, it is recommended to download an offline translation App (such as Google Translate) in advance."
        },
        {
          question: "Is Parque Bicentenario suitable for bird watching?",
          answer: "Very suitable! As an ecological park, Parque Bicentenario has a wetland conservation area and is home to a variety of Andean highland bird species. If you are a bird watching enthusiast, it is recommended to bring binoculars and go to the wetland conservation area in the early morning or late afternoon. You may observe a variety of rare birds."
        },
        {
          question: "What other attractions are worth visiting nearby?",
          answer: "Starting from Parque Bicentenario, you can visit La Carolina Park, the Metropolitan Cathedral of Quito (Catedral Metropolitana de Quito), the Quito Old Town (Centro Histórico, a UNESCO World Heritage Site), or experience the city's modern transportation system by taking the Quito Metro. If time permits, you can also go to the Mitad del Mundo (Middle of the World Monument) to experience the unique equatorial culture."
        }
      ],
    },
    location: {
      title: "Map Location",
      address: "Antigua terminal aerea, Av. Río Amazonas, 170104 Quito, Ecuador",
      openMaps: "View Location on Google Maps",
    },
    footer: {
      callToAction: "As a guardian of urban ecology, please join us in observing the \"Leave No Trace\" principles and jointly protect this beautiful urban green lung.",
      text: "© 2026 Parque Bicentenario Travel Guide · All rights reserved.\nThis website is an independent third-party travel information project. We have no affiliation with local government or other official institutions.",
      made: "This website is an independent third-party travel information project. We have no affiliation with local government or other official institutions. Made for explorers",
      linksTitle: "Related Links",
      links: [
        { name: "EPMMOP (Public Space and Works Agency of Quito)", url: "https://www.epmmop.gob.ec/" },
        { name: "Visit Quito (Quito Tourism Board)", url: "https://visitquito.ec/" },
        { name: "CCMQ (Quito Metropolitan Convention Center)", url: "https://ccmq.ec/" },
        { name: "Metro de Quito (Quito Metro System)", url: "https://metrodequito.gob.ec/" },
        { name: "Old Mariscal Sucre International Airport (Wikipedia)", url: "https://es.wikipedia.org/wiki/Antiguo_Aeropuerto_Internacional_Mariscal_Sucre" },
      ],
    },
  },
  es: {
    nav: {
      about: "Descripción General",
      visiting: "Guía de Visita",
      transportation: "Cómo Llegar",
      tips: "Consejos",
      gallery: "Galería de Fotos",
      reviews: "Reseñas",
      faq: "Preguntas Frecuentes",
      location: "Ubicación",
    },
    hero: {
      tagline: "El Parque Ecológico Urbano Más Grande de Quito",
      title: "Parque Bicentenario",
      subtitle: "El Pulmón Verde de Quito",
      cta: "Explora el Parque",
    },
    rating: {
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Descripción General: De Aeropuerto Peligroso a Pulmón Verde Urbano",
      p1: "📖 Historia Legendaria: La Pista Hacia la Libertad\n\nEl Origen del Nombre: ¿Por qué Bicentenario?\nEl nombre \"Parque Bicentenario\" rinde homenaje a la Batalla de Pichincha de 1822, conmemorando el bicentenario de la independencia de Ecuador. Esta tierra ha sido testigo del ascenso de la nación y ahora guarda la tranquilidad de sus ciudadanos.\n\nUn Milagro que Rechazó la Comercialización\nImagínese hace décadas, enormes aviones de pasajeros Boeing rugiendo a pocos metros sobre su cabeza, navegando a través de las montañas de los Andes y los densos rascacielos de la ciudad. Con la rápida expansión de Quito, el antiguo aeropuerto quedó completamente rodeado. El 19 de febrero de 2013, despegó el último vuelo y este emocionante aeropuerto completó su misión histórica. El gobierno de la ciudad enfrentó una gran tentación: esta ubicación privilegiada de 125 hectáreas valdría una fortuna si se vendiera a desarrolladores inmobiliarios. Pero Quito tomó una decisión para las generaciones futuras: preservarla por completo y transformarla en un parque ecológico público gratuito. Apenas dos meses después, el 27 de abril de 2013, se abrió milagrosamente como parque ecológico. El día de la inauguración, el alcalde lideró a decenas de miles de ciudadanos para \"recuperar\" simbólicamente esta tierra, creando un milagro ejemplar de \"reciclaje urbano\" en la historia de la planificación urbana mundial.",
      p2: "🗺️ Explora el Parque: Puntos Destacados\n\n🚲 Ciclismo en la Pista de 3km\nLa pista principal de asfalto original conservada de 3.000 metros de largo y 46 metros de ancho se ha convertido ahora en la pista de ciclismo y patinaje más ancha del mundo.\n\n✈️ Museo Aeronáutico y del Espacio de la FAE\nEl parque conserva algunos elementos de aviación, y los visitantes pueden ver aviones de combate retirados y exhibiciones de historia de la aviación.\n\n🏛️ Centro de Convenciones Metropolitano de Quito (CCMQ)\nConstruido en el sitio de la antigua terminal, ahora es el hito central de Quito para albergar grandes exposiciones internacionales y eventos culturales.\n\n🌿 Bosque Amarillo y Humedales\nEl parque no solo preserva el patrimonio industrial, sino que también cuenta con miles de plantas andinas endémicas, creando un excelente microecosistema para la observación de aves.",
      highlights: {
        title: "Datos básicos",
        items: [
          "Ubicación: Antigua terminal aerea, Av. Río Amazonas, Quito, Ecuador",
          "Área: 125 hectáreas (El parque urbano más grande de Quito)",
          "Uso Anterior: Antiguo Aeropuerto Internacional Mariscal Sucre (1930s-2013)",
          "Puntos Destacados: Pista de 3km para ciclismo, museo aeroespacial, observación de aves",
          "Horario habitual publicado por el Municipio: 05:00–19:00. Los accesos pueden cambiar por eventos.",
        ],
      },
      timeline: {
        title: "Línea de Tiempo Histórica",
        events: [
          { period: "1930s", description: "El Aeropuerto Internacional Mariscal Sucre abrió oficialmente en el sitio actual" },
          { period: "19 de febrero de 2013", description: "Despegó el último vuelo y el antiguo aeropuerto cerró oficialmente" },
          { period: "27 de abril de 2013", description: "El Parque Bicentenario se abrió milagrosamente al público, con miles de ciudadanos \"recuperando\" la tierra" },
          { period: "Actualidad", description: "El parque continúa expandiéndose, agregando el Centro de Convenciones Metropolitano y humedales ecológicos" }
        ]
      },
      management: {
        title: "Gestión del Parque y Autoridades Oficiales",
        content: "El Parque Bicentenario es gestionado y mantenido directamente por la Empresa Pública Metropolitana de Obras Públicas de Quito (EPMMOP). Como uno de los parques urbanos más importantes de Quito, las operaciones diarias del parque incluyen el mantenimiento de espacios verdes, servicios de seguridad, alquiler de locales para eventos y la implementación de proyectos de conservación ecológica. El parque cuenta con un centro de servicio al visitante que proporciona mapas del parque y servicios básicos de consulta. Se recomienda consultar el sitio web oficial o llamar para confirmar el estado de apertura e información sobre eventos especiales.",
      },
    },
    visiting: {
      title: "Información para Visitantes",
      hours: {
        title: "Horario de Operación",
        content: "Horario habitual publicado por el Municipio: 05:00–19:00.",
        note: "El horario de apertura de algunas instalaciones (como el centro de visitantes y los baños) puede variar ligeramente. Se recomienda confirmar a través de canales oficiales antes de la partida.",
      },
      price: {
        title: "Información de Boletos",
        content: "Entrada Gratuita\nAlgunos eventos especiales o instalaciones pueden requerir boletos separados",
        note: "El parque es gratuito y está abierto al público. Se permiten mascotas pero deben estar siempre con correa, y los dueños deben limpiar los desechos de sus mascotas.",
      },
      duration: {
        title: "Duración Recomendada y Clima",
        content: "Duración recomendada de la visita: 2 - 4 horas",
        note: "Quito está ubicado a una altitud de aproximadamente 2,850 metros. El clima es templado pero la radiación UV es fuerte. Se recomienda usar zapatos cómodos y prepararse para la protección solar.",
      },
      animals: {
        title: "Residentes del Parque: Diverso Entorno Ecológico",
        content: "Como un parque ecológico, el Parque Bicentenario es hogar de una variedad de aves y animales pequeños. Es posible que observe varias especies de aves de tierras altas andinas en el área de conservación de humedales. Por favor, respete la vida silvestre y no les dé de comer ni las moleste. Se permiten mascotas en el parque pero deben estar siempre con correa.",
      },
      bring: {
        title: "Preparación",
        items: [
          "Protector solar de alto FPS y sombrero (exposición extrema a rayos UV en altitud)",
          "Zapatos cómodos (el parque es grande y requiere mucho tiempo de caminata)",
          "Agua potable y snacks ligeros (hay puestos de comida en el parque, pero se recomienda traer los suyos)",
          "Cámara o teléfono inteligente (el parque tiene hermosos paisajes y es genial para la fotografía)",
          "Los dueños de mascotas deben traer bolsas para limpiar los desechos de sus mascotas",
        ],
      },
    },
    transportation: {
      title: "Cómo Llegar: Cómo Llegar al Parque Bicentenario",
      airport: {
        title: "Desde el Nuevo Aeropuerto de Tababela (UIO)",
        content: "El Parque Bicentenario se encuentra en la parte norte de Quito, a unos 40 km del nuevo aeropuerto, a aproximadamente 1 hora en automóvil. Aquí están las opciones detalladas de transporte:",
        options: [
          {
            name: "Opción A: Taxi/Ride-hailing (Más Conveniente)",
            price: "$25 - $35 USD",
            time: "Alrededor de 1 hora",
            steps: [
              "Paso 1: Después de reclamar el equipaje, tome un taxi o servicio de ride-hailing desde el mostrador de taxis oficiales o el área de recogida de ride-hailing en la sala de llegadas del aeropuerto.",
              "Paso 2: Dígale al conductor que el destino es \"Parque Bicentenario\" o \"Antigua terminal aerea\".",
              "Paso 3: El viaje toma alrededor de 1 hora, dependiendo de las condiciones del tráfico.",
              "Paso 4: El parque tiene múltiples entradas. Se recomienda pedirle al conductor que lo deje en la entrada más cercana al área que desea visitar primero.",
            ]
          },
          {
            name: "Opción B: Bus Express del Aeropuerto (Económico)",
            price: "$2 - $3 USD",
            time: "Alrededor de 1.5 horas",
            steps: [
              "Paso 1: Tome el bus express del aeropuerto al centro de Quito (Centro Histórico) o al distrito comercial norteño (La Carolina) desde fuera del aeropuerto.",
              "Paso 2: Bájese en la parada \"Río Amazonas\" o \"La Carolina\".",
              "Paso 3: Transfiera a un taxi o camine aproximadamente 15-20 minutos para llegar a la entrada del parque.",
            ]
          },
          {
            name: "Opción C: Sistema de Metro de Quito (Opción Más Nueva y Genial)",
            price: "$0.45 USD",
            time: "Alrededor de 1 hora",
            steps: [
              "Paso 1: Desde el aeropuerto, tome un bus de enlace o taxi a la estación de metro más cercana (por ejemplo, Estación La Magdalena).",
              "Paso 2: Tome el Metro de Quito (Metro de Quito) hasta \"Estación El Labrador\" o \"Estación Jipijapa\".",
              "Paso 3: Después de salir de la estación, transfiera a un taxi o camine aproximadamente 10-15 minutos para llegar al parque.",
            ]
          }
        ]
      },
      city: {
        title: "Conducción Propia desde el Centro de Quito",
        content: "Si alquila un automóvil en Quito, la ruta al Parque Bicentenario es muy clara.",
        steps: [
          "Navegación: Ingrese \"Parque Bicentenario Quito\" o la dirección \"Av. Río Amazonas, Quito\" en Google Maps o Waze.",
          "Ruta de Conducción: Salga del centro de Quito o del distrito comercial norteño, conduzca a lo largo de \"Av. Río Amazonas\" o \"Av. de la Prensa\" y siga los letreros hasta la entrada del parque.",
          "Estacionamiento: Hay múltiples estacionamientos alrededor del parque, pero los espacios de estacionamiento son limitados los fines de semana y días festivos. Se recomienda llegar antes de las 10:00 AM.",
        ]
      },
      selfDrive: {
        title: "Viajando desde Otras Ciudades a Quito",
        content: "Si viene desde otras ciudades principales de Ecuador, generalmente necesita llegar a Quito primero y luego transferirse al transporte local al parque.",
        steps: [
          "Desde Guayaquil: Tome un bus de larga distancia o un vuelo doméstico a Quito, luego transfiera a un taxi o al metro al parque (viaje total de aproximadamente 10-12 horas).",
          "Desde Cuenca: Tome un bus nocturno o un vuelo doméstico a Quito, luego transfiera a un taxi o al metro al parque (se recomienda organizar al menos un viaje de dos días y una noche).",
          "Recordatorio de navegación: El tráfico de la ciudad de Quito está muy congestionado. Se recomienda usar una aplicación de navegación para evitar secciones de carreteras congestionadas en tiempo real.",
        ]
      }
    },
    tips: {
      title: "Consejos de Viaje",
      items: [
        "Mejor Momento para Visitar: Madrugada 06:00 - 09:00 o tarde 16:00 - 18:00, cuando la temperatura es fresca y agradable, adecuada para caminar y trotar.",
        "Fotos: Las ruinas de la antigua terminal y el área de conservación de humedales son los lugares más populares para tomar fotos en el parque.",
        "Salida Familiar: El parque tiene instalaciones de juego para niños y áreas de actividad para mascotas, lo que lo hace muy adecuado para salidas familiares.",
        "Respetar la Naturaleza: El Parque Bicentenario es un área importante de conservación ecológica. Por favor, permanezca dentro de las áreas designadas y no recolecte plantas ni moleste a la vida silvestre.",
      ],
    },
    gallery: {
      title: "Galería de Fotos",
      viewMore: "Ver Más Fotos en Google Maps",
    },
    reviews: {
      title: "Reseñas de Visitantes",
      subtitle: "Reseñas reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Conozca más sobre el Parque Bicentenario",
      items: [
        {
          question: "¿Cuál fue el uso anterior del Parque Bicentenario?",
          answer: "El Parque Bicentenario fue anteriormente el Aeropuerto Internacional Mariscal Sucre, que cerró oficialmente el 19 de febrero de 2013. Apenas dos meses después, el 27 de abril de 2013, el sitio del antiguo aeropuerto se transformó milagrosamente en un parque ecológico urbano y se abrió al público."
        },
        {
          question: "¿Es gratuito entrar al parque?",
          answer: "Sí, el Parque Bicentenario es gratuito y está abierto al público. No necesita comprar un boleto para entrar al parque para una visita. Sin embargo, algunos eventos especiales o instalaciones (como el alquiler de locales para eventos) pueden requerir un pago separado."
        },
        {
          question: "¿Es adecuado el parque para correr y andar en bicicleta?",
          answer: "¡Muy adecuado! El parque tiene senderos de trotadero dedicados y ciclovías, con una longitud total de aproximadamente 5-8 km. Muchos ciudadanos de Quito vienen aquí para correr, andar en bicicleta o caminar en la madrugada o tarde. Puede traer su propia bicicleta o alquilar una cerca del parque."
        },
        {
          question: "¿Puedo hacer un picnic en el parque?",
          answer: "Sí. El parque tiene áreas designadas para picnic y áreas de descanso donde puede hacer un picnic dentro de las áreas designadas. Sin embargo, tenga en cuenta que, para proteger el medio ambiente, no encienda fuego ni use llamas abiertas sobre el césped. Al mismo tiempo, asegúrese de llevarse su basura con usted o tirarla en los botes de basura."
        },
        {
          question: "¿Hay baños en el parque?",
          answer: "Sí. Hay múltiples baños públicos en el parque, distribuidos cerca de las atracciones principales. Los baños están bien mantenidos y son de uso gratuito. Se recomienda consultar el mapa del parque antes de su visita y marcar las ubicaciones de los baños."
        },
        {
          question: "¿Habrá barreras si solo hablo inglés?",
          answer: "Básicamente no. Quito es una ciudad internacional, y muchos letreros tienen traducciones al inglés. Si necesita ayuda, el personal del parque y el personal de servicio generalmente pueden comunicarse en español e inglés básico. Si solo habla chino, se recomienda descargar una aplicación de traducción fuera de línea (como Google Translate) con anticipación."
        },
        {
          question: "¿Es adecuado el Parque Bicentenario para la observación de aves?",
          answer: "¡Muy adecuado! Como un parque ecológico, el Parque Bicentenario tiene un área de conservación de humedales y es hogar de una variedad de especies de aves de tierras altas andinas. Si es un entusiasta de la observación de aves, se recomienda traer binoculares y dirigirse al área de conservación de humedales en la madrugada o tarde. Es posible que observe una variedad de aves raras."
        },
        {
          question: "¿Qué otras atracciones vale la pena visitar cerca?",
          answer: "Comenzando desde el Parque Bicentenario, puede visitar el Parque La Carolina, la Catedral Metropolitana de Quito, el Centro Histórico de Quito (Patrimonio de la Humanidad de la UNESCO) o experimentar el sistema de transporte moderno de la ciudad tomando el Metro de Quito. Si el tiempo lo permite, también puede ir al Mitad del Mundo (Monumento del Medio del Mundo) para experimentar la única cultura ecuatorial."
        }
      ],
    },
    location: {
      title: "Ubicación en el Mapa",
      address: "Antigua terminal aerea, Av. Río Amazonas, 170104 Quito, Ecuador",
      openMaps: "Ver Ubicación en Google Maps",
    },
    footer: {
      callToAction: "Como guardián de la ecología urbana, únase a nosotros para observar los principios de \"No Dejar Rastro\" y proteger conjuntamente este hermoso pulmón verde urbano.",
      text: "© 2026 Guía de Viaje del Parque Bicentenario · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales.",
      made: "Este sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales. Hecho para exploradores",
      linksTitle: "Enlaces Relacionados",
      links: [
        { name: "EPMMOP (Empresa Pública Metropolitana de Obras Públicas de Quito)", url: "https://www.epmmop.gob.ec/" },
        { name: "Visit Quito (Ministerio de Turismo de Quito)", url: "https://visitquito.ec/" },
        { name: "CCMQ (Centro de Convenciones Metropolitano de Quito)", url: "https://ccmq.ec/" },
        { name: "Metro de Quito (Sistema de Metro de Quito)", url: "https://metrodequito.gob.ec/" },
        { name: "Antiguo Aeropuerto Internacional Mariscal Sucre (Wikipedia)", url: "https://es.wikipedia.org/wiki/Antiguo_Aeropuerto_Internacional_Mariscal_Sucre" },
      ],
    },
  },
};

export type LinkItem = { name: string; url: string };

export type FAQItem = { question: string; answer: string };

export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type TimelineEvent = { period: string; description: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    highlights: { title: string; items: string[] };
    timeline: {
      title: string;
      events: TimelineEvent[];
    };
    management: { title: string; content: string };
  };
  visiting: {
    title: string;
    hours: { title: string; content: string; note: string };
    price: { title: string; content: string; note: string };
    duration: { title: string; content: string; note: string };
    animals: { title: string; content: string };
    bring: { title: string; items: string[] };
  };
  transportation: {
    title: string;
    airport: { title: string; content: string; options: TransportOption[] };
    city: { title: string; content: string; steps: string[] };
    selfDrive: { title: string; content: string; steps: string[] };
  };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};