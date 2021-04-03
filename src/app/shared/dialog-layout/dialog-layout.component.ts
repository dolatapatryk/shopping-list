import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-layout',
    templateUrl: './dialog-layout.component.html',
    styleUrls: ['./dialog-layout.component.scss']
})
export class DialogLayoutComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<any>
    ) {
    }

    ngOnInit(): void {
    }

    close() {
        this.dialogRef.close(false);
    }

}
