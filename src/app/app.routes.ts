import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './features/contact/contact.component';
import { FeaturedProductsComponent } from './features/featured-products/featured-products.component';

export const routes: Routes = [
    { path: '', component: FeaturesComponent ,
        children: [
            { path: '', component: FeaturedProductsComponent },
            { path: 'contact', component: ContactComponent },
          ]
    },
];

