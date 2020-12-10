import { Component } from '@angular/core';

@Component({
    selector: 'indie-vault-widget',
    templateUrl: './vault.component.html',
    styleUrls: [
        './vault.component.scss'
    ]
})
export class VaultComponent {
    public vault_entries: any[] = [
        { reason: 'Gaurantee Fund 5%', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Referral Program', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Personal Stake', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Gaurantee Fund 5%', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Referral Program', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Personal Stake', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Personal Stake', currency: 'fas fa-dollar-sign', amount: '1,237.45'},
        { reason: 'Gaurantee Fund 5%', currency: 'fas fa-dollar-sign', amount: '1,237.45'}
    ];

    constructor(){}    
}