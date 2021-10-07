import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {

  formArray = new FormArray([]);

  onInsertItem(): void {
    this.formArray.push(new FormControl());
  }

  onDeleteItem(index: number): void {
    this.formArray.removeAt(index);
  }

  get controls(): FormControl[] {
    return this.formArray?.controls as FormControl[];
  }
}
