const puppeteer = require('puppeteer');
let currentPage = 0;
let productList = [];
process.setMaxListeners(0);

function getProductDetails(element) {
  let dollar = element.querySelector('span[class="price-dollars"]');
  let cents = element.querySelector('span[class="price-cents"]');
  let status = 'not in stock';
  let price = {
    dollar: 0,
    cents: 0
  };

  if (dollar && cents) {
    price.dollar = dollar.innerText;
    price.cents = cents.innerText;
    status = 'in stock';
  }

  return {
    title: element.querySelector('h3').innerText,
    price: {
      dollar,
      cents
    },
    status: status,
    image: element.querySelector('img').getAttribute('src')
  };
}

async function getHalfOffItems() {
  try {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    currentPage = currentPage + 1;
    await page.goto(getUrl(), { waitUntil: 'networkidle2' });

    await page.addScriptTag({
      content: `${getProductDetails}`
    });

    let pageProducts = await page.evaluate(() => {
      const products = [];
      let text = document.querySelectorAll(
        'div[class="shelfProductTile-content"]'
      );
      text.forEach(product => {
        products.push(getProductDetails(product));
      });
      return products;
    });
    productList = [...productList, ...pageProducts];
    console.log(productList.length);
    if (pageProducts.length > 0) {
      getHalfOffItems();
    } else {
      browser.close();
      return productList;
    }
  } catch (error) {
    console.error(error);
  }
}

function getUrl() {
  return `https://www.woolworths.com.au/shop/productgroup/131119-wk20-half-price-specials?pageNumber=${currentPage}&filterOpen=0&openFilter=Brand`;
}

module.exports = {
  getHalfOffItems
};
