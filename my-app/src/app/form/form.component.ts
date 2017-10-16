import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Event, Organizer } from '../event/event';
import { ContentService } from '../content/content.service';
import { EventService } from '../event/event.service';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [ContentService, EventService]
})
export class FormComponent implements OnInit {

    @Input() event: Event;
    @Input() organizer: Organizer;
    showEditDialog = false;
    content;
    errorString: string;
    responseStatus: Object = [];
    returnMsg: String;
    eventForm: FormGroup;
    myOptions = [];


    constructor(private _contentService: ContentService, private _eventService: EventService, private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.eventForm = this.fb.group({
            eventTypeIds: '',
            organizer: this.fb.group({
                name: '',
                surname: '',
                phoneNumber: '',
                email: ''
            }),
            nights: '',
            eventTime: '',
            eventTypes: '',
            maxCost: '',
            rooms: '',
            eventSizeId: '',
            additionalRequirements: '',
            days: '',
            season: ''
        });
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
        console.log(this.content.formDto.events);
    }

    private disableModal(): void {
        this.showEditDialog = false;
    }

    private displayEditDialog(): void {
        this.showEditDialog = !this.showEditDialog;
    }

    getContent() {

        this._contentService.getContent()
            .subscribe(
            (content: Object) => {
            this.content = content as Object;
            console.log(this.content.formDto.events);
            this.myOptions = this.content.formDto.events;
            },
            error => this.errorString = <any>error
            );
    }

    createEvent() {
        const formModel = this.eventForm.value;
        console.log(formModel);
        this._eventService.createEvent(formModel).subscribe(
            data => console.log(this.responseStatus = data),
            err => console.log(err),
            () => this.returnMsg = 'Item is added!'
        );
    }

    onInputChange(event: any) {
        console.log('This is emitted as the thumb slides');
    }
}


