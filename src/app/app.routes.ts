import { Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { CalcyComponent } from './calcy/calcy.component';
import { ClockComponent } from './clock/clock.component';
import { DigitalclockComponent } from './clock/digitalclock/digitalclock.component';
import { TimerComponent } from './clock/timer/timer.component';
import { ToDoComponent } from './to-do/to-do.component';

export const routes: Routes = [
    {path: "calculator", component: CalcyComponent},
    {path: "calender", component: CalenderComponent},
    {path: "clock", component: ClockComponent},
    {path: "digitalclock", component: DigitalclockComponent},
    {path: "timer", component: TimerComponent},
    {path: "to-do", component: ToDoComponent}
];
