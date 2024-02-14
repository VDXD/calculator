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

    // ngOnInit(): void {

    // }

    result: any = '23:20';
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
        this.isAlarmOff = true;
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

    isAlarmOff: boolean = false;

    toggleAlarm() {
        this.isAlarmOff = !this.isAlarmOff;

        if (!this.isAlarmOff) {
            this.alarmTriggered = true;
        }

        console.log('Alarm is now:', this.isAlarmOff ? 'Off' : 'On');
    }

}



