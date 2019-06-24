import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from '../models/book.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http:HttpClient) { }
  private bookUrl = '/api';

  public getBooks()
  {
    return this.http.get<Book[]>(this.bookUrl+"/showBook"); 
  }
  public deleteBookById(id: Number)
  {
    console.log(" ##### Delete "+ id);
   let baseUrl: String;
    baseUrl= this.bookUrl+'/deleteBook';
   
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
    //return this.http.delete(this.bookUrl + "/deleteBook/"+ id);
  }

}
