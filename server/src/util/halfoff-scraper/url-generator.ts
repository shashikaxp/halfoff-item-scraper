function woolworthUrl(pageNo: number, week: number) {
  // return 'https://www.google.com.';
  return `https://www.woolworths.com.au/shop/productgroup/131119-wk20-half-price-specials?pageNumber=${pageNo}&filterOpen=0&openFilter=Brand`;
}

function colesUrl(pageNo: number, week: number) {
  // 30448
  // 31173
  return `https://www.coles.com.au/catalogues-and-specials/view-all-available-catalogues#view=list&saleId=31173&areaName=c-vic-met&page=${pageNo}`;
}

export default function getUrl(name: String, pageNo: number, week: number) {
  switch (name) {
    case 'woolworths':
      return woolworthUrl(pageNo, week);
    case 'coles':
      return colesUrl(pageNo, week);
    default:
      return 'wrong name';
  }
}
