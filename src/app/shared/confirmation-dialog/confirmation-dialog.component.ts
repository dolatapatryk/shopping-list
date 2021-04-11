import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
    title: string;
    message: string;
    afterSubmitAction: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ConfirmationDialogComponent>
    ) {
        this.title = this.data.title;
        this.message = this.data.message;
        this.afterSubmitAction = this.data.action;
    }

    submit() {
        this.afterSubmitAction();
        this.close();
    }

    close() {
        this.dialogRef.close();
    }
}
