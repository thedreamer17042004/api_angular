import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'components/about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'components/product', component: ProductComponent},
  {path: 'components/login', component: LoginComponent},
  {path: 'components/contact', component: ContactComponent},
  {path: 'components/cart-shop', component: CartShopComponent},
  {path: 'components/product-detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
