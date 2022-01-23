import { Injectable } from '@angular/core';

@Injectable()
export class NativeService {
  constructor() {}

  getNativeBalance() {
    return 666;
  }
}
