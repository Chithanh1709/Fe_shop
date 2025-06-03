import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { RecoverPassWordComponent } from './recover-pass-word/recover-pass-word.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'regist', component: RegistComponent},
    {path: 'recover', component: RecoverPassWordComponent},


];
