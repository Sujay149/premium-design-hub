// Vercel serverless function entrypoint for TanStack Start SSR
const { default: handler } = require('../dist/server/index.js');

// Vercel expects a default export for Node.js API routes
module.exports = handler;
