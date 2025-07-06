import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetService } from '../service/timesheet.service';

@Component({
  selector: 'app-timesheet-page',
  templateUrl: './timesheet-page.component.html',
  standalone: false,
  styleUrl: './timesheet-page.component.scss',
})
export class TimesheetPageComponent {

  today = inject(NgbCalendar).getToday();

	model: NgbDateStruct | null = this.today;
  date = { year: 0, month: 0 };
  timesheets: any = [];

  constructor(private http: HttpClient, private timesheetService: TimesheetService) {
   
  }

  ngOnInit(): void {
    this.timesheetService.getTimesheets().subscribe(response => {
      this.timesheets = response;
     });
  }

  onDateSelect(date: NgbDateStruct) {
    // Perform actions when a date is selected

    const d = new Date(date.year, date.month-1, date.day);;
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  console.log('Week start selected:', new Date(d.setDate(diff)));
  // console.log('Week start selected:', date.day);
  }
}
