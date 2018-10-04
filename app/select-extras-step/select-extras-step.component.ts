import { Component, OnInit } from '@angular/core';
import { StepComponentAbstract } from 'hb-client';

import { SelectExtrasStepConfig } from './select-extras-step-config.interface';

@Component({
    styleUrls: ['./select-extras-step.component.scss'],
    templateUrl: './select-extras-step.component.html'
})
export class SelectExtrasStepComponent extends StepComponentAbstract implements OnInit {
    public config: SelectExtrasStepConfig;
    public extras: any[];
    public selectedExtras: any[] = [];

    ngOnInit() {
        const extras = this.rootNode.findNode(this.config.extrasNode);

        if (!extras || (extras.type !== 'array')) {
            throw new Error('extrasNode must be an array of extras.');
        }

        this.extras = extras.getValue();
        console.log(this);
    }

    toggleExtra(selectedExtra: any) {
        const node = this.rootNode.findNode(this.config.selectedExtraNode);

        if (!node || node.type !== 'array') {
            throw new Error('selectedExtraNode must be an array.');
        }

        const index = this.selectedExtras.indexOf(selectedExtra);

        if (index > -1) {
            this.selectedExtras.splice(index, 1);
        } else {
            this.selectedExtras.push(selectedExtra);
        }

        node.setValue(this.selectedExtras);
    }
}
