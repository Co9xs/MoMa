import http from 'http';

import { app } from './app';

async function main() {
  const server = http.createServer(app);

  server.listen(Number(process.env.PORT || 5000), '0.0.0.0', () => {
    const address = server.address();
    if (typeof address !== 'string') {
      console.log(`Listening on ${address?.address}:${address?.port}`);
    }
  });
}

main().catch(console.error);
