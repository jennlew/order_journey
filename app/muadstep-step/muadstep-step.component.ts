import { Component, OnInit } from '@angular/core';
import { StepComponentAbstract } from 'hb-client';

import { MuadstepStepConfig } from './muadstep-step-config.interface';

@Component({
    templateUrl: './muadstep-step.component.html',
    styleUrls: ['./muadstep-step.component.css']
})

export class MuadstepStepComponent extends StepComponentAbstract implements OnInit {
    public config: MuadstepStepConfig;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
