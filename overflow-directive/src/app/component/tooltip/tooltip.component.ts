import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `{{text}}`,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text: string;
}
