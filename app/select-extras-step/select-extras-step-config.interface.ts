import { StepUxConfig } from 'hb-client';

export interface SelectExtrasCategory {
    label: string;
    nodeName: string;
    nodeValue: string;
}

export interface SelectExtrasStepConfig extends StepUxConfig {
    addCtaLabel: string;
    categories: SelectExtrasCategory[];
    extrasNode: string;
    removeCtaLabel: string;
    selectedExtraNode: string;
    submitLabel: string;
    subTitle: string;
}
