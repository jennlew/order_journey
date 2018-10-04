import { Component, OnInit } from '@angular/core';
import { StepComponentAbstract } from 'hb-client';

import { SelectTvStepConfig } from './select-tv-step-config.interface';

@Component({
    styleUrls: ['./select-tv-step.component.scss'],
    templateUrl: './select-tv-step.component.html'
})
export class SelectTvStepComponent extends StepComponentAbstract implements OnInit {
    public config: SelectTvStepConfig;

    public tvs: any[] | undefined;

    ngOnInit() {
        const tvs = this.rootNode.findNode(this.config.tvsNode);

        if (!tvs || (tvs.type !== 'array' && tvs.type !== 'object')) {
            throw new Error('tvsNode must be an array of tvs.');
        }

        if (tvs.type === 'array') {
            this.tvs = tvs.getValue();
        } else {
            this.tvs = [tvs.getValue()];
        }
    }

    selectTv(selectedTv: any) {
        const node = this.rootNode.findNode(this.config.selectedTvNode);

        if (!node || node.type !== 'object') {
            throw new Error('selectedTvNode must be an object.');
        }

        node.setValue(selectedTv);

        this.submit();
    }
}
