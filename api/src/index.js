/* eslint-disable import/extensions */
import express from 'express';

import routes from './routes.js';

const app = express();
app.use(routes);

app.listen(5174, () => console.log('Server started at http://localhost:5174'));
