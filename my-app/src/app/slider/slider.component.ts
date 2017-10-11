import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'slider-demo',
  templateUrl: 'slider.component.html',
})
export class SliderComponent {
  demo: number;
  val: number = 50;
  min: number = 0;
  max: number = 100;
  disabledValue = 0;
}