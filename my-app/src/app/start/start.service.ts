import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Start } from './start';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class StartService {

    status: Start;
    private _startDescriptionURL = 'http://localhost:8080/items';
    private _objectnURL = 'http://10.40.157.31:8080/forms';

    constructor(private http: Http) {
            }

    getDescription() {
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

        return this.http.get(this._startDescriptionURL)
                .map(res => <Object>res.json())
                 .catch(this.handleError);
    }

    // getObject() {
    //     return this.http.get(this._startDescriptionURL)
    //         .map(res => <Object>res.json())
    //         .catch(this.handleError);
    // }

    // returnToOwner() {
    //     this._messageService.returnToOwner(this.message).subscribe(
    //       data => console.log(this.responseStatus = data),
    //       err => this.errorMsg = (JSON.parse(err._body).message),
    //       () => this.returnMsg = 'Item returned to owner!'
    //     );
    //   }

    private handleError(error: any) {
        console.log('Yup an error occurred', error);
        return Observable.throw(error.message || error);
    }

}
