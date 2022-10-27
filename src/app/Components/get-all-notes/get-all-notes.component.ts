import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  NotesList:any;

  constructor(private note : NotesService) { }

  ngOnInit(): void {
    this.getallNotes();
  }
  getallNotes()
  {
    this.note.getallNotes().subscribe((result:any) => {
      console.log(result);
      this.NotesList = result.data
      //console.log(this.NotesList);
      this.NotesList.reverse();
      console.log("NotesList", this.NotesList);
      this.NotesList=this.NotesList.filter((object: any) => {
        return object.trash == false && object.archive == false;
        
      })
      console.log(this.NotesList);
    });

  }

  colorMessage(event:any){
    this.getallNotes();
  }

  trashMessage(event:any){
    this.getallNotes();
  }
  archiveMessage(event:any){
    this.getallNotes();
  }

  deleteMessage(event:any){
    this.getallNotes();
  }
  pinMessage(event:any){
    this.getallNotes();
  }
  
  createMessage(event: any) {
    console.log("Note Created", event);
    this.getallNotes()
  }
  updateMessage(event: any) {
    console.log("Note Updated", event);
    this.getallNotes()
  }

  
}
