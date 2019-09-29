import { User } from './../../Classes/user';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './../../Service/profile.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  providers: [ProfileService],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User;
  username :string;

  constructor(private profileService:ProfileService, private httpClient:HttpClient) { 
  
  }

  ngOnInit() {
  }

}
