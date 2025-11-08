export class Pagination<T> {
  public readonly items: T[];
  public readonly totalItems: number;
  public readonly currentPage: number;
  public readonly itemsPerPage: number;
  public readonly totalPages: number;

  constructor(
    items: T[],
    totalItems: number,
    currentPage: number,
    itemsPerPage: number,
  ) {
    this.items = items;
    this.totalItems = totalItems;
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
    this.totalPages = Math.ceil(totalItems / itemsPerPage);
  }
}
