import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

}
