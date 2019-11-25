var woolworths = require('./src/scraper/woolworths');
var coles = require('./src/scraper/coles');

woolworths.getHalfOffItems().then(data => {
  console.log(data);
});
