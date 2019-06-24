import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import{UserService} from './user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
  
  headElements = ['Index','ID', 'Email', 'FullName','Action'];

  constructor(private router: Router, private userService: UserService) {
  }
  ngOnInit() {
    console.log(" ##### edit ");
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data;
      console.log(" ##### edit2");
    });
}
deleteUserById(id: number) {
  console.log(" ##### Delete "+ id);

 if(confirm("Do You Want To delete")){
  this.userService.deleteUserById(id)
    .subscribe(
    data => {
      console.log(data);
      
      this.reloadData();
    },
    error => console.log(error));
  }
}

  reloadData() {
    location.reload(true);
    //this.bookService.getBooks();
  }
}
