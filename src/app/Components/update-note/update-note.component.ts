import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  NoteID: any;
  updateNoteForm!: FormGroup;
  title: any;
  description: any
  submitted = false;
  
  @Output() UpdateEvent = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private note: NotesService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title,
      this.description = this.data.discription
  }

  get f() { return this.updateNoteForm.controls; }

  onSubmit() {
    this.submitted = true;

    let updatedata = {
      title: this.title,
      discription: this.description,
      notesID: this.NoteID,
    }
    console.log(updatedata);

    this.note.updateNotes(updatedata, this.data.notesID).subscribe((response: any) => {
      console.log(response)
      this.UpdateEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  }


}


