import { Component } from '@angular/core';
import { DigitalClockComponent } from "./digital-clock/digital-clock.component";

@Component({
    selector: 'app-clock',
    standalone: true,
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.css',
    imports: [DigitalClockComponent]
})
export class ClockComponent {

}
