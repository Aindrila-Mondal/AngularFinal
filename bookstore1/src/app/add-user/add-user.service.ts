import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http:HttpClient) { }
  private userUrl = '/api';
  public createUser(user)
  {
    let baseUrl: string;
    baseUrl= this.userUrl+"/addAdmin";
    return this.http.post<User>(baseUrl,user); 
  }
  public updateUser(user: User) {
    console.log(" ##### edit "+ user.adminId);
    let baseUrl: string;
    baseUrl= this.userUrl+"/updateAdmin";  
    return this.http.put(baseUrl + '/' + user.adminId, user);  
  }  
}
