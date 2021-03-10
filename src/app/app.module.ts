import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestModule } from './test.module';

const includeTestModule = false;
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, includeTestModule ? TestModule : []],
  bootstrap: [AppComponent],
})
export class AppModule {}
