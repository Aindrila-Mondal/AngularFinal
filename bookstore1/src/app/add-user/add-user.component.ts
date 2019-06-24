import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import{AddUserService} from './add-user.service';
import { Router } from '@angular/router';
import {  FormGroup , FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  createForm:FormGroup;
  loading=false;
  submitted=true;
    
   user: User=new User();
  constructor(private router: Router, private AddUserService: AddUserService,private formBuilder: FormBuilder)
   {
   }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      adminId: ['', Validators.required],
            adminName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  createUser(): void {
    if(!this.createForm.invalid){
    this.AddUserService.createUser(this.createForm.value)
        .subscribe( data => {
          alert("User created successfully.");
          this.router.navigate(['']);
        });
  
  }
  else
  {
    alert("enter details first");
    console.log("error shown here")
  }
  }

  updateUser(): void {
    if(!this.createForm.invalid){
    console.log(" ##### edit "+ this.user.adminId);
    this.AddUserService.updateUser(this.createForm.value)
        .subscribe( data => {
          alert("User updated successfully.");
          this.router.navigate(['']);
        });
  
  }
  else
  {
    alert("enter  correct details first");
    console.log("error shown here")
  }

  }
}
