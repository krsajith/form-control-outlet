import {
  Component,
  forwardRef,
  Injector,
  ViewContainerRef
} from "@angular/core";
import { NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SimpleInputControl } from "../simple-input-control/simple-input-control.component";



@Component({
  selector: "app-form-control-outlet",
  template: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlOutletComponent),
      multi: true
    }
  ]
})
export class FormControlOutletComponent {
  constructor(
    public injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) { }

  public ngOnInit(): void {
    const ngControl = this.injector.get(NgControl);
    const componentRef = this.viewContainerRef.createComponent(
      SimpleInputControl
    );
    ngControl.valueAccessor = componentRef.instance;
  }
}
