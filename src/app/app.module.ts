import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormArrayComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
