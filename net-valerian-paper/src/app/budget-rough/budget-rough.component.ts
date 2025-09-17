import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-budget-rough',
  imports: [],
  templateUrl: './budget-rough.component.html',
  styleUrl: './budget-rough.component.css'
})

export class BudgetRoughComponent {
  static title = "Simple Budget";

  basicFormControl = new FormControl();
  
  incomeVariable = 75000;
}

