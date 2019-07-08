import { Component } from '@angular/core';
import { ContentstackService } from '../modules/contentstack/contentstack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cs: ContentstackService) {
  }
  title = 'angular-starter';
  entryText:any = {};
  getEntry() {
		this.cs.stack().ContentType('footer').Entry('blt2283c80248da490d').fetch()
		.then(entry => {
		       this.entryText = entry.toJSON();
    }, err => {
    });

  }
  ngOnInit() {
    this.getEntry()
  }

}
