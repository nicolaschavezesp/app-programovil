import { trigger, transition, animate, style } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('1000ms ease-out', style({ transform: 'translateX(0%)' })),
  ]),
]);
