import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { FootarComponent } from "../footar/footar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, FootarComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
