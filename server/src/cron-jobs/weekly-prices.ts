import * as cron from 'node-cron';
import HalfOffItemModel from '../models/halfOffItem';
import validationHandler from '../util/validationHandler';
import { HalfOffScraper } from '../util/halfoff-scraper/halfoff-scraper';

export default async function getWeeklyPrices() {
  try {
    const scraper = new HalfOffScraper('woolworths');
    const items = await scraper.getHalfoffItems();
    HalfOffItemModel.insertMany(items);
    console.error('Weekly items are updated');
  } catch (error) {
    console.error(error);
  }
  // cron.schedule('* * * * *', null, () => {
  //   console.log('sdasd');
  // });
}
