// import { EventEmitter, Output, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { RouterLinkActive } from '@angular/router';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// // import { EventEmitter } from 'stream';
// import { clearInterval } from 'timers';

// @Component({
//   selector: 'app-timer',
//   standalone: true,
//   imports: [RouterLink, RouterLinkActive, MatCardModule, MatButtonModule],
//   templateUrl: './timer.component.html',
//   styleUrl: './timer.component.css'
// })
// export class TimerComponent implements OnInit {

//   @Output() countdownFinished = new EventEmitter<void>();

//   seconds:number = 60;
//   timer:any;
//   timeRunning: boolean = true;

//   constructor(){}

//   ngOnInit(): void {
//     this.startTimer();
//   }

//   startTimer(){
//     this.timer = setInterval(() => {
//       this.seconds--;

//       if(this.seconds === 0){
//         clearInterval(this.timer);
//         this.countdownFinished.emit();
//       }
//     }, 1000);
//   }

//   toggleTimer(){
//     if(this.timeRunning){
//       clearInterval(this.timer);
//     }
//     else {
//       this.startTimer();
//     }
//     this.timeRunning = !this.timeRunning;
//   }

//   resetTimer(){
//     clearInterval(this.timer);
//     this.seconds = 60;
//     this.timeRunning = true;
//     this.startTimer();
//   }

//   formatTime(seconds:number):string{
//     const minutes:number = Math.floor(seconds/60);
//     const remainingSeconds:number = seconds % 60;

//     const formattedMinutes:string = this.padNumber(minutes);
//     const formattedSeconds:string = this.padNumber(remainingSeconds);

//     return `${formattedMinutes}.${formattedSeconds}`;
//   }

//   private padNumber(number:number): string{
//     return number < 10 ? `0 ${number}` : `${number}`;
//   }
// }
