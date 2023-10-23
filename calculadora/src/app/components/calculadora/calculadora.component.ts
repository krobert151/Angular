import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})export class CalculatorComponent {
  public result: number = 0;
  public currentNumber: string = '';
  public operator: string = '';
  public firstNumber: number =0;

  public appendNumber(number: string): void {
    this.currentNumber = this.currentNumber.concat(number);
  }

  public clear(): void {
    this.currentNumber = '';
    this.operator = '';
    this.firstNumber = 0;
  }

  public setOperator(operator: string): void {
    this.operator = operator;
    this.firstNumber = parseFloat(this.currentNumber);
    this.currentNumber = '';
  }

  public calculate(): void {
    const secondNumber = parseFloat(this.currentNumber);
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / secondNumber;
        break;
    }
    this.currentNumber = this.result.toString();
    this.operator = '';
    this.firstNumber = 0;
  }
}