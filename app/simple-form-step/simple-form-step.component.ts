import { Component } from '@angular/core';

import { StepComponentAbstract } from 'hb-client';

import { SimpleFormStepConfig } from './simple-form-step-config.interface';

@Component({
    templateUrl: './simple-form-step.component.html',
})
export class SimpleFormStepComponent extends StepComponentAbstract {
    public config: SimpleFormStepConfig;
    public submitting = false;

    submitForm() {
        if (!this.rootNode.validate()) {
            this.submitting = true;
            this.submit();
        }
        return true;
    }
}
