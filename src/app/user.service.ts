import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


const headerOption={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggin = new BehaviorSubject<boolean>(false);

  mockUrl="http://localhost:3000/users";

  constructor(private http:HttpClient) { 
    this.isLoggin.next(false)
  } 
  createUser(user:User):Observable<User>{
   return this.http.post<User>(this.mockUrl,user,headerOption);
  }
  login(user){
    return this.http.get(this.mockUrl, {
      params: new HttpParams().
        set('userName', user.userName).
        set('password', user.password)
    })
  }
}
