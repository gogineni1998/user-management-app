import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8081"
  /**
   * createEmployee
   */
  public createUser(user: User): Observable<User> {
    user.id = Math.floor(Math.random() * 10000).toString()
    return this.httpClient.post<User>(`${this.api}/users`, user);
  }

  /**
   * getEmployees
 : Observable<Employee[]>  */
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.api}/users`)
  }

  /**
   * deleteEmployee
userId: string   */
  public deleteUser(userId: string) {
    return this.httpClient.delete(`${this.api}/users/${userId}`)
  }

  public getUser(userId: string) {
    return this.httpClient.get<User>(`${this.api}/users/${userId}`)
  }

  /**
   * updateUser
   */
  public updateUser(user: User) {
    return this.httpClient.put<Object>(`${this.api}/users`, user);
  }
}
