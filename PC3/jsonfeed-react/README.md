 Proyecto: JSONPlaceholder Feed (React + Vite)

## 1. Introducción y Objetivos del Proyecto

`jsonfeed-react` es una aplicación web de página única (SPA) desarrollada con React, Vite y TypeScript. El propósito fundamental de este proyecto es demostrar el dominio de los conceptos clave del desarrollo frontend moderno, incluyendo la componentización, el enrutamiento del lado del cliente, el consumo de APIs externas y el tipado estático.

La aplicación consume la API pública de **JSONPlaceholder** para simular un "feed" de contenido, mostrando usuarios y publicaciones en una interfaz limpia y responsiva.

### Objetivos Funcionales Cumplidos

El desarrollo se adhirió a los siguientes requisitos:

* **Fundamentos del Proyecto:** Se configuró un entorno de desarrollo moderno usando **Vite** con soporte nativo para **TypeScript** (`.tsx`).
* **Consumo de API:** Se implementó el consumo de datos asíncrono desde `jsonplaceholder.typicode.com` usando la librería **Axios**.
* **Navegación:** Se utilizó **React Router DOM** para crear dos vistas distintas:
    * **Ruta `/` (Home):** Presenta una descripción del proyecto y un listado simple de `Usuarios` (`/users`).
    * **Ruta `/entities` (Entidades):** Muestra un listado detallado de `Publicaciones` (`/posts`).
* **Requisito de 3 Propiedades:** La vista `/entities` renderiza cada publicación en una tarjeta (`Card`) que muestra 3 propiedades clave: **Título**, **Cuerpo (Body)** y **ID del Autor**.
* **Estilización Profesional:** Se utilizó el framework **Bootstrap** (y `react-bootstrap`) para asegurar un diseño responsivo, limpio y coherente, implementando un tema oscuro para una estética moderna.

---

## 2. Arquitectura y Metodología de Desarrollo

Para asegurar un código mantenible y escalable, se implementó una arquitectura modular que separa claramente las responsabilidades.

### 2.1. Estructura de Carpetas
La estructura del proyecto se diseñó para aislar la lógica de negocio, los componentes de UI y los servicios:

/src ├── componentes/ # Componentes de UI reutilizables (AppNavbar, Hero, PostCard) ├── páginas/ # Vistas principales (Home.tsx, Entities.tsx) ├── router/ # Configuración centralizada de React Router (index.tsx) ├── servicios/ # Lógica de consumo de API (api.ts) ├── tipos/ # Definiciones de Interfaces TypeScript (jsonplaceholder.ts) ├── App.tsx # Componente "Layout" principal (Navbar + Outlet) └── main.tsx # Punto de entrada de la aplicación


### 2.2. Gestión de Datos y Estado
* **Estado de Componentes:** El estado se maneja localmente dentro de los componentes de página (`Home.tsx`, `Entities.tsx`) usando los hooks `useState` (para almacenar los datos y el estado de carga) y `useEffect` (para disparar la petición a la API al montar el componente).
* **Servicio de API:** Toda la lógica de `axios` está encapsulada en `src/services/api.ts`. Esto permite que los componentes sean agnósticos a la fuente de datos y facilita futuras actualizaciones o mocks.

### 2.3. Implementación de TypeScript
Se utilizó TypeScript de forma estricta para garantizar la integridad de los datos en toda la aplicación:
* **Interfaces:** Se definieron interfaces claras (`User`, `Post`) en `src/types/` que modelan la respuesta de la API.
* **Tipado Estricto:** Se utilizó `import type` para importar estas interfaces, siguiendo las mejores prácticas de TypeScript para la sintaxis de módulos.
* **Props:** Todos los componentes tienen sus `Props` explícitamente tipadas, previniendo errores de integración.

---

## 3. Stack Tecnológico Utilizado

| Categoría | Tecnología | Propósito en este Proyecto |
| :--- | :--- | :--- |
| **Framework** | React 18 | Base de la interfaz de usuario y manejo de componentes. |
| **Lenguaje** | TypeScript | Tipado estático para un código seguro y mantenible (`.tsx`). |
| **Bundler** | Vite | Servidor de desarrollo ultrarrápido y build optimizado. |
| **Routing** | React Router DOM | Navegación del lado del cliente (SPA) entre `/` y `/entities`. |
| **Estilos** | Bootstrap 5 & React-Bootstrap | Framework de UI para un diseño responsivo y componentes listos. |
| **Peticiones HTTP**| Axios | Cliente HTTP para consumir la API REST de JSONPlaceholder. |

---

## 4. Guía de Instalación y Ejecución Local

Para clonar y ejecutar este proyecto en un entorno de desarrollo local, siga estos pasos:

1.  **Clonar el repositorio:**
    *(Reemplazar con la URL de tu repositorio)*
    ```bash
    git clone 
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd jsonfeed-react
    ```

3.  **Instalar las dependencias del proyecto:**
    (Se requiere Node.js v18 o superior)
    ```bash
    npm install
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Una vez iniciado, la aplicación estará disponible en [http://localhost:5173]