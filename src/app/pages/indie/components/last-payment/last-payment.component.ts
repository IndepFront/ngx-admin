import { Component } from '@angular/core';

@Component({
    selector: 'indie-last-payment-widget',
    templateUrl: './last-payment.component.html',
    styleUrls: [
        './last-payment.component.scss'
    ]
})
export class LastPaymentComponent {
    model: any = {
        amount: 0,
        phone: "",
        reason: ""
    };

    constructor(){}

    public get reviewStringTo(){
        return `to: ${this.model.phone}`;
    }

    public get reviewStringReason(){
        return `Hi, here is the secure link to pay John Doe the amount of ${'' + this.model.amount} for ${this.model.reason}.`;
    }
}