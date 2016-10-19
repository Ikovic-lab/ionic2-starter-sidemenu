import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

/**
 * This is a custom Angular error handler. By default, we report
 * errors to the IonicDevServer if running, but you can add
 * other 3rd party error handling services here.
 */
class MyErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    IonicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ]
})
export class AppModule {}
