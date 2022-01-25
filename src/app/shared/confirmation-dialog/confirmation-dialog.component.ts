import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ToastService } from '../../services/toast-service';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
    title: string;
    message: string;
    action: () => void | Observable<HttpResponse<any>>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        private toastService: ToastService
    ) {
        this.title = this.data.title;
        this.message = this.data.message;
        this.action = this.data.action;
    }

    submit() {
        if (this.action) {
            const result = this.action();
            if (result instanceof Observable) {
                this.subscribeResult(result);
            }
        } else {
            this.close(true);
        }
    }

    private subscribeResult(result: Observable<HttpResponse<any>>) {
        result.subscribe(
            () => {
                this.toastService.success();
                this.close(true);
            },
            () => {
                this.toastService.error();
                this.close(false);
            }
        );
    }

    close(result = false) {
        this.dialogRef.close(result);
    }
}
