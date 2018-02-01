import { Component } from '@angular/core';

@Component({
    selector: 'app-stop-training',
    template: `
        <h1 mat-dialog-title>Are you sure?</h1>
        <mat-dialog-actions>
            <!-- mat-dialog-close]="true" will return 'true' to component that called open-->
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">No</button>
        </mat-dialog-actions>
    `
})
export class StopTrainingComponent {
    constructor() {}
}
