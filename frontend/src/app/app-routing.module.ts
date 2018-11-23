import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {ApiComponent} from './pages/api/api.component';
import {ApiCreateComponent} from './pages/api-create/api-create.component';
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
