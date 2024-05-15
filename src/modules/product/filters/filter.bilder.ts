type FilterType = { [key: string]: any };
type ColorType = { color_hex: string };

class Filter {
  public filtersList: FilterType[] = [];

  combine(objects: FilterType[]): FilterType {
    function makeObj(obj: object, ac: object) {
      const key = Object.keys(obj)[0];
      const value = obj[key];

      if (ac[key] === undefined || typeof value !== 'object') {
        ac[key] = value;
        return;
      }

      makeObj(value, ac[key]);
    }

    const ac = {};
    objects.map((obj) => makeObj(obj, ac));
    return ac;
  }

  public getFilters() {
    return this.combine(this.filtersList);
  }
}

export class FilterBuilder {
  private filter: Filter;

  constructor() {
    this.resetFilters();
  }

  private resetFilters(): void {
    this.filter = new Filter();
  }

  public setMinPrice(price: number | null) {
    if (price) {
      this.filter.filtersList.push({ price: { gte: price } });
    }
    return this;
  }

  public setMaxPrice(price: number | null) {
    if (price) {
      this.filter.filtersList.push({ price: { lte: price } });
    }
    return this;
  }

  public setCategory(category: number | null) {
    if (category) {
      this.filter.filtersList.push({ category_id: category });
    }
    return this;
  }

  public setColors(colors: string[] | null) {
    if (colors) {
      const listObjColors: ColorType[] = [];
      colors.map((color: string) => {
        listObjColors.push({ color_hex: color });
      });

      this.filter.filtersList.push({
        colors: {
          some: {
            OR: listObjColors,
          },
        },
      });
    }
    return this;
  }

  public build(): Filter {
    const filterList = this.filter;
    this.resetFilters();
    return filterList;
  }
}
