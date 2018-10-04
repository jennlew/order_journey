import { Component, ViewChild } from '@angular/core';
import {BpeEvent, HbClientService, StepTemplateOutletDirective} from 'hb-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild(StepTemplateOutletDirective) public stepTemplateOutlet: StepTemplateOutletDirective;

    public state: 'bpe' | 'done' | 'error' | 'flow' = 'flow';
    public bpe: BpeEvent;

    // constructor(private hbClientService: HbClientService) {
    //     this.hbClientService.setRefId('01-641');
    // }

    public restart(): void {
        this.state = 'flow';
        this.stepTemplateOutlet.restart();
    }
}
