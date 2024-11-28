const sharp = require("sharp");
const { logError } = require("../utils/logger");


async function getMetadata() {
  try {
    const metadata = await sharp("sammy.png").metadata();
    console.log(metadata);
  } catch (error) {
    logError(error);
    console.log(`An error occurred during processing: ${error}`);
  }
}

getMetadata();