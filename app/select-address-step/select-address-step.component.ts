import { Component, OnInit } from '@angular/core';
import { StepComponentAbstract } from 'hb-client';

import { SelectAddressStepConfig } from './select-address-step-config.interface';

@Component({
    styleUrls: ['./select-address-step.component.scss'],
    templateUrl: './select-address-step.component.html'
})
export class SelectAddressStepComponent extends StepComponentAbstract implements OnInit {
    public config: SelectAddressStepConfig;

    public addresses: any[] | undefined;
    public selectedAddress: any;
    public submitting = false;

    ngOnInit() {
        const addresses = this.rootNode.findNode(this.config.addressesNode);

        if (!addresses || addresses.type !== 'array') {
            throw new Error('addressesNode must be an array of addresses.');
        }

        this.addresses = addresses.getValue();
    }

    toggleAddress(selectedAddress: any) {
        const node = this.rootNode.findNode(this.config.selectedAddressNode);

        if (!node || node.type !== 'object') {
            throw new Error('selectedAddressNode must be an object.');
        }

        if (this.selectedAddress === selectedAddress) {
            this.selectedAddress = undefined;

            node.resetValue();
        } else {
            this.selectedAddress = selectedAddress;

            node.setValue(selectedAddress);
        }
    }
}
