import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalcyComponent } from "./calcy/calcy.component";
import { CalenderComponent } from "./calender/calender.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TimerComponent } from "./clock/timer/timer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CalcyComponent, CalenderComponent, RouterLink, RouterLinkActive, TimerComponent]
})
export class AppComponent {
  title = 'calculator';
}
