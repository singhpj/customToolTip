import { Component } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customToolTip';
  position: 'above' | 'below' | 'left' | 'right' = 'below'
  showDelay: number = 0;
  hideDelay: number = 0;

  animalData: Array<{ name: string, url: string, details: string }> = [
    {
      name: 'Cat',
      url: './assets/images/cat.jpg',
      details: `The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family`
    },
    {
      name: 'Dog',
      url: './assets/images/dog.jpg',
      details: `The dog is a domesticate descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture.`
    }

  ]
  template:any = DemoComponent
}
