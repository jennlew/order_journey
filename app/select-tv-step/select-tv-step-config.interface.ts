import { StepUxConfig } from 'hb-client/lib/step-ux-config.interface';

export interface SelectTvStepConfig extends StepUxConfig {
    ctaLabel: string;
    tvsNode: string;
    selectedTvNode: string;
    subTitle: string;
}
