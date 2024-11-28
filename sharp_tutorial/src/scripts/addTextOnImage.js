const sharp = require("sharp");
const { logError } = require("../utils/logger");

async function addTextOnImage() {
  try {
    const width = 750;
    const height = 483;
    const text = "Sammy the Shark";

    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title { fill: #001; font-size: 70px; font-weight: bold;}
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    const image = await sharp("sammy.png")
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 0,
        },
      ])
      .toFile("sammy-text-overlay.png");
      console.log(image);
  } catch (error) {
    logError(error);
  }
}

addTextOnImage();
