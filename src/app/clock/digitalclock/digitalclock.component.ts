import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalclock',
  standalone: true,
  imports: [],
  templateUrl: './digitalclock.component.html',
  styleUrl: './digitalclock.component.css'
})
export class DigitalclockComponent implements OnInit {
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
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'AM' : 'PM';

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const secs = date.getSeconds();
    this.sec = secs < 10 ? '0' + secs : secs.toString();
  }
}
