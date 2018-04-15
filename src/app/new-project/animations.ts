import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    color: 'darkgreen'
  })),
  state('invalid', style({
    backgroundColor: 'red',
    borderColor: 'darkred'
  })),
  transition('invalid => valid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)'
      })),
      animate(200, style({
        backgroundColor: 'lightgreen'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)'
      })),
      animate(200, style({
        backgroundColor: 'red'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
]);
