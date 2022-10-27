import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createForm!: FormGroup;
  Show = false;

  @Output() CreateEvent = new EventEmitter<string>();

  onOpen() {
    this.Show = true;
  }
  constructor(private formBuilder: FormBuilder, private note: NotesService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  onSubmit() {
    this.Show = false;
    
    let reqdata = {
      Title: this.createForm.value.title,
      Discription: this.createForm.value.description,
    }
    this.note.createNote(reqdata).subscribe((response: any) => {
      console.log(response)
      this.CreateEvent.emit(response);
    })

    // After Submitting Message
    this.createForm.reset('Take a note...');
  }

  // createMessage(event: any){
  //   this.CreateNote.emit("Note has reloaded");
  // }
}
