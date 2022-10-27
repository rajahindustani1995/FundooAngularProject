import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LabelDataService } from 'src/app/Services/label-dataService/label-data.service';
import { LabelService } from 'src/app/Services/labelService/label.service';
import { NotesService } from 'src/app/Services/notesService/notes.service';
import { ArchiveNoteComponent } from '../archive-note/archive-note.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { TrashNoteComponent } from '../trash-note/trash-note.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  Label:any;
  labelName:any;
  subscription!: Subscription;
  @Input() notedata:any;

  @Output() ColorEvent = new EventEmitter<string>();
  @Output() TrashEvent = new EventEmitter<string>();
  @Output() UntrashEvent = new EventEmitter<string>();
  @Output() ArchiveEvent = new EventEmitter<string>();
  @Output() UnarchiveEvent = new EventEmitter<string>();
  @Output() DeleteEvent = new EventEmitter<string>();

  isDisplaynoteComponent=false;
  isArchiveComponent=false;
  isTrashComponent=false;

  colorChoice = [{code:"#ffffff", name:"White"},{code:"#FF6347", name:"Orange"},{code:"#FF4500", name:"Red"},
    {code:"#FFFF00", name:"Yellow"},{code:"#ADFF2F", name:"Green"},{code:"#43C6DB", name:"Blue"},
  {code:"#728FCE", name:"Teal"},{code:"#2B65EC", name:"DarkBlue"},{code:"#D16587", name:"Purple"},
  {code:"#F9A7B0", name:"Pink"},{code:"#E2A76F", name:"Brown"},{code:"#D3D3D3", name:"Gray"}];
  
  constructor(private note:NotesService,private route: ActivatedRoute, private Route: Router, 
              public label: LabelService,public labeldata : LabelDataService , public dialog: MatDialog) { }

  ngOnInit(): void {

    this.labeldata.labelList.subscribe(Label=> {
      //console.log(Label)
      this.Label = Label
      })

    let Comp = this.route.snapshot.component;


    if(Comp == GetAllNotesComponent)
    {
      this.isDisplaynoteComponent=true;
    }

    if(Comp == TrashNoteComponent)
    {
      this.isTrashComponent=true;
    }

    if(Comp == ArchiveNoteComponent)
    {
      this.isArchiveComponent=true;
    }
  }

  SendToTrash(){
    console.log(this.notedata.notesID);
  
    this.note.trashNotes(this.notedata.notesID).subscribe((response:any) => {
      console.log("Note Trashed Successfully", response);
      this.TrashEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  
  }

  Untrashed(){
    console.log(this.notedata.notesID);
  
    this.note.trashNotes(this.notedata.notesID).subscribe((response:any) => {
      console.log("Note Untrashed Successfully", response);
      this.UntrashEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  
  }

  onArchive(){
    console.log(this.notedata.notesID);
    
    this.note.archiveNotes(this.notedata.notesID).subscribe((response:any) => {
      console.log("Note Archived Successfully", response);
      this.ArchiveEvent.emit(response)
    }, (error: any) => {
      console.log(error);
    })
  
  }

  Unarchive(){
    console.log(this.notedata.notesID);
    
    this.note.archiveNotes(this.notedata.notesID).subscribe((response:any) => {
      console.log("Note Unarchived Successfully", response);
      
      this.UnarchiveEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  }

  DeleteNote(){
    console.log(this.notedata.notesID);
    
    this.note.deleteNotes(this.notedata.notesID).subscribe((response:any) => {
      console.log("Note Deleted Successfully", response);
      this.DeleteEvent.emit(response)
    }, (error: any) => {
      console.log(error);
    })
  
  }

  changeColor(color:any)
  {
    
    console.log(color);
    this.note.colorChoice(this.notedata.notesID,color).subscribe((response:any)=>{
      console.log(response);
      this.ColorEvent.emit(response);
    },(error: any) => {
      console.log(error);
    })
  }

  onAddLabel(labelName:any){
    console.log(this.notedata.notesID,labelName);
    
    this.label.addLabel(this.notedata.notesID,labelName).subscribe((response:any)=>{
      console.log(response);
    },(error: any) => {
      console.log(error);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      //width: '250px',
      data: {notesID: this.notedata.notesID , }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
