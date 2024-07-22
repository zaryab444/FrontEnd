import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { FootarComponent } from "../footar/footar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, FootarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
