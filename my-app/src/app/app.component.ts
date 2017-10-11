import { Component } from '@angular/core';
declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wolimierz Appliaction';
  
//  a =  $('.previous').click(function () {
//     var cur = $('.form-panel').index($('.form-panel.active'));
//     if (cur!=0) {
//         $('.form-panel').removeClass('active');
//         $('.form-panel').eq(cur-1).addClass('active');
//     }
// });

// next = (): void => {
//   console.log('aaa');
//   var cur = $('.form-panel').index($('.form-panel.active'));
//   if (cur!=$('.form-panel').length-1) {
//       $('.form-panel').removeClass('active');
//       $('.form-panel').eq(cur+1).addClass('active');
// }
// b = $('.next').click(function () {
//     var cur = $('.form-panel').index($('.form-panel.active'));
//     if (cur!=$('.form-panel').length-1) {
//         $('.form-panel').removeClass('active');
//         $('.form-panel').eq(cur+1).addClass('active');
//     }
// });

}

