import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserServiceService } from '../app/Services/user-service.service'
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './About/about/about.component';
import { NavComponent  } from '../app/nav/nav.component'

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AboutComponent,
    NavComponent,
    HttpClient
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [UserServiceService,UserServiceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
