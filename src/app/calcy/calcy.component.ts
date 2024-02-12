import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calcy',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calcy.component.html',
  styleUrl: './calcy.component.css'
})
export class CalcyComponent implements OnInit {

  inputval: any;;

  ngOnInit(): void {
    this.inputval = new FormGroup({
      text: new FormControl()
    })
  }

  buttonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent
    if (this.inputval.controls.text.value != null) {

      this.inputval.controls.text.setValue(
        this.inputval.controls.text.value
        + buttonText)

    } else {
      this.inputval.controls.text.setValue(buttonText)
    }
  }

  clearBtn() {
    this.inputval.controls.text.setValue("");
  }

  calculate() {
    try {
      const result = new Function('return ' + this.inputval.controls.text.value)();
      this.inputval.controls.text.setValue(result);
    } catch (error) {
      console.error('Error evaluating expression:', error);
      // Handle the error appropriately, e.g., display an error message to the user
      this.inputval.controls.text.setValue('Error');
    }
  }

  deleteBtn() {
    let del = this.inputval.controls.text.value
    let str = del.slice(0, -1)
    this.inputval.controls.text.setValue(str);
  }

  calculateSquareRoot(sq: any) {
    const inputValue = this.inputval.controls.text.value;

    if (inputValue !== null && inputValue !== undefined) {
      const sqrt = Math.sqrt(inputValue);
      this.inputval.controls.text.setValue(sqrt);
    }
    else {
      this.inputval.controls.text.setValue("BRUH")
    }
  }

  
}
