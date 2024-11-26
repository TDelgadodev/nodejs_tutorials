const sharp = require("sharp");

async function cropImage() {
  try {
    await sharp("sammy.png")
      .extract({ width: 500, height: 330, left: 120, top: 70  })
      .grayscale()
      .toFile("sammy-cropped-grayscale.png");
  } catch (error) {
    console.log(error);
  }
}

cropImage();