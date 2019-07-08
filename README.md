# Angular Contentstack Service
The Angular Contentstack module is a Contentstack JavaScript SDK wrapper for Angular, which means that you can use all methods and queries of JavaScript SDK.

**Note**: This Angular Contentstack module is applicable for Angular 2 and above.

There are many Angular boilerplates available, but using `angular-cli` is an easier and faster option. Let’s understand how to use this.

## Initial Setup

Run the following command to install `angular-cli` globally:

    npm install -g @angular/cli

Next, you need to create an Angular service example (named `contentstack-service-example`) and build and serve it. To do this, use the following command lines:

    ng new contentstack-service-example
    cd contentstack-service-example
    ng serve

This starts your basic `angular-cli` app.

## Add and Configure Contentstack Angular Module
You need to start by installing the JavaScript SDK. Navigate to the root folder and run the following command:

    npm install --save contentstack

Use the `contentstack` module from the above repo (in lib folder) and add it in your application’s `src/modules/contentstack` folder.

Next, you need to configure the module. Add the `contentstack` module along with the config into your main App module:

>     import { BrowserModule } from '@angular/platform-browser';
>     import { NgModule } from '@angular/core';
>     import { ContentstackModule} from '../modules/contentstack/contentstack.module';
>     
>     import { AppComponent } from './app.component';
>     
>     const Config = {
>       'api_key':'blt12345789',
>       'access_token': 'blt12345789',
>       'environment': 'development'
>      };
>      
>     
>     @NgModule({
>       declarations: [
>         AppComponent
>       ],
>       imports: [
>         BrowserModule,
>         ContentstackModule.initializeApp(Config)
>       ],
>       providers: [],
>       bootstrap: [AppComponent]
>     })
>     export class AppModule { }

This adds the Contentstack Angular module in your App module along with the config required for retrieving data from Contentstack.

Now, you can use the Angular Contentstack service anywhere in the app.

## Use the Service

You can use the Contentstack service as follows:

>     import { Component } from '@angular/core';
>     import { ContentstackService } from '../modules/contentstack/contentstack.service';
>     
>     @Component({
>       selector: 'app-root',
>       templateUrl: './app.component.html',
>       styleUrls: ['./app.component.css']
>     })
>     export class AppComponent {
>         constructor(private cs: ContentstackService) {}
>         title = 'angular-starter';
>         entryText:any = {};
>         getEntry() {
>		        this.cs.stack().ContentType('footer').Entry('blt2283c80248da490d').fetch()
>		        .then(entry => {
>		            this.entryText = entry.toJSON();
>               }, err => {
>               });
>
>         }
>         ngOnInit() {
>           this.getEntry()
>         }
>     }

Try out all methods and queries mentioned in the [JavaScript SDK Query](https://www.contentstack.com/docs/platforms/javascript-browser/api-reference/) documentation.


## Example

Check out the example covered in the `example-app` folder in the repo above to understand the service well.


