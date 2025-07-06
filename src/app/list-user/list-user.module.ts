import { NgModule } from '@angular/core';
import { ListUserComponent } from './list-user.component';
import { ListUserRoutingModule } from './list-user-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    ListUserRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
})
export class ListUserModule { }
