import { Component , Input , OnInit} from '@angular/core';
import { Event } from '../event/event';

@Component({
    selector: 'start',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input() event: Event;

    next = (): void => {
        var cur = $('.form-panel').index($('.form-panel.active'));
        if (cur != $('.form-panel').length - 1) {
            $('.form-panel').removeClass('active').hide();
            $('.form-panel').eq(cur + 1).fadeIn().addClass('active');
        }
    }

    previous = (): void => {
        var cur = $('.form-panel').index($('.form-panel.active'));
        if (cur != 0) {
            $('.form-panel').removeClass('active').hide();
            $('.form-panel').eq(cur - 1).fadeIn().addClass('active');
        }
    }

    ngOnInit() {
        this.event = new Event();
      }


    people = [{
        image: 'http://icons.iconarchive.com/icons/fasticon/nature/256/Red-Flower-icon.png',
        count: '1-20'
    },
    {
        image: 'http://icons.iconarchive.com/icons/fasticon/nature/256/Red-Flower-icon.png',
        count: '21-45'
    },
    {
        image: 'http://icons.iconarchive.com/icons/fasticon/nature/256/Red-Flower-icon.png',
        count: '46-100'
    },
    ]

}


