import { SortStrategy } from './sort-strategy.interface';

export class PriceSortStrategy implements SortStrategy {
  getSortCriteria(order: 'desc' | 'asc') {
    return { price: order };
  }
}
