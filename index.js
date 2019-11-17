var woolworths = require('./src/scraper/woolworths');

woolworths.getHalfOffItems().then(data => {
  console.log(data);
});
