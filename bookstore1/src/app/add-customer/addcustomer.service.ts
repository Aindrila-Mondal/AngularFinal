import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Customer} from '../models/customer.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddcustomerService {

  constructor(private http:HttpClient) { }
  private userUrl = '/api';
  public createCustomer(customer)
  {
    let baseUrl: string;
    baseUrl= this.userUrl+"/addCustomer";
    return this.http.post<Customer>(baseUrl,customer); 
  }
}
