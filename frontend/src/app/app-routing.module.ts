import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ApiComponent} from './components/api/api.component';
import {ApiCreateComponent} from './components/api-create/api-create.component';
import {AuthGuardService as AuthGuard} from './services/auth/auth-guard.service';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'api', component: ApiComponent, canActivate: [AuthGuard]},
    {path: 'api/create', component: ApiCreateComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
