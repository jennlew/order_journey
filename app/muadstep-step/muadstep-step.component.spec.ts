import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuadstepStepComponent } from './muadstep-step.component';

describe('MuadstepStepComponent', () => {
    let component: MuadstepStepComponent;
    let fixture: ComponentFixture<MuadstepStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MuadstepStepComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MuadstepStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
