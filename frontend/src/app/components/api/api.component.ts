import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {GetApi} from '../../modules/GetApi';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    apis: GetApi[];

    constructor(private apiService: ApiService, public toasterService: ToasterService) {
    }

    ngOnInit() {
        this.getApi();
    }


    async getApi() {
        try {
            const api = await this.apiService.getApi();
            this.apis = api;
        } catch (e) {
            console.log(e);
        }

    }

    deleteApi(apis: GetApi): void {
        try {
            this.apis = this.apis.filter(h => h !== apis);
            this.apiService.deleteApi(apis).subscribe();
            this.toasterService.pop('success', 'Api Delete', 'Delete new Api');
        } catch (e) {
            this.toasterService.pop('error', 'Api Delete', 'Error');
        }

    }

}
