function getWoolworthsContent(pageContent: any) {
  return pageContent.querySelectorAll(
    'div[class="shelfProductTile-content"]',
  );
}

function getColesContent(pageContent: any) {
  return pageContent.querySelectorAll(
    'div[class="sf-item-container"]',
  );
}

export default function getPageContent(supermarketName: String) {
  switch (supermarketName) {
    case 'woolworths':
      return getWoolworthsContent;
    case 'coles':
      return getColesContent;
    default:
      throw new Error('Wrong Supermarket');
  }
}
