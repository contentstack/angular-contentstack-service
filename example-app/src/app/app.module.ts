import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentstackModule} from '../modules/contentstack/contentstack.module';

import { AppComponent } from './app.component';

const Config = {
  'api_key': 'blt5c8ae78bb08b8d85',
  'access_token': 'blt5cab5afe529b37c0',
  'environment': 'development'
 };
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentstackModule.initializeApp(Config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
