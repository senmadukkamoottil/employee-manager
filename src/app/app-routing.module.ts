import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user',
    loadChildren: () => import('./user/user.module').then(m=>m.UserModule)
  },
  { path: 'list-user',
    loadChildren: () => import('./list-user/list-user.module').then(m=>m.ListUserModule)
  },
  { path: 'timesheet',
    loadChildren: () => import('./timesheet/timesheet.module').then(m=>m.TimesheetModule)
  },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
