🚀 Proyecto API React: Explorador de Rick & Morty
Este proyecto es una aplicación web de 3 páginas desarrollada con React, que consume laAPI pública de Rick y Morty. La aplicación permite a los usuarios explorar personajes, filtrar resultados y enviar un formulario de contacto.

Este proyecto fue creado como demostración de habilidades en React, incluyendo React Router, manejo de estado con Hooks, consumo de APIs con Axios y diseño responsive con React-Bootstrap.

✨ Características principales
Navegación de 3 páginas: Inicio , Listado de Personajesy Contacto, manejadas con React Router DOM.

Sección Hero: Una sección de bienvenida atractiva en la página de inicio.

Sección de Populares: Carga 6 personajes destacados en la página de inicio.

Listado y Filtros: Página de listado con filtros dinámicos por nombre y estado (Vivo, Muerto, Desconocido).

Paginación del Lado del Servidor: Navegación entre páginas de resultados que consulta a la API.

Persistencia en URL: Los filtros y la página actual se guardan en los parámetros de consulta de la URL ( /lista?name=rick&page=2).

Formulario con Validación: Formulario de contacto con validación en tiempo real y mensajes de error claros.

Manejo de Estados: Uso de LoadingSpinnery ErrorAlertpara una UX clara durante las peticiones a la API.

Arquitectura Modular: El código está organizado en pages, components, servicesy hooks(como useEntities.js).

🛠️ Tecnologías Utilizadas
Reaccionar(v18+) (con ganchos)

Vite(Como bundler de desarrollo)

DOM de React Router(v6) (Para el enrutamiento)

Axios(Para peticiones HTTP a la API)

Oreja(Marco CSS)

React-Bootstrap(Componentes de React para Bootstrap)

API: La API de Rick y Morty

⚙️ Instalación y Ejecución
Sigue estos pasos para ejecutar el proyecto en tu máquina local:

Clona el:

Intento
git clone https://github.com/tu-usuario/mi-proyecto-api.git
Navega a la carpeta del proyecto:

Intento
cd mi-proyecto-api
Instala las dependencias:

Intento
npm install
Ejecuta el servidor de desarrollo:

Intento
npm run dev
Abre tu navegador: La aplicación estará disponible en http://localhost:5173(o el puerto que indica Vite).

📂 Estructura de Carpetas
La estructura sigue un enfoque modular y escalable.

src/
├── components/
│   ├── common/         (Navbar, Footer, LoadingSpinner, etc.)
│   ├── home/           (HeroSection, PopularSection)
│   ├── list/           (FilterBar, EntityCard, Pagination)
│   └── contact/        (ContactForm)
├── pages/              (HomePage.jsx, ListPage.jsx, ContactPage.jsx)
├── services/           (api.js, entityService.js)
├── hooks/              (useEntities.js)
├── App.jsx             (Configuración de rutas principales)
└── main.jsx            (Punto de entrada de la aplicación)