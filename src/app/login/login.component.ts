import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../Service/user.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true, // nếu dùng standalone
  imports: [CommonModule, ReactiveFormsModule ], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Sửa: styleUrls thay vì styleUrl

})
export class LoginComponent {
  loginForm: FormGroup;

  // Danh sách tài khoản giả lập
  users = [
    { username: 'admin', password: '1' },
    { username: 'user1', password: 'password' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toast: ToastrService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          (res) => {
            if (res.status === 'success') {
              this.toast.success('Đăng nhập thành công!', 'Thông báo');
              this.router.navigate(['/home']);
            } else {
              this.toast.error('Đăng nhập thất bại: ' + res.message, 'Thông báo');
            }
          },
          (error) => {
            console.error('Lỗi đăng nhập:', error);
            this.toast.error('Đăng nhập thất bại', 'Thông báo');
          }
        );
    } else {
      this.toast.warning('Vui lòng điền đầy đủ thông tin', 'Thông báo');
    }
  }

  // Chuyển trang lấy lại mật khẩu
  RecoverPass() {
    this.router.navigate(['/recover']);
  }

  // Chuyển trang đăng ký
  Regist() {
    this.router.navigate(['/regist']);
  }
}
