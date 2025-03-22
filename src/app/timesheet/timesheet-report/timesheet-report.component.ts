import { Component, HostListener, inject } from '@angular/core';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timesheet-report',
  templateUrl: './timesheet-report.component.html',
  standalone: false,
  styleUrl: './timesheet-report.component.scss',
})
export class TimesheetReportComponent {

  today = inject(NgbCalendar).getToday();

	model: NgbDateStruct | null = this.today;
  date = { year: 0, month: 0 };

  ngOnInit(): void {
  }
}
