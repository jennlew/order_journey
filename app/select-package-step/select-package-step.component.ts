import { Component, OnInit } from '@angular/core';
import { StepComponentAbstract } from 'hb-client';

import { SelectPackageStepConfig } from './select-package-step-config.interface';

@Component({
    styleUrls: ['./select-package-step.component.scss'],
    templateUrl: './select-package-step.component.html'
})
export class SelectPackageStepComponent extends StepComponentAbstract implements OnInit {
    public config: SelectPackageStepConfig;

    public address: any;
    public packages: any[] | undefined;

    ngOnInit() {
        const packages = this.rootNode.findNode(this.config.packagesNode);

        if (!packages || (packages.type !== 'array' && packages.type !== 'object')) {
            throw new Error('packagesNode must be an array of packages.');
        }

        if (packages.type === 'array') {
            this.packages = packages.getValue();
        } else {
            this.packages = [packages.getValue()];
        }

        this.address = this.rootNode.findNode(this.config.addressNode);
    }

    selectPackage(selectedPackage: any) {
        const node = this.rootNode.findNode(this.config.selectedPackageNode);

        if (!node || node.type !== 'object') {
            throw new Error('selectedPackageNode must be an object.');
        }

        node.setValue(selectedPackage);

        this.submit();
    }
}
