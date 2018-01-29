import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Containers/Components will split up later
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// 3rd party modules
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    providers: []
})
export class AuthModule {}
