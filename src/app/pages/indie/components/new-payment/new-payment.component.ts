import { Component } from '@angular/core';

@Component({
    selector: 'indie-new-payment-widget',
    templateUrl: './new-payment.component.html',
    styleUrls: [
        './new-payment.component.scss'
    ]
})
export class NewPaymentComponent {
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