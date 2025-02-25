import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private toggle = new BehaviorSubject<any>(true);
  currentToggle = this.toggle.asObservable();
  constructor() {}
  setToggle(receivedToggle: boolean) {
    this.toggle.next(receivedToggle);
    return receivedToggle;
  }
}
