const puppeteer = require('puppeteer');

let currentPage = 0;
let productList = [];
process.setMaxListeners(0);

function getProductDetails(element) {
  const dollar = element.querySelector('span[class="price-dollars"]');
  const cents = element.querySelector('span[class="price-cents"]');
  let status = 'not in stock';
  const price = {
    dollar: 0,
    cents: 0,
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
      cents,
    },
    status,
    image: element.querySelector('img').getAttribute('src'),
  };
}

async function getHalfOffItems() {
  let productCount = 0;
  try {
    do {
      productCount = (await scrapeItems()).length;
    } while (productCount > 0);
  } catch (error) {
    console.error('Error occured while woolworth scraping', error);
  }
  return productList;
}

async function scrapeItems() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(getUrl(), { waitUntil: 'networkidle2' });

  await page.addScriptTag({
    content: `${getProductDetails}`,
  });

  const pageProducts = await page.evaluate(() => {
    const products = [];
    const text = document.querySelectorAll(
      'div[class="shelfProductTile-content"]',
    );
    text.forEach((product) => {
      products.push(getProductDetails(product));
    });
    return products;
  });

  productList = [...productList, ...pageProducts];
  browser.close();
  return pageProducts;
}

function getUrl() {
  currentPage += 1;
  return `https://www.woolworths.com.au/shop/productgroup/131119-wk20-half-price-specials?pageNumber=${currentPage}&filterOpen=0&openFilter=Brand`;
}

module.exports = {
  getHalfOffItems,
};
