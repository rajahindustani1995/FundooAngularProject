import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  token:any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }



  createLabel(reqdata :any){
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('/Label/CreateLabel', reqdata, true, header)
  }

  getallLabels() {
    //console.log();
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }

    return this.httpService.getService('/Label/Retrieve', true, header)
  }

  deleteLabel(labelID: any) {
    console.log(labelID)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    //https://localhost:44379/api/Label/Delete?LabelID=7
    return this.httpService.deleteService(`/Label/Delete?labelID=${labelID}`, true, header)
  }

  updateLabel(reqdata: any, labelID:any) {
    //console.log(reqdata.labelName)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    //return this.httpService.putService(`/Label/Update?LabelID=${labelID}`, reqdata, true, header);

    return this.httpService.putService(`/Label/Update?labelID=${labelID}`, reqdata, true, header);
  }

  addLabel(notesID:any,labelName:any){
    console.log(notesID,labelName)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService(`/Label/AddLabel?notesID=${notesID}&labelname=${labelName}`, {}, true, header)
  }
  
  //https://localhost:44379/api/Label/AddLabel?notesID=1&labelname=TATA
}
