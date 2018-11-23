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
    total: number;
    current_page: number;
    last_page: number;

    constructor(private apiService: ApiService, public toasterService: ToasterService) {
    }

    ngOnInit() {
        this.getApi();
    }

    async getApi(currentPage = 1) {
        try {
            const api = await this.apiService.getApi(currentPage);
            this.apis = api['data'];
            this.total = api['total'];
            this.current_page = api['current_page'];
            this.last_page = api['last_page'];
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
