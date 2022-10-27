import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  TrashList:any;
  NotesList:any;

  constructor(private note : NotesService) { }

  ngOnInit(): void {
    this.getallNotes();
  }
  getallNotes()
  {
    this.note.getallNotes().subscribe((result:any) => {
      console.log(result);
      this.TrashList=result.data; 
      this.TrashList.reverse();     
      this.TrashList = this.TrashList.filter((object:any) => {
        return object.trash == true;
      })
      console.log("trash list", this.TrashList);
    })
  }

  deleteMessage(event:any){
    this.getallNotes();
}

trashMessage(event:any){
  this.getallNotes();
}
  

}
