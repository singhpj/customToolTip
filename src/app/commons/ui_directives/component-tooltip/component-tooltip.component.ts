import { Component, Input, OnInit } from '@angular/core';
import { DemoComponent } from 'src/app/demo/demo.component';

@Component({
  selector: 'app-component-tooltip',
  templateUrl: './component-tooltip.component.html',
  styleUrls: ['./component-tooltip.component.scss']
})
export class ComponentTooltipComponent implements OnInit {

  data: any = null;
  position: 'above' | 'below' | 'left' | 'right' = 'left'
  moveLeft:number =0
  moveTop:number =0
  private viewComponent:any =null
  @Input() set componentData(val: any) {
    this.viewComponent = val.component
    this.data = val?.data,
    this.position = val?.position,
    this.moveLeft= val?.moveLeft,
    this.moveTop= val?.moveTop
  }
  constructor() {
    console.log(this.componentData)
  }

  get getComponent(): any {
    return this.viewComponent
  }
  ngOnInit(): void {
    // this.template = DemoComponent
  }

}
