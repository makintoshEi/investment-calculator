import { Component, input } from '@angular/core';
import { AnnualData } from '../types/annual-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'investment-results',
  standalone: true,
  imports: [ CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  annualData = input.required<AnnualData[]>();
}
