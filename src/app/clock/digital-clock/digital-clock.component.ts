import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent implements OnInit {

  date = new Date();

  hour: any
  minute!: string;
  sec!: string;
  ampm!: string

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000)
  }

  updateDate(date: Date) {

  }

}
