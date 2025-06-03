import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-recover-pass-word',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recover-pass-word.component.html',
  styleUrl: './recover-pass-word.component.css'
})
export class RecoverPassWordComponent {
  recoverForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.recoverForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required], // Thêm dòng này
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.recover(this.recoverForm.value.email, this.recoverForm.value.password).subscribe(
      (res) => {
        if (res.status === 'success') {

          alert('Đổi mật khẩu thành công!');
          this.router.navigate(['']);
        } else {
          alert('Đổi mật khẩu thất bại: ' + res.message);
        }
      },
      (error) => {
        console.error('Lỗi đổi mật khẩu:', error);
        alert('Đổi mật khẩu thất bại');
      }
    );
  }

}
