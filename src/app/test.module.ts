import { APP_INITIALIZER, NgModule } from '@angular/core';
import * as types from './types';

function testFactory() {
  // Just to use types somewhere in the module
  console.log(types);
}

@NgModule()
export class TestModule {
  static initialize() {
    return {
      ngModule: TestModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: testFactory }],
    };
  }
}
