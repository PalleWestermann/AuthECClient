import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  form: any;

    constructor(public formBuilder: FormBuilder){
      this.form = this.formBuilder.group({
        fullName : [''],
        email : [''],
        password : [''],
        confirmPassword : ['']
      });

    }

  onSubmit() {
    console.log(this.form.value);

  }

}
