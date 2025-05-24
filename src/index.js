import express from 'express';
import * as address from 'address';

import InfoController from '@/controllers/Info';

const app = express();
const PORT = 4040;

app.use('/', InfoController.router);

app.listen(PORT, () => {
  console.log(`listening @ http://localhost:${PORT} || http://${address.ip()}:${PORT}`);
});
