import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    user: FormGroup;

    ngOnInit() {
        this.user = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    constructor(private fb: FormBuilder) {}

    onSubmit() {
        console.log(this.user.value, this.user.valid);
    }

    get emailRequired() {
        const control = this.user.get('email');
        return control.hasError('required') && control.touched;
    }

    get emailFormat() {
        const control = this.user.get('email');
        return control.hasError('email') && control.touched;
    }

    get passwordRequired() {
        const control = this.user.get('password');
        return control.hasError('required') && control.touched;
    }

}
