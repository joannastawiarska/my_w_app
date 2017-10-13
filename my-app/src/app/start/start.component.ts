import { Component , OnInit } from '@angular/core';
import {ContentService} from '../content/content.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [ContentService]
})
export class StartComponent implements OnInit {

  // start: Start[];
  content: Object;
  errorString: string;
  constructor(private _contentService: ContentService) {

  }

  ngOnInit() {
    this.getContent();

    }

    getContent = () => {

      this._contentService.getContent()
      .subscribe(
        items => {this.content = items; console.log(this.content); },
        error => this.errorString = <any>error
        );
      // .subscribe(
      //     data => { this.start = data; },
      //     err => console.error(err),
      //     () => console.log(this.start));
                    }

}
