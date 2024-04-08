import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {

  @Input() currentPage = 0
  @Input() total = 0
  @Input() pageSize = 10
  @Output() changePage = new EventEmitter<number>();

  pagesQtd: number[] = []

  ngOnInit(): void {
     const pagesCount = Math.ceil(this.total / this.pageSize)
     this.pagesQtd = this.range(1, pagesCount)
  }

  range(start: number, end: number): number[] {
     return [...Array(end).keys()].map((el) => el + start)
  }

  setPage(page: number){
    this.changePage.emit(page)
  }

}
