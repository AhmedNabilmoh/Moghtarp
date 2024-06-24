import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogDetailsComponent} from '../app/components/blog/blog-details/blog-details.component';
import {SubBlogComponent} from '../app/components/blog/sub-blog/sub-blog.component';
import {ElementsComponent} from '../app/components/blog/elements/elements.component';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/RentRoom/product.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/page/checkout/checkout.component';
import { CategoriesComponent } from './components/page/categories/categories.component';
import { CardComponent } from './components/page/card/card.component';
import { LoginComponent } from './components/Auth/student/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProuductDetailsComponent } from './components/page/prouduct-details/prouduct-details.component';

import { SignUpComponent } from './components/Auth/student/sign-up/sign-up.component';
import { LoginownerComponent } from './components/Auth/housing_owner/loginowner/loginowner.component';
import { SignUpOwnerComponent } from './components/Auth/housing_owner/sign-up-owner/sign-up-owner.component';
import { AdminComponent } from './components/Auth/admin/admin.component';

const routes: Routes = [
  {path:"thirdHome",component:HomeComponent},
  {path:"secondHome",component:HomeComponent},
  {path:'sub-blog',component:SubBlogComponent},
  {path:'blog-details',component:BlogDetailsComponent},
  {path:'elements',component:ElementsComponent},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"card",component:CardComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"contact",component:ContactComponent},
  {path:"productDetails",component:ProuductDetailsComponent},
  {path:"Loginowner",component:LoginownerComponent},
  {path:"SignUpOwner",component:SignUpOwnerComponent},
  {path:"loginAdmin",component:AdminComponent},
  
  {path:'**' ,component:HomeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
