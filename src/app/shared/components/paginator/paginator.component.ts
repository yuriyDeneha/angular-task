import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() amount: number = 0;
  @Input() page: number = 0;
  @Input() size: number = 10;

  @Output() onSizeChange = new EventEmitter();
  @Output() onPageChange = new EventEmitter();

  pagesOptions = [10, 20, 40]

  constructor() { }

  ngOnInit(): void {
  }

  public prev(): void {
    this.onPageChange.emit(this.page - 1);
  }

  public next(): void {
    this.onPageChange.emit(this.page - 1);
  }

}
