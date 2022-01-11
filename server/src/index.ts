import http from 'http';

import { app } from './app';

function main() {
  const server = http.createServer(app);

  server.listen(Number(process.env.PORT || 5000), '0.0.0.0', () => {
    const address = server.address();
    if (typeof address !== 'string' && address !== null) {
      console.log(`Listening on ${address?.address}:${address?.port}`);
    }
  });
}

main()
