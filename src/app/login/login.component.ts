import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  standalone: true, // nếu dùng standalone
  imports: [CommonModule, ReactiveFormsModule],
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
    private userService: UserService) {
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
              alert('Đăng nhập thành công!');
              this.router.navigate(['/home']);
            } else {
              alert('Đăng nhập thất bại: ' + res.message);
            }
          },
          (error) => {
            console.error('Lỗi đăng nhập:', error);
            alert('Đăng nhập thất bại');
          }
        );
    } else {
      alert('Vui lòng nhập đầy đủ thông tin đăng nhập.');
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
