import { Directive } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appWholePageListen]'
})

export class WholePageListenDirective {
  constructor() {

    $('body').on('click', function (e) {
      // console.log(e);
      // $('.level1:has(ul)').each(function () {
      //   $('.level1 ul').toggle();
      // });
    });
  }
}
