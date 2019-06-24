import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableUserComponent } from './table-user/table-user.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { BookListingComponent } from './book-listing/book-listing.component';
import { BookComponent } from './book/book.component';
import {BookService} from './book/book.service';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {UserService} from './user/user.service';
import {AddUserService} from './add-user/add-user.service';
import {ReactiveFormsModule} from '@angular/forms';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {AddcustomerService} from './add-customer/addcustomer.service';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { ShowCustomerService} from './show-customer/show-customer.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TableUserComponent,
    HeaderAppComponent,
    BookListingComponent,
    BookComponent,
    UserComponent,
    AddUserComponent,
    AddCustomerComponent,
    ShowCustomerComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookService,UserService,AddUserService,AddcustomerService,ShowCustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
