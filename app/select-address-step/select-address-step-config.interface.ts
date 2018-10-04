import { SimpleFormStepConfig } from 'hb-client/lib/simple-form-step/simple-form-step-config.interface';

export interface SelectAddressStepConfig extends SimpleFormStepConfig {
    addressesNode: string;
    selectedAddressNode: string;
}
