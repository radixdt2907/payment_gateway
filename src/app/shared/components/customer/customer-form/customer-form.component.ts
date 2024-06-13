import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  protected customerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.customerForm = this.fb.group({
      display_name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
    });
  }

  protected isInvalid(formControlName: string, errorMsg: string): boolean {
    return (
      (this.customerForm.get(formControlName)?.touched &&
        this.customerForm.get(formControlName)?.hasError(errorMsg)) ??
      false
    );
  }

  protected handleSubmit(): void {
    for (let formControlName in this.customerForm.controls) {
      this.customerForm.get(formControlName)?.updateValueAndValidity();
      this.customerForm.get(formControlName)?.markAsTouched();
    }

    console.log(this.customerForm.valid);
    if (this.customerForm.valid)
      this._customerService
        .createCustomer(this.customerForm.value)
        .subscribe((res) => console.log(res));
  }
}
