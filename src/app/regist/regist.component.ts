import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.regis(this.registerForm.value.username,this.registerForm.value.email, this.registerForm.value.password).subscribe(
      (res) => {
        if (res.status === 'success') {
      alert('Đăng kí thành công!');
      this.router.navigate(['']);
    } else {
      alert('Đăng kí thất bại: ' + res.message);
    }
  },
      (error) => {
        console.error('Lỗi đăng ký:', error);
        alert('Đăng ký thất bại');
      }
    );
}
}
