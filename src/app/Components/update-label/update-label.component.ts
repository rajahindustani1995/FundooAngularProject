import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/Services/labelService/label.service';
import { LabelNoteComponent } from '../label-note/label-note.component';

@Component({
  selector: 'app-update-label',
  templateUrl: './update-label.component.html',
  styleUrls: ['./update-label.component.scss']
})
export class UpdateLabelComponent implements OnInit {

  labelID:any
  labelName:any
  cursor: any
  
  constructor(public dialogRef: MatDialogRef<UpdateLabelComponent>, public label: LabelService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.labelName= this.data.labelName,
    this.labelID=this.data.labelID
    
  }
  

   DeleteLabel(LabelList:any) {
     console.log(LabelList.labelID);
    
    this.label.deleteLabel(LabelList.labelID).subscribe((response: any) => {
      console.log("Label Deleted Successfully", response);
    }, (error: any) => {
      console.log(error);
    })

  }

  UpdateLabel(LabelList:any) { 
    console.log(LabelList.labelID)
    console.log(LabelList.labelName)

    let reqData = {
      labelID: LabelList.labelID,
      labelName: LabelList.labelName,
    }
    console.log(reqData);
    this.label.updateLabel(reqData,LabelList.labelID).subscribe((response: any) => {
      console.log(response);
    })
  
  }
}
 