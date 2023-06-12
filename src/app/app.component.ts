import { AfterViewInit, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, NgControl } from '@angular/forms';
import { SimpleInputControl } from './simple-input-control/simple-input-control.component';
import values from "../assets/sample-data";
// import collapseGroup from 'src/assets/js/repport.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // viewProviders: [
  //   {
  //     provide: ControlContainer,
  //     useExisting: FormGroupDirective
  //   }
  // ],   
})
export class AppComponent {
  collapse(data: any,event:any) {
    
    
    
    
    
    // collapseGroup
    data.expanded = !data.expanded;
    const display =  data.expanded ? 'block' : 'none'
    event.target.style.gridColumn = data.expanded ?  '' : 'span 3 / span 3'
    event.target.style.backgroundColor = data.expanded ?  '' : 'var(--theme-color-1)'

    event.target.style.setProperty('--theme-color-1', 'green');

    const css = window.document.styleSheets[0];

    
    
    const index = css.insertRule(`
    .${data.id.split(' ')[0]}  {                
        display: ${display};
        transition: all 0.75s;
    }
`, css.cssRules.length);


  }

  @ViewChild('form', { read: ViewContainerRef }) form!: ViewContainerRef;

  data: any[] = [...values];

  profileForm = new FormGroup({
    name: new FormControl(''),
  });


  add() {
    // console.log(this.form.injector.get<FormGroup>(FormGroup));

    const componentRef = this.form.createComponent(
      SimpleInputControl
    );




    // console.log(componentRef);

    // this.renderer.setAttribute(componentRef,"formControlName","name");



    // const ngControl = componentRef.injector.get(NgControl);
    // ngControl.valueAccessor = componentRef.instance;
  }







}
