import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timesheets } from './timesheets';

describe('Timesheets', () => {
  let component: Timesheets;
  let fixture: ComponentFixture<Timesheets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timesheets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timesheets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
