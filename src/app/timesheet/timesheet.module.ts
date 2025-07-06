import { NgModule } from '@angular/core';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TimesheetPageComponent } from './timesheet-page/timesheet-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TimesheetPageComponent
  ],
  imports: [
    TimesheetRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
})
export class TimesheetModule { }
