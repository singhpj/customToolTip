import { Component } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customToolTip';
  position:'above' | 'below' | 'left' | 'right'  = 'below'
  template:any = DemoComponent
}
