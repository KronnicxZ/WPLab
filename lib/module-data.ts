// Datos completos de todos los módulos y lecciones
export const moduleData: { [key: number]: any } = {
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
        lessonContent: "WordPress es un sistema de gestión de contenido (CMS) de código abierto que permite crear y administrar sitios web de manera sencilla. Fundado en 2003, WordPress ha evolucionado de ser un simple sistema de blogs a una plataforma versátil que impulsa más del 40% de todos los sitios web en internet. Sus principales ventajas incluyen: facilidad de uso, gran cantidad de plugins y temas, flexibilidad para diferentes tipos de sitios web, y una comunidad de desarrollo activa.",
        content: `
          <h2>Introducción a WordPress</h2>
          <p>WordPress es mucho más que un simple sistema de gestión de contenido. Es una plataforma revolucionaria que ha transformado la forma en que creamos y gestionamos sitios web.</p>

          <h3>Historia y Contexto</h3>
          <p>Desde su lanzamiento en 2003, WordPress ha evolucionado de ser una simple plataforma de blogs a un sistema versátil capaz de manejar cualquier tipo de sitio web: desde blogs personales hasta tiendas online complejas, portafolios profesionales y sitios web corporativos.</p>

          <h3>Lo que Descubrirás</h3>
          <ul>
            <li>Los orígenes de WordPress</li>
            <li>Las diferencias entre WordPress.com y WordPress.org</li>
            <li>Por qué WordPress es la elección número uno para crear sitios web</li>
            <li>Las increíbles capacidades de esta plataforma de código abierto</li>
          </ul>

          <h3>Impacto Global</h3>
          <p>WordPress impulsa más del 40% de todos los sitios web en internet, demostrando su poder y versatilidad como herramienta de creación web. Su comunidad global de desarrolladores y su filosofía de código abierto lo han convertido en la plataforma preferida para millones de creadores de contenido en todo el mundo.</p>

          <h3>Objetivos de la Lección</h3>
          <p>Al final de esta lección, comprenderás los fundamentos de WordPress, su importancia en el ecosistema web actual, y cómo puede transformar tu forma de crear y gestionar contenido en línea.</p>
        `,
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
          <p>La instalación de WordPress es un proceso crucial que requiere atención a los detalles para garantizar un sitio seguro y funcional. Existen varios métodos de instalación, cada uno con sus ventajas.</p>

          <h3>Métodos de Instalación</h3>
          <ol>
            <li><strong>Instalación Manual (Método Clásico)</strong>
              <ul>
                <li>Mayor control sobre la configuración</li>
                <li>Comprensión profunda del proceso</li>
                <li>Ideal para desarrolladores</li>
              </ul>
            </li>
            <li><strong>Instalación con Auto-instaladores</strong>
              <ul>
                <li>Softaculous, Fantastico, SimpleScripts</li>
                <li>Proceso automatizado y rápido</li>
                <li>Ideal para principiantes</li>
              </ul>
            </li>
            <li><strong>Instalación Local</strong>
              <ul>
                <li>XAMPP, MAMP, Local by Flywheel</li>
                <li>Perfecto para desarrollo y pruebas</li>
                <li>No requiere hosting</li>
              </ul>
            </li>
          </ol>

          <h3>Requisitos del Sistema</h3>
          <table>
            <tr>
              <th>Componente</th>
              <th>Mínimo</th>
              <th>Recomendado</th>
            </tr>
            <tr>
              <td>PHP</td>
              <td>7.4</td>
              <td>8.0+</td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>5.6</td>
              <td>8.0+</td>
            </tr>
            <tr>
              <td>MariaDB</td>
              <td>10.1</td>
              <td>10.5+</td>
            </tr>
          </table>

          <h3>Proceso de Instalación Manual Detallado</h3>
          <ol>
            <li><strong>Preparación</strong>
              <ul>
                <li>Descargar WordPress de wordpress.org</li>
                <li>Descomprimir el archivo</li>
                <li>Verificar la integridad de los archivos</li>
              </ul>
            </li>
            <li><strong>Configuración de la Base de Datos</strong>
              <ul>
                <li>Crear base de datos MySQL</li>
                <li>Crear usuario con privilegios</li>
                <li>Anotar credenciales seguras</li>
              </ul>
            </li>
            <li><strong>Configuración de wp-config.php</strong>
              <ul>
                <li>Renombrar wp-config-sample.php</li>
                <li>Configurar credenciales DB</li>
                <li>Generar claves de seguridad</li>
              </ul>
            </li>
            <li><strong>Transferencia de Archivos</strong>
              <ul>
                <li>Usar FTP seguro (SFTP)</li>
                <li>Verificar permisos de archivos</li>
                <li>Mantener estructura de directorios</li>
              </ul>
            </li>
            <li><strong>Instalación Final</strong>
              <ul>
                <li>Ejecutar script de instalación</li>
                <li>Configurar información del sitio</li>
                <li>Crear cuenta de administrador</li>
              </ul>
            </li>
          </ol>

          <h3>Consideraciones de Seguridad</h3>
          <ul>
            <li>Usar contraseñas fuertes para la base de datos</li>
            <li>Cambiar el prefijo de tablas por defecto (wp_)</li>
            <li>Configurar permisos de archivo correctos</li>
            <li>Implementar SSL desde el inicio</li>
            <li>Eliminar el archivo install.php después de la instalación</li>
          </ul>
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
        lessonContent: "En WordPress, entradas y páginas son dos tipos de contenido fundamentales con propósitos distintos. Las entradas son contenido dinámico y cronológico, típicamente usadas en blogs para artículos que se actualizan regularmente. Aparecen en orden inverso de fecha y pueden categorizarse y etiquetarse. Las páginas, por otro lado, son contenido estático como 'Sobre Nosotros', 'Contacto' o 'Política de Privacidad'. No tienen fecha de publicación y generalmente se usan para información permanente del sitio.",
        content: `
          <h2>Entradas vs Páginas: Estructurando el Contenido en WordPress</h2>
          <p>La gestión efectiva del contenido en WordPress se basa en entender profundamente las diferencias y usos específicos de entradas y páginas. Cada tipo de contenido tiene características únicas que determinan su mejor uso en diferentes escenarios.</p>

          <h3>Anatomía de una Entrada (Post)</h3>
          <table>
            <tr>
              <th>Elemento</th>
              <th>Descripción</th>
              <th>Uso Recomendado</th>
            </tr>
            <tr>
              <td>Título</td>
              <td>Encabezado principal</td>
              <td>SEO y engagement</td>
            </tr>
            <tr>
              <td>Permalink</td>
              <td>URL única</td>
              <td>Navegación y compartir</td>
            </tr>
            <tr>
              <td>Categorías</td>
              <td>Clasificación principal</td>
              <td>Organización jerárquica</td>
            </tr>
            <tr>
              <td>Etiquetas</td>
              <td>Palabras clave</td>
              <td>Navegación transversal</td>
            </tr>
          </table>

          <h3>Características Exclusivas de las Entradas</h3>
          <ul>
            <li><strong>Formatos de Entrada:</strong>
              <ul>
                <li>Estándar: Contenido tradicional</li>
                <li>Imagen: Galería o fotografía destacada</li>
                <li>Video: Contenido multimedia principal</li>
                <li>Audio: Podcasts o música</li>
                <li>Cita: Destacar textos importantes</li>
              </ul>
            </li>
            <li><strong>Elementos Sociales:</strong>
              <ul>
                <li>Comentarios y discusiones</li>
                <li>Botones de compartir</li>
                <li>Trackbacks y pingbacks</li>
          </ul>

          <h4>Páginas: Contenido Estático y Permanente</h4>
          <ul>
            <li>No tienen fecha de publicación</li>
            <li>Información permanente y estructural</li>
            <li>Ejemplos: 'Sobre Nosotros', 'Contacto', 'Políticas'</li>
            <li>Fundamentales para la navegación principal</li>
          </ul>

          <h3>Estrategia de Contenido</h3>
          <p>La clave está en usar cada tipo de contenido según su propósito: entradas para lo dinámico y páginas para lo permanente. Esta distinción te ayudará a crear un sitio web más organizado, accesible y atractivo.</p>

          <h3>Objetivos de Aprendizaje</h3>
          <p>Aprenderás a elegir entre entradas y páginas, optimizando la estructura de tu sitio WordPress.</p>
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
          <h2>Diseño y Personalización en WordPress</h2>
          <p>Un tema en WordPress no es solo un diseño, es la identidad visual y funcional de tu sitio web. Define cómo los visitantes perciben y experimentan tu contenido.</p>

          <h3>Anatomía de un Tema WordPress</h3>
          <p>Los temas son mucho más que imágenes y colores. Son sistemas complejos que controlan la presentación, la usabilidad y la respuesta de tu sitio web.</p>

          <h4>Componentes Fundamentales</h4>
          <ul>
            <li><strong>Archivos de Plantilla:</strong> Definen la estructura de cada tipo de página</li>
            <li><strong>Hojas de Estilo (CSS):</strong> Controlan el diseño, colores y tipografía</li>
            <li><strong>Funciones PHP:</strong> Añaden características y personalizaciones</li>
            <li><strong>Archivos de Configuración:</strong> Permiten personalizaciones dinámicas</li>
          </ul>

          <h3>Tipos de Temas</h3>
          <ul>
            <li><strong>Temas Gratuitos:</strong> Disponibles en el repositorio oficial de WordPress</li>
            <li><strong>Temas Premium:</strong> Diseños profesionales con soporte dedicado</li>
            <li><strong>Temas Personalizados:</strong> Desarrollados específicamente para necesidades únicas</li>
          </ul>

          <h3>Consideraciones al Elegir un Tema</h3>
          <ol>
            <li>Compatibilidad con plugins</li>
            <li>Diseño responsivo</li>
            <li>Velocidad de carga</li>
            <li>Opciones de personalización</li>
            <li>Soporte y actualizaciones</li>
          </ol>

          <h3>Objetivos de la Lección</h3>
          <p>Aprenderás a elegir, personalizar e implementar temas que no solo se vean bien, sino que mejoren la experiencia de usuario de tu sitio web.</p>
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
        duration: "12 min",
        content: `
          <h2>Plugins: Extendiendo las Capacidades de WordPress</h2>
          <p>Los plugins son la magia que convierte un sitio web WordPress estándar en una plataforma personalizada y potente. Son como aplicaciones que se 'enchufan' a tu sitio para agregar nuevas funcionalidades.</p>

          <h3>¿Qué Son los Plugins?</h3>
          <p>Un plugin es un fragmento de código que se integra con WordPress para añadir características específicas sin modificar el núcleo del sistema. Es como agregar superpoderes a tu sitio web.</p>

          <h4>Tipos de Plugins</h4>
          <ul>
            <li><strong>SEO:</strong> Optimización para motores de búsqueda</li>
            <li><strong>Seguridad:</strong> Protección contra amenazas</li>
            <li><strong>Rendimiento:</strong> Mejora de velocidad y carga</li>
            <li><strong>Formularios:</strong> Creación de formularios de contacto</li>
            <li><strong>E-commerce:</strong> Funcionalidades de tienda online</li>
          </ul>

          <h3>Cómo Funcionan los Plugins</h3>
          <ol>
            <li>Se descargan desde el repositorio de WordPress</li>
            <li>Se instalan directamente desde el panel de administración</li>
            <li>Se activan para comenzar a funcionar</li>
            <li>Se pueden configurar según necesidades específicas</li>
          </ol>

          <h3>Mejores Prácticas</h3>
          <ul>
            <li>Instalar solo plugins necesarios</li>
            <li>Verificar compatibilidad con la versión de WordPress</li>
            <li>Mantener plugins actualizados</li>
            <li>Leer reseñas y calificaciones</li>
          </ul>

          <h3>Objetivos de Aprendizaje</h3>
          <p>Descubrirás cómo los plugins pueden transformar tu sitio web, añadiendo funcionalidades avanzadas sin necesidad de programación compleja.</p>
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
          <h2>SEO en WordPress: Optimización Integral</h2>
          <p>El SEO (Search Engine Optimization) es una disciplina fundamental que combina técnicas técnicas, contenido y estrategia para mejorar la visibilidad de un sitio WordPress en los motores de búsqueda. Un enfoque sistemático del SEO puede transformar completamente el rendimiento de tu sitio.</p>

          <h3>Pilares del SEO</h3>
          <table>
            <tr>
              <th>Pilar</th>
              <th>Componentes</th>
              <th>Impacto</th>
            </tr>
            <tr>
              <td>Técnico</td>
              <td>Velocidad, Mobile, SSL</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Contenido</td>
              <td>Keywords, Estructura</td>
              <td>35%</td>
            </tr>
            <tr>
              <td>Off-page</td>
              <td>Backlinks, Social</td>
              <td>35%</td>
            </tr>
          </table>

          <h3>Optimización Técnica</h3>
          <ol>
            <li><strong>Velocidad de Carga</strong>
              <ul>
                <li>Optimización de imágenes</li>
                <li>Minificación de código</li>
                <li>Caché del servidor</li>
                <li>CDN (Red de distribución de contenido)</li>
              </ul>
            </li>
            <li><strong>Estructura URL</strong>
              <ul>
                <li>URLs amigables</li>
                <li>Jerarquía lógica</li>
                <li>Palabras clave en URL</li>
                <li>Evitar parámetros complejos</li>
              </ul>
            </li>
            <li><strong>Mobile-First</strong>
              <ul>
                <li>Diseño responsive</li>
                <li>Velocidad en móviles</li>
                <li>Experiencia táctil</li>
                <li>Contenido adaptativo</li>
              </ul>
            </li>
          </ol>

          <h3>Optimización de Contenido</h3>
          <table>
            <tr>
              <th>Elemento</th>
              <th>Mejor Práctica</th>
              <th>Ejemplo</th>
            </tr>
            <tr>
              <td>Títulos</td>
              <td>Keywords + Engagement</td>
              <td>"Guía Completa SEO 2024"</td>
            </tr>
            <tr>
              <td>Meta Desc</td>
              <td>Call to Action</td>
              <td>"Aprende SEO profesional..."</td>
            </tr>
            <tr>
              <td>Headings</td>
              <td>Jerarquía clara</td>
              <td>H1 > H2 > H3</td>
            </tr>
          </table>

          <h3>Estrategia de Keywords</h3>
          <ol>
            <li><strong>Investigación</strong>
              <ul>
                <li>Análisis de competencia</li>
                <li>Volumen de búsqueda</li>
                <li>Intención del usuario</li>
                <li>Long-tail keywords</li>
              </ul>
            </li>
            <li><strong>Implementación</strong>
              <ul>
                <li>Densidad natural</li>
                <li>LSI keywords</li>
                <li>Variaciones semánticas</li>
                <li>Contexto temático</li>
              </ul>
            </li>
          </ol>

          <h3>Herramientas Esenciales</h3>
          <ul>
            <li><strong>Google Tools</strong>
              <ul>
                <li>Search Console</li>
                <li>Analytics</li>
                <li>PageSpeed Insights</li>
              </ul>
            </li>
            <li><strong>Plugins WordPress</strong>
              <ul>
                <li>Yoast SEO</li>
                <li>RankMath</li>
                <li>All in One SEO</li>
              </ul>
            </li>
          </ul>

          <h3>Métricas de Éxito</h3>
          <table>
            <tr>
              <th>Métrica</th>
              <th>Objetivo</th>
              <th>Herramienta</th>
            </tr>
            <tr>
              <td>Posiciones</td>
              <td>Top 3</td>
              <td>Search Console</td>
            </tr>
            <tr>
              <td>CTR</td>
              <td>>5%</td>
              <td>Search Console</td>
            </tr>
            <tr>
              <td>Tiempo en página</td>
              <td>>2 min</td>
              <td>Analytics</td>
            </tr>
          </table>
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
          <h2>WooCommerce: Transformando WordPress en E-commerce</h2>
          <p>WooCommerce representa la evolución del comercio electrónico en WordPress, ofreciendo una plataforma robusta y flexible que potencia más del 28% de todas las tiendas online del mundo. Su integración nativa con WordPress lo convierte en una solución única para crear experiencias de compra excepcionales.</p>

          <h3>Arquitectura de WooCommerce</h3>
          <table>
            <tr>
              <th>Componente</th>
              <th>Función</th>
              <th>Impacto</th>
            </tr>
            <tr>
              <td>Core</td>
              <td>Funcionalidad base</td>
              <td>Esencial</td>
            </tr>
            <tr>
              <td>Extensions</td>
              <td>Funciones adicionales</td>
              <td>Personalización</td>
            </tr>
            <tr>
              <td>Templates</td>
              <td>Diseño de tienda</td>
              <td>Experiencia</td>
            </tr>
            <tr>
              <td>REST API</td>
              <td>Integración externa</td>
              <td>Escalabilidad</td>
            </tr>
          </table>

          <h3>Características Fundamentales</h3>
          <ol>
            <li><strong>Gestión de Productos</strong>
              <ul>
                <li>Productos físicos y digitales</li>
                <li>Productos variables</li>
                <li>Productos agrupados</li>
                <li>Suscripciones</li>
                <li>Inventario dinámico</li>
              </ul>
            </li>
            <li><strong>Procesamiento de Pagos</strong>
              <ul>
                <li>Pasarelas integradas</li>
                <li>PayPal y Stripe</li>
                <li>Pagos locales</li>
                <li>Suscripciones recurrentes</li>
              </ul>
            </li>
            <li><strong>Envíos y Logística</strong>
              <ul>
                <li>Cálculo de tarifas</li>
                <li>Zonas de envío</li>
                <li>Seguimiento de pedidos</li>
                <li>Etiquetas de envío</li>
              </ul>
            </li>
          </ol>

          <h3>Optimización de Conversión</h3>
          <table>
            <tr>
              <th>Elemento</th>
              <th>Estrategia</th>
              <th>Beneficio</th>
            </tr>
            <tr>
              <td>Checkout</td>
              <td>One-page checkout</td>
              <td>+15% conversión</td>
            </tr>
            <tr>
              <td>Carrito</td>
              <td>Recuperación</td>
              <td>+10% ventas</td>
            </tr>
            <tr>
              <td>Cross-selling</td>
              <td>Productos relacionados</td>
              <td>+25% ticket medio</td>
            </tr>
          </table>

          <h3>Seguridad y Cumplimiento</h3>
          <ul>
            <li><strong>Certificaciones</strong>
              <ul>
                <li>PCI DSS</li>
                <li>GDPR</li>
                <li>SSL/TLS</li>
              </ul>
            </li>
            <li><strong>Protección de Datos</strong>
              <ul>
                <li>Encriptación</li>
                <li>Backups automáticos</li>
                <li>Control de acceso</li>
              </ul>
            </li>
          </ul>

          <h3>Análisis y Reportes</h3>
          <table>
            <tr>
              <th>Tipo de Reporte</th>
              <th>Métricas</th>
              <th>Periodicidad</th>
            </tr>
            <tr>
              <td>Ventas</td>
              <td>Ingresos, Conversión</td>
              <td>Diario</td>
            </tr>
            <tr>
              <td>Productos</td>
              <td>Top vendidos, Stock</td>
              <td>Semanal</td>
            </tr>
            <tr>
              <td>Clientes</td>
              <td>LTV, Retención</td>
              <td>Mensual</td>
            </tr>
          </table>
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
        lessonContent: "La seguridad en WordPress es crítica para prevenir hackeos, robo de datos y mal funcionamiento del sitio. Las principales amenazas incluyen contraseñas débiles, plugins desactualizados, y vulnerabilidades en temas. Estrategias de protección básicas son: usar contraseñas fuertes, mantener WordPress y plugins actualizados, limitar intentos de inicio de sesión, usar autenticación de dos factores, instalar plugins de seguridad, y realizar copias de seguridad regulares.",
        content: `
          <h2>Seguridad en WordPress: Protección Integral</h2>
          <p>La seguridad en WordPress es un proceso continuo y multifacético que requiere un enfoque holístico. Como plataforma que impulsa más del 40% de la web, WordPress es un objetivo constante de ataques, lo que hace crucial implementar una estrategia de seguridad robusta.</p>

          <h3>Vectores de Ataque Comunes</h3>
          <table>
            <tr>
              <th>Vector</th>
              <th>Riesgo</th>
              <th>Impacto</th>
            </tr>
            <tr>
              <td>Inyección SQL</td>
              <td>Alto</td>
              <td>Pérdida de datos</td>
            </tr>
            <tr>
              <td>XSS</td>
              <td>Alto</td>
              <td>Robo de sesiones</td>
            </tr>
            <tr>
              <td>Fuerza Bruta</td>
              <td>Medio</td>
              <td>Acceso no autorizado</td>
            </tr>
            <tr>
              <td>File Inclusion</td>
              <td>Alto</td>
              <td>Ejecución de código</td>
            </tr>
          </table>

          <h3>Capas de Seguridad</h3>
          <ol>
            <li><strong>Servidor y Hosting</strong>
              <ul>
                <li>Firewall WAF</li>
                <li>SSL/TLS actualizado</li>
                <li>PHP versión segura</li>
                <li>ModSecurity activo</li>
              </ul>
            </li>
            <li><strong>Aplicación WordPress</strong>
              <ul>
                <li>Core actualizado</li>
                <li>Plugins verificados</li>
                <li>Temas seguros</li>
                <li>Roles configurados</li>
              </ul>
            </li>
            <li><strong>Base de Datos</strong>
              <ul>
                <li>Backups regulares</li>
                <li>Prefijo personalizado</li>
                <li>Acceso restringido</li>
                <li>Queries preparadas</li>
              </ul>
            </li>
          </ol>

          <h3>Configuraciones Críticas</h3>
          <table>
            <tr>
              <th>Archivo</th>
              <th>Configuración</th>
              <th>Propósito</th>
            </tr>
            <tr>
              <td>wp-config.php</td>
              <td>SALT keys</td>
              <td>Encriptación</td>
            </tr>
            <tr>
              <td>.htaccess</td>
              <td>Reglas de acceso</td>
              <td>Restricción</td>
            </tr>
            <tr>
              <td>wp-content</td>
              <td>Permisos 755/644</td>
              <td>Protección</td>
            </tr>
          </table>

          <h3>Monitoreo y Respuesta</h3>
          <ol>
            <li><strong>Monitoreo Activo</strong>
              <ul>
                <li>Logs de acceso</li>
                <li>Cambios en archivos</li>
                <li>Actividad de usuarios</li>
                <li>Intentos de login</li>
              </ul>
            </li>
            <li><strong>Plan de Respuesta</strong>
              <ul>
                <li>Detección temprana</li>
                <li>Aislamiento</li>
                <li>Análisis forense</li>
                <li>Recuperación</li>
              </ul>
            </li>
          </ol>

          <h3>Mejores Prácticas de Mantenimiento</h3>
          <table>
            <tr>
              <th>Tarea</th>
              <th>Frecuencia</th>
              <th>Prioridad</th>
            </tr>
            <tr>
              <td>Backups</td>
              <td>Diario</td>
              <td>Crítica</td>
            </tr>
            <tr>
              <td>Actualizaciones</td>
              <td>Semanal</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Auditoría</td>
              <td>Mensual</td>
              <td>Media</td>
            </tr>
          </table>

          <h3>Herramientas de Seguridad</h3>
          <ul>
            <li><strong>Plugins Esenciales</strong>
              <ul>
                <li>Wordfence Security</li>
                <li>Sucuri Scanner</li>
                <li>iThemes Security</li>
                <li>All In One WP Security</li>
              </ul>
            </li>
            <li><strong>Servicios Externos</strong>
              <ul>
                <li>Cloudflare WAF</li>
                <li>Sucuri WAF</li>
                <li>ManageWP</li>
                <li>VaultPress</li>
              </ul>
            </li>
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
