import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-digitalclock',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './digitalclock.component.html',
  styleUrl: './digitalclock.component.css'
})
export class DigitalclockComponent {

}
