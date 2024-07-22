import { Component } from '@angular/core';
import { HeaderComponent } from "../core/components/header/header.component";
import { FeaturedProductsComponent } from "./featured-products/featured-products.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [HeaderComponent, FeaturedProductsComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
