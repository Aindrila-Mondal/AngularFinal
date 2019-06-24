import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer.model';
import {AddcustomerService} from './addcustomer.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  createForm:FormGroup;
  loading=false;
  submitted=true;
  customer: Customer=new Customer();
  constructor(private router: Router, private AddcustomerService: AddcustomerService,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
     phoneNumber : ['',[ Validators.required,Validators.minLength(10)]],
            customerName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
            emailId: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            country: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
            zipCode: ['', [Validators.required, Validators.minLength(4)]],
            address: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    });
  }
  createCustomer(): void {
    if(!this.createForm.invalid){
      this.AddcustomerService.createCustomer(this.createForm.value)
          .subscribe( data => {
            alert("customer created successfully.");
            this.router.navigate(['']);
          });
    
    }
    else
    {
      alert("enter correct details");
      console.log("error shown here")
    }

}
}
