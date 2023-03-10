import {ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { ComponentTooltipComponent } from './component-tooltip.component';

@Directive({
  selector: '[componentTooltip]'
})
export class ComponentTooltipDirective implements OnDestroy{
  private componentRef: any = null;
  private userData: any = null;
  private position: 'above' | 'below' | 'left' | 'right' = 'below';
  private showDelay: number = 0 // get value in second
  private hideDelay:number = 1 // get value in second

  @Input() set componentTooltip(values: {
    component: any,
    userData?:any,
    position?: 'above' | 'below' | 'left' | 'right' ,
    showDelay?: number,
    hideDelay?:number
  }) {
      this.componentRef = values?.component;
      this.position = values.position?values.position:'below';
      this.showDelay = values.showDelay?values.showDelay:0;
      this.hideDelay = values.hideDelay?values.hideDelay:1
      this.userData = values?.userData
  }
  toolTipRef:ComponentRef<any>|null  = null
  timer: number = 0;
  hideTooltip: boolean= true;
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('mouseenter')
  mouseEnter():void {
    this.createToolTip()
  }
  @HostListener('touchstart',['$event'])
  Touch($event: TouchEvent):void {
    $event.preventDefault()
    this.createToolTip()
  }
  @HostListener('mouseleave')
  mouseLeave(): void {
    this.hideTooltip = true
  }
  @HostListener('mouseover')
  mouseOver(): void{

  }

  createToolTip(): void{
    this.viewContainerRef.clear()
    window.setTimeout(()=>{
    this.toolTipRef = this.viewContainerRef.createComponent(ComponentTooltipComponent)
    this.setTooltipProperties()

    this.hideTooltip = false
    this.timer = window.setInterval(() => {
      if (this.hideTooltip) {
        this.destroyTooltip()
      }
    },this.hideDelay * 100)
    this.toolTipRef.location.nativeElement.onmouseover = () => {
      this.hideTooltip = false
    }
    this.toolTipRef.location.nativeElement.onmouseleave = () => {
      this.hideTooltip = true
    }
    }, this.showDelay * 100)
  }

  private setTooltipProperties() {
    if (this.componentRef != null) {
      let moveLeft, moveTop = 0

      const { left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();
      switch (this.position) {
        case 'below': {
          moveLeft = Math.round((right - left) / 2 + left);
          moveTop = Math.round(bottom);
          break;
        }
        case 'above': {
          moveLeft = Math.round((right - left) / 2 + left);
          moveTop = Math.round(top);
          break;
        }
        case 'right': {
          moveLeft = Math.round(right);
          moveTop = Math.round(top + (bottom - top) / 2);
          break;
        }
        case 'left': {
          moveLeft = Math.round(left);
          moveTop = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
      this.toolTipRef?.setInput('componentData', {
        component: this.componentRef,
        position: this.position,
        data: JSON.stringify(this.userData),
        moveLeft: moveLeft,
        moveTop: moveTop
      })

    }

  }

  destroyTooltip(): void{
    // this.toolTipRef?.setInput('componentData', {
    //   component: this.componentRef,
    //   position: this.position,
    //   data: JSON.stringify(''),
    //   moveLeft: 0,
    //   moveTop: 0
    // })
    // this.componentRef = null;
    // this.position ='below';
    // this.showDelay = 0;
    // this.hideDelay = 1
    // this.userData = ''

    this.toolTipRef?.destroy()
    this.viewContainerRef.clear()
    window.clearInterval(this.timer)
  }
  ngOnDestroy(): void {
    this.destroyTooltip();
  }

}

