import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../types/investment.model';
import { AnnualData } from '../types/annual-data.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'investment-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css'
})
export class InvestmentCalculatorComponent {

  initialInvestment = signal<number>(0); // type inference
  annualInvestment = signal(0);
  expectedReturn = signal(0);
  duration = signal(0);
  investmentService = inject(InvestmentService);

  calculateInvestment() {
    this.investmentService.annualData.set(this.calculateInvestmentResults({
      annualInvestment: this.annualInvestment(),
      duration: this.duration(),
      expectedReturn: this.expectedReturn(),
      initialInvestment: this.initialInvestment()
    }));
  }

  calculateInvestmentResults(investment: Investment) {
    const { annualInvestment, duration, expectedReturn, initialInvestment } = investment;
    const annualData: AnnualData[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        investment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    return annualData;
  }

}
