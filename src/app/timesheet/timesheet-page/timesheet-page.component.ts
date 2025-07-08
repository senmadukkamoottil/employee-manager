import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetService } from '../service/timesheet.service';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

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

  

  constructor(private http: HttpClient, 
              private timesheetService: TimesheetService,
             ) {
              this.timesheetService.getTimesheets().subscribe(response => {
                next: {
                  this.timesheets = response;
                  console.log('țttt', response);
                  // setTimeout(() => {
                    this.loadTimesheetData(this.timesheets);
                    console.log('timesheet form', this.timesheetForm.value);
                  // }, 0);

                }
                
               });
  }
  private fb = inject(FormBuilder);

  timesheetForm = this.fb.group({
    test: [''],
    daily: this.fb.array([])
   });


  ngOnInit(): void {
    
     console.log('data', this.timesheets);
     console.log('timesheet form', this.timesheetForm.value);
     
  }

  onDateSelect(date: NgbDateStruct) {
    // Perform actions when a date is selected

    const d = new Date(date.year, date.month-1, date.day);;
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  console.log('Week start selected:', new Date(d.setDate(diff)));
  // console.log('Week start selected:', date.day);
  }

  saveTimesheets() {
    console.log('Submitted form', this.timesheetForm.value);
  }

   // Helper to get the daily FormArray
   get daily(): FormArray {
    return this.timesheetForm.get('daily') as FormArray;
  }

  // Method to create a new FormGroup for a daily entry
  private createDailyEntry(dailyData?: any): FormGroup {
    return this.fb.group({
      employeeId: [dailyData ? dailyData.employeeId : '', Validators.required],
      date: [dailyData ? dailyData.date : '', Validators.required],
      hours: [dailyData ? dailyData.hours : '', [Validators.required, Validators.min(0.5), Validators.max(24)]],
      project: [dailyData ? dailyData.project : '', Validators.required],
      taskDescription: [dailyData ? dailyData.taskDescription : '', Validators.required],
      status: [dailyData ? dailyData.status : 'Pending', Validators.required]
    });
  }

  // Method to add a new daily entry to the FormArray
  addDailyEntry(): void {
    this.daily.push(this.createDailyEntry());
  }

  // Method to remove a daily entry from the FormArray
  removeDailyEntry(index: number): void {
    this.daily.removeAt(index);
  }

  // Method to load data from an API response into the form
  loadTimesheetData(data: any): void {
    this.timesheetForm.patchValue({
      test: data.test
    });

    if (data.daily) {
      data.daily.forEach((dailyItem: any) => {
        this.daily.push(this.createDailyEntry(dailyItem));
      });
    } else {
      console.log('daily empty');
    }
  }
  
}
