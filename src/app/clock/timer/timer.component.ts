import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-timer',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
    templateUrl: './timer.component.html',
    styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {


    // result: any;
    // res: any;
    // alarmLoading: boolean = false;
    // x: any;

    // hours: string= '00';
    // minutes: string= '00';

    // first: any = 0;
    // second: any = 0;
    // counter: number = 0;

    // ngOnInit() {

    // }


    // checkTime(i: any){
    //   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    //   return i;
    // }

    // addFirstDigit(){
    //   if(this.first<23){
    //       if (this.first<9) {
    //         this.first += 1;
    //         this.hours= '0' + this.first;        
    //       }else{
    //         this.first += 1;
    //         this.hours = this.first;
    //       }
    //   }else{
    //       this.first = 0;
    //       this.hours = '00';
    //   }
    // }

    // removeFirstDigit(){
    //   if (this.first>0) {
    //     if (this.first<=10) {
    //       this.first -= 1;
    //       this.hours= '0' + this.first;        
    //     }else{
    //       this.first -= 1;
    //       this.hours = this.first;
    //     }
    //   }else{
    //     this.first = 23;
    //     this.hours = '23';
    //   }
    // }

    // addSecondDigit(){
    //   if(this.second<59){
    //     if (this.second<9) {
    //       this.second += 1;
    //       this.minutes = '0' + this.second;
    //     }else{
    //       this.second += 1;
    //       this.minutes = this.second;
    //     }
    //   }else{
    //     this.second = 0;
    //     this.minutes = '00';
    //   }
    // }

    // removeSecondDigit(){
    //   if (this.second>0) {
    //     if (this.second<=10) {
    //       this.second -= 1;
    //       this.minutes= '0' + this.second;        
    //     }else{
    //       this.second -= 1;
    //       this.minutes = this.second;
    //     }
    //   }else{
    //     this.second = 59;
    //     this.minutes = '59';
    //   }
    // }

    // alarm(x: any,y: any){
    //   this.res = `${x}:${y}`;
    //   this.alarmLoading = true;
    //   alert(`Alarm set to ${this.res}`);
    // }


    result: any;
    res: any;
    alarmLoading: boolean = false;
    hours: string = '00';
    minutes: string = '00';
    alarmTriggered: boolean = false; // New boolean flag to track if alarm has been triggered

    hourOptions: string[] = Array.from({ length: 24 }, (_, i) => this.pad(i));
    minuteOptions: string[] = Array.from({ length: 60 }, (_, i) => this.pad(i));

    pad(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    ngOnInit() {
        setInterval(() => {
            this.result = this.getCurrentTime();
            this.checkAlarm();
        }, 1000);
    }

    getCurrentTime(): string {
        const now = new Date();
        const hours = this.pad(now.getHours());
        const minutes = this.pad(now.getMinutes());
        return `${hours}:${minutes}`;
    }

    setAlarm() {
        this.res = `${this.hours}:${this.minutes}`;
        this.alarmLoading = true;
        this.alarmTriggered = false; // Reset the alarm triggered flag
        alert(`Alarm set to ${this.res}`);
    }

    checkAlarm() {
        const currentTime = this.getCurrentTime();
        if (currentTime === this.res && !this.alarmTriggered) {
            this.triggerAlarm();
        }
    }

    triggerAlarm() {
        alert('Alarm complete!');
        this.alarmTriggered = true; // Set the alarm triggered flag to true
        this.alarmLoading = false;
    }

    onHourChange(event: any) {
        const selectedHour = event.target.value;
        if (selectedHour !== null) {
            this.hours = selectedHour;
        }
    }

    onMinuteChange(event: any) {
        const selectedMinute = event.target.value;
        if (selectedMinute !== null) {
            this.minutes = selectedMinute;
        }
    }

}



