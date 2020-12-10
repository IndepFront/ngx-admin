import { Component } from '@angular/core';

@Component({
    selector: 'indie-cashed-out-summary-widget',
    templateUrl: './cashed-out-summary.component.html',
    styleUrls: [
        './cashed-out-summary.component.scss'
    ]
})
export class CashedOutSummaryComponent {
    public entry: { amount: string, currency: string} = { currency: 'fas fa-dollar-sign', amount: '1,237.45'};

    constructor(){}    
}