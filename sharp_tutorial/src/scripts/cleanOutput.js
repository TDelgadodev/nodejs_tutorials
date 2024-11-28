const fs = require("fs");
const path = require("path");

async function cleanOutput() {
  const outputDir = path.resolve(__dirname, "../assets/output");
  try {
    if (!fs.existsSync(outputDir)) {
      console.log(`La carpeta no existe. Creando: ${outputDir}`);
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(outputDir);

    for (const file of files) {
      const filePath = path.join(outputDir, file);
      fs.unlinkSync(filePath);
      console.log(`Archivo eliminado: ${file}`);
    }

    console.log(
      "✅ Todos los archivos en 'assets/output/' han sido eliminados."
    );
  } catch (error) {
    console.error("❌ Error al limpiar la carpeta de salida:", error);
  }
}

cleanOutput();
