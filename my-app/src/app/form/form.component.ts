import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event/event';
import { ContentService } from '../content/content.service';
import { EventService } from '../event/event.service';
import {ReactiveFormsModule, FormsModule, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [ContentService, EventService]
})
export class FormComponent implements OnInit {

    @Input() event: Event;
    showEditDialog = false;
    content;
    errorString: string;
    responseStatus: Object = [];
    returnMsg: String;
form;

    constructor(private _contentService: ContentService, private _eventService: EventService, private fb: FormBuilder) {
        console.clear();
        
                this.form = this.fb.group({
                  skills: this.buildSkills()
                });
        
                console.log(this.form.get('skills'));
                  }

                  buildSkills() {
                    let arr;
                    this._contentService.getContent()
                    .subscribe(
                    content => { arr = content.formDto.events.map(s => {
                           return this.fb.control(s.selected);
                         });
                         return this.fb.array(arr); }
                    );
                    // const arr = this.content.formDto.events.map(s => {
                    //   return this.fb.control(s.selected);
                    // });
                    // return this.fb.array(arr);
                  }

                  submit(value) {
                    
                     const f = Object.assign({}, value, {
                       skills: value.skills.map((s, i) => {
                       return {
                         id: this.content.formDto.events[i].id,
                         selected: s
                       };
                     }),
                     });
                     
                      console.log(f);
                   }

    next = (): void => {
        const cur = $('.form-panel').index($('.form-panel.active'));
        if (cur !== $('.form-panel').length - 1) {
            $('.form-panel').removeClass('active').hide();
            $('.form-panel').eq(cur + 1).fadeIn().addClass('active');
        }
    }

    previous = (): void => {
        const cur = $('.form-panel').index($('.form-panel.active'));
        if (cur !== 0) {
            $('.form-panel').removeClass('active').hide();
            $('.form-panel').eq(cur - 1).fadeIn().addClass('active');
        }
    }

    ngOnInit() {
        this.event = new Event();
        this.getContent();
        
    }

    private disableModal(): void {
        this.showEditDialog = false;
    }

    private displayEditDialog(): void {
        this.showEditDialog = !this.showEditDialog;
    }

    getContent = () => {

        this._contentService.getContent()
            .subscribe(
            items => { this.content = items; console.log(this.content); },
            error => this.errorString = <any>error
            );
        // .subscribe(
        //     data => { this.start = data; },
        //     err => console.error(err),
        //     () => console.log(this.start));
    }

    createEvent() {
        this._eventService.createEvent(this.event).subscribe(
          data => console.log(this.responseStatus = data),
          err => console.log(err),
          () => this.returnMsg = 'Item is added!'
        );
      }

      onInputChange(event: any) {
        console.log('This is emitted as the thumb slides');
      }
}


class MyRadioComponent {
    selection = {"value":"A"};
  }


