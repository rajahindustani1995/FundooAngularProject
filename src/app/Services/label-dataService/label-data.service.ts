import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelDataService {
  
  constructor() { }

  // public mydata : any;

  // public status: boolean= false;
  private labelData = new BehaviorSubject([]);
  labelList = this.labelData.asObservable();
  
  addLabel(Label:any){
    console.log(Label)
    this.labelData.next(Label)
  }

  
}
