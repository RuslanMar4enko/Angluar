import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {GetApi} from '../modules/GetApi';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    apis: GetApi[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getApi();
  }


  async getApi(): Promise<void> {
      const api =  await this.apiService.getApi();
      this.apis = api;
  }

    deleteApi(apis: GetApi): void {
        this.apis = this.apis.filter(h => h !== apis);
        this.apiService.deleteApi(apis).subscribe();
    }

}
