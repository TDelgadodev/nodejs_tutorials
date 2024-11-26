const sharp = require("sharp");

async function resizeImage() {
  try {
    await sharp("sammy.png")
      .resize({
        width: 150,
        height: 97
      })
      .toFormat("jpeg", { mozjpeg: true })
      .toFile("sammy-resized-compressed.jpeg")
  } catch (error) {
    console.log(error);
  }
}

resizeImage();