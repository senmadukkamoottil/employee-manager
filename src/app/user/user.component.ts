import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: false,
  styleUrl: './user.component.scss',
})
export class UserComponent {

  userForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    
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
  }

  saveUser() {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      this.userForm.controls['RegistrationDate'].patchValue(new Date());
      console.log('userForm', this.userForm.value);
    } else {
      console.log('Novalid userForm', this.userForm.value);
    }
  }

}
