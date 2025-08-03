import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss'
})


export class CustomSidenav {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'calendar_today',
      label: 'Timesheets',
      route: 'timesheets'
    },
    {
      icon: 'supervisor_account',
      label: 'Users',
      route: 'users'
    },
  ]);

  sidenavCollapsed = signal(false);
  @Input() set collpased(value: boolean) {
    this.sidenavCollapsed.set(value);
  }

  profilePictureSize = computed(() => {
    return this.sidenavCollapsed() ? 32 : 100;
  });
}
