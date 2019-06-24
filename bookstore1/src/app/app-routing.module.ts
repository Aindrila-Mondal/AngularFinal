import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{BookComponent} from './book/book.component';
import{UserComponent} from './user/user.component';
import{AddUserComponent} from './add-user/add-user.component';
import{AddCustomerComponent} from './add-customer/add-customer.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{path: 'books', component: BookComponent},
{path: 'users', component: UserComponent},
{path: 'add-users', component: AddUserComponent},
{path: 'add-customer', component: AddCustomerComponent},
{path: 'show-customer', component: ShowCustomerComponent},
{path: 'home', component: HomeComponent},
{path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
