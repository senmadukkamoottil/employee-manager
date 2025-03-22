import { Component, HostListener, inject } from '@angular/core';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  ngOnInit(): void {
  }
}
