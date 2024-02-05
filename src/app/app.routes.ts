import { Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { CalcyComponent } from './calcy/calcy.component';

export const routes: Routes = [
    {path: "calculator", component: CalcyComponent},
    {path: "calender", component: CalenderComponent}
];
