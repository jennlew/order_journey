import { StepUxConfig } from 'hb-client/lib/step-ux-config.interface';

export interface SelectPackageStepConfig extends StepUxConfig {
    addressNode: string;
    ctaLabel: string;
    packagesNode: string;
    selectedPackageNode: string;
    subTitle: string;
}
