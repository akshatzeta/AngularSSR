import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('skyAnimation', [
      transition('* => *', [
        animate('10s linear', keyframes([
          style({ backgroundPosition: '0% 0%', offset: 0 }),
          style({ backgroundPosition: '100% 0%', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class HeaderComponent { }
