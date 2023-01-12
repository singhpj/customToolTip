import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {token} from "../commons/ui_directives/component-tooltip/component-tooltip.component";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {
  data:any =null;
    constructor(private injectedData: Injector) {
      this.data=JSON.parse(this.injectedData.get(token))

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

    this.data = null
  }


}
