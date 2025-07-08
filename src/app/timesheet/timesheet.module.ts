import { NgModule } from '@angular/core';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimesheetPageComponent } from './timesheet-page/timesheet-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TimesheetReportComponent } from './timesheet-report/timesheet-report.component';

@NgModule({
  declarations: [
    TimesheetPageComponent,
    TimesheetReportComponent
  ],
  imports: [
    TimesheetRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class TimesheetModule { }
