import { Component } from '@angular/core';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';
import { InvestmentHeaderComponent } from "./investment-header/investment-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [InvestmentCalculatorComponent, InvestmentHeaderComponent]
})
export class AppComponent { }
