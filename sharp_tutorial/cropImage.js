const sharp = require("sharp");

async function cropImage() {
  try {
    await sharp("sammy.png")
      .extract({ width: 500, height: 330, left: 120, top: 70  })
      .toFile("sammy-cropped.png");
  } catch (error) {
    console.log(error);
  }
}

cropImage();