import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SHRComponent } from './component/products/shr/shr.component';
import { Product2Component } from './component/products/product2/product2.component';
import { Product3Component } from './component/products/product3/product3.component';
import { Product4Component } from './component/products/product4/product4.component';
import { Product5Component } from './component/products/product5/product5.component';
import { Product6Component } from './component/products/product6/product6.component';
import { CompanyComponent } from './component/company/company.component';
import { Service1Component } from './component/services/service1/service1.component';
import { Service2Component } from './component/services/service2/service2.component';
import { Service3Component } from './component/services/service3/service3.component';
import { Service4Component } from './component/services/service4/service4.component';
import { Service5Component } from './component/services/service5/service5.component';
import { Service6Component } from './component/services/service6/service6.component';
import { NavProductComponent } from './component/nav-product/nav-product.component';
import { NavServiceComponent } from './component/nav-service/nav-service.component';

const appRoutes : Routes = [
  { path: '', component: SHRComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'products', component: SHRComponent },
  { path: 'products/SHR', component: SHRComponent },
  { path: 'products/product2', component: Product2Component },
  { path: 'products/product3', component: Product3Component },
  { path: 'products/product4', component: Product4Component },
  { path: 'products/product5', component: Product5Component },
  { path: 'products/product6', component: Product6Component },
  
  { path: 'services', component: Service1Component },
  { path: 'services/service1', component: Service1Component },
  { path: 'services/service2', component: Service2Component },
  { path: 'services/service3', component: Service3Component },
  { path: 'services/service4', component: Service4Component },
  { path: 'services/service5', component: Service5Component },
  { path: 'services/service6', component: Service6Component },

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SHRComponent,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    CompanyComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service5Component,
    Service6Component,
    NavProductComponent,
    NavServiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
