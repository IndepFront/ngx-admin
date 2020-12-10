import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { CashOutComponent } from './components/cash-out/cash-out.component';
import { CashedOutSummaryComponent } from './components/cashed-out-summary/cashed-out-summary.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { LastPaymentComponent } from './components/last-payment/last-payment.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { PendingTransfersComponent } from './components/pending-transfer/pending-transfer.component';
import { StakeToVaultComponent } from './components/stake-to-vault/stake-to-vault.component';
import { VaultComponent } from './components/vault/vault.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NbCardModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        InboxComponent,
        VaultComponent,
        CashOutComponent,
        CashedOutSummaryComponent,
        NewPaymentComponent,
        LastPaymentComponent,
        StakeToVaultComponent,
        PendingTransfersComponent,
    ],
    exports: [
        InboxComponent,
        VaultComponent,
        CashOutComponent,
        CashedOutSummaryComponent,
        NewPaymentComponent,
        LastPaymentComponent,
        StakeToVaultComponent,
        PendingTransfersComponent,
    ]
})
export class IndieModule {
    constructor(private title: Title){
        title.setTitle('Indie - Dashboard');
    }
}