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
  }
  }


