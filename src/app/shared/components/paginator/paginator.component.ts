import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input() amount: number = 0;
  @Input() page: number = 0;
  @Input() size: number = 10;

  @Output() onSizeChange = new EventEmitter();
  @Output() onPageChange = new EventEmitter();

  public pagesOptions: Array<number> = [10, 20, 40];
  public pages: Array<number> = [];

  constructor() { }

  get isFirst () {
    return !this.page;
  }

  get isLast () {
    return this.page === (this.pages.length - 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size']) {
      this.pages =  this.getPagesArray(this.size, this.amount);
    }
  }

  public prev(): void {
    this.onPageChange.emit(this.page - 1);
  }

  public next(): void {
    this.onPageChange.emit(this.page - 1);
  }

    /**
   * Generates an array representing the available pages for pagination.
   * @returns {number[]} - The array of page numbers.
   */
  public getPagesArray(size: number, amount: number) {
    if (!size) {
      return [];
    }
    const pagesAmount = Math.floor(amount / size + 1)
    return Array.from({ length: pagesAmount }, (_, index) => index + 1);
  }

}
