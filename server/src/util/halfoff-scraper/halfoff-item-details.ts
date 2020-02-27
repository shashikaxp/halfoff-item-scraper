import { IItem } from '../supermarket/item.interface';

function woolworths(element: any): IItem {
  const dollar = element.querySelector('span[class="price-dollars"]');
  const cents = element.querySelector('span[class="price-cents"]');
  let status = 'not in stock';
  const price = {
    cents: 0,
    dollar: 0,
  };

  if (dollar && cents) {
    price.dollar = parseInt(dollar.innerText, 10);
    price.cents = parseInt(cents.innerText, 10);
    status = 'in stock';
  }

  return {
    value: price,
    image: element.querySelector('img').getAttribute('src'),
    status,
    name: element.querySelector('h3').innerText,
  };
}

function coles(element: any): IItem {
  const dollar = element.querySelector('span[class="sf-pricedisplay"]');
  const cents = element.querySelector('span[class="sf-pricedisplay"]');
  const status = 'in stock';
  let newprice;

  const price = {
    dollar: 0,
    cents: 0,
  };

  if (dollar && cents) {
    newprice = dollar.innerText.replace('$', '');
    price.cents = newprice.substr(newprice.indexOf('.') + 1);
    price.dollar = newprice.substr(0, newprice.indexOf('.'));
  }

  return {
    name: element.querySelector('h4').innerText,
    value: price,
    status,
    image: element.querySelector('img').getAttribute('src'),
  };
}

export default function getHalfoffFilter(supermarketName: String): Function {
  switch (supermarketName) {
    case 'woolworths':
      return woolworths;
    case 'coles':
      return coles;

    default:
      return woolworths;
  }
}
