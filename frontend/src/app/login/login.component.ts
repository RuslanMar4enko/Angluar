import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../modules/User';
import {ValidationService} from '../services/validation.service';
import {UserService} from '../services/user.service';
import {ToasterService} from 'angular2-toaster';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user: User = new User();

    constructor(private validService: ValidationService, private userService: UserService, public toasterService: ToasterService) {
    }

    loginForm = new FormGroup({
        email: new FormControl(this.user.email, [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl(this.user.password, [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    messages = {
        email: {
            required: 'text required',
            email: 'text email',
            default: 'text required'
        },
        password: {
            required: 'password required',
            minlength: 'password minLength 6',
        }
    };

    error(tagName: String): string {
        return this.validService.validRequired(tagName, this.loginForm);
    }

    getMessageValid(tagName): string {
        return this.validService.validMessage(tagName, this.loginForm, this.messages);
    }

    ngOnInit() {

    }

    async onSubmit() {
        try {
            const user = await this.userService.login(this.loginForm.value);
            localStorage.setItem('token', user.token);
        } catch (e) {
            this.toasterService.pop('error', 'Login User', 'Email or Password incorrect');
        }
    }
}
