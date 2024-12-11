import { Injectable, signal } from '@angular/core';
import { AnnualData } from './types/annual-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  annualData = signal<AnnualData[]>([]);
}
