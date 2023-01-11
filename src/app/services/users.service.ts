import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User, createUserDTO } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private apiUrl = 'https://damp-spire-59848.herokuapp.com/api/users';
  private apiUrl = 'http://127.0.0.1:5000/users/register';

  constructor(private httpClient: HttpClient) { }

  create(dto: createUserDTO) {
    return this.httpClient.post<User>(this.apiUrl, dto)
  }

  getAll() {
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
