export const policySlugs = ["privacy", "terms", "cookies"] as const;
export type Policy = (typeof policySlugs)[number];

export const legal = {
  en: {
    titles: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" },
    updated: "Last updated: June 2026", back: "Back to homepage",
    privacy: [
      ["Information we collect", "We collect only the data necessary to provide the service. This may include:", ["Browsing data, such as IP address, browser type and pages visited", "Cookies and similar technologies", "Information you voluntarily provide through a contact form or email"]],
      ["How we use your information", "We use the information we collect to:", ["Improve content and the visitor experience", "Analyse traffic and usage patterns", "Respond to requests", "Comply with legal obligations"]],
      ["Third-party services", "The site may use Google Maps for maps and location data, Google Analytics for traffic analysis and Unsplash for images. These services have their own privacy policies."],
      ["Your rights", "Under the General Data Protection Regulation (GDPR) and related laws, you have the right to:", ["Access your personal data", "Request correction or deletion", "Object to processing", "Lodge a complaint with a supervisory authority"]],
    ],
    terms: [
      ["Access and use", "By accessing and using this site, you agree to these terms of service."],
      ["Use of content", "The content is provided for reference. We are an independent travel information site with no affiliation to attractions, public authorities or commercial operators."],
      ["Accuracy of information", "We aim to provide accurate, timely information. We do not guarantee its completeness or accuracy. Schedules, conditions and services may change without notice. Verify essential details with official sources before travelling."],
      ["Intellectual property", "The site design and original content are protected by copyright. Photographs retain their respective source credits. Google Maps data is used under Google’s terms."],
      ["Limitation of liability", "The site is provided as is, without warranty. We are not responsible for losses resulting from use of its information, including travel decisions based on its content."],
    ],
    cookie: {
      intro: "We use cookies to improve your browsing experience. Manage your preferences below.",
      names: ["Essential cookies", "Analytics cookies", "Preference cookies", "Marketing cookies"],
      descriptions: ["These cookies are essential for the site and cannot be disabled.", "These cookies help us understand site use through anonymous data.", "These cookies remember settings such as language and theme.", "These cookies support relevant advertising and measure campaign performance."],
      providers: ["Always active", "Google Analytics", "User preferences", "Personalised advertising"],
      active: "Enabled", inactive: "Disabled", provider: "Provider", consent: "Consent management",
      detail: "You can change these settings at any time. Disabling some cookies may affect site functionality.",
      save: "Save preferences", reject: "Reject optional cookies", saved: "Preferences saved.",
    },
  },
  es: {
    titles: { privacy: "Política de privacidad", terms: "Términos del servicio", cookies: "Preferencias de cookies" },
    updated: "Última actualización: junio de 2026", back: "Volver al inicio",
    privacy: [
      ["Información que recopilamos", "Recopilamos solo los datos necesarios para prestar el servicio. Pueden incluir:", ["Datos de navegación, como la dirección IP, el tipo de navegador y las páginas visitadas", "Cookies y tecnologías similares", "Información facilitada voluntariamente por formulario o correo electrónico"]],
      ["Cómo usamos tu información", "Usamos los datos recopilados para:", ["Mejorar el contenido y la experiencia de navegación", "Analizar el tráfico y los hábitos de uso", "Responder a solicitudes", "Cumplir nuestras obligaciones legales"]],
      ["Servicios de terceros", "El sitio puede utilizar Google Maps para mapas y datos de ubicación, Google Analytics para el análisis de tráfico y Unsplash para imágenes. Cada servicio tiene su propia política de privacidad."],
      ["Tus derechos", "De acuerdo con el Reglamento General de Protección de Datos (RGPD) y otras normas aplicables, puedes:", ["Acceder a tus datos personales", "Solicitar su rectificación o eliminación", "Oponerte al tratamiento", "Presentar una reclamación ante una autoridad supervisora"]],
    ],
    terms: [
      ["Acceso y uso", "Al acceder al sitio y utilizarlo, aceptas estos términos del servicio."],
      ["Uso del contenido", "El contenido se ofrece como referencia. Somos un sitio independiente de información turística sin afiliación a atracciones, organismos públicos ni operadores comerciales."],
      ["Exactitud de la información", "Procuramos publicar información precisa y actualizada. No garantizamos su integridad ni exactitud. Los horarios, condiciones y servicios pueden cambiar sin aviso. Confirma los datos importantes en fuentes oficiales antes de viajar."],
      ["Propiedad intelectual", "El diseño y el contenido original están protegidos por derechos de autor. Las fotos conservan los créditos de sus respectivas fuentes. El uso de datos de Google Maps se rige por los términos de Google."],
      ["Limitación de responsabilidad", "El sitio se ofrece tal cual, sin garantías. No asumimos responsabilidad por pérdidas derivadas del uso de sus datos, incluidas las decisiones de viaje basadas en el contenido."],
    ],
    cookie: {
      intro: "Usamos cookies para mejorar la navegación. Aquí puedes gestionar tus preferencias.",
      names: ["Cookies necesarias", "Cookies de análisis", "Cookies de preferencias", "Cookies de marketing"],
      descriptions: ["Son imprescindibles para el funcionamiento del sitio y no se pueden desactivar.", "Nos permiten entender el uso del sitio mediante datos anónimos.", "Recuerdan ajustes como el idioma o el tema.", "Permiten mostrar publicidad pertinente y medir el rendimiento de campañas."],
      providers: ["Siempre activas", "Google Analytics", "Preferencias del usuario", "Publicidad personalizada"],
      active: "Activa", inactive: "Inactiva", provider: "Proveedor", consent: "Gestión del consentimiento",
      detail: "Puedes cambiar estos ajustes en cualquier momento. Desactivar algunas cookies puede afectar el funcionamiento del sitio.",
      save: "Guardar preferencias", reject: "Rechazar cookies opcionales", saved: "Preferencias guardadas.",
    },
  },
  zh: {
    titles: { privacy: "隱私權政策", terms: "服務條款", cookies: "Cookie 設定" },
    updated: "最後更新：2026 年 6 月", back: "返回首頁",
    privacy: [
      ["我們蒐集的資訊", "我們僅蒐集提供服務所需的最低限度資料，可能包括：", ["瀏覽資料，例如 IP 位址、瀏覽器型別與造訪頁面", "Cookie 與類似技術", "您透過聯絡表單或電子郵件自願提供的資訊"]],
      ["我們如何使用您的資訊", "我們使用蒐集到的資訊，以便：", ["改善網站內容與瀏覽體驗", "分析流量與使用情形", "回覆請求", "履行法律義務"]],
      ["第三方服務", "本站可能使用 Google 地圖提供地圖與位置資訊、Google Analytics 分析流量，以及 Unsplash 提供圖片。各服務均有各自的隱私權政策。"],
      ["您的權利", "依據《一般資料保護規則》（GDPR）及相關法規，您可以：", ["查閱您的個人資料", "要求更正或刪除", "反對處理個人資料", "向主管機關提出申訴"]],
    ],
    terms: [
      ["造訪與使用", "造訪與使用本站，即表示您同意遵守本服務條款。"],
      ["內容使用", "本站內容僅供參考。本站為獨立的旅遊資訊網站，與景點、政府機構或商業營運商無隸屬關係。"],
      ["資訊準確性", "我們力求提供準確且即時的資訊，但無法保證完整或正確。行程、條件與服務可能變更。出發前請透過官方管道核對重要資料。"],
      ["智慧財產權", "本站設計及原創內容受著作權保護。圖片保留各自的來源標註。Google 地圖資料依 Google 的條款使用。"],
      ["責任限制", "本站依現況提供，不作任何保證。因使用本站資訊而產生的損失，包括依本站內容作出的旅行決定，本站不負責任。"],
    ],
    cookie: {
      intro: "我們使用 Cookie 改善瀏覽體驗。您可以在下方管理偏好設定。",
      names: ["必要 Cookie", "分析 Cookie", "偏好 Cookie", "行銷 Cookie"],
      descriptions: ["這些 Cookie 是網站正常運作所必需，無法關閉。", "這些 Cookie 透過匿名資料協助我們瞭解網站使用情形。", "這些 Cookie 會記住語言、主題等偏好。", "這些 Cookie 用於顯示相關廣告及衡量活動成效。"],
      providers: ["一律啟用", "Google Analytics", "使用者偏好", "個人化廣告"],
      active: "啟用", inactive: "停用", provider: "提供者", consent: "同意管理",
      detail: "您可隨時變更設定。關閉部分 Cookie 可能影響網站功能。",
      save: "儲存偏好", reject: "拒絕非必要 Cookie", saved: "已儲存偏好設定。",
    },
  },
} as const;
