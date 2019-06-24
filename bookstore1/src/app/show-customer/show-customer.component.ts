import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer.model';
import {ShowCustomerService} from './show-customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customer:Customer[];
  
  headElements = ['Index','Id','FullName', 'EmailId','PhoneNumber','Country','Action'];

  constructor(private router: Router, private ShowCustomerService: ShowCustomerService) {
  }
  ngOnInit() {
    this.ShowCustomerService.getCustomer()
    .subscribe( data => {
      this.customer = data;
    });
}
}
