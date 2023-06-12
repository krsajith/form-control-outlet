import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleInputControl } from './simple-input-control/simple-input-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlOutletComponent } from './form-control-outlet/form-control-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleInputControl,
    FormControlOutletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
