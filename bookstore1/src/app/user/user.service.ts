import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private userUrl = '/api';

  public getUsers()
  {
    console.log(" ##### edit3 ");
    return this.http.get<User[]>(this.userUrl+"/showAdmin"); 
  }
  public deleteUserById(id: Number)
  {
    console.log(" ##### Delete "+ id);
   let baseUrl: String;
    baseUrl= this.userUrl+'/deleteAdmin';
   
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
    //return this.http.delete(this.bookUrl + "/deleteBook/"+ id);
  }
  public createUser(user)
  {
    return this.http.post<User>(this.userUrl,user); 
  }
}
