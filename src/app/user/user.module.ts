import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    UserRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})
export class UserModule { }
