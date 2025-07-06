import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './service/user.service';
import { ActivatedRoute } from '@angular/router';
import { Registration } from './registration.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: false,
  styleUrl: './user.component.scss',
})
export class UserComponent {

  userForm!: FormGroup;
  formSubmitted = false;
  isEditUser = false;
  userId: number | null = null;
  userData: Registration | null = null;

  constructor(private fb: FormBuilder, 
              private userService: UserService, 
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      Id: [''],
      UserName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', Validators.required],
      IsActive: ['', Validators.required],
      UserType: ['', Validators.required],
      RegistrationDate: [null]
    });
    if (this.router.snapshot.params['userId']) {
      this.userId = this.router.snapshot.params['userId']
      this.isEditUser = true;
      this.getUserData(this.userId);
    } else {
      this.isEditUser = false;
    }
  }

  getUserData(userId: number | null) {
    this.userService.getUsers()
    .subscribe(response => {
      this.userForm.patchValue(response[0]);
    });
  }

  saveUser() {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      if (this.isEditUser && this.userId) {
        // Edit user code
      } else {
        this.userForm.controls['RegistrationDate'].patchValue(new Date());
      }
      this.userService.updateUser(this.userForm.value);
      console.log('userForm', this.userForm.value);
    } else {
      console.log('Novalid userForm', this.userForm.value);
    }
  }

}
