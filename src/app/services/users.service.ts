import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User, createUserDTO } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/users/';

  constructor(private httpClient: HttpClient) { }

  create(dto: createUserDTO) {
    return this.httpClient.post<User>(this.apiUrl, dto)
  }

  getAll() {
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
