import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  animations: [
    trigger('toggleColor', [
      state('true', style({ backgroundColor: 'green' })),
      state('false', style({ backgroundColor: 'blue' })),
      transition('true => false', 
      
      animate('1000ms', 
      
      keyframes([
        style({ backgroundColor: 'red' }),
        style({ backgroundColor: 'orange' }),
        style({ backgroundColor: 'blue' }),
        style({ backgroundColor: 'green' }),
        style({ backgroundColor: 'blue' }),
      ]
      
      ))),
      transition('false => true', animate('1000ms linear'))
    ]),

    trigger('move', [
      state('true', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('false', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('true => false', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
      transition('false => true', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
    ]),

    trigger('pulse', [
      state('true', style({ transform: 'scale(1.0)', opacity: 1 })),
      state('false', style({ transform: 'scale(1.0)', opacity: 1 })),
      transition('true => false', [
        animate('100ms', style({ transform: 'scale(1)' })),
        animate('150ms', style({ transform: 'scale(1.1)' })),
        animate('200ms', style({ transform: 'scale(1)' })),
        animate('250ms', style({ transform: 'scale(1.1)' })),
        animate('350ms', style({ transform: 'scale(1)' })),
      ]),
      transition('false => true', [
        animate('100ms', style({ transform: 'scale(1.0)' })),
        animate('150ms', style({ transform: 'scale(1.1)' })),
        animate('200ms', style({ transform: 'scale(1.0)' })),
        animate('250ms', style({ transform: 'scale(1.1)' })),
        animate('350ms', style({ transform: 'scale(1.0)' })),
      ])

    ])],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public isGreen: string = `green`;

  public isMoving: boolean = false;

  public isPulsing: boolean = false;

  public toggleColor(): void {
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true';
  }
  public togglePulse(): void {
    this.isPulsing = this.isPulsing == true ? false : true;
  }

  public toggleMovimentation(): void {
    this.isMoving = this.isMoving == true ? false : true;
  }
}
