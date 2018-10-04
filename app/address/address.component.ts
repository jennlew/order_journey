import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-address',
    styles: [':host { display: block }'],
    template: `
    {{ address.subBuildingName }}
    {{ address.buildingNumber }}
    {{ address.line1 }}
    {{ address.line2 }}
    {{ address.postTown }}
    {{ address.county }}
    {{ address.postcode }}
`
})
export class AddressComponent {
    @Input() address: any;
}
