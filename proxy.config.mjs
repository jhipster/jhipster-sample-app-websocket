const backendHost = '127.0.0.1';
const backendPort = 8080;

/**
 * @type {import('vite').CommonServerOptions['proxy']}
 */
export default {
  '/websocket': {
    target: `ws://${backendHost}:${backendPort}`,
    ws: true,
  },
  '^/(api|management|v3/api-docs|h2-console|login)': {
    target: `http://${backendHost}:${backendPort}`,
    xfwd: true,
  },
};
