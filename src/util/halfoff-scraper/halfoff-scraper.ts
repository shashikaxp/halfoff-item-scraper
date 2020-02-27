import * as puppeteer from 'puppeteer';
import { IItem } from '../supermarket/item.interface';
import getUrl from './url-generator';
import getPageContent from './content-selector';
import getHalfoffFilter from './halfoff-item-details';

// eslint-disable-next-line import/prefer-default-export
export class HalfOffScraper {
    name: String;

    productList: any[] = [];

    private getHalfOffItemDetails: Function;

    private getPageContent: Function;

    constructor(name: String) {
      this.name = name;
      this.getHalfOffItemDetails = getHalfoffFilter(this.name);
      this.getPageContent = getPageContent(this.name);
    }

    private async getHalfOffItemsPerPage(pageNo: number): Promise<IItem[]> {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = getUrl(this.name, pageNo, 20);
      await page.goto(url, { waitUntil: 'networkidle2' });

      const halfoffContentFn = this.getPageContent.name;
      const halfoffItemDetailsFn = this.getHalfOffItemDetails.name;

      await page.addScriptTag({ content: `${this.getPageContent} ${this.getHalfOffItemDetails}` });
      console.log('#################');
      const pageContent = await page.evaluate((contentFn, detailsFn) => {
        const pageProducts: any[] = [];
        // @ts-ignore
        // eslint-disable-next-line no-undef
        const nodeList = window[contentFn](document);

        for (let i = 0; i < nodeList.length; i += 1) {
          const element = nodeList[i];
          // @ts-ignore
          // eslint-disable-next-line
          const data = window[detailsFn](element);
          pageProducts.push(data);
        }
        return pageProducts;
      }, halfoffContentFn, halfoffItemDetailsFn);

      await browser.close();
      return pageContent;
    }

    async getHalfoffItems(): Promise<IItem[]> {
      let currentPage = 1;
      let productCount = 0;
      let halfoffItemList: IItem[] = [];

      do {
        const halfOffItemsPerPage = await this.getHalfOffItemsPerPage(currentPage);
        productCount = halfOffItemsPerPage.length;
        currentPage += 1;
        halfoffItemList = [...halfoffItemList, ...halfOffItemsPerPage];
      } while (false);
      return halfoffItemList;
    }
}
