export interface SortStrategy {
  getSortCriteria(order?: 'asc' | 'desc'): any;
}
