import { Component, OnInit } from '@angular/core';
import {Book} from '../models/book.model';
import{BookService} from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[];
  headElements = ['Index','ID', 'Title', 'Author','Category','Price','lastUpdated','Action'];

  constructor(private router: Router, private bookService: BookService) {
  }
  ngOnInit() {
    this.bookService.getBooks()
    .subscribe( data => {
      this.books = data;
    });
}
deleteBookById(id: number) {
  console.log(" ##### Delete "+ id);

  if(confirm("Do You Want To delete")){
  this.bookService.deleteBookById(id)
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
