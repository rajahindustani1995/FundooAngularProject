import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  archiveList:any;

  constructor(private note : NotesService) { }

  ngOnInit(): void {
    this.getallNotes();
  }
  getallNotes()
  {
    this.note.getallNotes().subscribe((result:any) => {
      console.log(result);
      this.archiveList=result.data; 
      this.archiveList.reverse();     
      this.archiveList = this.archiveList.filter((object:any) => {
        return object.archive == true && object.trash == false;
      })
      console.log("Archive list", this.archiveList);
    })
  }
  unarchiveMessage(event:any){
    this.getallNotes();
  }

  
  colorMessage(event:any){
    this.getallNotes();
  }

  trashMessage(event:any){
    this.getallNotes();
  }
}
