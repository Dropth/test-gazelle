import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatGridList,
    MatGridTile,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
