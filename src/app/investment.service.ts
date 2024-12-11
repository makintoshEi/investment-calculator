import { Injectable, signal } from '@angular/core';
import { AnnualData } from './types/annual-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private _annualData = signal<AnnualData[]>([]);

  get annualData() {
    return this._annualData;
  }

  setAnnualData(value: AnnualData[]) {
    this._annualData.set(value);
  }

}
