import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-feature-list',
    templateUrl: './feature-list.component.html'
})
export class FeatureListComponent implements OnInit {
    @Input() features: string;

    public featuresArray = [];

    ngOnInit() {
        if (this.features) {
            this.featuresArray = this.features.replace(/\[|\]/g, '').split(',');
        }
    }
}
