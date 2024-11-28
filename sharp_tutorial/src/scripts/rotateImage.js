const sharp = require("sharp");
const { logError } = require("../utils/logger");

async function rotateImage() {
  try {
    await sharp("sammy.png")
      .rotate(33, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .blur(4)
      .toFile("sammy-rotated-blurred.png");
  } catch (error) {
    logError(error);
  }
}

rotateImage();