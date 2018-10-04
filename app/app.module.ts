import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HB_CLIENT_CONFIG, HB_NODE_COMPONENTS, HB_STEP_TEMPLATES, HbClientModule } from 'hb-client';

import { environment } from '../environments/environment';

import { AddressComponent } from './address/address.component';
import { AppComponent } from './app.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { InlineSearchNodeComponent } from './inline-search-node/inline-search-node.component';
import { PriceDisplayNodeComponent } from './price-display-node/price-display-node.component';
import { SelectAddressStepComponent } from './select-address-step/select-address-step.component';
import { SelectExtrasStepComponent } from './select-extras-step/select-extras-step.component';
import { SelectPackageStepComponent } from './select-package-step/select-package-step.component';
import { SelectTvStepComponent } from './select-tv-step/select-tv-step.component';
import { SimpleFormStepComponent } from './simple-form-step/simple-form-step.component';
import { MuadstepStepComponent } from './muadstep-step/muadstep-step.component';

@NgModule({
    declarations: [
        AddressComponent,
        AppComponent,
        FeatureListComponent,
        InlineSearchNodeComponent,
        PriceDisplayNodeComponent,
        SelectAddressStepComponent,
        SelectExtrasStepComponent,
        SelectPackageStepComponent,
        SelectTvStepComponent,
        SimpleFormStepComponent,
        MuadstepStepComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HbClientModule
    ],
    providers: [
        {
            provide: HB_CLIENT_CONFIG,
            useValue: {
                api: environment.apiUrl,
                locale: 'en-gb',
            },
        }, {
            provide: HB_NODE_COMPONENTS,
            useValue: [
                {
                    component: InlineSearchNodeComponent,
                    contentType: undefined,
                    format: undefined,
                    type: 'string',
                    uiHint: 'inline-search'
                },
                {
                    component: PriceDisplayNodeComponent,
                    type: 'number',
                    uiHint: 'priceDisplay'
                }
            ],
            multi: true
        }, {
            provide: HB_STEP_TEMPLATES,
            useValue: {
                selectAddress: SelectAddressStepComponent,
                selectExtras: SelectExtrasStepComponent,
                selectPackage: SelectPackageStepComponent,
                selectTv: SelectTvStepComponent,
                simpleForm: SimpleFormStepComponent
            },
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        InlineSearchNodeComponent,
        PriceDisplayNodeComponent,
        SelectAddressStepComponent,
        SelectExtrasStepComponent,
        SelectPackageStepComponent,
        SelectTvStepComponent,
        SimpleFormStepComponent,
        MuadstepStepComponent,
    ]
})
export class AppModule { }
