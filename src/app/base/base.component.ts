import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
})
export class BaseComponent implements OnDestroy  {
  destroy$ = new Subject<void>();
  
  init(data?:any):void {
    console.log(data);
  }

  ngOnDestroy() {
    try {
      this.destroy$.next();
      this.destroy$.complete();
    } catch (error) {
      console.log(this.destroy$,error);
    }

  }
}
