import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { CustomerModel } from '../../models/customer.model';
import PlanModel from '../../models/plan.model';

@Injectable({
  providedIn: 'root',
})
export class CurrSelectedDataService {
  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      customer: this.fb.control('', [Validators.required]),
      plan: this.fb.control('', [Validators.required]),
      addon: this.fb.array([]),
    });

    this.form.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  public updateCustomer(customer: CustomerModel | null): void {
    this.form.get('customer')?.setValue(customer);
  }

  public updatePlan(plan: PlanModel | null): void {
    this.form.get('plan')?.setValue(plan);
    const arr = this.form.get('addon') as FormArray;
    arr.clear();
  }

  public addAddon(addon_code: string): void {
    const arr = this.form.get('addon') as FormArray;
    arr.push(this.fb.control(addon_code));
  }

  public removeAddon(addon_code: string): void {
    const arr = this.form.get('addon') as FormArray;
    const removeAddonIndex: number = [...arr.value].findIndex(
      (curr_addon_code) => curr_addon_code === addon_code
    );
    if (removeAddonIndex !== -1) arr.removeAt(removeAddonIndex);
  }

  public resetSelectedData(): void {
    this.form.get('customer')?.setValue(null);
    this.form.get('plan')?.setValue(null);
    const arr = this.form.get('addon') as FormArray;
    arr.clear();
  }

  public hasInAddon(addon_code: string): boolean {
    const arr = this.form.get('addon') as FormArray;

    return arr?.value.includes(addon_code) ?? false;
  }
}
