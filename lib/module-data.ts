// Datos completos de todos los módulos y lecciones
export const moduleData = {
  1: {
    id: 1,
    title: "Fundamentos de WordPress",
    description: "Aprende los conceptos básicos de WordPress y cómo configurar tu primer sitio.",
    image: "/images/module-basics.png",
    lessons: [
      {
        id: 1,
        title: "Introducción a WordPress",
        description: "¿Qué es WordPress y por qué usarlo?",
        duration: "10 min",
        content: `
          <h2>¿Qué es WordPress?</h2>
          <p>WordPress es un sistema de gestión de contenidos (CMS) que permite crear y mantener un blog u otro tipo de web. Es una de las herramientas más populares para la creación de sitios web, con aproximadamente el 40% de todos los sitios web en Internet construidos con WordPress.</p>

          <h3>Características principales:</h3>
          <ul>
            <li><strong>Facilidad de uso:</strong> Interfaz intuitiva que no requiere conocimientos técnicos.</li>
            <li><strong>Flexibilidad:</strong> Personalizable a través de temas y plugins.</li>
            <li><strong>SEO friendly:</strong> Optimizado para motores de búsqueda desde su instalación.</li>
            <li><strong>Comunidad activa:</strong> Gran comunidad de desarrolladores y usuarios.</li>
            <li><strong>Open Source:</strong> Software de código abierto y gratuito.</li>
          </ul>

          <h3>WordPress.com vs WordPress.org</h3>
          <p>Es importante entender la diferencia entre WordPress.com y WordPress.org:</p>
          <ul>
            <li><strong>WordPress.org:</strong> Es el software que puedes descargar e instalar en tu propio servidor. Te da control total sobre tu sitio.</li>
            <li><strong>WordPress.com:</strong> Es un servicio alojado que utiliza el software de WordPress. Es más fácil de comenzar pero tiene limitaciones en la versión gratuita.</li>
          </ul>

          <p>En este curso nos centraremos principalmente en WordPress.org, ya que ofrece mayor flexibilidad y control para desarrollar sitios web profesionales.</p>
        `,
        image: "/images/lesson-wordpress-intro.png",
        quiz: [
          {
            id: 1,
            type: "multipleChoice",
            question: "¿Cuál es la diferencia principal entre WordPress.com y WordPress.org?",
            options: [
              "WordPress.com es la versión móvil y WordPress.org es la versión de escritorio",
              "WordPress.com es un servicio alojado y WordPress.org es el software que puedes instalar en tu propio servidor",
              "WordPress.com es gratuito y WordPress.org es de pago",
              "No hay diferencia, son lo mismo",
            ],
            correctAnswer: 1,
            explanation:
              "WordPress.com es un servicio alojado mientras que WordPress.org es el software que puedes instalar en tu propio servidor.",
          },
          {
            id: 2,
            type: "trueFalse",
            question: "WordPress es un sistema de gestión de contenidos (CMS) de código abierto.",
            correctAnswer: true,
            explanation:
              "WordPress es efectivamente un CMS de código abierto, lo que significa que su código fuente es accesible y modificable por cualquier persona.",
          },
          {
            id: 3,
            type: "fillInTheBlank",
            question: "WordPress utiliza ________ como lenguaje principal para el desarrollo de temas y plugins.",
            correctAnswer: "php",
            explanation:
              "PHP es el lenguaje de programación principal utilizado en WordPress para el desarrollo de temas y plugins.",
          },
        ],
      },
      {
        id: 2,
        title: "Instalación de WordPress",
        description: "Cómo instalar WordPress en un servidor",
        duration: "15 min",
        content: `
          <h2>Instalación de WordPress</h2>
          <p>Instalar WordPress en tu propio servidor te da control total sobre tu sitio web. Aquí te mostramos los pasos para realizar una instalación manual de WordPress.</p>

          <h3>Requisitos previos:</h3>
          <ul>
            <li>Un servidor web (como Apache o Nginx)</li>
            <li>PHP versión 7.4 o superior</li>
            <li>MySQL versión 5.6 o MariaDB versión 10.1 o superior</li>
            <li>Un cliente FTP (como FileZilla) para subir archivos</li>
          </ul>

          <h3>Pasos para la instalación:</h3>
          <ol>
            <li><strong>Descargar WordPress:</strong> Visita wordpress.org y descarga la última versión.</li>
            <li><strong>Crear una base de datos:</strong> Accede a tu panel de control de hosting y crea una base de datos MySQL y un usuario con todos los privilegios.</li>
            <li><strong>Configurar wp-config.php:</strong> Renombra el archivo wp-config-sample.php a wp-config.php y edítalo para incluir la información de tu base de datos.</li>
            <li><strong>Subir archivos:</strong> Sube todos los archivos de WordPress a tu servidor mediante FTP.</li>
            <li><strong>Ejecutar el instalador:</strong> Visita tu dominio en un navegador para iniciar el asistente de instalación de WordPress.</li>
          </ol>
        `,
        image: "/images/wordpress-installation.png",
        quiz: [
          {
            id: 1,
            type: "reorder",
            question: "Ordena los siguientes pasos para instalar WordPress en orden correcto:",
            options: [
              "Descargar WordPress",
              "Crear una base de datos",
              "Configurar wp-config.php",
              "Subir archivos al servidor",
              "Ejecutar el instalador",
            ],
            correctAnswer: [0, 1, 2, 3, 4],
            explanation:
              "El orden correcto para instalar WordPress es: descargar, crear base de datos, configurar wp-config.php, subir archivos y ejecutar el instalador.",
          },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: "Gestión de Contenido",
    description:
      "Domina la creación y organización de contenido en WordPress con páginas, entradas, categorías y medios.",
    image: "/images/module-content.png",
    lessons: [
      {
        id: 1,
        title: "Entradas vs Páginas",
        description: "Diferencias y cuándo usar cada una",
        duration: "8 min",
        content: `
          <h2>Entradas vs Páginas en WordPress</h2>
          <p>WordPress ofrece dos tipos principales de contenido: entradas y páginas. Entender la diferencia entre ambos es fundamental para estructurar correctamente tu sitio web.</p>

          <h3>Entradas (Posts)</h3>
          <p>Las entradas son contenido dinámico y cronológico, ideal para:</p>
          <ul>
            <li>Blogs y noticias</li>
            <li>Actualizaciones regulares</li>
            <li>Contenido que se beneficia de comentarios</li>
            <li>Información que debe organizarse por categorías y etiquetas</li>
          </ul>
          <p><strong>Características clave:</strong> Se muestran en orden cronológico inverso (las más recientes primero), se pueden categorizar y etiquetar, aparecen en el feed RSS.</p>

          <h3>Páginas</h3>
          <p>Las páginas son contenido estático y atemporal, ideal para:</p>
          <ul>
            <li>Información permanente (Acerca de, Contacto)</li>
            <li>Contenido independiente del tiempo</li>
            <li>Información que requiere una estructura jerárquica</li>
          </ul>
          <p><strong>Características clave:</strong> No tienen fecha, pueden organizarse jerárquicamente con páginas padre e hijas, no aparecen en feeds RSS, pueden usar plantillas personalizadas.</p>
        `,
        image: "/images/posts-vs-pages.png",
        quiz: [
          {
            id: 1,
            type: "multipleChoice",
            question: "¿Cuál es la principal diferencia entre entradas y páginas en WordPress?",
            options: [
              "Las entradas pueden tener imágenes, las páginas no",
              "Las entradas son contenido cronológico, las páginas son contenido estático",
              "Las entradas son gratuitas, las páginas son premium",
              "Las entradas son para texto, las páginas son para multimedia",
            ],
            correctAnswer: 1,
            explanation:
              "La principal diferencia es que las entradas están pensadas para contenido cronológico como blogs, mientras que las páginas son para contenido estático y atemporal.",
          },
        ],
      },
    ],
  },
  3: {
    id: 3,
    title: "Temas y Personalización",
    description: "Personaliza la apariencia de tu sitio WordPress con temas, widgets y el personalizador.",
    image: "/images/module-themes.png",
    lessons: [
      {
        id: 1,
        title: "Temas de WordPress",
        description: "Cómo elegir y cambiar temas",
        duration: "10 min",
        content: `
          <h2>Temas de WordPress</h2>
          <p>Los temas de WordPress controlan la apariencia y presentación de tu sitio web. Elegir el tema adecuado es fundamental para crear una experiencia visual atractiva para tus visitantes.</p>

          <h3>¿Qué es un tema de WordPress?</h3>
          <p>Un tema es un conjunto de archivos que determinan cómo se muestra tu contenido. Incluye plantillas, hojas de estilo CSS, JavaScript y otros archivos que definen:</p>
          <ul>
            <li>El diseño y estructura de tu sitio</li>
            <li>Los colores y tipografías</li>
            <li>La disposición de elementos en pantalla</li>
            <li>Funcionalidades específicas de diseño</li>
          </ul>
        `,
        image: "/images/wordpress-themes.png",
        quiz: [
          {
            id: 1,
            type: "multipleChoice",
            question: "¿Cuál es la principal diferencia entre temas gratuitos y premium en WordPress?",
            options: [
              "Los temas gratuitos son más rápidos",
              "Los temas premium ofrecen más funcionalidades y mejor soporte",
              "Los temas gratuitos son más seguros",
              "Los temas premium solo funcionan en hosting de pago",
            ],
            correctAnswer: 1,
            explanation:
              "Los temas premium generalmente ofrecen más funcionalidades, opciones de personalización, actualizaciones regulares y mejor soporte técnico que los temas gratuitos.",
          },
        ],
      },
    ],
  },
  4: {
    id: 4,
    title: "Plugins Esenciales",
    description: "Extiende la funcionalidad de WordPress con plugins para SEO, seguridad, rendimiento y más.",
    image: "/images/module-plugins.png",
    lessons: [
      {
        id: 1,
        title: "Introducción a los plugins",
        description: "Qué son los plugins y cómo funcionan",
        duration: "8 min",
        content: `
          <h2>Introducción a los Plugins de WordPress</h2>
          <p>Los plugins son extensiones que añaden funcionalidades específicas a tu sitio WordPress. Son como aplicaciones que puedes instalar para ampliar lo que tu sitio puede hacer.</p>

          <h3>¿Qué son los plugins?</h3>
          <p>Los plugins son paquetes de código (principalmente PHP) que se integran con WordPress para añadir nuevas características o modificar las existentes. Pueden ser tan simples como un widget o tan complejos como un sistema de comercio electrónico completo.</p>
        `,
        image: "/images/wordpress-plugins.png",
        quiz: [
          {
            id: 1,
            type: "trueFalse",
            question: "Los plugins de WordPress solo pueden añadir funcionalidades visuales al sitio.",
            correctAnswer: false,
            explanation:
              "Los plugins pueden añadir todo tipo de funcionalidades, desde elementos visuales hasta características de seguridad, rendimiento, SEO, e-commerce y mucho más.",
          },
        ],
      },
    ],
  },
  5: {
    id: 5,
    title: "SEO y Marketing",
    description: "Optimiza tu sitio WordPress para buscadores y aprende estrategias de marketing digital.",
    image: "/images/module-seo.png",
    lessons: [
      {
        id: 1,
        title: "Fundamentos de SEO",
        description: "Conceptos básicos de optimización para buscadores",
        duration: "15 min",
        content: `
          <h2>Fundamentos de SEO en WordPress</h2>
          <p>El SEO (Search Engine Optimization) es el conjunto de técnicas que ayudan a mejorar la visibilidad de un sitio web en los resultados de los motores de búsqueda. Un buen SEO puede aumentar significativamente el tráfico orgánico a tu sitio WordPress.</p>

          <h3>¿Por qué es importante el SEO?</h3>
          <p>Un buen SEO te permite:</p>
          <ul>
            <li>Aumentar la visibilidad de tu sitio en Google y otros buscadores</li>
            <li>Atraer tráfico orgánico (gratuito) de calidad</li>
            <li>Mejorar la experiencia de usuario</li>
            <li>Aumentar la credibilidad y autoridad de tu sitio</li>
            <li>Obtener ventaja competitiva en tu nicho</li>
          </ul>
        `,
        image: "/images/wordpress-seo.png",
        quiz: [
          {
            id: 1,
            type: "multipleChoice",
            question: "¿Cuál es el principal beneficio del SEO para un sitio WordPress?",
            options: [
              "Hacer que el sitio cargue más rápido",
              "Aumentar la visibilidad en los resultados de búsqueda",
              "Mejorar el diseño visual del sitio",
              "Reducir los costos de hosting",
            ],
            correctAnswer: 1,
            explanation:
              "El principal beneficio del SEO es aumentar la visibilidad del sitio en los resultados de los motores de búsqueda, lo que lleva a más tráfico orgánico.",
          },
        ],
      },
    ],
  },
  6: {
    id: 6,
    title: "WooCommerce",
    description: "Crea una tienda online completa con WordPress y WooCommerce.",
    image: "/images/module-woocommerce.png",
    lessons: [
      {
        id: 1,
        title: "Introducción a WooCommerce",
        description: "Qué es WooCommerce y cómo configurarlo",
        duration: "12 min",
        content: `
          <h2>Introducción a WooCommerce</h2>
          <p>WooCommerce es el plugin de comercio electrónico más popular para WordPress, que te permite convertir tu sitio en una tienda online completa y profesional.</p>

          <h3>¿Qué es WooCommerce?</h3>
          <p>WooCommerce es un plugin gratuito y de código abierto que añade funcionalidades de comercio electrónico a tu sitio WordPress. Fue adquirido por Automattic (la empresa detrás de WordPress.com) en 2015 y se ha convertido en la solución de e-commerce más utilizada en el mundo.</p>
        `,
        image: "/images/woocommerce-intro.png",
        quiz: [
          {
            id: 1,
            type: "trueFalse",
            question: "WooCommerce es un sistema de comercio electrónico independiente que no requiere WordPress.",
            correctAnswer: false,
            explanation:
              "WooCommerce es un plugin que funciona exclusivamente con WordPress y no puede utilizarse de forma independiente.",
          },
        ],
      },
    ],
  },
  7: {
    id: 7,
    title: "Seguridad y Mantenimiento",
    description:
      "Protege tu sitio WordPress y mantén un rendimiento óptimo con buenas prácticas de seguridad y mantenimiento.",
    image: "/images/module-security.png",
    lessons: [
      {
        id: 1,
        title: "Seguridad básica",
        description: "Protege tu sitio de amenazas comunes",
        duration: "15 min",
        content: `
          <h2>Seguridad Básica en WordPress</h2>
          <p>La seguridad es un aspecto fundamental para cualquier sitio web. WordPress, al ser tan popular, es un objetivo frecuente de ataques, por lo que implementar medidas de seguridad básicas es esencial.</p>

          <h3>¿Por qué es importante la seguridad?</h3>
          <p>Un sitio WordPress comprometido puede sufrir:</p>
          <ul>
            <li>Robo de datos sensibles</li>
            <li>Inserción de malware</li>
            <li>Redirecciones a sitios maliciosos</li>
            <li>Daño a la reputación de tu marca</li>
            <li>Pérdida de posicionamiento en buscadores</li>
            <li>Tiempo y dinero para recuperar el sitio</li>
          </ul>
        `,
        image: "/images/wordpress-security.png",
        quiz: [
          {
            id: 1,
            type: "multipleChoice",
            question: "¿Cuál de las siguientes NO es una consecuencia común de un sitio WordPress hackeado?",
            options: [
              "Inserción de malware",
              "Redirecciones a sitios maliciosos",
              "Mejora automática del SEO",
              "Robo de datos sensibles",
            ],
            correctAnswer: 2,
            explanation:
              "Un sitio hackeado no mejora el SEO, sino todo lo contrario: puede ser penalizado por Google y otros buscadores, perdiendo posicionamiento.",
          },
        ],
      },
    ],
  },
  8: {
    id: 8,
    title: "Desarrollo Avanzado",
    description: "Aprende técnicas avanzadas de desarrollo en WordPress para personalizar y extender su funcionalidad.",
    image: "/images/module-development.png",
    lessons: [
      {
        id: 1,
        title: "Introducción al desarrollo en WordPress",
        description: "Fundamentos para desarrolladores",
        duration: "20 min",
        content: `
          <h2>Introducción al Desarrollo en WordPress</h2>
          <p>El desarrollo en WordPress implica la creación y modificación de temas, plugins y funcionalidades personalizadas. Este módulo te introducirá a los conceptos fundamentales para comenzar a desarrollar en WordPress.</p>

          <h3>¿Por qué desarrollar en WordPress?</h3>
          <p>El desarrollo en WordPress ofrece numerosas ventajas:</p>
          <ul>
            <li>Gran comunidad de desarrolladores y recursos</li>
            <li>Documentación extensa y bien mantenida</li>
            <li>Posibilidad de crear soluciones personalizadas</li>
            <li>Oportunidades laborales y de negocio</li>
            <li>Contribuir al ecosistema de código abierto</li>
          </ul>
        `,
        image: "/images/wordpress-development.png",
        quiz: [
          {
            id: 1,
            type: "trueFalse",
            question: "Para desarrollar en WordPress es imprescindible tener conocimientos avanzados de PHP.",
            correctAnswer: false,
            explanation:
              "Aunque el PHP es importante, puedes comenzar a desarrollar en WordPress con conocimientos básicos e ir aprendiendo más a medida que avanzas. Además, también se utilizan HTML, CSS y JavaScript.",
          },
        ],
      },
    ],
  },
}

// Función para obtener todos los módulos
export const getAllModules = () => {
  return Object.values(moduleData)
}

// Función para obtener un módulo específico por ID
export const getModuleById = (id: number) => {
  return moduleData[id]
}

// Función para obtener una lección específica de un módulo
export const getLessonById = (moduleId: number, lessonId: number) => {
  const module = moduleData[moduleId]
  if (!module) return null

  return module.lessons.find((lesson) => lesson.id === lessonId) || null
}

// Función para obtener el total de lecciones en todos los módulos
export const getTotalLessonsCount = () => {
  return Object.values(moduleData).reduce((total, module) => {
    return total + module.lessons.length
  }, 0)
}

// Función para obtener la siguiente lección
export const getNextLesson = (currentModuleId: number, currentLessonId: number) => {
  const currentModule = moduleData[currentModuleId]
  if (!currentModule) return null

  const currentLessonIndex = currentModule.lessons.findIndex((lesson) => lesson.id === currentLessonId)

  // Si hay otra lección en el mismo módulo
  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return {
      moduleId: currentModuleId,
      lessonId: currentModule.lessons[currentLessonIndex + 1].id,
    }
  }

  // Si es la última lección del módulo, buscar el siguiente módulo
  const moduleIds = Object.keys(moduleData).map(Number)
  const currentModuleIndex = moduleIds.indexOf(currentModuleId)

  if (currentModuleIndex < moduleIds.length - 1) {
    const nextModuleId = moduleIds[currentModuleIndex + 1]
    const nextModule = moduleData[nextModuleId]

    if (nextModule && nextModule.lessons.length > 0) {
      return {
        moduleId: nextModuleId,
        lessonId: nextModule.lessons[0].id,
      }
    }
  }

  // No hay siguiente lección
  return null
}

// Función para obtener la lección anterior
export const getPreviousLesson = (currentModuleId: number, currentLessonId: number) => {
  const currentModule = moduleData[currentModuleId]
  if (!currentModule) return null

  const currentLessonIndex = currentModule.lessons.findIndex((lesson) => lesson.id === currentLessonId)

  // Si hay una lección anterior en el mismo módulo
  if (currentLessonIndex > 0) {
    return {
      moduleId: currentModuleId,
      lessonId: currentModule.lessons[currentLessonIndex - 1].id,
    }
  }

  // Si es la primera lección del módulo, buscar el módulo anterior
  const moduleIds = Object.keys(moduleData).map(Number)
  const currentModuleIndex = moduleIds.indexOf(currentModuleId)

  if (currentModuleIndex > 0) {
    const prevModuleId = moduleIds[currentModuleIndex - 1]
    const prevModule = moduleData[prevModuleId]

    if (prevModule && prevModule.lessons.length > 0) {
      return {
        moduleId: prevModuleId,
        lessonId: prevModule.lessons[prevModule.lessons.length - 1].id,
      }
    }
  }

  // No hay lección anterior
  return null
}
