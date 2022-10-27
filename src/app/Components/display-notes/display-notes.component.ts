import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/dataService/data.service';
import { NotesService } from 'src/app/Services/notesService/notes.service';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes', 
  templateUrl: './display-notes.component.html', 
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
   
  PinList:any;
  isPin = true;
  conditionView:boolean = false;
  subscription!: Subscription;

  isDisplaynoteComponent=false;
  @Input() NoteArray:any;
  @Input() notedata:any;

  @Output() ColorEvent = new EventEmitter<string>();
  @Output() TrashEvent = new EventEmitter<string>();
  @Output() ArchiveEvent = new EventEmitter<string>();
  @Output() UnarchiveEvent = new EventEmitter<string>();
  @Output() DeleteEvent = new EventEmitter<string>();
  @Output() PinNoteEvent = new EventEmitter<string>(); 
  @Output() UpdateEvent = new EventEmitter<string>();

  search:any ='';
  constructor(public dialog: MatDialog, private dataService : DataService , private note:NotesService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message=>{
      console.log(message)
      this.search = message
    })

    this.dataService.viewList.subscribe((View:any)=>{
      console.log(View)
      this.conditionView=View
    })
   // console.log("Notes Display Successful", this.NoteArray);
   this.getallNotes()

  let Comp = this.route.snapshot.component;

  if(Comp == GetAllNotesComponent)
  {
    this.isDisplaynoteComponent=true;
  }
  }

  PinNotes(notedata:any){
    console.log(notedata.notesID);
    
    this.note.pinNotes(notedata.notesID).subscribe((response:any) => {
      
      console.log("Note Pinneded Successfully", response);
      this.PinNoteEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  
  }
  UnPinNotes(notedata:any){
    console.log(notedata.notesID);
    
    this.note.pinNotes(notedata.notesID).subscribe((response:any) => {
      console.log("Note Unpinneded Successfully", response);
      this.PinNoteEvent.emit(response);
    }, (error: any) => {
      console.log(error);
    })
  
  } 

  getallNotes()
  {
    this.note.getallNotes().subscribe((result:any) => {
      console.log(result);
      this.PinList=result.data; 
      this.PinList.reverse();     
      this.PinList = this.PinList.filter((object:any) => {
        return object.pin == true && object.trash == false;
      })
      console.log("Pinned Notes list", this.PinList);
    })
  }
  
  ViewNote(show:any){
    this.dataService.viewNote(this.conditionView)
    if(show == true){
      return 'display-note1';
      // this.conditionView = 'display-note1'
      // this.dataService.viewNote(this.conditionView)
    }
    else{
      return 'display-note2';

      // this.conditionView = 'display-note2'
      // this.dataService.viewNote(this.conditionView)
    }

  }


  openDialog(note:any):void {
    const dialogRef = this.dialog.open(UpdateNoteComponent,{
      width: '45%',
      height: 'auto',
      autoFocus:false,
      data:note,
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed:' +result);
      this.UpdateEvent.emit(result);
    });
    
  }
  colorMessage(event: any){
    this.ColorEvent.emit("color changed reloaded");
  }

  trashMessage(event:any){
    this.TrashEvent.emit("Reload Page after trash")
  }

  archiveMessage(event:any){
    this.ArchiveEvent.emit("reload done archive")
  }

  unarchiveMessage(event:any){
    this.UnarchiveEvent.emit("Reload page after unarchive")
  }

  deleteMessage(event:any){
    this.DeleteEvent.emit("Reload ");
  }

  pinMessage(event: any){
    this.PinNoteEvent.emit("Changes reloaded");
  }
  updateMessage(event: any){
    this.UpdateEvent.emit("Changes reloaded");
  }
}
