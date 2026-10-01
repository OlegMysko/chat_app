'use strict';

import 'dotenv/config';
import { createServer } from './createServer.js';
import { client } from './utils/bd.js';

const PORT = process.env.PORT || 3005;

async function start() {
  try {
    await client.authenticate();
    console.log('database connected');

    await client.sync();
    console.log('tables created');

    const { httpServer } = createServer();

    httpServer.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server start error:', error);
  }
}

start();
