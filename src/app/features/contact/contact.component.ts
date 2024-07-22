import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  contactForm: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.createContactFormGroup(); 
  }
  
  
  createContactFormGroup() {
    return this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  submitContactForm(){
    const payload = {
      ...this.contactForm.getRawValue(),

    };

    if (this.contactForm.valid){
      console.log(payload);
    }
  }
}
