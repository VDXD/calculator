import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.css'
})
export class NotepadComponent {

  textAreaValue: any = '';

  constructor() {
    this.textAreaValue = localStorage.getItem('textValue')
  }

  save() {
    localStorage.setItem('textValue', this.textAreaValue)
  }

  clear() {
    localStorage.removeItem('textValue')
    this.textAreaValue = ''
  }

}
