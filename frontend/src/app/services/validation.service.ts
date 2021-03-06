import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ValidationService {

    validRequired(getName, form): string {
        const {controls} = form;
        return (controls[getName].touched) && controls[getName].invalid;
    }

    validMessage(tagName, form, messages) {
        const {controls} = form;
        for (const message in messages[tagName]) {
            if (Object.keys(controls[tagName].errors)[0] === message) {
                return messages[tagName][Object.keys(controls[tagName].errors)[0]];
            }
        }
    }
}
