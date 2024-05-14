import { SortStrategy } from './sort-strategy.interface';

export class DiscountSortStrategy implements SortStrategy {
  getSortCriteria() {
    return { discount_price: { sort: 'desc', nulls: 'last' } };
  }
}
