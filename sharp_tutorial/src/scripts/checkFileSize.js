const fs = require("fs");
const { logError } = require("../utils/logger");

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    console.log(`Size of ${filePath}: ${(stats.size / 1024).toFixed(2)} KB`);
  } catch (error) {
    logError(error);
    console.error(`Error reading file size: ${error.message}`);
  }
}

getFileSize("sammy-resized-compressed.jpeg");
getFileSize("sammy.png");
