import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';

import { ProductComponent } from './components/RentRoom/product.component';
import { AboutComponent } from './components/about/about.component';
import { PageComponent } from './components/page/page.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/Auth/student/login/login.component';
import { CardComponent } from './components/page/card/card.component';
import { CategoriesComponent } from './components/page/categories/categories.component';
import { CheckoutComponent } from './components/page/checkout/checkout.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { ElementsComponent } from './components/blog/elements/elements.component';
import { SubBlogComponent } from './components/blog/sub-blog/sub-blog.component';

import { Header1Component} from './components/blog/sub-blog/header/header1.component';
import { Header2Component } from './components/blog/blog-details/header/header2.component';
import {Header3Component} from "./components/blog/elements/header/header3.component";


import { ProuductDetailsComponent } from './components/page/prouduct-details/prouduct-details.component';


import { SignUpComponent } from './components/Auth/student/sign-up/sign-up.component';
import { RoomComponent } from './components/home/room/room.component';

import { SignUpOwnerComponent } from './components/Auth/housing_owner/sign-up-owner/sign-up-owner.component';
import { LoginownerComponent } from './components/Auth/housing_owner/loginowner/loginowner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentRoomComponent } from './components/RentRoom/rent-room/rent-room.component';
import { AdminComponent } from './components/Auth/admin/admin.component';
import {HttpClientModule} from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,


    ProductComponent,
    AboutComponent,
    PageComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    CardComponent,
    CategoriesComponent,
    CheckoutComponent,
    BlogDetailsComponent,
    ElementsComponent,
    SubBlogComponent,

    Header1Component,
    Header2Component,
    Header3Component,
    ProuductDetailsComponent,
    SignUpComponent,
    RoomComponent,
    LoginownerComponent,
    SignUpOwnerComponent,
    RentRoomComponent,
    AdminComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
