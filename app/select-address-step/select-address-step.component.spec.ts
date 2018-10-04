import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAddressStepComponent } from './select-address-step.component';

describe('SelectAddressStepComponent', () => {
    let component: SelectAddressStepComponent;
    let fixture: ComponentFixture<SelectAddressStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SelectAddressStepComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectAddressStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
