import { Component } from '@angular/core';

@Component({
    selector: 'indie-inbox-widget',
    templateUrl: './inbox.component.html',
    styleUrls: [
        './inbox.component.scss'
    ]
})
export class InboxComponent {
    public inbox_entries: any[] = [
        { reason: 'Payment - 01', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 02', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 03', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 04', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 05', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-left'},
        { reason: 'Payment - 06', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 07', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-right'},
        { reason: 'Payment - 08', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-up'},
        { reason: 'Payment - 09', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 10', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 11', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 12', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 13', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-left'},
        { reason: 'Payment - 14', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-down'},
        { reason: 'Payment - 15', currency: 'fas fa-dollar-sign', amount: '1,237.45', status: 'fa fa-arrow-right'}        
    ];

    constructor(){}    
}