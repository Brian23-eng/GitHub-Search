import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from '../app/user-profile/user-profile.component';
import { AboutComponent } from '../app/About/about/about.component'


const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
