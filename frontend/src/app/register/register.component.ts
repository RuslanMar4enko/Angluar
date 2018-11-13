import {Component, OnInit} from '@angular/core';
import {User} from '../modules/User';
import {UserService} from '../service/user.service';
import {ToasterService} from 'angular2-toaster';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    user: User = new User();

    constructor(private userService: UserService, public toasterService: ToasterService) {
    }

    ngOnInit() {

    }

   async addUser() {
        try {
            const user = await this.userService.addUser(this.user);
            return user;
        } catch (e) {
            this.toasterService.pop('error', 'Add User', 'Email or Name is required');
        }

    }

}
