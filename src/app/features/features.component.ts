import { Component } from '@angular/core';
import { HeaderComponent } from "../core/components/header/header.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";
import { FootarComponent } from "../core/components/footar/footar.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [HeaderComponent, FeaturedProductsComponent, FootarComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
}
