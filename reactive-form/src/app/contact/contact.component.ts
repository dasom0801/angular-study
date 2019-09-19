import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PersonalData, ContactRequest } from 'src/models/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  countries = ['USA', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.createFormGroupWithBuilder();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      personalData: this.formBuilder.group(new PersonalData()),
      requestType: '',
      text: ''
    })
  }

  onSubmit() {
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    console.log(result);
  }
  
  revert() {
    this.contactForm.reset({
      personalData: new PersonalData(),
      requestType: '',
      text: ''
    });
  }
}
