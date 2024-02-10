import { Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { CalcyComponent } from './calcy/calcy.component';
import { ClockComponent } from './clock/clock.component';

export const routes: Routes = [
    {path: "calculator", component: CalcyComponent},
    {path: "calender", component: CalenderComponent},
    {path: "clock", component: ClockComponent}
];
