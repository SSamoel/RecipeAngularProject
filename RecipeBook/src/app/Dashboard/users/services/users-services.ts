import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  private apiUrl = `${environment.apiBaseUrl}users`

  constructor(private http : HttpClient){}

  getAllUsers(limit:number , skip:number):Observable<{users : User[], total:number}>{
    return this.http.get<{users : User[] , total:number}>(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }

  getSingleUser(id : number):Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }

  addUser(data:any){
    return this.http.post(`${this.apiUrl}/add`, data);
  }

  updateUser(id:number , data:Partial<User>):Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${id}` , data)
  }

  deleteUser(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
