import { DiscountSortStrategy } from './discount-sort.strategy';
import { PriceSortStrategy } from './price-sort.strategy';
import { SortStrategy } from './sort-strategy.interface';

export class SortStrategyManager {
  private strategies: { [key: string]: SortStrategy } = {};

  constructor() {
    this.strategies['price'] = new PriceSortStrategy();
    this.strategies['discount_percent'] = new DiscountSortStrategy();
  }

  getStrategy(orderType: 'price' | 'discount_percent'): SortStrategy {
    return this.strategies[orderType];
  }
}
