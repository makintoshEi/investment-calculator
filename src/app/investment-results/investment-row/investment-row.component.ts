import { Component, input } from '@angular/core';
import { AnnualData } from '../../types/annual-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'investment-row',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-row.component.html',
  styleUrl: './investment-row.component.css'
})
export class InvestmentRowComponent {
  data = input.required<AnnualData>();
}
