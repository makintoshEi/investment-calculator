import { Component } from '@angular/core';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [InvestmentCalculatorComponent]
})
export class AppComponent { }
