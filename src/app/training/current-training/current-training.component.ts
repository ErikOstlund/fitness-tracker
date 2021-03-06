import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopTrainingComponent } from './stop-training.component';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

    progress = 0;
    timer;

    @Output()
    exitTraining = new EventEmitter();

    constructor(
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        this.timer = setInterval(() => {
            this.progress = this.progress + 10;
            // will stop at 100
            if (this.progress >= 100) {
                clearInterval(this.timer);
            }
        }, 1000);
    }

    onStop() {
        clearInterval(this.timer);
        const dialogRef = this.dialog.open(StopTrainingComponent, {
            // this is how we send data to the dialog window
            data: {
                progress: this.progress
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.exitTraining.emit();
            } else {
                this.startOrResumeTimer();
            }
        });
    }
}
