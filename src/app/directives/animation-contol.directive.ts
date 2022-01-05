import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnimationContol]'
})
export class AnimationContolDirective {

  constructor(private el:ElementRef) {
    var p='paused'
    setInterval(() => {
      el.nativeElement.style.animationPlayState=p
      if(p=="running"){p='paused'}
      else{p="running"}
    }, 5000);
  }

}
