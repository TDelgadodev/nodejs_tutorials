function logInfo(message) {
    console.log(`[INFO] ${message}`);
  }
  
  function logError(error) {
    console.error(`[ERROR] ${error.message}`);
  }
  
  module.exports = { logInfo, logError };
  