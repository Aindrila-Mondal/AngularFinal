import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {

  elements: any = [
    {index: 1, id: 'Mark', title:'abc', author:'ss', category:'ss', price:100 ,lastUpdated:'33'},
    {index: 1, id: 'Mark', title:'abc', author:'ss', category:'ss', price:10 ,lastUpdated:'33'},
    {index: 1, id: 'Mark', title:'abc', author:'ss', category:'ss', price:100 ,lastUpdated:'33'},
    
  ];

  headElements = ['Index','ID', 'Title', 'Author','Category','Price','lastUpdated','Action'];
  constructor() { }

  ngOnInit() {
  }

}
