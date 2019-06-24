import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Customer} from '../models/customer.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShowCustomerService {

  constructor(private http:HttpClient) { }
  private userUrl = '/api';

  public getCustomer()
  {
    return this.http.get<Customer[]>(this.userUrl+"/showCustomer"); 
  }
}
