import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FeaturedProductsService } from './featured-products-service/featured-products.service';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {

  constructor(private featureService: FeaturedProductsService){}

 productsData: Array<any> = [];
 monthlyProducts: Array<any> = [];
 featureProducts: Array<any> = [];
 endsub$: Subject<any> = new Subject();

 ngOnInit(): void {
  this.getProductsData();
}


  //get the list of Product data
  getProductsData() {
    this.featureService.getProductData().pipe(takeUntil(this.endsub$))?.subscribe((res: any) => {
      if (res?.data) {
        this.productsData = res?.data;
        this.monthlyProducts = this.productsData.slice(0,3);
        this.featureProducts = this.productsData.slice(-3);
        console.log(this.featureProducts);
       
      }
    }, (err) => {
       } )
  }

  ngOnDestroy() {
    this.endsub$.next;
    this.endsub$.complete();
  }
}
