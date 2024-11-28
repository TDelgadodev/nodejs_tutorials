# Sharp Tutorial - Procesamiento de Imágenes con Node.js

Este proyecto es un tutorial práctico para aprender a trabajar con la biblioteca `sharp` en Node.js. Incluye múltiples ejemplos de cómo manipular imágenes, desde redimensionarlas hasta agregar texto, rotarlas, y mucho más.

---

## **Características**

- **Redimensionar imágenes:** Cambia el tamaño de cualquier imagen a dimensiones específicas.
- **Agregar texto a imágenes:** Inserta texto superpuesto en imágenes usando SVG.
- **Recortar imágenes:** Selecciona una sección específica de una imagen.
- **Rotar imágenes:** Gira imágenes a ángulos personalizados con opciones de desenfoque.
- **Componer imágenes:** Combina múltiples imágenes en una sola.
- **Cambiar formato y comprimir imágenes:** Convierte imágenes entre formatos (PNG, JPEG, etc.) y reduce su tamaño.

---

## **Requisitos Previos**

Antes de usar este proyecto, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior recomendada).
- **npm** (viene con Node.js).

Instala las dependencias necesarias ejecutando:

```bash
npm install
```

---

## **Estructura del proyecto**

```
sharp_tutorial/
├── node_modules/          Dependencias instaladas por npm.
├── .gitignore             Archivos/carpetas que no se incluirán en Git.
├── package.json           Archivo de configuración del proyecto.
├── package-lock.json      Archivo de bloqueo de dependencias.
├── src/                   Carpeta con el código fuente.
│   ├── scripts/           Scripts principales para procesamiento de imágenes.
│   │   ├── addTextOnImage.js
│   │   ├── checkFileSize.js
│   │   ├── compositeImages.js
│   │   ├── cropImage.js
│   │   ├── readImage.js
│   │   ├── resizeImage.js
│   │   └── rotateImage.js
│   └── utils/             Funciones reutilizables como el logger.
│       └── logger.js
├── assets/                Recursos del proyecto.
│   ├── input/             Imágenes originales.
│   │   ├── sammy.png
│   │   ├── underwater.png
│   └── output/            Imágenes procesadas por los scripts.
│       ├── sammy-cropped.png
│       ├── sammy-text-overlay.png
│       ├── sammy-resized-compressed.jpeg
│       ├── ...
└── README.md              Documentación del proyecto.
```

---

## **Cómo Usar el Proyecto**

**1. Procesamiento de Imágenes**
Ejecuta cualquiera de los scripts disponibles en la carpeta src/scripts/. Por ejemplo:
**Agregar Texto a una Imagen**

```bash
node src/scripts/addTextOnImage.js
```

El resultado aparecerá en la carpeta assets/output/ como sammy-text-overlay.png.

**Redimensionar una Imagen**

```bash
node src/scripts/resizeImage.js
```

El resultado redimensionado aparecerá en la misma carpeta de salida.

**2. Limpiar los Archivos Generados**
Si deseas eliminar todas las imágenes procesadas en la carpeta assets/output/, ejecuta:

```bash
npm run clean
```

## **Scripts Disponibles**

Los siguientes scripts se encuentran en la carpeta `src/scripts/`:

| Script             | Descripción                                               |
| ------------------ | --------------------------------------------------------- |
| addTextOnImage.js  | Agrega texto superpuesto a una imagen usando SVG.         |
| resizeImage.js     | Cambia el tamaño de una imagen a dimensiones específicas. |
| cropImage.js       | Recorta una sección específica de una imagen.             |
| rotateImage.js     | Rota una imagen con opciones de desenfoque.               |
| compositeImages.js | Combina múltiples imágenes en una sola.                   |
| checkFileSize.js   | Verifica el tamaño de un archivo.                         |
| readImage.js       | Lee los metadatos de una imagen.                          |

## Ejemplo de Uso

**1. Agregar Texto a una Imagen**
   El script addTextOnImage.js agrega un texto sobre la imagen sammy.png y genera un archivo con el texto en assets/output/sammy-text-overlay.png.

Código del script:

```Javascript
const sharp = require("sharp");

async function addTextOnImage() {
  try {
    const width = 750;
    const height = 483;
    const text = "Sammy the Shark";

    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #001; font-size: 70px; font-weight: bold; }
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    await sharp("assets/input/sammy.png")
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 0,
        },
      ])
      .toFile("assets/output/sammy-text-overlay.png");
    console.log("Texto añadido correctamente a la imagen.");
  } catch (error) {
    console.error("Error al añadir texto:", error);
  }
}
addTextOnImage();

```

**2. Resultado**
   Se generará un archivo llamado sammy-text-overlay.png en la carpeta assets/output/.

## **Dependencias**

Este proyecto utiliza las siguientes bibliotecas:

- sharp: Biblioteca de alto rendimiento para procesamiento de imágenes.

Instálalas ejecutando:

```bash
npm install
```
