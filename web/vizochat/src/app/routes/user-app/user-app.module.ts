import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAppRoutingModule } from './user-app-routing.module';
import { Err404Component } from './errors/err404/err404.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from 'src/app/shared/services/auth.service';


@NgModule({
  declarations: [
    Err404Component,
    LayoutComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserAppRoutingModule
  ]
})
export class UserAppModule { 
  constructor(private authService:AuthService){
    this.authService.startSessTimout()
  }

}
