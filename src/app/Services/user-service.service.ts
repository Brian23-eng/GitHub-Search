import { Users } from './../Classes/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user:Users
  userUrl:'https://api.github.com/users/brian23-eng'

  constructor(private http :HttpClient) { 
    this.user = new Users
 }
}