import {Component, Input, OnInit} from '@angular/core';
import {ApiComponent} from '../../pages/api/api.component';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input() total: number;
    @Input() currentPpage: number;
    @Input() lastPage: number;

    constructor(private api: ApiComponent) {
    }

    ngOnInit() {
    }

    prevPag() {
        return this.api.getApi( this.currentPpage - 1 <= 0 ? this.currentPpage : this.currentPpage - 1);
    }

    nextPag() {
        return this.api.getApi(this.lastPage < this.currentPpage + 1 ? this.lastPage : this.currentPpage + 1);
    }

}
