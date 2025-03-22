import { NgModule } from '@angular/core';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TimesheetPageComponent } from './timesheet-page/timesheet-page.component';

@NgModule({
  declarations: [
    TimesheetPageComponent
  ],
  imports: [
    TimesheetRoutingModule,
    NgbDatepickerModule,
    FormsModule
  ],
  providers: [],
})
export class TimesheetModule { }
