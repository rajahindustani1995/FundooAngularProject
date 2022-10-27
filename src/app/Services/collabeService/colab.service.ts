import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class ColabService {
  token:any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }



  createColab(reqdata :any){
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    //https://localhost:44379/api/Collaboration/Create?Email=undefined&&notesID=3
    //Collaboration/Create?Email=cool%40gmail.com&notesID=1
    return this.httpService.postService(`/Collaboration/Create?Email=${reqdata.collaboratorEmail}
    &&notesID=${reqdata.notesID}`, {}, true, header)
  }

  retrieveColab(notesID:any) {
    console.log(notesID)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    //Retrieve?Email=cool%40gmail.com

    return this.httpService.getService(`/Collaboration/Retrieve?notesID=${notesID}`, true, header)
  }

  getallColab() {
    console.log()
    let header = {
      headers: new HttpHeaders({  
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }
    //Retrieve?Email=cool%40gmail.com

    return this.httpService.getService('/Collaboration/GetAllCollab', true, header)
  }

  deleteColab(collaboratorID: any) {
    console.log(collaboratorID)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.deleteService(`/Collaboration/Delete?CollaboratorID=${collaboratorID}`, true, header)
  }

}
