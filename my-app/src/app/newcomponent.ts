import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MyComponent {
  title = 'app';
  
    b = $('.previous').click(function () {
        var cur = $('.form-panel').index($('.form-panel.active'));
        if (cur!=0) {
            $('.form-panel').removeClass('active');
            $('.form-panel').eq(cur-1).addClass('active');
        }
    });
    
    c = $('.next').click(function () {
        var cur = $('.form-panel').index($('.form-panel.active'));
        if (cur!=$('.form-panel').length-1) {
            $('.form-panel').removeClass('active');
            $('.form-panel').eq(cur+1).addClass('active');
        }

        
});

}
