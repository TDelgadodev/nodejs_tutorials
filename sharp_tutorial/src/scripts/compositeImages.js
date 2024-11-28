const sharp = require("sharp");
const { logError } = require("../utils/logger");

async function compositeImages() {
  try {
    await sharp("underwater.png")
      .composite([
        {
          input: "sammy-transparent.png",
          top: 50,
          left: 50,
        },
      ])
      .toFile("sammy-underwater.png");
  } catch (error) {
    logError(error);
  }
}

compositeImages()