import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { User } from '../Classes/user'
import { environment } from './../../environments/environment';
import  'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User; 


  constructor(private http:HttpClient) {

    // this.username = "brian23-eng";
    this.user = new User("","","",0,0);
  }

  userInfo(){
    interface ApiResponse{
      login: string;
      public_repos: string;
      avatar_url : any;
      html_url: string;
      following : number;
      followers : number;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUserUrl).toPromise().then(response =>{
        this.user.username = response.login
        this.user.avatar = response.avatar_url
        this.user.html_url = response.html_url
        this.user.followers = response.followers
        this.user.following = response.following

        resolve()
      })
        
    
    })
  }
  }


