const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();

// Set up CORS Anywhere
const host = '0.0.0.0'; // Listen on all network interfaces
const port = 8080; // Change this to any port you prefer

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [], // No special headers required
  removeHeaders: ['cookie', 'cookie2'], // Optionally remove cookies for security
}).listen(port, host, () => {
  console.log(`CORS proxy server is running on http://${host}:${port}`);
});
