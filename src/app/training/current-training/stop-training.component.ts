import { Component, Inject } from '@angular/core';

// data passed into Angular Material Dialog window is in this MAT_DIALOG_DATA object
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-stop-training',
    template: `
        <h1 mat-dialog-title>Are you sure?</h1>
        <mat-dialog-content>
            <p>You completed {{ passedData.progress }}%</p>
        </mat-dialog-content>
        <mat-dialog-actions>
            <!-- [mat-dialog-close]="true" will return 'true' to component that called open-->
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        </mat-dialog-actions>
    `
})
export class StopTrainingComponent {
    constructor(
        // must inject the MAT_DIALOG_DATA object and make public
        // then can use in the template
        @Inject(MAT_DIALOG_DATA)
        public passedData: any
    ) {}
}
