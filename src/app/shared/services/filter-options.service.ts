import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterOptionsModel, filterOptions, filterOptionsBuilder } from '../../models/filter.options-model';

@Injectable({
  providedIn: 'root'
})
export class filterOptionsService {
  private filterOptionsSubject: BehaviorSubject<FilterOptionsModel> = new BehaviorSubject<FilterOptionsModel>(filterOptionsBuilder());

  constructor() { }


  setFilterOptions(filterOptions: FilterOptionsModel): void {
    this.filterOptionsSubject.next(filterOptions);
  }

  getFilterOptions(): Observable<FilterOptionsModel> {
    return this.filterOptionsSubject.asObservable();
  }

}
