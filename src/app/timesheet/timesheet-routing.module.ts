import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetPageComponent } from './timesheet-page/timesheet-page.component';
import { TimesheetReportComponent } from './timesheet-report/timesheet-report.component';

const routes: Routes = [
  {
    path: '',
    component: TimesheetPageComponent
  },
  {
    path: 'report',
    component: TimesheetReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetRoutingModule { }
