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
          <h2>¿Qué es WordPress?</h2>
          <p>WordPress es un sistema de gestión de contenidos (CMS) que revolucionó la creación de sitios web. Nacido en 2003 como una plataforma de blogs, hoy impulsa más del 40% de todos los sitios web en Internet, desde blogs personales hasta sitios corporativos de Fortune 500.</p>

          <h3>Historia y Evolución</h3>
          <p>WordPress comenzó como una bifurcación de b2/cafelog y ha evolucionado hasta convertirse en el CMS más usado del mundo. Su filosofía de democratizar la publicación web ha permitido que millones de personas puedan tener presencia en Internet sin necesidad de conocimientos técnicos avanzados.</p>

          <h3>Características Fundamentales</h3>
          <ul>
            <li><strong>Sistema de Bloques Gutenberg:</strong> Editor visual moderno que revoluciona la creación de contenido.</li>
            <li><strong>REST API:</strong> Permite la integración con aplicaciones modernas y headless CMS.</li>
            <li><strong>Multisite:</strong> Capacidad de gestionar múltiples sitios desde una sola instalación.</li>
            <li><strong>Taxonomías Personalizadas:</strong> Organización flexible del contenido mediante categorías y etiquetas.</li>
            <li><strong>Roles de Usuario:</strong> Sistema jerárquico de permisos para gestión de accesos.</li>
          </ul>

          <h3>WordPress.com vs WordPress.org</h3>
          <table>
            <tr>
              <th>Característica</th>
              <th>WordPress.org</th>
              <th>WordPress.com</th>
            </tr>
            <tr>
              <td>Control del código</td>
              <td>Total</td>
              <td>Limitado</td>
            </tr>
            <tr>
              <td>Hosting</td>
              <td>Autogestión</td>
              <td>Incluido</td>
            </tr>
            <tr>
              <td>Plugins</td>
              <td>Ilimitados</td>
              <td>Plan Business+</td>
            </tr>
            <tr>
              <td>Monetización</td>
              <td>Sin restricciones</td>
              <td>Con limitaciones</td>
            </tr>
          </table>

          <h3>El Ecosistema WordPress</h3>
          <p>WordPress no es solo un CMS, es un ecosistema completo que incluye:</p>
          <ul>
            <li>Más de 59,000 plugins gratuitos</li>
            <li>Miles de temas profesionales</li>
            <li>Una comunidad global de desarrolladores</li>
            <li>Eventos WordCamp en todo el mundo</li>
            <li>Recursos educativos extensivos</li>
          </ul>
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
            </li>
            <li><strong>Archivos y Feeds:</strong>
              <ul>
                <li>Organización cronológica</li>
                <li>Feeds RSS automáticos</li>
                <li>Archivos por fecha</li>
              </ul>
            </li>
          </ul>

          <h3>Anatomía de una Página</h3>
          <table>
            <tr>
              <th>Elemento</th>
              <th>Descripción</th>
              <th>Uso Recomendado</th>
            </tr>
            <tr>
              <td>Plantilla</td>
              <td>Diseño personalizado</td>
              <td>Layouts específicos</td>
            </tr>
            <tr>
              <td>Jerarquía</td>
              <td>Estructura padre-hijo</td>
              <td>Organización de contenido</td>
            </tr>
            <tr>
              <td>Orden</td>
              <td>Posición en menú</td>
              <td>Navegación principal</td>
            </tr>
          </table>

          <h3>Casos de Uso Específicos</h3>
          <h4>Entradas Ideales Para:</h4>
          <ul>
            <li>Blogs y actualizaciones</li>
            <li>Noticias y eventos</li>
            <li>Artículos de conocimiento</li>
            <li>Reseñas y opiniones</li>
            <li>Portafolio dinámico</li>
          </ul>

          <h4>Páginas Ideales Para:</h4>
          <ul>
            <li>Información corporativa</li>
            <li>Servicios principales</li>
            <li>Políticas y términos</li>
            <li>Formularios de contacto</li>
            <li>Landings promocionales</li>
          </ul>

          <h3>Mejores Prácticas de Organización</h3>
          <ol>
            <li><strong>Planificación de Estructura</strong>
              <ul>
                <li>Mapear contenido antes de crear</li>
                <li>Definir jerarquías claras</li>
                <li>Establecer taxonomías consistentes</li>
              </ul>
            </li>
            <li><strong>Optimización de URLs</strong>
              <ul>
                <li>Usar slugs descriptivos</li>
                <li>Mantener URLs cortas</li>
                <li>Incluir palabras clave relevantes</li>
              </ul>
            </li>
            <li><strong>Gestión de Contenido</strong>
              <ul>
                <li>Actualizar regularmente</li>
                <li>Mantener consistencia</li>
                <li>Revisar enlaces internos</li>
              </ul>
            </li>
          </ol>
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
        lessonContent: "Los temas en WordPress determinan completamente el diseño y la apariencia visual de tu sitio web. Un tema incluye archivos de plantilla, hojas de estilo, y archivos de configuración que definen cómo se muestra el contenido. Al elegir un tema, considera factores como: propósito del sitio, diseño responsivo, velocidad de carga, personalización, compatibilidad con plugins, y soporte del desarrollador. Puedes encontrar temas gratuitos en el repositorio oficial de WordPress o temas premium en sitios especializados.",
        content: `
          <h2>Temas de WordPress: La Base del Diseño Web</h2>
          <p>Los temas son el fundamento visual y funcional de WordPress, determinando no solo la apariencia sino también la experiencia de usuario y el rendimiento del sitio. Un tema bien elegido puede marcar la diferencia entre un sitio profesional y uno amateur.</p>

          <h3>Anatomía de un Tema WordPress</h3>
          <table>
            <tr>
              <th>Componente</th>
              <th>Función</th>
              <th>Impacto</th>
            </tr>
            <tr>
              <td>Template Files</td>
              <td>Estructura del contenido</td>
              <td>SEO y usabilidad</td>
            </tr>
            <tr>
              <td>Functions.php</td>
              <td>Funcionalidad core</td>
              <td>Rendimiento</td>
            </tr>
            <tr>
              <td>Style.css</td>
              <td>Diseño visual</td>
              <td>Experiencia de usuario</td>
            </tr>
            <tr>
              <td>Assets</td>
              <td>Recursos multimedia</td>
              <td>Tiempo de carga</td>
            </tr>
          </table>

          <h3>Tipos de Temas</h3>
          <ol>
            <li><strong>Temas Gratuitos</strong>
              <ul>
                <li>Disponibles en wordpress.org</li>
                <li>Funcionalidades básicas</li>
                <li>Soporte comunitario</li>
                <li>Actualizaciones limitadas</li>
              </ul>
            </li>
            <li><strong>Temas Premium</strong>
              <ul>
                <li>Diseños profesionales</li>
                <li>Funciones avanzadas</li>
                <li>Soporte dedicado</li>
                <li>Actualizaciones regulares</li>
              </ul>
            </li>
            <li><strong>Temas Personalizados</strong>
              <ul>
                <li>Desarrollo a medida</li>
                <li>Control total</li>
                <li>Optimización específica</li>
                <li>Mantenimiento propio</li>
              </ul>
            </li>
          </ol>

          <h3>Criterios de Selección</h3>
          <table>
            <tr>
              <th>Criterio</th>
              <th>Importancia</th>
              <th>Consideraciones</th>
            </tr>
            <tr>
              <td>Responsive Design</td>
              <td>Crítica</td>
              <td>Adaptación móvil perfecta</td>
            </tr>
            <tr>
              <td>Velocidad</td>
              <td>Alta</td>
              <td>Optimización de código</td>
            </tr>
            <tr>
              <td>SEO</td>
              <td>Alta</td>
              <td>Estructura semántica</td>
            </tr>
            <tr>
              <td>Personalización</td>
              <td>Media</td>
              <td>Opciones flexibles</td>
            </tr>
          </table>

          <h3>Mejores Prácticas de Implementación</h3>
          <ol>
            <li><strong>Preparación</strong>
              <ul>
                <li>Backup completo del sitio</li>
                <li>Entorno de pruebas</li>
                <li>Análisis de compatibilidad</li>
              </ul>
            </li>
            <li><strong>Instalación</strong>
              <ul>
                <li>Verificación de requisitos</li>
                <li>Instalación limpia</li>
                <li>Activación progresiva</li>
              </ul>
            </li>
            <li><strong>Personalización</strong>
              <ul>
                <li>Configuración inicial</li>
                <li>Ajustes de diseño</li>
                <li>Pruebas de funcionalidad</li>
              </ul>
            </li>
            <li><strong>Optimización</strong>
              <ul>
                <li>Caché y compresión</li>
                <li>Imágenes optimizadas</li>
                <li>Minificación de código</li>
              </ul>
            </li>
          </ol>

          <h3>Tendencias Actuales en Temas</h3>
          <ul>
            <li><strong>Diseño Minimalista</strong>: Enfoque en la simplicidad y usabilidad</li>
            <li><strong>Bloques Gutenberg</strong>: Compatibilidad con el editor moderno</li>
            <li><strong>Micro-interacciones</strong>: Elementos interactivos sutiles</li>
            <li><strong>Dark Mode</strong>: Soporte para modo oscuro</li>
            <li><strong>Rendimiento Mobile-First</strong>: Optimización para dispositivos móviles</li>
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
        duration: "12 min",
        lessonContent: "Los plugins son piezas de software que se 'enchufan' a WordPress para añadir funcionalidades específicas sin modificar el núcleo del sistema. Pueden realizar tareas desde mejoras de SEO, seguridad, optimización de rendimiento, hasta crear formularios de contacto o galerías de imágenes. Cada plugin se instala fácilmente desde el directorio de WordPress o mediante subida manual. Es crucial elegir plugins bien mantenidos, compatibles con tu versión de WordPress y con buenas calificaciones de la comunidad.",
        content: `
          <h2>Plugins: Extendiendo las Capacidades de WordPress</h2>
          <p>Los plugins son el corazón de la extensibilidad de WordPress, permitiendo transformar un sitio básico en una plataforma potente y personalizada. Comprender su funcionamiento y gestión es crucial para el éxito de cualquier proyecto WordPress.</p>

          <h3>Anatomía de un Plugin</h3>
          <table>
            <tr>
              <th>Componente</th>
              <th>Función</th>
              <th>Importancia</th>
            </tr>
            <tr>
              <td>Archivo Principal</td>
              <td>Inicialización y hooks</td>
              <td>Fundamental</td>
            </tr>
            <tr>
              <td>Includes</td>
              <td>Funciones auxiliares</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Assets</td>
              <td>Recursos estáticos</td>
              <td>Media</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>Traducciones</td>
              <td>Variable</td>
            </tr>
          </table>

          <h3>Tipos de Plugins</h3>
          <ol>
            <li><strong>Funcionalidad</strong>
              <ul>
                <li>SEO y Marketing</li>
                <li>Seguridad y Backups</li>
                <li>Formularios y CRM</li>
                <li>E-commerce y Pagos</li>
                <li>Caché y Optimización</li>
              </ul>
            </li>
            <li><strong>Integración</strong>
              <ul>
                <li>Redes Sociales</li>
                <li>Análisis y Estadísticas</li>
                <li>Email Marketing</li>
                <li>APIs Externas</li>
              </ul>
            </li>
            <li><strong>Contenido</strong>
              <ul>
                <li>Editores Visuales</li>
                <li>Galerías y Media</li>
                <li>Calendarios y Eventos</li>
                <li>Membresías y Usuarios</li>
              </ul>
            </li>
          </ol>

          <h3>Criterios de Selección</h3>
          <table>
            <tr>
              <th>Criterio</th>
              <th>Indicadores</th>
              <th>Peso</th>
            </tr>
            <tr>
              <td>Seguridad</td>
              <td>Actualizaciones regulares</td>
              <td>Crítico</td>
            </tr>
            <tr>
              <td>Rendimiento</td>
              <td>Impacto en carga</td>
              <td>Alto</td>
            </tr>
            <tr>
              <td>Soporte</td>
              <td>Respuesta y documentación</td>
              <td>Medio</td>
            </tr>
            <tr>
              <td>Compatibilidad</td>
              <td>Versiones WP y PHP</td>
              <td>Alto</td>
            </tr>
          </table>

          <h3>Mejores Prácticas de Gestión</h3>
          <ol>
            <li><strong>Instalación</strong>
              <ul>
                <li>Verificar requisitos</li>
                <li>Backup previo</li>
                <li>Entorno de pruebas</li>
              </ul>
            </li>
            <li><strong>Mantenimiento</strong>
              <ul>
                <li>Actualizaciones programadas</li>
                <li>Monitoreo de conflictos</li>
                <li>Optimización periódica</li>
              </ul>
            </li>
            <li><strong>Seguridad</strong>
              <ul>
                <li>Fuentes confiables</li>
                <li>Revisión de permisos</li>
                <li>Auditoría regular</li>
              </ul>
            </li>
          </ol>

          <h3>Consideraciones de Rendimiento</h3>
          <ul>
            <li><strong>Impacto en Velocidad</strong>
              <ul>
                <li>Número total de plugins</li>
                <li>Calidad del código</li>
                <li>Carga de recursos</li>
              </ul>
            </li>
            <li><strong>Optimización</strong>
              <ul>
                <li>Combinación de archivos</li>
                <li>Caché de consultas</li>
                <li>Lazy loading</li>
              </ul>
            </li>
          </ul>
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
        lessonContent: "SEO (Search Engine Optimization) es el proceso de mejorar la visibilidad de un sitio web en los resultados de búsqueda orgánicos. En WordPress, el SEO implica optimizar contenido, estructura, velocidad y metadatos para que los motores de búsqueda como Google entiendan y rankeen mejor tu sitio. Aspectos clave incluyen: uso de palabras clave relevantes, títulos y descripciones descriptivas, enlaces internos de calidad, contenido original y valioso, y velocidad de carga del sitio.",
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
