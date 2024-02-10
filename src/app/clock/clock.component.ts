import { Component } from '@angular/core';
import { DigitalclockComponent } from "./digitalclock/digitalclock.component";

@Component({
    selector: 'app-clock',
    standalone: true,
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.css',
    imports: [DigitalclockComponent]
})
export class ClockComponent {

}
