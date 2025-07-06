import { Component } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { Observable } from 'rxjs';
import { Registration } from '../user/registration.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  standalone: false,
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent {

  userList: Registration[] = [];

  constructor(private registration: UserService) {

  }

  ngOnInit(): void {
    this.registration.getUsers()
    .subscribe(response => {
      this.userList = response;
    });
  }
}
