import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentService {

    private _startDescriptionURL = 'http://localhost:8080/items';
     private _contentURL = 'http://10.40.157.31:8080/content';
    // private _contentURL = 'http://localhost:4200/src/app/content/content.json';

    constructor(private http: Http) {
            }

    getContent() {
        // this.http.get(this._startDescriptionURL)
        // .map((res: Response) => res.json()).catch(this.handleError)
        // .subscribe(
        //   data => { this.status = data; },
        //   err => console.error(err),
        //   () => console.log(this.status));
        //   return this.status;

        //   return this.http.get(this._startDescriptionURL)
        //   .map((res: Response) => res.json())
        //   .catch(this.handleError);

        return this.http.get(this._contentURL)
                .map(res => <Object>res.json())
                 .catch(this.handleError);
    }

    // getObject() {
    //     return this.http.get(this._startDescriptionURL)
    //         .map(res => <Object>res.json())
    //         .catch(this.handleError);
    // }



    private handleError(error: any) {
        console.log('Yup an error occurred', error);
        return Observable.throw(error.message || error);
    }



}
