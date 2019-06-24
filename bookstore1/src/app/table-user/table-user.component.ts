import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  elements: any = [
    {index: 1, id: 'Mark', email: 'Otto', fullName: '@mdo'},
    {index: 1, id: 'Mark', email: 'Otto', fullName: '@mdo'},
    {index: 1, id: 'Mark', email: 'Otto', fullName: '@mdo'},
  ];

  headElements = ['Index','ID', 'Email', 'Full Name','Action'];

  constructor() { }

  ngOnInit() {
  }

}
