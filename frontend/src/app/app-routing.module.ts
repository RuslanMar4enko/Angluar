import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ApiComponent} from './api/api.component';
import {AuthGuardService as AuthGuard} from './services/auth/auth-guard.service';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'api', component: ApiComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
