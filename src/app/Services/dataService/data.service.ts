import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({ 
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
 
  changeMessage(message:any){
    console.log(message)
    this.messageSource.next(message)
  }
   
  private viewData = new BehaviorSubject("");
  viewList = this.viewData.asObservable();

  viewNote(View:any){
    //console.log(View)
    this.viewData.next(View)
  }
}
