import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from '../event/event';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class EventService {

    private _createEventURL = 'http://localhost:8080/create_item';

    constructor(private http: Http) {
    }

    createEvent(event: Event) {

        return this.http.post(this._createEventURL, event, {
        })
            .map(res => res.json());
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
