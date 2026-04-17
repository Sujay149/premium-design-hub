// Vercel-compatible SSR handler for TanStack Start (ESM to CJS wrapper)
import('../dist/server/index.js').then(mod => {
  const handler = mod.default;
  module.exports = async (req, res) => {
    // If the handler is a function, call it with req/res
    if (typeof handler === 'function') {
      return handler(req, res);
    }
    // If the handler is an object with a fetch method (like Cloudflare), adapt it
    if (handler && typeof handler.fetch === 'function') {
      // Convert Vercel req/res to a Fetch API Request
      const url = `https://${req.headers.host}${req.url}`;
      const fetchRequest = new Request(url, {
        method: req.method,
        headers: req.headers,
        body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
      });
      const fetchResponse = await handler.fetch(fetchRequest);
      res.statusCode = fetchResponse.status;
      fetchResponse.headers.forEach((value, key) => res.setHeader(key, value));
      res.end(await fetchResponse.text());
      return;
    }
    res.statusCode = 500;
    res.end('SSR handler not compatible with Vercel');
  };
});
