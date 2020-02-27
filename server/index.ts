import * as dotenv from 'dotenv';
import app from './src/app';

dotenv.config();

const port = process.env.SERVER_PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// woolworths.getHalfOffItems().then(data => {
//   console.log(data);
// });
