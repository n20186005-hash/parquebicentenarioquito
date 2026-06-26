export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "公园概览",
      visiting: "游览指南",
      transportation: "交通接驳",
      tips: "游览建议",
      gallery: "照片画廊",
      reviews: "游客评价",
      faq: "常见问题",
      location: "地图位置",
    },
    hero: {
      tagline: "基多最大的城市生态公园",
      title: "百年纪念公园",
      subtitle: "Parque Bicentenario",
      cta: "探索公园之旅",
    },
    rating: {
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "公园概览：从惊险机场到城市绿肺的传奇蜕变",
      p1: "📖 传奇历史：飞向自由的跑道\n\n名字的由来：为何叫百年纪念？\n“百年纪念”旨在致敬1822年皮钦查战役，纪念厄瓜多尔独立200周年。这片土地见证了国家的腾飞，如今则守护着市民的宁静。\n\n一场拒绝商业化的城市奇迹\n想象一下，几十年前，巨大的波音客机就在你头顶几十米处呼啸而过，穿梭在安第斯山脉和密集的都市高楼之间。由于基多城市的高速扩张，旧机场最终被完全包围。曾经，大型客机在降落时必须惊险地贴着市区的屋顶和山脉穿梭，这里也被认为是世界上最具挑战性的机场之一。\n\n随着2013年2月19日最后一架航班起飞，这座处于高海拔且惊险万分的旧机场完成了它的历史使命。基多市政府面临着一个巨大的诱惑：这块位于市中心的125公顷黄金地段如果卖给房地产商将价值连城。但基多做出了一个造福子孙的决定——将其完全保留并打造成免费的公共生态公园。仅仅两个月后的2013年4月27日，这里奇迹般地化身为生态公园。开园首日，市长带领上万名市民涌入这里，象征性地“收复”了这片土地，这是一次全球城市规划史上堪称典范的“空间回收（Upcycling）”奇迹。",
      p2: "🗺️ 探索公园：您不容错过的必打卡亮点\n\n🚲 在3公里长的飞机跑道上骑行\n保留下来的长达3000多米、宽46米的原始沥青主跑道，如今变成了世界上最宽阔的自行车和溜冰道。\n\n✈️ 厄瓜多尔空军航空航天博物馆\n公园内保留了部分航空元素，游客可以在这里看到退役的战斗机和航空历史展览。\n\n🏛️ 基多大都会会议中心（CCMQ）\n建在旧航站楼遗址区域，如今是基多举办大型国际展览和文化活动的核心地标。\n\n🌿 黄树林（Bosque Amarillo）与湿地\n公园不仅保留了工业遗迹，还种植了数以千计的安第斯高原特有植物，形成了观鸟绝佳的微型生态系统。",
      highlights: {
        title: "景点速览 (Quick Facts)",
        items: [
          "地理位置：厄瓜多尔，基多，Antigua terminal aerea, Av. Río Amazonas",
          "面积：125 公顷（基多最大城市公园）",
          "前身：旧苏克雷元帅国际机场（1930s-2013）",
          "核心亮点：3公里旧跑道骑行、航空航天博物馆、安第斯湿地观鸟",
          "开放时间：每日 06:00 – 18:00（全年无休，免费开放）",
        ],
      },
      timeline: {
        title: "历史时间轴",
        events: [
          { period: "1930年代", description: "苏克雷元帅国际机场在现址正式落成并投入使用" },
          { period: "2013年2月19日", description: "最后一架航班起飞，旧机场正式关闭，结束了其历史使命" },
          { period: "2013年4月27日", description: "百年纪念公园奇迹般地正式对公众开放，上万名市民涌入“收复”这片土地" },
          { period: "至今", description: "公园持续扩建和完善，增设大都会会议中心和生态湿地，成为基多最大的城市绿肺" }
        ]
      },
      management: {
        title: "公园的管理与官方机构",
        content: "百年纪念公园由基多公共空间与工程局（EPMMOP）直接管理和维护。作为基多最重要的城市公园之一，公园的日常运营包括绿化养护、安保服务、活动场地租赁以及生态保护项目的实施。公园内设有游客服务中心，提供园区地图和基本咨询服务。建议通过官方网站或电话查询开放状态及特别活动信息。",
      },
    },
    visiting: {
      title: "游览指南 (Visitor Information)",
      hours: {
        title: "开放时间",
        content: "每日：06:00 – 18:00\n公园全年无休，节假日正常开放",
        note: "部分设施（如游客中心、洗手间）的开放时间可能略有不同，建议出发前通过官方渠道确认。",
      },
      price: {
        title: "门票参考",
        content: "免费入园\n部分特别活动或设施可能需要单独购票",
        note: "公园对公众免费开放。宠物入园需系好牵引绳，并及时清理宠物排泄物。",
      },
      duration: {
        title: "建议游览时长与气候",
        content: "建议预留 2 - 4 小时",
        note: "基多海拔约2,850米，气候温和但紫外线强。建议穿着舒适的运动鞋，并做好防晒准备。",
      },
      animals: {
        title: "公园居民：多样化的生态环境",
        content: "作为一个生态公园，百年纪念公园是多种鸟类和小型动物的栖息地。您可能会在湿地保护区观察到各种安第斯高原鸟类。请尊重野生动物，不要投喂或惊扰它们。宠物可以入园，但必须全程系好牵引绳。",
      },
      bring: {
        title: "游览准备",
        items: [
          "高倍数防晒霜和遮阳帽（高原紫外线极强）",
          "舒适的运动鞋（园区面积大，需要较长时间步行）",
          "饮用水和轻食（园区内有小吃摊，但建议自备）",
          "相机或手机（公园景观优美，非常适合摄影）",
          "宠物主人请携带宠物粪便清理袋",
        ],
      },
    },
    transportation: {
      title: "交通接驳：如何前往百年纪念公园",
      airport: {
        title: "从塔巴菲拉新机场（UIO）出发",
        content: "百年纪念公园位于基多市区北部，距离新机场约 40 公里，车程约 1 小时。以下是详细的交通方案：",
        options: [
          {
            name: "方案 A：出租车/网约车（最便捷）",
            price: "$25 - $35 美元",
            time: "约 1 小时",
            steps: [
              "第 1 步：提取行李后，在机场到达大厅的官方出租车柜台或网约车接驳区乘车。",
              "第 2 步：告知司机目的地为「Parque Bicentenario」或「Antigua terminal aerea」。",
              "第 3 步：车程约 1 小时，具体时间取决于交通状况。",
              "第 4 步：公园有多个入口，建议让司机停在靠近您想先参观区域的入口。",
            ]
          },
          {
            name: "方案 B：机场快线巴士（经济实惠）",
            price: "$2 - $3 美元",
            time: "约 1.5 小时",
            steps: [
              "第 1 步：在机场外乘坐前往基多市中心（Centro Histórico）或北部商务区（La Carolina）的机场快线巴士。",
              "第 2 步：在「Río Amazonas」或「La Carolina」站下车。",
              "第 3 步：换乘出租车或步行约 15-20 分钟到达公园入口。",
            ]
          },
          {
            name: "方案 C：基多地铁系统（最新最酷的选择）",
            price: "$0.45 美元",
            time: "约 1 小时",
            steps: [
              "第 1 步：从机场乘坐接驳巴士或出租车前往最近的地铁站（如 Estación La Magdalena）。",
              "第 2 步：乘坐基多地铁（Metro de Quito）至「Estación El Labrador」或「Estación Jipijapa」。",
              "第 3 步：出站后换乘出租车或步行约 10-15 分钟到达公园。",
            ]
          }
        ]
      },
      city: {
        title: "从基多市区自驾或租车",
        content: "如果您在基多租车，前往百年纪念公园的路线非常清晰。",
        steps: [
          "导航设置：在 Google Maps 或 Waze 中输入「Parque Bicentenario Quito」或地址「Av. Río Amazonas, Quito」。",
          "行车路线：从基多市中心或北部商务区出发，沿「Av. Río Amazonas」或「Av. de la Prensa」行驶，根据路标指示即可到达公园入口。",
          "停车指南：公园周边设有多个停车场，但周末及节假日车位较紧张，建议上午 10:00 前抵达。",
        ]
      },
      selfDrive: {
        title: "从其他城市前往基多",
        content: "如果您从厄瓜多尔其他主要城市前来，通常需要先抵达基多，再转车前往公园。",
        steps: [
          "从瓜亚基尔出发：乘坐长途巴士或国内航班飞往基多，再转乘出租车或地铁前往公园（总行程约 10-12 小时）。",
          "从昆卡出发：乘坐夜间巴士或国内航班飞往基多，再转乘出租车或地铁前往公园（建议至少安排两天一夜的行程）。",
          "导航提醒：基多市区交通较为拥堵，建议使用导航 App 实时避开拥堵路段。",
        ]
      }
    },
    tips: {
      title: "游览建议",
      items: [
        "最佳游览时间：清晨 06:00 - 09:00 或傍晚 16:00 - 18:00，气温凉爽宜人，适合散步和慢跑。",
        "拍照打卡：旧航站楼遗址和湿地保护区是公园内最受欢迎的拍照地点。",
        "家庭出游：公园内设有儿童游乐设施和宠物活动区，非常适合全家出游。",
        "尊重自然：百年纪念公园是重要的生态保护区，请在指定区域内活动，不要采摘植物或惊扰野生动物。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 查看更多相片",
    },
    reviews: {
      title: "游客评价",
      subtitle: "来自 Google Maps 的真实评价",
      viewMore: "在 Google Maps 查看更多评价",
    },
    faq: {
      title: "常见问题 (FAQ)",
      subtitle: "深入了解百年纪念公园",
      items: [
        {
          question: "百年纪念公园的前身是什么？",
          answer: "百年纪念公园的前身是苏克雷元帅国际机场（Aeropuerto Internacional Mariscal Sucre），该机场于2013年2月19日正式关闭。仅仅两个月后的2013年4月27日，这里奇迹般地化身为城市生态公园并对外开放。"
        },
        {
          question: "公园是否免费开放？",
          answer: "是的，百年纪念公园对公众免费开放。您无需购买门票即可进入公园游览。不过，部分特别活动或设施（如租赁场地举办活动）可能需要单独付费。"
        },
        {
          question: "公园适合跑步和骑行吗？",
          answer: "非常适合！公园内设有专门的慢跑径和自行车道，全长约 5-8 公里。许多基多市民会在清晨或傍晚来这里跑步、骑行或散步。您也可以自带自行车，或在公园附近租赁。"
        },
        {
          question: "可以在公园内野餐吗？",
          answer: "可以。公园内设有专门的野餐区和休息区，您可以在指定区域内野餐。但请注意，为了保护环境，请勿在草地上生火或使用明火。同时，请务必将垃圾带走或扔进垃圾桶。"
        },
        {
          question: "公园内有洗手间吗？",
          answer: "有。公园内设有多个公共洗手间，分布在主要景点附近。洗手间维护状况良好，免费使用。建议在游览前先查看园区地图，标记好洗手间的位置。"
        },
        {
          question: "如果只会说英语，游览时会有障碍吗？",
          answer: "基本不会。基多是一个国际化的城市，许多标识都有英文翻译。如果您需要帮助，公园的工作人员和服务人员通常能用西班牙语和基本的英语进行沟通。如果您只会说中文，建议提前下载离线翻译 App（如 Google Translate）。"
        },
        {
          question: "百年纪念公园是否适合观鸟？",
          answer: "非常适合！作为一个生态公园，百年纪念公园内设有湿地保护区，是多种安第斯高原鸟类的栖息地。如果您是观鸟爱好者，建议携带双筒望远镜，并在清晨或傍晚时分前往湿地保护区，您可能会观察到多种珍稀鸟类。"
        },
        {
          question: "附近还有哪些值得一游的景点？",
          answer: "从百年纪念公园出发，您可以顺路参观拉卡罗利纳公园（La Carolina Park）、基多大都会教堂（Catedral Metropolitana de Quito）、基多老城（Centro Histórico，联合国教科文组织世界遗产）或乘坐基多地铁体验这座城市的现代化交通系统。如果时间充裕，还可以前往赤道纪念碑（Mitad del Mundo）感受独特的赤道文化。"
        }
      ],
    },
    location: {
      title: "地图位置",
      address: "Antigua terminal aerea, Av. Río Amazonas, 170104 Quito, 厄瓜多尔",
      openMaps: "在 Google Maps 查看位置",
    },
    footer: {
      callToAction: "作为城市生态的守护者，请与我们一起遵守“不留痕迹（Leave No Trace）”原则，共同保护这片美丽的城市绿肺。",
      text: "© 2026 百年纪念公园旅行指南 · 保留所有权利。\n本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。",
      made: "本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。为探索者而制",
      linksTitle: "相关链接",
      links: [
        { name: "基多公共空间与工程局 (EPMMOP)", url: "https://www.epmmop.gob.ec/" },
        { name: "基多旅游局 (Visit Quito)", url: "https://visitquito.ec/" },
        { name: "基多大都会会议中心 (CCMQ)", url: "https://ccmq.ec/" },
        { name: "基多地铁系统 (Metro de Quito)", url: "https://metrodequito.gob.ec/" },
        { name: "旧苏克雷元帅国际机场 (Wikipedia)", url: "https://es.wikipedia.org/wiki/Antiguo_Aeropuerto_Internacional_Mariscal_Sucre" },
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
          "Opening Hours: Daily 06:00 – 18:00 (Open year-round, free admission)",
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
        content: "Daily: 06:00 – 18:00\nThe park is open year-round, including holidays",
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
      p1: "📖 Historia Legendaria: La Pista Hacia la Libertad\n\nEl Origen del Nombre: ¿Por qué Bicentenario?\nEl nombre \"Parque Bicentenario\" rinde homenaje a la Batalla de Pichincha de 1822, conmemorando el bicentenario de la independencia de Ecuador. Esta tierra ha sido testigo del ascenso de la nación y ahora guarda la tranquilidad de sus ciudadanos.\n\nUn Milagro que Rechazó la Comercialización\nImagínese hace décadas, enormes aviones de pasajeros Boeing rugiendo a pocos metros sobre su cabeza, navegando a través de las montañas de los Andes y los densos rascacielos de la ciudad. Con la rápida expansión de Quito, el antiguo aeropuerto quedó completamente rodeado. El 19 de febrero de 2013, despegó el último vuelo y este emocionante aeropuerto completó su misión histórica. El gobierno de la ciudad enfrentó una gran tentación: esta ubicación privilegiada de 125 hectáreas valdría una fortuna si se vendiera a desarrolladores inmobiliarios. Pero Quito tomó una decisión para las generaciones futuras: preservarla por completo y transformarla en un parque ecológico público gratuito. Apenas dos meses después, el 27 de abril de 2013, se abrió milagrosamente como parque ecológico. El día de la inauguración, el alcalde lideró a decenas de miles de ciudadanos para \"recuperar\" simbólicamente esta tierra, creando un milagro ejemplar de \"reciclaje urbano\" (upcycling) en la historia de la planificación urbana mundial.",
      p2: "🗺️ Explora el Parque: Puntos Destacados\n\n🚲 Ciclismo en la Pista de 3km\nLa pista principal de asfalto original conservada de 3.000 metros de largo y 46 metros de ancho se ha convertido ahora en la pista de ciclismo y patinaje más ancha del mundo.\n\n✈️ Museo Aeronáutico y del Espacio de la FAE\nEl parque conserva algunos elementos de aviación, y los visitantes pueden ver aviones de combate retirados y exhibiciones de historia de la aviación.\n\n🏛️ Centro de Convenciones Metropolitano de Quito (CCMQ)\nConstruido en el sitio de la antigua terminal, ahora es el hito central de Quito para albergar grandes exposiciones internacionales y eventos culturales.\n\n🌿 Bosque Amarillo y Humedales\nEl parque no solo preserva el patrimonio industrial, sino que también cuenta con miles de plantas andinas endémicas, creando un excelente microecosistema para la observación de aves.",
      highlights: {
        title: "Datos Rápidos (Quick Facts)",
        items: [
          "Ubicación: Antigua terminal aerea, Av. Río Amazonas, Quito, Ecuador",
          "Área: 125 hectáreas (El parque urbano más grande de Quito)",
          "Uso Anterior: Antiguo Aeropuerto Internacional Mariscal Sucre (1930s-2013)",
          "Puntos Destacados: Pista de 3km para ciclismo, museo aeroespacial, observación de aves",
          "Horario de Apertura: Diario 06:00 – 18:00 (Abierto todo el año, entrada gratuita)",
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
        content: "Diario: 06:00 – 18:00\nEl parque está abierto todo el año, incluidos los feriados",
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
      callToAction: "Como guardián de la ecología urbana, únase a nosotros para observar los principios de \"No Dejar Rastro\" (Leave No Trace) y proteger conjuntamente este hermoso pulmón verde urbano.",
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