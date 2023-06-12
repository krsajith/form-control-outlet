import { Component, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NgForm } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-base-conrol',
  template: `
    <p>
      base-conrol works!
    </p>
  `,
  styleUrls: ['./base-conrol.component.css'],
  // viewProviders: [ { provide: ControlContainer, useExisting: ControlContainer } ]
})
export abstract class BaseConrolComponent extends BaseComponent implements ControlValueAccessor {

  onChange = (_: any) => { }
  onTouch = () => { }

  constructor(@Optional() @SkipSelf() public group: ControlContainer) {
    super();
    console.log(group);
  }
  abstract writeValue(obj: any): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
