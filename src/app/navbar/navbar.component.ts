import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatIconButton,
    MatIcon
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
