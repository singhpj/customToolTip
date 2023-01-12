import {Component, InjectionToken, Injector, Input, OnInit} from '@angular/core';
import { DemoComponent } from 'src/app/demo/demo.component';


@Component({
  selector: 'app-component-tooltip',
  templateUrl: './component-tooltip.component.html',
  styleUrls: ['./component-tooltip.component.scss']
})
export class ComponentTooltipComponent implements OnInit {

  data: any = null;
  position: 'above' | 'below' | 'left' | 'right' = 'left'
  static moveLeft:number =0
  static moveTop:number =0
   viewComponent:any =null
  injectorData: Injector
  viewPortWidthHalf = window.innerWidth/2
  @Input() set componentData(val: any) {
    this.viewComponent = val.component
    this.data = val?.data;
    this.position = val?.position;
    this.setMoveLeft(Number(val.moveLeft));
    this.setMoveTop(Number(val.moveTop)?Number(val.moveTop):0)
  }
  constructor(private inj: Injector) {
    this.injectorData = Injector.create([{
      provide:token,
      useValue: JSON.stringify(this.data)
    }], this.inj)
  }

  get getComponent(): any {
    return this.viewComponent
  }

  setMoveLeft(value: number){
   ComponentTooltipComponent.moveLeft = value
  }
  setMoveTop(value: number){
    ComponentTooltipComponent.moveTop = value
  }
  get getMoveLeft():number{
    return ComponentTooltipComponent.moveLeft
  }
  get getMoveTop():number{
    return ComponentTooltipComponent.moveTop
  }
  ngOnInit(): void {
  }

}

export const token = new InjectionToken<string>('')
