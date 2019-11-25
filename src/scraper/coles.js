const puppeteer = require('puppeteer');

let currentPage = 0;
let productList = [];
process.setMaxListeners(0);

function getProductDetails(element) {
  const dollar = element.querySelector('span[class="sf-pricedisplay"]');
  const cents = element.querySelector('span[class="sf-pricedisplay"]');
  const status = 'in stock';
  let newprice;

  //   let flag = element.querySelector('div[class="product-flag"]').innerText;
  const price = {
    dollar: 0,
    cents: 0,
  };

  if (dollar && cents) {
    price.dollar = dollar.innerText;
    price.cents = cents.innerText;

    newprice = dollar.innerText.replace('$', '');
    price.cents = newprice.substr(newprice.indexOf('.') + 1);
    price.dollar = newprice.substr(0, newprice.indexOf('.'));
    // newprice = price.dollar.substr(price.dollar.indexOf('.') + 1);
  }

  //   if (flag === 'Temporarily unavailable') {
  //     status = 'not in stock';
  //   }

  return {
    title: element.querySelector('h4').innerText,
    price: {
      newprice,
      dollar: price.dollar,
      cents: price.cents,
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
    console.error('Error occured while coles scraping', error);
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
    const text = document.querySelectorAll('div[class="sf-item-container"]');
    text.forEach((product) => {
      products.push(getProductDetails(product));
    });
    return products;
  });

  productList = [...productList, ...pageProducts];
  browser.close();
  console.log(productList.length);
  return pageProducts;
}

function getUrl() {
  currentPage += 1;
  return `https://www.coles.com.au/catalogues-and-specials/view-all-available-catalogues#view=list&saleId=30448&areaName=c-vic-met&page=${currentPage}`;
}

module.exports = {
  getHalfOffItems,
};
