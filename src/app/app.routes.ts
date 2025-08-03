import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Timesheets } from './pages/timesheets/timesheets';
import { Users } from './pages/users/users';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'timesheets',
        component: Timesheets
    },
    {
        path: 'users',
        component: Users
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];
