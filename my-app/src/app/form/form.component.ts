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
    eventArray = [];


    constructor(private _contentService: ContentService, private _eventService: EventService, private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.eventForm = this.fb.group({
            organizer: this.fb.group({
                name: ['', Validators.required],
                surname: ['', Validators.required],
                phoneNumber: '',
                mail: ''
            }),
            nights: '',
            eventTime: '',
            eventTypeIds: this.returnEvent(),
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
    }

    private disableModal(): void {
        this.showEditDialog = false;
    }

    private displayEditDialog(): void {
        this.showEditDialog = !this.showEditDialog;
    }

    returnEvent() {
        return this.eventArray;
    }

    select(event) {
        if (event.selected === false) {
            event.selected = true;
            this.eventArray.push(event.globalId);
            console.log(this.eventArray);
            this.eventForm.value.eventTypeIds = this.eventArray;
        }
        else {
            event.selected = false;
            this.eventArray.pop();
            console.log(this.eventArray);
            this.eventForm.value.eventTypeIds = this.eventArray;
        }
    }
    getContent() {

        this._contentService.getContent()
            .subscribe(
            (content: Object) => {
            this.content = content;
            console.log(this.content.formDto.events);
            },
            error => this.errorString = <any>error
            );
    }

    createEvent() {
        this.eventForm.value.eventTypeIds = this.eventArray;
        const formModel = this.eventForm.value;
        console.log(formModel);
        this._eventService.createEvent(formModel).subscribe(
            data => console.log(this.responseStatus = data),
            err => console.log(err),
            () => this.returnMsg = 'Event is created!'
        );
    }

    onInputChange(event: any) {
        console.log('This is emitted as the thumb slides');
    }
}


