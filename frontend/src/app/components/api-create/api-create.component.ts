import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {GetApi} from '../../modules/GetApi';
import {ApiService} from '../../services/api/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-api-create',
    templateUrl: './api-create.component.html',
    styleUrls: ['./api-create.component.scss']
})
export class ApiCreateComponent implements OnInit {

    selectedFile: File;

    constructor(private validService: ValidationService, private apiService: ApiService, private router: Router) {
    }

    api = new GetApi();

    apiForm = new FormGroup({
        name: new FormControl(this.api.name, [
            Validators.required,
            Validators.minLength(3),
        ]),
        image: new FormControl(this.api.image, [
            Validators.required,
        ]),
        description: new FormControl(this.api.description, [
            Validators.required,
            Validators.minLength(3),
        ]),
    });

    messages = {
        name: {
            required: 'Name is required',
            minlength: 'Name min length 3',
        },
        image: {
            required: 'Image is required',
        },
        description: {
            required: 'Description is required',
            minlength: 'Description min length 3',
        },
    };

    error(tagName: String): string {
        return this.validService.validRequired(tagName, this.apiForm);
    }

    getMessageValid(tagName): string {
        return this.validService.validMessage(tagName, this.apiForm, this.messages);
    }

    onFileChanged(event): void {
        this.selectedFile = event.target.files[0];
    }

    onCreate(): void {
        try {
            const uploadData = new FormData();
            uploadData.append('name', this.apiForm.value.name);
            uploadData.append('image', this.selectedFile);
            uploadData.append('description', this.apiForm.value.description);
            this.apiService.createApi(uploadData);
            this.router.navigate(['/api']);
        } catch (e) {
            console.log(e);
        }

    }

    ngOnInit() {
    }
}
