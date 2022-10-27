import { HttpHeaders } from '@angular/common/http';
import { Injectable, LOCALE_ID } from '@angular/core';
import { GetAllNotesComponent } from 'src/app/Components/get-all-notes/get-all-notes.component';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }
  createNote(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }

    return this.httpService.postService('/Notes/Create', reqdata, true, header)

  }

  getallNotes() {
    //console.log();
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token
      })
    }

    return this.httpService.getService('/Notes/Retrieve', true, header)
  }

  updateNotes(updatedata: any, notesID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putService(`/Notes/Update?NotesID=${notesID}`, updatedata, true, header);
  }

  archiveNotes(notesID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putService(`/Notes/Archive?NotesID=${notesID}`, {}, true, header);
  }

  pinNotes(notesID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putService(`/Notes/Pin?NotesID=${notesID}`, {}, true, header);
  }

  trashNotes(notesID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putService(`/Notes/Trash?NotesID=${notesID}`, {}, true, header);
  }

  deleteNotes(notesID: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService(`/Notes/Delete?NotesID=${notesID}`, true, header)
  }

  colorChoice(notesID: any, color: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Color?NotesID=${notesID}&Color=${color}`, color, true, header)

  }

  

}
