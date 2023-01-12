import {Component, Injector, OnInit} from '@angular/core';
import {token} from "../commons/ui_directives/component-tooltip/component-tooltip.component";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  data:any =null;
    constructor(private injectedData: Injector) {
      this.data=this.injectedData.get(token)
  }

  ngOnInit(): void {
  }

}
