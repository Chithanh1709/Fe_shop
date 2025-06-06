import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistComponent } from './regist/regist.component';
import { RecoverPassWordComponent } from './recover-pass-word/recover-pass-word.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'register', 
    component: RegistComponent,
    data: { title: 'Đăng ký tài khoản' } 
  },
  { 
    path: 'recover-password', 
    component: RecoverPassWordComponent,
    data: { title: 'Khôi phục mật khẩu' } 
  },
  // Route mặc định khi không khớp với bất kỳ route nào
  { 
    path: '**', 
    redirectTo: 'login' 
  }
];