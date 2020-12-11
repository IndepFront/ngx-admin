import { Component } from '@angular/core';

@Component({
    selector: 'indie-pending-transfer-widget',
    templateUrl: './pending-transfer.component.html',
    styleUrls: [
        './pending-transfer.component.scss'
    ]
})
export class PendingTransfersComponent {
    public pending_transfers: any[] = [
        { reason: 'Gaurantee Fund 5%', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Referral Program', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Personal Stake', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Gaurantee Fund 5%', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Referral Program', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Personal Stake', currency: 'fas fa-dollar-sign', amount: '1,237.45'}
    ];

    constructor(){}    
}