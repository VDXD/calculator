import { Component } from '@angular/core';
import { DigitalclockComponent } from "./digitalclock/digitalclock.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-clock',
    standalone: true,
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.css',
    imports: [DigitalclockComponent, RouterLink, RouterLinkActive]
})
export class ClockComponent {
    date = new Date();

    hour: any = 10
    minute: string = '20';
    sec: string = '30';
    ampm: string = 'AM'
  
    // ngOnInit(): void {
    //   setInterval(() => {
    //     const date = new Date();
    //     this.updateDate(date);
    //   }, 1000)
    // }
  
    // updateDate(date: Date) {
    //   const hours = date.getHours();
  
    //   this.ampm = hours >= 12 ? ' AM' : ' PM';
  
    //   this.hour = hours % 12;
    //   this.hour = this.hour ? this.hour : 12;
    //   this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
  
    //   const minutes = date.getMinutes();
    //   this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
  
    //   const secs = date.getSeconds();
    //   this.sec = secs < 10 ? '0' + secs : secs.toString();
    // }
}
