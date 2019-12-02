const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scraper', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('// we are connected!');
});

export default db;
