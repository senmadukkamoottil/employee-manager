import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: false,
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'bi bi-speedometer2',
      label: 'Dashboard',
    },
    {
      routeLink: 'timesheet',
      icon: 'bi bi-calendar-week',
      label: 'Timesheets',
    },
    {
      routeLink: 'user',
      icon: 'bi bi-person-add',
      label: 'Add user',
    },
    {
      routeLink: 'list-user',
      icon: 'bi bi-people',
      label: 'View users',
    },

  ];
  // {
  //   routeLink: 'timesheet/report',
  //   icon: 'bi-clipboard-data',
  //   label: 'Reports',
  // },

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
