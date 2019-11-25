const express = require('express');
const morgan = require('morgan');

import auth from './api/auth/auth';

const app = express();

app.use(morgan('dev'));
app.use(auth);

export default app;
