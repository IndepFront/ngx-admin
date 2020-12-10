import { Component } from '@angular/core';

@Component({
    selector: 'indie-stake-to-vault-widget',
    templateUrl: './stake-to-vault.component.html',
    styleUrls: [
        './stake-to-vault.component.scss'
    ]
})
export class StakeToVaultComponent {    
    public bonus_entries: any[] = [
        { title: 'UNDER $75', details: '1.0% BONUS'},
        { title: 'UNDER $75', details: '1.0% BONUS'},
        { title: 'UNDER $75', details: '1.0% BONUS'},        
    ];
    constructor(){}    
}